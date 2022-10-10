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
ms.openlocfilehash: 2ccdafed8e9efe2bf352033d8fa632147f6bb32b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332022'
---
## リポジトリの可視性の変更について

Organization のオーナーは、リポジトリの可視性を変更する機能を Organization のオーナーのみに制限できます。 詳細については、「[Organization 内でリポジトリの可視性の変更を制限する](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)」を参照してください。

{% ifversion ghec %}

{% data variables.product.prodname_emu_enterprise %} のメンバーは、個人アカウントが所有するリポジトリの可視性のみをプライベートに設定でき、企業の組織のリポジトリはプライベートまたはインターナルにのみ設定できます。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。

{% endif %}

リポジトリの可視性を変更する前に、次の注意点を確認することをお勧めします。

{% ifversion ghes or ghae %}

{% warning %}

**警告**: 大規模なリポジトリまたはリポジトリ ネットワークの可視性を変更すると、データの整合性に影響する可能性があります。 可視性の変更は、フォークに意図しない影響を与える可能性もあります。 {% data variables.product.company_short %} では、リポジトリ ネットワークの可視性を変更する前に、次のことをお勧めします。

- {% data variables.product.product_location %} のアクティビティが減少する期間まで待ちます。

- 続行する前に、{% ifversion ghes %}サイト管理者{% elsif ghae %}エンタープライズ所有者{% endif %} 連絡します。 {% ifversion ghes %}サイト管理者{% elsif ghae %}エンタープライズ所有者{% endif %} は、{% data variables.contact.contact_ent_support %} に連絡して、さらにガイダンスを求めることができます。

{% endwarning %}

{% endif %}

### リポジトリをプライベートにする
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} はパブリック リポジトリのパブリック フォークを切り離し、新しいネットワークに追加します。 パブリック フォークはプライベートにされません。{% endif %} {%- ifversion ghes or ghec or ghae %}
* リポジトリの可視性を内部からプライベートに変更すると、{% data variables.product.prodname_dotcom %}は、新しくプライベートになったリポジトリへのアクセス権限がないユーザに属するフォークを削除します。 {% ifversion fpt or ghes or ghec %}フォークの可視性もプライベートに変わります。{% elsif ghae %}内部リポジトリにフォークがある場合、フォークの可視性は既にプライベートです。{% endif %}詳細については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)」を参照してください。
{%- endif %}

{%- ifversion fpt %}
* 個人アカウントまたは Organization に {% data variables.product.prodname_free_user %} を使用している場合、可視性をプライベートに変更すると、リポジトリで一部の機能が使用できなくなります。 すべての公開済みの {% data variables.product.prodname_pages %} サイトは自動的に取り下げられます。 {% data variables.product.prodname_pages %} サイトにカスタムドメインを追加した場合、ドメインの乗っ取りリスクを回避するために、リポジトリをプライベートに設定する前に DNS レコードを削除または更新してください。 詳細については、「[{% data variables.product.company_short %} の製品](/get-started/learning-about-github/githubs-products)」および「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインの管理](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。
{%- endif %}

{%- ifversion fpt or ghec %}
* 今後、{% data variables.product.prodname_dotcom %} は {% data variables.product.prodname_archive %} にリポジトリを含まなくなります。 詳細については、「[{% data variables.product.prodname_dotcom %} でのコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。
* {% ifversion ghec %}リポジトリが {% data variables.product.prodname_advanced_security %} のライセンスをもつ Enterprise の一部である Organization の所有で、かつ予備のシートが十分である場合を除き、{% endif %}{% data variables.product.prodname_code_scanning %} などの {% data variables.product.prodname_GH_advanced_security %} 機能は動作を停止します。 {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* 匿名の Git 読み取りアクセスは利用できなくなりました。 詳細については、「[リポジトリに対する匿名 Git 読み取りアクセスの有効化](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### リポジトリをインターナルにする

* リポジトリのすべてのフォークはリポジトリネットワークに残り、{% data variables.product.product_name %} はルートリポジトリとフォークとの関係を維持します。 詳細については、「[リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)」を参照してください。

{% endif %}

{% ifversion fpt or ghes or ghec %}

### リポジトリをパブリックにする

* {% data variables.product.product_name %} はプライベートフォークを切り離し、スタンドアロンのプライベートリポジトリに変換します。 詳細については、「[リポジトリが削除されたとき、または可視性が変更された場合のフォークの動作](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)」を参照してください。{% ifversion fpt or ghec %}
* オープン ソース プロジェクトの作成の一環として、プライベート リポジトリをパブリック リポジトリに変換する場合は、[オープン ソース ガイド](http://opensource.guide)を参照して役立つヒントやガイドラインを確認してください。 また、[{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) でオープン ソース プロジェクトの管理に関する無料コースを受講することもできます。 リポジトリがパブリックになったら、コントリビューターをサポートするための最適な手法にプロジェクトが合致しているかどうかを確認するため、リポジトリのコミュニティプロフィールを表示できます。 詳細については、「[コミュニティ プロファイルの表示](/articles/viewing-your-community-profile)」を参照してください。
* リポジトリは、{% data variables.product.prodname_GH_advanced_security %} 機能へのアクセスを自動的に獲得します。

リポジトリのセキュリティを強化する方法については、「[リポジトリを保護する](/code-security/getting-started/securing-your-repository)」を参照してください。{% endif %}

{% endif %}

## リポジトリの可視性を変更する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [危険なゾーン] の [リポジトリの可視性の変更] の右側にある **[可視性の変更]** をクリックします。
   ![[可視性の変更] ボタン](/assets/images/help/repository/repo-change-vis.png)
4. 可視性を選択します。
{% ifversion fpt or ghec %} ![リポジトリの可視性のオプションのダイアログ](/assets/images/help/repository/repo-change-select.png){% else %} ![リポジトリの可視性のオプションのダイアログ](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. 正しいリポジトリの可視性を変更していることを確認するには、可視性を変更するリポジトリの名前を入力します。
6. **[理解して、リポジトリの表示を変更します]** をクリックします。
{% ifversion fpt or ghec %} ![リポジトリの可視性の変更確認ボタン](/assets/images/help/repository/repo-change-confirm.png){% else %} ![リポジトリの可視性の変更確認ボタン](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## 参考資料
- 「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」
