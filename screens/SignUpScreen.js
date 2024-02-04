import { SafeAreaView, TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                console.log("got error in handleSubmit:", error.message)
                alert(error.message)
            }
        }
    }

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: '#8080ff' }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start my-12">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require('../assets/images/signup.png')}
                        style={{ width: 165, height: 110 }} />
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Full Name</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        value='John snow'
                        placeholder='Enter Name'
                    />
                    <Text className="text-gray-700 ml-4">Email address</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        value={email}
                        onChangeText={value => setEmail(value)}
                        placeholder='Enter Email'
                    />
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                        secureTextEntry
                        value={password}
                        onChangeText={value => setPassword(value)}
                        placeholder='Enter Password'
                    />
                    <TouchableOpacity
                        className="py-3 bg-yellow-400 rounded-xl"
                        onPress={handleSubmit}
                    >
                        <Text className="font-xl font-bold text-center text-gray-700">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-xl text-gray-700 font-bold text-center py-5">
                    Or
                </Text>
                <View className="flex-row justify-center space-x-12">
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/google.png')}
                            className="w-15 h-15" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/apple.png')}
                            className="w-15 h-15" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/facebook.png')}
                            className="w-15 h-15" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-500"> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


