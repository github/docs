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
* Se puede generar nuevos tokens con scripts si se utiliza [la API de OAuth](/rest/reference/oauth-authorizations#create-a-new-authorization).

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
