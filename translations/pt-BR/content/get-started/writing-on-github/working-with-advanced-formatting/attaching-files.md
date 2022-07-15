---
title: Anexando arquivos
intro: Você pode transmitir informações anexando vários tipos de arquivo aos seus problemas e pull requests.
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

{% warning %}

**Aviso:** caso você inclua uma imagem ou vídeo para uma pull request ou comentário de problemas, qualquer pessoa poderá ver a URL anônima sem autenticação, mesmo se o pull request estiver em um repositório privado{% ifversion ghes %} ou se o modo privado estiver habilitado{% endif %}. Para manter arquivos de mídia confidenciais privados, forneça-os a partir de uma rede privada ou servidor que exige autenticação. {% ifversion fpt or ghec %}Para mais informações sobre URLs anônimas, consulte "[Sobre URLs anônimas](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

Para anexar um arquivo a uma conversa sobre um problema ou pull request, arraste-o e solte-o dentro da caixa de comentários. Como alternativa, você pode clicar na barra na parte inferior da caixa de comentários para navegar, selecionar e adicionar um arquivo do seu computador.

![Selecionar anexos do computador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Dica:** Em muitos navegadores, você pode copiar e colar imagens diretamente na caixa.

{% endtip %}

O tamanho máximo do arquivo é:
- 10MB para imagens e gifs{% ifversion fpt or ghec %}
- 10MB para vídeos enviados para um repositório pertencentes a um usuário ou organização em um plano grátis do GitHub
- 100MB para vídeos enviados para um repositório pertencente a um usuário ou organização em um plano pago do GitHub{% elsif ghes or ghae %}
- 100MB para vídeos{% endif %}
- 25MB para todos os outros arquivos

Arquivos compatíveis:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
{%- ifversion svg-support %}
* SVG (*.svg*)
{%- endif %}
* Arquivos log (*.log*)
* Documentos do Microsoft Word (*.docx*), Powerpoint (*.pptx*), e Excel (*.xlsx*)
* Arquivos de texto (*.txt*)
* PDFs (*.pdf*)
* ZIP (*.zip*, *.gz*)
* Vídeo (*.mp4*, *.mov*)

{% note %}

**Observação:** A compatibilidade do codec de vídeo é específica do navegador, e é possível que um vídeo que você suba para um navegador não possa ser visualizado em outro navegador. No momento, recomendamos o uso do h.264 para maior compatibilidade.

{% endnote %}

![Anexos GIF animados](/assets/images/help/pull_requests/dragging_images.gif)
