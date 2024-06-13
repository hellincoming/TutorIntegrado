import { Button, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Potato = () => {
  const router = useRouter();
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading>Representación de conjuntos</Heading>
        <Stack spacing={4} direction="row" align="center">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter1" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter3" } })}
            >
              3
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter4" } })}
            >
              4
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter5" } })}
            >
              5
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter6" } })}
            >
              6
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter7" } })}
            >
              7
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inter8" } })}
            >
              8
            </Button>
          </Center>
        </Stack>
        <Heading>Sucesión</Heading>
        <Stack spacing={4} direction="row">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Sucesion" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Sucesion2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Sucesion3" } })}
            >
              3
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Sucesion4" } })}
            >
              4
            </Button>
          </Center>
        </Stack>
        <Heading>Intersección</Heading>
        <Stack spacing={4} direction="row">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inters1" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inters2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inters3" } })}
            >
              3
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Inters4" } })}
            >
              4
            </Button>
          </Center>
        </Stack>
        <Heading>Tablas de Verdad</Heading>
        <Stack spacing={4} direction="row">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Table1" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Table2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Table3" } })}
            >
              3
            </Button>
          </Center>
        </Stack>
        <Heading>Union</Heading>
        <Stack spacing={4} direction="row">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Union1" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Union2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Union3" } })}
            >
              3
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Union4" } })}
            >
              4
            </Button>
          </Center>
        </Stack>
        <Heading>Proposiciones</Heading>
        <Stack spacing={4} direction="row">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Prop1" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Prop2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Prop3" } })}
            >
              3
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Prop4" } })}
            >
              4
            </Button>
          </Center>
        </Stack>
        <Heading>Conjunciones</Heading>
        <Stack spacing={4} direction="row">
          <Center>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Conj1" } })}
            >
              1
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Conj2" } })}
            >
              2
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Conj3" } })}
            >
              3
            </Button>
            <Button
              margin={4}
              colorScheme="blue"
              size="sm"
              onClick={() => router.push({ pathname: "logicTest", query: { pid: "Conj4" } })}
            >
              4
            </Button>
          </Center>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Potato;
