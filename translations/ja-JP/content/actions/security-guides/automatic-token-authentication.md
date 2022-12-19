---
title: 自動トークン認証
intro: '{% data variables.product.prodname_dotcom %} では、{% data variables.product.prodname_actions %} の代理で認証を受けるために使用できるトークンが提供されます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107038'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## `GITHUB_TOKEN` シークレットについて

各ワークフロー実行の開始時に、{% data variables.product.prodname_dotcom %} によって、ワークフローで使用する一意の `GITHUB_TOKEN` シークレットが自動的に作成されます。 `GITHUB_TOKEN` はワークフロー実行での認証に使用できます。

{% data variables.product.prodname_actions %}を有効化すると、{% data variables.product.prodname_dotcom %}はリポジトリに{% data variables.product.prodname_github_app %}をインストールします。 `GITHUB_TOKEN` シークレットは {% data variables.product.prodname_github_app %} インストール アクセス トークンです。 このインストールアクセストークンは、リポジトリにインストールされた{% data variables.product.prodname_github_app %}の代わりに認証を受けるために利用できます。 このトークンの権限は、ワークフローを含むリポジトリに限定されます。 詳細については、「[`GITHUB_TOKEN` の権限](#permissions-for-the-github_token)」を参照してください。

各ジョブの開始前に、{% data variables.product.prodname_dotcom %} はジョブのインストールアクセストークンをフェッチします。 {% data reusables.actions.github-token-expiration %}

トークンは `github.token` コンテキストでも使用できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。

## ワークフローでの `GITHUB_TOKEN` の使用

シークレットを参照するための標準構文 {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} を使って、`GITHUB_TOKEN` を使用できます。 `GITHUB_TOKEN` の使用例には、トークンをアクションへの入力として渡すことや、それを使用して認証済みの {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 要求を行うことが含まれます。

{% note %}

**重要:** ワークフローで `GITHUB_TOKEN` がアクションに明示的に渡されない場合でも、アクションでは `github.token` コンテキストを介して `GITHUB_TOKEN` にアクセスできます。 セキュリティを強化するには、`GITHUB_TOKEN` に付与されるアクセス許可を制限することにより、アクションに必要な最小限のアクセスのみが含まれるようにする必要があります。 詳細については、「[`GITHUB_TOKEN` の権限](#permissions-for-the-github_token)」を参照してください。

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### 例 1: 入力として `GITHUB_TOKEN` を渡す

{% data reusables.actions.github_token-input-example %}

### 例 2: REST API を呼び出す

`GITHUB_TOKEN` を使用して、認証済みの API 呼び出しを行うことができます。 以下のワークフローの例では、{% data variables.product.prodname_dotcom %} REST APIを使ってIssueを作成しています。

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## `GITHUB_TOKEN` のアクセス許可

{% data variables.product.prodname_github_apps %} が各権限でアクセできる API エンドポイントについては、「[{% data variables.product.prodname_github_app %} の権限](/rest/reference/permissions-required-for-github-apps)」を参照してください。

次の表は、`GITHUB_TOKEN` に既定で付与されるアクセス許可を示したものです。 {% ifversion not ghes %}エンタープライズ、組織、またはリポジトリ{% else %}組織またはリポジトリ{% endif %}への管理者アクセス許可を持つユーザーは、既定のアクセス許可を制限なしまたは制限ありに設定できます。 エンタープライズ、組織、またはリポジトリの `GITHUB_TOKEN` に対して既定のアクセス許可を設定する方法については、「[エンタープライズでの {% data variables.product.prodname_actions %} のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)」、「[組織の {% data variables.product.prodname_actions %} の無効化または制限](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)」、または「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)」を参照してください。

| Scope         | 既定のアクセス<br>(制限なし) | 既定のアクセス<br>(制限あり) | 最大アクセス<br>(フォークされたリポジトリによる) |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | 読み取り/書き込み  | なし | 読み取り |
| checks        | 読み取り/書き込み  | なし | 読み取り |
| 目次      | 読み取り/書き込み  | 読み取り | 読み取り |
| deployments   | 読み取り/書き込み  | なし | 読み取り |{% ifversion fpt or ghec %}
| id-token      | なし        | なし | 読み取り |{% endif %}
| issues        | 読み取り/書き込み  | なし | 読み取り |
| metadata      | 読み取り        | 読み取り | 読み取り |
| packages      | 読み取り/書き込み  | なし | 読み取り |
| ページ         | 読み取り/書き込み  | なし | 読み取り |
| pull-requests | 読み取り/書き込み  | なし | 読み取り |
| repository-projects | 読み取り/書き込み | なし | 読み取り |
| security-events     | 読み取り/書き込み | なし | 読み取り |
| statuses      | 読み取り/書き込み  | なし | 読み取り |

{% data reusables.actions.workflow-runs-dependabot-note %}

### `GITHUB_TOKEN` のアクセス許可の変更

`GITHUB_TOKEN` のアクセス許可は、個々のワークフロー ファイルで変更できます。 `GITHUB_TOKEN` の既定のアクセス許可が制限されている場合は、一部のアクションとコマンドを正常に実行できるように、アクセス許可を昇格させる必要がある場合があります。 既定のアクセス許可が許容されている場合は、ワークフロー ファイルを編集して `GITHUB_TOKEN` から一部のアクセス許可を削除できます。 優れたセキュリティ プラクティスとして、`GITHUB_TOKEN` に必要最小限のアクセス権を付与することをお勧めします。

`GITHUB_TOKEN` が特定のジョブに対して保持していたアクセス許可は、ワークフロー実行ログの [ジョブを設定する] セクションで確認できます。 詳細については、「[ワークフロー実行ログを使用する](/actions/managing-workflow-runs/using-workflow-run-logs)」を参照してください。

ワークフロー ファイル内の `permissions` キーを使用して、ワークフロー全体または個々のジョブの `GITHUB_TOKEN` のアクセス許可を変更することができます。 これにより、ワークフローまたはジョブに最低限必要な権限を設定できます。 `permissions` キーが使用されている場合は、すべての未指定のアクセス許可が [アクセスなし] に設定されます。ただし、`metadata` スコープは例外であり、常に読み取りアクセス権を取得します。

{% data reusables.actions.forked-write-permission %}

この記事の前半の 2 つのワークフロー例は、ワークフロー レベルとジョブ レベルで使用されている `permissions` キーを示しています。 [例 1](#example-1-passing-the-github_token-as-an-input) では、ワークフロー全体に対して 2 つのアクセス許可が指定されています。 [例 2](#example-2-calling-the-rest-api) では、単一ジョブの 1 つのスコープに書き込みアクセス許可が付与されています。

`permissions` キーの詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#permissions)」を参照してください。

#### ワークフロージョブの権限の計算方法

`GITHUB_TOKEN` のアクセス許可は最初に、エンタープライズ、組織、またはリポジトリの既定値に設定されます。 デフォルトがこれらのレベルのいずれかで制限付きの権限に設定されている場合、これは関連するリポジトリに適用されます。 たとえば、Organization レベルで制限付きのデフォルトを選択した場合、その Organization 内のすべてのリポジトリは、制限付きの権限をデフォルトとして使用します。 次に、ワークフローファイル内の構成に基づいて、最初にワークフローレベルで、次にジョブレベルで権限が調整されます。 最後に、ワークフローがフォークされたリポジトリからの pull request によってトリガーされ、 **[pull request からワークフローに書き込みトークンを送信する]** 設定が選択されていない場合、アクセス許可が調整され、書き込みアクセス許可はすべて読み取り専用に変更されます。

### 追加の権限を付与する

`GITHUB_TOKEN` で利用できないアクセス許可を必要とするトークンが必要な場合は、{% data variables.product.pat_generic %}を作成し、それをリポジトリのシークレットとして設定できます。

1. リポジトリに対して適切な権限を持つトークンを利用もしくは生成してください。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
1. トークンをワークフローのリポジトリにシークレットとして追加し、{%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} 構文を使用して参照します。 詳細については、「[暗号化されたシークレットの作成と使用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### 参考資料

- "[REST API のリソース](/rest/overview/resources-in-the-rest-api#rate-limiting)"
