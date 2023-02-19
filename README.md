### API_MONGOOSE_CRUD

```
npm i 
npm run dev
```

### TEST@url = http://localhost:3618

### BASE
{{url}}


### GET one EMPLOYEE
GET {{url}}/employee/63c413bece003d083deefd0f
Content-Type: application/json

### GET ALL EMPLOYEES
GET {{url}}/employees

### ADD EMPLOYEE  
POST {{url}}/employee
Content-Type: application/json

 {
    "firstName": "Edward",
    "lastName": "Tanguay",
    "title": "Web-Developer",
    "notes":22
  }

 

### UPDATE EMPLOYEE with ID
PATCH {{url}}/employee/63c9367383bf66b095ebcbff
Content-Type: application/json

 {
    "firstName": "Abdulrazak",
    "lastName": "Samman",
    "title": "Web-Developer",
    "notes":22
  }
 


### DELETE EMPLOYEE with ID
DELETE {{url}}/employee/63c84ee146f4050a9465ab9b

 
