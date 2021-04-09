---
title: コンテンツを参照して引用する
intro: サードパーティツールを使用して GitHub のコンテンツを引用したり参照したりできます。
redirect_from:
  - /articles/referencing-and-citing-content
versions:
  free-pro-team: '*'
topics:
  - repositories
---

### Zenodo によってリポジトリの永続的識別子を発行する

学術文献でリポジトリを参照しやすくするため、永続的識別子 (デジタルオブジェクト識別子 (DOI) とも呼ばれます) を作成できます。 データアーカイブツール [Zenodo](https://zenodo.org/about) を使用して {% data variables.product.product_name %} リポジトリをアーカイブ化すれば、そのアーカイブの DOI を発行することができます。

{% tip %}

**参考:**
- Zenodo がアクセスできるのはパブリックリポジトリのみですので、アーカイブ化するリポジトリが[パブリック](/articles/making-a-private-repository-public)であるようにしてください。
- アーカイブ化するリポジトリが Organization に属している場合、Zenodo アプリケーションには、Organization のオーナーによる[アクセスの承認](/articles/approving-oauth-apps-for-your-organization)が必要な場合があります。
- あなたの作業成果を再利用する方法が読者にわかるよう、リポジトリには[ライセンス](/articles/open-source-licensing)を含めるようにしてください。

{% endtip %}

1. [Zenodo](http://zenodo.org/) に移動します。
2. 画面左上隅の [**Log in**] をクリックします。 ![Zenodo ログインボタン](/assets/images/help/repository/zenodo_login.png)
3. [**Log in with GitHub**] をクリックします。 ![GitHub によって Zenodo へログインする](/assets/images/help/repository/zenodo_login_with_github.png)
4. アクセス権限についての情報をレビューしてから、[**Authorize application**] をクリックします。 ![Zenodo の認証](/assets/images/help/repository/zenodo_authorize.png)
5. [Zenodo GitHub ページ](https://zenodo.org/account/settings/github/)に移動します。 ![Zenodo GitHub ページ](/assets/images/help/repository/zenodo_github_page.png)
6. アーカイブ化するリポジトリの名前の右にあるボタンを [**Off**] から [**On**] に切り替えて、アーカイブ化できるようにします。 ![リポジトリでの Zenodo アーカイブ化の有効化](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo では、新しい {% data variables.product.product_name %}[リリース](/articles/about-releases/)を作成するたびに、リポジトリがアーカイブ化されて新しい DOI が発行されます。 リリースを作成するには、「[リリースの作成](/articles/creating-releases/)」のステップに従ってください。

### Figshare による研究素材の公表と引用

研究者はデータ管理サービス [Figshare](http://figshare.com) を使用して研究素材を公表したり引用したりできます。 詳しい情報については、[Figshare のサポートサイト](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account)を参照してください。
