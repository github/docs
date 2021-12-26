---
title: Borrar los archivos en un repositorio
intro: 'Puedes borrar un archivo individual{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} o un directorio completo{% endif %} en tu repositorio de {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 'People with write permissions can delete files{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} or directories{% endif %} in a repository.'
topics:
  - Repositories
---

### Acerca del borrado de archivos{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} y directorios{% endif %}

Puedes borrar un archivo individual en tu repositorio{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} o un directorio completo, incluyendo los archivos de dicho directorio{% endif %}.

Si borras un archivo{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} o directorio{% endif %} en un repositorio en el que no tengas permisos de escritura, bifurcaremos el proyecto a tu cuenta de usuario y te ayudaremos a enviar una solicitud de cambios al repositorio original después de que confirmas tu cambio. Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."

Si el archivo{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} o directorio{% endif %} que borraste contiene datos sensibles, éstos aún estarán disponibles en el historial de Git del repositorio. Para eliminar el archivo por completo de {% data variables.product.product_name %}, debes eliminar el archivo del historial de tu repositorio. Para obtener más información, consulta "[Eliminar datos confidenciales de un repositorio](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".

### Borrar un archivo

1. Dirígete al archivo que deseas eliminar de tu repositorio.
2. En la parte superior del archivo haz clic en {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### Borrar un directorio

1. Navega hasta el directorio que deseas borrar en tu repositorio.
1. En la esquina superior derecha, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Borrar directorio**. ![Botón para borrar un directorio](/assets/images/help/repository/delete-directory-button.png)
1. Revisa los archivos que borrarás.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% endif %}
