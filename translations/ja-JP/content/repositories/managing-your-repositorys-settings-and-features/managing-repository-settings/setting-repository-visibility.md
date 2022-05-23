---
title: リポジトリの可視性を設定する
intro: あなたのリポジトリを誰が表示できるか選択できます。
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
---

## リポジトリの可視性の変更について

Organization のオーナーは、リポジトリの可視性を変更する機能を Organization のオーナーのみに制限できます。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

{% ifversion ghec %}

Members of an {% data variables.product.prodname_emu_enterprise %} can only set the visibility of repositories owned by their personal account to private, and repositories in their enterprise's organizations can only be private or internal. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% endif %}

リポジトリの可視性を変更する前に、次の注意点を確認することをお勧めします。

{% ifversion ghes or ghae %}

{% warning %}

**Warning:** Changes to the visibility of a large repository or repository network may affect data integrity. Visibility changes can also have unintended effects on forks. {% data variables.product.company_short %} recommends the following before changing the visibility of a repository network.

- Wait for a period of reduced activity on {% data variables.product.product_location %}.

- Contact your {% ifversion ghes %}site administrator{% elsif ghae %}enterprise owner{% endif %} before proceeding. Your {% ifversion ghes %}site administrator{% elsif ghae %}enterprise owner{% endif %} can contact {% data variables.contact.contact_ent_support %} for further guidance.

{% endwarning %}

{% endif %}

### リポジトリをプライベートにする
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} はパブリックリポジトリのパブリックフォークを切り離し、新しいネットワークに追加します。 パブリックフォークはプライベートにはなりません。{% endif %}
{%- ifversion ghes or ghec or ghae %}
* リポジトリの可視性を内部からプライベートに変更すると、{% data variables.product.prodname_dotcom %}は、新しくプライベートになったリポジトリへのアクセス権限がないユーザに属するフォークを削除します。 {% ifversion fpt or ghes or ghec %}フォークの可視性もすべてプライベートになります。{% elsif ghae %}内部リポジトリにフォークがある場合、そのフォークの可視性はすでにプライベートになっています。{% endif %}詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)」を参照してください。
{%- endif %}

{%- ifversion fpt %}
* If you're using {% data variables.product.prodname_free_user %} for personal accounts or organizations, some features won't be available in the repository after you change the visibility to private. すべての公開済みの {% data variables.product.prodname_pages %} サイトは自動的に取り下げられます。 {% data variables.product.prodname_pages %} サイトにカスタムドメインを追加した場合、ドメインの乗っ取りリスクを回避するために、リポジトリをプライベートに設定する前に DNS レコードを削除または更新してください。 For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products) and "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."
{%- endif %}

{%- ifversion fpt or ghec %}
* 今後、{% data variables.product.prodname_dotcom %} は {% data variables.product.prodname_archive %} にリポジトリを含まなくなります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。
* {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %}, will stop working{% ifversion ghec %} unless the repository is owned by an organization that is part of an enterprise with a license for {% data variables.product.prodname_advanced_security %} and sufficient spare seats{% endif %}. {% data reusables.advanced-security.more-info-ghas %}
{%- endif %}

{%- ifversion ghes %}
* 匿名の Git 読み取りアクセスは利用できなくなりました。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### リポジトリをインターナルにする

* リポジトリのすべてのフォークはリポジトリネットワークに残り、{% data variables.product.product_name %} はルートリポジトリとフォークとの関係を維持します。 詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)」を参照してください。

{% endif %}

{% ifversion fpt or ghes or ghec %}

### リポジトリをパブリックにする

* {% data variables.product.product_name %} はプライベートフォークを切り離し、スタンドアロンのプライベートリポジトリに変換します。 詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)」を参照してください。{% ifversion fpt or ghec %}
* オープンソースプロジェクトの作成の一環として、プライベートリポジトリをパブリックリポジトリに変換する場合は、[オープンソースガイド](http://opensource.guide)を参照して役立つヒントやガイドラインを確認してください。 [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) でオープンソースプロジェクトの管理方法についての無料コースを受けることもできます。 リポジトリがパブリックになったら、コントリビューターをサポートするための最適な手法にプロジェクトが合致しているかどうかを確認するため、リポジトリのコミュニティプロフィールを表示できます。 詳しい情報については、「[コミュニティプロフィールを表示する](/articles/viewing-your-community-profile)」を参照してください。
* リポジトリは、{% data variables.product.prodname_GH_advanced_security %} 機能へのアクセスを自動的に獲得します。

For information about improving repository security, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."{% endif %}

{% endif %}

## リポジトリの可視性を変更する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Danger Zone] の [Change repository visibility] の右側にある [**Change visibility**] をクリックします。 ![[Change visibility] ボタン](/assets/images/help/repository/repo-change-vis.png)
4. 可視性を選択します。
{% ifversion fpt or ghec %}
   ![リポジトリの可視性オプションのダイアログ](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 正しいリポジトリの可視性を変更していることを確認するには、可視性を変更するリポジトリの名前を入力します。
6. [**I understand, change repository visibility**] をクリックします。
{% ifversion fpt or ghec %}
   ![リポジトリの可視性ボタンの変更確認](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## 参考リンク
- 「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」
