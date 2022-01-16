Cualquiera puede bifurcar un repositorio público y luego emitir una solicitud de cambios que proponga cambios en los flujos de trabajo de {% data variables.product.prodname_actions %} del mismo. Aunque los flujos de trabajo de las bifurcaciones no tienen acceso a datos sensibles tales como los secretos, pueden ser molestos para los mantenedores si se modifican para fines de abuso.

Para ayudar a prevenir esto, los flujos de trabajo sobre las solicitudes de cambio en los repositorios públicos de algunos contribuyentes no se ejecutarán automáticamente y podrían necesitar aprobarse primero. Predeterminadamente, todos los contribuyentes de primera vez necesitan aprobación para ejecutar flujos de trabajo.

{% note %}

**Note:** Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings.

{% endnote %}