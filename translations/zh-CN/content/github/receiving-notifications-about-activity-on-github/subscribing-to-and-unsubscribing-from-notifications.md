---
title: 订阅和取消订阅通知
intro: 您可以订阅议题、拉取请求和团队讨论中的单个对话，即使没有看到仓库或正在进行对话的团队成员。 如果您对对话不再感兴趣，您可以取消订阅或自定义接收的通知类型。
versions:
  enterprise-server: <2.21
---

### 管理议题或拉取请求的通知设置

{% if currentVersion ver_lt "enterprise-server@2.18" %}如果您在议题或拉取请求中订阅对话，将在每次对话更新时收到通知，即使您未参与该对话。

如果您在议题或拉取请求中取消订阅对话，您将不再收到关于该对话的通知。 如果对话中@提及您或您所属的团队，您将再次开始接收通知。 有关@提及的更多信息，请参阅“[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)”。{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 选择要订阅的议题或拉取请求。
{% if currentVersion ver_gt "enterprise-server@2.17" %}
4. 在右侧边栏中，单击 **Subscribe（订阅）**或 **Unsubscribe（取消订阅）**。 ![对话订阅按钮](/assets/images/help/notifications/subscribe_button_with_gear.png)
5. 要自定义您的通知，请单击 {% octicon "gear" aria-label="The gear icon" %}。 ![对话订阅旁边的齿轮按钮](/assets/images/help/notifications/subscribe_button_with_gear_chosen.png)
6. 选择您要为此对话接收的通知类型，然后单击 **Save（保存）**。 ![对话订阅选项列表](/assets/images/help/notifications/subscribe_options.png)
{% else %}
4. 要订阅或取消订阅对话，在右侧边栏中，单击 **Subscribe（订阅）**或 **Unsubscribe（取消订阅）**。 ![对话订阅按钮](/assets/images/help/notifications/subscribe_button.png)
{% endif %}
You can see a list of all the issues and pull requests you're subscribed to. 更多信息请参阅“[列出您订阅的议题和拉取请求](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-issues-and-pull-requests-youre-subscribed-to)”。

### 订阅团队讨论

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. 在团队页面上，找到您想要订阅的讨论。
6. 在讨论的右上角，单击 {% octicon "unmute" aria-label="The subscribe symbol" %} 以订阅该讨论。 ![团队讨论订阅按钮](/assets/images/help/notifications/team-discussion-subscribe-button.png)

### 取消订阅团队讨论

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. 在团队页面上，找到您想要取消订阅的讨论。
6. 在讨论的右上角，单击 {% octicon "mute" aria-label="The unsubscribe symbol" %} 以取消订阅该讨论。 ![团队讨论订阅按钮](/assets/images/help/notifications/team-discussion-unsubscribe-button.png)

### 延伸阅读

- "[关于通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- “[关于 {% data variables.product.product_name %} 中的对话](/articles/about-conversations-on-github)”
- "[关注和取消关注仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"

- "[列出您关注的仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
