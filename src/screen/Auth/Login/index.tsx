import { Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import styles from './styles';
import { useState } from 'react';

interface IInputValue {
    email: string;
    password: string;
    errorEmail: null | string;
    errorPassword: null | string;
}

export default function LoginPage() {
    const [inputValues, setInputValues] = useState<IInputValue>({
        email: '',
        password: '',
        errorEmail: null,
        errorPassword: null,
    });

    const handleChangeInput = (
        key: 'email' | 'password' | 'errorEmail' | 'errorPassword',
        value: string | null) => {
        setInputValues(prevState => ({ ...prevState, [key]: value }));
    };

    const checkEmail = () => {
        const emailValidator = new RegExp('^([a-z0-9._%-]+@[a-z0-9.-]+.[a-z]{2,6})*$');
        if (!emailValidator.test(inputValues.email)) {
            handleChangeInput('errorEmail', 'Not valid email')
        } else {
            handleChangeInput('errorEmail', null)
        }
    }

    const checkPassword = (text) => {
        if (text.length < 8) {
            handleChangeInput('errorPassword', 'Password must be more than 8 symbols')
        } else {
            handleChangeInput('errorPassword', null)
        }
    }

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
                    placeholder="Email"
                    placeholderTextColor={'#838383'}
                    style={[styles.input]}
                    value={inputValues.email}
                    onChangeText={text => handleChangeInput('email', text)}
                    onBlur={() => { checkEmail() }}
                />
            </View>
            {inputValues.errorEmail && <Text>{inputValues.errorEmail}</Text>}
            <View style={[styles.inputContainer]}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'#838383'}
                    style={[styles.input]}
                    value={inputValues.password}
                    onChangeText={text => {
                        handleChangeInput('password', text)
                        checkPassword(text)
                    }}
                    secureTextEntry={true}
                />
            </View>
            {inputValues.errorPassword && <Text>{inputValues.errorPassword}</Text>}
            <TouchableOpacity style={[styles.enterBtn]}>
                <Text style={[styles.enterText]}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
}
