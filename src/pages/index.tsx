import { Button, Flex, Stack } from '@chakra-ui/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/Form/input';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = object({
  email: string().required('E-mail obrigatório').email('E-mail inválido'),
  password: string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({ resolver: yupResolver(signInFormSchema) });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));  
    alert(JSON.stringify(data));
  };

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex 
        as='form'
        w='100%'
        maxWidth='360px'
        bg='gray.800'
        padding='8'
        borderRadius='8px'
        flexDirection='column'
        onSubmit={ handleSubmit(handleSignIn) }
      >
        <Stack spacing={4}>
          <Input label='E-mail' type='email' error={errors.email} {...register('email')}/>
          <Input label='Senha' type='password' error={errors.password} {...register('password')}/>
        </Stack>
        

        <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
