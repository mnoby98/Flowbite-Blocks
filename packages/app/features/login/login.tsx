import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { View, Pressable, TextInput, Button } from 'app/design/view'

import { Platform, ScrollView } from 'react-native'
import { useState } from 'react'

// https://flowbite.com/blocks/marketing/login/

export function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <ScrollView className="  h-screen bg-[#f9fafb]">
      <View className=" flex  flex-row items-center justify-center gap-2  bg-[#f9fafb] py-6">
        <Text className=" text-2xl font-bold">Flowbite</Text>
      </View>
      <View className="   items-center  gap-6   bg-[#f9fafb]   p-5">
        <View
          className={`    w-full    max-w-md flex-1  gap-6 rounded-lg border-2 border-[#ecedee] bg-[#fff] ${
            Platform.OS === 'web' ? 'p-5' : 'pb-5 pr-5'
          }  `}
        >
          <Text className=" text-xl  font-bold ">Sign in to your account</Text>
          <View>
            <Text className="mb-2   text-lg font-normal ">Your email</Text>
            <TextInput
              className=" rounded-lg   border-[1px] border-[#d1d5db] px-3 py-2   text-xl placeholder:text-[#8c8f93] focus:border-blue-600  active:bg-white"
              placeholder="name@company.com"
            />
          </View>
          <View>
            <Text className="mb-2   text-lg font-normal ">Password</Text>

            <TextInput
              secureTextEntry
              className={`${
                Platform.OS === 'web' ? ' ' : ''
              }  rounded-lg border-[1px] border-[#d1d5db]  px-3 py-2 text-2xl placeholder:text-[#8c8f93]  focus:border-blue-500 active:border-blue-500`}
              placeholder="••••••••"
            />
          </View>
          <View className="flex-row justify-between">
            <View className=" flex-row items-center "></View>
            <Pressable onPress={() => {}}>
              <P className="   text-lg font-medium text-blue-600">
                Forget password?
              </P>
            </Pressable>
          </View>
          <Pressable
            onPress={() => {}}
            className="   items-center rounded-lg bg-[#2563eb] text-center  "
          >
            <Text
              className={`${
                Platform.OS === 'web' ? ' text-lg ' : ' text-lg font-bold'
              } items-center justify-center  rounded-lg bg-[#2563eb] py-2 text-center      text-white`}
            >
              Sign in
            </Text>
          </Pressable>
          <View className=" flex-row  items-center">
            <Text className="pr-1 text-lg      font-light ">
              Don`t have an accout yet?
            </Text>
            <Pressable>
              <Text className=" font-semibold  text-[#2563eb]">Sign up</Text>
            </Pressable>
          </View>
        </View>
        <TextLink className=" text-center" href="/">
          👈 Go Home
        </TextLink>
      </View>
    </ScrollView>
  )
}
