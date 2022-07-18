---
title: 附加文件
intro: 您可以通过将各种文件类型附加到议题和拉取请求来传达信息。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
  - /github/writing-on-github/working-with-advanced-formatting/attaching-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% warning %}

**警告：** 如果将文件附加到拉取请求或发出注释，则任何人都可以在不进行身份验证的情况下查看匿名 URL，即使拉取请求位于私有存储库中{% ifversion ghes %}，或者启用了私有模式{% endif %}。 要对敏感媒体文件保密，请从需要身份验证的私有网络或服务器提供它们。 {% ifversion fpt or ghec %}有关匿名 URL 的更多信息，请参阅“[关于匿名 URL](/github/authenticating-to-github/about-anonymized-urls)”。{% endif %}

{% endwarning %}

要将文件附加到议题或拉取请求对话，请将它拖放到评论框中。 或者，您也可以单击评论框底部的栏来浏览、选择和添加计算机中的文件。

![从计算机选择附件](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**提示：**在许多浏览器中，您可以将图像直接复制并粘贴到该框中。

{% endtip %}

最大文件大小为：
- 10MB，对于图像和 gif{% ifversion fpt or ghec %}
- 10MB，对于上传到使用免费 GitHub 计划的用户或组织所拥有仓库的视频
- 100MB，对于上传到使用付费 GitHub 计划的用户或组织所拥有仓库的视频{% elsif ghes or ghae-issue-7575 %}
- 100MB，对于视频{% endif %}
- 25MB，对于所有其他文件

我们支持这些文件：

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
{%- ifversion svg-support %}
* SVG (*.svg*)
{%- endif %}
* 日志文件 (*.log*)
* Microsoft Word (*.docx*)、Powerpoint (*.pptx*) 和 Excel (*.xlsx*) 文档
* 文本文件 (*.txt*)
* PDF (*.pdf*)
* ZIP（*.zip*、*.gz*）{% ifversion fpt or ghec or ghes or ghae-issue-7575 %}
* 视频（*.mp4*、*.mov*）{% endif %}

{% ifversion fpt or ghec or ghes or ghae-issue-7575 %}{% note %}

**注意：** 视频编解码器兼容性是浏览器特定的，上传到一个浏览器的视频可能无法在另一个浏览器上查看。 目前，我们建议使用 h.264 实现最大兼容性。

{% endnote %}{% endif %}

![附件动画 GIF](/assets/images/help/pull_requests/dragging_images.gif)
