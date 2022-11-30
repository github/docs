The {% data variables.product.prodname_container_registry %} now supports `GITHUB_TOKEN` for easy and secure authentication in your workflows. Si tu flujo de trabajo está utilizando un token de acceso personal (PAT) para autenticarse en `ghcr.io`, entonces te recomendamos ampliamente que actualices tu flujo de trabajo para utilizar un `GITHUB_TOKEN`.

For more information about `GITHUB_TOKEN`, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."
