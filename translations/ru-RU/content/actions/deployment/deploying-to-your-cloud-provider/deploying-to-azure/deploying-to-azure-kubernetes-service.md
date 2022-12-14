---
title: Развертывание в службе Azure Kubernetes
intro: Проект можно развернуть для службы Azure Kubernetes (AKS) в рамках рабочих процессов непрерывного развертывания (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Kubernetes Service
ms.openlocfilehash: 5c3052f1f432663a38be6aa15376c186c96193ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410126'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Введение

В этом руководстве объясняется, как с помощью {% data variables.product.prodname_actions %} создать и развернуть проект в [Службе Azure Kubernetes](https://azure.microsoft.com/services/kubernetes-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Примечание**. {% data reusables.actions.about-oidc-short-overview %} и [Настройка OpenID Connect в Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Предварительные требования

Перед созданием рабочего процесса {% data variables.product.prodname_actions %} сначала нужно выполнить следующие действия по настройке:

1. Создайте целевой кластер AKS и Реестр контейнеров Azure (ACR). Дополнительные сведения см. в разделе "[Краткое руководство. Развертывание кластера AKS с помощью портала Azure — служба Azure Kubernetes](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)" и "[Краткое руководство. Создание реестра на портале — реестр контейнеров Azure](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)" в документации Azure.

1. Создайте секрет с именем `AZURE_CREDENTIALS` для хранения учетных данных Azure. Дополнительные сведения о том, как найти эти сведения и структурировать секрет, см. [в документации по действию `Azure/login`](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Создание рабочего процесса

Выполнив предварительные требования, можно приступить к созданию рабочего процесса.

В следующем примере рабочего процесса показано, как создать и развернуть проект в службе Azure Kubernetes при отправке кода в репозиторий.

Под ключом рабочего процесса `env` измените следующие значения:
- `AZURE_CONTAINER_REGISTRY` на имя реестра контейнеров;
- `PROJECT_NAME` на имя проекта;
- `RESOURCE_GROUP` на группу ресурсов, содержащую кластер AKS;
- `CLUSTER_NAME` на имя кластера AKS.

Этот рабочий процесс использует обработчик отрисовки `helm`[ для действия `azure/k8s-bake`](https://github.com/Azure/k8s-bake). Если вы будете использовать обработчик отрисовки `helm`, измените значение `CHART_PATH` на путь к файлу helm. Измените значение `CHART_OVERRIDE_PATH` на массив переопределенных путей к файлам. При использовании другого обработчика отрисовки обновите входные параметры, отправленные в действие `azure/k8s-bake`.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
    - uses: {% data reusables.actions.action-checkout %}

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

## Дополнительные ресурсы

Следующие ресурсы также содержат полезные сведения на эти темы:

* Исходный начальный рабочий процесс см. в [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) из репозитория `starter-workflows` {% data variables.product.prodname_actions %}.
* В этом рабочем процессе используются официальные действия Azure:[`Azure/login`](https://github.com/Azure/login), [`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) и [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy).
* Дополнительные примеры рабочих процессов GitHub Actions, которые развертываются в Azure, см. в репозитории [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
