import 'expo-dev-client'
import { Slot } from 'expo-router'
import styled, { ThemeProvider, type DefaultTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appTheme } from 'src/config/theme'

export default function AppLayout() {
  return (
    <ThemeProvider theme={appTheme as DefaultTheme}>
      <S.AppWrapper>
          <Slot screenOptions={{ headerShown: true }} />
      </S.AppWrapper>
    </ThemeProvider>
  )
}

const S = {
  AppWrapper: styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
    background-color: ${appTheme.background};
  `
}
