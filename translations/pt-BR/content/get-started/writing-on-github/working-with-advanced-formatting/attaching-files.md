---
title: Anexando arquivos
intro: É possível transmitir informações anexando diversos tipos de arquivo a problemas e solicitações de pull.
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
ms.openlocfilehash: 28ce895a23c83f410d4755ad4036673e5c816155
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160749'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

Para anexar um arquivo a uma conversa sobre um problema ou pull request, arraste-o e solte-o dentro da caixa de comentários. Como alternativa, você pode clicar na barra na parte inferior da caixa de comentários para navegar, selecionar e adicionar um arquivo do seu computador.

![Selecionar anexos do computador](/assets/images/help/pull_requests/select-bar.png)

Quando você anexa um arquivo, ele é carregado imediatamente no {% data variables.product.product_name %} e o campo de texto é atualizado para mostrar a URL anônima do arquivo. {% ifversion fpt or ghec %}Para obter mais informações sobre as URLs anônimas, confira "[Sobre as URLs anônimas](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% tip %}

**Dica:** em muitos navegadores, você pode copiar e colar as imagens diretamente na caixa.

{% endtip %}

O tamanho máximo do arquivo é:
- 10 MB para imagens e GIFs{% ifversion fpt or ghec %}
- 10MB para vídeos enviados para um repositório pertencentes a um usuário ou organização em um plano grátis do GitHub
- 100 MB para vídeos carregados em um repositório pertencente a um usuário ou a uma organização em um plano pago do GitHub{% elsif ghes %}
- 100MB para vídeos{% endif %}
- 25MB para todos os outros arquivos

Arquivos compatíveis:

* PNG ( *.png*)
* GIF ( *.gif*)
* JPEG ( *.jpg*) {%- ifversion svg-support %}
* SVG ( *.svg*) {%- endif %}
* Arquivos de log ( *.log*)
* Documentos do Microsoft Word ( *.docx*), do PowerPoint ( *.pptx*) e Excel ( *.xlsx*)
* Arquivos de texto ( *.txt*)
* PDFs ( *.pdf*)
* ZIP ( *.zip*, *.gz*, *.tgz*){% ifversion fpt or ghec or ghes %}
* Vídeo ( *.mp4*, *.mov*, *.webm*){% endif %}

{% ifversion fpt or ghec or ghes %}{% note %}

**Observação:** a compatibilidade de codec de vídeo é específica do navegador, e é possível que um vídeo carregado em um navegador não possa ser visualizado em outro. No momento, recomendamos o uso do h.264 para maior compatibilidade.

{% endnote %}{% endif %}

![Anexos GIF animados](/assets/images/help/pull_requests/dragging_images.gif)
