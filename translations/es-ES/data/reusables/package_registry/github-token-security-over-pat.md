El {% data variables.product.prodname_container_registry %} ahora es compatible con `GITHUB_TOKEN` para tener una autenticación fácil y segura en tus flujos de trabajo. Si tu flujo de trabajo está utilizando un token de acceso personal (PAT) para autenticarse en `ghcr.io`, entonces te recomendamos ampliamente que actualices tu flujo de trabajo para utilizar un `GITHUB_TOKEN`.

Para obtener más información sobre el `GITHUB_TOKEN`, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".
