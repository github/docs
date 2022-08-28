---
title: Attaching files
intro: You can convey information by attaching a variety of file types to your issues and pull requests.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
---
{% warning %}

**Warning:** If you add an image {% ifversion fpt or ghes > 3.1 or ghae-next %} or video {% endif %} to a pull request or issue comment, anyone can view the anonymized URL without authentication, even if the pull request is in a private repository{% ifversion ghes %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% ifversion fpt %}For more information on anonymized URLs see "[About anonymized URLs](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

To attach a file to an issue or pull request conversation, drag and drop it into the comment box. Alternatively, you can click the bar at the bottom of the comment box to browse, select, and add a file from your computer.

![Select attachments from computer](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** In many browsers, you can copy-and-paste images directly into the box.

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% ifversion fpt or ghes > 3.1 or ghae-next %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% endif %}
- 25MB for all other files

We support these files:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Log files (*.log*)
* Microsoft Word (*.docx*), Powerpoint (*.pptx*), and Excel (*.xlsx*) documents
* Text files (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*){% ifversion fpt or ghes > 3.1 or ghae-next %}
* Video (*.mp4*, *.mov*)

{% note %}

**Note:** Video codec compatibility is browser specific, and it's possible that a video you upload to one browser is not viewable on another browser. At the moment we recommend using h.264 for greatest compatibility.

{% endnote %}
{% endif %}

![Attachments animated GIF](/assets/images/help/pull_requests/dragging_images.gif)
