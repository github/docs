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
topics:
  - Community
---

{% data reusables.organizations.team-discussions-purpose %}

Organization のメンバーは、誰でも Team のページにポストしたり、パブリックなディスカッションに参加したりできます。 {% data reusables.organizations.team-discussions-permissions %}

![パブリックおよびプライベートのディスカッションを持つ Team ページのディスカッションタブ](/assets/images/help/organizations/team-page-discussions-tab.png)

Team のディスカッションにリンクを張って、別のところから参照できます。 重要なポストは Team のページにピン止めして、後で簡単に参照できます。 詳しい情報については[Team のディスカッションのピン止め](/organizations/collaborating-with-your-team/pinning-a-team-discussion)を参照してください。

![ピン止めされたディスカッションを持つ、Team ページの [Pinned] ディスカッションタブ](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %}オーナーは Organization 全体にわたって Team ディスカッションを無効化できます。 詳しい情報については [Organization の Team ディスカッションの無効化](/articles/disabling-team-discussions-for-your-organization)を参照してください。

## Team ディスカッションの通知

Team のページのパブリックなディスカッションに誰かがポストしたり返信したりしたとき、その Team のメンバーや子チームのメンバーは、メールあるいは Web 通知を受け取ります。 誰かが Team のページ上のプライベートなディスカッションにポストあるいは返信した場合は、その Team のメンバーだけが通知を受け取ります。

{% tip %}

**ヒント:** 通知の設定によって、更新はメール、{% data variables.product.product_name %}上の Web 通知、あるいはその両方で受け取ることになります。 詳しい情報については、{% ifversion fpt or ghae or ghes %}「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}「[メール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications)」および「[Web 通知について](/github/receiving-notifications-about-activity-on-github/about-web-notifications){% endif %}」を参照してください。

{% endtip %}

デフォルトでは、ユーザ名が Team のディスカッション内でメンションされると、ユーザ名をメンションしたポストと、そのポストに対する返信についての通知を受けることになります。 また、デフォルトでは、ポストに返信した場合、そのポストに対する他の返信についても通知を受け取ることになります。

Team のディスカッションに対する通知をオフにするには、特定のディスカッションのポストのサブスクライブを解除するか、Watch の解除あるいは特定の Team のディスカッションを完全に無視するよう通知設定を変更できます。 Team のディスカッションの Watch を解除している場合でも、特定のディスカッションのポストについての通知をサブスクライブすることはできます。

詳しい情報については、{% ifversion fpt or ghae or ghes %}「[サブスクリプションを表示する](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}「[通知のサブスクライブとサブスクライブ解除](/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications){% endif %}」および「[入れ子チーム](/articles/about-teams/#nested-teams)」を参照してください。

## 参考リンク

- 「[{% data variables.product.prodname_dotcom %}でのコミュニケーションのクイックスタート](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)」
- [Team について](/articles/about-teams)
- [Team ディスカッションの作成](/organizations/collaborating-with-your-team/creating-a-team-discussion)
- [Team ディスカッションの編集または削除](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)
