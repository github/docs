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
  github-ae: '*'
---

### リポジトリの可視性の変更について

Organization のオーナーは、リポジトリの可視性を変更する機能を Organization のオーナーのみに制限できます。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

リポジトリの可視性を変更する前に、次の注意点を確認することをお勧めします。

#### リポジトリをプライベートにする
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* {% data variables.product.product_name %} はパブリックリポジトリのパブリックフォークを切り離し、新しいネットワークに追加します。 Public forks are not made private.{% endif %}
* If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}The visibility of any forks will also change to private.{% elsif currentVersion == "github-ae@latest" %}If the internal repository has any forks, the visibility of the forks is already private.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* If you're using {% data variables.product.prodname_free_user %} for user accounts or organizations, some features won't be available in the repository after you change the visibility to private. {% data reusables.gated-features.more-info %}{% endif %}
* Any published {% data variables.product.prodname_pages %} site will be automatically unpublished.{% if currentVersion == "free-pro-team@latest" %} If you added a custom domain to the {% data variables.product.prodname_pages %} site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} will no longer include the repository in the {% data variables.product.prodname_archive %}. For more information, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %}, will stop working unless the repository is owned by an organization that has a license for {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* Anonymous Git read access is no longer available. For more information, see "[Enabling anonymous Git read access for a repository](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### リポジトリをインターナルにする

{% note %}

**注釈:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

* Any forks of the repository will remain in the repository network, and {% data variables.product.product_name %} maintains the relationship between the root repository and the fork. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### リポジトリをパブリックにする

* {% data variables.product.product_name %} will detach private forks and turn them into a standalone private repository. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% if currentVersion == "free-pro-team@latest" %}
* If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines. You can also take a free course on managing an open source project with [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). リポジトリがパブリックになったら、コントリビューターをサポートするための最適な手法にプロジェクトが合致しているかどうかを確認するため、リポジトリのコミュニティプロフィールを表示できます。 For more information, see "[Viewing your community profile](/articles/viewing-your-community-profile)."
* The repository will automatically gain access to {% data variables.product.prodname_GH_advanced_security %} features.

For information about improving repository security, see "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

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
3. [Danger Zone] の下、[Make this repository private] の隣で、[**Make private**] をクリックします。 ![プライベートにするボタン](/assets/images/help/repository/repo-makeprivate.png)
4. リポジトリをプライベートにすることに関する警告を読みます。 ![警告ポップアップ](/assets/images/help/repository/repo-privateconfirm.png)
5. プライベートにしたいリポジトリの名前を入力します。たとえば、`accountname/reponame` と入力します。
6. [**I understand, make this repository private**] をクリックします。

### リポジトリをパブリックにする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Danger Zone] の下、[Make this repository public] の隣で、[**Make public**] をクリックします。 ![パブリックにするボタン](/assets/images/help/repository/repo-makepublic.png)
4. リポジトリをパブリックにすることに関する警告を読みます。 ![プライベートリポジトリをパブリックにすることに関する情報のポップアップ](/assets/images/help/repository/repo-publicconfirm.png)
5. パブリックにしたいリポジトリの名前を入力します。たとえば、`accountname/reponame` と入力します。
6. [**I understand, make this repository public**] をクリックします。

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### リポジトリをインターナルにする

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Danger Zone] の下、[Make this repository internal] の隣で、[**Make internal**] をクリックします。 ![[Make internal] ボタン](/assets/images/help/repository/repo-makeinternal.png)
4. リポジトリをインターナルにすることに関する警告を読みます。 ![警告ポップアップ](/assets/images/help/repository/repo-internalconfirm.png)
5. インターナルにしたいリポジトリの名前を入力します。たとえば、`accountname/reponame` と入力します。
6. [**I understand, make this repository internal**] をクリックします。
{% endif %}

{% endif %}

### 参考リンク
- 「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」
