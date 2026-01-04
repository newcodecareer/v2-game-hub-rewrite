import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 85 ? "green" : score > 75 ? "yellow" : "";
  return (
    <Badge px="2" borderRadius="4" colorScheme={color} fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
