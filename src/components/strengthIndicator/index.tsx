import { Strength, STRENGTH } from "@/constants/strength";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";

interface Props {
  strength: Strength | null;
}

const COLORS_PER_STRENGTH = {
  tooWeak: "red",
  weak: "orange",
  medium: "yellow",
  strong: "neonGreen",
};

export default function StrengthIndicator({ strength }: Props) {
  // TODO: move this to a util or hook
  function renderRectangles() {
    const numOfRectangles = 4;

    // Return only empty rectangles
    if (!strength) {
      return Array.from({ length: numOfRectangles }).map((_, index) => (
        <Box
          key={index + "_strengthIndicatorRectangle"}
          borderWidth="2px"
          borderColor="almostWhite"
          w="12px"
          minH="30px"
        />
      ));
    }

    // TODO: correct math so numOfRectangles can be flexible
    const signalPosition =
      Object.values(STRENGTH)
        .map((strength) => strength.signal)
        .indexOf(strength.signal) + 1;
    const remainingEmptyRectangles = numOfRectangles - signalPosition;

    return (
      <>
        {/* Colored rectangles */}
        {Array.from({ length: signalPosition }).map((_, index) => (
          <Box
            key={index + "_strengthIndicatorRectangle"}
            bgColor={COLORS_PER_STRENGTH[strength.signal]}
            w="12px"
            minH="30px"
          />
        ))}
        {/* Empty rectangles, if any */}
        {Array.from({ length: remainingEmptyRectangles }).map((_, index) => (
          <Box
            key={index + "_strengthIndicatorRectangle"}
            borderWidth="2px"
            borderColor="almostWhite"
            w="12px"
            minH="30px"
          />
        ))}
      </>
    );
  }

  return (
    <HStack p={5} justifyContent="space-between" bgColor="veryDarkGrey">
      <Text size="md" color="grey" fontWeight="bold" textTransform="uppercase">
        Strength
      </Text>
      <Flex alignItems="stretch" gap={2}>
        <Heading size="md" textTransform="uppercase">
          {strength?.message ?? ""}
        </Heading>
        {renderRectangles()}
      </Flex>
    </HStack>
  );
}
