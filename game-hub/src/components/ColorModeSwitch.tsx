import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

export const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();


  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
            
        </Switch>

        <Text>
         Dark Mode
        </Text>
    </HStack>
  )
}
