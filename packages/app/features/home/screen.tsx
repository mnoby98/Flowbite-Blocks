import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      {/* <TextLink href="/user/fernando">Regular Link</TextLink> */}
      <TextLink href="/login">Go To Login Component</TextLink>
      <TextLink href="/featuresList">Go To Feature List Component</TextLink>
      <TextLink href="/header">Go To Header Component</TextLink>
      <TextLink href="/delete">Go To Delete Component</TextLink>
      <TextLink href="/hero-section">Go To Hero-Section Component</TextLink>
    </View>
  )
}
