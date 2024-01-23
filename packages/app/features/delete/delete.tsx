import { P, Text, TextLink } from 'app/design/typography'
import { View, Pressable, Modal } from 'app/design/view'
import { useState } from 'react'
import { Alert } from 'react-native'
import { Platform } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
// https://flowbite.com/blocks/application/table-headers/#table-header-with-cta-and-button-group
export function Delete() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  return (
    <View className="  items-center ">
      <Pressable
        onPress={() => setShowDeleteConfirm((show) => !show)}
        className="  mt-5 rounded-md bg-blue-600 px-4 py-2 outline-none hover:bg-blue-700  focus:ring-4 focus:ring-blue-400"
      >
        <Text className=" font-semibold text-white">
          Show delete confirmation
        </Text>
      </Pressable>
      <Modal
        visible={showDeleteConfirm}
        transparent={Platform.OS === 'web' ? true : false}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setShowDeleteConfirm(!showDeleteConfirm)
        }}
      >
        <View
          className={`${
            Platform.OS === 'web' ? '  sm:justify-center ' : ' '
          }       h-screen w-full  items-center bg-[#888b935d]  p-4  `}
        >
          <View
            className={` relative   max-w-md  items-center    rounded-md  bg-white  p-8`}
          >
            <Pressable
              onPress={() => setShowDeleteConfirm((show) => !show)}
              className="absolute right-5 top-5  rounded-md px-2  py-1 hover:bg-[#e5e7eb]"
            >
              <Text className="  font-semibold  ">X</Text>
            </Pressable>
            <Text>
              <FontAwesomeIcon icon={faTrashCan} />
            </Text>
            <P>Are you sure you want to delete this item?</P>
            <View className=" flex-row gap-4">
              <Pressable
                className=" rounded-md border-[1px] border-[#e5e7eb] px-2  py-2 outline-none hover:bg-[#f3f4f6] focus:ring-4 focus:ring-[#a5dcfb]"
                onPress={() => setShowDeleteConfirm((show) => !show)}
              >
                <Text className="  font-semibold text-[#6b7290]">
                  No,cancel
                </Text>
              </Pressable>
              <Pressable
                className=" rounded-md  border-none  bg-[#dc2626] px-2  py-2   outline-none hover:bg-[#b91c1c] focus:ring-4 focus:ring-[#fba5a5]"
                onPress={() => {}}
              >
                <Text className="  font-semibold text-white">
                  Yes, I{"'"}m sure
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* )} */}
      </Modal>
      <TextLink className=" text-center" href="/">
        👈 Go Home
      </TextLink>
    </View>
  )
}
