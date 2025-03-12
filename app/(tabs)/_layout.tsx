import { Platform } from 'react-native'
import React from 'react'
import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Store',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name='storefront-outline'
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='inventory'
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name='bag-personal-outline'
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
