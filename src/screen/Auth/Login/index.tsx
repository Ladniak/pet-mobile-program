import { Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import styles from './styles';

export default function LoginPage() {
    return (
        <View style={[styles.mainWrapper]}>
            <View style={[styles.titleContainer]}>
                <Text style={[styles.title]}>Welcome</Text>
                <Text style={[styles.welcomeText]}>We help u find your own pet!</Text>
            </View>
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity style={[styles.loginBtn]}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.regBtn]}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.inputContainer]}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#838383'}
                    style={[styles.input]} />
            </View>
            <View style={[styles.inputContainer]}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor={'#838383'}
                    style={[styles.input]} />
            </View>
            <TouchableOpacity style={[styles.enterBtn]}>
                <Text style={[styles.enterText]}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}
