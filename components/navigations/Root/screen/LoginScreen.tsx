import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootNavigationStackScreenProps } from '../../StackScreenProps';

export const LoginScreen: React.FC<RootNavigationStackScreenProps<"LoginScreen">> = ({navigation}) => {
  return (
    <View className='flex-1 items-center justify-center h-[100vh]'>
      <Text>LoginScreens</Text>
      <TouchableOpacity onPress={() => navigation.navigate("NotFoundScreen")}>
        <Text>HOLA</Text>
      </TouchableOpacity>
    </View>
  )
}