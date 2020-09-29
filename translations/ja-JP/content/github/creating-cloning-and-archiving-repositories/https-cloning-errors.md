---
title: HTTPS クローニングエラー
intro: Git で HTTPS を使用する際によく生じるエラーがいくつかあります。 これらのエラーは通常、古いバージョンの Git を使用しているか、もしくはリポジトリへのアクセス権を持っていないことが原因です。
redirect_from:
  - /articles/error-the-requested-url-returned-error-403/
  - /articles/error-the-requested-url-returned-error-401/
  - /articles/error-did-you-run-git-update-server-info-on-the-server/
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs/
  - /articles/https-cloning-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

HTTPS エラーの例を次に示します:

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### 使用している Git のバージョンを確認する

{% data variables.product.product_name %} を使用するために最低限必要な Git のバージョンはありませんが、安定度の高いバージョン 1.7.10 を推奨しています。バージョン 1.7.10 は多くのプラットフォームで利用可能です。 いつでも [Git の Web サイトで最新バージョンをダウンロードできます](https://git-scm.com/downloads)。

### リモートが正しいことを確かめる

フェッチするリポジトリが {% data variables.product.product_location %} に存在する必要があります。また、URL では大文字と小文字が区別されます。

コマンドラインを開き、`git remot -v` と入力して、ローカルリポジトリの URL を見つけることができます。

```shell
$ git remote -v
# 既存のリモートを表示する
> origin  https://github.com/github/reactivecocoa.git (fetch)
> origin  https://github.com/github/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/github/ReactiveCocoa.git
# 'origin' リモートの URL を変更する

$ git remote -v
# 新規 URL を検証する
> origin  https://github.com/github/ReactiveCocoa.git (fetch)
> origin  https://github.com/github/ReactiveCocoa.git (push)
```

もしくは、[{% data variables.product.prodname_desktop %}](https://desktop.github.com/) アプリケーションから URL を変更できます。

### アクセストークンを入力する

{% data variables.product.prodname_dotcom %} にアクセスするには、パスワードではなく個人アクセストークンで認証する必要があります。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

{% data reusables.command_line.provide-an-access-token %}

### 自分の権限を確認する

ユーザ名およびパスワードを求められた場合は、該当のリポジトリにアクセスできるアカウントを使用してください。

{% tip %}

**ヒント**: リモートリポジトリを操作するときの毎回の認証情報の入力を省くには、[認証情報のキャッシュ](/github/using-git/caching-your-github-credentials-in-git)をオンにします。

{% endtip %}

### 代わりに SSH を使用する

すでに SSH キーをセットアップしている場合は、HTTPS の代わりに SSH クローン URL を使用できます。  詳細は「[どのリモート URL を使うべきか?](/articles/which-remote-url-should-i-use)」を参照してください。
