---
title: リポジトリの依存関係を調べる
intro: '依存関係グラフを使用すると、プロジェクトが依存しているパッケージ{% ifversion fpt or ghec %}と、そのプロジェクトに依存しているリポジトリ{% endif %}を確認できます。 また、その依存関係で脆弱性が検出されると、それも表示されます。'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882732'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## 依存関係グラフの表示

依存関係グラフには、リポジトリの依存関係{% ifversion fpt or ghec %}と依存物{% endif %}が表示されます。 依存関係の検出とサポートされているエコシステムの詳細については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. 必要に応じて、[依存関係グラフ] で **[依存関係]** をクリックします。
![[依存関係グラフ] ページの [依存関係] タブ](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} Enterprise 所有者は、エンタープライズ レベルで依存関係グラフを構成することができます。 詳細については、「[企業の依存関係グラフの有効化](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)」を参照してください。
{% endif %}

### 依存関係ビュー

{% ifversion fpt or ghec %}依存関係はエコシステム別にグループ化されます。 依存関係を拡張すると、その依存関係を表示できます。  プライベートリポジトリ、プライベートパッケージ、認識できないファイルの依存関係は、プレーンテキストで表示されます。 依存関係のパッケージ マネージャーがパブリック リポジトリにある場合、{% data variables.product.product_name %} にそのリポジトリへのリンクが表示されます。

{% ifversion dependency-submission-api %} 依存関係の送信 API (ベータ) を使ってプロジェクトに送信された依存関係は、エコシステムによってもグループ化されますが、リポジトリ内のマニフェストまたはロック ファイルによって識別される依存関係とは別に表示されます。 これらの送信された依存関係は、依存関係のスナップショット (またはセット) として送信されるため、依存関係グラフに "スナップショット依存関係" として表示されます。 依存関係の送信 API の使用方法について詳しくは、「[依存関係の送信 API の使用](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)」を参照してください。
{% endif %}

リポジトリで脆弱性が検出された場合、それらは{% data variables.product.prodname_dependabot_alerts %}にアクセスできるユーザに、ビューの上部で表示されます。

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %}リポジトリのマニフェストもしくはロック ファイルで指定された直接および間接的な依存関係は、エコシステム別にグループ化されて一覧表示されます。 リポジトリで脆弱性が検出された場合、それらは{% data variables.product.prodname_dependabot_alerts %}にアクセスできるユーザに、ビューの上部で表示されます。

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**注:** {% data variables.product.product_name %} では、 **[依存]** ビューに情報が入力されません。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### 依存ビュー

パブリックリポジトリの場合、他のリポジトリによってどう使用されているかが、依存ビューに表示されます。 パッケージ マネージャーでライブラリを含むリポジトリのみを表示するには、依存リポジトリの一覧のすぐ上にある **[NUMBER Packages]\(<数値> 個のパッケージ\)** をクリックします。 依存の数は概数であり、リストされている依存と一致しないことがあります。

![依存グラフ](/assets/images/help/graphs/dependents_graph.png)

## プライベートリポジトリの依存関係グラフを有効化および無効化する

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## "Used by"パッケージの変更

リポジトリによっては、 **[コード]** タブのサイドバーに "Used by" セクションが表示されることがあります。リポジトリに "Used by" セクションがあるのは、次のような場合です。
  * リポジトリに対して依存関係グラフが有効になっています (詳細については、上記のセクションを参照してください)。
  * リポジトリには、[サポートされているパッケージ エコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)で発行されるパッケージが含まれています。
  * エコシステム内では、ソースが格納されている _パブリック_ リポジトリへのリンクがパッケージに含まれています。

"Used by"セクションは、見つかったパッケージに対する公開参照数を示し、依存物のプロジェクトのオーナーのアバターを表示します。

!["Used by" サイドバー セクション](/assets/images/help/repository/used-by-section.png)

このセクション内のアイテムをクリックすると、依存関係グラフの **[依存]** タブに移動します。

"Used by"セクションは、リポジトリからの単一のパッケージを表します。 複数のパッケージを含むリポジトリへの管理者権限を持っているなら、"Used by"セクションがどのパッケージを表すのかを選択できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. [コードのセキュリティと分析] で、"Used by counter" セクション内のドロップダウン メニューをクリックし、パッケージを選びます。
  !["Used by" パッケージを選ぶ](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## 依存関係グラフのトラブルシューティング

依存関係グラフが空の場合は、依存関係を含むファイルに問題があるかもしれません。 ファイルがファイルタイプに合わせて適切にフォーマットされているかをチェックしてください。

{% ifversion fpt or ghec %}ファイルのフォーマットが正しい場合は、大きさをチェックします。 {% data variables.product.prodname_enterprise %} ユーザでない限り、依存関係グラフは 1.5 MB を超える個々のマニフェストおよびロック ファイルを無視します。 デフォルトでは、最大 20 個のマニフェストまたはロックファイルが処理されるので、リポジトリのサブディレクトリで依存関係を小さいファイルに分割することができます。{% endif %}

マニフェストまたはロック ファイルが処理されない場合、その依存関係は依存関係グラフから省略され、安全でない依存関係はチェックされなくなります。

## 参考資料

- "[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- 「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」{% ifversion ghec %}
- 「[組織のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)」{% endif %}{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} によるデータの利用方法と保護方法を理解する](/get-started/privacy-on-github)」{% endif %}
