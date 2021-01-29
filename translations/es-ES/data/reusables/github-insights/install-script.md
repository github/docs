4. Ejecuta el script del shell `Install.sh`.
5. Para habilitar SSL, ingresa el certificado SSL (`.crt/.cer/.pem`). Si no quieres habilitar SSL, déjalo en blanco.
6. Si eliges habilitar SSL, ingresa la llave SSL (`.key`). De lo contrario, déjalo en blanco.
5. Ingresa el nombre del host, el cual es la misma URL que utilizas para el servidor de la aplicación cuando creas la {% data variables.product.prodname_github_app %}.
6. La instalación tomará unos cuantos minutos en ejecutarse. Una vez que esté completo, verás un mensaje impreso en el terminal.
    ```
    Installation complete
    Run /opt/insights/scripts/start.sh to start GitHub Insights
    ```
