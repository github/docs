---
title: Acerca de los métodos de fusión en GitHub
intro: 'Puedes permitirle a los colaboradores con acceso de escritura a tu repositorio fusionar sus solicitudes de extracción en {% data variables.product.product_location %} con diferentes opciones de fusión o implementar un método de fusión específico para todas las solicitudes de extracción de tu repositorio.'
redirect_from:
  - /articles/about-merge-methods-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %} Puedes implementar un tipo de método de fusión, como el cambio de base o la combinación de confirmaciones, con solo activar el método deseado para tu repositorio.

{% data reusables.pull_requests.default_merge_option %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
El método de fusión predeterminado crea una confirmación de fusión. Puedes impedir que cualquiera suba confirmaciones de fusión en una rama protegida imponiendo un historiar de confirmaciones linear. Para obtener más información, consulta la sección "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches#require-linear-history)".{% endif %}

### Combinar tus confirmaciones de fusión

{% data reusables.pull_requests.squash_and_merge_summary %}

Antes de activar combinar confirmaciones, considera estas desventajas:
- Se pierde información acerca de cuándo se hicieron originalmente los cambios específicos y quién es el autor de las confirmaciones combinadas.
- Si sigues trabajando en la rama principal de una solicitud de extracción después de combinar y fusionar, y luego creas una solicitud de extracción nueva entre las mismas ramas, las confirmaciones que ya hayas combinado y fusionado se listarán en la solicitud de extracción nueva. También podrías tener conflictos que tienes que resolver constantemente en cada solicitud de extracción sucesiva. Para obtener más información, consulta "[Acerca de las fusiones de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)".
- Es posible que sea más difícil usar algunos comandos de Git que usan el ID "SHA" o "hash", ya que se pierde el ID SHA para las confirmaciones originales. Por ejemplo, es posible que no sea tan efectivo usar [`git rerere`](https://git-scm.com/docs/git-rerere).

Para obtener más información, consulta "[Configurar la combinación de confirmaciones para las solicitudes de extracción](/articles/configuring-commit-squashing-for-pull-requests)".

### Cambiar de base y fusionar tus confirmaciones

{% data reusables.pull_requests.rebase_and_merge_summary %}

Antes de activar cambiar de base las confirmaciones, considera estas desventajas:
- Es posible que los colaboradores del repositorio tengan que cambiar de base en la línea de comandos, resolver cualquier conflicto y realizar un empuje forzado de sus cambios a la rama de tema de la solicitud de extracción (o rama de encabezado remota) antes de poder usar la opción **cambiar de base y fusionar** en {% data variables.product.product_location %}. El empuje forzado se debe realizar cuidadosamente para que los colaboradores no sobreescriban un trabajo en el que otros se hayan basado. Para conocer más sobre cuando la opción **Cambiar de base y fusionar** está desactivada en {% data variables.product.product_location %} y el flujo de trabajo para volver a activarlo, consulta "[Acerca de las fusiones de solicitudes de extracción](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)".

Para obtener más información, consulta [Configurar el cambio de base de las solicitudes de extracción](/articles/configuring-commit-rebasing-for-pull-requests)".
