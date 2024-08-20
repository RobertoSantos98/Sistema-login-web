import React from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input/index";
import Button from "../../Components/Botao/index";


const Login = () => {
    const handleChange = (event) => {
        console.log('Digitando...', event.target.name, event.target.value);
    }

    return ( 
        <Container>
            <Form>
                <h1>Faça o seu Login</h1>
                <Input 
                    name='email'
                    placeholder='Digite seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input 
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Button/>
                <div>
                    <p>Não possui conta?</p>
                    <p>Cadastrar</p>
                </div>
            </Form>
        </Container>
    );
}
 
export default Login;