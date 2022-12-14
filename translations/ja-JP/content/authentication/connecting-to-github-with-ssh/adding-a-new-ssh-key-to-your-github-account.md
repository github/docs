---
title: GitHub アカウントへの新しい SSH キーの追加
intro: '{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} で新しい (または既存の) SSH キーを使用するようにアカウントを構成するには、アカウントにキーを追加する必要もあります。'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: 041d72c2cf48d6d5b8ce0e6b609b0982b54f2e97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653307'
---
## アカウントへの SSH キーの追加について

{% data reusables.ssh.about-ssh %}詳しくは、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」をご覧ください。

{% ifversion ssh-commit-verification %}SSH を使ってコミットとタグに署名することもできます。 コミットの署名について詳しくは、「[コミット署名の検証について](/articles/about-commit-signature-verification)」をご覧ください。{% endif %}

SSH キーの組を生成した後、公開キーを{% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} に追加して、アカウントの SSH アクセスを有効にする必要があります。

## 前提条件

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} の新しいアカウントに SSH キーを追加する前に、以下のステップを完了します。

1. 既存の SSH キーを確認する。 詳しくは、「[既存の SSH キーの確認](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)」をご覧ください。
1. 新しい SSH キーを生成し、マシンの SSH エージェントに追加する。 詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

## アカウントへの新しい SSH キーの追加

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でアカウントに新しい SSH 認証キーを追加した後、SSH を使うようにローカル リポジトリを再構成できます。 詳細については、「[リモート URL の HTTPS から SSH への切り替え](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)」を参照してください。

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. **[New SSH key]\(新しい SSH キー\)** または **[Add SSH key]\(SSH キーの追加\)** をクリックします。
{% ifversion ssh-commit-verification %} ![SSH キー ボタン](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png) {% else %} ![SSH キー ボタン](/assets/images/help/settings/ssh-add-ssh-key.png) {% endif %}
5. [Title] フィールドで、新しいキーを説明するラベルを追加します。 たとえば、個人のラップトップを使っている場合、このキーに「個人用ラップトップ」といった名前を付けます。
{% ifversion ssh-commit-verification %}
6. キーの種類として、認証または署名のいずれかを選びます。 コミットの署名について詳しくは、「[コミット署名の検証について](/articles/about-commit-signature-verification)」をご覧ください。
{% endif %}
7. キーを [Key] フィールドに貼り付けます。
{% ifversion ssh-commit-verification %} ![キー フィールド](/assets/images/help/settings/ssh-key-paste-with-type.png) {% else %} ![キー フィールド](/assets/images/help/settings/ssh-key-paste.png) {% endif %}
8. **[Add SSH key]\(SSH キーの追加\)** をクリックします。
  ![キーの追加のボタン](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} を使用してアカウントに SSH キーを追加する前に、{% data variables.product.prodname_cli %} に対して認証を行う必要があります。 詳細については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh auth login`](https://cli.github.com/manual/gh_auth_login)」を参照してください。

{% ifversion ssh-commit-verification %}現在、{% data variables.product.prodname_cli %} を使って追加できるのは SSH 認証キーだけであり、SSH 署名キーを追加することはできません。{% endif %}

GitHub アカウントに SSH 認証キーを追加するには、`ssh-key add` サブコマンドを使って、公開キーを指定します。

```shell
gh ssh-key add <em>key-file</em>
```

新しいキーのタイトルを含めるには、`-t` または `--title` フラグを使用します。

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

[新しい SSH キーの生成](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)に関するページの手順に従って SSH キーを生成した場合は、このコマンドを使用してアカウントにキーを追加できます。

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## 参考資料

- 「[SAMLシングル サインオンで利用するために SSH キーを認可する](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」 {% endif %}
