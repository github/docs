## Using command-line tools and REST clients to access ports

When you forward a port, your application becomes available at the URL `https://CODESPACENAME-PORT.app.github.dev`. For example, `https://monalisa-hot-potato-vrpqrxxrx7x2rxx-4000.app.github.dev`. If you forward a private port from the {% data variables.product.prodname_vscode_shortname %} desktop application, your application will also be available at a localhost port such as `127.0.0.1:4000`.

To access your application using a REST client, such as Postman, or a command-line tool like curl, you don't need to authenticate if you're using a localhost port, or if you're accessing a public port at the remote domain. However, to connect to a private port at the remote domain, you must authenticate by using the `GITHUB_TOKEN` access token in your request.

{% note %}

**Note**: The `GITHUB_TOKEN` is automatically created when you start a codespace and remains the same for the duration of the codespace session. If you stop and then restart a codespace a new `GITHUB_TOKEN` is generated.

{% endnote %}

<!-- Don't delete this comment. It prevents a formatting issue. -->
