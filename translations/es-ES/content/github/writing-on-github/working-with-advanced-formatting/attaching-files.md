---
title: Adjuntar archivos
intro: Puedes transmitir información si adjuntas varios tipos de archivo a tus propuestas y solicitudes de cambio.
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

**Advertencia:** Si agregas una imagen {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %} o video {% endif %} a un comentario de alguna propuesta o solicitud de cambios, cualquiera podrá ver la URL anonimizada sin autenticación, aún si la solicitud de cambios está en un repositorio privado{% if enterpriseServerVersions contains currentVersion %}, o si se habilita el modo privado{% endif %}. Para mantener privados archivos de medios sensibles, estos se deben servir desde una red o servidor privados que requieran autenticación. {% if currentVersion == "free-pro-team@latest" %}Para obtener más información sobre las URL anonimizadas, consulta la sección "[Acerca de las URL anonimizadas](/github/authenticating-to-github/about-anonymized-urls)".{% endif %}

{% endwarning %}

Para adjuntar un archivo a una propuesta o una conversación de una solicitud de extracción, arrástralo y suéltalo en el cuadro de comentarios. Como alternativa, puedes dar clic en la barra al final del recuadro de comentarios para buscar, seleccionar y agregar un archivo desde tu ordenador.

![Seleccionar adjuntos desde el ordenador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** En varios buscadores, puedes copiar y pegar las imágenes directamente en el campo.

{% endtip %}

El tamaño máximo de archivo es:
- 10MB para imágenes y gifs{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
- 10MB para videos que se suban a un repositorio que pertenezca a un usuario u organización en un plan gratuito de GitHub
- 100MB para videos que se suban a los repositorios que pertenezcan a un usuario u organización de un plan de pago de GitHub{% endif %}
- 25MB para el resto de los archivos

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
