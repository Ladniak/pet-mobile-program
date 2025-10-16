import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreenNames } from "../../constants/screenNames";
import { TabBarStackType } from "../types";

import FavoritePage from "../../screen/Favourite";
import HomePage from "../../screen/Home";
import getTabOptions from './options';

const Tab = createBottomTabNavigator<TabBarStackType>();

export default function TabBarStack() {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.HOME_PAGE}
            screenOptions={({ route }) => getTabOptions(route)}>
            <Tab.Screen name={ScreenNames.HOME_PAGE} component={HomePage} />
            <Tab.Screen name={ScreenNames.FAVORITE_PAGE} component={FavoritePage} />
        </Tab.Navigator >
    )
}