{% if currentVersion == "free-pro-team@latest" %}

Los PAT pueden otorgar accesos amplios a tu cuenta. Puedes seleccionar solo el alcance necesario de `read:packages`, `write:packages`, o `delete:packages` cuando creas un PAT para autenticarte en el {% data variables.product.prodname_container_registry %}.

Para autenticarse en el {% data variables.product.prodname_container_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, utiliza el `GITHUB_TOKEN` para tener la mejor experiencia en seguridad.

Para obtener orientación sobre cómo actualizar tus flujos de trabajo que se autentican en `ghcr.io` con un token de acceso personal, consulta la sección "[Mejorar un flujo de trabajo que acceda a `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)".

{% data reusables.package_registry.github-token-security-over-pat %}

Si te gustaría utilizar el {% data variables.product.prodname_container_registry %} en las acciones durante el beta, sigue nuestras mejores prácticas de seguridad para uso de PAT en la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
