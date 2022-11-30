---
title: Настройка OpenID Connect в Azure
shortTitle: OpenID Connect in Azure
intro: Использование OpenID Connect в рабочих процессах для проверки подлинности в Azure.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: d55d95fd8c6a3787fe661053b13daa97dcf41ac2
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010011'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

OpenID Connect (OIDC) позволяет рабочим процессам {% data variables.product.prodname_actions %} получать доступ к ресурсам в Azure без необходимости хранить учетные данные Azure в виде долговечных секретов {% data variables.product.prodname_dotcom %}. 

В этом руководстве представлен обзор настройки Azure для доверия OIDC {% data variables.product.prodname_dotcom %} в качестве федеративного идентификатора, а также есть пример рабочего процесса для действия [`azure/login`](https://github.com/Azure/login), использующего токены для аутентификации в Azure и доступа к ресурсам.

## Предварительные требования

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Добавление федеративных учетных данных в Azure

Поставщик OIDC {% data variables.product.prodname_dotcom %} работает с федерацией идентификаторов рабочей нагрузки Azure. Обзор см. в документации Майкрософт в разделе [Федерация идентификаторов рабочей нагрузки](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation).

Чтобы настроить поставщик удостоверений OIDC в Azure, необходимо выполнить следующую конфигурацию. Инструкции по внесению этих изменений см. в [документации Azure](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Создайте приложение Azure Active Directory и субъект-службу.
2. Добавьте федеративные учетные данные для приложения Azure Active Directory.
3. Создайте секреты {% data variables.product.prodname_dotcom %} для хранения конфигурации Azure.

Дополнительное руководство по настройке поставщика удостоверений:

- Для усиления безопасности убедитесь, что ознакомились с разделом [Настройки отношения доверия OIDC с облаком](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Пример см. в разделе [Настройка субъекта в поставщике облачных служб](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Для параметра `audience` рекомендуемое значение `api://AzureADTokenExchange`, но здесь можно также указать другие значения.

## Обновление рабочего процесса {% data variables.product.prodname_actions %}

Чтобы обновить рабочие процессы для OIDC, необходимо внести два изменения в YAML:
1. Добавьте параметры разрешений для маркера.
2. Используйте действие [`azure/login`](https://github.com/Azure/login) для обмена маркера OIDC (JWT) на маркер доступа к облаку.

### Добавление параметров разрешений

 {% data reusables.actions.oidc-permissions-token %}

### Запрос маркера доступа

Действие [`azure/login`](https://github.com/Azure/login) получает JWT от поставщика OIDC {% data variables.product.prodname_dotcom %}, а затем запрашивает маркер доступа из Azure. Дополнительные сведения см. в документации по [`azure/login`](https://github.com/Azure/login).

В следующем примере токен идентификатора OIDC обменивается с Azure для получения маркера доступа, который затем можно использовать для доступа к облачным ресурсам.

{% raw %}
```yaml{:copy}
name: Run Azure Login with OIDC
on: [push]

permissions:
      id-token: write
      contents: read
jobs: 
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
  
      - name: 'Run az commands'
        run: |
          az account show
          az group list
```
 {% endraw %}
