---
title: Guía de inicio rápido para GitHub Actions
intro: 'Prueba las características de las {% data variables.product.prodname_actions %} en 5 minutos o menos.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: quick_start
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Solo necesitas un repositorio de {% data variables.product.prodname_dotcom %} para crear y ejecutar un flujo de trabajo de {% data variables.product.prodname_actions %}. En esta guía, agregarás un flujo de trabajo que demuestre algunas de las características esenciales de las {% data variables.product.prodname_actions %}.

El siguiente ejemplo te muestra cómo los jobs de las {% data variables.product.prodname_actions %} pueden activarse automáticamente, dónde se ejecutan y cómo pueden interactuar con el código en tu repositorio.

### Crear tu primer flujo de trabajo

1. Desde tu repositorio en {% data variables.product.prodname_dotcom %}, crea un archivo nuevo en el directorio `.github/workflows` que se llame `github-actions-demo.yml`. Para obtener más información, consulta "[Crear nuevos archivos](/github/managing-files-in-a-repository/creating-new-files)."
2. Copia el siguiente contenido de YAML en el arcvhivo `github-actions-demo.yml`:
    {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
          - name: Check out repository code
            uses: actions/checkout@v2
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Desplázate hasta el final de la página y selecciona **Crear una rama nueva para esta confirmación e iniciar una solicitud de cambios**. Después, para crear una solicitud de cambios, da clic en **Proponer un archivo nuevo**. ![Archivo de flujo de trabajo de la confirmación](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

El confirmar el flujo de trabajo en una rama de tu repositorio activa el evento `push` y ejecuta tu flujo de trabajo.

### Ver los resultados de tu flujo de trabajo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieres ver.

   ![Lista de flujos de trabajo en la barra lateral izquierda](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. Desde la lista de ejecuciones de flujo de trabajo, da clic en el nombre de la ejecución que quieres ver.

   ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Debajo de **Jobs**, haz clic en el job **Explore-GitHub-Actions**.

   ![Ubicar un job](/assets/images/help/repository/actions-quickstart-job.png)
1. La bitácora muestra cómo se procesó cada uno de los pasos. Expande cualquiera de los pasos para ver sus detalles.

   ![Resultados del flujo de trabajo de ejemplo](/assets/images/help/repository/actions-quickstart-logs.png)

   Por ejemplo, puedes ver la lista de archivos en tu repositorio: ![Detalle de la acción de ejemplo](/assets/images/help/repository/actions-quickstart-log-detail.png)

### Más plantillas de flujo de trabajo

{% data reusables.actions.workflow-template-overview %}

### Pasos siguientes

El flujo de trabajo de ejemplo que acabas de agregar se ejecuta cada vez que se sube el código a la rama y te muestra cómo pueden funcionar las {% data variables.product.prodname_actions %} con el contenido de tu repositorio. Pero esto es solo el inicio de lo que puedes hacer con {% data variables.product.prodname_actions %}:

- Tu repositorio puede contener varios flujos de trabajo que activen jobs diferentes basándose en eventos diferentes.
- Puedes utilizar un flujo de trabajo apra instalar las apps de prueba de software y hacer que prueben tu código automáticamente en los ejecutores de {% data variables.product.prodname_dotcom %}.

{% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu s procesos de desarrollo de aplicaciones. ¿Listo para comenzar? Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_actions %}:

- "[Aprende más sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" con este tutorial detallado.
- "[Guías](/actions/guides)" para casos de uso específico y ejemplos.
