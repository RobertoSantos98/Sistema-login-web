import React, { useState } from "react";
import { Container, Form } from "./style";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import UserServices from '../../Services/index.js';
import { NavLink, useNavigate } from "react-router-dom";

    const userService = new UserServices();

const Login = () => {

    const [ form, setForm ] = useState([]);
    const [ loading, setLoading] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await userService.login(form)
            console.log('response do login', response)
            if(response === true){
                alert('Usuario logado com Sucesso!');
                // navegar para home
                navigate('/home');
            }
            setLoading(false)
        } catch (error) {
            alert('Algo something wrong' + error);
        }
    }

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    }

    console.log('Form está valido!', validadorInput());

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
                <Botao
                    type='submit'
                    text='Entrar!'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()}
                    
                />
                <div>
                    <p>Não possui conta?</p>
                    <p>Cadastrar</p>
                </div>
            </Form>
        </Container>
    );
}
 
export default Login;