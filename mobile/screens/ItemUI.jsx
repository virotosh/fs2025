import { View, Text, StyleSheet, Image, Button } from "react-native";

const ItemUI = ({ title, description, price }) => {
	return (
		<View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
			<Image
				style={styles.image}
				resizeMode='contain'
				source={require('../images/product.png')}
			/>
			<View style={styles.itemDetails}>
				<Text style={styles.itemDescription}>{description}</Text>
				<View>
					<Text style={styles.itemPrice}>${price}</Text>
				</View>
			</View>
		</View>
	);
};

export default ItemUI;

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	headerContainer: {
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
	},
	mainContainer: {
		flex: 1,
		padding: 20,
	},
	itemContainer: {
		borderWidth: 1,
		borderColor: "#B2B2B2",
		padding: 20,
		height: 280,
		backgroundColor: "#fff",
		marginBottom: 10,
	},
	image: {
		width: "100%",
		height: "70%",
	},
	itemDetails: {
		width: "100%",
		height: "30%",
		padding: 10,
		alignItems: "center",
	},
	itemTitle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	itemDescription: {
		fontSize: 10,
	},
});