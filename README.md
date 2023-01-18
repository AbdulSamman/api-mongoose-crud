### API_MONGOOSE_CRUD

```
npm i 
npm run dev
```

### TEST

@url = http://localhost:3610

### BASE
{{url}}


### GET one EMPLOYEE
GET {{url}}/employee/63c413bece003d083deefd10
Content-Type: application/json

### GET ALL EMPLOYEES
GET {{url}}/employees

### ADD EMPLOYEE  
POST {{url}}/employee
Content-Type: application/json

 {
    "firstName": "HAHA",
    "lastName": "SAM",
    "title": " President ",
    "notes":22
  }

 

### UPDATE EMPLOYEE with ID
PATCH {{url}}/employee/63c84ee246f4050a9465ab9d
Content-Type: application/json

 {
    "firstName": "SASASD",
    "lastName": "SAM",
    "title": " President ",
    "notes":22
  }
 


### DELETE EMPLOYEE with ID
DELETE {{url}}/employee/63c85146ec621bbaad9bdf30

 
