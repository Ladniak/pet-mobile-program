import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoggedInStackType, RootStackNavigation } from "../types";
import { ScreenNames } from "../../constants/screenNames";
import TabBarStack from "../TabBarStack";

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggenInStack() {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.TAB_BAR_STACK} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.TAB_BAR_STACK} component={TabBarStack} />
        </Stack.Navigator>
    )
} 