---
title: Настройка OpenID Connect в Google Cloud Platform
shortTitle: OpenID Connect in Google Cloud Platform
intro: Использование OpenID Connect в рабочих процессах для проверки подлинности на платформе Google Cloud Platform.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: ae68717ba6c1fe4a745880eeda3bad55e3a4f395
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010080'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

OpenID Connect (OIDC) позволяет рабочим процессам {% data variables.product.prodname_actions %} получать доступ к ресурсам в Google Cloud Platform (GCP) без необходимости хранить учетные данные GCP в виде долгосрочных секретов {% data variables.product.prodname_dotcom %}. 

В этом руководстве представлен обзор настройки GCP для доверия OIDC {% data variables.product.prodname_dotcom %} в качестве федеративного удостоверения, а также есть пример рабочего процесса для действия [`google-github-actions/auth`](https://github.com/google-github-actions/auth), использующего токены для аутентификации в GCP и доступа к ресурсам.

## Предварительные требования

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Добавление поставщика удостоверений для облачной рабочей нагрузки Google

Чтобы настроить поставщик удостоверений OIDC в GCP, необходимо выполнить описанную ниже настройку. Инструкции по внесению этих изменений см. в [документации GCP](https://github.com/google-github-actions/auth).

1. Создайте пул удостоверений.
2. Настройте сопоставление и добавьте условия.
3. Подключение новый пул к учетной записи службы. 

Дополнительное руководство по настройке поставщика удостоверений:

- Для усиления безопасности убедитесь, что ознакомились с разделом [Настройки отношения доверия OIDC с облаком](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Пример см. в разделе [Настройка субъекта в поставщике облачных служб](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Чтобы учетная запись службы была доступна для настройки, ей необходимо назначить роль `roles/iam.workloadIdentityUser`. Дополнительные сведения см. в [документации по GCP](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- URL-адрес издателя: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## Обновление рабочего процесса {% data variables.product.prodname_actions %}

Чтобы обновить рабочие процессы для OIDC, необходимо внести два изменения в YAML:
1. Добавьте параметры разрешений для маркера.
2. Используйте действие [`google-github-actions/auth`](https://github.com/google-github-actions/auth) для обмена маркера OIDC (JWT) на маркер доступа к облаку.

### Добавление параметров разрешений

 {% data reusables.actions.oidc-permissions-token %}

### Запрос маркера доступа

Действие `google-github-actions/auth` получает JWT от поставщика OIDC {% data variables.product.prodname_dotcom %}, а затем запрашивает маркер доступа из GCP. Дополнительные сведения см. в [документации по GCP](https://github.com/google-github-actions/auth).

В этом примере есть задание `Get_OIDC_ID_token`, которое использует действия для запроса списка служб из GCP.

- `<example-workload-identity-provider>` — замените на путь к поставщику удостоверений в GCP. Например `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`.
- `<example-service-account>` — замените на имя учетной записи службы в GCP.
- `<project-id>` — замените на идентификатор проекта GCP.

Это действие обменивает токен OIDC {% data variables.product.prodname_dotcom %} на маркер доступа Google Cloud с помощью [федерации удостоверений рабочей нагрузки](https://cloud.google.com/iam/docs/workload-identity-federation).

{% raw %}
```yaml{:copy}
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```
{% endraw %}
