import {test,expect} from '../../fixtures/apiFixtures';
import Ajv from 'ajv'

let ajv = new Ajv();

let userSchema = {
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "gender": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "email",
    "gender",
    "status"
  ]
}

let usersSchema = {
  "type": "array",
  "items": userSchema
}

const TOKEN = process.env.API_TOKEN;
const AUTH_HEADER = {Authorization:`Bearer ${TOKEN}`};

test('GET user schema validation', async({apiHelper})=>{
    let userData = {
    name: "Nitya Ranjan Behera",
    email: `nitya${Date.now()}@malinator.com`,
    gender: "male",
    status: "active"
}
    let response = await apiHelper.post('/public/v2/users',userData,AUTH_HEADER);
    expect(response.status).toBe(201);

    let userId = response.body.id;


    //GET
    let getResponse = await apiHelper.get(`/public/v2/users/${userId}`,AUTH_HEADER);
    expect(getResponse.status).toBe(200);


  //Validate Schema
    let validate = ajv.compile(userSchema);
    let isSchemaValid = validate(getResponse.body);

    if(!isSchemaValid){
        console.log('Schema Error : ' , validate.errors);
    }

    expect(isSchemaValid).toBeTruthy();
})



test('GET users schema validation', async({apiHelper})=>{

    //GET
    let getResponse = await apiHelper.get(`/public/v2/users`,AUTH_HEADER);
    expect(getResponse.status).toBe(200);


  //Validate Schema
    let validate = ajv.compile(usersSchema);
    let isSchemaValid = validate(getResponse.body);

    if(!isSchemaValid){
        console.log('Schema Error : ' , validate.errors);
    }

    expect(isSchemaValid).toBeTruthy();
})