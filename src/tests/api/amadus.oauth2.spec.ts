import {test,expect} from '@playwright/test';

const BASE_URL = 'https://funapi.dev/api/auth/v1';
const END_POINT = '/oauth/token';
const AUTH_DETAILS = {
    grantType: "client_credentials",
    clientId : "demo-client",
    clientSecret: "demo-secret"
}

test("Test Generate Access Token" , async({request})=>{
    let response = await request.post(`${BASE_URL}${END_POINT}`,{
        data:{
            grantType:AUTH_DETAILS.grantType,
            clientId:AUTH_DETAILS.clientId,
            clientSecret:AUTH_DETAILS.clientSecret
        }
    })

    expect(response.status()).toBe(200);
    let data = await response.json();
    console.log(data);
})