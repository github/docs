---
title: Administrar los secretos cifrados para el Dependabot
intro: 'Puedes almacenar la información sensible, como las contraseñas y tokens de acceso, como secretos cifrados y luego referenciarlos en el archivo de configuración del {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106377'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Acerca de los secretos cifrados para {% data variables.product.prodname_dependabot %}

Los secretos del {% data variables.product.prodname_dependabot %} son credenciales cifradas que creas ya sea a nivel de la organización o del repositorio.
Cuando agregas un secreto a nivel de la organización, puedes especificar qué repositorios pueden acceder a éste. Puedes utilizar secretos para permitir que el {% data variables.product.prodname_dependabot %} actualice las dependencias que se ubiquen en los registros del paquete. Cuando agregas un secreto que está cifrado antes de llegar a {% data variables.product.prodname_dotcom %} y permanece cifrado hasta que lo utiliza el {% data variables.product.prodname_dependabot %} para acceder a un registro de paquetes privado.

Después de agregar un secreto de {% data variables.product.prodname_dependabot %}, puede hacer referencia a él en el archivo de configuración _dependabot.yml_ como este: {% raw %}`${{secrets.NAME}}`{% endraw %}, donde "NAME" es el nombre que ha elegido para el secreto. Por ejemplo: 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".

### Nombrar tus secretos

El nombre de un secreto del {% data variables.product.prodname_dependabot %}:
* Solo puede contener caracteres alfanuméricos (`[A-Z]` o `[0-9]`) o caracteres de subrayado (`_`). No se permiten espacios. Si escribes en minúscula, se cambiará todo a mayúsculas.
* No debe comenzar con el prefijo `GITHUB_`.
* No puede iniciar con un número.

## Agregar un secreto de repositorio para el {% data variables.product.prodname_dependabot %}

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.dependabot.sidebar-secret %}
1. Haga clic en **New repository secret**.
1. Escriba un nombre para su secreto en el cuadro de entrada **Name**.
1. Ingresa el valor de tu secreto.
1. Haga clic en **Add Secret**.

   El nombre del secreto se lista en la página de secretos del Dependabot. Puede hacer clic en **Update** (Actualizar) para cambiar el valor del secreto. Puede hacer clic en **Remove** (Quitar) para eliminar el secreto.

   ![Actualizar o eliminar un secreto del repositorio](/assets/images/help/dependabot/update-remove-repo-secret.png)

## Agregar un secreto de organización para el {% data variables.product.prodname_dependabot %}

Cuando creas un secreto en una organización, puedes utilizar una política para limitar el acceso de los repositorios a este. Por ejemplo, puedes otorgar acceso a todos los repositorios, o limitarlo a solo los repositorios privados o a una lista específica de estos.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.dependabot.sidebar-secret %}
1. Haga clic en **New organization secret**.
1. Escriba un nombre para su secreto en el cuadro de entrada **Name**.
1. Introduzca el valor del secreto en **Value**.
1. En la lista desplegable **Repository access** (Acceso al repositorio), elija una directiva de acceso.
1. Si ha elegido **Selected repositories** (Repositorios seleccionados):

   * Haga clic en {% octicon "gear" aria-label="The Gear icon" %}.
   * Elige los repositorios que pueden acceder a este secreto. 
     ![Selección de los repositorios para este secreto](/assets/images/help/dependabot/secret-repository-access.png)
   * Haga clic en **Update selection** (Actualizar selección).

1. Haga clic en **Add Secret**.

   El nombre del secreto se lista en la página de secretos del Dependabot. Puede hacer clic en **Update** (Actualizar) para cambiar el valor del secreto o su directiva de acceso. Puede hacer clic en **Remove** (Quitar) para eliminar el secreto.

   ![Actualiza o elimina un secreto de organización](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## Agregar al {% data variables.product.prodname_dependabot %} a tu lista de direcciones IP permitidas de tus registros

Si el registro privado se configura con una lista de direcciones IP permitidas, puede encontrar las direcciones IP que utiliza {% data variables.product.prodname_dependabot %} para acceder al registro en el punto de conexión de meta API, en la clave `dependabot`. Para obtener más información, vea "[Meta](/rest/reference/meta)".
