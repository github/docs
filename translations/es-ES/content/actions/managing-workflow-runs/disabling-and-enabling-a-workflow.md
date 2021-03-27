---
title: Inhabilitar y habilitar un flujo de trabajo
intro: 'Puedes inhabilitar y volver a habilitar un flujo de trabajo utilizando {% data variables.product.prodname_dotcom %} o la API de REST.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Inhabilitar un flujo de trabajo te permite impedir que se active sin tener que borrar el archivo del repositorio. Puedes habilitar el flujo de trabajo de nuevo fácilmente en {% data variables.product.prodname_dotcom %}. También puedes inhabilitar y habilitar un flujo de trabajo utilizando la API de REST. Para obtener más información, consulta la sección "[API de REST de Acciones](/rest/reference/actions#workflows)".

Inhabilitar un flujo de trabajo temporalmente puede ser útil en varios escenarios. Estos son algunos cuantos ejemplos en donde inhabilitar un flujo de trabajo podría ser útil:

- Existe un error en el flujo de trabajo, el cual produce demasiadas solicitudes erróneas, lo cual impacta negativamente los servicios externos.
- Hay un flujo de trabajo que no es crítico y que está consumiendo demasiados minutos en tu cuenta.
- Hay un flujo de trabajo que envía solicitudes a un servicio que está inactivo.
- Hay flujos de trabajo en un repositorio bifurcado que no se necesitan (por ejemplo, flujos de trabajo programados).

{% warning %}

**Advertencia:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

### Inhabilitar un flujo de trabajo

Puedes inhabilitar un flujo de trabajo manualmente para que no ejecute ninguna ejecución del mismo. Un flujo de trabajo inhabilitado no se borrará y puede volver a habilitarse.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral, da clic en el flujo de trabajo que quieras inhabilitar. ![flujo de trabajo de la selección en las acciones](/assets/images/actions-select-workflow.png)
1. Da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![menú de kebab de las acciones](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Da clic en **Inhabilitar flujo de trabajo**. ![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png)El flujo de trabajo inhabilitado se marca con {% octicon "stop" aria-label="The stop icon" %} para indicar su estado. ![lista de acciones del flujo de trabajo inhabilitado](/assets/images/help/repository/actions-find-disabled-workflow.png)

### Habilitar un flujo de trabajo

Puedes volver a habilitar un flujo de trabajo que se había inhabilitado previamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieres habiitar. ![acciones para seleccional el flujo de trabajo inhabilitado](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Da clic en **Habilitar flujo de trabajo**. ![acciones para habilitar flujo de trabajo](/assets/images/help/repository/actions-enable-workflow.png)
