---
title: リポジトリについて
intro: リポジトリには、プロジェクトのすべてのファイルと各ファイルの改訂履歴が含まれています。 リポジトリ内でプロジェクトの作業について話し合い、管理できます。
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 95e4033aa41f7920b5447554773dc61a181f5861
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163506'
---
## リポジトリについて

リポジトリを個人として所有することも、リポジトリの所有権を Organization 内の他の人々と共有することもできます。

リポジトリの表示設定を選択して、リポジトリにアクセスできるユーザを制限できます。 詳しくは、「[リポジトリの可視性について](#about-repository-visibility)」をご覧ください。

ユーザが所有するリポジトリでは、他の人々にコラボレーターアクセスを与えて、プロジェクトでコラボレーションするようにできます。 リポジトリが Organization によって所有されている場合は、Organization のメンバーにアクセス権限を与え、リポジトリ上でコラボレーションするようにできます。 詳しくは、「[個人用アカウントのリポジトリの権限レベル](/articles/permission-levels-for-a-user-account-repository/)」と「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」をご覧ください。

{% ifversion fpt or ghec %}個人用アカウントと Organization の {% data variables.product.prodname_free_team %} を使用すると、完全な機能セットを備えた無制限のパブリック リポジトリ、または機能セットを制限した無制限のプライベート リポジトリで、無制限のコラボレーターと作業ができます。 プライベートリポジトリの高度なツールを入手するには、 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、または {% data variables.product.prodname_ghe_cloud %} にアップグレードします。 {% data reusables.gated-features.more-info %}{% else %}各個人と Organization は、無制限のリポジトリを所有し、すべてのリポジトリに無制限にコラボレーターを招待できます。
{% endif %}

リポジトリを使用して、作業を管理し、他のユーザと共同作業を行うことができます。
- Issue を使用して、ユーザフィードバックの収集、ソフトウェアバグの報告、および実行するタスクの整理を行うことができます。 詳しくは、「[Issue について](/github/managing-your-work-on-github/about-issues)」をご覧ください。{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- プルリクエストを使用して、リポジトリへの変更を提案できます。 詳細については、「[pull request について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)」を参照してください。
- プロジェクトボードを使用して、Issue とプルリクエストを整理して優先順位を付けることができます。 詳細については、「[プロジェクト ボードについて](/github/managing-your-work-on-github/about-project-boards)」を参照してください。

{% data reusables.repositories.repo-size-limit %}

リポジトリを最も効果的に使用する方法については、「[リポジトリのベスト プラクティス](/repositories/creating-and-managing-repositories/best-practices-for-repositories)」を参照してください。

## リポジトリの可視性について

リポジトリの可視性 ({% ifversion ghes or ghec %}パブリック、内部、またはプライベート{% elsif ghae %}プライベートまたは内部{% else %}パブリックまたはプライベート{% endif %}) を選択することで、リポジトリにアクセスできるユーザーを制限できます。

{% ifversion fpt or ghec or ghes %}

リポジトリを作成するときに、リポジトリをパブリックまたはプライベートのどちらにするかを選ぶことができます。{% ifversion ghec or ghes %}{% ifversion ghec %}Enterprise アカウントが所有している {% endif %}Organization でリポジトリを作成する場合は、リポジトリを内部にすることもできます。{% endif %}{% endif %}{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} を使用し、Enterprise アカウントが所有している Organization のリポジトリは、可視性を内部にして作成することもできます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)を参照してください。

{% elsif ghae %}

個人用アカウントが所有するリポジトリを作成すると、リポジトリは常にプライベートになります。 Organization が所有するリポジトリを作成する場合は、リポジトリをプライベートまたは内部のどちらにするかを選ぶことができます。

{% endif %}

{%- ifversion fpt or ghec %}
- パブリック リポジトリには、インターネット上の誰でもアクセスできます。
- プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。
{%- elsif ghes %}
- {% data variables.location.product_location %}がプライベート モードでない場合、またはファイアウォールの内側にない場合は、インターネット上の誰もがパブリック リポジトリにアクセスできます。 そうではない場合は、外部コラボレーターを含め、{% data variables.location.product_location %}を使うすべてのユーザーがパブリック リポジトリを利用できます。
- プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。
{%- elsif ghae %}
- プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- 内部リポジトリには、すべての Enterprise メンバーがアクセスできます。 詳しくは、「[内部リポジトリについて](#about-internal-repositories)」をご覧ください。
{%- endif %}

Organization のオーナーは、Organization 内で作成されたすべてのリポジトリにいつでもアクセスできます。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

リポジトリの管理者権限を持つユーザは、既存のリポジトリの可視性を変更できます。 詳細については、「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。

{% ifversion ghes or ghec or ghae %}
## インターナルリポジトリについて

{% data reusables.repositories.about-internal-repos %}インナーソースについて詳しくは、{% data variables.product.prodname_dotcom %} のホワイトペーパーの「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」をご覧ください。

{% ifversion ghec %} {% note %}

**注:** 内部リポジトリは、Enterprise アカウントで {% data variables.product.prodname_ghe_cloud %} を使っている場合にのみ作成できます。 Enterprise アカウントは、複数の Organization の集中管理を可能にする別の種類のアカウントです。 詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」をご覧ください。

{% endnote %} {% endif %}

すべての Enterprise メンバーには内部リポジトリに対する読み取り権限がありますが、内部リポジトリは、Organization リポジトリの外部のコラボレーターを含め、{% ifversion fpt or ghec %}Enterprise の外部の{% else %}どの Organization のメンバーでもない{% endif %}ユーザーには表示されません。 詳しくは、「[Enterprise におけるロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)」と「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」をご覧ください。

{% ifversion ghes %} {% note %}

**注:** Enterprise メンバーになって内部リポジトリにアクセスできるようになるには、ユーザーは Organization のメンバーである必要があります。 {% data variables.location.product_location %}のユーザーがどの Organization のメンバーでもない場合、そのユーザーは内部リポジトリにアクセスできません。

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}Enterprise が {% data variables.product.prodname_emus %} を使用しない限り、Enterprise のメンバー{% else %}メンバー{% endif %}は、Enterprise 内の Organization が所有する内部リポジトリをフォークできます。 フォークされたリポジトリはメンバーの個人用アカウントに属し、フォークの可視性はプライベートになります。 Enterprise が所有するすべての Organization からユーザが削除されると、そのユーザの内部リポジトリのフォークは自動的に削除されます。

{% ifversion ghec %} {% note %}

**注:** {% data variables.enterprise.prodname_managed_users_caps %} は、内部リポジトリをフォークできません。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)」を参照してください。

{% endnote %} {% endif %} {% endif %}

## リポジトリでコンテンツと diff の表示を制限する

ある種のリソースはきわめて大きくなり、{% data variables.product.product_name %} で負荷の大きな処理が必要になる場合があります。 そのため、リクエストが妥当な時間で終わるように、制限が設けられています。

以下の制限の多くは {% data variables.product.product_name %}と API の両方に影響します。

### テキストの制限

**512 KB** を超えるテキスト ファイルは、常にプレーンテキストとして表示されます。 コードは構文が強調表示されておらず、prose ファイルは HTML (Markdown、AsciiDoc *など*) に変換されません。

**5 MB** を超えるテキスト ファイルは、raw URL を通じてのみ利用できます。これらは `{% data variables.product.raw_github_com %}` で提供されます (例: `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`)。 ファイルの raw URL を取得するには、 **[Raw]** ボタンをクリックします。

### diff の制限

diff はきわめて大きくなることがあるため、コミット、プルリクエスト、比較ビューには制限が設けられています。

- プル要求では、 *読み込むことができる合計差分が 20,000 行* を超えたり、生の差分データ *が 1 MB* を超えたりすることはできません。
- 1 つのファイルの差分が *、読み込むことができる 20,000 行* を超えたり、生の差分データ *が 500 KB* を超えたりすることはできません。 1 つのファイルに対して *400 行* と *20 KB* が自動的に読み込まれます。
- 1 つの差分内のファイルの最大数は *300* に制限されます。
- 1 つの diff あたりでレンダリング可能なファイル (画像、PDF、GeoJSON ファイルなど) の最大数は、*25* に制限されています。

制限された diff の一部が表示される場合もありますが、制限を超える部分は表示されません。

### コミット リストの制限

比較ビューと pull request のページには、`base` と `head` リビジョン間のコミットのリストが表示されます。 これらのリストではコミットの数は **250** に制限されています。 その制限を超える場合は、追加のコミットがあるという注意書きが表示されます (コミット自体は表示されません)。

## 参考資料

- 「[フォークについて](/github/collaborating-with-pull-requests/working-with-forks/about-forks)」
- 「[Issue および pull request を使用した共同作業](/categories/collaborating-with-issues-and-pull-requests)」
- 「[{% data variables.product.prodname_dotcom %} での作業の管理](/categories/managing-your-work-on-github/)」
- 「[リポジトリの管理](/categories/administering-a-repository)」
- 「[グラフを使用したリポジトリ データの視覚化](/categories/visualizing-repository-data-with-graphs/)」
- 「[ウィキについて](/communities/documenting-your-project-with-wikis/about-wikis)」
- 「[{% data variables.product.prodname_dotcom %} 用語集](/articles/github-glossary)」
