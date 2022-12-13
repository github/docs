---
title: Habilitar los Codespaces para tu organización
shortTitle: Enable Codespaces
intro: Puedes controlar qué usuarios de tu organización pueden utilizar {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119929"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Acerca de cómo habilitar los {% data variables.product.prodname_codespaces %} para tu organización

Los propietarios de organización pueden controlar qué usuarios de tu organización pueden crear y utilizar codespaces.

Para utilizar codespaces en tu organización, debes hacer lo siguiente:

- Asegúrese de que los usuarios tengan [al menos acceso de escritura](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) a los repositorios en los que quieran usar un codespace. 
- [Habilitación de {% data variables.product.prodname_codespaces %} para los usuarios de la organización](#enable-codespaces-for-users-in-your-organization). Puedes elegir permitir los {% data variables.product.prodname_codespaces %} para los usuarios seleccionados o solo para algunos específicos.
- [Configuración de un límite de gastos](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Asegúrate de que tu organización no tenga habilitada una lista de direcciones IP permitidas. Para más información, vea "[Administración de direcciones IP permitidas para la organización](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

Predeterminadamente, un codespace solo puede acceder al repositorio desde el cual se creó. Si quier que los codespace de la organización puedan acceder a otros repositorios de la organización a los que el creador del codespace pueda acceder, vea "[Administración del acceso y la seguridad de {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>Habilitar los {% data variables.product.prodname_codespaces %} para los usuarios en tu organización

{% ifversion fpt %} {% note %}

**Nota:** Si eres educador o instructor verificado, debes habilitar {% data variables.product.prodname_codespaces %} desde tu instancia de {% data variables.product.prodname_classroom %} para usar tu ventaja {% data variables.product.prodname_codespaces %} Education. Para más información, consulta "[Uso de GitHub Codespaces con GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)".

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Debajo de "Permisos de usuario", selecciona una de las siguientes opciones:

   * **Usuarios seleccionados** para seleccionar miembros específicos de la organización que puedan usar {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos los miembros** para permitir que todos los miembros de la organización usen {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos los miembros y colaboradores externos** para permitir que todos los miembros de la organización, así como los colaboradores externos, usen {% data variables.product.prodname_codespaces %}.

   ![Botones de radio para "Permisos de usuario"](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Nota:** Al seleccionar **Permitir para todos los miembros y colaboradores externos**, todos los colaboradores externos que se hayan agregado a repositorios específicos podrán crear y usar {% data variables.product.prodname_codespaces %}. Se le facturará a tu organización por todo el uso en el que incurrieron los colaboradores externos. Para más información sobre cómo administrar colaboradores externos, vea "[Acerca de los colaboradores externos](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)".

   {% endnote %}

1. Haga clic en **Save**(Guardar).

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Inhabilitar los {% data variables.product.prodname_codespaces %} para tu organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. En "Permisos de usuario", seleccione **Deshabilitado**.

## <a name="setting-a-spending-limit"></a>Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Para obtener información sobre cómo administrar y cambiar el límite de gasto de la cuenta, vea "[Administración del límite de gasto para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
