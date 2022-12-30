---
title: リモートリポジトリについて
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'GitHub の開発における共同作業は、ユーザーがローカル リポジトリから {% data variables.product.product_name %} にコミットを発行し、他のユーザーがそれらを表示し、フェッチし、更新するというアプローチで進められます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130891'
---
## リモートリポジトリについて

リモート URL は、「コードがここに保存されています」ということを表現する Git のしゃれた方法です。 その URL は、GitHub 上のご自身のリポジトリや、他のユーザーのフォーク、またはまったく異なるサーバーだったりします。

プッシュできるのは、2 種類の URL アドレスに対してのみです。

* HTTPS URL (例: `https://{% data variables.command_line.backticks %}/user/repo.git`)
* SSH URL (例: `git@{% data variables.command_line.backticks %}:user/repo.git`)

Git ではリモート URL に名前が関連付けられます。デフォルトのリモートは通常 `origin` と呼ばれます。

## リモート リポジトリを作成する

`git remote add` コマンドを使用して、リモート URL と名前を一致させることができます。
たとえば、コマンドラインに以下のように入力できます:

```shell
git remote add origin &lt;REMOTE_URL>
```

これにより、名前 `origin` が `REMOTE_URL` に関連付けられます。

`git remote set-url` コマンドを使用して、[リモート URL を変更](/get-started/getting-started-with-git/managing-remote-repositories)できます。

## リモート リポジトリの URL を選択する

{% data variables.location.product_location %} で使用できるリポジトリを複製する方法は複数あります。

アカウントにサインインしているときにリポジトリを表示すると、プロジェクトを自分のコンピュータに複製するために使用できる URL がリポジトリの詳細の下に表示されます。

リモート URL の設定または変更については、「[リモート リポジトリを管理する](/get-started/getting-started-with-git/managing-remote-repositories)」を参照してください。

## HTTPS URL を使ってクローンを作成する

`https://` クローン URL は、可視性に関係なく、すべてのリポジトリで使用できます。 `https://` クローン URL は、ファイアウォールまたはプロキシの内側にいる場合でも機能します。

コマンド ラインで HTTPS URL を使用してリモート リポジトリに `git clone`、`git fetch`、`git pull`、`git push` を実行した場合、Git では {% data variables.product.product_name %} のユーザー名とパスワードが要求されます。 {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**ヒント**:
- 認証情報ヘルパーを使用すれば、{% data variables.product.prodname_dotcom %} と通信するたびに、{% data variables.product.prodname_dotcom %} の認証情報が Git で記憶されます。 詳細については、「[Git に {% data variables.product.prodname_dotcom %} の資格情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。
- コマンドラインで {% data variables.product.product_name %} の認証なしでリポジトリを複製するために、クローンの代わりに、{% data variables.product.prodname_desktop %} を使用することができます。 詳細については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_dotcom %} Desktop にリポジトリをクローンする](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)」を参照してください。

{% endtip %}

 {% ifversion fpt or ghec %}SSH を使用したくてもポート 22 で接続できない場合は、HTTPS ポートを介する SSH を使用できる場合があります。 詳細については、「[HTTPS ポートを介して SSH を使用する](/github/authenticating-to-github/using-ssh-over-the-https-port)」を参照してください。{% endif %}

## SSH URL を使ってクローンする

SSH URL は、SSH (安全なプロトコル) を介した Git リポジトリへのアクセスを提供します。 これらの URL を使用するには、コンピューターに SSH キーの組を生成し、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} のアカウントに **公開** キーを追加する必要があります。 詳細については、「[SSH を使用して {% data variables.product.prodname_dotcom %} に接続する](/github/authenticating-to-github/connecting-to-github-with-ssh)」を参照してください。

SSH URL を使用してリモート リポジトリに `git clone`、`git fetch`、`git pull`、`git push` を実行した場合、パスワードの入力を求めるダイアログが表示され、SSH キーのパスフレーズを指定する必要があります。 詳細については、「[SSH キーのパスフレーズを使う](/github/authenticating-to-github/working-with-ssh-key-passphrases)」を参照してください。

{% ifversion fpt or ghec %}SAML シングル サインオン (SSO) を使用する組織にアクセスしている場合は、認証を受ける前に、組織にアクセスするための SSH キーを認可する必要があります。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[SAML シングル サインオンによる認証について](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」および「[SAML シングル サインオンで利用するために SSH キーを認可する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}」を参照してください。{% else %}."{% endif %}{% endif %}

{% tip %}

**ヒント**: SSH URL は、お使いのコンピューターにリポジトリを複製する際にも、または実稼働サーバーにコードをデプロイする安全な方法としても使用できます。 デプロイスクリプトで SSH エージェント転送を使用して、サーバー上のキーの管理を回避することもできます。 詳細については、「[SSH エージェント転送の使用](/developers/overview/using-ssh-agent-forwarding)」を参照してください。

{% endtip %}

## {% data variables.product.prodname_cli %} を使ってクローンを作成する

{% data variables.product.prodname_cli %} をインストールして、ターミナルで {% data variables.product.product_name %} ワークフローを使用することもできます。 詳細については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

{% ifversion not ghae %}
## Subversion を使って複製する

[Subversion](https://subversion.apache.org/) クライアントを使用して、{% data variables.product.prodname_dotcom %} 上の任意のリポジトリにアクセスすることもできます。 Subversion と Git では、提供する機能群に違いがあります。 詳細については、「[Subversion と Git の違い](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)」を参照してください。

Subversion クライアントから {% data variables.product.prodname_dotcom %} のリポジトリにアクセスすることもできます。 詳細については、「[Subversion クライアントのサポート](/github/importing-your-projects-to-github/support-for-subversion-clients)」を参照してください。
{% endif %}
