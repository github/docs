---
title: ワークフローの再利用
shortTitle: Reuse workflows
intro: 既存のワークフローを再利用してワークフローを作成するときに重複を回避する方法について説明します。
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191927'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

あるワークフローから別のワークフローにコピーして貼り付けるのではなく、ワークフローを再利用できます。 再利用可能なワークフローにアクセスできるユーザーは誰でも、別のワークフローから再利用可能なワークフローを呼び出すことができます。

ワークフローを再利用すると、重複が回避されます。 これにより、ワークフローの管理が容易になり、アクションと同様に、他のユーザーの作業を基にして新しいワークフローをより迅速に作成できます。 また、ワークフローを再利用すると、適切に設計され、既にテスト済みで、効果的であることが証明されているワークフローを使用でき、ベスト プラクティスが促進されます。 Organization では、一元的に管理できる再利用可能なワークフローのライブラリを構築できます。

次の図は、再利用可能なワークフローを使用する進行中のワークフロー実行を示しています。

* 図の左側にある 3 つのビルド ジョブが正常に完了すると、"Deploy" という依存ジョブが実行されます。
* "Deploy" ジョブによって、"Staging"、"Review"、"Production" の 3 つのジョブを含む再利用可能なワークフローが呼び出されます。
* "Production" デプロイ ジョブは、"Staging" ジョブが正常に完了した後にのみ実行されます。
* ジョブが環境を対象とする場合、ワークフロー実行には、ジョブ内のステップ数を示す進行状況バーが表示されます。 次の図では、"Production" ジョブには 8 つのステップが含まれており、ステップ 6 が現在処理中です。
* 再利用可能なワークフローを使用してデプロイ ジョブを実行すると、ワークフロー内のコードを複製することなく、ビルドごとにそれらのジョブを実行できます。

![デプロイに再利用可能なワークフローの図](/assets/images/help/images/reusable-workflows-ci-cd.png)

別のワークフローを使用するワークフローは、"呼び出し元" ワークフローと呼ばれます。 再利用可能なワークフローは、"呼び出し先" ワークフローです。 1 つの呼び出し元ワークフローで、複数の呼び出し先ワークフローを使用できます。 各呼び出し先ワークフローは、1 行で参照されます。 その結果、呼び出し元のワークフロー ファイルに含まれるのは数行の YAML だけでも、実行時に多数のタスクが実行される可能性があります。 ワークフローを再利用すると、呼び出し先ワークフロー全体が、呼び出し元ワークフローの一部であるかのように使用されます。

別のリポジトリのワークフローを再利用する場合、呼び出し先ワークフロー内のすべてのアクションは、呼び出し元ワークフローの一部であるかのように実行されます。 たとえば、呼び出し先ワークフローで `actions/checkout` を使用する場合、アクションでは、呼び出し先ワークフローではなく、呼び出し元ワークフローがホストされるリポジトリの内容をチェックアウトします。

再利用可能なワークフローが呼び出し元ワークフローによってトリガーされると、 `github` コンテキストが必ず呼び出し元ワークフローに関連付けられます。 呼び出し先ワークフローには、`github.token` と `secrets.GITHUB_TOKEN` へのアクセス権が自動的に付与されます。 `github` コンテキストの詳細については、[GitHub Actions のコンテキストと式の構文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)に関するページを参照してください。

{% data variables.product.prodname_actions %} ワークフローで参照されている再利用ワークフローは、ユーザーのワークフローを含むリポジトリの依存関係グラフで依存関係として表示できます。 詳細については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

### 再利用可能なワークフローとスターター ワークフロー

スターター ワークフローを使用すると、ワークフローを作成するアクセス許可を持つ Organization 内のすべての人が、より迅速かつ簡単にワークフローを作成できます。 新しいワークフローを作成する場合は、スターター ワークフローを選択すると、ワークフローを作成する作業の一部またはすべてが自動的に行われます。 スターター ワークフロー内では、再利用可能なワークフローを参照して、一元管理されたワークフロー コードを再利用するメリットを簡単に得ることもできます。 再利用可能なワークフローを参照するときにコミット SHA を使うと、そのワークフローを再利用するすべてのユーザーが必ず同じ YAML コードを使用するようにできます。 ただし、タグまたはブランチを使用して再利用可能なワークフローを参照する場合は、そのバージョンのワークフローを信頼できることを確認してください。 詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)」を参照してください。

詳細については、「[Organization のスターター ワークフローの作成](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)」を参照してください。

## 再利用可能なワークフローへのアクセス

次の{% ifversion ghes or ghec or ghae %}いずれか{% else %}どちらか{% endif %}が true の場合、再利用可能なワークフローを別のワークフローで使用できます。

* どちらのワークフローも同じリポジトリ内にある。
* 呼び出し先ワークフローがパブリック リポジトリ{% ifversion actions-workflow-policy %}に格納されており、{% ifversion ghec %}Enterprise{% else %}Organization{% endif %} でパブリックの再利用可能なワークフローを使うことができる{% endif %}。{% ifversion ghes or ghec or ghae %}
* 呼び出し先ワークフローが内部リポジトリに格納され、そのリポジトリの設定によりアクセス可能になっている。 詳細については、{% ifversion internal-actions %}「[Enterprise とのアクションとワークフローの共有](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}」を参照してください。{% endif %}

## ランナーの使用

{% ifversion fpt or ghes or ghec %}

### GitHub ホステッド ランナーの使用

{% data variables.product.prodname_dotcom %} ホステッド ランナーの割り当ては、常に呼び出し元のコンテキストのみを使用して評価されます。 {% data variables.product.prodname_dotcom %} ホステッド ランナーの支払いは、常に呼び出し元に関連付けられます。 呼び出し元ワークフローは、呼び出し先リポジトリの {% data variables.product.prodname_dotcom %} ホステッド ランナーを使用できません。 詳細については、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーの概要](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。

### セルフホスト ランナーの使用

{% endif %}

呼び出し元ワークフローと同じユーザーまたは Organization {% ifversion ghes or ghec or ghae %}あるいは Enterprise {% endif %}が所有する呼び出し先ワークフローでは、呼び出し元のコンテキストからセルフホスト ランナーにアクセスできます。 つまり、呼び出し先ワークフローでは、次のセルフホスト ランナーにアクセスできます。
* 呼び出し元リポジトリ内
* 呼び出し元リポジトリの Organization{% ifversion ghes or ghec or ghae %} または Enterprise{% endif %} 内にあり、ランナーが呼び出し元リポジトリで使用できるようになっている

## 制限事項

{% ifversion nested-reusable-workflow %}
* 最大 4 つのレベルのワークフローに接続できます。 詳しくは、「[再利用可能なワークフローを入れ子にする](#nesting-reusable-workflows)」を参照してください。
{% else %}
* 再利用可能なワークフローでは、他の再利用可能なワークフローを呼び出すことはできません。
{% endif %}
* プライベート リポジトリ内に格納されている再利用可能なワークフローは、同じリポジトリ内のワークフローでのみ使用できます。
* 呼び出し元ワークフローのワークフロー レベルで定義され、`env` コンテキストで設定されている環境変数は、呼び出し先ワークフローには反映されません。 `env` コンテキストについて詳しくは、「[GitHub Actions のコンテキストおよび式の構文](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)」を参照してください。{% ifversion actions-reusable-workflow-matrix %}{% else %}
* `strategy` プロパティは、再利用可能なワークフローを呼び出すすべてのジョブでサポートされていません。{% endif %}

## 再利用可能なワークフローの作成

再利用可能なワークフローは、他のワークフロー ファイルとよく似た YAML 形式のファイルです。 他のワークフロー ファイルと同様に、再利用可能なワークフローは、リポジトリの `.github/workflows` ディレクトリ内にあります。 `workflows` ディレクトリのサブディレクトリはサポートされていません。

ワークフローを再利用可能にするには、 `on` の値に `workflow_call` を含める必要があります。

```yaml
on:
  workflow_call:
```

### 再利用可能なワークフローでの入力とシークレットの使用

入力とシークレットを定義し、呼び出し元のワークフローから渡して、呼び出し先ワークフロー内で使用できます。 再利用可能なワークフローで入力またはシークレットを使用するには、3 つの段階があります。

1. 再利用可能なワークフローで、`inputs` と `secrets` のキーワードを使用して、呼び出し元ワークフローから渡す入力またはシークレットを定義します。
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %}入力とシークレットを定義するための構文の詳細については、[`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) と [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets) を参照してください。
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. 再利用可能なワークフローで、前の手順で `on` キーに定義した入力またはシークレットを参照します。

   {% note %}

   **注**: 呼び出し元ワークフローで `secrets: inherit` を使用してシークレットが継承されている場合は、`on` キーに明示的に定義されていない場合でも参照できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)」を参照してください。

   {% endnote %} {%- else %}
1. 再利用可能なワークフローで、前の手順で `on` キーに定義した入力またはシークレットを参照します。
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %}上記の例では、`envPAT` は `production` 環境に追加された環境シークレットです。 したがって、この環境はジョブ内で参照されます。

   {% note %}

   **注**: 環境シークレットは、リポジトリ用に定義した環境に格納される、暗号化された文字列です。 環境シークレットは、当該の環境を参照するワークフロー ジョブからのみ利用できます。 詳細については、「[デプロイに環境を使用する](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)」を参照してください。

   {% endnote %}

1. 呼び出し元ワークフローから入力またはシークレットを渡します。

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### 再利用可能なワークフローの例

この再利用可能な `workflow-B.yml` という名前のワークフロー ファイル (後述の[呼び出し元ワークフローの例](#example-caller-workflow)でこれを参照します) では、入力文字列とシークレットを呼び出し元ワークフローから受け取り、それらをアクションで使用します。

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## 再利用可能なワークフローの呼び出し

`uses` キーワードを使用して、再利用可能なワークフローを呼び出します。 ワークフロー内でアクションを使用する場合とは異なり、ジョブ ステップ内からではなく、ジョブ内で再利用可能なワークフローを直接呼び出します。

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

再利用可能なワークフロー ファイルを参照するには、{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}次のいずれかの構文{% else %}次の構文{% endif %}を使用します。

{% data reusables.actions.reusable-workflow-calling-syntax %}

複数のワークフローを呼び出し、それぞれを個別のジョブで参照できます。

{% data reusables.actions.uses-keyword-example %}

### 再利用可能なワークフローに入力とシークレットを渡す

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### 再利用可能なワークフローでのマトリックス戦略の使用

マトリックス戦略を使用するジョブでは、再利用可能なワークフローを呼び出すことができます。

マトリックス戦略を使用すると、1 つのジョブ定義で変数を使用して、変数の組み合わせに基づく複数のジョブ実行を自動的に作成できます。 たとえば、マトリックス戦略を使用して、再利用可能なワークフローに異なる入力を渡すことができます。 マトリックスの詳しい情報については、「[ジョブにマトリックスを使う](/actions/using-jobs/using-a-matrix-for-your-jobs)」を参照してください。

次のジョブ例では、再利用可能なワークフローを呼び出し、値 `[dev, stage, prod]` を使用して変数 `target` を定義することによってマトリックス コンテキストを参照します。 変数の値ごとに 1 つずつ、3 つのジョブが実行されます。

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### 再利用可能なワークフローを呼び出すジョブでサポートされているキーワード

再利用可能なワークフローを呼び出すときは、呼び出しを含むジョブで次のキーワードのみを使用できます。

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **注:**

   * 呼び出し元のジョブで `jobs.<job_id>.permissions` が指定されていない場合は、呼び出し先ワークフローには `GITHUB_TOKEN` に対する既定のアクセス許可が与えられます。 詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。
   * 呼び出し元ワークフローから渡された `GITHUB_TOKEN` アクセス許可は、呼び出し先ワークフローによってダウングレードのみできます (昇格されません)。

   {% endnote %}

### 呼び出し元ワークフローの例

このワークフロー ファイルでは、2 つのワークフロー ファイルを呼び出します。 このうち 2 つ目の `workflow-B.yml` ([再利用可能なワークフローの例](#example-reusable-workflow)に示されています) では、入力 (`config-path`) とシークレット (`token`) が渡されます。

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## 再利用可能なワークフローを入れ子にする

最大 4 つのレベルのワークフロー (つまり、最上位の呼び出し元ワークフローと最大 3 つのレベルの再利用可能なワークフロー) を接続できます。 たとえば、_caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_ です。 ワークフロー ツリー内のループは許可されません。

再利用可能なワークフロー内から、別の再利用可能なワークフローを呼び出すことができます。

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### 入れ子になったワークフローにシークレットを渡す

呼び出し元ワークフローで `jobs.<job_id>.secrets` を使用して、直接呼び出されたワークフローに名前付きシークレットを渡すことができます。 または、`jobs.<job_id>.secrets.inherit` を使用して、呼び出し元ワークフローのすべてのシークレットを直接呼び出されたワークフローに渡すことができます。 詳しくは、上記の「[再利用可能なワークフローに入力とシークレットを渡す](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow)」セクションと、参照記事「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)」を参照してください。 シークレットは直接呼び出されたワークフローにのみ渡されるため、ワークフロー チェーン A > B > C の場合、ワークフロー C では、A から B に、次に B から C に渡された場合にのみ A からシークレットを受け取ります。

次の例では、ワークフロー A で `inherit` キーワードを使用してすべてのシークレットをワークフロー B に渡しますが、ワークフロー B ではワークフロー C に 1 つのシークレットのみを渡します。ワークフロー B に渡されるその他のシークレットはいずれもワークフロー C では使用できません。

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### アクセスおよびアクセス許可

入れ子になった再利用可能なワークフローを含むワークフローは、入れ子になったワークフローのいずれかが最初の呼び出し元ワークフローにアクセスできない場合に失敗します。 詳しくは、「[再利用可能なワークフローへのアクセス](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows)」を参照してください。

`GITHUB_TOKEN` アクセス許可は、入れ子になったワークフローでのみ同じまたはより制限的にすることができます。 たとえば、ワークフロー チェーン A > B > C では、ワークフロー A に `package: read` トークンアクセス許可がある場合、B と C は `package: write` アクセス許可を持つことができません。 詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。

API を使用して、特定のワークフロー実行に関係していたワークフロー ファイルを特定する方法については、「[使用されているワークフローの監視](#monitoring-which-workflows-are-being-used)」を参照してください。
{% endif %}

## 再利用可能なワークフローからの出力の使用

再利用可能なワークフローでは、呼び出し元ワークフローで使用するデータが生成される場合があります。 これらの出力を使用するには、再利用可能なワークフローの出力として指定する必要があります。{% ifversion actions-reusable-workflow-matrix %}

出力を設定する再利用可能なワークフローがマトリックス戦略で実行される場合、その出力は、実際に値を設定するマトリックスの最後の正常に完了した再利用可能なワークフローで設定された出力になります。
つまり、最後の正常に完了した再利用可能なワークフローでその出力に空の文字列が設定され、最後から 2 番目の正常に完了した再利用可能なワークフローでその出力の実際の値が設定された場合、出力には最後から 2 番目の完了した再利用可能なワークフローの値が含まれます。{% endif %}

次の再利用可能なワークフローには、2 つのステップを含む 1 つのジョブがあります。 これらの各ステップでは、"hello" と "world" という 1 つの単語を出力として設定します。 ジョブの `outputs` セクションでは、これらのステップの出力を、`output1` と `output2` というジョブ出力にマップします。 次に `on.workflow_call.outputs` セクションで、ワークフロー自体に対して 2 つの出力を定義します。1 つは `firstword` といい `output1` にマップされ、もう 1 つは `secondword` といい `output2` にマップされます。

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

これで、同じワークフロー内のジョブからの出力を使用するのと同じ方法で、呼び出し元ワークフローの出力を使用できるようになりました。 再利用可能なワークフローのワークフロー レベルで定義した名前、`firstword` と `secondword` を使用して、出力を参照します。 このワークフローでは、`job1` によって再利用可能なワークフローが呼び出され、`job2` によって再利用可能なワークフローの出力 ("hello world") がワークフロー ログの標準出力に出力されます。

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

ジョブの出力の使用について詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)」を参照してください。

## 使用されているワークフローの監視

{% data variables.product.prodname_dotcom %} REST API を使用して、再利用可能なワークフローがどのように使用されているかを監視できます。 `prepared_workflow_job` 監査ログ アクションは、ワークフロー ジョブが開始されるとトリガーされます。 記録されるデータには次のものが含まれます。
* `repo` - ワークフロー ジョブが配置されている Organization/リポジトリ。 別のワークフローを呼び出すジョブの場合、これは呼び出し元ワークフローの Organization/リポジトリです。
* `@timestamp` - ジョブが開始された日時 (UNIX エポック形式)。
* `job_name` - 実行されたジョブの名前。
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` - このワークフロー ジョブに関係するすべての呼び出し元ワークフローのファイル パスの配列。 配列内の項目は、呼び出された逆の順序になります。 たとえば、ワークフロー A > B > C のチェーンでは、ワークフロー C 内のジョブのログを表示する場合、配列は `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]` になります。
* `calling_workflow_shas` - このワークフロー ジョブに関係するすべての呼び出し元ワークフローの SHA の配列。 配列には、`calling_workflow_refs` 配列と同じ順序で同じ数の項目が含まれています。 {% endif %}
* `job_workflow_ref` - 使用されたワークフロー ファイル。形式は `{owner}/{repo}/{path}/{filename}@{ref}`。 別のワークフローを呼び出すジョブの場合、これは呼び出し先ワークフローを示します。

REST API を使用して Organization の監査ログを照会する方法については、「[Organization](/rest/reference/orgs#get-the-audit-log-for-an-organization)」を参照してください。

{% note %}

**注**: `prepared_workflow_job` の監査データは、REST API を使用してのみ表示できます。 {% data variables.product.prodname_dotcom %} Web インターフェイスでは表示されず、JSON/CSV 形式でエクスポートされる監査データにも含まれません。

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## 再利用可能なワークフローでワークフローとジョブを再実行する

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## 次の手順

{% data variables.product.prodname_actions %} についてさらに学ぶには、「[ワークフローをトリガーするイベント](/actions/learn-github-actions/events-that-trigger-workflows)」を参照してください。

{% ifversion restrict-groups-to-workflows %}特定の再利用可能なワークフローのみを実行できるセルフホスト ランナー グループを作成することで、デプロイを標準化できます。 詳細については、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。{% endif %}
