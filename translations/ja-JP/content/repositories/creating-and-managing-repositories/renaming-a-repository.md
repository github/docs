---
title: リポジトリの名前を変更する
intro: Organization のオーナーであるかリポジトリの管理者権限があれば、リポジトリの名前を変更することができます。
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

リポジトリの名前を変更すると、プロジェクトサイトの URL を除くすべての既存の情報は、下記を含む新しい名前に自動的にリダイレクトされます。

* Issue
* Wiki
* Star
* フォロワー

プロジェクトサイトに関する詳しい情報については「[{% data variables.product.prodname_pages %}について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

Web トラフィックのリダイレクトに加え、前の場所をターゲットにしたすべての `git clone`、`git fetch`、または `git push` 操作は、引き続き新しい場所に対して行われているように機能します。 ただし、混乱を低減するため、既存のローカルクローンが新しいリポジトリ URL を指すよう更新することを強く推奨します。 これを行うには、コマンドラインで  `git remote` を使用します。

```shell
$ git remote set-url origin <em>新しい URL</em>
```

詳しい情報については「[リモートリポジトリの管理](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

{% ifversion fpt or ghec %}

{% data variables.product.prodname_pages %}サイトを持つリポジトリの名前を変更する場合は、サイトにカスタムドメインを使用することをお勧めします。 これにより、リポジトリの名前を変更してもサイトの URL は影響を受けません。 詳細は「[カスタムドメインおよび{% data variables.product.prodname_pages %}サイトについて](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)」を参照してください。

{% endif %}

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} will not redirect calls to an action hosted by a renamed repository. Any workflow that uses that action will fail with the error `repository not found`. Instead, create a new repository and action with the new name and archive the old repository. For more information, see "[Archiving repositories](/repositories/archiving-a-github-repository/archiving-repositories)."

{% endnote %}

{% warning %}

**警告**: 将来的にアカウントで新しいリポジトリを作成する場合、名前変更したリポジトリの元の名前を再利用しないでください。 再利用した場合、名前変更したリポジトリへのリダイレクトが切断されます。

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [**Repository Name**] の下で、リポジトリの新しい名前を入力します。 ![リポジトリの名前の変更](/assets/images/help/repository/repository-name-change.png)
4. [**Rename**] をクリックします。 これで完了です。
