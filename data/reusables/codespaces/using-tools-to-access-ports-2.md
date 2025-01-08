### Using curl to access a forwarded port

In a terminal on your local computer, enter:

```shell
curl ADDRESS -H "X-Github-Token: TOKEN"
```

Replace `ADDRESS` and `TOKEN` with the values you copied previously.

### Using Postman to access a forwarded port

1. Open Postman.
1. Create a new GET request.
1. Paste the address you copied previously as the request URL.

   ![Screenshot of the URL for the forwarded port, pasted into Postman as the GET request URL. The URL is highlighted.](/assets/images/help/codespaces/postman-screenshot-url.png)

1. In the **Headers** tab, create a new entry where the key is "X-Github-Token" and the value is the `GITHUB_TOKEN` you copied previously.

   ![Screenshot of a dummy GITHUB_TOKEN, pasted into Postman as the value of the X-GitHub-Token key. The key and value are highlighted.](/assets/images/help/codespaces/postman-screenshot-key-token.png)

1. Click **Send**.
