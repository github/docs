---
title: Administrar las llaves de despliegue
intro: Aprende las diversas formas de administrar llaves SSH en tus servidores cuando automatizas los scripts de desplegue y averigua qué es lo mejor para ti.
redirect_from:
  - /guides/managing-deploy-keys/
  - /v3/guides/managing-deploy-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


Puedes administrar llaves SSH en tus servidores cuando automatices tus scripts de despliegue utilizando el reenvío del agente de SSH, HTTPS con tokens de OAuth, o usuarios máquina.

### Reenvío del agente SSH

En muchos casos, especialmente al inicio de un proyecto, el reenvío del agente SSH es el método más fácil y rápido a utilizar. El reenvío de agentes utiliza las mismas llaves SSH que utiliza tu ordenador de desarrollo local.

##### Pros

* No tienes que generar o llevar registros de las llaves nuevas.
* No hay administración de llaves; los usuarios tienen los mismos permisos en el servidor y localmente.
* No se almacenan las llaves en el servidor, así que, en caso de que el servidor se ponga en riesgo, no necesitas buscar y eliminar las llaves con este problema.

##### Contras

* Los usuarios **deben** ingresar cno SSH para hacer los despliegues; no pueden utilizarse los procesos de despliegue automatizados.
* El reenvío del agente SSH puede ser difícil de ejecutar para usuarios de Windows.

##### Configuración

1. Habilita el reenvío de agente localmente. Consulta [nuestra guía sobre el redireccionamiento del agente SSH][ssh-agent-forwarding] para obtener más información.
2. Configura tus scripts de despliegue para utilizar el reenvío de agente. Por ejemplo, el habilitar el reenvío de agentes en un script de bash se vería más o menos así: `ssh -A serverA 'bash -s' < deploy.sh`

### Clonado de HTTPS con tokens de OAuth

Si no quieres utilizar llaves SSH, puedes utilizar [HTTPS con tokens de OAuth][git-automation].

##### Pros

* Cualquiera que tenga acceso al servidor puede desplegar el repositorio.
* Los usuarios no tienen que cambiar su configuración local de SSH.
* No se necesitan tokens múltiples (uno por usuario); un token por servidor es suficiente.
* Los tokens se pueden revocar en cualquier momento, convirtiéndolos esencialmente en una contraseña de un solo uso.
{% if enterpriseServerVersions contains currentVersion %}
* Se puede generar nuevos tokens con scripts si se utiliza [la API de OAuth](/rest/reference/oauth-authorizations#create-a-new-authorization).
{% endif %}

##### Contras

* Debes asegurarte de que configuras tu token con los alcances de acceso correctos.
* Los tokens son prácticamente contraseñas, y deben protegerse de la misma manera.

##### Configuración

Consulta [nuestra guía sobre la automatización de tokens en Git][git-automation].

### Llaves de implementación

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

##### Pros

* Cualquiera que tenga acceso al repositorio y al servidor tiene la capacidad de desplegar el proyecto.
* Los usuarios no tienen que cambiar su configuración local de SSH.
* Las llaves de despliegue son de solo lectura predeterminadamente, pero les puedes otorgar acceso de escritura cuando las agregas a un repositorio.

##### Contras

* Las llaves de despliegue solo otorgan acceso a un solo repositorio. Los proyectos más complejos pueden tener muchos repositorios que extraer del mismo servidor.
* Las llaves de lanzamiento habitualmente no están protegidas con una frase de acceso, lo cual hace que se pueda acceder fácilmente a ellas si el servidor estuvo en riesgo.

##### Configuración

1. [Ejecuta el procedimiento de `ssh-keygen`][generating-ssh-keys] en tu servidor, y recuerda en donde guardaste el par de llaves pública/privada de rsa.
2. En la esquina superior derecha de cualquier página de {% data variables.product.product_name %}, da clic en tu foto de perfil y luego da clic en **Tu perfil**. ![Navegación al perfil](/assets/images/profile-page.png)
3. En tu página de perfil, da clic en **Repositorios** y luego en el nombre de tu repositorio. ![Enlace de los repositorios](/assets/images/repos.png)
4. Desde tu repositorio, da clic en **Configuración**. ![Configuración del repositorio](/assets/images/repo-settings.png)
5. En la barra lateral, da clic en **Desplegar llaves** y luego en **Agregar llave de despliegue**. ![Enlace para agregar llaves de despliegue](/assets/images/add-deploy-key.png)
6. Proporciona un título, pégalo en tu llave pública.  ![Página de la llave de despliegue](/assets/images/deploy-key.png)
7. Selecciona **Permitir acceso de escritura** si quieres que esta llave tenga acceso de escritura en el repositorio. Una llave de despliegue con acceso de escritura permite que un despliegue cargue información al repositorio.
8. Da clic en **Agregar llave**.

##### Utilizar repositorios múltiples en un servidor

Si utilizas repositorios múltiples en un servidor, necesitarás generar un par de llaves dedicados para cada uno. No puedes reutilizar una llave de despliegue para repositorios múltiples.

En el archivo de configuración SSH del servidor (habitualmente `~/.ssh/config`), agrega una entrada de alias para cada repositorio. Por ejemplo:

```bash
Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - El alias del repositorio.
* `Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}` - Configura el nombre de host para utilizarlo con el alias.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Asigna una llave privada al alias.

Entonces podrás utilizar el alias del nombre de host para que interactúe con el repositorio utilizando SSH, lo cual utilizará la llave de despliegue única que se asignó a dicho alias. Por ejemplo:

```bash
$ git clone git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

### Tokens de servidor a servidor

Si tu servidor necesita acceder a repositorios a lo largo de una o más organizaciones, puedes utilizar una GitHub app para definir el acceso que necesitas y luego generar tokens de _alcance limitado_ de _servidor a servidor_ desde dicha GitHub App. Se puede ajustar el alcance de los tokens de servidor a servidor para repositorios múltiples y pueden tener permisos específicos. Por ejemplo, puedes generar un token con acceso de solo lectura al contenido de un repositorio.

Ya que las GitHub Apps son un actor de primera clase en {% data variables.product.product_name %}, los tokens de servidor a servidor se desacoplan de cualquier usuario de GitHub, lo cual los hace comparables con los "tokens de servicio". Adicionalmente, los tokens de servidor a servidor. tienen límites de tasa dedicados que se escalan de acuerdo con el tamaño de las organizaciones sobre las cuales actúan. Para obtener más información, consulta la sección [Límites de tasa para las GitHub Apps](/developers/apps/rate-limits-for-github-apps).

##### Pros

- Tokens de alcance muy específico con conjuntos de permisos bien definidos y tiempos de vencimiento (1 hora o menos si se revocan manualmente utilizando la API).
- Límites de tasa dedicados que crecen con tu organización.
- Desacoplados de las identidades de los usuariso de GitHub para que no consuman plazas de la licencia.
- Nunca se les otorga una contraseña, así que no se puede iniciar sesión directamente en ellos.

##### Contras

- Se necesita de una configuración adicional para crear la GitHub App.
- Los tokens de servidor a servidor vencen después de 1 hora, entonces necesitan volver a generarse habitualmente cuando se necesite, utilizando código.

##### Configuración

1. Determina si tu GitHub App debería ser pública o privada. Si tu GitHub App solo actúa en los repositorios dentro de tu organización, probablemente la quieras como privada.
1. Determina los permisos que necesita tu GitHub App, tales como el acceso de solo lectura al contenido del repositorio.
1. Crea tu GitHub App a través de la página de configuración de tu organización. Para obtener más información, consulta la sección [Crear una GitHub App](/developers/apps/creating-a-github-app).
1. Ten en cuenta la `id` de tu GitHub App.
1. Genera y descarga la llave privada de tu GitHub App y almacénala de forma segura. Para obtener más información, consulta la sección [Generar una llave privada](/developers/apps/authenticating-with-github-apps#generating-a-private-key).
1. Instala tu GitHub App en los repositorios sobre los que necesita actuar, opcionalmente, puedes instalarla en todos los repositorios de tu organización.
1. Identifica la `installation_id` que representa la conexión entre tu GitHub App y los repositorios de tu organización a los que puede acceder.  Cada par de GitHub App y organización tienen por lo mucho una sola `installation_id`. Puedes identificar esta `installation_id` a través de la sección [Obtén una instalación de organización para la app autenticada](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app). Esto requiere autenticarse como una GitHub App utilizando un JWT. Para obtener más información, consulta la sección [Autenticarse como una GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app).
1. Genera un token de servidor a servidor utilizando la terminal de la API de REST correspondiente, [Crear un token de acceso a la instalación para una app](/rest/reference/apps#create-an-installation-access-token-for-an-app). Esto requiere autenticarse como una GitHub App utilizando un JWT. Para obtener más información, consulta las secciones [Autenticarse como una GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app) y [Autenticarse como una instalación](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation).
1. Esto requiere que un token de servidor a servidor interactúe con tus repositorios, ya sea a través de la API de REST o de GraphQL, o mediante el cliente de Git.

### Usuarios máquina

Si tu servidor necesita acceder a repositorios múltiples, puedes crear una nueva cuenta de {% data variables.product.product_name %} y adjuntar una llave SSH que se utilizará exclusivamente para fines de automatización. Ya que ninguna persona utilizará esta cuenta de {% data variables.product.product_name %}, se le llama _usuario máquina_. Puedes agregar el usuario máquina como [colaborador][collaborator] en un repositorio personal (otorgándole acceso de lectura y escritura), como un [colaborador externo][outside-collaborator] en el repositorio de una organización (otorgándole acceso de lectura, escritura y administrador), o a un [equipo][team] con acceso a los repositorios que necesite para la automatización (otorgándole los permisos del equipo).

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tip:** En nuestras [condiciones de servicio][tos] se declara que:

> *No se permiten las cuentas que registren ni los "bots", ni otros métodos automatizados.*

Esto significa que no puedes automatizar la creación de las cuentas. Pero si quieres crear un solo usuario máquina para automatizar las tareas como el despliegue de scripts en tu proyecto u organización, eso está perfecto.

{% endtip %}

{% endif %}

##### Pros

* Cualquiera que tenga acceso al repositorio y al servidor tiene la capacidad de desplegar el proyecto.
* No se necesitan usuarios (humanos) para cambiar su configuración local de SSH.
* No se necesitan llaves múltiples; una por servidor está bien.

##### Contras

* Únicamente las organizaciones pueden restringir a los usuarios máquina para que tengan acceso de solo lectura. Los repositorios personales siempre otorgan a los colaboradores acceso de lectura/escritura.
* Las llaves de los usuarios máquina, tal como las llaves de despliegue, a menudo no se encuentran protegidas con una frase de acceso.

##### Configuración

1. [Ejecuta el procedimiento de `ssh-keygen`][generating-ssh-keys] en tu servidor y adjunta la llave pública a la cuenta del usuario máquina.
2. Otorga a la cuenta del usuario máquina el acceso a los repositorios que quieras automatizar. Puedes hacer esto si agregas la cuenta como un [colaborador][collaborator], como un [colaborador externo][outside-collaborator], o a un [equipo][team] en una organización.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /articles/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
