---
title: Attaching files
intro: You can convey information by attaching a variety of file types to your issues and pull requests.
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

{% data reusables.repositories.anyone-can-view-anonymized-url %}

Issue やプルリクエストの会話にファイルを添付するには、コメントボックスにファイルをドラッグアンドドロップします。 または、コメントボックスの下部にあるバーをクリックしてコンピュータからファイルを参照、選択、追加することもできます。

![コンピュータから添付ファイルを選択する](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**ヒント:** 多くのブラウザでは、画像をコピーして直接ボックスに貼り付けることができます。

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% ifversion fpt or ghec %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% elsif ghes or ghae-issue-7575 %}
- 100MB for videos{% endif %}
- 25MB for all other files

以下のファイルがサポートされています:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
{%- ifversion svg-support %}
* SVG (*.svg*)
{%- endif %}
* ログファイル (*.log*)
* Microsoft Word (*.docx*)、Powerpoint (*.pptx*)、および Excel (*.xlsx*) 文書
* テキストファイル (*.txt*)
* PDF (*.pdf*)
* ZIP (*.zip*, *.gz*){% ifversion fpt or ghec or ghes or ghae-issue-7575 %}
* ビデオ(*.mp4*, *.mov*){% endif %}

{% ifversion fpt or ghec or ghes or ghae-issue-7575 %}{% note %}

**Note:** Video codec compatibility is browser specific, and it's possible that a video you upload to one browser is not viewable on another browser. At the moment we recommend using h.264 for greatest compatibility.

{% endnote %}{% endif %}

![添付アニメーション GIF](/assets/images/help/pull_requests/dragging_images.gif)
