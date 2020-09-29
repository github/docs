---
title: Reconstruir datos de contribuciones
intro: Es posible que necesites reconstruir los datos de contribuciones para vincular las confirmaciones de cambios a una cuenta de usuario.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data/
  - /enterprise/admin/user-management/rebuilding-contributions-data
versions:
  enterprise-server: '*'
---

Siempre que se sube una confirmación de cambios a {% data variables.product.prodname_enterprise %}, se vincula a una cuenta de usuario, si ambas están asociadas con la misma dirección de correo electrónico. Sin embargo, las confirmaciones de cambio existentes *no* se vinculan de forma retroactiva cuando un usuario registra una dirección de correo electrónico nueva o crea una cuenta nueva.

1. Visita la página de perfil de usuario.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En el lado izquierdo de la página, haz clic en **Administrar**. ![Pestaña Administrar](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. En **Datos de contribuciones**, haz clic en **Reconstruir**. ![Botón Reconstruir](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} ahora iniciará trabajos en segundo plano para volver a vincular las confirmaciones de cambios con esa cuenta de usuario.  ![Trabajos de reconstrucción en cola](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
