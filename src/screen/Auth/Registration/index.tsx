import { View } from 'react-native';
import { useEffect, useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import AuthLayout from '../components/AuthLayout';
import DefaultButton from '../../../common/components/DefaultButton';
import Input from '../../../common/components/Input';
import { Formik, FormikValues } from 'formik';
import { RegistrationSchema } from '../utils/validations';
import auth from '@react-native-firebase/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigation } from '../../../navigation/types';
import { ScreenNames } from '../../../constants/screenNames';

interface ITouched {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
}
export default function RegisterPage() {

    const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

    const [touched, setTouched] = useState<ITouched>({
        email: false,
        password: false,
        confirmPassword: false,
    });

    const registerUser = async (email: string, password: string) => {
        try {
            const result = await auth().createUserWithEmailAndPassword(email, password)
            console.log(result);
            if (result.user) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: ScreenNames.LOGGED_IN_STACK }],
                    }),
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            console.log(user);
        });
        return subscriber;
    }, []);


    return (
        <AuthLayout>
            <AuthHeader activeTab={'registration'} />
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={value => {
                    void registerUser(value.email, value.password);
                }}
                validationSchema={RegistrationSchema()}>
                {({
                    values,
                    setFieldValue,
                    handleSubmit,
                    isValid,
                    errors,
                }: FormikValues) => (
                    <>
                        <View>
                            <Input
                                onFocus={() =>
                                    setTouched(prevState => ({ ...prevState, email: true }))
                                }
                                value={values.email}
                                onChangeText={value => {
                                    setFieldValue('email', value);
                                }}
                                placeholder={'Email'}
                                error={touched.email && errors.email}
                            />
                            <Input
                                onFocus={() =>
                                    setTouched(prevState => ({ ...prevState, password: true }))
                                }
                                value={values.password}
                                onChangeText={value => {
                                    setFieldValue('password', value);
                                }}
                                placeholder={'Password'}
                                error={touched.password && errors.password}
                                secureTextEntry={true}
                            />
                            <Input
                                onFocus={() =>
                                    setTouched(prevState => ({
                                        ...prevState,
                                        confirmPassword: true,
                                    }))
                                }
                                value={values.confirmPassword}
                                onChangeText={value => {
                                    setFieldValue('confirmPassword', value);
                                }}
                                placeholder={'Confirm password'}
                                error={touched.confirmPassword && errors.confirmPassword}
                                secureTextEntry={true}
                            />
                        </View>
                        <DefaultButton
                            disabled={
                                !isValid ||
                                !values.email ||
                                !values.password ||
                                !values.confirmPassword
                            }
                            onPress={handleSubmit}
                            text={'Registration'}
                        />
                    </>
                )}
            </Formik>
        </AuthLayout>
    );
}