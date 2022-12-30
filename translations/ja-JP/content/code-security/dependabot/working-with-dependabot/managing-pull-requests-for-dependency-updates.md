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
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147112319'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} のPull Requestについて

{% data reusables.dependabot.pull-request-introduction %}

{% data variables.product.prodname_dependabot %} がPull Requestを発行すると、リポジトリに対して選択した方法で通知されます。 各Pull Requestには、パッケージマネージャーから取得した、提案された変更に関する詳細情報が含まれています。 これらのPull Requestは、リポジトリで定義されている通常のチェックとテストに従います。 {% ifversion fpt or ghec %}さらに、十分な情報が利用可能な場合は、互換性スコアが表示されます。 これは、変更をマージするかどうかを決める際にも役立ちます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。{% endif %}

管理する依存関係が多数ある場合は、各パッケージマネージャーの設定をカスタマイズして、プルリクエストに特定のレビュー担当者、アサインされた人、ラベルを付けることができます。 詳細については、「[依存関係の更新のカスタマイズ](/github/administering-a-repository/customizing-dependency-updates)」を参照してください。

## {% data variables.product.prodname_dependabot %} のPull Requestを表示する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. セキュリティまたはバージョン更新の pull requests は、簡単に特定できます。
    - 作成者は {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %} です。これは、{% data variables.product.prodname_dependabot %} によって使用されるボット アカウントです。
    - 既定では、`dependencies` ラベルが付けられています。

## {% data variables.product.prodname_dependabot %} Pull Requestのリベース戦略を変更する

デフォルトでは、{% data variables.product.prodname_dependabot %} は自動的にPull Requestをリベースして競合を解決します。 マージ競合を手動で処理する場合は、`rebase-strategy` オプションを使用してこれを無効にすることができます。 詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)」を参照してください。

## リベースと追加コミットに対するプッシュの適用を {% data variables.product.prodname_dependabot %} に許可する

既定では、追加コミットがプッシュされると {% data variables.product.prodname_dependabot %} によって pull request のリベースが停止されます。 そのブランチに追加されたコミットにプッシュを適用することを {% data variables.product.prodname_dependabot %} に許可するには、文字列 `[dependabot skip]`、`[skip dependabot]`、`[dependabot-skip]`、または `[skip-dependabot]` を小文字または大文字でコミット メッセージに追加します。

## {% data variables.product.prodname_dependabot %} Pull Requestをコメントコマンドで管理する

{% data variables.product.prodname_dependabot %} はコメント内の単純なコマンドに応答します。 それぞれのPull Requestには、"{% data variables.product.prodname_dependabot %} commands and options"セクションの下に、そのPull Requestを処理するのに使えるコマンド（たとえばPull Requestのマージ、squash、再オープン、クローズ、リベース）の詳細があります。 これらの自動生成されたPull Requestをできるだけ簡単にトリアージできるようにすることが目的です。

{% data variables.product.prodname_dependabot %} Pull Requestでは、以下のいずれのコマンドを使うこともできます。

- `@dependabot cancel merge` は、以前に要求されたマージを取り消します。
- `@dependabot close` は、pull request をクローズし、{% data variables.product.prodname_dependabot %} がその pull request を再生成しないようにします。 同じ結果は、Pull Requestを手動でクローズしても得られます。
- `@dependabot ignore this dependency` は、pull request をクローズし、{% data variables.product.prodname_dependabot %} がこの依存関係に対してそれ以上 pull request を生成しないようにします (pull request を再オープンするか、提案されたバージョンの依存関係にアップグレードしないかぎり)。
- `@dependabot ignore this major version` は、pull request をクローズし、{% data variables.product.prodname_dependabot %} がこのメジャー バージョンに対してそれ以上 pull request を生成しないようにします (pull request を再オープンするか、このメジャー バージョンにアップグレードしないかぎり)。
- `@dependabot ignore this minor version` は、pull request をクローズし、{% data variables.product.prodname_dependabot %} がこのマイナー バージョンに対してそれ以上 pull request を生成しないようにします (pull request を再オープンするか、このマイナー バージョンにアップグレードしないかぎり)。
- `@dependabot merge` は、CI テストに合格すると pull request をマージします。
- `@dependabot rebase` は、pull request をリベースします。
- `@dependabot recreate` は pull request を再作成し、pull request に対して行われたすべての編集を上書きします。
- `@dependabot reopen` は、pull request がクローズされた場合に pull request を再オープンします。
- `@dependabot squash and merge` は、CI テストに合格すると pull request をスカッシュしてマージします。

{% data variables.product.prodname_dependabot %}はコマンドを認識すると"thumbs up"の絵文字で反応し、Pull Requestのコメントで応答することがあります。 {% data variables.product.prodname_dependabot %}は通常すぐに反応しますが、コマンドによっては{% data variables.product.prodname_dependabot %}が他の更新やコマンドを処理するのに忙しい場合、完了に数分かかることがあります。

依存関係やバージョンを無視するコマンドを実行すると、{% data variables.product.prodname_dependabot %} はリポジトリの設定を一元的に保存します。 これは簡単な解決策ですが、複数のコントリビューターがいるリポジトリの場合は、設定ファイルで無視する依存関係とバージョンを明示的に定義することをお勧めします。 これにより、特定の依存関係が自動的に更新されない理由をすべてのコントリビューターが簡単に確認できます。 詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)」を参照してください。
