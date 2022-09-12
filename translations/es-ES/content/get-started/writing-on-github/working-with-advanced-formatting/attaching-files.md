---
title: Adjuntar archivos
intro: Puedes transmitir información si adjuntas varios tipos de archivo a tus propuestas y solicitudes de incorporación de cambios.
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
ms.openlocfilehash: f2fd425b1d47c1cb3c0faea646cd53a72bb61603
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419685'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

Para adjuntar un archivo a una propuesta o una conversación de una solicitud de extracción, arrástralo y suéltalo en el cuadro de comentarios. Como alternativa, puedes dar clic en la barra al final del recuadro de comentarios para buscar, seleccionar y agregar un archivo desde tu ordenador.

![Seleccionar adjuntos desde el ordenador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Sugerencia:** En muchos exploradores, puede copiar y pegar las imágenes directamente en el cuadro.

{% endtip %}

El tamaño máximo de archivo es:
- 10 MB para imágenes y gifs{% ifversion fpt or ghec %}
- 10MB para videos que se suban a un repositorio que pertenezca a un usuario u organización en un plan gratuito de GitHub
- 100 MB para vídeos subidos a un repositorio propiedad de un usuario u organización con un plan de pago de GitHub{% elsif ghes or ghae-issue-7575 %}
- 100MB para videos{% endif %}
- 25MB para el resto de los archivos

Archivos compatibles:

* PNG ( *.png*)
* GIF ( *.gif*)
* JPEG ( *.jpg*) {%- ifversion svg-support %}
* SVG ( *.svg*) {%- endif %}
* Archivos de registro ( *.log*)
* Documentos de Microsoft Word ( *.docx*), Powerpoint ( *.pptx*) y Excel ( *.xlsx*)
* Archivos de texto ( *.txt*)
* PDF ( *.pdf*)
* ZIP ( *.zip*, *.gz*){% ifversion fpt or ghec or ghes or ghae-issue-7575 %}
* Vídeo ( *.mp4*, *.mov*){% endif %}

{% ifversion fpt or ghec or ghes or ghae-issue-7575 %}{% note %}

**Nota:** La compatibilidad con los códecs de vídeo es específica del explorador y es posible que un vídeo que cargue en un explorador no se pueda ver en otro. Por el momento, recomendamos utilizar h.264 para una mejor compatibilidad.

{% endnote %}{% endif %}

![GIF animados adjuntos](/assets/images/help/pull_requests/dragging_images.gif)
