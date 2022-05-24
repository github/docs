---
title: 依存関係の更新に関するPull Requestを管理する
intro: '{% data variables.product.prodname_dependabot %} によって生成されたPull Requestは、他のPull Requestとほぼ同じ方法で管理しますが、いくつかの追加オプションがあります。'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Dependabot PRの管理
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} のPull Requestについて

{% data reusables.dependabot.pull-request-introduction %}

{% data variables.product.prodname_dependabot %} がプルリクエストを発行すると、リポジトリに対して選択した方法で通知されます。 各プルリクエストには、パッケージマネージャーから取得した、提案された変更に関する詳細情報が含まれています。 これらのプルリクエストは、リポジトリで定義されている通常のチェックとテストに従います。
{% ifversion fpt or ghec %}加えて、十分な情報がある場合には互換性スコアが表示されます。 これは、変更をマージするかどうかを決める際にも役立ちます。 このスコアについての詳しい情報は、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。{% endif %}

管理する依存関係が多数ある場合は、各パッケージマネージャーの設定をカスタマイズして、プルリクエストに特定のレビュー担当者、アサインされた人、ラベルを付けることができます。 詳しい情報については、「[依存関係の更新をカスタマイズする](/github/administering-a-repository/customizing-dependency-updates)」をご覧ください。

## {% data variables.product.prodname_dependabot %} のPull Requestを表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. セキュリティあるいはバージョン更新のPull Requestは、簡単に特定できます。
    - 作者は{% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}で、{% data variables.product.prodname_dependabot %}で使用されるボットアカウントです。
    - デフォルトでは、`dependencies` ラベルが付いています。

## {% data variables.product.prodname_dependabot %} Pull Requestのリベース戦略を変更する

デフォルトでは、{% data variables.product.prodname_dependabot %} は自動的にプルリクエストをリベースして競合を解決します。 マージの競合を手動で処理する場合は、`rebase-strategy` オプションを使用してこれを無効にできます。 詳細については「[dependabot.ymlファイルの設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)」を参照してください。

## {% data variables.product.prodname_dependabot %} Pull Requestをコメントコマンドで管理する

{% data variables.product.prodname_dependabot %} はコメント内の単純なコマンドに応答します。 それぞれのPull Requestには、"{% data variables.product.prodname_dependabot %} commands and options"セクションの下に、そのPull Requestを処理するのに使えるコマンド（たとえばPull Requestのマージ、squash、再オープン、クローズ、リベース）の詳細があります。 これらの自動生成されたプルリクエストをできるだけ簡単にトリアージできるようにすることが目的です。

{% data variables.product.prodname_dependabot %} Pull Requestでは、以下のいずれのコマンドを使うこともできます。

- `@dependabot cancel merge`は以前にリクエストされたマージをキャンセルします。
- `@dependabot close`は、Pull Requestをクローズし、{% data variables.product.prodname_dependabot %}がそのPull Requestを再生成しないようにします。 同じ結果は、Pull Requestを手動でクローズしても得られます。
- `@dependabot ignore this dependency`は、Pull Requestをクローズし、{% data variables.product.prodname_dependabot %}がこの依存関係からそれ以上Pull Requestを生成しないようにします（あなたがこのPull Requestを再オープンするか、依存関係を提案されたバージョンへアップグレードしないかぎり）。
- `@dependabot ignore this major version`はPull Requestをクローズし、{% data variables.product.prodname_dependabot %}がこのメジャーバージョンからそれ以上Pull Requestを生成しないようにします（あなたがこのPull Requestを再オープンするか、このメジャーバージョンへアップグレードしないかぎり）。
- `@dependabot ignore this minor version`はPull Requestをクローズし、{% data variables.product.prodname_dependabot %}がこのマイナーバージョンからそれ以上Pull Requestを生成しないようにします（あなたがこのPull Requestを再オープンするか、このマイナーバージョンへアップグレードしないかぎり）。
- `@dependabot merge`は、CIテストがパスしたらPull Requestをマージします。
- `@dependabot rebase`はPull Requestをリベースします。
- `@dependabot recreate`はPull Requestを再生成し、Pull Requestに対して行われた編集をすべて上書きします。
- `@dependabot reopen`は、Pull Requestがクローズされていればそれを再オープンします。
- `@dependabot squash and merge`はCIテストがパスしたら、Pull Requestをsquashしてマージします。

{% data variables.product.prodname_dependabot %}はコマンドを認識すると"thumbs up"の絵文字で反応し、Pull Requestのコメントで応答することがあります。 {% data variables.product.prodname_dependabot %}は通常すぐに反応しますが、コマンドによっては{% data variables.product.prodname_dependabot %}が他の更新やコマンドを処理するのに忙しい場合、完了に数分かかることがあります。

依存関係やバージョンを無視するコマンドを実行すると、{% data variables.product.prodname_dependabot %} はリポジトリの設定を一元的に保存します。 これは簡単な解決策ですが、複数のコントリビューターがいるリポジトリの場合は、設定ファイルで無視する依存関係とバージョンを明示的に定義することをお勧めします。 これにより、特定の依存関係が自動的に更新されない理由をすべてのコントリビューターが簡単に確認できます。 詳しい情報については「[dependabot.ymlファイルの設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)」を参照してください。
