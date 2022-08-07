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
    const [isDisabled, setIsDisabled] = useState(false);

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

        setIsDisabled(true);

        postSignUp(body).then(() => {
            navigate("/");
        })
        .catch((error) => {
            alert(error.response.data.message);
            setIsDisabled(false);
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
                        value={formSignUp.email} required
                        onChange={handleForm}
                        disabled={isDisabled}></Input>
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="senha" 
                        value={formSignUp.password} required
                        onChange={handleForm}
                        disabled={isDisabled}></Input>
                    <Input 
                        name="userName" 
                        type="text" 
                        placeholder="nome" 
                        value={formSignUp.userName} required
                        onChange={handleForm}
                        disabled={isDisabled}></Input>
                    <Input 
                        name="photo" 
                        type="url" 
                        placeholder="foto" 
                        value={formSignUp.photo} required
                        onChange={handleForm}
                        disabled={isDisabled}></Input>
                    <button type="submit" disabled={isDisabled}>
                            {isDisabled ? <ThreeDots color='white' height={13} width={51} /> : 'Cadastrar'}
                    </button>
                </Forms>
                <Link to="/">
                    <ButtonLogin>Já tem uma conta? Faça login!</ButtonLogin>
                </Link>
            </LoginWrapper>
        </Body>    
    )
}