import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
      <Text whiteSpace='nowrap'>Color Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
