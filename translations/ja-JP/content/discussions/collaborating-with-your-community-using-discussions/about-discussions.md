---
title: ディスカッションについて
intro: 'ディスカッションでは、質問、質問への回答、情報の共有、発表、{% data variables.product.product_name %} 上のプロジェクトについて会話を実施したり参加したりすることができます。'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886951'
---
## {% data variables.product.prodname_discussions %} について

{% data variables.product.prodname_discussions %} を使用すると、プロジェクトのコミュニティは、プロジェクトのリポジトリまたは Organization 内で会話を作成して参加できます。 ディスカッションにより、プロジェクトのメンテナ、コントリビューター、訪問者は、サードパーティのツールを使用せずに、一か所に集合し、次のような目標を集めて達成できます。

- お知らせや情報を共有し、フィードバックを収集し、計画を立案して、意思決定を行う
- 質問し、質問についてディスカッションを行い、回答し、ディスカッションに回答済みのマークを付ける
- 投票を作成してコミュニティの意見を評価する
- 訪問者とコントリビューターが目標、開発、管理、ワークフローについて話し合うための居心地の良い雰囲気を育む

![リポジトリの [Discussions] タブ](/assets/images/help/discussions/hero.png)

リポジトリのディスカッションを使用して、リポジトリに固有のトピックについて説明できます。 プロジェクトが複数のリポジトリにまたがる場合は、Organization のディスカッションを使用して、Organization 内の 1 つのリポジトリに固有ではないトピックについて話し合うことができます。

Issue やプルリクエストをクローズするように、ディスカッションをクローズする必要はありません。

リポジトリ管理者またはプロジェクトの保守担当者がリポジトリの {% data variables.product.prodname_discussions %} を有効にすると、リポジトリにアクセスできるすべての人がそのリポジトリのディスカッションを作成して参加できます。 Organization の所有者が Organization に対して {% data variables.product.prodname_discussions %} を有効にすると、ソース リポジトリを表示できるすべてのユーザーが Organization のディスカッションを作成できます。

リポジトリ管理者とプロジェクトメンテナは、リポジトリ内のディスカッションとディスカッションカテゴリを管理し、ディスカッションを固定してディスカッションの可視性を高めることができます。 モデレータとコラボレータは、コメントを回答としてマークしたり、ディスカッションをロックしたり、Issue をディスカッションに変換したりすることができます。 同様に、Organization のディスカッションでは、ソース リポジトリ内のユーザーのロールによって、ユーザーが Organization のディスカッションとやり取りする方法が決まります。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

ディスカッションの管理について詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions)」を参照してください。

## 投票について

投票カテゴリに投票を作成して、新しいアイデアやプロジェクトの方向性への関心を評価できます。 リポジトリへの読み取りアクセス権を持つすべてのユーザーは、投票を作成し、投票を行い、結果を表示できます。{% ifversion fpt or ghec %}サインアウトしたユーザーは、パブリック リポジトリでポーリングの結果を表示できます。{% endif %}

投票には質問と少なくとも 2 つの選択肢が必要です。 選択肢は最大 8 つまで追加でき、最大 128 文字を含めることができます。 

投票者は投票を変更できません。 投票を編集すると、既にキャストされている投票がリセットされます。

投票の作成について詳しくは、「[投票の作成](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)」を参照してください。

## ディスカッションの整理について

カテゴリとラベルを使用してディスカッションを整理できます。

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

質問/回答形式のディスカッションの場合、ディスカッション内の個々のコメントをディスカッションの回答としてマークできます。 {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

詳細については、「[ディスカッションのカテゴリの管理](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)」を参照してください。

{% data reusables.discussions.you-can-label-discussions %}

## Best practices for {% data variables.product.prodname_discussions %}

コミュニティのメンバーまたはメンテナとして、コミュニティに影響を与える質問をしたり、情報について話し合ったりするためのディスカッションを開始します。 詳細については、「[ディスカッションを使用して保守担当者とコラボレーションする](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)」を参照してください。

ディスカッションに参加して、質問をしたり、回答したり、フィードバックを提供したり、プロジェクトのコミュニティに参加したりすることができます。 詳細については、「[ディスカッションに参加する](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)」を参照してください。

コミュニティのメンバー間の重要、有用、または模範的な会話を含むディスカッションにスポットライトを当てることができます。 詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)」を参照してください。

{% data reusables.discussions.you-can-convert-an-issue %} 詳細については、「[ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)」を参照してください。

## フィードバックを送る

{% data variables.product.prodname_discussions %} に関するフィードバックを {% data variables.product.company_short %} と共有できます。 会話に参加するには、[{% data variables.product.prodname_github_community %} のディスカッション](https://github.com/orgs/community/discussions/categories/discussions)を参照してください。

## 参考資料

- 「[{% data variables.product.prodname_dotcom %} での書き込みと書式設定について](/github/writing-on-github/about-writing-and-formatting-on-github)」
- 「[ディスカッションを検索する](/search-github/searching-on-github/searching-discussions)」
- 「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」
- 「[コメントおよび会話をモデレートする](/communities/moderating-comments-and-conversations)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」{% endif %}
