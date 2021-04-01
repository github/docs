---
title: Utilizar etiquetas con ejecutores auto-hospedados
intro: Puedes utilizar etiquetas para organizar tus ejecutores auto-hospedados según sus características.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Para obtener información sobre cómo utilizar las etiquetas para rutear jobs a tipos específicos de ejecutores auto-hospedados, consulta la sección "[Utilizar ejecutores auto-hospedados en un flujo de trabajo](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)".

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

### Crear una etiqueta personalizada

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. En el campo "Filtrar etiquetas", teclea el nombre de tu nueva etiqueta y da clic en **Crear nueva etiqueta**. ![Etiqueta de agregar ejecutor](/assets/images/help/settings/actions-add-runner-label.png)

La etiqueta personalizada se creará y asignará al ejecutor auto-hospedado. Las etiquetas personalizadas pueden eliminarse de los ejecutores auto-hospedados, pero actualmente no pueden eliminarse manualmente. {% data reusables.github-actions.actions-unused-labels %}

### Asignar una etiqueta a un ejecutor auto-hospedado

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Da clic en la etiqueta para asignarla a tu ejecutor auto-hospedado.

### Eliminar una etiqueta personalizada de un ejecutor auto-hospedado

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Da clic en la etiqueta asignada para eliminarla de tu ejecutor auto-hospedado. {% data reusables.github-actions.actions-unused-labels %}

### Utilizar el script de configuración para crear y asignar etiquetas

Puedes utilizar el script de configuración en el ejecutor auto-hospedado para crear y asignar etiquetas personalizadas. Por ejemplo, este comando asigna una etiqueta llamada `gpu` al ejecutor auto-hospedado.

```shell
./config.sh --labels gpu
```

La etiqueta se creará si no existe. También puedes utilizar este acercamiento para asignar etiquetas predeterminadas a los ejecutores, tales como `x64` o `linux`. Cuando se asignan etiquetas predeterminadas utilizando el script de configuración, {% data variables.product.prodname_actions %} las acepta como asignadas y no valida si el ejecutor está utilizando ese sistema operativo o arquitectura.

Puedes utilizar separación por comas para asignar etiquetas múltiples. Por ejemplo:

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** Nota:** Si reemplazaste un ejecutor existente, entonces deberás volver a asignar cualquier etiqueta personalizada.

{% endnote %}
