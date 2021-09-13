---
title: 附加文件
intro: 您可以通过将各种文件类型附加到议题和拉取请求来传达信息。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% warning %}

**警告：**如果您将图像{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}或视频{% endif %}添加到拉取请求或议题评论中，则任何人都可以在未经身份验证的情况下查看匿名 URL，即使该拉取请求在私有仓库中{% if enterpriseServerVersions contains currentVersion %}或启用了私有模式{% endif %}。 要对敏感媒体文件保密，请从需要身份验证的私有网络或服务器提供它们。 {% if currentVersion == "free-pro-team@latest" %}有关匿名 URL 的更多信息，请参阅“[关于匿名 URL](/github/authenticating-to-github/about-anonymized-urls)”。{% endif %}

{% endwarning %}

要将文件附加到议题或拉取请求对话，请将它拖放到评论框中。 或者，您也可以单击评论框底部的栏来浏览、选择和添加计算机中的文件。

![从计算机选择附件](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**提示：**在许多浏览器中，您可以将图像直接复制并粘贴到该框中。

{% endtip %}

最大文件大小为：
- 10MB，对于图像和 gif{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB，对于上传到使用免费 GitHub 计划的用户或组织所拥有仓库的视频
- 100MB，对于上传到使用付费 GitHub 计划的用户或组织所拥有仓库的视频{% endif %}
- 25MB，对于所有其他文件

我们支持这些文件：

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* 日志文件 (*.log*)
* Microsoft Word (*.docx*)、Powerpoint (*.pptx*) 和 Excel (*.xlsx*) 文档
* 文本文件 (*.txt*)
* PDF (*.pdf*)
* ZIP（*.zip*、*.gz*）{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
* 视频（*.mp4*、*.mov*）{% endif %}

![附件动画 GIF](/assets/images/help/pull_requests/dragging_images.gif)
