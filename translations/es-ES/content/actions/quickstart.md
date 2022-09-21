---
title: Guía de inicio rápido para GitHub Actions
intro: 'Prueba las características de las {% data variables.product.prodname_actions %} en 5 minutos o menos.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
ms.openlocfilehash: 164aef041c509264c9e8440d5339bce3cf4aaaca
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146139461'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Solo necesitas un repositorio de {% data variables.product.prodname_dotcom %} para crear y ejecutar un flujo de trabajo de {% data variables.product.prodname_actions %}. En esta guía, agregarás un flujo de trabajo que demuestre algunas de las características esenciales de las {% data variables.product.prodname_actions %}. 

El siguiente ejemplo te muestra cómo los jobs de las {% data variables.product.prodname_actions %} pueden activarse automáticamente, dónde se ejecutan y cómo pueden interactuar con el código en tu repositorio.

## Crear tu primer flujo de trabajo

1. Cree un directorio `.github/workflows` en el repositorio de {% data variables.product.prodname_dotcom %} si todavía no existe.
2. En el directorio `.github/workflows`, cree un archivo denominado `github-actions-demo.yml`. Para más información, vea "[Creación de archivos](/github/managing-files-in-a-repository/creating-new-files)".
3. Copie el siguiente contenido de YAML en el archivo `github-actions-demo.yml`:  {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."{% endraw %}
          - name: Check out repository code
            uses: {% data reusables.actions.action-checkout %}{% raw %}
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Desplácese a la parte inferior de la página y seleccione **Crear una rama para esta confirmación e iniciar una solicitud de incorporación de cambios**. Después, para crear una solicitud de incorporación de cambios, haga clic en **Proponer archivo nuevo**.
    ![Archivo de flujo de trabajo de confirmación](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Al confirmar el flujo de trabajo en una rama del repositorio se desencadena el evento `push` y se ejecuta el flujo de trabajo.

## Ver los resultados de tu flujo de trabajo

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieras ver.

   ![Lista de flujos de trabajo en la barra lateral izquierda](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. Desde la lista de ejecuciones de flujo de trabajo, da clic en el nombre de la ejecución que quieres ver.

   ![Nombre de la ejecución de flujo de trabajo](/assets/images/help/repository/actions-quickstart-run-name.png)
1. En **Trabajos**, haga clic en el trabajo **Explore-GitHub-Actions**.

   ![Ubicar un job](/assets/images/help/repository/actions-quickstart-job.png)
1. La bitácora muestra cómo se procesó cada uno de los pasos. Expande cualquiera de los pasos para ver sus detalles.

   ![Resultados del flujo de trabajo de ejemplo](/assets/images/help/repository/actions-quickstart-logs.png)
   
   Por ejemplo, puede ver la lista de archivos del repositorio: ![Detalle de la acción de ejemplo](/assets/images/help/repository/actions-quickstart-log-detail.png)
   
## Más flujos de trabajo de inicio

{% data reusables.actions.workflow-template-overview %}

## Ejemplos más complejos
{% data reusables.actions.link-to-example-library %}

## Pasos siguientes

El flujo de trabajo de ejemplo que acabas de agregar se ejecuta cada vez que se sube el código a la rama y te muestra cómo pueden funcionar las {% data variables.product.prodname_actions %} con el contenido de tu repositorio. Pero esto es solo el principio de lo que puede hacer con {% data variables.product.prodname_actions %}:

- Tu repositorio puede contener varios flujos de trabajo que activen jobs diferentes basándose en eventos diferentes. 
- Puedes utilizar un flujo de trabajo apra instalar las apps de prueba de software y hacer que prueben tu código automáticamente en los ejecutores de {% data variables.product.prodname_dotcom %}. 

{% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu s procesos de desarrollo de aplicaciones. ¿Ya está listo para comenzar? Aquí tienes algunos recursos útiles para que tomes tus siguientes pasos con {% data variables.product.prodname_actions %}:

- "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obtener un tutorial en profundidad.
