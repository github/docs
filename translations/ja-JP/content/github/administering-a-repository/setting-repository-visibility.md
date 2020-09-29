---
title: リポジトリの可視性を設定する
intro: あなたのリポジトリを誰が表示できるか選択できます。
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### リポジトリの可視性の変更について

Organization のオーナーは、リポジトリの可視性を変更する機能を Organization のオーナーのみに制限できます。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

リポジトリの可視性を変更する前に、次の注意点を確認することをお勧めします。

#### リポジトリをプライベートにする

   * {% data variables.product.prodname_dotcom %} はパブリックリポジトリのパブリックフォークを切り離し、新しいネットワークに追加します。 パブリックフォークはプライベートにはなりません。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}リポジトリの可視性を内部からプライベートに変更すると、{% data variables.product.prodname_dotcom %} は新たなプライベートリポジトリへのアクセスを持たないユーザに属するフォークを削除します。{% endif %}詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-public-repository-to-a-private-repository)」を参照してください。
   {% if currentVersion == "free-pro-team@latest" %}* ユーザアカウントまたは Organization に {% data variables.product.prodname_free_user %} を使用している場合、可視性をプライベートに変更すると、リポジトリで一部の機能が使用できなくなります。 {% data reusables.gated-features.more-info %}
   * すべての公開済みの {% data variables.product.prodname_pages %} サイトは自動的に取り下げられます。 {% data variables.product.prodname_pages %} サイトにカスタムドメインを追加した場合、ドメインの乗っ取りリスクを回避するために、リポジトリをプライベートに設定する前に DNS レコードを削除または更新してください。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。
   * 今後、{% data variables.product.prodname_dotcom %} は {% data variables.product.prodname_archive %} にリポジトリを含まなくなります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。{% endif %}
   {% if currentVersion != "free-pro-team@latest" %}* 匿名の Git 読み取りアクセスは利用できなくなりました。 詳しい情報については、「[リポジトリで匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。{% endif %}

#### リポジトリをパブリックにする

   * {% data variables.product.prodname_dotcom %} はプライベートフォークを切り離し、スタンドアロンのプライベートリポジトリに変換します。 詳細は「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)」を参照してください。
   * オープンソースプロジェクトの作成の一環として、プライベートリポジトリをパブリックリポジトリに変換する場合は、[オープンソースガイド](http://opensource.guide)を参照して役立つヒントやガイドラインを確認してください。{% if currentVersion == "free-pro-team@latest" %} [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) でオープンソースプロジェクトの管理方法についての無料コースを受けることもできます。 リポジトリがパブリックになったら、コントリビューターをサポートするための最適な手法にプロジェクトが合致しているかどうかを確認するため、リポジトリのコミュニティプロフィールを表示できます。 詳細は「[コミュニティプロフィールを見る](/articles/viewing-your-community-profile)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### リポジトリの可視性を変更する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Danger Zone] の [Change repository visibility] の右側にある [**Change visibility**] をクリックします。 ![[Change visibility] ボタン](/assets/images/help/repository/repo-change-vis.png)
4. 可視性を選択します。 ![リポジトリの可視性オプションのダイアログ](/assets/images/help/repository/repo-change-select.png)
5. 正しいリポジトリの可視性を変更していることを確認するには、可視性を変更するリポジトリの名前を入力します。
6. [**I understand, change repository visibility**] をクリックします。 ![リポジトリの可視性ボタンの変更確認](/assets/images/help/repository/repo-change-confirm.png)

{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### リポジトリをプライベートにする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository private", click **Make private**. ![プライベートにするボタン](/assets/images/help/repository/repo-makeprivate.png)
4. リポジトリをプライベートにすることに関する警告を読みます。 ![警告ポップアップ](/assets/images/help/repository/repo-privateconfirm.png)
5. プライベートにしたいリポジトリの名前を入力します。たとえば、`accountname/reponame` と入力します。
6. Click **I understand, make this repository private**.

### リポジトリをパブリックにする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository public", click **Make public**. ![パブリックにするボタン](/assets/images/help/repository/repo-makepublic.png)
4. リポジトリをパブリックにすることに関する警告を読みます。 ![プライベートリポジトリをパブリックにすることに関する情報のポップアップ](/assets/images/help/repository/repo-publicconfirm.png)
5. パブリックにしたいリポジトリの名前を入力します。たとえば、`accountname/reponame` と入力します。
6. Click **I understand, make this repository public**.

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### リポジトリをインターナルにする

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository internal", click **Make internal**. ![[Make internal] ボタン](/assets/images/help/repository/repo-makeinternal.png)
4. リポジトリをインターナルにすることに関する警告を読みます。 ![警告ポップアップ](/assets/images/help/repository/repo-internalconfirm.png)
5. インターナルにしたいリポジトリの名前を入力します。たとえば、`accountname/reponame` と入力します。
6. Click **I understand, make this repository internal**.
{% endif %}

{% endif %}

### 参考リンク
- 「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」
