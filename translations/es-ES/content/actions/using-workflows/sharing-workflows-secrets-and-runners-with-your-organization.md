---
title: 'Compartir flujos de trabajo, secretos y ejecutores con tu organización'
shortTitle: Compartir flujos de trabajo con tu organización
intro: 'Aprende cómo puedes utilizar las características de la organización para colaborar con tu equipo al compartir flujos de trabajo, secretos y ejecutores auto-hospedados.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

Si necesitas compartir flujos de trabajo y otras características de {% data variables.product.prodname_actions %} con tu equipo, entonces considera colaborar dentrod e una organización de {% data variables.product.prodname_dotcom %}. Una organización te permite almacenar centralmente y administrar secretos, artefactos y ejecutores auto-hospedados. También puedes crear flujos de trabajo iniciales en el repositorio `.github` y compartirlos con otros usuarios en tu organización.

## Compartir {% ifversion internal-actions %}acciones y {% endif %}flujos de trabajo

{% ifversion internal-actions %}
Puedes compartir tanto acciones individuales como flujos de trabajo enteros con tu organización ya sea que los publiques o no al público en general. Puedes reutilizar las acciones y flujos de trabajo exactamente al referenciarlos en tu archivo de flujo de trabajo y puedes crear flujos de trabajo iniciales que proporcionen plantillas para flujos nuevos.
{% else %}
Tu organización puede compartir flujos de trabajo al reutilizarlos exactamente o creando flujos de trabajo que proporcionen plantillas para otros nuevos.
{% endif %}

{% ifversion internal-actions %}
### Compartir acciones con tu empresa

{% data reusables.actions.internal-actions-summary %}
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizar flujos de trabajo

{% data reusables.actions.reusable-workflows %}
{% endif %}

### Utilizar flujos de trabajo iniciales

{% data reusables.actions.workflow-organization-templates %} Para obtener más información, consulta la sección "[Crear flujos de trabajo iniciales para tu organización](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Compartir secretos dentro de una organización

Puedes admnistrar tus secretos centralmente dentro de una organización y hacerlos disponibles para repositorios específicos. Esto también significa que púedes actualizar un secreto en una ubicación y hacer que el cambio aplique a todos los flujos de trabajo del repositorio que lo utilicen.

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secret %}
1. Da clic en **Secreto nuevo**.
1. Teclea un nombre para tu secreto en el cuadro de entrada **Name**.
1. Ingresa el **Valor** para tu secreto.
1. Desde la lista desplegable **Acceso de los repositorios**, elige una política de acceso.
1. Haz clic en **Agregar secreto** (Agregar secreto).

## Compartir ejecutores auto-hospedados dentro de una organización

Los administradores de las organizaciones pueden agregar sus ejecutores auto-hospedados a grupos y luego crear políticas que controlen qué repositorios pueden acceder al grupo.

Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".


## Pasos siguientes

Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Crear flujos de trabajo iniciales para tu organización](/actions/using-workflows/creating-starter-workflows-for-your-organization)".
