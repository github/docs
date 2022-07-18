---
title: Implantar no Amazon Elastic Container Service
intro: Você pode fazer implantação no Amazon Elastic Container Service (ECS) como parte de fluxos de trabalho para implantação contínua (CD).
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
shortTitle: Implantar no Amazon ECS
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar uma aplicação de contêiner, fazer push no [Amazon Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/) e fazer a implementação em [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/) quando houver um push para o branch `principal`.

Em cada novo push para o `principal` no seu repositório de {% data variables.product.company_short %}, as compilações de fluxo de trabalho de {% data variables.product.prodname_actions %} e cria e faz push de uma nova imagem de contêiner para o Amazon ECR e, em seguida, implementa uma nova definição de tarefa para o Amazon ECS.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e ["Configurando o OpenID Connect no Amazon Web Services"](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services).

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas a seguir para o Amazon ECR e ECS:

1. Crie um repositório Amazon ECR para armazenar suas imagens.

   Usando, por exemplo, [CLI AWS](https://aws.amazon.com/cli/):

   {% raw %}```bash{:copy}
   aws ecr create-repository \
    --repository-name MY_ECR_REPOSITORY \ --region MY_AWS_REGION
   ```{% endraw %}

   Certifique-se de usar o mesmo nome de repositório do Amazon ECR (representado aqui por `MY_ECR_REPOSITORY`) para a variável `ECR_REPOSITORY` no fluxo de trabalho abaixo.

   Certifique-se de usar o mesmo valor de região do AWS para a variável `AWS_REGION` (representada aqui pela variável `MY_AWS_REGION`) no fluxo de trabalho abaixo.

2. Crie uma definição de tarefa e serviço do Amazon ECS.

   Para obter informações, siga o [Assistente de introdução no console do Amazon ECS](https://us-east-2.console.aws.amazon.com/ecs/home?region=us-east-2#/firstRun), ou o [Guia de introdução](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html) na documentação do Amazon ECS.

   Certifique-se de anotar os nomes que você definiu para o serviço do Amazon ECS e do cluster e use-os para as variáveis `ECS_SERVICE` e `ECS_CLUSTER` no fluxo de trabalho abaixo.

3. Armazene sua definição de tarefa do Amazon ECS como um arquivo JSON no seu repositório de {% data variables.product.company_short %}.

   O formato do arquivo deve ser o mesmo que a saída gerada por:

   {% raw %}```bash{:copy}
   aws ecs register-task-definition --generate-cli-skeleton
   ```{% endraw %}

   Ensure that you set the `ECS_TASK_DEFINITION` variable in the workflow below as the path to the JSON file.

   Certifique-se de definir a variável `CONTAINER_NAME` no fluxo de trabalho abaixo como o nome do contêiner na seção `containerDefinitions` da definição da tarefa.

4. Crie segredos de {% data variables.product.prodname_actions %} denominados `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY` para armazenar os valores para sua chave de acesso ao Amazon IAM.

   Para obter mais informações sobre a criação de segredos para {% data variables.product.prodname_actions %}, consulte "[segredos criptografados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."

   Veja a documentação para cada ação usada abaixo para as políticas recomendadas de IAM para o usuário de IAM, bem como os métodos para lidar com as credenciais de acesso.

5. Opcionalmente, configure um ambiente de implantação. {% data reusables.actions.about-environments %}

## Creating the workflow

Após você ter atendido aos pré-requisitos, você poderá proceder com a criação do fluxo de trabalho.

O fluxo de trabalho a seguir demonstra como construir uma imagem de contêiner e enviá-lo para o Amazon ECR. Em seguida, ele atualiza a definição da tarefa com o novo ID de imagem e implanta a definição da tarefa no Amazon ECS.

Certifique-se de fornecer seus próprios valores para todas as variáveis na chave `env` do fluxo de trabalho.

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

    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      {% raw %}- name: Configure AWS credentials
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

## Recursos adicionais

Para o fluxo de trabalho inicial original, consulte [`aws.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/aws.yml) no repositório `starter-workflows` de {% data variables.product.prodname_actions %}.

Para mais informações sobre os serviços utilizados nestes exemplos, veja a seguinte documentação:

* "[Práticas recomendadas de segurança no IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)" na documentação da Amazon AWS.
* Ação oficial de "[Configurar credenciais](https://github.com/aws-actions/configure-aws-credentials) do AWS.
* Ação oficial de ["Login" do Amazon ECR](https://github.com/aws-actions/amazon-ecr-login) do AWS.
* Ação oficial de [Definição de tarefa de renderização do Amazon ECS"](https://github.com/aws-actions/amazon-ecs-render-task-definition) do AWS.
* Ação oficial de ["Definição de tarefa de implantação do Amazon ECS"](https://github.com/aws-actions/amazon-ecs-deploy-task-definition) do AWS.
