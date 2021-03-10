{% if currentVersion == "free-pro-team@latest" %}
Si quieres autenticarte en
el {% data variables.product.prodname_github_container_registry %} en un flujo de trabajo de {% data variables.product.prodname_actions %}, entonces debes utilizar un token de acceso personal (PAT). El `GITHUB_TOKEN` no tiene los permisos requeridos actualmente. Durante el beta del {% data variables.product.prodname_github_container_registry %}, la única forma de autenticación compatible es el PAT.

Los PAT pueden otorgar accesos amplios a tu cuenta. Te recomendamos seleccionar únicamente los alcances necesarios de lectura, escritura o borrado de `package` cuando crees un PAT para autenticarte con el {% data variables.product.prodname_container_registry %}. Evita incluir el alcance `repo` en un pat que utilice algún flujo de trabajo de GitHub Actions, ya que otorga accesos adicionales innecesarios.

Si te gustaría utilizar el {% data variables.product.prodname_container_registry %} en las acciones durante el beta, sigue nuestras mejores prácticas de seguridad para uso de PAT en la sección "[Fortalecimiento de seguridad para las GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)".

{% endif %}
