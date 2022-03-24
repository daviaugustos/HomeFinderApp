import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components'

import { IStackScreen } from '~/@types/application/NavigationApplication.types'
import HomeScreen from '~/screens/Home/HomeScreen'
import HomeTitle from '~/components/HomeTitle/HomeTitle'

const HOME_SCREENS: IStackScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
    screenOptions: {
      headerTitle: () => <HomeTitle />,
    },
  },
]

const Stack = createNativeStackNavigator()

const HomeScreenStack: React.FC = () => {
  const themeSelected = useTheme()
  return (
    <Stack.Navigator>
      {HOME_SCREENS.map((screenItem, index) => (
        <Stack.Screen
          key={index}
          {...screenItem}
          options={{
            ...screenItem.screenOptions,
            headerStyle: {
              backgroundColor: themeSelected.colors.title.primary,
            },
          }}
        />
      ))}
    </Stack.Navigator>
  )
}

export default HomeScreenStack
