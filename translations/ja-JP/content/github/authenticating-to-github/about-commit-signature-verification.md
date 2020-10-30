---
title: コミット署名の検証について
intro: 'GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} あるいは S/MIME{% endif %} を使って、タグやコミットにローカルで署名できます。 それらのタグやコミットは検証済みとして {% data variables.product.product_name %}上でマークされ、他の人々がその変更が信頼できるソースから来たものと信頼できるようになります。'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### コミット署名の検証について

コミットやタグをローカルで署名して、他の人々がその作業が信頼されるソースから来たことを検証できるようにすることができます。 コミットまたはタグが暗号的に検証可能な GPG または S/MIME 署名を持っている場合、{% data variables.product.product_name %} はそのコミットまたはタグを検証済みとしてマークします。

![検証されたコミット](/assets/images/help/commits/verified-commit.png)

コミットあるいはタグが検証できない署名を持っている場合、{% data variables.product.product_name %} はそのコミットあるいはタグを未検証としてマークします。

リポジトリ管理者は、ブランチでコミット署名を必須として、署名および検証されていないすべてのコミットをブロックできます。 詳しい情報については[必須のコミット署名について](/articles/about-required-commit-signing)を参照してください。

{% data variables.product.product_name %}上の署名されたコミットあるいはタグの検証ステータスをチェックして、コミットの署名が検証されない理由を見ることができます。 詳細は「[コミットおよびタグの署名の検証のステータスをチェックする](/articles/checking-your-commit-and-tag-signature-verification-status)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.product_name %}は GPG を自動的に使用して、{% data variables.product.product_name %} Web インターフェースを使用して行ったコミットに署名します。ただし、作者ではないプルリクエストを squash してマージする場合は除きます。 {% data variables.product.product_name %}によって署名されたコミットは、{% data variables.product.product_name %}で認証済みのステータスになります。 署名は、https://github.com/web-flow.gpgから利用できる公開鍵を使ってローカルに検証できます。{% endif %}

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
