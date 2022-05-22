---
title: Adjuntos de archivos en propuestas y solicitudes de extracción
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

Para adjuntar un archivo a una propuesta o una conversación de una solicitud de extracción, arrástralo y suéltalo en el cuadro de comentarios. Como alternativa, puedes dar clic en la barra al final del recuadro de comentarios para buscar, seleccionar y agregar un archivo desde tu ordenador.

![Seleccionar adjuntos desde el ordenador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** En varios buscadores, puedes copiar y pegar las imágenes directamente en el campo.

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% endif %}
- 25MB for all other files

Archivos compatibles:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Archivos de registro (*.log*)
* Documentos de Microsoft Word (*.docx*), Powerpoint (*.pptx*) y Excel (*.xlsx*)
* Archivos de texto (*.txt*)
* PDF (*.pdf*)
* ZIP (*.zip*, *.gz*){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
* Video (*.mp4*, *.mov*){% endif %}

![GIF animados adjuntos](/assets/images/help/pull_requests/dragging_images.gif)
