---
title: 议题和拉取请求中的文件附件
intro: '在打开议题或更新拉取请求时，您可以使用议题附件上传提议功能的图像或漏洞的屏幕截图。'
redirect_from:
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

{% warning %}

**警告：**如果您在拉取请求或议题评论中添加了图像，则任何人都可以查看匿名图像 URL，无需身份验证，即使该拉取请求位于私有仓库中{% if enterpriseServerVersions contains currentVersion %}或者启用了私有模式{% endif %}。 要对敏感图像保密，请从需要身份验证的私有网络或服务器提供它们。 {% if currentVersion == "free-pro-team@latest" %}有关匿名 URL 的更多信息，请参阅“[关于匿名图像 URL](/articles/about-anonymized-image-urls)”。{% endif %}

{% endwarning %}

要将文件附加到议题或拉取请求对话，请将它拖放到评论框中。 或者，您也可以单击评论框底部的栏来浏览、选择和添加计算机中的文件。

![从计算机选择附件](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**提示：**在许多浏览器中，您可以将图像直接复制并粘贴到该框中。

{% endtip %}

文件大小不得超过 25MB，图像大小不得超过 10MB。
{% if currentVersion == "free-pro-team@latest" %}
如果仓库由付费 GitHub 计划的用户或组织拥有，则视频大小可达 100 MB。

{% note %}

**注意：**视频附件支持目前处于测试阶段，可能会更改。

{% endnote %}

{% endif %}

我们支持这些文件：

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* 日志文件 (*.log*)
* Microsoft Word (*.docx*)、Powerpoint (*.pptx*) 和 Excel (*.xlsx*) 文档
* 文本文件 (*.txt*)
* PDF (*.pdf*)
* ZIP（*.zip*、*.gz*）{% if currentVersion == "free-pro-team@latest" %}
* 视频（*.mp4*、*.mov*）{% endif %}

![附件动画 GIF](/assets/images/help/pull_requests/dragging_images.gif)
