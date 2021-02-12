---
title: リポジトリの名前を変更する
intro: Organization のオーナーであるかリポジトリの管理者権限があれば、リポジトリの名前を変更することができます。
redirect_from:
  - /articles/renaming-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

リポジトリの名前を変更すると、プロジェクトサイトの URL を除くすべての既存の情報は、下記を含む新しい名前に自動的にリダイレクトされます。

* 問題
* Wiki
* Star
* フォロワー

プロジェクトサイトに関する詳しい情報については「[{% data variables.product.prodname_pages %}について](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

Web トラフィックのリダイレクトに加え、前の場所をターゲットにしたすべての `git clone`、`git fetch`、または `git push` 操作は、引き続き新しい場所に対して行われているように機能します。 ただし、混乱を低減するため、既存のローカルクローンが新しいリポジトリ URL を指すよう更新することを強く推奨します。 これを行うには、コマンドラインで  `git remote` を使用します。

```shell
$ git remote set-url origin <em>新しい URL</em>
```

詳しい情報については、「[リモートの URL を変更する](/github/using-git/changing-a-remotes-url)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

{% data variables.product.prodname_pages %}サイトを持つリポジトリの名前を変更する場合は、サイトにカスタムドメインを使用することをお勧めします。 これにより、リポジトリの名前を変更してもサイトの URL は影響を受けません。 詳細は「[カスタムドメインおよび{% data variables.product.prodname_pages %}サイトについて](/github/working-with-github-pages/about-custom-domains-and-github-pages)」を参照してください。

{% endif %}

{% tip %}

**ヒント:** {% data reusables.organizations.owners-and-admins-can %}リポジトリの名前を変更できます。 {% data reusables.organizations.new-repo-permissions-more-info %}

{% endtip %}

{% warning %}

**警告**: 将来的にアカウントで新しいリポジトリを作成する場合、名前変更したリポジトリの元の名前を再利用しないでください。 再利用した場合、名前変更したリポジトリへのリダイレクトが切断されます。

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [**Repository Name**] の下で、リポジトリの新しい名前を入力します。 ![リポジトリの名前の変更](/assets/images/help/repository/repository-name-change.png)
4. [**Rename**] をクリックします。 これで完了です。
