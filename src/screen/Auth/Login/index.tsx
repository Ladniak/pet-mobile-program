import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { HidePassIcon, ViewPassIcon } from '../../../assets/icons';

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

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

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

    const checkPassword = (text: string) => {
        if (text.length < 8) {
            handleChangeInput('errorPassword', 'Password must be more than 8 symbols')
        } else {
            handleChangeInput('errorPassword', null)
        }
    }

    const isDisabledLoginBtn = Boolean(inputValues.errorEmail ||
        inputValues.errorPassword ||
        !inputValues.email ||
        !inputValues.password)

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 90, android: 20 })}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.mainWrapper}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Welcome</Text>
                            <Text style={styles.welcomeText}>We help u find your own pet!</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.loginBtn}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.regBtn}>
                                <Text>Register</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                                placeholderTextColor="#838383"
                                onBlur={() => {
                                    checkEmail();
                                }}
                                value={inputValues.email}
                                onChangeText={text => handleChangeInput('email', text)}
                            />
                        </View>
                        {inputValues.errorEmail && <Text>{inputValues.errorEmail}</Text>}
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                                placeholderTextColor="#838383"
                                value={inputValues.password}
                                onChangeText={text => {
                                    handleChangeInput('password', text);
                                    checkPassword(text)
                                }}
                                secureTextEntry={isPasswordVisible}
                            />
                            <TouchableOpacity
                                hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}
                                onPress={() => {
                                    setIsPasswordVisible(!isPasswordVisible)
                                }}>
                                {isPasswordVisible ? <HidePassIcon /> : <ViewPassIcon />}
                            </TouchableOpacity>
                        </View>
                        {inputValues.errorPassword && <Text>{inputValues.errorPassword}</Text>}
                        <TouchableOpacity style={[styles.enterBtn, isDisabledLoginBtn && { opacity: 0.5 }]} disabled={isDisabledLoginBtn}>
                            <Text style={styles.enterText}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );
}
