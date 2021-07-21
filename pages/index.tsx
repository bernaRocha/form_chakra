// Importações da bilbioteca Chakra
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const IndexPage = () => {
  
  // Função para a troca de cores do Color Mode
  const { toggleColorMode } = useColorMode()

  // Declaração de cores do Color Mode
  const formBackground =useColorModeValue('gray.100', 'gray.700')
  return (

    // O estilo é declarado direto nos itens
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      
      <Flex direction='column' background={formBackground} p={12} rounded={6}>
        
        <Heading mb={6}>Log in</Heading>
        <Input placeholder='Seu e-mail vem aqui' variant='filled' mb={6} md={3} type='email' />
        <Input placeholder='Digite a senha' variant='filled' mb={6} type='password' />
        
        <Button mb={6} colorScheme='teal'>Log In</Button>
        <Button onClick={toggleColorMode}>Modo noturno</Button>

      </Flex>

    </Flex>
 
  )
}

export default IndexPage
