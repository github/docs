### 解决对话

如果您打开了拉取请求或者您对被打开拉取请求的仓库具有写入权限，您可以解决拉取请求中的对话。

要指示 **Files changed（文件已更改）**选项卡上的对话已完成，请单击 **Resolve conversation（解决对话）**。

![带解决对话按钮的拉取请求对话](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

整个对话将被折叠并标记为已解决，以便您更容易找到仍需解决的对话。

![已解决对话](/assets/images/help/pull_requests/resolved-conversation.png)

如果评论中的建议超出您的拉取请求范围，您可以打开一个新的议题，追踪反馈并链接到原始评论。 更多信息请参阅“[从评论打开议题](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
#### 发现和导航对话

您可以使用显示于 **Files Changed（更改的文件）**顶部的 **Conversations（对话）**菜单发现和导航到拉取请求中的所有对话。

从此视图中，您可以看到哪些对话未解决、已解决和过时。 这使得很容易发现和解决对话。

![显示对话菜单](/assets/images/help/pull_requests/conversations-menu.png)
{% endif %}
