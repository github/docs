---
title: 依存関係の更新に関するプルリクエストを管理する
intro: '{% data variables.product.prodname_dependabot %} によって生成されたプルリクエストは、他のプルリクエストとほぼ同じ方法で管理しますが、いくつかの追加オプションがあります。'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
---

### {% data variables.product.prodname_dependabot %} のプルリクエストについて

{% data reusables.dependabot.pull-request-introduction %}

{% data variables.product.prodname_dependabot %} がプルリクエストを発行すると、リポジトリに対して選択した方法で通知されます。 各プルリクエストには、パッケージマネージャーから取得した、提案された変更に関する詳細情報が含まれています。 これらのプルリクエストは、リポジトリで定義されている通常のチェックとテストに従います。 また、十分な情報がある場合は、互換性スコアが表示されます。 これは、変更をマージするかどうかを決める際にも役立ちます。 このスコアについての詳しい情報は、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。

管理する依存関係が多数ある場合は、各パッケージマネージャーの設定をカスタマイズして、プルリクエストに特定のレビュー担当者、アサインされた人、ラベルを付けることができます。 詳しい情報については、「[依存関係の更新をカスタマイズする](/github/administering-a-repository/customizing-dependency-updates)」をご覧ください。

### {% data variables.product.prodname_dependabot %} のプルリクエストを表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. セキュリティおよびバージョン更新のプルリクエストは、簡単に特定できます。
    - 作者は [dependabot](https://github.com/dependabot) で、{% data variables.product.prodname_dependabot %} で使用されるボットアカウントです。
    - デフォルトでは、`dependencies` ラベルが付いています。

### {% data variables.product.prodname_dependabot %} プルリクエストのリベース戦略を変更する

デフォルトでは、{% data variables.product.prodname_dependabot %} は自動的にプルリクエストをリベースして競合を解決します。 マージの競合を手動で処理する場合は、`rebase-strategy` オプションを使用してこれを無効にできます。 詳細については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy) 」を参照してください。

### {% data variables.product.prodname_dependabot %} プルリクエストをコメントコマンドで管理する

{% data variables.product.prodname_dependabot %} はコメント内の単純なコマンドに応答します。 Each pull request contains details of the commands you can use to process the pull request (for example: to merge, squash, reopen, close, or rebase the pull request) under the "{% data variables.product.prodname_dependabot %} commands and options" section. これらの自動生成されたプルリクエストをできるだけ簡単にトリアージできるようにすることが目的です。

You can use any of the following commands on a {% data variables.product.prodname_dependabot %} pull request.

- `@dependabot cancel merge` cancels a previously requested merge.
- `@dependabot close` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from recreating that pull request. You can achieve the same result by closing the pull request manually.
- `@dependabot ignore this dependency` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this dependency (unless you reopen the pull request or upgrade to the suggested version of the dependency yourself).
- `@dependabot ignore this major version` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this major version (unless you reopen the pull request or upgrade to this major version yourself).
- `@dependabot ignore this minor version` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this minor version (unless you reopen the pull request or upgrade to this minor version yourself).
- `@dependabot merge` merges the pull request once your CI tests have passed.
- `@dependabot rebase` rebases the pull request.
- `@dependabot recreate` recreates the pull request, overwriting any edits that have been made to the pull request.
- `@dependabot reopen` reopens the pull request if the pull request is closed.
- `@dependabot squash and merge` squashes and merges the pull request once your CI tests have passed.

{% data variables.product.prodname_dependabot %} will react with a "thumbs up" emoji to acknowledge the command, and may respond with a comment on the pull request. While {% data variables.product.prodname_dependabot %} usually responds quickly, some commands may take several minutes to complete if {% data variables.product.prodname_dependabot %} is busy processing other updates or commands.

依存関係やバージョンを無視するコマンドを実行すると、{% data variables.product.prodname_dependabot %} はリポジトリの設定を一元的に保存します。 これは簡単な解決策ですが、複数のコントリビューターがいるリポジトリの場合は、設定ファイルで無視する依存関係とバージョンを明示的に定義することをお勧めします。 これにより、特定の依存関係が自動的に更新されない理由をすべてのコントリビューターが簡単に確認できます。 詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore) 」を参照してください。
