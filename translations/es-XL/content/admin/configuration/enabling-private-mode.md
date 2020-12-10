---
title: Habilitar el modo privado
intro: 'En el modo privado, {% data variables.product.prodname_ghe_server %} exige que todos los usuarios inicien sesión para acceder a la instalación.'
redirect_from:
  - /enterprise/admin/articles/private-mode/
  - /enterprise/admin/guides/installation/security/
  - /enterprise/admin/guides/installation/securing-your-instance/
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
versions:
  enterprise-server: '*'
---

Debes habilitar el modo privado si {% data variables.product.product_location_enterprise %} es de acceso público por internet. En el modo privado, los usuarios no pueden clonar repositorios en forma anónima por `git://`. Si también está habilitada la autenticación incorporada, un administrador debe invitar a los nuevos usuarios para que creen una cuenta en la instancia. Para obtener más información, consulta "[Usar la autenticación incorporada](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-built-in-authentication)."

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

Con el modo privado habilitado, puedes permitir que operaciones de Git sin autenticación (y cualquiera con acceso de red a {% data variables.product.product_location_enterprise %}) lean un código de repositorio público de tu instancia con acceso de lectura anónimo de Git habilitado. Para obtener más información, consulta "[Permitir que los administradores habiliten el acceso de lectura anónimo de Git para los repositorios públicos](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Selecciona **Private mode** (Modo privado). ![Casilla de verificación para habilitar el modo privado](/assets/images/enterprise/management-console/private-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
