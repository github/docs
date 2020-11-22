---
title: Team ディスカッションについて
intro: 'Team は、Organization 内の Team のページ内のディスカッションポストにおける好きな話題について、計画をしたり、更新をしたり、議論をしたりできます。'
redirect_from:
  - /articles/about-team-discussions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.team-discussions-purpose %}

Organization のメンバーは、誰でも Team のページにポストしたり、パブリックなディスカッションに参加したりできます。 {% data reusables.organizations.team-discussions-permissions %}

![パブリックおよびプライベートのディスカッションを持つ Team ページのディスカッションタブ](/assets/images/help/organizations/team-page-discussions-tab.png)

Team のディスカッションにリンクを張って、別のところから参照できます。 重要なポストは Team のページにピン止めして、後で簡単に参照できます。 詳しい情報については[Team のディスカッションのピン止め](/articles/pinning-a-team-discussion)を参照してください。

![ピン止めされたディスカッションを持つ、Team ページの [Pinned] ディスカッションタブ](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %}オーナーは Organization 全体にわたって Team ディスカッションを無効化できます。 詳しい情報については [Organization の Team ディスカッションの無効化](/articles/disabling-team-discussions-for-your-organization)を参照してください。

### Team ディスカッションの通知

Team のページのパブリックなディスカッションに誰かがポストしたり返信したりしたとき、その Team のメンバーや子チームのメンバーは、メールあるいは Web 通知を受け取ります。 誰かが Team のページ上のプライベートなディスカッションにポストあるいは返信した場合は、その Team のメンバーだけが通知を受け取ります。

{% tip %}

**ヒント:** 通知の設定によって、更新はメール、{% data variables.product.product_name %}上の Web 通知、あるいはその両方で受け取ることになります。 For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications)" and "[About web notifications](/github/receiving-notifications-about-activity-on-github/about-web-notifications){% endif %}."

{% endtip %}

デフォルトでは、ユーザ名が Team のディスカッション内でメンションされると、ユーザ名をメンションしたポストと、そのポストに対する返信についての通知を受けることになります。 また、デフォルトでは、ポストに返信した場合、そのポストに対する他の返信についても通知を受け取ることになります。

Team のディスカッションに対する通知をオフにするには、特定のディスカッションのポストのサブスクライブを解除するか、Watch の解除あるいは特定の Team のディスカッションを完全に無視するよう通知設定を変更できます。 Team のディスカッションの Watch を解除している場合でも、特定のディスカッションのポストについての通知をサブスクライブすることはできます。

For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Subscribing to and unsubscribing from notifications](/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications){% endif %}" and "[Nested teams](/articles/about-teams/#nested-teams)."

### 参考リンク

- [{% data variables.product.prodname_dotcom %}での会話について](/articles/about-conversations-on-github)
- [Team について](/articles/about-teams)
- [Team ディスカッションの作成](/articles/creating-a-team-discussion)
- [Team ディスカッションの編集または削除](/articles/editing-or-deleting-a-team-discussion)
