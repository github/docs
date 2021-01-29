---
title: Guía de inicio rápido para GitHub Actions
intro: 'Agrega un flujo de trabajo de {% data variables.product.prodname_actions %} a un repositorio existente en 5 minutos o menos.'
allowTitleToDifferFromFilename: verdadero
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Solo necesitas tener un repositorio de {% data variables.product.prodname_dotcom %} para crear y ejecutar un flujo de trabajo de {% data variables.product.prodname_actions %}. En esta guía, agregarás un flujo de trabajo que limpia varios lenguajes de programación utilizando la [Acción de Super-Linter de {% data variables.product.prodname_dotcom %}](https://github.com/github/super-linter). El flujo de trabajo utiliza Super-Linter para validar tu código fuente cada que se sube una confirmación a tu repositorio.

### Crear tu primer flujo de trabajo

1. Desde tu repositorio en {% data variables.product.prodname_dotcom %}, crea un archivo nuevo en el directorio `.github/workflows` que se llame `superlinter.yml`. Para obtener más información, consulta "[Crear nuevos archivos](/github/managing-files-in-a-repository/creating-new-files)."
2. Copia el siguiente contenido de YAML en el arcvhivo `superlinter.yml`. **Nota:** Si tu rama predeterminada no es `main`, actualiza el valor de `DEFAULT_BRANCH` para que refleje el nombre de la rama predeterminada de tu repositorio.
    {% raw %}
    ```yaml{:copy}
    name: Super-Linter

    # Run this workflow every time a new commit pushed to your repository
    on: push

    jobs:
      # Set the job key. The key is displayed as the job name
      # when a job name is not provided
      super-lint:
        # Name the Job
        name: Lint code base
        # Set the type of machine to run on
        runs-on: ubuntu-latest

        steps:
          # Checks out a copy of your repository on the ubuntu-latest machine
          - name: Checkout code
            uses: actions/checkout@v2

          # Runs the Super-Linter action
          - name: Run Super-Linter
            uses: github/super-linter@v3
            env:
              DEFAULT_BRANCH: main
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
3. Para ejecutar tu flujo de trabajo, desplázate al final de la página y selecciona **Crear una rama nueva para esta confirmación e iniciar una solicitud de cambios**. Después, para crear una solicitud de cambios, da clic en **Proponer un archivo nuevo**. ![Archivo de flujo de trabajo de la confirmación](/assets/images/commit-workflow-file.png)

El confirmar el flujo de trabajo en tu repositorio activará el evento de `push` y ejecutará tu flujo de trabajo.

### Ver los resultados de tu flujo de trabajo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. Debajo de **Jobs** o en la gráfica de visualización, da clic en el job de **Limpiar base de código**. ![Limpiar el job de código base](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% else %}
1. En la barra lateral, da clic en el job de **Lint code base**. ![Limpiar el job de código base](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% endif %}
{% data reusables.repositories.view-failed-job-results-superlinter %}

### Más plantillas de flujo de trabajo

{% data reusables.actions.workflow-template-overview %}

### Pasos siguientes

El flujo de trabajo de super-linter que acabas de agregar se ejecuta en cualquier momento en que se suba cópdigo a tu repositorio para ayudarte a detectar los errores y las coincidencias del mismo. Pero esto es solo el inicio de lo que puedes hacer con {% data variables.product.prodname_actions %}. Tu repositorio puede contener varios flujos de trabajo que activen jobs diferentes basándose en eventos diferentes. {% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu s procesos de desarrollo de aplicaciones. ¿Listo para comenzar? Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_actions %}:

- "[Aprende más sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" con este tutorial detallado
- "[Guías](/actions/guides)" para casos de uso específico y ejemplos
- [github/super-linter](https://github.com/github/super-linter) para obtener más detalles sobre la configuración de la acción de Super-Linter

<div id="quickstart-treatment" hidden>

### Introducción

Imprimir "Hello, World!" es una forma excelente de explorar la configuración y sintaxis básicas para un lenguaje de programación nuevo. Ene sta guía, utilizarás GitHub Actions para imprimir "Hello, World!" dentro de las bitácoras de flujo de trabajo de tu repositorio de {% data variables.product.prodname_dotcom %}. Lo único que necesitas para comenzar es un repositorio de {% data variables.product.prodname_dotcom %} en donde te sientas cómodo para crear y ejecutar un flujo de trabajo de {% data variables.product.prodname_actions %} de muestra. Ten la confianza de crear un repositorio nuevo para esta guía rápida, puedes utilizarlo para probar este y otros flujos de trabajo de {% data variables.product.prodname_actions %} posteriores.

### Crear tu primer flujo de trabajo

1. Desde tu repositorio en {% data variables.product.prodname_dotcom %}, crea un archivo nuevo en el directorio `.github/workflows` que se llame `hello-world.yml`. Para obtener más información, consulta la sección "[Crear archivos nuevos](/github/managing-files-in-a-repository/creating-new-files)."
2. Copia el siguiente contenido de YAML en el archivo `hello-world.yml`.
    {% raw %}
    ```yaml{:copy}
    name: Say hello!

    # GitHub Actions Workflows are automatically triggered by GitHub events
    on:
      # For this workflow, we're using the workflow_dispatch event which is triggered when the user clicks Run workflow in the GitHub Actions UI
      workflow_dispatch:
        # The workflow_dispatch event accepts optional inputs so you can customize the behavior of the workflow
        inputs:
          name:
            description: 'Person to greet'
            required: true
            default: 'World'
    # When the event is triggered, GitHub Actions will run the jobs indicated
    jobs:
      say_hello:
        # Uses a ubuntu-latest runner to complete the requested steps
        runs-on: ubuntu-latest
        steps:
        - run: |
            echo "Hello ${{ github.event.inputs.name }}!"
    ```
    {% endraw %}
3. Desplázate al final de la página y selecciona **Crear una rama nueva para esta confirmación e iniciar una solicitud de extracción**. Después, para crear una solicitud de extracción, da clic en **Proponer archivo nuevo**.
    ![Commit workflow file](/assets/images/help/repository/commit-hello-world-file.png)
4. Una vez que la solicitud de extracción se haya fusionado, estarás listo para pasar a "Activar tu flujo de trabajo".

### Activar tu flujo de trabajo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic ene l flujo de trabajo que quieras ejecutar.
   ![Selecciona el job de "say hello"](/assets/images/help/repository/say-hello-job.png)
1. A la derecha, da clic en el menú desplegable de *Ejecutar flujo de trabajo** y da clic en **Ejecutar flujo de trabajo**. Opcionalmente, puedes ingresar un mensaje personalizado en la entrada "Persona a saludar" antes de ejecutar el flujo de trabajo.
   ![Activar el flujo de trabajo manual](/assets/images/help/repository/manual-workflow-trigger.png)
1. El flujo de trabajo aparecerá en la parte superior de la lista de las ejecuciones de flujo de trabajo para "Say hello!". Da clic en "Say Hello!" para ver el resultado de la ejecución del flujo de trabajo.
   ![Listado de resultado para el flujo de trabajo](/assets/images/help/repository/workflow-run-listing.png)
1. En la barra lateral izquierda, da clic en el job "say_hello".
   ![Listado del job del flujo de trabajo](/assets/images/help/repository/workflow-job-listing.png)
1. En las bitácoras del flujo de trabajo, expande la sección de 'Run echo "Hello World!"'.
   ![Workflow detail](/assets/images/help/repository/workflow-log-listing.png)

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### Next steps

The hello-world workflow you just added is a simple example of a manually triggered workflow. Esto es solo el inicio de lo que puedes hacer con {% data variables.product.prodname_actions %}. Tu repositorio puede contener varios flujos de trabajo que activen jobs diferentes basándose en eventos diferentes. {% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu s procesos de desarrollo de aplicaciones. ¿Listo para comenzar? Aquí puedes encontrar algunos recursos de gran ayuda para tomar los siguientes pasos con {% data variables.product.prodname_actions %}:

- "[Aprende a usar las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para un tutorial a fondo
- "[Guides](/actions/guides)" para casos de uso y ejemplos específicos

</div>
