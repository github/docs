---
title: 通知のサブスクライブとサブスクライブ解除
intro: リポジトリを Watch していない場合や、Conversation が行われている Team のメンバーでない場合でも、Issue やプルリクエスト、Team ディスカッションの個別の Conversation にサブスクライブできます。 Conversation に関心がなくなった場合は、サブスクライブ解除や受信する通知のカスタマイズができます。
versions:
  enterprise-server: <2.21
---

### Issue またはプルリクエストの通知設定を管理する

{% if currentVersion ver_lt "enterprise-server@2.18" %}Issue またはプルリクエストの Conversation にサブスクライブしている場合、Conversation に参加していなくても、Conversation が更新されるたびに通知を受信します。

Issue またはプルリクエストの Conversation をサブスクライブ解除した場合、その Conversation についての通知を受けることはなくなります。 あなたやメンバーになっている Team が、Conversation で @メンションされた場合は、通知の受信が再開されます。 @メンションの詳しい情報については、「[基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)」を参照してください。{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. サブスクライブの設定を行う Issue またはプルリクエストを選択します。
{% if currentVersion ver_gt "enterprise-server@2.17" %}
4. 右サイドバーで [**Subscribe**] または [**Unsubscribe**] をクリックします。 ![Conversation サブスクライブボタン](/assets/images/help/notifications/subscribe_button_with_gear.png)
5. 通知をカスタマイズするには {% octicon "gear" aria-label="The gear icon" %} をクリックします。 ![Conversation サブスクライブの隣にある歯車ボタン](/assets/images/help/notifications/subscribe_button_with_gear_chosen.png)
6. この Conversation で受信したいタイプの通知を選択して、[**Save**] をクリックします。 ![Conversationサブスクライブのオプションリスト](/assets/images/help/notifications/subscribe_options.png)
{% else %}
4. Conversation のサブスクライブまたはサブスクライブ解除を行うには、右サイドバーで [**Subscribe**] または [**Unsubscribe**] をクリックします。 ![Conversation サブスクライブボタン](/assets/images/help/notifications/subscribe_button.png)
{% endif %}
You can see a list of all the issues and pull requests you're subscribed to. 詳細は「[サブスクライブしている Issue とプルリクエストをリストする](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-issues-and-pull-requests-youre-subscribed-to)」を参照してください。

### Team ディスカッションをサブスクライブする

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. Team ページ上で、サブスクライブしたいディスカッションを見つけます。
6. ディスカッションの右上にある {% octicon "unmute" aria-label="The subscribe symbol" %} をクリックして、ディスカッションをサブスクライブします。 ![Team ディスカッション サブスクライブボタン](/assets/images/help/notifications/team-discussion-subscribe-button.png)

### Team ディスカッションをサブスクライブ解除する

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. Team ページ上で、サブスクライブ解除したいディスカッションを見つけます。
6. ディスカッションの右上にある {% octicon "mute" aria-label="The unsubscribe symbol" %} をクリックして、ディスカッションをサブスクライブ解除します。 ![Team ディスカッション サブスクライブボタン](/assets/images/help/notifications/team-discussion-unsubscribe-button.png)

### 参考リンク

- 「[通知について](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)」
- 「[{% data variables.product.product_name %} での会話について](/articles/about-conversations-on-github)」
- [リポジトリの Watch と Watch 解除](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)

- [Watch しているリポジトリのリスト](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)
