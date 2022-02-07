---
title: Desplegar hacia Amazon Elastic Container Service
intro: Puedes hacer despliegues para Amazon Elastic Container Service (ECS) como parte de tus flujos de trabajo de despliegue contínuo (DC).
redirect_from:
  - /actions/guides/deploying-to-amazon-elastic-container-service
  - /actions/deployment/deploying-to-amazon-elastic-container-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Amazon ECS
shortTitle: Desplegar hacia Amazon ECS
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te explica cómo utilizar las {% data variables.product.prodname_actions %} para crear una aplicación contenerizada, subirla al [Registro de Contenedores Elásticos de Amazon (ECR)](https://aws.amazon.com/ecr/) y desplegarla hacia el [Servicio de Contenedores Elásticos de Amazon (ECS)](https://aws.amazon.com/ecs/) cuando haya una subida a la rama `main`.

En cada subida nueva a `main` en tu repositorio de {% data variables.product.company_short %}, el flujo de trabajo de las {% data variables.product.prodname_actions %} creará y subirá una imagen de contenedor nueva hacia el ECR de Amazon y luego desplegará una definición de tarea nueva hacia el ECS de Amazon.

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y ["Configurar OpenID Connect en Amazon Web Services"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services).

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de que crees tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitas completar los siguientes pasos de configuración para Amazon ECR y ECS:

1. Crea un repositorio de Amazon ECR para almacenar tus imágenes.

   Por ejemplo, utiliza [el CLI de AWS](https://aws.amazon.com/cli/):

   {% raw %}```bash{:copy}
   aws ecr create-repository \ --repository-name MY_ECR_REPOSITORY \ --region MY_AWS_REGION
   ```{% endraw %}

   Asegúrate de que utilizas el mismo nombre de repositorio para amazon ECR (que se representa aquí como `MY_ECR_REPOSITORY`) para la variable `ECR_REPOSITORY` en el flujo de trabajo a continuación.

   Asegúrate de que utilizas el mismo valor de región de AWS para la variable `AWS_REGION` (que se representa aquí como `MY_AWS_REGION`) en el flujo de trabajo a continuación.

2. Crea un servicio, agrupamiento y definición de tarea de Amazon ECS.

   Para obtener más detalles, sigue la sección [Asistente de inicio para la consola de Amazon ECS](https://us-east-2.console.aws.amazon.com/ecs/home?region=us-east-2#/firstRun), o la [Guía de inicio](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html) en la documentación de Amazon ECS.

   Asegúrate de anotar los nombres que configuraste para el servicio y agrupamiento de Amazon ECS y utilízalos para las variables `ECS_SERVICE` y `ECS_CLUSTER` en el flujo de trabajo a continuación.

3. Almacena tu definición de tarea de Amazon ECS como un archivo JSON en tu repositorio de {% data variables.product.company_short %}.

   El formato del archivo debe ser el mismo que la salida que genera:

   {% raw %}```bash{:copy}
   aws ecs register-task-definition --generate-cli-skeleton
   ```{% endraw %}

   Asegúrate de configurar la variable `ECS_TASK_DEFINITION` en el flujo de trabajo a continuación como la ruta al archivo JSON.

   Asegúrate de configurar la variable `CONTAINER_NAME` en el flujo de trabajo a continuación como el nombre de contenedor en la sección `containerDefinitions` de la definición de tarea.

4. Crea los secretos de {% data variables.product.prodname_actions %} con los nombres `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY` para almacenar los valores de tu llave de acceso de Amazon IAM.

   Para obtener más información sobre cómo crear los secretos para {% data variables.product.prodname_actions %}, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".

   Consulta la documentación para cada acción que se utiliza a continuación para las políticas recomendadas de IAM para el usuario de IAM y los métodos para manejar las credenciales de las llaves de acceso.

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}
{% endif %}

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

El siguiente flujo de trabajo de ejemplo demuestra cómo construir una imagen de contenedor y subirla a Amazon ECR. Posteriormente, ésta actualiza la definición de la tarea con una ID de imagen nueva y despliega la definición de tarea a Amazon ECS.

Asegúrate de que proporcionas tus propios valores para todas las variables en la clave `env` del flujo de trabajo.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Deploy to Amazon ECS

on:
  push:
    branches:
      - main

env:
  AWS_REGION: MY_AWS_REGION                   # set this to your preferred AWS region, e.g. us-west-1
  ECR_REPOSITORY: MY_ECR_REPOSITORY           # set this to your Amazon ECR repository name
  ECS_SERVICE: MY_ECS_SERVICE                 # set this to your Amazon ECS service name
  ECS_CLUSTER: MY_ECS_CLUSTER                 # set this to your Amazon ECS cluster name
  ECS_TASK_DEFINITION: MY_ECS_TASK_DEFINITION # set this to the path to your Amazon ECS task definition
                                               # file, e.g. .aws/task-definition.json
  CONTAINER_NAME: MY_CONTAINER_NAME           # set this to the name of the container in the
                                               # containerDefinitions section of your task definition

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    environment: production

    {% raw %}steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@13d241b293754004c80624b5567555c4a39ffbe3
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@aaf69d68aa3fb14c1d5a6be9ac61fe15b48453a2

      - name: Build, tag, and push image to Amazon ECR
        id: build-image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: ${{ github.sha }}
        run: |
          # Build a docker container and
          # push it to ECR so that it can
          # be deployed to ECS.
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
          echo "::set-output name=image::$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"

      - name: Fill in the new image ID in the Amazon ECS task definition
        id: task-def
        uses: aws-actions/amazon-ecs-render-task-definition@97587c9d45a4930bf0e3da8dd2feb2a463cf4a3a
        with:
          task-definition: ${{ env.ECS_TASK_DEFINITION }}
          container-name: ${{ env.CONTAINER_NAME }}
          image: ${{ steps.build-image.outputs.image }}

      - name: Deploy Amazon ECS task definition
        uses: aws-actions/amazon-ecs-deploy-task-definition@de0132cf8cdedb79975c6d42b77eb7ea193cf28e
        with:
          task-definition: ${{ steps.task-def.outputs.task-definition }}
          service: ${{ env.ECS_SERVICE }}
          cluster: ${{ env.ECS_CLUSTER }}
          wait-for-service-stability: true{% endraw %}
```

## Recursos adicionales

Para encontrar el flujo de trabajo inicial original, consulta el archivo [`aws.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/aws.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.

Para obtener más información sobre los servicios que se utilizan en estos ejemplos, consulta la siguiente documentación:

* "[Mejores prácticas de seguridad de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)" en la documentación de AWS.
* Acción oficial de "[Configurar las credenciales de AWS](https://github.com/aws-actions/configure-aws-credentials)" de AWS.
* Acción oficial de ["Inicio de sesión" de Amazon ECR](https://github.com/aws-actions/amazon-ecr-login) de AWS.
* Acción oficial de ["Definición de tarea de renderización" de Amazon ECS](https://github.com/aws-actions/amazon-ecs-render-task-definition)de AWS.
* Acción oficial de ["Desplegar definición de tarea" de Amazon ECS](https://github.com/aws-actions/amazon-ecs-deploy-task-definition) de AWS.
