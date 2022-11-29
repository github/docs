---
title: Diferencias entre aplicaciones de GitHub y aplicaciones de OAuth
intro: 'El entender las diferencias entre las {% data variables.product.prodname_github_apps %} y las {% data variables.product.prodname_oauth_apps %} te ayudará a decidir qué app quieres crear. Una {% data variables.product.prodname_oauth_app %} actúa como un usuario de Github, mientras que una {% data variables.product.prodname_github_app %} utiliza su propia identidad cuando se instala en una organización o en repositorios dentro de una organización.'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
ms.openlocfilehash: d70304b71de11a4a24f2acc6c2545e78cbd19b0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148009691'
---
## ¿Quién puede instalar GitHub Apps y autorizar Apps de OAuth?

Puedes instalar GitHub Apps en tu cuenta personal o en las organizaciones que te pertenezcan. Si tienes permisos administrativos en un repositorio, puedes instalar GitHub Apps en las cuentas de la organización. Si se instala una GitHub App en un repositorio y requiere permisos de organización, el propietario de la organización deberá aprobar la aplicación.

{% data reusables.apps.app_manager_role %}

Por el contrario, los usuarios autorizan las aplicaciones de OAuth, lo que concede a estas aplicaciones la capacidad de actuar como un usuario autenticado. Por ejemplo, puedes autorizar una App de OAuth que encuentre todas las notificaciones para el usuario autenticado. Siempre puedes retirar los permisos de las Apps de OAuth.

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %}{% endif %}

{% data reusables.apps.deletes_ssh_keys %}

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ------ |
| Debes ser un propietario de la organización o tener permisos administrativos en un repositorio para instalar una GitHub App en una organización. Si se instala una GitHub App en un repositorio y requiere permisos de organización, el propietario de la organización deberá aprobar la aplicación. | Puedes autorizar una app de OAuth para que tenga acceso a los recursos. |
| Puedes instalar una GitHu App en tu repositorio personal. | Puedes autorizar una app de OAuth para que tenga acceso a los recursos.|
| Debes ser un propietario de la organización, propietario del repositorio personal, o tener permisos administrativos en un repositorio para desinstalar una GitHub App y eliminar su acceso. | Puedes borrar un token de acceso de OAuth para eliminar el acceso. |
| Debes ser un propietario de la organización o tener permisos administrativos en un repositorio para solicitar la instalación de una GitHub App. | Si está activa una política de aplicación organizacional, cualquier miembro de la organización puede solicitar la instalación de una App de OAuth en dicha organización. Un propietario de la organización deberá aprobar o negar la solicitud. |

## ¿A qué recursos pueden acceder las GitHub Apps y las Apps de OAuth?

Los propietarios de las cuentas pueden utilizar una {% data variables.product.prodname_github_app %} en una cuenta sin otorgarle acceso a otra cuenta. Por ejemplo, puedes instalar un servicio de compilación de terceros en la organización de tu patrón laboral, pero puedes decidir no otorgar a esa compilación acceso de servicio a los repositorios en tu cuenta personal. Una GitHub App permanece instalada si la persona que la configuró deja a la organización.

Una aplicación de OAuth _autorizada_ tiene acceso a todos los recursos que son accesibles para el usuario o el propietario de la organización.

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ------ |
| La instalación de una aplicación de GitHub concede a la aplicación acceso a los repositorios elegidos de una cuenta de usuario u organización. | La autorización de una aplicación de OAuth concede a la aplicación acceso a los recursos accesibles del usuario. Por ejemplo, los repositorios a los que puede acceder. |
| El token de instalación de una GitHub App pierde acceso a los recursos si un administrador elimina los repositorios de la instalación. | Un token de acceso de OAuth pierde acceso a los recursos cuando el usuario mismo pierde acceso a ellos, como cuando pierden el acceso de escritura a un repositorio. |
| Los tokens de acceso de instalación se limitan a repositorios especificados con los permisos que ha elegido el creador de la aplicación. | Un token de acceso de OAuth se limita mediante ámbitos. |
| Las GitHub Apps pueden solicitar acceso por separado a los informes de problemas y a las solicitudes de extracción sin acceder al contenido real del repositorio. | Las aplicaciones de OAuth deben solicitar el ámbito `repo` para obtener acceso a las incidencias, solicitudes de incorporación de cambios o cualquier recurso que pertenezca al repositorio. |
| Las aplicaciones de GitHub no están sujetas a las directivas de aplicación de la organización. Una aplicación de GitHub solo tiene acceso a los repositorios a los que un propietario de organización le permite acceder. | Si hay una directiva de aplicación de organización activa, solo un propietario de la organización puede autorizar la instalación de una aplicación de OAuth. Si está instalada, la aplicación de OAuth obtiene acceso a cualquier elemento visible para el token que el propietario de la organización tiene dentro de la organización aprobada. |
| Las GitHub Apps reciben un evento de webhook cuando se cambia o elimina una instalación. Esto indica al creador de la app cuando han recibido más o menos accesos a los recursos organizacionales. | Las Apps de OAuth pueden perder el acceso a una organización o a un repositorio en cualquier momento con base en acceso cambiante del usuario que otorga los permisos. La App de OAuth no te informará cuando pierde el acceso a un recurso. |

## Identificación basada en tokens

{% note %}

**Nota:** Las aplicaciones de GitHub también pueden usar un token basado en el usuario. Para más información, vea "[Identificación y autorización de usuarios para Aplicaciones de GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

{% endnote %}

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ----------- |
| Una GitHub App puede solicitar un token de acceso de la instalación si utiilza una llave privada con un formato de token web de JSON fuera de banda. | Una App de OAuth puede intercambiar un token de solicitud por un token de acceso después de una redirección a través de una solicitud web. |
| Un token de instalación identifica la aplicación como el bot de aplicaciones de GitHub, por ejemplo, @jenkins-bot. | Un token de acceso identifica la aplicación como el usuario que ha concedido el token a la aplicación, por ejemplo, @octocat. |
| Los tokens de instalación caducan después de un tiempo predefinido (actualmente, 1 hora). | Los tokens de OAuth permanecen activos hasta que el cliente los revoque. |
| Las {% data variables.product.prodname_github_apps %} instaladas en organizaciones o repositorios están sujetas a límites de tasa para las solicitudes de servidor a servidor. Para más información, vea "[Límites de frecuencia para {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/rate-limits-for-github-apps)". | Los tokens de OAuth utilizan el límite de tasa del usuario de {% ifversion fpt or ghec or ghes %}5,000{% elsif ghae %}15,000{% endif %} solicitudes por hora. |
| Pueden concederse aumentos del límite de frecuencia tanto en el nivel de las aplicaciones de GitHub (lo que afecta a todas las instalaciones) como en el nivel de una instalación individual. | Los aumentos del límite de frecuencia se conceden por cada aplicación de OAuth. Cada token concedido a esa aplicación de OAuth obtiene el aumento en el límite. |
| Las {% data variables.product.prodname_github_apps %} pueden autenticarse en nombre del usuario, a lo cual se le conoce como una solicitud de usuario a servidor. El flujo de autorización es el mismo que el flujo de autorización de la aplicación de OAuth. Los tokens de usuario a servidor pueden expirar y renovarse con un token de actualización. Para más información, vea "[Actualización de tokens de acceso de usuario a servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)" e "[Identificación y autorización de usuarios para Aplicaciones de GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)". | El flujo de OAuth que utilizan las {% data variables.product.prodname_oauth_apps %} autoriza a una {% data variables.product.prodname_oauth_app %} en nombre del usuario. Este es el mismo flujo que se utiliza en las autorizaciones de usuario a servidor de una {% data variables.product.prodname_github_app %}. |

## Solicitar niveles de permiso para recursos

A diferencia de las apps de OAuth, las GitHub Apps tiene permisos específicos que les permiten solicitar acceso únicamente a lo que necesitan. Por ejemplo, una GitHub App de Integración Continua (IC) puede solicitar acceso de lectura al contenido del repositorio y acceso de escritura la API de estado. Puede que alguna otra GitHub App no tenga acceso de escritura o lectura al código, pero aún podrá administrar propuestas, etiquetas e hitos. Las aplicaciones de OAuth no pueden usar permisos pormenorizados.

| Access | Aplicaciones de GitHub (permisos `read` o `write`) | aplicaciones de OAuth |
| ------ | ----- | ----------- |
| **Para acceder a los repositorios públicos** | El repositorio público necesita elegirse durante la instalación. | Ámbito `public_repo`. |
| **Para acceder al código o contenido del repositorio** | Contenidos del repositorio | Ámbito `repo`. |
| **Para acceder a incidencias, etiquetas e hitos** | Issues | Ámbito `repo`. |
| **Para acceder a solicitudes de incorporación de cambios, etiquetas e hitos** | Solicitudes de incorporación de cambios | Ámbito `repo`. |
| **Para acceder a estados de confirmación (para compilaciones de CI)** | Estados de confirmación | Ámbito `repo:status`. |
| **Para acceder a implementaciones y estados de implementación** | Implementaciones | Ámbito `repo_deployment`. |
| **Para recibir eventos desde un webhook** | Las GitHub Apps incluyen un webhook predeterminadamente. | Ámbito `write:repo_hook` o `write:org_hook`. |

## Descubrimiento de repositorios

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ----------- |
| Aplicaciones de GitHub puede examinar `/installation/repositories` para ver los repositorios a los que puede acceder la instalación. | Las aplicaciones de OAuth pueden examinar `/user/repos` para obtener una vista de usuario, o `/orgs/:org/repos` para obtener una vista de la organización, de los repositorios accesibles. |
| Las Github Apps reciben webhooks cuando los repositorios se agregan o eliminan de la instalación. | Las Apps de OAuth crean webhooks de organización para las notificaciones cuando se crea un repositorio nuevo dentro de una organización. |

## webhooks

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ----------- |
| Predeterminadamente, las GitHub Apps tienen un solo webhook que recibe los eventos que se les ha configurado para recibir para cada repositorio al que tengan acceso. | Las Apps de OAuth solicitan el alcance de webhook para crear un webhook de repositorio para cada repositorio del cual necesiten recibir eventos. |
| Las GitHub Apps reciben algunos eventos a nivel organizacional con el permiso del miembro de la organización. | Las Apps de OAuth solicitan el alcance de webhook de la organización para crear un webhook de organización para cada organización de la cual necesiten recibir eventos de nivel organizacional. |
| Los webhooks se deshabilitan automáticamente cuando se desinstala la aplicación de GitHub. | Los webhooks no se deshabilitan automáticamente si se elimina el token de acceso de una aplicación de OAuth y no hay ninguna manera de limpiarlos automáticamente. Deberás pedir a los usuarios que lo hagan manualmente.|

## Acceso a Git

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ----------- |
| Las aplicaciones de GitHub solicitan permiso al contenido del repositorio y usan el token de instalación para autenticarse mediante [Git basado en HTTP](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | Las aplicaciones de OAuth solicitan el ámbito `write:public_key` y [crean una clave de implementación](/rest/reference/deployments#create-a-deploy-key) mediante la API. Posteriormente, pueden usar esa clave para realizar comandos de Git. |
| El token se utiliza como la contraseña HTTP. | El token se utiliza como el nombre de usuario HTTP. |

## Cuentas de máquina vs cuentas de bot

Las cuentas de usuario de máquina son cuentas personales basadas en OAuth que segregan sistemas automatizados con el sistema de usuarios de GitHub.

Las cuentas de bot son específicas para las GitHub Apps y se crean en cada GitHub App.

| Aplicaciones de GitHub | aplicaciones de OAuth |
| ----- | ----------- |
| Los bots de las GitHub Apps no consumen una plaza de {% data variables.product.prodname_enterprise %}. | Una cuenta de usuario de máquina consume una plaza de {% data variables.product.prodname_enterprise %}. |
| Ya que jamás se otorga una contraseña a un bot de una GitHub App, un cliente no podrá iniciar sesión directamente en él. | Una cuenta de usuario de máquina obtiene un nombre de usuario y contraseña para que el cliente lo administre y asegure. |
