---
title: Administrar los secretos cifrados de tu repositorio y organización para los Codespaces
shortTitle: Encrypted secrets
intro: Los secretos cifrados te permiten almacenar información sensible en tu organización, repositorio o {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Secret store
- Security
ms.openlocfilehash: 062b73c8559b700bdbd37a6b31da44403c2092f5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119897"
---
## <a name="about-secrets"></a>Acerca de los secretos

Los secretos son variables de ambiente cifradas que creas en una organización o repositorio. Los secretos que creas están disponibles para utilizarse en {% data variables.product.prodname_codespaces %}. GitHub usa una [sealed box de libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para cifrar secretos antes de que lleguen a GitHub, y solo se descifran cuando los usa en un codespace.

Los secretos a nivel organizacional te permiten compartir secretos entre repositorios múltiples, lo cual reduce la necesidad de crear secretos duplicados. Puedes utilizar las políticas de acceso para controlar qué repositorios pueden utilizar los secretos de la organización. 

{% data reusables.codespaces.secrets-on-start %}

### <a name="naming-secrets"></a>Nombrar secretos

{% data reusables.codespaces.secrets-naming %} Por ejemplo, un secreto que se creó a nivel de repositorio debe tener un nombre único en dicho repositorio y uno que se haya cerado a nivel organizacional debe tener un nombre único en dicho nivel.

  {% data reusables.codespaces.secret-precedence %}

### <a name="limits-for-secrets"></a>Límites para los secretos

Puedes almacenar hasta 100 secretos por organización y 100 por repositorio.

Los secretos tienen un tamaño máximo de 64 KB.

## <a name="adding-secrets-for-a-repository"></a>Agregar secretos para un repositorio

Para crear secretos para un repositorio de la organización, debes tener acceso adminsitrativo.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En la sección "Security" de la barra lateral, seleccione **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets** y haga clic en **{% data variables.product.prodname_codespaces %}** .
2. En la parte superior de la página, haga clic en **New repository secret**.
3. Escriba un nombre para el secreto en el cuadro de entrada **Name**.
4. Ingresa el valor de tu secreto.
5. Haga clic en **Add Secret**.

## <a name="adding-secrets-for-an-organization"></a>Agregar secretos para una organización

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
1. En la sección "Security" de la barra lateral, seleccione **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets** y haga clic en **{% data variables.product.prodname_codespaces %}** .
2. En la parte superior de la página, haga clic en **New organization secret**.
3. Escriba un nombre para el secreto en el cuadro de entrada **Name**.
4. Introduzca el valor del secreto en **Value**.
5. En la lista desplegable **Repository access**, elija una directiva de acceso.
    ![Lista de acceso a los repositorios con los repositorios privados seleccionados](/assets/images/help/codespaces/secret-repository-access.png)
6. Haga clic en **Add Secret**.

## <a name="reviewing-access-to-organization-level-secrets"></a>Revisar el acceso a los secretos de nivel organizacional

Puedes revisar qué políticas de acceso se aplican a un secreto en tu organización.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. La lista de secretos incluye cualquier política y permiso configurado. Por ejemplo: ![Lista de secretos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para obtener más información sobre los permisos configurados para cada secreto, haga clic en **Update**.

## <a name="further-reading"></a>Información adicional

- "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
