---
title: Habilitación de GitHub Codespaces en la organización
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: 'Puedes controlar qué usuarios de la organización pueden utilizar {% data variables.product.prodname_github_codespaces %} con cargo a la organización.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 97d8b3fce0499ea945c9a2dcfe469759a097d77e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106489'
---
## Acerca de cómo habilitar {% data variables.product.prodname_github_codespaces %} en la organización

Los propietarios de la organización pueden controlar qué usuarios de tu organización pueden crear y utilizar codespaces con cargo a la organización. Para obtener información sobre los precios, consulta "[Acerca de la facturación de GitHub Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

Solo las personas que pueden clonar un repositorio pueden crear un codespace para ese repositorio. A fin de permitir que los usuarios creen codespaces para repositorios que pertenecen a tu organización, debes hacer lo siguiente:

- Asegúrese de que los usuarios tengan al menos acceso de escritura a los repositorios en los que quieran usar un codespace. Para obtener más información, vea "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".
- Asegúrate de que tu organización no tenga habilitada una lista de direcciones IP permitidas. Para más información, vea "[Administración de direcciones IP permitidas para la organización](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

A fin de permitir que los usuarios creen codespaces que se facturarán a tu organización, debes hacer lo siguiente:

- [Configuración de un límite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Elección de quién puede crear codespaces que se van a facturar a tu organización](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**Nota:** Si eres educador o instructor verificado, debes habilitar {% data variables.product.prodname_codespaces %} desde tu instancia de {% data variables.product.prodname_classroom %} para usar tu ventaja {% data variables.product.prodname_codespaces %} Education. Para más información, consulta "[Uso de GitHub Codespaces con GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %} {% endif %}

Predeterminadamente, un codespace solo puede acceder al repositorio desde el cual se creó. Si quieres que los codespaces de la organización puedan acceder a otros repositorios de la organización a los que el creador del codespace pueda acceder, consulta "[Administración del acceso al repositorio para los codespaces de tu organización](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".

## Elección de quién puede crear codespaces que se van a facturar a tu organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. En "Facturación", selecciona una de las opciones siguientes:

   * **Deshabilitado**: no se le cobrará a la organización por el uso de codespaces. Los {% data variables.product.prodname_codespaces %} creados para los repositorios de la organización se facturarán a los usuarios individuales que los creen.
   * **Miembros seleccionados**: los {% data variables.product.prodname_codespaces %} que creen miembros seleccionados para los repositorios de la organización se facturarán a la organización.
   * **Todos los miembros**: los {% data variables.product.prodname_codespaces %} que creen los miembros de la organización para los repositorios de esta se facturarán a la propia organización.
   * **Todos los miembros y colaboradores externos**: los {% data variables.product.prodname_codespaces %} que creen miembros de la organización y colaboradores externos para los repositorios de esta se facturarán a la propia organización.

   ![Botones de radio para "Facturación"](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Nota:** Al seleccionar **Todos los miembros y colaboradores externos**, todos los colaboradores externos que se hayan agregado a repositorios específicos podrán crear y usar {% data variables.product.prodname_codespaces %} para esos repositorios, y este uso se le cargará a la organización. Para más información sobre cómo administrar colaboradores externos, vea "[Acerca de los colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Haga clic en **Save**(Guardar).
1. Si ha elegido **Miembros seleccionados**, se muestra un cuadro de entrada para que escribas los nombres de los usuarios que quieres seleccionar.

   ![Cuadro de entrada para seleccionar usuarios](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Inhabilitar los {% data variables.product.prodname_codespaces %} para tu organización

Puedes impedir la creación y el uso de codespaces facturables a tu organización.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. En "Facturación", selecciona **Deshabilitado**.

## Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Para obtener información sobre cómo administrar y cambiar el límite de gasto de la cuenta, vea "[Administración del límite de gasto para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
