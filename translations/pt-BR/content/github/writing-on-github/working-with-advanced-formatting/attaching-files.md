---
title: Anexando arquivos
intro: Você pode transmitir informações anexando vários tipos de arquivo aos seus problemas e pull requests.
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

**Aviso:** Se você adicionar uma imagem {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %} ou vídeo {% endif %} a uma pull request ou comentário de problema, qualquer um poderá ver a URL anônima sem autenticação, mesmo que o pull request esteja em um repositório privado{% if enterpriseServerVersions contains currentVersion %} ou se o modo privado estiver habilitado{% endif %}. Para manter arquivos de mídia confidenciais privados, forneça-os a partir de uma rede privada ou servidor que exige autenticação. {% if currentVersion == "free-pro-team@latest" %}Para mais informações sobre URLs anônimas, consulte "[Sobre URLs anônimas](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

Para anexar um arquivo a uma conversa sobre um problema ou pull request, arraste-o e solte-o dentro da caixa de comentários. Como alternativa, você pode clicar na barra na parte inferior da caixa de comentários para navegar, selecionar e adicionar um arquivo do seu computador.

![Selecionar anexos do computador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Dica:** Em muitos navegadores, você pode copiar e colar imagens diretamente na caixa.

{% endtip %}

O tamanho máximo do arquivo é:
- 10MB de imagens e gifs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB para vídeos enviados para um repositório pertencentes a um usuário ou organização em um plano grátis do GitHub
- 100MB para vídeos enviados para um repositório pertencente a um usuário ou organização em um plano pago do GitHub{% endif %}
- 25MB para todos os outros arquivos

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
