import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { Body, LoginWrapper, Logo, Forms, Input, ButtonLogin } from '../styles/LoginWrapper';
import { postLogin } from '../api/API';
import { ThreeDots } from 'react-loader-spinner';

export default function Login() {
    const {form, setForm, setToken, setImage} = useContext(UserContext);
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function submitForm(e) {
        const body = {
            email: form.email,
            password: form.password
        };

        e.preventDefault();

        setDisabled(true);

        postLogin(body).then((resp) => {
            setToken(resp.data.token);
            setImage(resp.data.image);
            navigate("/hoje");
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
                        value={form.email}
                        onChange={handleForm}
                        isDisabled={disabled}></Input>
                    <Input 
                        name="password" 
                        type="password" 
                        placeholder="senha" 
                        value={form.password}
                        onChange={handleForm}
                        isDisabled={disabled}></Input>
                    <button type="submit">
                        {disabled ? <ThreeDots color='white' height={13} width={51} /> : 'Entrar'}
                    </button>
                </Forms>
                <Link to="/cadastro">
                    <ButtonLogin>Não tem uma conta? Cadastre-se!</ButtonLogin>
                </Link>
            </LoginWrapper>
        </Body>
    )
}