---
title: リポジトリの可視性を設定する
intro: あなたのリポジトリを誰が表示できるか選択できます。
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Repository visibility
---

## リポジトリの可視性の変更について

Organization のオーナーは、リポジトリの可視性を変更する機能を Organization のオーナーのみに制限できます。 詳しい情報については「[Organization 内でリポジトリの可視性の変更を制限する](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

{% ifversion fpt %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, your repositories owned by your user account can only be private, and repositories in your enterprise's organizations can only be private or internal.

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
{% ifversion fpt or ghes %}
* {% data variables.product.product_name %} はパブリックリポジトリのパブリックフォークを切り離し、新しいネットワークに追加します。 パブリックフォークはプライベートにはなりません。{% endif %}
* リポジトリの可視性を内部からプライベートに変更すると、{% data variables.product.prodname_dotcom %}は、新しくプライベートになったリポジトリへのアクセス権限がないユーザに属するフォークを削除します。 {% ifversion fpt or ghes %}フォークの可視性もすべてプライベートになります。{% elsif ghae %}内部リポジトリにフォークがある場合、そのフォークの可視性はすでにプライベートになっています。{% endif %}詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)」を参照してください。{% ifversion fpt %}
* ユーザアカウントまたは Organization に {% data variables.product.prodname_free_user %} を使用している場合、可視性をプライベートに変更すると、リポジトリで一部の機能が使用できなくなります。 {% data reusables.gated-features.more-info %}{% endif %}
* Any published {% data variables.product.prodname_pages %} site will be automatically unpublished.{% ifversion fpt %} If you added a custom domain to the {% data variables.product.prodname_pages %} site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。{% endif %}{% ifversion fpt %}
* 今後、{% data variables.product.prodname_dotcom %} は {% data variables.product.prodname_archive %} にリポジトリを含まなくなります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} のコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。{% endif %}{% ifversion fpt %}
* リポジトリが {% data variables.product.prodname_advanced_security %} のライセンスを持つ Enterprise の一部である Organization の所有で、かつ予備のシートが十分である場合を除き、{% data variables.product.prodname_code_scanning %} などの {% data variables.product.prodname_GH_advanced_security %} 機能は動作を停止します。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion ghes %}
* 匿名の Git 読み取りアクセスは利用できなくなりました。 詳しい情報については、「[リポジトリで匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。{% endif %}

{% ifversion fpt or ghae or ghes %}

### リポジトリをインターナルにする

{% note %}

**注釈:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

* リポジトリのすべてのフォークはリポジトリネットワークに残り、{% data variables.product.product_name %} はルートリポジトリとフォークとの関係を維持します。 詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)」を参照してください。

{% endif %}

{% ifversion fpt or ghes %}

### リポジトリをパブリックにする

* {% data variables.product.product_name %} はプライベートフォークを切り離し、スタンドアロンのプライベートリポジトリに変換します。 詳しい情報については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)」を参照してください。{% ifversion fpt %}
* オープンソースプロジェクトの作成の一環として、プライベートリポジトリをパブリックリポジトリに変換する場合は、[オープンソースガイド](http://opensource.guide)を参照して役立つヒントやガイドラインを確認してください。 [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) でオープンソースプロジェクトの管理方法についての無料コースを受けることもできます。 リポジトリがパブリックになったら、コントリビューターをサポートするための最適な手法にプロジェクトが合致しているかどうかを確認するため、リポジトリのコミュニティプロフィールを表示できます。 詳しい情報については、「[コミュニティプロフィールを表示する](/articles/viewing-your-community-profile)」を参照してください。
* リポジトリは、{% data variables.product.prodname_GH_advanced_security %} 機能へのアクセスを自動的に獲得します。

For information about improving repository security, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."{% endif %}

{% endif %}

## リポジトリの可視性を変更する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Danger Zone] の [Change repository visibility] の右側にある [**Change visibility**] をクリックします。 ![[Change visibility] ボタン](/assets/images/help/repository/repo-change-vis.png)
4. 可視性を選択します。
{% ifversion fpt %}
   ![リポジトリの可視性オプションのダイアログ](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 正しいリポジトリの可視性を変更していることを確認するには、可視性を変更するリポジトリの名前を入力します。
6. [**I understand, change repository visibility**] をクリックします。
{% ifversion fpt %}
   ![リポジトリの可視性ボタンの変更確認](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## 参考リンク
- "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
