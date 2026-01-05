import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectPlatform }: Props) => {
  const { data } = usePlatform();

  return (
    <Menu>
      <MenuButton marginY={4} as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform ? selectPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {/* <MenuItem>Platform</MenuItem> */}
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
