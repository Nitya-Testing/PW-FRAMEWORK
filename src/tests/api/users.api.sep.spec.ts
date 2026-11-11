import {test,expect} from '../../fixtures/apiFixtures';

const TOKEN = process.env.API_TOKEN;
const AUTH_HEADER = {Authorization: `Bearer ${TOKEN}`};
let userID:number;



test.describe.serial('Running User APIs', ()=>{

test('Verify GET call',async ({apiHelper})=>{
    let response = await apiHelper.get('/public/v2/users',AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
})

test('Verify POST call' , async ({apiHelper})=>{
    let user = {
    name: "Alexa",
    email: `alexa${Date.now()}@mailinator.com`,
    gender: "male",
    status: "active"
    };


    let response = await apiHelper.post('/public/v2/users',user,AUTH_HEADER);

    expect(response.status).toBe(201);
    userID = response.body.id;
    console.log(`Created userID - ${userID}`);
    expect(response.body.id).not.toBeNull();
    expect(response.body.name).toBe(user.name);
})

test('Verify PUT call', async ({apiHelper})=>{
    //Update a User
     let updatedUser = {
    name: "Alexaaaaaaaa",
    email: `alexa${Date.now()}@mailinator.com`,
    gender: "male",
    status: "inactive"
    };


    let updateUserResponse = await  apiHelper.put(`/public/v2/users/${userID}`,updatedUser,AUTH_HEADER);
    expect(updateUserResponse.status).toBe(200);
    expect(updateUserResponse.body.name).toBe(updatedUser.name);
    expect(updateUserResponse.body.status).toBe(updatedUser.status);
})

test('Verify DELETE call', async({apiHelper})=>{
    let response = await apiHelper.delete(`/public/v2/users/${userID}`,AUTH_HEADER);
    expect(response.status).toBe(204);
})
})