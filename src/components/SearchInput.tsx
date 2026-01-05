import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch color="gray.300" />
      </InputLeftElement>
      <Input variant='filled' borderRadius={20} placeholder="Search games" />
    </InputGroup>
  );
};

export default SearchInput;
