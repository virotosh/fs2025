import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Pressable, View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../contexts/AuthContext";

const Login = ({navigation}) => {
    const { isLoggedIn, login } = useAuth();
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const storeToken = async (token) => {
		try {
			await AsyncStorage.setItem("token",token);
		} catch (e) {
			console.log("Error! While saving token");
		}
	};
    const storeTokenExpire = async (tokenExpire) => {
		try {
			await AsyncStorage.setItem("tokenExpire",""+tokenExpire);
		} catch (e) {
			console.log("Error! While saving tokenExpire");
		}
	};

	const handleLogin = async () => {
		try {
			const res = await axios.post(
				"http://192.168.0.102:5000/api/users/login",
				{ username, password },
				{ withCredentials: true }
			);
			if (res.status === 200) {
                const token = res.headers['set-cookie'][0].split("; ")
                .find((row) => row.startsWith("jwt="))
                ?.split("=")[1];
                const tokenExpire=Date.parse(res.headers['set-cookie'][0].split("; ")
                .find((row) => row.startsWith("Expires"))
                ?.split("=")[1]);
                console.log(token);
                console.log(tokenExpire);
                storeToken(token);
                storeTokenExpire(tokenExpire);
                login();
                navigation.navigate("Home");
			}
		} catch (err) {
			console.error(err);
		} finally {
		}
	};
    return (
      <SafeAreaView style={styles.loginContainer}>
			<Text style={styles.heading}>Login</Text>
			<View style={styles.formContainer}>
				<Text style={styles.formLabel}>Username</Text>
				<TextInput
					placeholder='Username'
					style={styles.input}
					autoCorrect={false}
					onChangeText={(value) => setUsername(value)}
				/>
				<Text style={styles.formLabel}>Password</Text>
				<TextInput
					placeholder='Password'
					style={styles.input}
                    secureTextEntry={true}
					autoCorrect={false}
					onChangeText={(value) => setPassword(value)}
				/>

				<Pressable style={styles.loginbutton} onPress={handleLogin}>
					<View>
						<Text style={styles.loginbuttonText}>Login</Text>
					</View>
				</Pressable>
			</View>
		</SafeAreaView>
    );
}
export default Login;

const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 20,
	},
	formContainer: {
		width: "100%",
		padding: 15,
	},
	input: {
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 15,
		marginBottom: 15,
		borderRadius: 3,
	},
	formLabel: {
		marginBottom: 3,
	},
	loginbutton: {
		backgroundColor: "green",
		width: 150,
		padding: 15,
		alignItems: "center",
		borderRadius: 5,
	},
	loginbuttonText: {
		color: "#fff",
	},
});