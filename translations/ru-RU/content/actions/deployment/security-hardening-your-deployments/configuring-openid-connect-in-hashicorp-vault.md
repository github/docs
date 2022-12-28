---
title: Настройка OpenID Connect в HashiCorp Vault
shortTitle: OpenID Connect in HashiCorp Vault
intro: Использование OpenID Connect в рабочих процессах для проверки подлинности в HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106632'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

OpenID Connect (OIDC) позволяет рабочим процессам {% data variables.product.prodname_actions %} проходить проверку подлинности в HashiCorp Vault для получения секретов.

В этом руководстве представлен обзор настройки HashiCorp Vault для доверия OIDC {% data variables.product.prodname_dotcom %} в качестве федеративного удостоверения, а также демонстрируется использование этой конфигурации в действии [hashicorp/vault-action](https://github.com/hashicorp/vault-action) для получения секретов из HashiCorp Vault.

## Предварительные требования

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Добавление поставщика удостоверений в HashiCorp Vault

Чтобы использовать OIDC с HashiCorp Vault, необходимо добавить конфигурацию доверия для поставщика OIDC {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в [документации](https://www.vaultproject.io/docs/auth/jwt) HashiCorp Vault.

Чтобы настроить сервер Vault для приема токенов JSON Web Token (JWT) для проверки подлинности, выполните следующие действия:

1. Включите метод JWT `auth` и используйте `write` для применения конфигурации к Vault. 
  Для параметров `oidc_discovery_url` и `bound_issuer` используйте {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. Эти параметры позволяют серверу Vault проверить полученные веб-токены JSON (JWT) в ходе процесса проверки подлинности.

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Настройте политику, которая предоставляет доступ только к определенным путям, которые будут использоваться рабочими процессами для извлечения секретов. Сведения о расширенных политиках см. в [документации по политикам](https://www.vaultproject.io/docs/concepts/policies) HashiCorp Vault.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Настройте роли для группирования разных политик. Если проверка подлинности выполнена успешно, эти политики присоединяются к полученному маркеру доступа к Vault.

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` определяет допустимость полученного маркера доступа.
- Убедитесь, что параметр `bound_claims` определен для ваших требований к безопасности и имеет по крайней мере одно условие. При необходимости можно также задать параметр `bound_subject`, а также параметр `bound_audiences`.
- Чтобы проверить произвольные утверждения в полученных полезных данных JWT, параметр `bound_claims` содержит набор утверждений и их обязательные значения. В приведенном выше примере роль будет принимать все входящие запросы проверки подлинности из репозитория `repo-name`, принадлежащего учетной записи `user-or-org-name`.
- Чтобы просмотреть все доступные утверждения, поддерживаемые поставщиком OIDC {% data variables.product.prodname_dotcom %}, см. раздел [Настройка доверия OIDC с облаком](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud).

Дополнительные сведения см. в [документации](https://www.vaultproject.io/docs/auth/jwt) HashiCorp Vault.

## Обновление рабочего процесса {% data variables.product.prodname_actions %}

Чтобы обновить рабочие процессы для OIDC, необходимо внести два изменения в YAML:
1. Добавьте параметры разрешений для маркера.
2. Используйте действие [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) для обмена токена OIDC (JWT) на маркер доступа к облаку.


Чтобы добавить интеграцию OIDC в рабочие процессы с целью разрешить доступ к секретам в хранилище, необходимо добавить следующие изменения кода:

- Предоставьте разрешение на получение токена от поставщика OIDC {% data variables.product.prodname_dotcom %}:
  - Рабочему процессу требуются параметры `permissions:` со значением `write` для `id-token`. Это позволяет получать токен OIDC из каждого задания в рабочем процессе.
- Запросите токен JWT от поставщика OIDC {% data variables.product.prodname_dotcom %} и предоставьте его в HashiCorp Vault для получения маркера доступа:
  - Вы можете использовать действие [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) для извлечения JWT и получения маркера доступа из Vault, или использовать [набор средств действий](https://github.com/actions/toolkit/) для извлечения маркеров для вашего задания.

В этом примере показано, как использовать OIDC с официальным действием для запроса секрета из HashiCorp Vault.

### Добавление параметров разрешений

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**Примечание.**

При использовании ключа `permissions` для всех неуказанных разрешений _доступ запрещен_. Исключение составляет область метаданных, которая всегда получает доступ на _чтение_. В результате может потребоваться добавить другие разрешения, например `contents: read`. Дополнительные сведения см. в статье [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication).

{% endnote %}

### Запрос маркера доступа

Действие `hashicorp/vault-action` получает JWT от поставщика OIDC {% data variables.product.prodname_dotcom %}, а затем запрашивает маркер доступа из экземпляра HashiCorp Vault для получения секретов. Дополнительные сведения см. в [документации](https://github.com/hashicorp/vault-action) по HashiCorp Vault GitHub Actions.

В этом примере показано, как создать задание, запрашивающее секрет из HashiCorp Vault.

- `<Vault URL>` — замените на URL-адрес HashiCorp Vault.
- `<Vault Namespace>` — замените на пространство имен, заданное в HashiCorp Vault. Например: `admin`.
- `<Role name>` — замените на роль, заданную в отношении доверия HashiCorp Vault.
- `<Secret-Path>` — замените на путь к секрету, извлекаемому из HashiCorp Vault. Например: `secret/data/production/ci npmToken`.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Примечание.**

- Если сервер Vault недоступен из общедоступной сети, рассмотрите возможность использования локального средства выполнения с другими доступными [методами проверки подлинности](https://www.vaultproject.io/docs/auth) Vault. Дополнительные сведения см. в разделе «[Локальные средства выполнения тестов](/actions/hosting-your-own-runners/about-self-hosted-runners)».
- `<Vault Namespace>` необходимо задать для развертывания Vault Enterprise (включая HCP Vault). Дополнительные сведения см. в статье [Пространство имен Vault](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Отзыв маркера доступа

По умолчанию сервер Vault автоматически отзывает маркеры доступа при истечении срока их жизни, поэтому вам не нужно отзывать маркеры доступа вручную. Однако если вы хотите отозвать маркеры доступа сразу после завершения или сбоя задания, можно вручную отозвать выданный маркер с помощью [Vault API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Задайте для параметра `exportToken` значение `true` (по умолчанию: `false`). При этом маркер доступа выпущенного Vault экспортируется в виде переменной среды: `VAULT_TOKEN`.
2. Добавьте шаг, чтобы вызвать API Vault [отзыва маркера (самостоятельно)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self), чтобы отозвать маркер доступа.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
