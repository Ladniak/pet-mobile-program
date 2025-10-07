import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoggedInStackType, RootStackNavigation } from "../types";
import { ScreenNames } from "../../constants/screenNames";
import HomePage from "../../screen/Home";

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggenInStack() {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.HOME_PAGE} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.HOME_PAGE} component={HomePage} />
        </Stack.Navigator>
    )
} 