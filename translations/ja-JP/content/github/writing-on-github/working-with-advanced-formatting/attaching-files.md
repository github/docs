---
title: Attaching files
intro: You can convey information by attaching a variety of file types to your issues and pull requests.
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

**Warning:** If you add an image {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %} or video {% endif %} to a pull request or issue comment, anyone can view the anonymized URL without authentication, even if the pull request is in a private repository{% if enterpriseServerVersions contains currentVersion %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% if currentVersion == "free-pro-team@latest" %}For more information on anonymized URLs see "[About anonymized URLs](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

Issue やプルリクエストの会話にファイルを添付するには、コメントボックスにファイルをドラッグアンドドロップします。 または、コメントボックスの下部にあるバーをクリックしてコンピュータからファイルを参照、選択、追加することもできます。

![コンピュータから添付ファイルを選択する](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**ヒント:** 多くのブラウザでは、画像をコピーして直接ボックスに貼り付けることができます。

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% endif %}
- 25MB for all other files

以下のファイルがサポートされています:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* ログファイル (*.log*)
* Microsoft Word (*.docx*)、Powerpoint (*.pptx*)、および Excel (*.xlsx*) 文書
* テキストファイル (*.txt*)
* PDF (*.pdf*)
* ZIP (*.zip*, *.gz*){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
* ビデオ(*.mp4*, *.mov*){% endif %}

![添付アニメーション GIF](/assets/images/help/pull_requests/dragging_images.gif)
