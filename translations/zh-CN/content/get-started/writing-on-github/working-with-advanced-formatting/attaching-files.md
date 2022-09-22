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

To attach a file to an issue or pull request conversation, drag and drop it into the comment box. Alternatively, you can click the bar at the bottom of the comment box to browse, select, and add a file from your computer.

![Select attachments from computer](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** In many browsers, you can copy-and-paste images directly into the box.

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% ifversion fpt or ghec %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% elsif ghes %}
- 100MB for videos{% endif %}
- 25MB for all other files

We support these files:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
{%- ifversion svg-support %}
* SVG (*.svg*)
{%- endif %}
* Log files (*.log*)
* Microsoft Word (*.docx*), Powerpoint (*.pptx*), and Excel (*.xlsx*) documents
* Text files (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*){% ifversion fpt or ghec or ghes %}
* Video (*.mp4*, *.mov*){% endif %}

{% ifversion fpt or ghec or ghes %}{% note %}

**Note:** Video codec compatibility is browser specific, and it's possible that a video you upload to one browser is not viewable on another browser. At the moment we recommend using h.264 for greatest compatibility.

{% endnote %}{% endif %}

![Attachments animated GIF](/assets/images/help/pull_requests/dragging_images.gif)
