import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Body, LoginWrapper, Logo, Forms, Input, ButtonLogin } from '../styles/LoginWrapper';
import { postSignUp } from '../api/API';
import { ThreeDots } from 'react-loader-spinner';

export default function Login() {
    const [formSignUp, setFormSignUp] = useState({
        email: '',
        password: '',
        userName: '',
        photo: ''
      });
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    function handleForm(e) {
        setFormSignUp({
            ...formSignUp,
            [e.target.name]: e.target.value,
        })
    }
        
    function submitForm(e) {
        const body = {
            email: formSignUp.email,
            name: formSignUp.userName,
            image: formSignUp.photo,
            password: formSignUp.password
        };

        e.preventDefault();

        setDisabled(true);

        postSignUp(body).then(() => {
            navigate("/");
        });
    }

    return (
        <Body>
            <LoginWrapper>
                <Logo src='./assets/Logo.svg'></Logo>
                <Forms onSubmit={submitForm} >
                    <Input 
                        name="email" 
                        type="email" 
                        placeholder="email" 
                        value={formSignUp.email} 
                        onChange={handleForm}
                        isDisabled={disabled}></Input>
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="senha" 
                        value={formSignUp.password} 
                        onChange={handleForm}
                        isDisabled={disabled}></Input>
                    <Input 
                        name="userName" 
                        type="text" 
                        placeholder="nome" 
                        value={formSignUp.userName} 
                        onChange={handleForm}
                        isDisabled={disabled}></Input>
                    <Input 
                        name="photo" 
                        type="url" 
                        placeholder="foto" 
                        value={formSignUp.photo} 
                        onChange={handleForm}
                        isDisabled={disabled}></Input>
                    <button type="submit">
                            {disabled ? <ThreeDots color='white' height={13} width={51} /> : 'Entrar'}
                    </button>
                </Forms>
                <Link to="/">
                    <ButtonLogin>Já tem uma conta? Faça login!</ButtonLogin>
                </Link>
            </LoginWrapper>
        </Body>    
    )
}