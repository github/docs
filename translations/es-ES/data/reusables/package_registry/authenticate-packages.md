Necesitas de un token de acceso para publicar, instalar, y borrar paquetes en {{ site.data.variables.product.prodname_registry }}.

Puees utilizar un token de acceso personal (PAT) para autenticarte en el {% data variables.product.prodname_registry %} o en la API de {% data variables.product.prodname_dotcom %}. Cuando creas un token de acceso personal, puedes asignar al token diferentes ámbitos en función de tus necesidades. Para obtener más información sobre los alcances relacionados con los paquetes para un PAT, consulta la sección "[Acerca de los permisos para los Paquetes de GitHub](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Para autenticarte en un registro del {% data variables.product.prodname_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes utilizar:
- `GITHUB_TOKEN` para publicar los paquetes asociados con el repositorio del flujo de trabajo.
- un PAT para instalar los paquetes asociados con otros repositorios privados (a los cuales no puede acceder el `GITHUB_TOKEN`).
