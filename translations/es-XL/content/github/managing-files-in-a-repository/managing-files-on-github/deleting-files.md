---
title: Eliminar archivos
intro: 'Puedes eliminar cualquier archivo dentro de tus repositorios en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% tip %}

**Sugerencia**: Si tratas de eliminar un archivo en un repositorio al cual no tienes acceso, bifurcaremos el proyecto a tu cuenta de usuario y te ayudaremos a enviar [una solicitud de extracción](/articles/about-pull-requests) al repositorio original después de confirmar tu cambio.

{% endtip %}

1. Dirígete al archivo que deseas eliminar de tu repositorio.
2. At the top of the file, click
{% octicon "trashcan" aria-label="The trashcan icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% danger %}

**Atención**: Dado que Git es un sistema de control de versiones, siempre guarda tu copia de seguridad en caso de que luego necesites recuperar el archivo. Si *realmente* necesitas eliminar **por completo** un archivo de un repositorio por algún motivo, por ejemplo, en caso de que se trate de un archivo confidencial que se confirmó por error, debes seguir los pasos en [nuestro artículo acerca de la eliminación de datos sensibles](/articles/removing-sensitive-data-from-a-repository).

{% enddanger %}
