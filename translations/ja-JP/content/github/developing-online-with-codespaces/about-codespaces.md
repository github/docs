---
title: codespace について
intro: '{% data variables.product.prodname_codespaces %} は、{% data variables.product.prodname_dotcom %} がホストし、{% data variables.product.prodname_vscode %} が提供するオンライン開発環境で、完全にクラウド上で開発を行うことができます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
versions:
  free-pro-team: '*'
---

{% note %}

**注釈:** {% data variables.product.prodname_codespaces %} は現在限定パブリックベータであり、変更されることがあります。 ベータ期間中、{% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_codespaces %}の可用性について保証しません。 ベータへの参加についての詳細は、「[ベータへの参加](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)」を参照してください。

{% endnote %}

### {% data variables.product.prodname_codespaces %} について

{% data variables.product.prodname_codespaces %} は、ブラウザで利用できるクラウド開発環境です。 codespace には、構文の強調表示とオートコンプリートを備えたテキストエディタ、ターミナル、デバッグツール、Git コマンドなど、特定のリポジトリ向けに開発する必要があるすべてのものが {% data variables.product.prodname_dotcom %} 内に含まれています。 codespace に {% data variables.product.prodname_vscode %} 拡張機能をインストールして、機能を追加することもできます。

{% data variables.product.prodname_codespaces %} を使用すると、開発者は簡単に新しい会社へ参加したり、オープンソースプロジェクトへ貢献したりすることができます。 プロジェクトメンテナはリポジトリを設定できるため、リポジトリの codespace を作成すると、プロジェクトの依存関係が自動的に含まれます。 環境設定に費やす時間を削減することで、コーディングをより素早く開始できます。

{% data variables.product.prodname_codespaces %} では、ローカルではなくクラウドで開発できます。 開発者は、タブレットや Chromebook など、あらゆるマシンでどこからでも貢献でき、知的財産のローカルコピーを保持する必要はありません。

![codespace（オープン）](/assets/images/help/codespaces/codespace-overview.png)

### {% data variables.product.prodname_codespaces %}を使用する

各開発者は、任意のパブリックリポジトリ、またはユーザアカウントが所有する任意のプライベートリポジトリに対して 1 つ以上の codespace を作成できます。 {% data reusables.codespaces.unsupported-repos %} {% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %}詳しい情報については、「[codespace を削除する](/github/developing-online-with-codespaces/deleting-a-codespace)」を参照してください。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.about-configuration %}詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)」を参照してください。

{% data reusables.codespaces.about-personalization %} 詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)」を参照してください。

You can configure settings to add encrypted secrets, enable GPG verification, and allow codespaces to access other repositories. For more information, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)", and "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.beta-functionality-limited %}

### {% data variables.product.prodname_codespaces %}の支払いについて

{% data reusables.codespaces.about-billing-for-codespaces %} 詳細は「[{% data variables.product.prodname_codespaces %} の支払いについて](/github/developing-online-with-codespaces/about-billing-for-codespaces)」を参照してください。

### ベータに参加する

限られたユーザのみがベータ参加のために招待されます。 待ちリストに参加するには、「[Codespaces ベータのサインアップ](https://github.com/features/codespaces/signup)」を参照してください。

### {% data variables.product.prodname_codespaces %} について問い合わせる

{% data variables.product.prodname_codespaces %} の使用時に問題が発生した場合は、「[codespace のトラブルシューティング](/github/developing-online-with-codespaces/troubleshooting-your-codespace)」を参照してください。

さらにサポートをご希望の場合、または {% data variables.product.prodname_codespaces %} に関するフィードバックがある場合は、[コミュニティフォーラム](https://github.community/c/codespaces-beta/45)をご使用ください。
