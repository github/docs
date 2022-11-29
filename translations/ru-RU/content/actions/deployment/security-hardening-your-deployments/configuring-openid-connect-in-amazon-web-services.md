---
title: Настройка OpenID Connect в Amazon Web Services
shortTitle: OpenID Connect in AWS
intro: Использование OpenID Connect в рабочих процессах для проверки подлинности в Amazon Web Services.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 597ea408c2f0172eb0eacf07fc2d1ad320872f09
ms.sourcegitcommit: 94ba3891ebcc3c05812f468e4adafdd15b99e390
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182260'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

OpenID Connect (OIDC) позволяет рабочим процессам {% data variables.product.prodname_actions %} получать доступ к ресурсам в Amazon Web Services (AWS) без необходимости хранить учетные данные AWS в виде долгоживущих секретов {% data variables.product.prodname_dotcom %}. 

В этом руководстве рассказывается, как в AWS настроить доверие к OIDC {% data variables.product.prodname_dotcom %} в качестве федеративного удостоверения, а также есть пример рабочего процесса для действия [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials), в котором для проверки подлинности в AWS и доступа к ресурсам используются маркеры.

## Предварительные требования

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Добавление поставщика удостоверений в AWS

Сведения о добавлении поставщика OIDC {% data variables.product.prodname_dotcom %} в IAM см. в [документации по AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

- Для URL-адреса поставщика: укажите {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- Для аудитории: укажите `sts.amazonaws.com`, если используете [официальное действие](https://github.com/aws-actions/configure-aws-credentials).

### Настройка роли и политики доверия

Сведения о настройке роли и доверия в IAM см. в документации по AWS в разделе "[Получение роли](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role)" и "[Создание роли для веб-удостоверения или федерации OpenID Connect](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)".

Измените политику доверия, чтобы добавить поле `sub` в условия проверки. Пример:

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

В следующем примере `StringLike` используется с подстановочным оператором (`*`), чтобы разрешить любой ветви, ветви слияния запросов на вытягивание или среде из `octo-org/octo-repo` организации и репозитория принимать роль в AWS.

```json{:copy}
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::123456123456:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:*"
                },
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```


## Обновление рабочего процесса {% data variables.product.prodname_actions %}

Чтобы обновить рабочие процессы для OIDC, необходимо внести два изменения в YAML:
1. Добавьте параметры разрешений для маркера.
2. Используйте действие [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) для обмена маркера OIDC (JWT) на маркер доступа к облаку.

### Добавление параметров разрешений

 {% data reusables.actions.oidc-permissions-token %}

### Запрос маркера доступа

Действие `aws-actions/configure-aws-credentials` получает JWT от поставщика OIDC {% data variables.product.prodname_dotcom %}, а затем запрашивает маркер доступа из AWS. Дополнительные сведения см. в [документации по AWS](https://github.com/aws-actions/configure-aws-credentials).

- `<example-bucket-name>`: имя контейнера S3.
- `<role-to-assume>`: вместо значения из примера укажите свою роль AWS.
- `<example-aws-region>`: добавьте название своего региона AWS.

```yaml{:copy}
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "<example-bucket-name>"
  AWS_REGION : "<example-aws-region>"
# permission can be added at job level or workflow level    
permissions:
      id-token: write   # This is required for requesting the JWT
      contents: read    # This is required for actions/checkout
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: {% data reusables.actions.action-checkout %}
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::1234567890:role/example-role
          role-session-name: samplerolesession
          aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
      # Upload a file to AWS s3
      - name:  Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://{% raw %}${{ env.BUCKET_NAME }}{% endraw %}/
```
