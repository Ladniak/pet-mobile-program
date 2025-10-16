import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ScreenNames } from '../../constants/screenNames';
import { HeartIcon, PawIcon, LabelIcon } from '../../assets/icons';

const getName = (name: string) => {
    switch (name) {
        case ScreenNames.FAVORITE_PAGE:
            return 'Favorite';
        case ScreenNames.HOME_PAGE:
            return 'Pet';
        default:
            return '';
    }
};

const getIcon = (name: string, focused: boolean) => {
    const color = focused ? '#0B0B0B' : '#838383';
    const size = 20;

    switch (name) {
        case ScreenNames.FAVORITE_PAGE:
            return <HeartIcon isFocused={focused} color={color} size={size} />;
        case ScreenNames.HOME_PAGE:
            return <PawIcon isFocused={focused} color={color} size={size} />;
        default:
            return null;
    }
};

export default function getTabOptions(route: any): BottomTabNavigationOptions {
    return {
        tabBarStyle: {
            height: 60,
            width: '100%',
            backgroundColor: '#E5F3E5',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            paddingBottom: 10,
            paddingTop: 10,
        },
        tabBarShowLabel: false,
        header: () => (
            <View
                style={{
                    width: '100%',
                    height: 60,
                    alignItems: 'center',
                    padding: 10,
                }}
            >
                <LabelIcon />
            </View>
        ),
        tabBarIcon: ({ focused }) => (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    paddingTop: 4,
                }}
            >
                <View
                    style={{
                        width: 20,
                        height: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {getIcon(route.name, focused)}
                </View>
                <Text
                    style={{
                        fontSize: 12,
                        marginTop: 4,
                        textAlign: 'center',
                        color: focused ? '#0B0B0B' : '#838383',
                    }}
                    numberOfLines={1}
                >
                    {getName(route.name)}
                </Text>
            </View>
        ),
    };
}
