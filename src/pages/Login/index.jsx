import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form';
import { AuthContext } from '../../contexts/AuthContext';
import { Container } from './styles';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(signIn)}>
        <input type='text' {...register('email')} />
        <input type='password' {...register('password')} />

        <button type='submit'>Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
