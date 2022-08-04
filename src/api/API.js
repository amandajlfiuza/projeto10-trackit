import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function postHabit(body, token) {
    const promise = axios.post(`${BASE_URL}/habits`, body, token);
    return promise;
}

function getHabits(token) {
    const promise = axios.get(`${BASE_URL}/habits`, token);
    return promise;
}

function deleteHabit(idHabit, token) {
    const promise = axios.delete(`${BASE_URL}/habits/${idHabit}`, token);
    return promise;
}

function getHabitsToday(token) {
    const promise = axios.get(`${BASE_URL}/habits/today`, token);
    return promise;
}

function postCheckHabit(idHabit, token) {
    const promise = axios.delete(`${BASE_URL}/habits/${idHabit}/check`, token);
    return promise;
}

function postUncheckHabit(idHabit, token) {
    const promise = axios.delete(`${BASE_URL}/habits/${idHabit}/uncheck`, token);
    return promise;
}

function getHistory(token) {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, token);
    return promise;
}

export {
    postSignUp,
    postLogin,
    postHabit,
    getHabits,
    deleteHabit,
    getHabitsToday,
    postCheckHabit,
    postUncheckHabit,
    getHistory
}