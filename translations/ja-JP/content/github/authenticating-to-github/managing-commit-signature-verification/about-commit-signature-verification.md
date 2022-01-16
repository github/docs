---
title: コミット署名の検証について
intro: 'GPG または S/MIME を使用して、タグに署名し、ローカルでコミットできます。 これらのタグやコミットは {% data variables.product.product_name %} で検証済みとしてマークされているため、他のユーザはその変更が信頼できるソースからのものであると確信できます。'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### コミット署名の検証について

コミットとタグにローカルで署名して、行った変更の根拠を他のユーザに信頼してもらうことができます。 コミットまたはタグに暗号で検証可能な GPG または S/MIME 署名がある場合、GitHub はコミットまたはタグに{% if currentVersion == "free-pro-team@latest" %}「Verified」または「Partially verified」{% else %}「Verified」のマークを付けます。{% endif %}

![検証されたコミット](/assets/images/help/commits/verified-commit.png)

{% if currentVersion == "free-pro-team@latest" %}
コミットとタグには、警戒モードを有効にしているかどうかによって、次の検証ステータスが含まれます。 デフォルト設定では、警戒モードは有効になっていません。 警戒モードを有効にする方法については、「[すべてのコミットの検証ステータスを表示する](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)」を参照してください。

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

#### デフォルトのステータス

| 状況                     | 説明                            |
| ---------------------- | ----------------------------- |
| **検証済み**               | コミットが署名され、署名が正常に検証されました。      |
| **Unverified**         | コミットは署名されていますが、署名を検証できませんでした。 |
| No verification status | コミットが署名されていません。               |

#### 警戒モードが有効になっているステータス

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %}
コミットまたはタグに検証できない署名がある場合、{% data variables.product.product_name %} はコミットまたはタグを「未検証」としてマークします。
{% endif %}

リポジトリ管理者は、ブランチでコミット署名を必須として、署名および検証されていないすべてのコミットをブロックできます。 詳しい情報については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-signed-commits)」を参照してください。

{% data reusables.identity-and-permissions.verification-status-check %}

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %} は GPG を自動的に使用して、{% data variables.product.product_name %} Web インターフェースを使用して行ったコミットに署名します。ただし、作者ではないプルリクエストを squash してマージする場合は除きます。 {% data variables.product.product_name %}によって署名されたコミットは、{% data variables.product.product_name %}で認証済みのステータスになります。 署名は、https://github.com/web-flow.gpgから利用できる公開鍵を使ってローカルに検証できます。 The full fingerprint of the key is `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`. オプションとして、{% data variables.product.prodname_codespaces %} で行ったコミットを {% data variables.product.product_name %} で署名させることもできます。 Codespaces の GPG 検証を有効にする方法については、「[{% data variables.product.prodname_codespaces %} の GPG 検証の管理](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)」を参照してください。
{% endif %}

### GPG コミット署名の検証

自分で生成した GPG キーで、GPG を使ってコミットに署名できます。

{% data variables.product.product_name %}は、あなたがローカルで署名したコミットやタグがあなたの{% data variables.product.product_name %}アカウントに追加された公開鍵に対して暗号的に検証できることを、OpenPGPライブラリを使って確認します。

GPG を使ってコミットに署名し、それらのコミットを {% data variables.product.product_name %} 上で検証済みにするには、以下の手順に従ってください:

1. [既存の GPG キーがあるかチェックする](/articles/checking-for-existing-gpg-keys)
2. [新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)
3. [GitHub アカウントに新しい GPG キーを追加する](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)
5. [コミットに署名する](/articles/signing-commits)
6. [タグに署名する](/articles/signing-tags)

### S/MIME コミット署名の検証

S/MIME を使い、自分の Organization で発行した X.509 キーを用いてコミットに署名できます。

{% data variables.product.product_name %} は、ローカルに署名されたコミットやタグが信頼されたルート証明書の公開鍵に対して暗号的に検証可能であることを確認するために、Mozilla ブラウザが使うのと同じ信頼ストアである[Debian ca-certificatesパッケージ](https://packages.debian.org/hu/jessie/ca-certificates)を使います。

{% data reusables.gpg.smime-git-version %}

S/MIME を使ってコミットに署名し、それらのコミットを {% data variables.product.product_name %} 上で検証済みにするには、以下の手順に従ってください:

1. [Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)
2. [コミットに署名する](/articles/signing-commits)
3. [タグに署名する](/articles/signing-tags)

公開鍵を {% data variables.product.product_name %}にアップロードする必要はありません。

{% if currentVersion == "free-pro-team@latest" %}
### ボットの署名検証

コミットの署名が必要な Organization および {% data variables.product.prodname_github_app %} は、コミットの署名にボットを利用できます。 コミットまたはタグが暗号的に検証可能なボット署名を持っている場合、{% data variables.product.product_name %} はそのコミットまたはタグを検証済みとしてマークします。

ボットの署名検証は、要求が検証され {% data variables.product.prodname_github_app %} またはボットとして認証されており、カスタム作者情報、カスタムコミッター情報、およびコミットAPI などのカスタム署名情報が含まれていない場合にのみ機能します。
{% endif %}

### 参考リンク

- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
- 「[コミット署名検証のトラブルシューティング](/articles/troubleshooting-commit-signature-verification)」
