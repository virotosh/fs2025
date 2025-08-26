import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Pressable, View, Text, StyleSheet } from "react-native";

const Login = ({navigation}) => {
    return (
      <SafeAreaView style={styles.loginContainer}>
			<Text style={styles.heading}>Login</Text>
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