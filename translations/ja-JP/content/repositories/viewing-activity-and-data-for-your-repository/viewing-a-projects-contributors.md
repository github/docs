---
title: プロジェクトのコントリビューターを表示する
intro: 'リポジトリへのコミットにコントリビュートしたユーザー{% ifversion fpt or ghec %}とその依存関係{% endif %}を表示できます。'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369162'
---
## コントリビューターについて

コントリビューター グラフでは、{% ifversion ghes or ghae %}コミットの共同作成者を含めて、{% endif %}リポジトリの上位 100 人のコントリビューターを表示できます。 マージコミットと空のコミットは、このグラフでコントリビューションとして数えられません。

{% ifversion fpt or ghec %}プロジェクトの Python の依存関係に貢献した人のリストも表示できます。 コミュニティ コントリビューターのこのリストを表示するには、`https://github.com/REPO-OWNER/REPO-NAME/community_contributors` にアクセスします。
{% endif %}

## コントリビューターグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 左側のサイドバーで、 **[Contributors]\(コントリビューター\)** をクリックします。
  ![[Contributors]\(コントリビューター\) タブ](/assets/images/help/graphs/contributors_tab.png)
4. オプションで、特定の期間におけるコントリビューターを表示するには、クリックしてから、その期間が選択されるまでドラッグしてください。 コントリビューター グラフでは、日曜日ごとにその週のコミット数が合計されるため、期間に日曜日を含める必要があります。
  ![コントリビューター グラフで選択された期間](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## コントリビューターのトラブルシューティング

リポジトリのコントリビュータグラフにあなたが表示されない場合、以下の理由が考えられます:
- 上位 100 人に入っていない。
- コミットがデフォルトブランチにマージされていない。
- コミットの作成に使用したメールアドレスが、{% data variables.product.product_name %} のアカウントに接続されていない。

{% tip %}

**ヒント:** リポジトリのすべてのコミット コントリビューターの一覧を表示する方法については、「[リポジトリ コントリビューターを一覧表示する](/rest/repos/repos#list-repository-contributors)」をご覧ください。

{% endtip %}

リポジトリ内のあなたのコミットがすべてデフォルト以外のブランチにある場合、コントリビュータグラフには表示されません。 たとえば、`gh-pages` ブランチでのコミットは、`gh-pages` がリポジトリの既定のブランチでない限り、グラフに含まれません。 コミットをデフォルトブランチにマージするため、プルリクエストを作成できます。 詳細については、「[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。

コミットの作成に使用したメールアドレスが {% data variables.product.product_name %} のアカウントに接続されていない場合、コミットはアカウントにリンクされず、コントリビュータグラフに表示されません。 詳しくは、「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address)」{% ifversion not ghae %}と「[{% data variables.product.prodname_dotcom %} アカウントへのメールアドレスの追加](/articles/adding-an-email-address-to-your-github-account)」{% endif %}をご覧ください。
