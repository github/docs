...
## Update a user

To update a user's information, you can use the `PUT /users/{user_id}` endpoint. Here is an example request:

```http
PUT /users/123
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```
...
