---
title: Uso del ejecutor de tareas de GitHub
intro: 'Puedes usar el ejecutor de tareas de {% data variables.product.prodname_dotcom %} como tu sistema integrado CI/CD como parte del Programa de acceso temprano cerrado. El ejecutor de tareas de {% data variables.product.product_name %} te permite desarrollar, probar e implementar automáticamente tu código desde un {% data variables.product.prodname_github_app %}, de acuerdo con un archivo de configuración en tu repositorio.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/using-github-task-runner
versions:
  enterprise-server: '*'
---


{% note %}

**Nota:** Antes de solicitar el acceso al ejecutor de tareas de {% data variables.product.prodname_dotcom %}, debes leer y aceptar nuestro Descargo de Programa de acceso temprano y Limitación de responsabilidad en `ENLACE DE ACCESO RÁPIDO` para {% data variables.product.product_location_enterprise %}. Esta documentación está cubierta por esos términos.

{% endnote %}

### En esta guía
- [Acerca del ejecutor de tareas de {% data variables.product.prodname_dotcom %}](#about-github-task-runner)
- [Descarga el ejecutor de tareas binario de {% data variables.product.prodname_dotcom %}](#downloading-the-github-task-runner-binary)
- [Crear el ejecutor de tareas de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_github_app %} en tu aparato](#creating-the-github-task-runner-github-app-on-your-appliance)
- [Instalar la app del ejecutor de tareas de {% data variables.product.prodname_dotcom %}](#installing-the-github-task-runner-app)
- [Ejecutar tareas para un proyecto](#running-tasks-for-a-project)

### Acerca del ejecutor de tareas de {% data variables.product.prodname_dotcom %}

El ejecutor de tareas de {% data variables.product.product_name %} es responsable de ejecutar las tareas que el Despachador puso en cola, un servicio separado que maneja eventos de subida webhook y tareas puestas en cola.

Si bien el Despachador viene con {% data variables.product.product_location_enterprise %}, debes instalar el ejecutor de tareas de {% data variables.product.product_name %} manualmente en tu aparato. Para configurar el ejecutor de tareas de {% data variables.product.product_name %}, debes descargar el ejecutor binario, crear un {% data variables.product.prodname_github_app %} en tu aparato y configurar un servidor para que interactúe con el Despachador.

### Descarga el ejecutor de tareas binario de {% data variables.product.prodname_dotcom %}

Debes descargar el archivo binario de la aplicación del ejecutor de tareas de {% data variables.product.product_name %} en {% data variables.product.product_location_enterprise %}. Para descargar el archivo binario para la plataforma que elijas, visita `https://HOSTNAME/_dispatcher/downloads/`, reemplazando el `nombre del host` con {% data variables.product.product_location_enterprise %} el nombre de host o la dirección IP:

Usa el comando `chmod` para cambiar los permisos para usar el ejecutor de tareas de {% data variables.product.product_name %} en la línea de comandos.

{% mac %}

```shell
$ chmod +x task-runner_darwin_amd64
```

{% endmac %}

{% windows %}

```shell
$ move task-runner_windows_amd64 task-runner_windows_amd64.exe
```

{% endwindows %}

{% linux %}

```shell
$ chmod +x task-runner_linux_amd64
```

{% endlinux %}

### Crear el ejecutor de tareas de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_github_app %} en tu aparato

1. Crea el archivo de configuración `.task-runner.yaml` en tu directorio actual. Puedes usar el marcador `--config` para mover el archivo a un directorio diferente.

```shell
task-runner setup
```

2. Introduce el nombre de host de {% data variables.product.product_location_enterprise %}.
3. Escribe un token de acceso personal, configurado con permisos especializados. Para obtener más información, consulta [Crear un token de acceso personal para la línea de comando](/articles/creating-a-personal-access-token-for-the-command-line/). Puedes usar los permisos del `usuario` si estás creando el {% data variables.product.prodname_github_app %} para tu cuenta, o `admin:org` si estás creando el {% data variables.product.prodname_github_app %} para una organización.
4. Escribe el nombre para {% data variables.product.prodname_github_app %}, por ejemplo, `ejecutor de tareas de Octocat`.
5. Si estás creando un {% data variables.product.prodname_github_app %} para una organización, escribe el nombre de la organización.
6. Inicia el ejecutor de tareas.

```shell
task-runner start
```

### Instalar la app del ejecutor de tareas de {% data variables.product.prodname_dotcom %}

1. En el ángulo superior derecho de cualquier página, haz clic en tu foto de perfil, y luego haz clic en Settings (Parámetros). ![Icono Settings (Parámetros) en la barra de usuario](/assets/images/help/images/userbar-account-settings.png)
2. En la barra lateral izquierda, haz clic en **Developer settings** (Parámetros del desarrollador). ![Sección Developer settings (Parámetros del programador)](/assets/images/help/images/developer_settings.png)
3. En la barra lateral izquierda, haz clic en ****{% data variables.product.prodname_dotcom %} Apps**. ![Sección GitHub Apps](/assets/images/help/images/github_apps.png)</li>
4 Haz clic en la app que deseas instalar.
5 En la barra lateral izquierda, haz clic en **Public page** (Página pública). ![Sección Public page (Página pública)](/assets/images/help/images/public-page-tab.png)
6 Haz clic en **Install** (Instalar). ![Botón Install (Instalar) en la página pública de la app de GitHub](/assets/images/help/images/install-runner-public-page.png)
7 Selecciona **Only select repositories** (Solo seleccionar repositorios) y escribe los nombres de los repositorios donde seas instalar el ejecutor de tareas de {% data variables.product.prodname_dotcom %}. ![Seleccionar repositorios para instalar en](/assets/images/help/images/repositories-install-task-runner.png)
8 Haz clic en **Install** (Instalar). ![Botón Install (Instalar) en la página de instalación de la app de GitHub](/assets/images/help/images/install-runner-installation-page.png)
9 Desplázate hasta el repositorio donde instalaste la app.
10
Crea un archivo `github/tasks.gf`, similar a:

  ```
task "my task" {
command = "command-to-run"
runnerType = "Shell"
env =  {
  FOO="bar",
  BAR="baz"
}
}
  ```
12
Abre una solicitud de extracción para agregar el archivo a tu repositorio.
13 Sube los cambios para ver cómo se ejecutan las tareas de CI.</ol>

### Ejecutar tareas para un proyecto

Una vez que has creado la solicitud de extracción, tu {% data variables.product.prodname_github_app %} subirá el evento al Despachador, donde se coloca la tarea en cola y se envía al ejecutor de tareas de {% data variables.product.prodname_dotcom %}. Una vez que el ejecutor de tareas de {% data variables.product.prodname_dotcom %}{% data variables.product.prodname_dotcom %} recibe y ejecuta las tareas, luego le envía el informe al Despachador, que actualizará las solicitudes de extracción con los resultados.

![Resultados de la prueba de CI de la solicitud de extracción](/assets/images/help/images/task-results.png)
