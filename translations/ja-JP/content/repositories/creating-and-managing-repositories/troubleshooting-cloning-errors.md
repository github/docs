---
title: クローンエラーのトラブルシューティング
intro: リポジトリのクローン作成に問題がある場合は、次の一般的なエラーを確認します。
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 60a5ff0350fed34841099c18f495b185b75f9832
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147093143'
---
## HTTPS クローニングエラー

Git で HTTPS を使用する際によく生じるエラーがいくつかあります。 これらのエラーは通常、古いバージョンの Git を使用しているか、もしくはリポジトリへのアクセス権を持っていないことが原因です。

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

コマンド ラインを開き、「`git remote -v`」と入力して、ローカル リポジトリの URL を見つけることができます。

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

または、[{% data variables.product.prodname_desktop %}](https://desktop.github.com/) アプリケーションを使って URL を変更できます。

### アクセストークンを入力する

{% data variables.product.prodname_dotcom %} にアクセスするには、パスワードではなく個人アクセストークンで認証する必要があります。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)に関する記事を参照してください。

{% data reusables.command_line.provide-an-access-token %}

### 権限を確認します

ユーザ名およびパスワードを求められた場合は、該当のリポジトリにアクセスできるアカウントを使用してください。

{% tip %}

**ヒント**: リモート リポジトリを操作するたびに資格情報を入力したくない場合は、[資格情報のキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git)を有効にできます。 すでに認証情報のキャッシュを使用している場合は、コンピューターに正しい認証情報がキャッシュされていることを確認してください。 認証情報が正しくない、または古い場合、認証に失敗します。

{% endtip %}

### 代わりに SSH を使用する

すでに SSH キーをセットアップしている場合は、HTTPS の代わりに SSH クローン URL を使用できます。  詳しくは、「[リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)」をご覧ください。

## Error: Repository not found

{% ifversion fpt or ghae or ghec %}リポジトリのクローン作成時にこのエラーが表示される場合は、リポジトリが存在しないか、リポジトリにアクセスする権限がないことを示します。{% else %}リポジトリのクローン作成時にこのエラーが表示される場合は、リポジトリが存在しないか、リポジトリにアクセスする権限がないか、{% data variables.product.product_location %} がプライベート モードになっていることを示します。{% endif %}原因に応じて、このエラーに対するいくつかの解決策があります。

### 綴りをチェックしてください

入力ミスは起こるものです。また、リポジトリ名は大文字と小文字を区別します。  `git@{% data variables.command_line.codeblock %}:user/repo.git` をクローンしようとして、リポジトリの実際の名前が `User/Repo` である場合、このエラーが表示されます。

このエラーを回避するには、クローン時は常にリポジトリのページからクローン URL をコピーして貼り付けるようにします。 詳細については、「[リポジトリをクローンする](/articles/cloning-a-repository)」を参照してください。

既存のリポジトリでリモートを更新するには、「[リモート リポジトリを管理する](/github/getting-started-with-github/managing-remote-repositories)」をご覧ください。

### 権限をチェックする

プライベートリポジトリをクローンしようとしているが、リポジトリの表示権限がない場合、このエラーが表示されます。

以下のいずれかによってリポジトリへのアクセス権があることを確認してください:

* リポジトリのオーナー
* リポジトリ上の[コラボレーター](/articles/inviting-collaborators-to-a-personal-repository)
* リポジトリへのアクセス権がある[チームのメンバー](/articles/adding-organization-members-to-a-team) (リポジトリが Organization に属している場合)

### SSH アクセスをチェックする

ごくまれに、リポジトリへの正しい SSH アクセス権がない場合があります。

使用している SSH キーが {% data variables.product.product_name %} の個人アカウントにアタッチされていることを確認する必要があります。 以下をコマンド ラインに入力することで、これをチェックできます。

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %}リポジトリが Organization に属し、OAuth App によって生成された SSH キーを使用している場合、OAuth App へのアクセスは Organization のオーナーによって制限されている可能性があります。 詳しくは、「[OAuth アプリケーションのアクセス制限について](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)」をご覧ください。
{% endif %}

詳しくは、「[GitHub アカウントへの新しい SSH キーの追加](/articles/adding-a-new-ssh-key-to-your-github-account)」をご覧ください。

{% ifversion ghes %}
### インスタンスがプライベートモードであるかを確認する

サイト管理者が GitHub Enterprise インスタンスでプライベート モードを有効にしている場合、`git://` による匿名のクローンは無効になります。 リポジトリをクローンできない場合は、サイト管理者にお問い合わせください。
{% endif %}

### リポジトリが実際に存在することを確認する

すべて失敗した場合は、リポジトリが {% data variables.product.product_location %} に実際に存在していることを確認してください。
存在しないリポジトリにプッシュを試みると、このエラーが表示されます。

## Error: Remote HEAD refers to nonexistent ref, unable to checkout

このエラーは、リポジトリのデフォルトブランチが {% data variables.product.product_location %}で削除された場合に発生します。

このエラーの検出方法は簡単です。リポジトリのクローンを試みると Git により警告されます:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

このエラーを解決するには、{% data variables.product.product_location %} リポジトリの管理者になる必要があります。
リポジトリの[既定のブランチを変更する](/github/administering-a-repository/changing-the-default-branch)必要があります。

その後、コマンドラインで使用可能なブランチすべてのリストを取得できます:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

その後、新しいブランチにスイッチするだけです:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
