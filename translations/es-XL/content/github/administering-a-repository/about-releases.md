---
title: Acerca de los lanzamientos
intro: 'Puedes crear un lanzamiento para empaquetar software, junto con notas de lanzamiento y enlaces a archivos binarios, para que los usen otras personas.'
redirect_from:
  - /articles/downloading-files-from-the-command-line/
  - /articles/downloading-files-with-curl/
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de los lanzamientos

![Un resumen de los lanzamientos](/assets/images/help/releases/releases-overview.png)

Los lanzamientos son iteraciones de software desplegable que puedes empaquetar y poner a disposición de una audiencia más amplia para su descarga y uso.

Los lanzamientos se basan en las [etiquetas Git](https://git-scm.com/book/en/Git-Basics-Tagging), que marcan un punto específico en el historial de tu repositorio. Una fecha de etiqueta puede ser diferente a una fecha de lanzamiento ya que ambas pueden crearse en momentos diferentes. Para obtener más información sobre cómo visualizar tus etiquetas existentes, consulta "[Ver las etiquetas y lanzamientos de tu repositorio](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

Puedes recibir notificaciones cuando se publican nuevos lanzamientos en un repositorio sin recibir notificaciones sobre otras actualizaciones del repositorio. Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Visualizar tus suscripciones](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Observar y dejar de observar los lanzamientos de un repositorio](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository){% endif %}".

Cualquiera que tenga acceso de lectura a un repositorio podrá ver y comparar los lanzamientos, pero únicamente aquellos con permisos de escritura en éste podrán administrarlos. Para obtener más información, consulta "[Administrar lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Las personas con permisos administrativos sobre un repositorio pueden elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos ZIP y en los archivos .tar que {% data variables.product.product_name %} crea para cada lanzamiento. Para obtener más información, consulta la sección "[Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Si un lanzamiento arregla una vulnerabilidad de seguridad, deberás publicar una asesoría de seguridad en tu repositorio. {% data variables.product.prodname_dotcom %} revisa cada asesoría de seguridad publicada y podria utilizarla para enviar alertas de {% data variables.product.prodname_dependabot_short %} a los repositorios afectados. Para obtener más información, consulta la sección "[Acerca de las Asesorías de Seguridad de GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)".

Puedes ver la pestaña de **Dependientes** de la gráfica de dependientes para ver qué repositorios y paquetes dependen del código en tu repositorio, y podrían entonces verse afectados con un nuevo lanzamiento. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}

También puedes usar la API de releases para recopilar información, como la cantidad de veces que las personas descargan un recurso de lanzamiento. Para obtener más información, consulta "[Releases](/v3/repos/releases/)."

{% if currentVersion == "free-pro-team@latest" %}
### Cuotas de ancho de banda y de almacenamiento

 Cada archivo incluido en un lanzamiento debe ser de menos de {% data variables.large_files.max_file_size %}. No hay un límite para el tamaño total de un lanzamiento, ni para el uso de ancho de banda.

{% endif %}
