---
title: 無効化した GitHub Pages サイトを管理する
intro: '{{ site.data.variables.product.prodname_free_user }} のプライベートリポジトリは {{ site.data.variables.product.prodname_pages }} をサポートしませんが、無料のプライベートリポジトリに接続していた限定数の {{ site.data.variables.product.prodname_pages }} サイトが誤ってアクティブなままになっていました。 これらのサイトは更新されず、2019 年 5 月 10 日に {{ site.data.variables.product.prodname_dotcom }} によって取り下げられます。'
hidden: true
redirect_from:
  - /articles/managing-your-disabled-github-pages-site
versions:
  free-pro-team: '*'
---

{% note %}

{{ site.data.variables.product.prodname_pages }} は、{{ site.data.variables.product.prodname_free_user }} ではパブリックリポジトリでのみ使用でき、{{ site.data.variables.product.prodname_pro }}、{{ site.data.variables.product.prodname_team }}、{{ site.data.variables.product.prodname_ghe_cloud }}、{{ site.data.variables.product.prodname_ghe_server }} ではパブリックおよびプライベートリポジトリで使用できます。 {{ site.data.reusables.gated-features.more-info }}

{% endnote %}

無料のプライベートリポジトリに公開した {{ site.data.variables.product.prodname_pages }} サイトがある場合は、サイトの公開と更新を継続するか、手動でサイトを取り下げるかのオプションがいくつかあります。 何もしない場合、{{ site.data.variables.product.prodname_dotcom }} は 2019 年 5 月 10 日にサイトを取り下げます。

- **{{ site.data.variables.product.prodname_pages }} サイトの公開と更新を継続する場合**は、リポジトリをパブリックにするか、アカウントを {{ site.data.variables.product.prodname_pro }} にアップグレードできます。 プライベートリポジトリをパブリックにする方法については「[リポジトリの可視性を設定する](/articles/setting-repository-visibility#making-a-private-repository-public)」を参照してください。アカウントのアップグレードについては「[GitHub のプランをアップグレードする](/articles/upgrading-your-github-subscription)」を参照してください。

- **{{ site.data.variables.product.prodname_pages }} サイトの公開を停止する場合**は、[手動で取り下げる](#manually-unpublishing-your-github-pages-site)か、{{ site.data.variables.product.prodname_dotcom }} が 2019 年 5 月 10 日に取り下げるまで何もせずに待ちます。 {{ site.data.variables.product.prodname_pages }} サイトでカスタム ドメインを設定している場合は、ドメイン乗っ取りのリスクを回避するために、できるだけ早く DNS プロバイダで DNS レコードを更新または削除してください。 {{ site.data.variables.product.prodname_pages }} サイトが無効な間に、DNS プロバイダでカスタム ドメインを設定すると、サブドメインのいずれかで誰かにサイトをホストされてしまう恐れがあります。 詳細は「[{{ site.data.variables.product.prodname_pages }} でカスタムドメインを使用する](/articles/using-a-custom-domain-with-github-pages)」を参照してください。

### {{ site.data.variables.product.prodname_pages }} サイトを手動で取り下げる

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
3. 左サイドバーで [**Unpublish {{ site.data.variables.product.prodname_pages }}**] をクリックします。 ![{{ site.data.variables.product.prodname_pages }} サイトを取り下げるリポジトリ設定](/assets/images/help/pages/unpublish-pages-button-sidebar.png)
4. [**Unpublish this site**] をクリックします。 ![{{ site.data.variables.product.prodname_pages }} サイトを取り下げるボタン](/assets/images/help/pages/unpublish-pages-button.png)

### 参考リンク

- 「[ユーザ Pages サイトを取り下げる](articles/unpublishing-a-user-pages-site)」
- 「[プロジェクト Pages サイトを取り下げる](/articles/unpublishing-a-project-pages-site)」
- 「[リポジトリを移譲する](/articles/transferring-a-repository)」
- [リポジトリのアーカイブについて](/articles/about-archiving-repositories)
- 「[リポジトリを削除する](/articles/deleting-a-repository)」
