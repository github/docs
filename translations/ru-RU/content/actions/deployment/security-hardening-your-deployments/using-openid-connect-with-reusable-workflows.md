---
title: Использование OpenID Connect с многократно используемыми рабочими процессами
shortTitle: OpenID Connect with reusable workflows
intro: Вы можете использовать повторно используемые рабочие процессы с OIDC для стандартизации и защиты шагов развертывания.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/using-oidc-with-your-reusable-workflows
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: how_to
topics:
  - Workflows
  - Security
ms.openlocfilehash: 3a02b1de0deff79ec2ee247f82a0587fde5c79fa
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010003'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о многократно используемых рабочих процессах

Вместо копирования и вставки заданий развертывания из одного рабочего процесса в другой можно создать многократно используемый рабочий процесс, выполняющий шаги развертывания. Многократно используемый рабочий процесс может использоваться другим рабочим процессом, если он соответствует одному из требований к доступу, описанных в разделе [Повторное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows).

Вы должны ознакомиться с основными [понятиями, описанными в разделе "Повторное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows)" и "[О защите безопасности с помощью OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".

## Определение условий доверия

В сочетании с OpenID Connect (OIDC) многократно используемые рабочие процессы позволяют обеспечить согласованные развертывания в репозитории, организации или предприятии. Это можно сделать, определив условия доверия для облачных ролей на основе повторно используемых рабочих процессов. Доступные варианты зависят от поставщика облачных служб:

- **Использование `job_workflow_ref`** . 
  - Для создания условий доверия на основе многократно используемых рабочих процессов ваш поставщик облачных служб должен поддерживать пользовательские утверждения для `job_workflow_ref`. Это позволяет поставщику облачных служб определять, из какого репозитория изначально поступило задание. 
  - Для облаков, поддерживающих только стандартные утверждения (аудитория (`aud`) и субъект (`sub`)), можно использовать API для настройки утверждения `sub`, чтобы включить `job_workflow_ref`. Дополнительные сведения см. в разделе [Настройка утверждений маркеров безопасности HTTP](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims). Поддержка пользовательских утверждений в настоящее время доступна для Google Cloud Platform и HashiCorp Vault.

- **Настройка утверждений маркера**. 
  - Вы можете указать более детализированные условия доверия, настроив утверждения издателя (`iss`) и субъекта (`sub`), включенные в JWT. Дополнительные сведения см. в разделе [Настройка утверждений маркеров безопасности HTTP](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims).

## Как маркер работает с многократно используемыми рабочими процессами

Во время выполнения рабочего процесса поставщик OIDC {% data variables.product.prodname_dotcom %}представляет поставщику облачных служб маркер OIDC, который содержит сведения о задании. Если это задание является частью многократно используемого рабочего процесса, маркер будет включать стандартные утверждения, содержащие сведения о вызывающем рабочем процессе, а также пользовательское утверждение `job_workflow_ref`, которое содержит сведения о вызываемом рабочем процессе.

Например, следующий маркер OIDC предназначен для задания, являющегося частью вызываемого рабочего процесса. Атрибуты `workflow`, `ref` и другие описывают вызывающий рабочий процесс, в то время как `job_workflow_ref` ссылается на вызываемый рабочий процесс:

```yaml{:copy}
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

Если многократно используемый рабочий процесс выполняет шаги развертывания, то ему обычно требуется доступ к определенной облачной роли, и вы можете захотеть разрешить любому репозиторию в организации вызывать этот многократно используемый рабочий процесс. Чтобы разрешить это, вам нужно создать условие доверия, которое разрешает любой репозиторий и любой вызывающий рабочий процесс, а затем выполнить фильтрацию по организации и вызываемому рабочему процессу. Некоторые примеры см. в следующем разделе.

## Примеры

**Фильтрация многократно используемых рабочих процессов в определенном репозитории**

Вы можете настроить пользовательское утверждение, которое фильтрует любой многократно используемый рабочий процесс в определенном репозитории. В этом примере выполнение рабочего процесса должно запускаться из задания, определенного в многократно используемом рабочем процессе в репозитории `octo-org/octo-automation`, и в любом репозитории, принадлежащем организации `octo-org`.

- **Тема**.
  - Синтаксис: `repo:ORG_NAME/*`
  - Например, `repo:octo-org/*`.

- **Пользовательское утверждение**:
  - Синтаксис: `job_workflow_ref:ORG_NAME/REPO_NAME`
  - Например, `job_workflow_ref:octo-org/octo-automation@*`.

**Фильтрация конкретного многократно используемого рабочего процессов по определенной ссылке**

Вы можете настроить пользовательское утверждение, которое фильтрует определенный многократно используемый рабочий процесс. В этом примере выполнение рабочего процесса должно запускаться из задания, определенного в многократно используемом рабочем процессе `octo-org/octo-automation/.github/workflows/deployment.yml`, и в любом репозитории, принадлежащем организации `octo-org`.

- **Тема**.
  - Синтаксис: `repo:ORG_NAME/*` 
  - Например, `repo:octo-org/*`. 

- **Пользовательское утверждение**:
  - Синтаксис: `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref` 
  - Например, `job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`.
