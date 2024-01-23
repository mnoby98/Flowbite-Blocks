import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { ScrollView, View, Pressable } from 'app/design/view'
import { Platform } from 'react-native'
const imagee = '/phone-mockup.png'
// https://flowbite.com/blocks/marketing/hero/#visual-image-with-heading
export function HeroSection() {
  return (
    <ScrollView>
      <View
        className={` h-screen bg-[#fff]   p-4 ${
          Platform.OS === 'web'
            ? '    flex-row-reverse  justify-center     '
            : 'gap-12'
        }`}
      >
        <View
          className={`${
            Platform.OS === 'web'
              ? '   flex  max-w-md   gap-12  px-4 sm:max-w-lg lg:max-w-3xl xl:max-w-4xl'
              : ''
          }  `}
        >
          <H1>Payments tool for software companies</H1>
          <P>
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </P>

          <View className=" flex-row gap-4">
            <Pressable
              className=" focus:blue-400  hover:blue-700  rounded-md border-none  bg-blue-700   px-2 py-2 outline-none focus:ring-4"
              onPress={() => {}}
            >
              <Text className="  font-semibold text-white">Get started ➡</Text>
            </Pressable>
            <Pressable
              className=" rounded-md border-[1px] border-[#e5e7eb] px-2  py-2 outline-none hover:bg-[#f3f4f6] focus:ring-4 focus:ring-[#a5dcfb]"
              onPress={() => {}}
            >
              <Text className="  font-semibold text-black">Speak to Sales</Text>
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
