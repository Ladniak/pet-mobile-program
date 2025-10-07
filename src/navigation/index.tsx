import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screen/Auth/Login";
import RegisterPage from "../screen/Auth/Registration";
import { Screen } from "react-native-screens";
import { ScreenNames } from "../constants/screenNames";
import { RootStackNavigation } from "./types";

const Stack = createNativeStackNavigator<RootStackNavigation>();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenNames.LOGIN_PAGE} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ScreenNames.LOGIN_PAGE} component={LoginPage} />
                <Stack.Screen name={ScreenNames.REGISTRATION_PAGE} component={RegisterPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} 