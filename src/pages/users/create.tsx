import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, useFormErrorStyles, VStack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from "next/link";
import Input from "../../components/Form/input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";


interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = object({
  name: string().required('Nome obrigatório'),
  email: string().required('E-mail obrigatório').email('E-mail inválido'),
  password: string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: string().oneOf([ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  });

  const {errors} = formState;

  const handleCreateUser: SubmitHandler<FieldValues> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));  

    console.log(data);
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box as='form' onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal' >Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700'></Divider>

          <VStack spacing='8' >
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input label='Nome completo' error={errors.name} {...register('name')} />
              <Input label='E-mail' error={errors.email} {...register('email')} />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input type='password' label='Senha' error={errors.password} {...register('password')} />
              <Input type='password' label='Confirmação da senha' error={errors.password_confirmation} {...register('password_confirmation')} />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users'>
                <Button as= 'a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button type='submit' colorScheme='pink' isLoading={formState.isSubmitting} >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}