---
title: Administrar los objetos de LFS de Git en los archivos de tu repositorio
shortTitle: 'Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos'
intro: 'Puedes elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos de código fuente, tales como los archivos ZIP y .tar, que {% data variables.product.product_name %} crea para tu repositorio.'
permissions: 'Las personas con permisos administrativos en un repositorio pueden administrar si los objetos de {% data variables.large_files.product_name_short %} se incluirán en los archivos de dicho repositorio.'
versions:
  free-pro-team: '*'
  enterprise-server: '>3.0'
  github-ae: '*'
---

### Acerca de los objetos de {% data variables.large_files.product_name_short %} en los archivos

{% data variables.product.product_name %} crea archivos de código fuente para tu repositorio en forma de archivos ZIP y .tar. Las personas pueden descargar estos archivos en la página principal de tu repositorio o en forma de activos del lanzamiento. Predeterminadamente, los objetos de {% data variables.large_files.product_name_short %} no se incluyen en estos archivos, únicamente los archivos de puntero a estos objetos. Para mejorar la usabilidad de los archivos para tu repositorio, puedes elegir incluir los objetos de {% data variables.large_files.product_name_short %} en su lugar.

{% if currentVersion == "free-pro-team@latest" %}
Si eliges incluir
objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio, cada descarga de dichos archivos contrará contra el uso de ancho de banda de tu cuenta. Cada cuenta recibirá una {% data variables.large_files.initial_bandwidth_quota %} mensual de ancho de banda gratuito, y podrás pagar por cualquier uso adicional. Para obtener más información, consulta las secciones "[Acerca del uso del ancho de banda y del almacenamiento](/github/managing-large-files/about-storage-and-bandwidth-usage)" y "[Administrar la facturación para {% data variables.large_files.product_name_long %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage)".
{% endif %}

### Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Archivos", sleecciona o deselecciona **Incluir los objetos de {% data variables.large_files.product_name_short %} en los archivos**. ![Casilla para incluir los objetos de {% data variables.large_files.product_name_short %} en los archivos](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
