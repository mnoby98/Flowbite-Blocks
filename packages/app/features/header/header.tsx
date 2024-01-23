import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { Button, View, Pressable } from 'app/design/view'
import { Platform } from 'react-native'
//https://flowbite.com/blocks/application/table-headers/#table-header-with-cta-and-button-group
export function Header() {
  return (
    <View className=" h-screen bg-[#f9fafb] p-4 ">
      <View
        className={` ${
          Platform.OS === 'web' ? ' gap-4 sm:flex-row sm:justify-between' : ' '
        } items-center  rounded-md bg-white p-4 shadow-lg  `}
      >
        <Pressable
          className={`${
            Platform.OS === 'web' ? ' w-full sm:w-auto ' : ' w-[100%]'
          } items-center rounded-md bg-blue-600  px-4 py-1  outline-none hover:bg-blue-700 focus:ring-4 focus:ring-blue-400`}
          onPress={() => {}}
        >
          <Text className=" text-white ">+ Add product</Text>
        </Pressable>
        <View
          className={` ${
            Platform.OS === 'web'
              ? 'w-full sm:w-auto sm:flex-row'
              : ' w-full py-4'
          }    `}
        >
          <Pressable
            className={`${
              Platform.OS === 'web'
                ? '   rounded-t-md  border-b-0 sm:rounded-l-md sm:rounded-tr-none  sm:border-b-2'
                : ' w-[100%] rounded-t-md '
            } items-center border-[2px] border-[#cacfd2]  px-4  py-1 text-center outline-none  hover:bg-[#f3f4f6] hover:text-[#1d4ed8] focus:ring-2 focus:ring-[#a3adb5]`}
            onPress={() => {}}
          >
            <Text className=" font-medium  ">Positions</Text>
          </Pressable>
          <Pressable
            className={`${
              Platform.OS === 'web'
                ? ' border-t-2 sm:border-b-2 sm:border-l-0 sm:border-t-2'
                : ' w-[100%]    '
            }  items-center border-[2px] border-b-[0px] border-t-[0px] border-[#cacfd2] px-4  py-1  text-center outline-none hover:bg-[#f3f4f6]  hover:text-[#1d4ed8] hover:first:hover:text-[#1d4ed8] focus:ring-2 focus:ring-[#a3adb5]`}
            onPress={() => {}}
          >
            <Text className="  font-medium  ">Positions</Text>
          </Pressable>
          <Pressable
            className={`${
              Platform.OS === 'web'
                ? 'border-t-2 sm:border-b-2 sm:border-l-0'
                : ' w-[100%]    '
            }  items-center border-[2px] border-b-[0px] border-[#cacfd2] px-4  py-1  text-center outline-none hover:bg-[#f3f4f6]  hover:text-[#1d4ed8] hover:first:hover:text-[#1d4ed8] focus:ring-2 focus:ring-[#a3adb5]`}
            onPress={() => {}}
          >
            <Text className="  font-medium  ">Positions</Text>
          </Pressable>
          <Pressable
            className={`${
              Platform.OS === 'web'
                ? 'rounded-b-md sm:rounded-r-md sm:rounded-bl-none  sm:border-l-0 sm:border-t-2'
                : ' w-[100%]  rounded-b-md   '
            }  items-center border-[2px] border-[#cacfd2] px-4  py-1  text-center outline-none hover:bg-[#f3f4f6]  hover:text-[#1d4ed8] hover:first:hover:text-[#1d4ed8] focus:ring-2 focus:ring-[#a3adb5]`}
            onPress={() => {}}
          >
            <Text className="  font-medium  ">Positions</Text>
          </Pressable>
        </View>
      </View>
      <TextLink className=" text-center" href="/">
        👈 Go Home
      </TextLink>
    </View>
  )
}
