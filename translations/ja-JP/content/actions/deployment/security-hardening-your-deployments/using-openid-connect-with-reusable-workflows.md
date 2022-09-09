---
title: 再利用可能なワークフローでの OpenID Connect の使用
shortTitle: Using OpenID Connect with reusable workflows
intro: 再利用可能なワークフローと OIDC を使用して、デプロイ手順を標準化し、セキュリティを強化できます。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/using-oidc-with-your-reusable-workflows
versions:
  fpt: '*'
  ghae: issue-4757
  ghec: '*'
  ghes: '>=3.5'
type: how_to
topics:
  - Workflows
  - Security
ms.openlocfilehash: c9b5daf88f6e2dc91aad8890a3a8833cfbd2b0f0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: '146273051'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## <a name="about-reusable-workflows"></a>再利用可能なワークフローについて

あるワークフローから別のワークフローにデプロイ ジョブをコピーして貼り付けるのではなく、デプロイ手順を実行する再利用可能なワークフローを作成できます。 「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows)」で説明されているアクセス要件のいずれかを満たしていれば、別のワークフローから再利用可能なワークフローを使用できます。

再利用可能なワークフローを OpenID Connect (OIDC) と組み合わせると、リポジトリ、組織、またはエンタープライズ全体で一貫したデプロイを実施することができます。 これを行うには、再利用可能なワークフローに基づいてクラウド ロールの信頼条件を定義します。

再利用可能なワークフローに基づいて信頼条件を作成するには、クラウド プロバイダーが `job_workflow_ref` のカスタム要求をサポートしている必要があります。 これにより、クラウド プロバイダーは、ジョブの元のリポジトリを特定できます。 クラウド プロバイダーが標準の要求 (_audience_ と _subject_) のみをサポートしている場合、再利用可能なワークフロー リポジトリのジョブであることを判断できなくなります。 `job_workflow_ref` をサポートするクラウド プロバイダーには、Google Cloud Platform と HashiCorp Vault があります。

先に進む前に、[再利用可能なワークフロー](/actions/learn-github-actions/reusing-workflows)と [OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) の概念を理解しておく必要があります。

## <a name="how-the-token-works-with-reusable-workflows"></a>再利用可能なワークフローでのトークンのしくみ

ワークフロー実行中、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーは、ジョブに関する情報を含む OIDC トークンをクラウド プロバイダーに提示します。 そのジョブが再利用可能なワークフローの一部である場合、トークンには、呼び出し元ワークフローに関する情報を含む標準の要求が含まれます。また、呼び出されたワークフローに関する情報を含む `job_workflow_ref` というカスタム要求も含まれます。

たとえば、次の OIDC トークンは、呼び出されたワークフローの一部であったジョブ用です。 `workflow`、`ref` などの属性は呼び出し元ワークフローを表し、`job_workflow_ref` は呼び出されたワークフローを指します。

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

再利用可能なワークフローでデプロイ手順を実行する場合、通常、特定のクラウド ロールへのアクセスが必要になります。また、組織内のどのリポジトリからもその再利用可能なワークフローを呼び出せるようにすることもできます。 これを許可するには、任意のリポジトリと任意の呼び出し元ワークフローを許可する信頼条件を作成し、組織と呼び出されたワークフローでフィルター処理します。 例については、次のセクションを参照してください。

## <a name="examples"></a>例

**特定のリポジトリ内の再利用可能なワークフローにフィルター処理する**

特定のリポジトリ内の再利用可能なワークフローをフィルター処理するカスタム要求を構成することができます。 この例で、ワークフロー実行は、`octo-org/octo-automation` リポジトリ内と、`octo-org` 組織が所有する任意のリポジトリ内の再利用可能なワークフローで定義されたジョブから開始される必要があります。

- **件名**:
  - 構文: `repo:ORG_NAME/*`
  - 例: `repo:octo-org/*`

- **カスタム要求**:
  - 構文: `job_workflow_ref:ORG_NAME/REPO_NAME`
  - 例: `job_workflow_ref:octo-org/octo-automation@*`

**特定の参照で特定の再利用可能なワークフローにフィルター処理する**

特定の再利用可能なワークフローをフィルター処理するカスタム要求を構成することができます。 この例で、ワークフロー実行は、再利用可能なワークフロー `octo-org/octo-automation/.github/workflows/deployment.yml` 内と、`octo-org` 組織が所有する任意のリポジトリ内で定義されたジョブから開始される必要があります。

- **件名**:
  - 構文: `repo:ORG_NAME/*` 
  - 例: `repo:octo-org/*` 

- **カスタム要求**:
  - 構文: `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref` 
  - 例: `job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`
