import axios from 'axios';
import jwtdecode from 'jwt-decode';

const httpClient = axios.create();

httpClient.setToken = function(token){
    localStorage.setItem('token', token)
    return token;
}

httpClient.getToken = function(token) {
    return localStorage.getItem('token');
}

httpClient.getCurrentUser = function(){
    const token = this.getToken();
    console.log(token);
    if (token) return jwtdecode(token);
    return null;
}

httpClient.authenticate = async function (credentials, url) {
    let res = await this({ method: "post", url, data: credentials});
    const token = res.data.token;
    if (token) {
        this.defaults.headers.common.token = this.setToken(token);
        return jwtdecode(token);
    }else {
        return false;
    }

}

httpClient.logOut = function(){
    localStorage.removeItem('token')
    delete this.defaults.headers.common.token;
    return true;
}


httpClient.defaults.headers.common.token = httpClient.getToken();

export default httpClient;