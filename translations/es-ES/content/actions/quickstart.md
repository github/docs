---
title: Guía de inicio rápido para GitHub Actions
intro: 'Try out the features of {% data variables.product.prodname_actions %} in 5 minutes or less.'
allowTitleToDifferFromFilename: verdadero
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'quick_start'
topics:
  - 'Fundamentos'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

You only need a {% data variables.product.prodname_dotcom %} repository to create and run a {% data variables.product.prodname_actions %} workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of {% data variables.product.prodname_actions %}.

The following example shows you how {% data variables.product.prodname_actions %} jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.

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

Committing the workflow file to a branch in your repository triggers the `push` event and runs your workflow.

### Ver los resultados de tu flujo de trabajo

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieres ver.

   ![Lista de flujos de trabajo en la barra lateral izquierda](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. Desde la lista de ejecuciones de flujo de trabajo, da clic en el nombre de la ejecución que quieres ver.

   ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Under **Jobs** , click the **Explore-GitHub-Actions** job.

   ![Locate job](/assets/images/help/repository/actions-quickstart-job.png)
1. The log shows you how each of the steps was processed. Expand any of the steps to view its details.

   ![Example workflow results](/assets/images/help/repository/actions-quickstart-logs.png)

   For example, you can see the list of files in your repository: ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)

### Más plantillas de flujo de trabajo

{% data reusables.actions.workflow-template-overview %}

### Pasos siguientes

The example workflow you just added runs each time code is pushed to the branch, and shows you how {% data variables.product.prodname_actions %} can work with the contents of your repository. Pero esto es solo el inicio de lo que puedes hacer con {% data variables.product.prodname_actions %}:

- Tu repositorio puede contener varios flujos de trabajo que activen jobs diferentes basándose en eventos diferentes.
- You can use a workflow to install software testing apps and have them automatically test your code on {% data variables.product.prodname_dotcom %}'s runners.

{% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu s procesos de desarrollo de aplicaciones. ¿Listo para comenzar? Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_actions %}:

- "[Aprende más sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" con este tutorial detallado.
- "[Guías](/actions/guides)" para casos de uso específico y ejemplos.
