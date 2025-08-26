import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./screens/Home"
import Login from "./screens/Login"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}