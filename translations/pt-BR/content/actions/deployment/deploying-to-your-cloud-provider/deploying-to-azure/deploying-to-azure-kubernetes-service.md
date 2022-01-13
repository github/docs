---
title: Implantando no Azure Kubernetes Service
intro: Você pode fazer deploy de seu projeto no Azure Kubernetes Service (AKS) como parte de fluxos de trabalho para implantação contínua (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Kubernetes Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}


## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar e publicar um projeto no [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/).

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Configurando OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

1. Crie um cluster-alvo do AKS e um Azure Container Registry (ACR). Para obter mais informações, consulte "[Início rápido: Implantar um cluster do AKS usando o portal do Azure - Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)" e "[Início rápido - Criar registro no portal - Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)" na documentação do Azure.

1. Crie um segredo chamado `AZURE_CREDENTIALS` para armazenar suas credenciais do Azure. Para obter mais informações sobre como encontrar essa informação e estruturar o segredo, consulte a documentação da ação [a `açure/login`](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O exemplo de fluxo de trabalho a seguir demonstra como criar e implantar um projeto no Azure Kubernetes Services quando o código for enviado por push para o seu repositório.

Na chave do fluxo de trabalho `env`, altere os seguintes valores:
- `AZURE_CONTAINER_REGISTRY` para o nome do seu registro de contêiner
- `PROJECT_NAME` para o nome do seu projeto
- `RESOURCE_GROUP` para o grupo de recursos que contém seu cluster do AKS
- `CLUSTER_NAME` para o nome do seu cluster do AKS

Este fluxo de trabalho usa o mecanismo de interpretação `helm` para a ação [`azure/k8s-bake`](https://github.com/Azure/k8s-bake). Se você usar o motor de interpretação `helm` de renderização, altere o valor de `CHART_PATH` para o caminho do seu arquivo de helm. Altere `CHART_OVERRIDE_PATH` para uma matriz de caminhos de arquivos sobrescritos. Se você usar um mecanismo de interpretação diferente, atualize os parâmetros de entrada enviados para a ação `azure/k8s-bake`.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Build and deploy to Azure Kubernetes Service

env:
  AZURE_CONTAINER_REGISTRY: MY_REGISTRY_NAME # set this to the name of your container registry
  PROJECT_NAME: MY_PROJECT_NAME              # set this to your project's name
  RESOURCE_GROUP: MY_RESOURCE_GROUP          # set this to the resource group containing your AKS cluster
  CLUSTER_NAME: MY_CLUSTER_NAME              # set this to the name of your AKS cluster
  REGISTRY_URL: MY_REGISTRY_URL              # set this to the URL of your registry
  # If you bake using helm:
  CHART_PATH: MY_HELM_FILE                   # set this to the path to your helm file
  CHART_OVERRIDE_PATH: MY_OVERRIDE_FILES     # set this to an array of override file paths

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master

    - name: Azure Login
      uses: azure/login@89d153571fe9a34ed70fcf9f1d95ab8debea7a73
      with:
        creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

    - name: Build image on ACR
      uses: azure/CLI@7378ce2ca3c38b4b063feb7a4cbe384fef978055
      with:
        azcliversion: 2.29.1
        inlineScript: |
          az configure --defaults acr={% raw %}${{ env.AZURE_CONTAINER_REGISTRY }}{% endraw %}
          az acr build -t  -t {% raw %}${{ env.REGISTRY_URL }}{% endraw %}/{% raw %}${{ env.PROJECT_NAME }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}

    - name: Gets K8s context
      uses: azure/aks-set-context@4e5aec273183a197b181314721843e047123d9fa
      with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}
          resource-group: {% raw %}${{ env.RESOURCE_GROUP }}{% endraw %}
          cluster-name: {% raw %}${{ env.CLUSTER_NAME }}{% endraw %}
      id: login

    - name: Configure deployment
      uses: azure/k8s-bake@773b6144a3732e3bf4c78b146a0bb9617b2e016b
      with:
        renderEngine: 'helm'
        helmChart: {% raw %}${{ env.CHART_PATH }}{% endraw %}
        overrideFiles: {% raw %}${{ env.CHART_OVERRIDE_PATH }}{% endraw %}
        overrides: |     
          replicas:2
        helm-version: 'latest' 
      id: bake

    - name: Deploys application
    - uses: Azure/k8s-deploy@c8fbd76ededaad2799c054a9fd5d0fa5d4e9aee4
      with:
        manifests: {% raw %}${{ steps.bake.outputs.manifestsBundle }}{% endraw %}
        images: |
          {% raw %}${{ env.AZURE_CONTAINER_REGISTRY }}{% endraw %}.azurecr.io/{% raw %}${{ env.PROJECT_NAME }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
        imagepullsecrets: |
          {% raw %}${{ env.PROJECT_NAME }}{% endraw %}
```

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, consulte [`azure-kubernetes-service.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) no repositório `starter-workflows` de {% data variables.product.prodname_actions %}.
* As ações usadas nesse fluxo de trabalho são as ações oficiais do Azure [`Azure/login`](https://github.com/Azure/login),[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) e [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy).
* Para obter mais exemplos de fluxos de trabalho do GitHub Action que fazem a implantação no Azure, consulte o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
