---
title: Anexar arquivos em problemas e pull requests
intro: 'Ao abrir um problema ou atualizar uma pull request, é possível usar a publicação de anexos para fazer upload de imagens de recursos propostos ou capturas de tela de erros.'
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

**Aviso:** caso você inclua uma imagem para uma pull request ou comentário de problemas, qualquer pessoa poderá ver a URL anônima de imagem sem autenticação, mesmo se a pull request estiver em um repositório privado{% if enterpriseServerVersions contains currentVersion %} ou se o modo privado estiver habilitado{% endif %}. Para manter imagens confidenciais privadas, use uma rede privada ou um servidor que requer autenticação. {% if currentVersion == "free-pro-team@latest" %}Para mais informações sobre URLs anônimas, consulte "[Sobre URLs de imagem anônima](/articles/about-anonymized-image-urls)".{% endif %}

{% endwarning %}

Para anexar um arquivo a uma conversa sobre um problema ou pull request, arraste-o e solte-o dentro da caixa de comentários. Como alternativa, você pode clicar na barra na parte inferior da caixa de comentários para navegar, selecionar e adicionar um arquivo do seu computador.

![Selecionar anexos do computador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Dica:** Em muitos navegadores, você pode copiar e colar imagens diretamente na caixa.

{% endtip %}

O tamanho máximo é de 25MB para arquivos e 10MB para imagens.
{% if currentVersion == "free-pro-team@latest" %}
Os vídeos podem ter até 100 MB de tamanho se o repositório pertencer a um usuário ou organização em um plano pago do GitHub.

{% note %}

**Observação:** O suporte a anexos de vídeo está atualmente em fase beta e está sujeito a alterações.

{% endnote %}

{% endif %}

Arquivos compatíveis:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Arquivos log (*.log*)
* Documentos do Microsoft Word (*.docx*), Powerpoint (*.pptx*), e Excel (*.xlsx*)
* Arquivos de texto (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*){% if currentVersion == "free-pro-team@latest" %}
* Vídeo (*.mp4*, *.mov*){% endif %}

![Anexos GIF animados](/assets/images/help/pull_requests/dragging_images.gif)
