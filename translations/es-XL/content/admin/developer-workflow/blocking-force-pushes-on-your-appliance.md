---
title: Bloquear empujes forzados en tu aparato
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
intro: 'Cualquier administrador del sitio puede bloquear todos los empujes forzados (`git push --force`) en un aparato {% data variables.product.prodname_ghe_server %}'
versions:
  enterprise-server: '*'
---

Cada repositorio hereda una configuración de empuje forzado por defecto desde la configuración de la cuenta del usuario o la organización a la que pertenece. Del mismo modo, cada organización y cuenta del usuario hereda una configuración de empuje forzado por defecto desde la configuración de empuje forzado para todo el aparato. Si cambias la configuración del empuje forzado para el aparato, cambiará para todos los repositorios que son propiedad de cualquier usuario u organización.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Debajo de "Force pushes" (Empujes forzados), usa el menú desplegable y haz clic en **Allow** (Permitir), **Block** (Bloquear) o **Block to the default branch** (Bloquear en la rama predeterminada). ![Forzar empujes desplegables](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Opcionalmente, selecciona **Enforce on all repositories** (Implementar en todos los repositorios) que sobrescribirán las configuraciones a nivel de la organización y del repositorio para los empujes forzados.

### Leer más

- [Bloquear fuerzas de empuje en los repositorios que son propiedad de una cuenta de usuario u organización](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)"
- [Bloquear fuerzas de empuje en un repositorio](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)"
