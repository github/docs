---
title: 议题和拉取请求中的文件附件
intro: You can convey information by attaching a variety of file types to your issues and pull requests.
redirect_from:
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% warning %}

**Warning:** If you add an image {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %} or video {% endif %} to a pull request or issue comment, anyone can view the anonymized URL without authentication, even if the pull request is in a private repository{% if enterpriseServerVersions contains currentVersion %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% if currentVersion == "free-pro-team@latest" %}For more information on anonymized URLs see "[About anonymized URLs](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

要将文件附加到议题或拉取请求对话，请将它拖放到评论框中。 或者，您也可以单击评论框底部的栏来浏览、选择和添加计算机中的文件。

![从计算机选择附件](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**提示：**在许多浏览器中，您可以将图像直接复制并粘贴到该框中。

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% endif %}
- 25MB for all other files

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
