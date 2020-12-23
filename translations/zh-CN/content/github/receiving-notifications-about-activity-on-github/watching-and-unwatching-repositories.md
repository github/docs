---
title: 关注和取消关注仓库
intro: 您可以关注仓库以接收有关创建的新拉取请求和议题的通知。 如果不想再接收该特定仓库的通知，您也可以取消关注仓库。
versions:
  enterprise-server: <2.21
---

{% data reusables.notifications.auto-watch %} 更多信息请参阅“[关于通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)”。

还可以关注和取消关注仓库中的发行版。 更多信息请参阅“[关注和取消关注仓库的发行版](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)”。

### 关注您有推送权限的所有仓库

{% data reusables.notifications.access_watching %}
2. 单击 **Watching（关注）**。 ![关注的仓库列表](/assets/images/help/notifications/notifications-watching-tab.png)
3. 在页面右侧，选择 **Automatically watch（自动关注）**。 ![自动配置关注仓库的复选框](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### 关注单个仓库

{% data reusables.repositories.navigate-to-repo %}
2. 在右上角，单击“Watch（关注）”下拉菜单的 **Watching（关注）**。 ![仓库下拉菜单中的关注选项](/assets/images/help/notifications/watch-repository.png)

### 取消关注您有推送权限的所有仓库

{% data reusables.notifications.access_watching %}
2. 单击 **Watching（关注）**。 ![关注的仓库列表](/assets/images/help/notifications/notifications-watching-tab.png)
3. 在页面右侧，取消选择 **Automatically watch（自动关注）**。 ![自动配置关注仓库的复选框](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### 取消关注单个仓库

{% data reusables.repositories.navigate-to-repo %}
2. 在右上角，单击“Watch（关注）”下拉菜单的 **Unwatch（取消关注）**。 ![仓库下拉菜单中的关注选项](/assets/images/help/notifications/unwatch-repository.png)

{% note %}

**注：**您也可以选择忽略仓库。 如果忽略仓库，将不会收到任何通知。 我们不建议忽略仓库，因为这样您被@提及时将不会收到通知。 {% if currentVersion == "free-pro-team@latest" %}If you experiencing abuse and want to ignore a repository, please [contact support](/contact) so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### 延伸阅读

- "[订阅和退订通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- "[列出您关注的仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
