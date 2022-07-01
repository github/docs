---
title: クローンエラーのトラブルシューティング
intro: 'If you''re having trouble cloning a repository, check these common errors.'
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

コマンドラインを開き、`git remote -v` と入力して、ローカルリポジトリの URL を見つけることができます。

```shell
$ git remote -v
# 既存のリモートを表示する
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# 'origin' リモートの URL を変更する

$ git remote -v
# 新規 URL を検証する
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

もしくは、[{% data variables.product.prodname_desktop %}](https://desktop.github.com/) アプリケーションから URL を変更できます。

### アクセストークンを入力する

{% data variables.product.prodname_dotcom %} にアクセスするには、パスワードではなく個人アクセストークンで認証する必要があります。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

{% data reusables.command_line.provide-an-access-token %}

### 自分の権限を確認する

ユーザ名およびパスワードを求められた場合は、該当のリポジトリにアクセスできるアカウントを使用してください。

{% tip %}

**ヒント**: リモートリポジトリを操作するときの毎回の認証情報の入力を省くには、[認証情報のキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git)をオンにします。 すでに認証情報のキャッシュを使用している場合は、コンピューターに正しい認証情報がキャッシュされていることを確認してください。 認証情報が正しくない、または古い場合、認証に失敗します。

{% endtip %}

### 代わりに SSH を使用する

すでに SSH キーをセットアップしている場合は、HTTPS の代わりに SSH クローン URL を使用できます。  For more information, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

## Error: Repository not found

{% ifversion fpt or ghae or ghec %}リポジトリのクローン作成時にこのエラーが表示される場合は、リポジトリが存在しないか、リポジトリにアクセスする権限がないことを示しています。{% else %}リポジトリのクローン作成時にこのエラーが表示される場合は、リポジトリが存在しないか、リポジトリにアクセスする権限がないか、{% data variables.product.product_location %} がプライベートモードになっていることを示しています。{% endif %} 原因に応じて、このエラーに対するいくつかの解決策があります。

### スペルを確認する

入力ミスは起こるものです。また、リポジトリ名は大文字と小文字を区別します。  `git@{% data variables.command_line.codeblock %}:user/repo.git` をクローンしようとしたが、リポジトリの実際の名前は `User/Repo` である場合、このエラーが表示されます。

このエラーを回避するには、クローン時は常にリポジトリのページからクローン URL をコピーして貼り付けるようにします。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。

To update the remote on an existing repository, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)".

### 権限をチェックする

プライベートリポジトリをクローンしようとしているが、リポジトリの表示権限がない場合、このエラーが表示されます。

以下のいずれかによってリポジトリへのアクセス権があることを確認してください:

* リポジトリのオーナー
* リポジトリ上の[コラボレーター](/articles/inviting-collaborators-to-a-personal-repository)
* リポジトリへのアクセス権がある[チームのメンバー](/articles/adding-organization-members-to-a-team) (リポジトリが Organization に属している場合)

### SSH アクセスをチェックする

ごくまれに、リポジトリへの正しい SSH アクセス権がない場合があります。

You should ensure that the SSH key you are using is attached to your personal account on {% data variables.product.product_name %}. 以下をコマンドラインに入力してこれをチェックできます:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %}
リポジトリが Organization に属し、OAuth App によって生成された SSH キーを使用している場合、OAuth App へのアクセスは Organization のオーナーによって制限されている可能性があります。 詳しい情報については、「[OAuth App のアクセス制限について](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)」を参照してください。
{% endif %}

For more information, see [Adding a new SSH key to your GitHub account](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### インスタンスがプライベートモードであるかを確認する

サイト管理者が GitHub Enterprise インスタンスでプライベートモードを有効にしている場合は、`git://` を介した匿名のクローンは無効化されます。 リポジトリをクローンできない場合は、サイト管理者にお問い合わせください。
{% endif %}

### リポジトリが実際に存在することを確認する

すべて失敗した場合は、リポジトリが {% data variables.product.product_location %} に実際に存在していることを確認してください。 存在しないリポジトリにプッシュを試みると、このエラーが表示されます。

## Error: Remote HEAD refers to nonexistent ref, unable to checkout

このエラーは、リポジトリのデフォルトブランチが {% data variables.product.product_location %}で削除された場合に発生します。

このエラーの検出方法は簡単です。リポジトリのクローンを試みると Git により警告されます:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# リポジトリをクローン
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

このエラーを解決するには、{% data variables.product.product_location %} リポジトリの管理者になる必要があります。 リポジトリの[デフォルトブランチの変更](/github/administering-a-repository/changing-the-default-branch)が必要となります。

その後、コマンドラインで使用可能なブランチすべてのリストを取得できます:

```shell
$ git branch -a
# すべてのブランチをリスト
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

その後、新しいブランチにスイッチするだけです:

```shell
$ git checkout new-main
# 追跡ブランチを作成してチェックアウト
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
