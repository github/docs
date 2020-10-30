---
title: Bloquear empujes forzados en un repositorio
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
intro: 'Puedes bloquear los empujes forzados (`git push --force`) en todas las ramas, o solo en la rama predeterminada, de un repositorio.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Selecciona **Block** (Bloquear) o **Block to the default branch** (Bloquear en la rama predeterminada) debajo de **Push and Pull** (Subir y extraer). ![Bloquear empujes forzados](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

El cambio entra en vigencia inmediatamente. Si cambias de opinión en otro momento, puedes volver a permitir los empujes forzados fácilmente.

## Leer más

- ["Bloquear empujes forzados en los repositorios que le pertenecen a una cuenta de usuario u organización](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)"
- ["Bloquear empujes forzados en tu aparato](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)"
