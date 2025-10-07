import { View } from 'react-native';
import { useState } from 'react';
import AuthHeader from '../components/AuthHeader';
import AuthLayout from '../components/AuthLayout';
import DefaultButton from '../../../common/components/DefaultButton';
import Input from '../../../common/components/Input';
import { Formik, FormikValues } from 'formik';
import { RegistrationSchema } from '../utils/validations';

interface ITouched {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
}
export default function RegisterPage() {
    const [touched, setTouched] = useState<ITouched>({
        email: false,
        password: false,
        confirmPassword: false,
    });

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
                    console.log('value', value);
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