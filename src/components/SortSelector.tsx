import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (sortOrderValue: string) => void;
  sortOrderValue: string;
}

const SortSelector = ({ onSelectOrder, sortOrderValue }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];
  const currentOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === sortOrderValue
  );
  return (
    <Menu>
      <MenuButton marginX={4} as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectOrder(sortOrder.value)}
            key={sortOrder.value}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
