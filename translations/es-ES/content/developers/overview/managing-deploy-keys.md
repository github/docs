---
title: Administrar las llaves de despliegue
intro: Aprende las diversas formas de administrar llaves SSH en tus servidores cuando automatizas los scripts de desplegue y averigua qué es lo mejor para ti.
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 425535eb582c84801d79f00df751bb48d4a5b05e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058472'
---
Puedes administrar llaves SSH en tus servidores cuando automatices tus scripts de despliegue utilizando el reenvío del agente de SSH, HTTPS con tokens de OAuth, o usuarios máquina.

## Reenvío del agente SSH

En muchos casos, especialmente al inicio de un proyecto, el reenvío del agente SSH es el método más fácil y rápido a utilizar. El reenvío de agentes utiliza las mismas llaves SSH que utiliza tu ordenador de desarrollo local.

#### Ventajas

* No tienes que generar o llevar registros de las llaves nuevas.
* No hay administración de llaves; los usuarios tienen los mismos permisos en el servidor y localmente.
* No se almacenan las llaves en el servidor, así que, en caso de que el servidor se ponga en riesgo, no necesitas buscar y eliminar las llaves con este problema.

#### Desventajas

* Los usuarios **deben** utilizar SSH para la implementación; no se pueden usar procesos de implementación automatizados.
* El reenvío del agente SSH puede ser difícil de ejecutar para usuarios de Windows.

#### Configurar

1. Habilita el reenvío de agente localmente. Vea [nuestra guía sobre el reenvío de agentes SSH][ssh-agent-forwarding] para más información.
2. Configura tus scripts de despliegue para utilizar el reenvío de agente. Por ejemplo, en un script de Bash, la habilitación del reenvío de agentes tendría un aspecto similar al siguiente: `ssh -A serverA 'bash -s' < deploy.sh`

## Clonado de HTTPS con tokens de OAuth

Si no quieres utilizar llaves SSH, puedes utilizar HTTPS con tokens de OAuth.

#### Ventajas

* Cualquiera que tenga acceso al servidor puede desplegar el repositorio.
* Los usuarios no tienen que implementar la configuración local de SSH.
* No se necesitan tokens múltiples (uno por usuario); un token por servidor es suficiente.
* Los tokens se pueden revocar en cualquier momento, convirtiéndolos esencialmente en una contraseña de un solo uso.
{% ifversion ghes %}
* La generación de nuevos tokens se puede incluir fácilmente en un script mediante [la API de OAuth](/rest/reference/oauth-authorizations#create-a-new-authorization).
{% endif %}

#### Desventajas

* Debes asegurarte de que configuras tu token con los alcances de acceso correctos.
* Los tokens son prácticamente contraseñas, y deben protegerse de la misma manera.

#### Configurar

Vea [nuestra guía sobre cómo crear un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Claves de implementación

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### Ventajas

* Cualquiera que tenga acceso al repositorio y al servidor tiene la capacidad de desplegar el proyecto.
* Los usuarios no tienen que implementar la configuración local de SSH.
* Las claves de implementación son de solo lectura de forma predeterminada, pero puede darles acceso de escritura al agregarlas a un repositorio.

#### Desventajas

* Las llaves de despliegue solo otorgan acceso a un solo repositorio. Los proyectos más complejos pueden tener muchos repositorios que extraer del mismo servidor.
* Las llaves de lanzamiento habitualmente no están protegidas con una frase de acceso, lo cual hace que se pueda acceder fácilmente a ellas si el servidor estuvo en riesgo.

#### Configurar

1. [Ejecuta el procedimiento`ssh-keygen` ][generating-ssh-keys] en el servidor y recuerda dónde guardas el par de claves RSA públicas y privadas generado.
2. En la esquina superior derecha de cualquier página de {% data variables.product.product_name %}, haga clic en la fotografía de perfil y luego en **Your profile**. ![Navegación al perfil](/assets/images/profile-page.png)
3. En la página del perfil, haga clic en **Repositories** y después en el nombre del repositorio. ![Vínculo Repositories](/assets/images/repos.png)
4. Desde el repositorio, haga clic en **Settings**. ![Configuración del repositorio](/assets/images/repo-settings.png)
5. En la barra lateral, haga clic en **Deploy Keys** y después en **Add deploy key**. ![Vínculo para agregar claves de implementación](/assets/images/add-deploy-key.png)
6. Proporciona un título, pégalo en tu llave pública.  ![Página de la llave de despliegue](/assets/images/deploy-key.png)
7. Seleccione **Allow write access** si quiere que esta clave tenga acceso de escritura en el repositorio. Una llave de despliegue con acceso de escritura permite que un despliegue cargue información al repositorio.
8. Haga clic en **Add key**.

#### Utilizar repositorios múltiples en un servidor

Si utilizas repositorios múltiples en un servidor, necesitarás generar un par de llaves dedicados para cada uno. No puedes reutilizar una llave de despliegue para repositorios múltiples.

En el archivo de configuración SSH del servidor (habitualmente `~/.ssh/config`), agregue una entrada de alias para cada repositorio. Por ejemplo:

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0`: alias del repositorio.
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}`: configura el nombre de host que se va a usar con el alias.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key`: asigna una clave privada al alias.

Entonces podrás utilizar el alias del nombre de host para que interactúe con el repositorio utilizando SSH, lo cual utilizará la llave de despliegue única que se asignó a dicho alias. Por ejemplo:

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## Tokens de servidor a servidor

Si el servidor tiene que acceder a repositorios en una o más organizaciones, puede usar una aplicación de GitHub para definir el acceso necesario y, luego, generar tokens de _ámbito limitado_ y de _servidor a servidor_ desde esa aplicación de GitHub. Se puede ajustar el alcance de los tokens de servidor a servidor para repositorios múltiples y pueden tener permisos específicos. Por ejemplo, puedes generar un token con acceso de solo lectura al contenido de un repositorio.

Ya que las GitHub Apps son un actor de primera clase en {% data variables.product.product_name %}, los tokens de servidor a servidor se desacoplan de cualquier usuario de GitHub, lo cual los hace comparables con los "tokens de servicio". Adicionalmente, los tokens de servidor a servidor. tienen límites de tasa dedicados que se escalan de acuerdo con el tamaño de las organizaciones sobre las cuales actúan. Para más información, vea [Límites de frecuencia para {% data variables.product.prodname_github_apps %}](/developers/apps/rate-limits-for-github-apps).

#### Ventajas

- Tokens de alcance muy específico con conjuntos de permisos bien definidos y tiempos de vencimiento (1 hora o menos si se revocan manualmente utilizando la API).
- Límites de tasa dedicados que crecen con tu organización.
- Desacoplados de las identidades de los usuariso de GitHub para que no consuman plazas de la licencia.
- Nunca se les otorga una contraseña, así que no se puede iniciar sesión directamente en ellos.

#### Desventajas

- Se necesita de una configuración adicional para crear la GitHub App.
- Los tokens de servidor a servidor vencen después de 1 hora, entonces necesitan volver a generarse habitualmente cuando se necesite, utilizando código.

#### Configurar

1. Determina si tu GitHub App debería ser pública o privada. Si tu GitHub App solo actúa en los repositorios dentro de tu organización, probablemente la quieras como privada.
1. Determina los permisos que necesita tu GitHub App, tales como el acceso de solo lectura al contenido del repositorio.
1. Crea tu GitHub App a través de la página de configuración de tu organización. Para más información, vea [Creación de una aplicación de GitHub](/developers/apps/creating-a-github-app).
1. Anote la aplicación de GitHub `id`.
1. Genera y descarga la llave privada de tu GitHub App y almacénala de forma segura. Para más información, vea [Generación de una clave privada](/developers/apps/authenticating-with-github-apps#generating-a-private-key).
1. Instala tu GitHub App en los repositorios sobre los que necesita actuar, opcionalmente, puedes instalarla en todos los repositorios de tu organización.
1. Identifica el valor `installation_id` que representa la conexión entre la aplicación de GitHub y los repositorios de la organización a los que puede acceder.  Cada par de aplicación de GitHub y organización tiene como máximo un único valor `installation_id`. Puede identificar este valor `installation_id` mediante la [Obtención de una instalación de la organización para la aplicación autenticada](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app). Para esto es necesario autenticase como una aplicación de GitHub mediante un JWT. Para más información, vea [Autenticación como una aplicación de GitHub](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app).
1. Genere un token de servidor a servidor mediante el punto de conexión de la API REST correspondiente, [Crear un token de acceso de instalación para una aplicación](/rest/reference/apps#create-an-installation-access-token-for-an-app). Para esto es necesario autenticase como una aplicación de GitHub mediante un JWT. Para más información, vea [Autenticación como una aplicación de GitHub](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app) y [Autenticación como una instalación](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation).
1. Esto requiere que un token de servidor a servidor interactúe con tus repositorios, ya sea a través de la API de REST o de GraphQL, o mediante el cliente de Git.

## Usuarios máquina

Si tu servidor necesita acceso a varios repositorios, puedes crear una cuenta nueva en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} y adjuntar la llave SSH que se utilizará exclusivamente para la automatización. Ya que ningún humano usará esta cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, se denomina _usuario de máquina_. Puede agregar el usuario de máquina como [colaborador][collaborator] en un repositorio personal (y conceder acceso de lectura y escritura), como [colaborador externo][outside-collaborator] en un repositorio de la organización (y conceder acceso de lectura, escritura o administrador), o bien a un [equipo][team] con acceso a los repositorios que necesita automatizar (y conceder los permisos del equipo).

{% ifversion fpt or ghec %}

{% tip %}

**Sugerencia:** Nuestros [términos del servicio][tos] establecen que:

> *No se permiten cuentas registradas mediante "bots", ni otros métodos automatizados.*

Esto significa que no puedes automatizar la creación de las cuentas. Pero si quieres crear un solo usuario máquina para automatizar las tareas como el despliegue de scripts en tu proyecto u organización, eso está perfecto.

{% endtip %}

{% endif %}

#### Ventajas

* Cualquiera que tenga acceso al repositorio y al servidor tiene la capacidad de desplegar el proyecto.
* No se necesitan usuarios (humanos) para cambiar su configuración local de SSH.
* No se necesitan llaves múltiples; una por servidor está bien.

#### Desventajas

* Únicamente las organizaciones pueden restringir a los usuarios máquina para que tengan acceso de solo lectura. Los repositorios personales siempre otorgan a los colaboradores acceso de lectura/escritura.
* Las llaves de los usuarios máquina, tal como las llaves de despliegue, a menudo no se encuentran protegidas con una frase de acceso.

#### Configurar

1. [Ejecute el procedimiento `ssh-keygen`][generating-ssh-keys] en el servidor y adjunte la clave pública a la cuenta de usuario de máquina.
2. Otorga a la cuenta del usuario máquina el acceso a los repositorios que quieras automatizar. Para ello, agregue la cuenta como [colaborador][collaborator], como [colaborador externo][outside-collaborator] o a un [equipo][team] de una organización.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team

## Información adicional
- [Configuración de notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
