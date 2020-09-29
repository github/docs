---
title: Bloquear empujes forzados a los repositorios que posee una cuenta de usuario u organización
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
intro: Puedes bloquear los empujes forzados (`git push --force`) en todas las ramas o solo en las ramas por defecto de los repositorios que posee una cuenta de usuario u organización.
versions:
  enterprise-server: '*'
---

Los repositorios heredan los parámetros de los empujes forzados de la cuenta de usuario u organización a la que pertenecen. Las cuentas de usuarios y organizaciones a su vez heredan los parámetros de los empujes forzado para todo el aparato.

Puedes sustituir los parámetros predeterminados heredados al configurar los parámetros para una cuenta de usuario u organización.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. En "Parámetros predeterminados del repositorio" en la sección "Empujes forzados", selecciona
    - **Block** (Bloquear) para bloquear los empujes forzados en todas las ramas.
    - **Block to the default branch** (Bloquear en la rama por defecto) para bloquear solo los empujes forzados en la rama por defecto. ![Bloquear empujes forzados](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Opcionalmente, selecciona **Enforce on all repositories** (Implementar en todos los repositorios) para sustituir los parámetros específicos del repositorio. Ten en cuenta que esto **no** sustituirá una política en todo el aparato. ![Block force pushes](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)El cambio entra en vigencia inmediatamente. Si cambias de opinión en otro momento, puedes volver a permitir los empujes forzados.

### Leer más

- [Bloquear fuerzas de empuje en un repositorio](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)"
- ["Bloquear empujes forzados en tu aparato](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)"
