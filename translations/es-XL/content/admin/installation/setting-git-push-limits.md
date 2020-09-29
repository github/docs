---
title: Configurar límites Git push
intro: Puedes imponer el tamaño máximo de objetos de Git en un repositorio.
redirect_from:
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/installation/setting-git-push-limits
versions:
  enterprise-server: '*'
---

Puedes configurar un límite de tamaño para los archivos en los repositorios de tu instancia para mantener un tamaño fácil de administrar en los mismos y prevenir los problemas de rendimiento.

Cuando impones límites de carga a los repositorios, la configuración predeterminada no permite a los usuarios añadir o actualizar archivos mayores a 100 MB.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Nota:** únicamente los archivos mayores a {% data variables.large_files.warning_size %} se revisarán frente al límite de subida de Git. Si debes establecer un límite de subida menor, contacta a {% data variables.contact.contact_ent_support %} para obtener ayuda.

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Dentro de "Repository upload limit (Límite de subida del repositorio)", utiliza el menú desplegable y haz clic en un tamaño máximo de objeto. ![Menú desplegable con opciones de tamaño máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, para imponer un límite máximo de carga en todos los repositorios de {% data variables.product.product_location_enterprise %}, selecciona **Imponer en todos los repositorios** ![Opción para imponer tamaño máximo de objetos en todos los repositorios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)
