"use client";

import StrengthIndicator from "@/components/strengthIndicator";
const generator = require("generate-password");
import {
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import IconCopy from "@/public/icons/icon-copy.svg";

import { useEffect, useState } from "react";
import { Strength } from "@/constants/strength";
import getPasswordStrength from "@/utils/getPasswordStrength";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<Strength | null>(
    null
  );
  const [isCopied, setIsCopied] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(10);

  const HIDE_COPIED_FEEDBACK_MS = 2000;

  function copyToClipBoard() {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, HIDE_COPIED_FEEDBACK_MS);
  }

  function generatePassword() {
    const generated = generator.generate({
      length: passwordLength,
      uppercase: isUpperCase,
      lowercase: isLowerCase,
      numbers: isNumbers,
      symbols: isSymbols,
    });

    setPassword(generated);
  }

  const noOptionsSelected =
    !isUpperCase && !isLowerCase && !isNumbers && !isSymbols;

  useEffect(() => {
    function calcPasswordStrength() {
      const passStrength = getPasswordStrength(password);
      setPasswordStrength(passStrength ?? null);
    }

    if (!!password) calcPasswordStrength();
  }, [password]);

  return (
    <Center h="100vh" w="100vw" bgColor="veryDarkGrey">
      <Flex
        direction="column"
        width={{ base: "100vw", md: "80vw", lg: "50vw" }}
      >
        <Heading variant="h1" size="md" textAlign="center" color="grey">
          Password Generator
        </Heading>

        <Flex
          direction="column"
          gap={{ base: 3, md: 5 }}
          p={{ base: 4, md: 8 }}
        >
          <InputGroup>
            <Input placeholder="P4$5W0rD!" value={password} readOnly />
            <InputRightElement w="auto" mt={3} mr={3}>
              <Text
                size="md"
                color="neonGreen"
                textTransform="uppercase"
                transition="all .5s linear"
                visibility={isCopied ? "visible" : "hidden"}
              >
                Copied
              </Text>
              <IconButton
                icon={<IconCopy />}
                onClick={copyToClipBoard}
                aria-label="Copy text"
                bgColor="transparent"
                border="none"
                _hover={{ color: "almostWhite" }}
              />
            </InputRightElement>
          </InputGroup>

          <Flex direction="column" gap={5} p={8} bgColor="darkGrey">
            <HStack justifyContent="space-between">
              <Text size="md">Character Length:</Text>
              <Heading color="neonGreen">{passwordLength}</Heading>
            </HStack>
            <Slider
              aria-label="slider-for-password-length"
              id="password-length-slider"
              min={0}
              max={20}
              defaultValue={passwordLength}
              onChange={(v) => setPasswordLength(v)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Stack>
              <Checkbox
                isChecked={isUpperCase}
                onChange={() => setIsUpperCase(!isUpperCase)}
              >
                Include Uppercase Letters
              </Checkbox>
              <Checkbox
                isChecked={isLowerCase}
                onChange={() => setIsLowerCase(!isLowerCase)}
              >
                Include Lowercase Letters
              </Checkbox>
              <Checkbox
                isChecked={isNumbers}
                onChange={() => setIsNumbers(!isNumbers)}
              >
                Include Numbers
              </Checkbox>
              <Checkbox
                isChecked={isSymbols}
                onChange={() => setIsSymbols(!isSymbols)}
              >
                Include Symbols
              </Checkbox>
            </Stack>
            <StrengthIndicator strength={passwordStrength} />
            <Tooltip
              label="At least one option must be selected"
              hasArrow
              isOpen={noOptionsSelected}
            >
              <Button
                width="100%"
                aria-label="Generate password"
                gap={5}
                rightIcon={<ArrowForwardIcon />}
                onClick={generatePassword}
                isDisabled={noOptionsSelected}
              >
                Generate
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}
