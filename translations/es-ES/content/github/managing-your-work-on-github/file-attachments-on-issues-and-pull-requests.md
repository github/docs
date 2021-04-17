---
title: Adjuntos de archivos en propuestas y solicitudes de extracción
intro: 'Cuando abres una propuesta o actualizas una solicitud de extracción, puedes usar los adjuntos de propuestas para cargar imágenes de las características propuestas o capturas de pantalla de errores.'
redirect_from:
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - solicitudes de extracción
---

{% warning %}

**Advertencia:** Si agregas una imagen a una solicitud de extracción o un comentario sobre una propuesta, cualquier usuario podrá ver la URL de la imagen anonimizada sin autenticación, aun si la solicitud de extracción se encuentra en un repositorio privado{% if enterpriseServerVersions contains currentVersion %} o si el modo privado se encuentra habilitado{% endif %}. Para mantener las imágenes confidenciales en privado, limítalas a una red privada o a un servidor que requiera de autenticación. {% if currentVersion == "free-pro-team@latest" %}Para obtener más información sobre las URL anonimozadas, consulta la sección "[Acerca de las URL de imagen anonimizadas](/articles/about-anonymized-image-urls)".{% endif %}

{% endwarning %}

Para adjuntar un archivo a una propuesta o una conversación de una solicitud de extracción, arrástralo y suéltalo en el cuadro de comentarios. Como alternativa, puedes dar clic en la barra al final del recuadro de comentarios para buscar, seleccionar y agregar un archivo desde tu ordenador.

![Seleccionar adjuntos desde el ordenador](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**Tip:** En varios buscadores, puedes copiar y pegar las imágenes directamente en el campo.

{% endtip %}

El tamaño máximo de los archivos es de 25 MB y el tamaño máximo de las imágenes es de 10 MB.
{% if currentVersion == "free-pro-team@latest" %}
Los videos pueden tener un tamaño de hasta 100 MB si el repositorio pertenece a un usuario u organización que tenga un plan de pago de GitHub.

{% note %}

**Nota:** La compatibilidad con adjuntos de video se encuentra actualmente en beta y está sujeto a cambios.

{% endnote %}

{% endif %}

Archivos compatibles:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* Archivos de registro (*.log*)
* Documentos de Microsoft Word (*.docx*), Powerpoint (*.pptx*) y Excel (*.xlsx*)
* Archivos de texto (*.txt*)
* PDF (*.pdf*)
* ZIP (*.zip*, *.gz*){% if currentVersion == "free-pro-team@latest" %}
* Video (*.mp4*, *.mov*){% endif %}

![GIF animados adjuntos](/assets/images/help/pull_requests/dragging_images.gif)
