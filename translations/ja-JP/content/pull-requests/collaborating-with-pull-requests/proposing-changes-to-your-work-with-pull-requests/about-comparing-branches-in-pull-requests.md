---
title: プルリクエスト中でのブランチの比較について
intro: プルリクエストは、変更のマージ対象のbaseブランチに対するトピックブランチ中で作成した変更を比較するdiffを表示します。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Compare branches
ms.openlocfilehash: c45bcb3bceda42019be3139724e0b68234e90cfc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881805'
---
{% note %}

**注:** pull request を作成する際に、変更の比較対象となるベース ブランチを変更できます。 詳細については、「[プルリクエストの作成方法](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)」を参照してください。

{% endnote %}

pull request 内で提案された変更は、[Files changed]\(変更されたファイル\) タブで表示できます。![pull request の [Files changed]\(変更されたファイル\) タブ](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

コミットそのものを見るよりは、プルリクエストがマージされた際に提案された変更がファイルに現れるのを見ることができます。 [Files changed]\(変更されたファイル\) タブではファイルはアルファベット順に表示されます。追加したファイルは緑色になり `+` 記号が前に付きます。一方、削除したコンテンツは赤色になり、`-` 記号が前に付きます。

## diff 表示の選択肢

{% tip %}

**ヒント:** 変更のコンテキストを理解するのが難しい場合は、[Files changed]\(変更されたファイル\) タブの **[View]\(表示\)** をクリックすると、提案された変更を含むファイル全体が表示されます。

{% endtip %}

diff の見方には複数の選択肢があります。
- 統合ビューでは、更新分と既存の内容が線形ビューに一緒に表示されます。
- 分割ビューでは、古い内容が片側に、新しい内容が反対側に表示されます。
- リッチ diff ビューでは、プルリクエストがマージされたときに変更がどのように見えるかのプレビューが表示されます。
- ソースビューでは、ソース内の変更がリッチ diff ビューのフォーマットなしで表示されます。

プルリクエスト中の大きな変更をもっと正確に表示するために、空白の変更を無視するよう選択することもできます。

![Diff の表示のオプションメニュー](/assets/images/help/pull_requests/diff-settings-menu.png)

大規模なプルリクエスト中の変更のレビューを簡素化するために、選択されたファイルタイプだけを表示、CODEOWNERS であるファイルを表示、表示したことのあるファイルを非表示、または削除されたファイルを非表示にするように diff をフィルタリングできます。 詳細については、「[pull request 内のファイルをファイルの種類でフィルター処理する](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)」を参照してください。

  ![ファイルフィルタのドロップダウンメニュー](/assets/images/help/pull_requests/file-filter-menu.png)

## diffが表示されない理由
- ファイルあるいは特定のファイルタイプの合計での制限を超えた。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)に関する説明を参照してください。
- ファイルが、リポジトリの *.gitattributes* ファイルの規則と一致した (既定でファイルの表示がブロックされます)。 詳細については、「[変更したファイルの GitHub での表示方法をカスタマイズする](/articles/customizing-how-changed-files-appear-on-github)」を参照してください。

## スリードットおよびツードット Git diff での比較

`git diff` コマンドには、ツードット (`git diff A..B`) とスリードット (`git diff A...B`) という 2 つの比較方法があります。 既定では、{% data variables.product.prodname_dotcom %} に対する pull request ではスリードットの差分が表示されます。

### スリードット Git 差分の比較 

スリードット比較では、両方のブランチ (マージ ベース) の最新共通コミットとトピック ブランチの最新バージョンの差分が表示されます。

### ツードット Git 差分の比較

ツードット比較では、ベース ブランチ (`main` など) の最新状態とトピック ブランチの最新バージョンの差分が表示されます。

{% data variables.product.prodname_dotcom %} 上で、ツードット diff を比較する際に 2 つの committish のリファレンスを見たい場合には、リポジトリの [Comparing changes] ページの URL を編集できます。 詳細については、_Pro Git_ ブック サイトで [Git 用語集の「committish」](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish)を参照してください。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

ツードット diff は SHA あるいは OID (Object ID) など、2 つの Git の committish 参照を直接互いに比較します。 {% data variables.product.prodname_dotcom %} では、ツードット diff での比較中の Git の committish 参照は、同じリポジトリあるいはそのフォークにプッシュされなければなりません。

プルリクエスト中でツードット diff をシミュレートし、各ブランチの最新バージョン同士の比較を見たい場合には、ベースブランチをトピックブランチにマージできます。そうすれば、ブランチ間の最後の共通の祖先が更新されます。

変更を比較するための Git コマンドの詳細については、_Pro Git_ ブック サイトの「[git 差分オプション](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)」を参照してください。

## {% data variables.product.prodname_dotcom %} でのスリードット比較について

スリードット比較はマージ ベースと比較するため、"pull request によって何が導入されるか" に焦点を当てています。 

ツードット比較を使用したときは、トピック ブランチに変更を加えていない場合でも、ベース ブランチが更新されると差分が変化します。 また、ツードット比較はベース ブランチに焦点を当てます。 つまり、追加したものは、ベース ブランチに存在しないものとして (削除されたかのように) 表示されます。その逆も同様です。 その結果、トピック ブランチが導入する変更があいまいになります。

対照的に、スリードット比較を使用してブランチを比較すると、ベース ブランチが更新された場合、トピック ブランチの変更は常に差分に含まれます。この差分には、ブランチが分岐してからのすべての変更が表示されるためです。

### 頻繁なマージ

混乱を避けるためには、ベース ブランチ (たとえば `main`) をトピック ブランチに頻繁にマージします。 ベース ブランチをマージすることで、ツードット比較とスリードット比較で示される差分が同じになります。 できるだけ早く pull request をマージすることをお勧めします。 このために共同作成者が pull request を小さく作成することが促されます。これは一般的に推奨されます。

## 参考資料

- "[プル リクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- 「[About forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」 (フォークの概要)
