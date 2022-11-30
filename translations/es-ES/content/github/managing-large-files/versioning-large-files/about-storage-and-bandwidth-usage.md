---
title: Acerca del uso de ancho de banda y del almacenamiento
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage/
  - /articles/billing-plans-for-git-large-file-storage/
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
versions:
  free-pro-team: '*'
---

{% data variables.large_files.product_name_short %} está disponible para cada repositorio en {% data variables.product.product_name %}, ya sea que tu cuenta u organización tenga o no una suscripción paga.

### Hacer un seguimiento del uso de ancho de banda y del almacenamiento

Cuando confirmas y subes un cambio a un archivo seguido con {% data variables.large_files.product_name_short %}, se sube una nueva versión del archivo completo y el tamaño total del archivo cuenta para el límite de almacenamiento del propietario del repositorio. Cuando descargas un archivo seguido con {% data variables.large_files.product_name_short %}, el tamaño total del archivo cuenta para el límite de ancho de banda del propietario del repositorio. Las cargas de {% data variables.large_files.product_name_short %} no cuentan para el lpimite de ancho de banda.

Por ejemplo:
- Si subes un archivo de 500 MB a {% data variables.large_files.product_name_short %}, usarás 500 MB de tu almacenamiento asignado y nada de tu ancho de banda. Si realizas un cambio de 1 byte y subes el archivo de nuevo, usarás otros 500 MB de almacenamiento y no de ancho de banda, llevando tu uso total por esas dos subidas a 1 GB de almacenamiento y cero ancho de banda.
- Si descargas un archivo de 500 MB que es seguido con LFS, usarás 500 MB del ancho de banda asignado del propietario del repositorio. Si un colaborador sube un cambio al archivo y extraes la versión nueva a tu repositorio local, usarás otros 500 MB de ancho de banda, llevando el uso total por esas dos descargas a 1 GB de ancho de banda.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
Si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluyen en los archivos de código fuente para tu repositorio, las descargas de estos archivos contarán en el uso de ancho de banda para el repositorio. Para obtener más información, consulta la sección "[Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}

{% tip %}

**Tips**:
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

### Cuota de almacenamiento

Si utilizas más de {% data variables.large_files.initial_storage_quota %} de almacenamiento sin comprar un paquete de datos, aún puedes clonar repositorios con elementos grandes, pero solo podrás descargar los archivos puntero, y no podrás subir archivos nuevos otra vez. Para obtener más información acerca de los archivos puntero, consulta la sección "[Acerca de{% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)".

### Cuota de ancho de banda

Si usas más de {% data variables.large_files.initial_bandwidth_quota %} de ancho de banda por mes sin comprar un paquete de datos, el soporte de {% data variables.large_files.product_name_short %} se desactiva en tu cuenta hasta el próximo mes.

### Leer más

- "[Ver tu uso de {% data variables.large_files.product_name_long %}](/articles/viewing-your-git-large-file-storage-usage)"
- "[Administrar la facturación para {% data variables.large_files.product_name_long %}](/articles/managing-billing-for-git-large-file-storage)"
