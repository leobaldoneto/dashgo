import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  label?: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps> (({label, error = null, ...rest}, ref) => (
  <FormControl isInvalid={ !!error }>
    { !!label && <FormLabel htmlFor='email'>{label}</FormLabel> }

    <ChakraInput 
      focusBorderColor='pink.500'
      bgColor='gray.900'
      variant='filled'
      _hover={{
        bgColor: 'gray.900'
      }}
      size='lg'
      ref={ref}
      {...rest}
    />
    { !!error && <FormErrorMessage>{ error.message }</FormErrorMessage>}
  </FormControl>
  
));

Input.displayName = 'Input';
export default Input;