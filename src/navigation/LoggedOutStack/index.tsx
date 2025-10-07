import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "../../constants/screenNames";
import LoginPage from "../../screen/Auth/Login";
import RegisterPage from "../../screen/Auth/Registration";

const Stack = createNativeStackNavigator();

export default function LoggedOutStack() {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.LOGIN_PAGE} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.LOGIN_PAGE} component={LoginPage} />
            <Stack.Screen name={ScreenNames.REGISTRATION_PAGE} component={RegisterPage} />
        </Stack.Navigator>
    )
}