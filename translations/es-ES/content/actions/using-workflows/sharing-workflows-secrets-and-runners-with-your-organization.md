---
title: 'Compartir flujos de trabajo, secretos y ejecutores con tu organización'
shortTitle: Compartir flujos de trabajo con tu organización
intro: 'Learn how you can use organization features to collaborate with your team, by sharing starter workflows, secrets, and self-hosted runners.'
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

Si necesitas compartir flujos de trabajo y otras características de {% data variables.product.prodname_actions %} con tu equipo, entonces considera colaborar dentrod e una organización de {% data variables.product.prodname_dotcom %}. Una organización te permite almacenar centralmente y administrar secretos, artefactos y ejecutores auto-hospedados. You can also create starter workflows in the `.github` repository and share them with other users in your organization.

## Sharing {% if internal-actions %}actions and {% endif %}workflows

{% if internal-actions %}
You can share both individual actions and entire workflows with your organization, with or without publishing the actions or workflows publicly. You can reuse actions and workflows exactly by referencing them in your workflow file, and you can create starter workflows that provide templates for new workflows.
{% else %}
Your organization can share workflows by reusing the workflows exactly or by creating starter workflows that provide templates for new workflows.
{% endif %}

{% if internal-actions %}
### Sharing actions with your enterprise

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

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
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
