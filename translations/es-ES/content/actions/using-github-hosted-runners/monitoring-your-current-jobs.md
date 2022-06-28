---
title: Monitorear tus jobs actuales
intro: 'Monitorea cómo los ejecutores hospedados en {% data variables.product.prodname_dotcom %} procesan jobs en tu organización o empresa e identifican cualquier limitación relacionada.'
versions:
  feature: github-runner-dashboard
shortTitle: Monitorear tus jobs actuales
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Ver los jobs activos en tu organización o empresa

Puedes obtener una lista de todos los jobs que se ejecutan actualmente en los ejecutores hospedados en {% data variables.product.prodname_dotcom %} en tu organización o empresa.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %}
{% data reusables.actions.github-hosted-runners-table-entry %}
1. Revisa la sección de "Jobs activos", la cual contiene una lista de todos los jobs que actualmente se ejecutan en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}.

  ![Captura de pantalla de la lista de jobs activos](/assets/images/help/settings/actions-runner-active-jobs.png)

## Ver los jobs en cola en tu organización o empresa

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} te permiten ejecutar jobs simultáneamente y la máxima cantidad de jobs simultáneos variará dependiendo de tu plan. Si llegas a la cantidad máximo de jobs simultáneos, cualquier job nuevo comenzará a ingresar en cola. Para saber más sobre la cantidad de jobs simultáneos disponibles en tu plan, consulta la sección "[Límites de uso, facturación y administración](/actions/learn-github-actions/usage-limits-billing-and-administration)".

El siguiente procedimiento demuestra cómo verificar la cantidad máxima de jobs simultáneos que puedes ejecutar.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %}
{% data reusables.actions.github-hosted-runners-table-entry %}
1. Revisa la sección "Uso de todos los jobs", la cual lista la cantidad de jobs activos y la cantidad máxima de jobs que puedes ejecutar. En este ejemplo, hay `9` jobs ejecutándose actualmente de un máximo de `180`. ![Captura de pantalla de la cantidad máxima de jobs para una cuenta](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
