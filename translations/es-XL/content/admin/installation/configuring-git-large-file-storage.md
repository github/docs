---
title: Configurar el almacenamiento de archivos Git de gran tamaño
intro: 'Una vez que {[{% data variables.large_files.product_name_short %} está instalado], (/articles/installing-git-large-file-storage/), deberás asociarlo con un archivo de gran tamaño en tu repositorio.'
redirect_from:
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/installation/configuring-git-large-file-storage
versions:
  enterprise-server: '*'
---

### Acerca de {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Puedes usar {% data variables.large_files.product_name_long %} con un repositorio único, con todos tus repositorios personales o de la organización, o con todos los repositorios de {% data variables.product.product_location_enterprise %}. Antes de poder habilitar {% data variables.large_files.product_name_short %} para repositorios u organizaciones específicas, debes habilitar {% data variables.large_files.product_name_short %} para tu aparato.

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

Para obtener más información, consulta "[Acerca de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)", "[Control de versiones de archivos grandes](/enterprise/user/articles/versioning-large-files/)," y el sitio del proyecto [{% data variables.large_files.product_name_long %} ](https://git-lfs.github.com/).

### Configurar {% data variables.large_files.product_name_long %} para tu aparato

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Dentro del "acceso de {% data variables.large_files.product_name_short %}", usa el menú desplegable y haz clic en **Enabled (Habilitado)** o **Disabled (Inhabilitado)**. ![Acceso a LFS de Git](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

### Configurar {% data variables.large_files.product_name_long %} para un repositorio individual

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

### Configurar {% data variables.large_files.product_name_long %} para cada repositorio que pertenezca a una cuenta de usuario u organización

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}
