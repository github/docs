---
title: Adjuntar archivos
intro: Puedes transmitir información si adjuntas varios tipos de archivo a tus propuestas y solicitudes de cambio.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

{% warning %}

**Advertencia:** Si agregas una imagen {% ifversion fpt or ghes > 3.1 or ghae or ghec %} o video {% endif %} a un comentario de alguna propuesta o solicitud de cambios, cualquiera podrá ver la URL anonimizada sin autenticación, aún si la solicitud de cambios está en un repositorio privado{% ifversion ghes %}, o si se habilita el modo privado{% endif %}. Para mantener privados archivos de medios sensibles, estos se deben servir desde una red o servidor privados que requieran autenticación. {% ifversion fpt or ghec %}Para obtener más información sobre las URL anonimizadas, consulta la sección "[Acerca de las URL anonimizadas](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

Para adjuntar un archivo a una propuesta o una conversación de una solicitud de extracción, arrástralo y suéltalo en el cuadro de comentarios. Como alternativa, puedes dar clic en la barra al final del recuadro de comentarios para buscar, seleccionar y agregar un archivo desde tu ordenador.

![Seleccionar adjuntos desde el ordenador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** En varios buscadores, puedes copiar y pegar las imágenes directamente en el campo.

{% endtip %}

El tamaño máximo de archivo es:
- 10MB de imágenes y gifs{% ifversion fpt or ghec %}
- 10MB para videos que se suban a un repositorio que pertenezca a un usuario u organización en un plan gratuito de GitHub
- 100MB para videos que se suban a los repositorios que pertenezcan a un usuario u organización de un plan de pago de GitHub{% elsif fpt or ghes > 3.1 or ghae %}
- 100MB para videos{% endif %}
- 25MB para el resto de los archivos

Archivos compatibles:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
{%- if svg-support %}
* SVG (*.svg*)
{%- endif %}
* Archivos de registro (*.log*)
* Documentos de Microsoft Word (*.docx*), Powerpoint (*.pptx*) y Excel (*.xlsx*)
* Archivos de texto (*.txt*)
* PDF (*.pdf*)
* ZIP (*.zip*, *.gz*){% ifversion fpt or ghes > 3.1 or ghae or ghec %}
* Video (*.mp4*, *.mov*)

{% note %}

**Nota:** La compatibilidad con los codecs de video es específica del buscador y es posible que un video que cargues en uno de los buscadores no se pueda ver en otro de ellos. Por el momento, recomendamos utilizar h.264 para una mejor compatibilidad.

{% endnote %}
{% endif %}

![GIF animados adjuntos](/assets/images/help/pull_requests/dragging_images.gif)
