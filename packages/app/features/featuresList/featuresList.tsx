import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { View, ScrollView } from 'app/design/view'
import { Platform, Pressable } from 'react-native'

import {
  faCircleCheck,
  faClipboard,
  faFingerprint,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export function Features() {
  return (
    <ScrollView className="bg-white p-5 ">
      <View className="pb-10">
        <View className={`  bg-white p-2 `}>
          <View className="flex items-center   gap-0 ">
            <H1 className="   text-center  font-bold">
              The most trusted cryptocurrency platform
            </H1>
            <P className="text-center text-xl text-[#84929c]">
              Here are a few reasons why you should choose Flowbite
            </P>
          </View>
          <View>
            <View
              className={`${
                Platform.OS === 'web'
                  ? ' mx-auto  flex-row  flex-wrap  justify-center gap-3      '
                  : ''
              }`}
            >
              <View
                className={` mt-4  flex  ${
                  Platform.OS === 'web'
                    ? 'max-w-[300px] sm:max-w-[400px]'
                    : 'max-w-[400px]'
                } items-center  `}
              >
                <Text>
                  <FontAwesomeIcon icon={faFingerprint} color="blue" />
                </Text>
                <H1 className="  text-center text-xl   font-bold">
                  Secure storage
                </H1>
                <P className="  text-center  text-[#84929c]  ">
                  We store the vast majority of the digital assets in secure
                  offline storage.
                </P>
                <Pressable onPress={() => {}}>
                  <P className="   text-lg  text-blue-600 ">
                    Learn how to keep your funds safe {'>'}
                  </P>
                </Pressable>
              </View>
              <View
                className={` mt-4  flex  ${
                  Platform.OS === 'web'
                    ? 'max-w-[300px] sm:max-w-[400px]'
                    : 'max-w-[400px]'
                } items-center  `}
              >
                <Text>
                  <FontAwesomeIcon icon={faClipboard} color="blue" />
                </Text>
                <H1 className="  text-center text-xl   font-bold">Insurance</H1>
                <P className="  text-center text-[#84929c]  ">
                  Flowbite maintains crypto insurance and all USD cash balances
                  are covered.
                </P>
                <Pressable onPress={() => {}}>
                  <P className="   text-lg  text-blue-600 ">
                    Learn how to keep your funds safe {'>'}
                  </P>
                </Pressable>
              </View>
              <View
                className={` mt-4  flex  ${
                  Platform.OS === 'web'
                    ? 'max-w-[300px] sm:max-w-[400px]'
                    : 'max-w-[400px]'
                } items-center  `}
              >
                <Text>
                  <FontAwesomeIcon icon={faCircleCheck} color="blue" />
                </Text>
                <Text></Text>
                <H1 className="  text-center text-xl   font-bold">
                  Best practices
                </H1>
                <P className="  text-center  text-[#84929c]  ">
                  Flowbite marketplace supports a variety of the most popular
                  digital currencies.
                </P>
                <Pressable onPress={() => {}}>
                  <P className=" text-lg  text-blue-600 ">
                    Learn how to keep your funds safe {'>'}
                  </P>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <TextLink className=" text-center" href="/">
          👈 Go Home
        </TextLink>
      </View>
    </ScrollView>
  )
}
