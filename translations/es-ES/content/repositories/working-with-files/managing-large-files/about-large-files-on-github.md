---
title: Acerca de los archivos grandes en GitHub
intro: '{% data variables.product.product_name %} limita el tamaño de los archivos que puedes rastrear en los repositorios regulares de Git. Aprende cómo rastrear o eliminar archivos que sobrepasan el límite.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
ms.openlocfilehash: c9910f669b13c0c2bc4a8517ac6b33476b23b475
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146331652'
---
## Acerca de los límites de tamaño en {% data variables.product.product_name %}

{% ifversion fpt or ghec %} {% data variables.product.product_name %} intenta proporcionar un abundante almacenamiento para todos los repositorios de Git, pero hay límites muy estrictos de tamaños de archivos y repositorios. Para garantizar el rendimiento y la legibilidad para nuestros usuarios, monitoreamos activamente las señales de la salud general de los repositorios. La salud de los repositorios es una función de varios factores de interacción, incluyendo el tamaño, frecuencia de confirmaciones y estructura.

### Límites de tamaño de archivo
{% endif %}

{% data variables.product.product_name %} limita el tamaño de los archivos permitidos en los repositorios. Recibirás una advertencia de Git si intentas añadir o actualizar un archivo mayor a {% data variables.large_files.warning_size %}. Los cambios aún se subirán a tu repositorio, pero puedes considerar eliminar la confirmación para minimizar el impacto en el rendimiento. Para obtener más información, consulte "[Eliminación de archivos del historial de un repositorio](#removing-files-from-a-repositorys-history)".

{% note %}

**Nota:** Si agrega un archivo a un repositorio por medio de un explorador, el archivo no puede ser mayor de {% data variables.large_files.max_github_browser_size %}. Para obtener más información, consulte "[Adición de un archivo a un repositorio](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)".

{% endnote %}

{% ifversion ghes %}By default, {% endif %}{% data variables.product.product_name %} bloquea los envíos de cambios que superan los {% data variables.large_files.max_github_size %}. {% ifversion ghes %}Sin embargo, el administrador de un sitio puede configurar un límite diferente para {% data variables.product.product_location %}.  Para obtener más información, consulte "[Configuración de límites de envío de cambios en Git](/enterprise/admin/guides/installation/setting-git-push-limits)".{% endif %}

Para rastrear archivos que sobrepasen este límite, debes utilizar {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Para obtener más información, consulte "[Acerca de {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)".

Si necesitas distribuir archivos grandes dentro de tu repositorio, puedes crear lanzamientos en {% data variables.product.product_location %} en vez de rastrear los archivos. Para obtener más información, consulte "[Distribución de archivos binarios grandes](#distributing-large-binaries)".

Git no se diseñó para manejar archivos grandes de SQL. Para compartir bases de datos grandes con otros desarrolladores, se recomienda usar [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
### Límites de tamaño de repositorio

Te recomendamos que los repositorios sean siempre pequeños, idealmente, de menos de 1 GB, y se recomienda ampliamente que sean de menos de 5GB. Los repositorios más pequeños se clonan más rápido y se puede mantenerlos mejor y trabajar en ellos más fácilmente. Si tu repositorio impacta excesivamente nuestra infraestructura, puede que recibas un mensaje de correo electrónico de {% data variables.contact.github_support %}, el cual te solicitará que tomes acciones correctivas. Intentamos ser flexibles, especialmente con proyectos grandes que tienen muchos colaboradores, y trabajaremos junto contigo para encontrar una resolución cada que sea posible. Puedes prevenir que tu repositorio impacte nuestra infraestructura si administras el tamaño de tu repositorio y su salud general con eficacia. Puede encontrar consejos y una herramienta para el análisis de repositorios en el repositorio [`github/git-sizer`](https://github.com/github/git-sizer).

Las dependencias externas pueden causar que los repositorios de Git se hagan muy grandes. Para evitar llenar un repositorio con dependencias externas, te recomendamos utilizar un administrador de paquetes. Entre los administradores de paquetes más populares para los lenguajes comunes se incluyen [Bundler](http://bundler.io/), el [Administrador de paquetes de Node](http://npmjs.org/) y [Maven](http://maven.apache.org/). Estos administradores de paquetes soportan la utilización directa de repositorios de Git para que no dependas de fuentes pre-empacadas.

Git no está diseñado para fungir como una herramienta de respaldo. Sin embargo, hay muchas soluciones diseñadas específicamente para realizar copias de seguridad, como [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) y [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

## Eliminar archivos del historial de un repositorio

{% warning %}

**Advertencia**: Estos procedimientos eliminarán archivos de manera permanente del repositorio de su equipo y de {% data variables.product.product_location %}. Si el archivo es importante, haz una copia de seguridad local en un directorio por fuera del repositorio.

{% endwarning %}

### Eliminar un archivo agregado en la confirmación más reciente no subida

Si el archivo se agregó con tu confirmación más reciente, y no lo subiste a {% data variables.product.product_location %}, puedes eliminar el archivo y modificar la confirmación:

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Para quitar el archivo, escriba `git rm --cached`:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Confirme este cambio con `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Sube tus confirmaciones a {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Eliminar un archivo que se añadió en una confirmación de cambios previa

Si añadiste un archivo en una confirmación previa, necesitas eliminarlo del historial del repositorio. Para quitar archivos del historial del repositorio, puede usar BFG Repo-Cleaner o el comando `git filter-branch`. Para obtener más información, consulte "[Eliminación de datos confidenciales de un repositorio](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".

## Distribuir binarios grandes

Si necesitas distribuir archivos grandes dentro de tu repositorio, puedes crear lanzamientos en {% data variables.product.product_location %}. Los lanzamientos te permiten empaquetar el software, notas de lanzamiento y enlaces a los archivos binarios para que otras personas puedan utilizarlos. Para obtener más información, consulte "[Acerca de las versiones](/github/administering-a-repository/about-releases)".

{% ifversion fpt or ghec %}

No limitamos el tamaño total de los archivos binarios en los lanzamientos o anchos de banda que se utilizan para entregarlos. Sin embargo, cada archivo individual debe ser menor a {% data variables.large_files.max_lfs_size %}.

{% endif %}

