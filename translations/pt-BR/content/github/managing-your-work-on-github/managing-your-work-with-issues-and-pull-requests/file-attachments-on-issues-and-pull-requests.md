---
title: Anexar arquivos em problemas e pull requests
intro: You can convey information by attaching a variety of file types to your issues and pull requests.
redirect_from:
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

Para anexar um arquivo a uma conversa sobre um problema ou pull request, arraste-o e solte-o dentro da caixa de comentários. Como alternativa, você pode clicar na barra na parte inferior da caixa de comentários para navegar, selecionar e adicionar um arquivo do seu computador.

![Selecionar anexos do computador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Dica:** Em muitos navegadores, você pode copiar e colar imagens diretamente na caixa.

{% endtip %}

The maximum file size is:
- 10MB for images and gifs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB for videos uploaded to a repository owned by a user or organization on a free GitHub plan
- 100MB for videos uploaded to a repository owned by a user or organization on a paid GitHub plan{% endif %}
- 25MB for all other files

Arquivos compatíveis:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Arquivos log (*.log*)
* Documentos do Microsoft Word (*.docx*), Powerpoint (*.pptx*), e Excel (*.xlsx*)
* Arquivos de texto (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
* Vídeo (*.mp4*, *.mov*){% endif %}

![Anexos GIF animados](/assets/images/help/pull_requests/dragging_images.gif)
