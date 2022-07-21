---
title: Administrar revisiones de solicitudes de cambio en tu organización
intro: Puedes limitar qué usuarios pueden aprobar o solicitar cambios a una solicitud de cambios en tu organización.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Administrar las revisiones de las solicitudes de cambios
---

## Acerca de los límites de revisión de código

Predeterminadamente, en los repositorios públicos, cualquier usuario puede emitir revisiones que aprueben o soliciten cambios a una solicitud de cambios.

Puedes limitar quiénes pueden aprobar o solicitar cambios a las solicitudes de cambios en los repositorios públicos que le pertenezcan a tu organización. Después de que habilitas los límites de revisión de código, cualquiera puede comentar en las solicitudes de cambios en tus repositorios públicos, pero solo las personas con acceso explícito a cualquier repositorio pueden aprobar una solicitud de cambios o solicitar cambios a ella.

También puedes habilitar límites de la revisión de código para los repositorios individuales. Si habilitas los límites en tu organización, ignorarás cualquier límite para repositorios individuales que le pertenezcan a ella. Para obtener más información, consulta la sección "[Administrar las revisiones de solicitudes de cambios en tu repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)".

## Habilitar los límites de revisión de código

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. En la sección de "Acceso" de la barra lateral, haz clic en **Moderación {% octicon "report" aria-label="The report icon" %}**.
1. Debajo de "{% octicon "report" aria-label="The report icon" %} Moderación", haz clic en **Límites de la revisión de código**. ![Captura de pantalla del elemento de la barra lateral para los límites de la revisión de código para organizaciones](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Revisa la información en la pantalla. Haz clic en **Limitar la revisión en todos los repositorios** para limitar las revisiones a aquellos con acceso explícito o haz clic en **Eliminar los límites de revisión de todos los repositorios** para eliminar los límites de todos los repositorios públicos en tu organización. ![Captura de pantalla de los ajustes en los límites de la revisión de código para las organizaciones](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
