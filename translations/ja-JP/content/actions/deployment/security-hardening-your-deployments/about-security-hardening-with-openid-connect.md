---
title: OpenID Connect を使ったセキュリティ強化について
shortTitle: Security hardening with OpenID Connect
intro: OpenID Connect を使用すると、ワークフローによって、有効期間の短いトークンをクラウド プロバイダーから直接交換できます。
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90a2f8c6cb2114f060bfbd0f422cb1ef6dbca604
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192032'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## OpenID Connect の概要

多くの場合、{% data variables.product.prodname_actions %} ワークフローは、ソフトウェアをデプロイするため、またはクラウドのサービスを使うために、クラウド プロバイダー (AWS、Azure、GCP、HashiCorp Vault など) にアクセスするように設計されています。 ワークフローは、このようなリソースにアクセスできるように、パスワードやトークンなどの資格情報をクラウド プロバイダーに事前に提供します。 通常、このような資格情報は {% data variables.product.prodname_dotcom %} にシークレットとして格納されており、ワークフローは、実行時に毎回このシークレットをクラウド プロバイダーに提示します。 

ただし、ハードコーディングされたシークレットを使うには、クラウド プロバイダーで資格情報を作成し、それをシークレットとして {% data variables.product.prodname_dotcom %} に複製する必要があります。 

OpenID Connect (OIDC) を使って、有効期間が短いアクセス トークンをクラウド プロバイダーに直接要求するようにワークフローを構成するという別の方法を採ることもできます。 クラウド プロバイダー側でも OIDC をサポートする必要がある場合は、アクセス トークンを要求できるワークフローを制御する信頼関係を構成する必要があります。 現在 OIDC をサポートしているプロバイダーとして、アマゾン ウェブ サービス、Azure、Google Cloud Platform、HashiCorp Vault などがあります。

### OIDC を使う利点

OIDC トークンを使うようにワークフローを更新することで、次のような優れたセキュリティ プラクティスを採用できます。

- **クラウド シークレットなし**: 有効期間が長い {% data variables.product.prodname_dotcom %} シークレットとしてクラウドの資格情報を複製する必要はありません。 代わりに、クラウド プロバイダー上で OIDC 信頼を構成し、OIDC を介して有効期間が短いアクセス トークンをクラウド プロバイダーに要求するようにワークフローを更新することができます。 
- **認証と認可の管理**: クラウド プロバイダーの認証 (authN) および認可 (authZ) ツールを使ってクラウド リソースへのアクセスを制御することで、ワークフローから資格情報を使用する方法をより細かく制御できます。
- **資格情報のローテーション**: OIDC を使う場合、1 つのジョブに対してのみ有効であり、自動的に失効する有効期間が短いアクセス トークンがクラウド プロバイダーから発行されます。

### OIDC の概要

次の図は、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーがワークフローやクラウド プロバイダーとどのように統合されているかを示す概要です。

![OIDC 図](/assets/images/help/images/oidc-architecture.png)

1. クラウド プロバイダー内に、クラウド ロールと、クラウドへのアクセスを必要とする {% data variables.product.prodname_dotcom %} ワークフローとの間に OIDC 信頼を作成します。
2. ジョブを実行するたびに、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーによって OIDC トークンが自動生成されます。 このトークンには、認証対象の特定のワークフローに関する、セキュリティが強化された検証可能な ID を確立するための複数の要求が含まれています。
3. このトークンを {% data variables.product.prodname_dotcom %} の OIDC プロバイダーに要求し、クラウド プロバイダーに提示するステップまたはアクションをジョブ内に含めることができます。
4. クラウド プロバイダーは、トークンで提示した要求の検証を完了した後に、ジョブの期間中にのみ使用できる有効期間の短いクラウド アクセス トークンを提供します。

## クラウドを使った OIDC 信頼の構成

{% data variables.product.prodname_dotcom %} の OIDC プロバイダーを信頼するようにクラウドを構成する場合は、受信する要求をフィルター処理する条件を追加する **必要があります**。これは、信頼できないリポジトリやワークフローがクラウド リソースに対してアクセス トークンを要求できないようにするためです。

- クラウド プロバイダーは、アクセス トークンを付与する前に、信頼設定で条件を設定するために使われた [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) と他の要求が、要求の JSON Web トークン (JWT) 内のものと一致するかどうかを確認します。 そのため、クラウド プロバイダーで _subject_ や他の条件を正しく定義するように注意する必要があります。
- OIDC 信頼の構成手順と、(_Subject_ やその他の要求を使って) クラウド ロールの条件を設定する構文は、利用しているクラウド プロバイダーによって異なります。 例については、「[サブジェクト要求の例](#example-subject-claims)」を参照してください。
 
### OIDC トークンの概要

各ジョブは {% data variables.product.prodname_dotcom %} の OIDC プロバイダーに OIDC トークンを要求し、その応答として、自動的に生成された JSON Web トークン (JWT) が返されます。これは生成されたワークフロー ジョブごとに一意です。 このジョブを実行すると、OIDC トークンがクラウド プロバイダーに提示されます。 クラウド プロバイダーは、トークンを検証するために、OIDC トークンの subject とその他の要求がクラウド ロールの OIDC 信頼定義に事前に構成されている条件と一致するかどうかを確認します。

次の OIDC トークン例では、`octo-org/octo-repo` リポジトリ内の `prod` というジョブ環境を参照する subject (`sub`) を使っています。

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
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

{% data variables.product.prodname_dotcom %} の OIDC プロバイダーがサポートするすべての要求を確認するには、{% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %} https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %} の `claims_supported` のエントリを確認します。

このトークンには、標準の audience、issuer、subject 要求が含まれています。

|    要求    | 説明            |
| ----------- | ---------------------- |
| `aud`| _(Audience)_ 既定では、これはリポジトリ所有者 (リポジトリを所有する組織など) の URL です。 カスタマイズできるのは、この要求のみです。 ツールキットのコマンド ([`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)) を使ってカスタムの対象ユーザーを設定できます          | 
| `iss`| _(Issuer)_ 。OIDC トークンの発行者: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(Subject)_ クラウド プロバイダーによって検証される subject 要求を定義します。 常に予測可能な方法でアクセス トークンを割り当てるには、この設定が不可欠です。|

OIDC トークンには、標準の要求が他にもあります。

|    要求    | 説明            |
| ----------- | ---------------------- |
| `alg`| _(Algorithm)_ OIDC プロバイダーが使うアルゴリズム。                    | 
| `exp`| _(Expires at)_ JWT の有効期限を特定します。                    | 
| `iat`| _(Issued at)_ JWT が発行された時刻。                   | 
| `jti`| _(JWT token identifier)_ OIDC トークンの一意の識別子。                   | 
| `kid`| _(Key identifier)_ OIDC トークンの一意のキー。                   | 
| `nbf`| _(Not before)_ この時刻より前に JWT を使用することはできません。                   | 
| `typ`| _(Type)_ トークンの種類について説明します。 これは JSON Web トークン (JWT) です。                   | 

トークンには、{% data variables.product.prodname_dotcom %} が提供するカスタム要求も含まれています。

|    要求    | 説明            |
| ----------- | ---------------------- |
| `actor`| ワークフロー実行を開始した個人アカウント。                   | 
| `actor_id`| ワークフロー実行を開始した個人アカウントの ID。             |
| `base_ref`| ワークフロー実行における pull request のターゲット ブランチ。                   | 
| `environment`| ジョブが使う環境の名前。                    | 
| `event_name`| ワークフローの実行をトリガーしたイベントの名前。                    | 
| `head_ref`| ワークフロー実行における pull request のソース ブランチ。                   | 
| `job_workflow_ref`| これは、このジョブが使う再利用可能なワークフローの参照パスです。 詳細については、「[再利用可能なワークフローでの OpenID Connect の使用](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)」を参照してください。                  | 
| `ref`| _(Reference)_ ワークフロー実行をトリガーした git ref。                   | 
| `ref_type`| `ref` の種類。例: "branch"。                  | 
| `repository_visibility` | ワークフローが実行されているリポジトリの可視性。 次の値を受け入れます: `internal`、`private`、または `public`。                   | 
| `repository`| ワークフローが実行されているリポジトリ。                   | 
| `repository_id`| ワークフローが実行されているリポジトリの ID。  |
| `repository_owner`| `repository` が格納されている組織の名前。                   | 
| `repository_owner_id`| `repository` が格納されている組織の ID。            |
| `run_id`| ワークフローをトリガーしたワークフロー実行の ID。                   | 
| `run_number`| このワークフローが実行された回数。                   | 
| `run_attempt`| このワークフロー実行が再試行された回数。                    | 
| `workflow`| ワークフローの名前。                   | 

### OIDC 要求を使ったクラウド ロールに対する信頼条件の定義

OIDC を使う場合、クラウド プロバイダー内のリソースにアクセスするには、{% data variables.product.prodname_actions %} ワークフローにトークンが必要です。 ワークフローはクラウド プロバイダーにアクセス トークンを要求します。そこで、JWT から提示された詳細が確認されます。 JWT の信頼構成が一致した場合、クラウド プロバイダーは、応答として一時的なトークンをワークフローに発行します。これを使って、クラウド プロバイダー内のリソースにアクセスできるようになります。 特定の組織のリポジトリから送信された要求のみに応答するようにクラウド プロバイダーを構成することができます。また、後述する追加の条件を指定することもできます。

通常、Audience と Subject の要求は、GitHub ワークフローへのアクセスにスコープを設定する目的で、クラウド ロールやリソースに対する条件の設定時に組み合わせて使います。
- **Audience**: 既定では、この値には組織またはリポジトリ所有者の URL を使います。 これを使って、特定の組織内のワークフローのみがクラウド ロールにアクセスできるように条件を設定できます。
- **Subject**: 既定では、事前に定義された書式があります。{% data variables.product.prodname_dotcom %} の Organization、リポジトリ、ブランチ、関連付けられた [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) 環境など、ワークフローに関する主要なメタデータの一部を連結したものです。 連結したメタデータからサブジェクト要求を組み立てる方法については、「[サブジェクト要求の例](#example-subject-claims)」を参照してください。

より詳しい信頼条件が必要な場合は、JWT に含まれる issuer (`iss`) と subject (`sub`) の要求をカスタマイズできます。 詳しくは、「[トークン クレームのカスタマイズ](#customizing-the-token-claims)」を参照してください。

また、OIDC トークンでサポートされている要求は他にも多数あり、これらの条件設定にも使用できます。 さらに、クラウド プロバイダーがアクセス トークンへのロール割り当てを許可していて、さらに細かいアクセス許可を指定できる場合があります。

{% note %}

**注**: クラウド プロバイダーがアクセス トークンを発行する方法を制御するには、少なくとも 1 つの条件を定義し、信頼できないリポジトリがクラウド リソースにアクセス トークンを要求できないようにする **必要があります**。

{% endnote %}

### subject 要求の例

次の例は、"Subject" を条件として使う方法を示しています。また、連結したメタデータから "Subject" を組み立てる方法について説明します。 [subject](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) は [`job` コンテキスト](/actions/learn-github-actions/contexts#job-context)の情報を使い、特定のブランチ、環境内で動作するワークフローからの要求に対してのみアクセス トークン要求を許可するようにクラウド プロバイダーに指示します。 以下のセクションでは、使用できる一般的な subject について説明します。

#### 特定の環境にフィルター処理する

ジョブから環境を参照するときに、subject 要求には環境名が含まれます。

特定の[環境](/actions/deployment/using-environments-for-deployment)名にフィルター処理する subject を構成することができます。 この例で、ワークフロー実行は、`octo-org` 組織が所有する `octo-repo` というリポジトリ内にある `Production` という環境を持つジョブから開始されている必要があります。

|        |             |
| ------ | ----------- |
| 構文: | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| 例:| `repo:octo-org/octo-repo:environment:Production`       |

#### `pull_request` イベントにフィルター処理する

pull request イベントによってワークフローがトリガーされたとき、ジョブが環境を参照していない場合に限り、subject 要求には `pull_request` 文字列が含まれます。

[`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request) イベントにフィルター処理する subject を構成することができます。 この例で、ワークフロー実行は、`octo-org` 組織が所有する `octo-repo` というリポジトリ内の `pull_request` イベントによってトリガーされている必要があります。

|        |             |
| ------ | ----------- |
| 構文: | `repo:<orgName/repoName>:pull_request`      | 
| 例:| `repo:octo-org/octo-repo:pull_request`      |

#### 特定のブランチにフィルター処理する

ジョブから環境を参照していない場合、かつ pull request イベントによってトリガーされたワークフローではない場合にのみ、subject 要求にはワークフローのブランチ名が含まれます。

特定のブランチ名にフィルター処理する subject を構成することができます。 この例で、ワークフロー実行は、`octo-org` 組織が所有する `octo-repo` というリポジトリ内にある `demo-branch` というブランチから開始されている必要があります。

|        |             |
| ------ | ----------- |
| 構文: | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| 例:| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### 特定のタグにフィルター処理する

ジョブから環境を参照していない場合、かつ pull request イベントによってトリガーされたワークフローではない場合にのみ、subject 要求にはワークフローのタグ名が含まれます。

特定のタグにフィルター処理する subject を作成できます。 この例で、ワークフロー実行は、`octo-org` 組織が所有する `octo-repo` というリポジトリ内の `demo-tag` というタグで開始されている必要があります。

|        |             |
| ------ | ----------- |
| 構文: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| 例:| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### クラウド プロバイダーでの subject の構成

クラウド プロバイダーの信頼関係で subject を構成するには、その信頼の構成に subject 文字列を追加する必要があります。 次の例は、さまざまなクラウド プロバイダーが同じ `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` subject を異なる方法で受け入れる方法を示しています。

|        |             |
| ------ | ----------- |
| アマゾン ウェブ サービス | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

詳細については、「[クラウド プロバイダーの OpenID Connect を有効にする](#enabling-openid-connect-for-your-cloud-provider)」を参照してください。

## OIDC 向けのアクションの更新

OIDC を使って認証するためにカスタム アクションを更新するには、Actions ツールキットの `getIDToken()` を使って、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーに JWT を要求することができます。 詳細については、[npm パッケージ ドキュメント](https://www.npmjs.com/package/@actions/core/v/1.6.0)の「OIDC トークン」を参照してください。

また、`curl` コマンドを使い、次の環境変数を使って JWT を要求することもできます。

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | {% data variables.product.prodname_dotcom %} の OIDC プロバイダーの URL。      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | OIDC プロバイダーに対する要求のベアラー トークン。      |


次に例を示します。

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### アクセス許可設定の追加

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## トークン クレームのカスタマイズ

JWT に含まれる要求をカスタマイズすることで、OIDC 構成のセキュリティを強化できます。 これらのカスタマイズを使用すると、ワークフローがクラウドでホストされているリソースにアクセスできるときに、クラウド ロールに対してより詳しい信頼条件を定義できます。

{% ifversion ghec %} - セキュリティのレイヤーを追加するために、`issuer` URL に Enterprise スラッグを追加できます。 これにより、issuer (`iss`) の要求に条件を設定し、Enterprise スラッグを含める必要がある一意の `issuer` URL からの JWT トークンのみを受け入れるように構成できます。{% endif %}
- 特定のリポジトリ、再利用可能なワークフロー、またはその他のソースからの JWT トークンを必要とする subject (`sub`) 要求に条件を設定することで、OIDC 構成を標準化できます。
- `repository_id` や `repository_visibility` などの追加の OIDC トークン要求を使用して、詳しい OIDC ポリシーを定義できます。 詳しくは、「[OIDC トークンについて](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token)」を参照してください。

これらの要求形式をカスタマイズするには、Organization とリポジトリの管理者が、次のセクションで説明する REST API エンドポイントを使用できます。

{% ifversion ghec %}

### 一意のトークン URL への切り替え

既定では、JWT は `https://token.actions.githubusercontent.com` で {% data variables.product.prodname_dotcom %} の OIDC プロバイダーによって発行されます。 このパスは、JWT の `iss` の値を使用してクラウド プロバイダーに提示されます。

Enterprise 管理者は、`https://token.actions.githubusercontent.com/<enterpriseSlug>` で一意の URL からトークンを受信するように Enterprise を構成することで、OIDC 構成のセキュリティを強化できます。 Enterprise のスラッグ値を `<enterpriseSlug>` で置き換えます。 

この構成は、Enterprise が一意の URL から OIDC トークンを受け取り、その URL からのトークンのみを受け入れるようにクラウド プロバイダーを構成できることを意味します。 これにより、OIDC を使用してクラウド リソースにアクセスできるのが Enterprise のリポジトリだけになります。

Enterprise でこの設定をアクティブにするには、Enterprise 管理者が `/enterprises/{enterprise}/actions/oidc/customization/issuer` エンドポイントを使用し、要求本文で `"include_enterprise_slug": true` を指定する必要があります。 詳しくは、「[Enterprise に {% data variables.product.prodname_actions %} OIDC カスタム issuer ポリシーを設定する](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise)」を参照してください。

この設定を適用すると、JWT に更新された `iss` の値が含まれるようになります。 次の例では、`iss` キーが `octocat-inc` をその `enterpriseSlug` 値として使用しています。

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### 組織またはリポジトリの subject 要求のカスタマイズ

セキュリティ、コンプライアンス、標準化を向上させるため、必要なアクセス条件に合わせて標準要求をカスタマイズできます。 クラウド プロバイダーが subject 要求に関する条件をサポートしている場合は、`sub` の値が `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""` などの再利用可能なワークフローのパスと一致するかどうかをチェックする条件を作成できます。 正確な形式は、クラウド プロバイダーの OIDC 構成によって異なります。 {% data variables.product.prodname_dotcom %} に一致条件を構成するには、REST API を使用して、`sub` 要求に常に `job_workflow_ref` などの特定のカスタム要求を含める必要があることを求めることができます。 [OIDC REST API](/rest/actions/oidc) を使って、OIDC subject 要求のカスタマイズ テンプレートを適用できます。たとえば、OIDC トークン内の `sub` 要求に、`job_workflow_ref` などの特定のカスタム要求を常に含めるように要求できます。

{% note %}

**注**: 組織テンプレートを適用しても、OIDC を既に使用している既存のリポジトリのワークフローには影響しません。 既存のリポジトリでは、テンプレートの適用後に作成された新しいリポジトリと同様に、リポジトリ所有者が、この構成を受け取るためにオプトインする必要があります。または、リポジトリに固有の異なる構成を適用できます。 詳しくは、「[組織の OIDC subject 要求用のカスタマイズ テンプレートを設定する](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)」を参照してください。

{% endnote %}

`sub` 要求全体で新しい形式で要求の結果をカスタマイズすると、「[subject 要求の例](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)」の説明にある、トークンの既定の事前定義 `sub` 形式が置き換えられます。

次のテンプレート例は、subject 要求をカスタマイズするさまざまな方法を示しています。 {% data variables.product.prodname_dotcom %} でこれらの設定を構成するには、管理者が REST API を使用して、subject (`sub`) 要求に含める必要がある要求の一覧を指定します。 

{% data reusables.actions.use-request-body-api %}

subject 要求をカスタマイズするには、REST API を使用して構成をカスタマイズする前に、クラウド プロバイダーの OIDC 構成で一致条件を作成する必要があります。 構成が完了すると、新しいジョブが実行されるたびに、そのジョブの間に生成された OIDC トークンが新しいカスタマイズ テンプレートに従うようになります。 ジョブの実行前にクラウド プロバイダーの OIDC 構成に一致条件が存在しない場合、クラウド条件が同期されない可能性があるため、生成されたトークンがクラウド プロバイダーによって受け入れられない可能性があります。

#### 例: 可視性と所有者に基づいたリポジトリの許可

このテンプレート例では、`sub` 要求に `repository_owner` と `repository_visibility` を使用する新しい形式を指定できます。

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

クラウド プロバイダーの OIDC 構成で、条件に `repository_owner` と `repository_visibility` の特定の値を含める必要があることを要求する `sub` 条件を構成します。 (例: `"repository_owner: "monalisa":repository_visibility:private"`)。 この方法では、クラウド ロールのアクセスを、Organization または Enterprise 内のプライベート リポジトリのみに制限できます。

#### 例: 特定の所有者が設定されているすべてのリポジトリへのアクセスの許可

このテンプレート例では、`sub` 要求に `repository_owner` の値のみを含む新しい形式を指定できます。 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

クラウド プロバイダーの OIDC 構成で、条件に `repository_owner` の特定の値を含める必要があることを要求する `sub` 条件を構成します。 例: `"repository_owner: "monalisa""`

#### 例: 再利用可能なワークフローの要求

このテンプレート例では、`job_workflow_ref` 要求の値を含む新しい形式を `sub` 条件に指定できます。 これにより、Enterprise は[再利用可能なワークフロー](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) を使用して、Organization とリポジトリ全体に一貫した展開を適用できます。

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

クラウド プロバイダーの OIDC 構成で、条件に `job_workflow_ref` の特定の値を含める必要があることを要求する `sub` 条件を構成します。 (例: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`)。

#### 例: 再利用可能なワークフローとその他の要求の要件化

次のテンプレート例では、特定の再利用可能なワークフローの要件と追加の要求を組み合わせています。

{% data reusables.actions.use-request-body-api %}

この例では、`"context"` を使用して条件を定義する方法も示しています。 これは、[既定の `sub` の形式](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims)のリポジトリに続く部分です。 たとえば、ジョブが環境を参照する場合、コンテキストには `environment:<environmentName>` が含まれています。

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

クラウド プロバイダーの OIDC 構成で、条件に `repo`、`context`、`job_workflow_ref` の特定の値を含める必要があることを要求する `sub` 条件を構成します。

このカスタマイズ テンプレートでは、`sub` が `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>` の形式を使用する必要があります。 例: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### 例: 特定のリポジトリへのアクセスの許可

このテンプレート例では、すべてのブランチやタグ、そして環境にわたって、クラウドが特定のリポジトリ内のすべてのワークフローにアクセスできるようになります。 セキュリティを向上させるために、このテンプレートを「[Enterprise のトークン URL のカスタマイズ](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise)」で説明されているカスタム issuer の URL と組み合わせてください。 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

クラウド プロバイダーの OIDC 構成で、必要な値と一致する `repo` 要求を必要とするように `sub` 条件を構成します。

#### 例: システム生成 GUID の使用

このテンプレート例では、エンティティの名前変更 (リポジトリの名前変更など) 間で変更されないシステム生成 GUID を使用する予測可能な OIDC 要求が有効になります。 

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

クラウド プロバイダーの OIDC 構成で、必要な値と一致する `repository_id` 要求を必要とするように `sub` 条件を構成します。

または

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

クラウド プロバイダーの OIDC 構成で、必要な値と一致する `repository_owner_id` 要求を必要とするように `sub` 条件を構成します。

#### カスタマイズのリセット

このテンプレート例では、subject 要求を既定の形式にリセットしています。 このテンプレートは、組織レベルのカスタマイズ ポリシーから実質的にオプトアウトします。

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

クラウド プロバイダーの OIDC 構成で、条件に `repo` と `context` の特定の値を含める必要があることを要求する `sub` 条件を構成します。

#### 既定の subject 要求の使用

Organization から subject 要求ポリシーを受け取ることができるリポジトリの場合、リポジトリ所有者は後でオプトアウトを選び、代わりに既定の `sub` 要求形式を使用できます。 これは、そのリポジトリで組織のカスタマイズされたテンプレートが使用されないことを意味します。 

既定の `sub` 要求形式を使うようにリポジトリを構成するには、リポジトリ管理者が「[組織の OIDC subject 要求用のカスタマイズ テンプレートを設定する](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)」の REST API エンドポイントを使い、次の要求本文を指定する必要があります。

```json
{
   "use_default": true
}
```

#### 例: 組織のテンプレートを使うようにリポジトリを構成する

リポジトリ管理者は、自分の組織の管理者によって作成されたテンプレートを使うようにリポジトリを構成できます。

組織のテンプレートを使うようにリポジトリを構成するには、リポジトリ管理者が「[組織の OIDC subject 要求用のカスタマイズ テンプレートを設定する](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)」の REST API エンドポイントを使い、次の要求本文を指定する必要があります。

```json
{
   "use_default": false
}
```

{% endif %}

## OIDC 向けのワークフローの更新

シークレットではなく OIDC アクセス トークンを使うように YAML ワークフローを更新できるようになりました。 一般的なクラウド プロバイダーは公式のログイン アクションを公開しているので、OIDC を簡単に使い始めることができます。 ワークフローの更新の詳細については、「[クラウド プロバイダーの OpenID Connect を有効にする](#enabling-openid-connect-for-your-cloud-provider)」の後半に掲載されているクラウド固有のガイドを参照してください。


## クラウド プロバイダーの OpenID Connect を有効にする

特定のクラウド プロバイダーに対して OIDC を有効にして構成する方法については、次のガイドを参照してください。

- 「[アマゾン ウェブ サービスでの OpenID Connect の構成](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)」
- 「[Azure での OpenID Connect の構成](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)」
- 「[Google Cloud Platform での OpenID Connect の構成](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)」
- 「[HashiCorp Vault での OpenID Connect の構成](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)」

別のクラウド プロバイダーに対して OIDC を有効にして構成する方法については、次のガイドを参照してください。

- 「[クラウド プロバイダーでの OpenID Connect の構成](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)」
