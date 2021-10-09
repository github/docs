{% ifversion fpt %}

Para autenticarse en el {% data variables.product.prodname_container_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, utiliza el `GITHUB_TOKEN` para tener la mejor experiencia en seguridad. Si tu flujo de trabajo está utilizando un token de acceso personal (PAT) para autenticarse en `ghcr.io`, entonces te recomendamos ampliamente que actualices tu flujo de trabajo para utilizar el `GITHUB_TOKEN`.

Para obtener orientación sobre cómo actualizar tus flujos de trabajo que se autentican en `ghcr.io` con un token de acceso personal, consulta la sección "[Mejorar un flujo de trabajo que acceda a `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)".

Para obtener más información sobre el `GITHUB_TOKEN`, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Si estás utilizando el {% data variables.product.prodname_container_registry %} en las acciones, sigue nuestras mejores prácticas de seguridad en "[Fortalecimiento de seguridad para las Acciones de GitHub](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
