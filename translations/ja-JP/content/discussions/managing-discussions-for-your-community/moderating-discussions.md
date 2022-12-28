---
title: ディスカッションをモデレートする
intro: 'コメントを回答としてマークする、ディスカッションをロックまたはロック解除する、Issue をディスカッションに変換する、{% ifversion fpt or ghec %}コミュニティの行動規範{% elsif ghes > 3.5 %}Organization のコントリビューション ガイドライン{% endif %}に合わないコメント、ディスカッション、カテゴリの編集または削除を行うことで、健全なコラボレーションを促進することができます。'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 4d09537a3c38d2eb9ac2650c48f2c44c1b0cbd95
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164474'
---
## ディスカッションのモデレートについて

{% data reusables.discussions.about-discussions %} リポジトリのトリアージ権限をお持ちの場合は、コメントを回答としてマークし、コミュニティに有益ではなくなった、または損害を与えているディスカッションをロックし、アイデアがまだ開発の初期段階にあるときに Issue をディスカッションに変換することで、リポジトリのディスカッションをモデレートするのに役立ちます。 同様に、Organization ディスカッションのソースリポジトリのトリアージ許可がある場合、その Organization のディスカッションをモデレートできます。

## コメントを回答としてマークする

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## ディスカッションをロックする

会話全体が建設的でない場合や、コミュニティの行動規範または {% data variables.product.prodname_dotcom %} の[コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines)に違反している場合は、会話をロックするのが適切です。 会話をロックして、コミュニティへのお知らせとして使用するディスカッションへのコメントを防ぐこともできます。 会話をロックすると、リポジトリ (Organization ディスカッションのリースリポジトリ) への書き込み許可のあるユーザーは、ディスカッションで引き続きコメントできます。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. ディスカッションのリストで、ロックするディスカッションをクリックします。
  ![ディスカッションのロック](/assets/images/help/discussions/unanswered-discussion.png)
1. ディスカッションの右余白で、 **[会話のロック]** をクリックします。
1. 会話のロックに関する情報を読み、 **[このディスカッションでの会話をロック]** をクリックします。
1. 会話のロックを解除する準備ができたら、 **[会話のロック解除]** をクリックし、 **[このディスカッションでの会話のロック解除]** をクリックします。

## Issue をディスカッションに変換する

Issue をディスカッションに変換すると、その Issue のコンテンツを使用してディスカッションが自動的に作成されます。 リポジトリ (Organization ディスカッションのリースリポジトリ) への書き込み許可のあるユーザーは、ラベルに基づき、issue を一括変換できます。 詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions)」を参照してください。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. Issue のリストで、変換する Issue をクリックします。
1. Issue の右余白にある **[ディスカッションに変換]** をクリックします。
1. **[カテゴリの選択]** ドロップダウン メニューを選択し、ディスカッションのカテゴリをクリックします。
1. **[わかりました、この Issue をディスカッションに変換します]** をクリックします。

{% ifversion discussions-hide-comments-on-block %}
## Organization からのユーザのブロック

組織の所有者とモデレーターは、ユーザーのコメントがコミュニティの行動規範に従っていない場合、そのユーザーを組織からブロックできます。 ブロックしたユーザーは、ディスカッションにコメントできなくなります。 また、組織内であるユーザーが行ったすべてのコメントを非表示にすることもできます。 詳細については、「[Organization からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照してください。

{% data reusables.organizations.blocking-a-user %} {% endif %}
