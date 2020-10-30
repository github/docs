---
title: Anexar arquivos em problemas e pull requests
intro: 'Ao abrir um problema ou atualizar uma pull request, é possível usar a publicação de anexos para fazer upload de imagens de recursos propostos ou capturas de tela de erros.'
redirect_from:
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Aviso:** caso você inclua uma imagem para uma pull request ou comentário de problemas, qualquer pessoa poderá ver a URL anônima de imagem sem autenticação, mesmo se a pull request estiver em um repositório privado{% if currentVersion != "free-pro-team@latest" %} ou se o modo privado estiver habilitado{% endif %}. Para manter imagens confidenciais privadas, use uma rede privada ou um servidor que requer autenticação. {% if currentVersion == "free-pro-team@latest" %}Para obter mais informações sobre URLs anônimas, consulte "[Sobre URLs anônimos de imagem](/articles/about-anonymized-image-urls)".{% endif %}

{% endwarning %}

Para anexar um arquivo a uma conversa sobre um problema ou pull request, arraste-o e solte-o dentro da caixa de comentários. Como alternativa, você pode clicar na barra na parte inferior da caixa de comentários para navegar, selecionar e adicionar um arquivo do seu computador.

![Selecionar anexos do computador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Dica:** se estiver usando o Chrome, também é possível copiar e colar imagens diretamente na caixa.

{% endtip %}

O tamanho máximo é de 25MB para arquivos e 10MB para imagens.

Arquivos compatíveis:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Arquivos log (*.log*)
* Documentos do Microsoft Word (*.docx*), Powerpoint (*.pptx*), e Excel (*.xlsx*)
* Arquivos de texto (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*)

![Anexos GIF animados](/assets/images/help/pull_requests/dragging_images.gif)
