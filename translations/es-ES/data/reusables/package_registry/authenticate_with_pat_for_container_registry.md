{% ifversion fpt or ghec or ghes > 3.4 %}

Para autenticarse en el {% data variables.product.prodname_container_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, utiliza el `GITHUB_TOKEN` para tener la mejor experiencia en seguridad. If your workflow is using a personal access token (PAT) to authenticate to `{% data reusables.package_registry.container-registry-hostname %}`, then we highly recommend you update your workflow to use the `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}For guidance on updating your workflows that authenticate to `{% data reusables.package_registry.container-registry-hostname %}` with a personal access token, see "[Upgrading a workflow that accesses `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)."{% endif %}

Para obtener más información sobre el `GITHUB_TOKEN`, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

Si estás utilizando el {% data variables.product.prodname_container_registry %} en las acciones, sigue nuestras mejores prácticas de seguridad en "[Fortalecimiento de seguridad para las Acciones de GitHub](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
