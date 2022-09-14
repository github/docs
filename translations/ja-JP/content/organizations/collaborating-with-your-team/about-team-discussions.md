---
title: Team ディスカッションについて
intro: Team は、Organization 内の Team のページ内のディスカッションポストにおける好きな話題について、計画をしたり、更新をしたり、議論をしたりできます。
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 173a067c99ff6ab10ceb6d7f0a7ef288de58b658
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130867'
---
{% data reusables.organizations.team-discussions-purpose %}

Organization のメンバーは、誰でも Team のページにポストしたり、パブリックなディスカッションに参加したりできます。 {% data reusables.organizations.team-discussions-permissions %}

![パブリックおよびプライベートのディスカッションを持つ Team ページのディスカッションタブ](/assets/images/help/organizations/team-page-discussions-tab.png)

Team のディスカッションにリンクを張って、別のところから参照できます。 重要なポストは Team のページにピン止めして、後で簡単に参照できます。 詳細については、「[Team ディスカッションをピン止めする](/organizations/collaborating-with-your-team/pinning-a-team-discussion)」を参照してください。

![ピン止めされたディスカッションを持つ、Team ページの [Pinned] ディスカッションタブ](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %}オーナーは Organization 全体にわたって Team ディスカッションを無効化できます。 詳細については、「[Organization の Team ディスカッションを無効にする](/articles/disabling-team-discussions-for-your-organization)」を参照してください。

## Team ディスカッションの通知

Team のページのパブリックなディスカッションに誰かがポストしたり返信したりしたとき、その Team のメンバーや子チームのメンバーは、メールあるいは Web 通知を受け取ります。 誰かが Team のページ上のプライベートなディスカッションにポストあるいは返信した場合は、その Team のメンバーだけが通知を受け取ります。

{% tip %}

**ヒント:** 通知の設定によって、更新はメール、{% data variables.product.product_name %} 上の Web 通知、あるいはその両方で受け取ることになります。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」を参照してください。

{% endtip %}

デフォルトでは、ユーザ名が Team のディスカッション内でメンションされると、ユーザ名をメンションしたポストと、そのポストに対する返信についての通知を受けることになります。 また、デフォルトでは、ポストに返信した場合、そのポストに対する他の返信についても通知を受け取ることになります。

Team のディスカッションに対する通知をオフにするには、特定のディスカッションのポストのサブスクライブを解除するか、Watch の解除あるいは特定の Team のディスカッションを完全に無視するよう通知設定を変更できます。 Team のディスカッションの Watch を解除している場合でも、特定のディスカッションのポストについての通知をサブスクライブすることはできます。

詳しく、「[サブスクリプションを表示する](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)」と「[入れ子チーム](/articles/about-teams/#nested-teams)」をご覧ください。

{% ifversion fpt or ghec %}

## Organization のディスカッション

また、組織のディスカッションを使って、組織全体の会話を支援することもできます。 詳しくは、「[Organization の GitHub ディスカッションを有効または無効にする](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)」をご覧ください。

{% endif %}

## 参考資料

- 「[{% data variables.product.prodname_dotcom %} で通信するためのクイック スタート](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)」
- 「[Team について](/articles/about-teams)」
- 「[Team ディスカッションの作成](/organizations/collaborating-with-your-team/creating-a-team-discussion)」
- 「[Team ディスカッションの編集または削除](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)」
