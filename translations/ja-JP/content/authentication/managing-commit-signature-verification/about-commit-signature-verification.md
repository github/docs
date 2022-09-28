---
title: コミット署名の検証について
intro: 'GPG{% ifversion ssh-commit-verification %}、SSH、{% endif %}または S/MIME を使用すると、タグに署名し、ローカルでコミットできます。 これらのタグやコミットは {% data variables.product.product_name %} で検証済みとしてマークされているため、他のユーザーはその変更が信頼できるソースからのものであると確信できます。'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: e54ecb30d3730be7da3e50721bd62e334bb53f75
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653275'
---
## コミット署名の検証について

コミットとタグにローカルで署名して、行った変更の根拠を他のユーザに信頼してもらうことができます。 コミットまたはタグに暗号で検証可能な GPG{% ifversion ssh-commit-verification %}、SSH、{% endif %}または S/MIME 署名がある場合、{% data variables.product.product_name %} はコミットまたはタグに {% ifversion fpt or ghec %}[検証済み] または [部分的に検証済み]{% else %}[検証済み]{% endif %} のマークを付けます。

![検証されたコミット](/assets/images/help/commits/verified-commit.png)

{% ifversion ghes or ghae %} コミットまたはタグに検証できない署名が含まれている場合、{% data variables.product.product_name %} ではそのコミットまたはタグを [未検証] としてマークします。
{% endif %}

{% ifversion ssh-commit-verification %} ほとんどの個々のユーザーにとって、署名コミットには GPG または SSH が最適です。 通常、S/MIME 署名は、大規模な組織のコンテキストで必要です。 SSH 署名は最も簡単に生成できます。 既存の認証キーを {% data variables.product.product_name %} にアップロードして、署名キーとして使用することもできます。 GPG 署名キーの生成は、SSH キーを生成するよりも複雑ですが、GPG には SSH にはない機能があります。 GPG キーは、使用されなくなったときに有効期限が切れるか、取り消すことができます。 {% data variables.product.product_name %} には、キーがセキュリティ侵害としてマークされていない限り、[検証済み] などのキーで署名されたコミットが表示されます。 SSH キーにはこの機能はありません。
{% endif %}

{% ifversion fpt or ghec %} コミットとタグには、警戒モードを有効にしているかどうかによって、次の検証ステータスが含まれます。 デフォルト設定では、警戒モードは有効になっていません。 警戒モードを有効にする方法については、「[すべてのコミットの検証ステータスを表示する](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)」を参照してください。

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

コミットへの署名は、コミットのサインオフとは異なります。 コミットのサインオフについて詳しくは、「[リポジトリのコミット サインオフ ポリシーの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)」を参照してください。

### デフォルトのステータス

| 状態         | 説明 |
| -------------- | ----------- |
| **Verified**   | コミットが署名され、署名が正常に検証されました。
| **Unverified** | コミットは署名されていますが、署名を検証できませんでした。
| No verification status | コミットが署名されていません。

### リベースとマージの署名の検証
{% data reusables.pull_requests.rebase_and_merge_verification %}

詳しくは、「[コミットのリベースとマージ](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)」をご覧ください。

### 警戒モードが有効になっているステータス

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% endif %}


リポジトリ管理者は、ブランチでコミット署名を必須として、署名および検証されていないすべてのコミットをブロックできます。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-signed-commits)」を参照してください。

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}サイト管理者が Web コミット署名を有効にしている場合、{% data variables.product.product_name %} は GPG を自動的に使用して、Web インターフェイスで行ったコミットに署名します。 {% data variables.product.product_name %} によって署名されたコミットは、確認済みの状態になります。 `https://HOSTNAME/web-flow.gpg` で入手可能な公開キーを使用して、署名をローカルで確認できます。 詳細については、「[Web コミット署名を構成する](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)」を参照してください。
{% else %}{% data variables.product.prodname_dotcom %} は GPG を自動的に使用して、Web インターフェイスで行ったコミットに署名します。 {% data variables.product.prodname_dotcom %} によって署名されたコミットは、確認済みの状態になります。 https://github.com/web-flow.gpg で入手可能な公開キーを使用して、署名をローカルで確認できます。 キーの完全な指紋は、`5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23` です。

オプションとして、{% data variables.product.prodname_github_codespaces %} で行ったコミットを {% data variables.product.prodname_dotcom %} GPG で署名させることもできます。 ご利用の codespace で GPG 検証を有効にする方法について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の GPG 検証を管理する](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)」をご覧ください。{% endif %} {% endif %}

## GPG コミット署名の検証

自分で生成した GPG キーで、GPG を使ってコミットに署名できます。

{% data variables.product.product_name %} では、OpenPGP ライブラリを使用することで、ローカルで署名されたコミットとタグが、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でアカウントに追加した公開鍵に対して暗号化で検証可能であることを確認します。

GPG を使ってコミットに署名し、それらのコミットを {% data variables.product.product_name %} 上で検証済みにするには、以下の手順に従ってください:

1. [既存の GPG キーがあるかチェックする](/articles/checking-for-existing-gpg-keys)
2. [新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)
3. [GitHub アカウントに GPG キーを追加する](/articles/adding-a-gpg-key-to-your-github-account)
4. [Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)
5. [コミットに署名する](/articles/signing-commits)
6. [タグに署名する](/articles/signing-tags)

{% ifversion ssh-commit-verification %}
## SSH コミット署名の検証

SSH を使用して、自分で生成した SSH 公開キーを使用してコミットに署名できます。 {% data variables.product.product_name %} で認証するために SSH キーを既に使用している場合は、署名キーとして使用するために同じキーをもう一度アップロードすることもできます。 アカウントに追加できる署名キーの数に制限はありません。

{% data variables.product.product_name %} では、オープンソース Ruby ライブラリの [ssh_data](https://github.com/github/ssh_data) を使用することで、ローカルで署名されたコミットとタグが、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でアカウントに追加した公開鍵に対して暗号化で検証可能であることを確認します。

{% data reusables.gpg.ssh-git-version %}

SSH を使ってコミットに署名し、それらのコミットを {% data variables.product.product_name %} 上で検証済みにするには、以下の手順に従ってください:

1. [既存の SSH キーを確認する](/articles/checking-for-existing-ssh-keys)
2. [新しい SSH キーを生成する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
3. [GitHub アカウントに SSH 署名キーを追加する](/articles/adding-a-new-ssh-key-to-your-github-account)
4. [Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)
5. [コミットに署名する](/articles/signing-commits)
6. [タグに署名する](/articles/signing-tags)

{% endif %}
## S/MIME コミット署名の検証

S/MIME を使い、自分の Organization で発行した X.509 キーを用いてコミットに署名できます。

{% data variables.product.product_name %} では、Mozilla ブラウザーで使用されているのと同じ信頼ストアである [Debian ca-certificates パッケージ](https://packages.debian.org/bullseye/ca-certificates)を使用して、ローカル署名されたコミットとタグが信頼されたルート証明書の公開キーに対して暗号化で検証可能であることを確認します。

{% data reusables.gpg.smime-git-version %}

S/MIME を使ってコミットに署名し、それらのコミットを {% data variables.product.product_name %} 上で検証済みにするには、以下の手順に従ってください:

1. [Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)
2. [コミットに署名する](/articles/signing-commits)
3. [タグに署名する](/articles/signing-tags)

公開鍵を {% data variables.product.product_name %}にアップロードする必要はありません。

{% ifversion fpt or ghec %}
## ボットの署名検証

コミットの署名が必要な Organization および {% data variables.product.prodname_github_apps %} は、コミットの署名にボットを利用できます。 コミットまたはタグが暗号的に検証可能なボット署名を持っている場合、{% data variables.product.product_name %} はそのコミットまたはタグを検証済みとしてマークします。

ボットの署名検証は、要求が検証され {% data variables.product.prodname_github_app %} またはボットとして認証されており、カスタム作者情報、カスタムコミッター情報、およびコミットAPI などのカスタム署名情報が含まれていない場合にのみ機能します。
{% endif %}

## 参考資料

- 「[コミットに署名する](/articles/signing-commits)」
- [タグに署名する](/articles/signing-tags)
- [コミット署名検証のトラブルシューティング](/articles/troubleshooting-commit-signature-verification)
