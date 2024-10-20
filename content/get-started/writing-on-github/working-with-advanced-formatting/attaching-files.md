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
  ghec: '*'
topics:
  - Pull requests
---

{% ifversion ghes %}
{% warning %}

**Warning:** When you upload an image or video to a pull request or issue comment, or upload a file to a ticket in the {% data variables.contact.landing_page_portal %}, anyone can view the anonymized URL without authentication, even if the pull request or issue is in a private repository, or if private mode is enabled. To keep sensitive media files private, serve them from a private network or server that requires authentication.

{% endwarning %}
{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Note:** For public repositories, uploaded files can be accessed without authentication.
In the case of private and internal repositories, only people with access to the repository can view the uploaded files.

{% endnote %}

{% endif %}

To attach a file to an issue or pull request conversation, drag and drop it into the comment box. Alternatively, you can click {% ifversion attach-to-comment-icon %} {% octicon "paperclip" aria-label="Attach files" %} in the formatting bar above the comment box {% else %}the bar at the bottom of the comment box{% endif %} to browse, select, and add a file from your computer.

{% ifversion attach-to-comment-icon %}

![Screenshot of the comment box. The "Attach files" icon is outlined in orange.](/assets/images/help/issues/attach-file-icon.png)

{% else %}

![Screenshot of the comment box. The bar to attach files by dragging and dropping, selecting, or pasting is outlined in dark orange.](/assets/images/help/pull_requests/select-bar.png)

{% endif %}

When you attach a file, it is uploaded immediately to {% data variables.product.product_name %} and the text field is updated to show the anonymized URL for the file. {% ifversion fpt or ghec %}For more information on anonymized URLs see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-anonymized-urls)."{% endif %}

{% note %}

**Note:** In many browsers, you can copy-and-paste images directly into the box.

{% endnote %}

The maximum file size is:

* 10MB for images and gifs{% ifversion fpt or ghec %}
* 10MB for videos uploaded to a repository owned by a user or organization on a free {% data variables.product.prodname_dotcom %} plan
* 100MB for videos uploaded to a repository owned by a user or organization on a paid {% data variables.product.prodname_dotcom %} plan{% elsif ghes %}
* 100MB for videos{% endif %}
* 25MB for all other files

{% note %}

**Note:** To upload videos greater than 10MB to a repository owned by a user or organization on a paid {% data variables.product.prodname_dotcom %} plan, you must either be an organization member or outside collaborator, or be on a paid plan.

{% endnote %}

We support these files:

* PNG (`.png`)
* GIF (`.gif`)
* JPEG (`.jpg`, `.jpeg`)
{%- ifversion svg-support %}
* SVG (`.svg`)
{%- endif %}
* Log files (`.log`)
* Markdown files (`.md`)
* Microsoft Word (`.docx`), PowerPoint (`.pptx`), and Excel (`.xlsx`) documents
* Text files (`.txt`)
* Patch files (`.patch`)

  {% note %}

  **Note:** If you use Linux and try to upload a `.patch` file, you will receive an error message. This is a known issue.

  {% endnote %}

* PDFs (`.pdf`)
* ZIP (`.zip`, `.gz`, `.tgz`)
* Video (`.mp4`, `.mov`, `.webm`)

  {% note %}

  **Note:** Video codec compatibility is browser specific, and it's possible that a video you upload to one browser is not viewable on another browser. At the moment we recommend using H.264 for greatest compatibility.

  {% endnote %}
