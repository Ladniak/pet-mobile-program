import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../../../constants/screenNames";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackNavigation } from "../../../../navigation/types";

interface IAuthHeader {
    activeTab: 'login' | 'registration';
}

export default function AuthHeader({ activeTab }: IAuthHeader) {
    const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>()
    const navigateToLogin = () => {
        navigation.navigate(ScreenNames.LOGIN_PAGE)
    }
    const navifateToRegistration = () => {
        navigation.navigate(ScreenNames.REGISTRATION_PAGE)
    }
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.welcomeText}>We help u find your own pet!</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={navigateToLogin} style={activeTab === 'login' ? styles.activeBtn : styles.disableBtn}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navifateToRegistration} style={activeTab === 'registration' ? styles.activeBtn : styles.disableBtn}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}