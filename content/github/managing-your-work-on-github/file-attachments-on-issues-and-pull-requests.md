---
title: File attachments on issues and pull requests
intro: 'When you open an issue or update a pull request, you can use issue attachments to upload a variety of files.'
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

**Warning:** If you add an image {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1 or currentVersion == "github-ae@next" %} or video {% endif %} to a pull request or issue comment, anyone can view the anonymized URL without authentication, even if the pull request is in a private repository{% if enterpriseServerVersions contains currentVersion %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% if currentVersion == "free-pro-team@latest" %}For more information on anonymized URLs see "[About anonymized URLs](/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

To attach a file to an issue or pull request conversation, drag and drop it into the comment box. Alternatively, you can click the bar at the bottom of the comment box to browse, select, and add a file from your computer.

![Select attachments from computer](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** In many browsers, you can copy-and-paste images directly into the box.

{% endtip %}

The maximum size for files is 25MB and the maximum size for images is 10MB.  
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1 or currentVersion == "github-ae@next" %}
Videos can be up to 100 MB in size if the repository is owned by a user or organization on a paid GitHub plan, otherwise the maximum size is 10MB.

{% endif %}

We support these files:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Log files (*.log*)
* Microsoft Word (*.docx*), Powerpoint (*.pptx*), and Excel (*.xlsx*) documents
* Text files (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
* Video (*.mp4*, *.mov*){% endif %}

![Attachments animated GIF](/assets/images/help/pull_requests/dragging_images.gif)
