---
title: 'Error: Repository not found'
intro: '{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}If you see this error when cloning a repository, it means that the repository does not exist or you do not have permission to access it.{% else %}If you see this error when cloning a repository, it means that the repository does not exist, you do not have permission to access it, or {% data variables.product.product_location %} is in private mode.{% endif %} There are a few solutions to this error, depending on the cause.'
redirect_from:
  - /articles/error-repository-not-found
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### スペルを確認する

入力ミスは起こるものです。また、リポジトリ名は大文字と小文字を区別します。  `git@{% data variables.command_line.codeblock %}:user/repo.git` をクローンしようとしたが、リポジトリの実際の名前は `User/Repo` である場合、このエラーが表示されます。

このエラーを回避するには、クローン時は常にリポジトリのページからクローン URL をコピーして貼り付けるようにします。 詳しい情報については[リポジトリのクローン](/articles/cloning-a-repository)を参照してください。

既存のリポジトリのリモートを更新するには、「[リモートの URL を変更する](/articles/changing-a-remote-s-url)」を参照してください。

### 権限をチェックする

プライベートリポジトリをクローンしようとしているが、リポジトリの表示権限がない場合、このエラーが表示されます。

以下のいずれかによってリポジトリへのアクセス権があることを確認してください:

* リポジトリのオーナー
* リポジトリ上の[コラボレーター](/articles/inviting-collaborators-to-a-personal-repository)
* リポジトリへのアクセス権がある[チームのメンバー](/articles/adding-organization-members-to-a-team) (リポジトリが Organization に属している場合)

### SSH アクセスをチェックする

ごくまれに、リポジトリへの正しい SSH アクセス権がない場合があります。

使用している SSH キーが {% data variables.product.product_name %} ユーザアカウントに添付されていることを確認する必要があります。 以下をコマンドラインに入力してこれをチェックできます:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

リポジトリが Organization に属し、OAuth App によって生成された SSH キーを使用している場合、OAuth App へのアクセスは Organization のオーナーによって制限されている可能性があります。 詳しい情報については、「<a href="/github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions" class="dotcom-only">OAuth App のアクセス制限について</a>」を参照してください。

詳細は「[GitHub アカウントに新しい GPG キーを追加する](/articles/adding-a-new-gpg-key-to-your-github-account)」を参照してください。

{% if enterpriseServerVersions contains currentVersion %}
### インスタンスがプライベートモードであるかを確認する

サイト管理者が GitHub Enterprise インスタンスでプライベートモードを有効にしている場合は、`git://` を介した匿名のクローンは無効化されます。 リポジトリをクローンできない場合は、サイト管理者にお問い合わせください。
{% endif %}

### リポジトリが実際に存在することを確認する

すべて失敗した場合は、リポジトリが {% data variables.product.product_location %} に実際に存在していることを確認してください。 存在しないリポジトリにプッシュを試みると、このエラーが表示されます。
