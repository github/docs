---
title: Acerca de la configuración empresarial
intro: 'Puedes utilizar el panel de administrador de sitio{% if enterpriseServerVersions contains currentVersion %}, {% data variables.enterprise.management_console %}, y el shell administrativo (SSH) {% elsif currentVersion == "github-ae@latest" %} y la configuración empresarial o contactar a soporte{% endif %} para administrar tu empresa.'
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Para obtener más información, consulta la sección "[Panel de administrador de sitio](/admin/configuration/site-admin-dashboard)".

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Para obtener más información, consulta la sección "[Acceder a la consola de administración](/admin/configuration/accessing-the-management-console)".

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Para obtener más información, consulta la sección "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
{% endif %}

{% if currentVersion == "github-ae@latest" %}
La primera vez que accedes a tu empresa, completarás una configuración inicial para hacer que
{% data variables.product.product_name %} esté listo para utilizarse. Esta configuración inicial incluye el conectarse a tu empresa con un IdP, autenticarse con el SSO de SAML, y configurar las políticas para los repositorios y organizaciones en tu empresa. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Para que los usuarios reciban cualquier tipo de correo electrónico de {% data variables.product.product_name %} después de la configuración inicial, debes pedir a {% data variables.contact.github_support %} que configure la compatibilidad con el correo electrónico externo con tu servidor de SMTP. Para obtener más información, consulta la sección "[Configurar las notificaciones de correo electrónico](/admin/configuration/configuring-email-for-notifications)".

Posteriormente, puedes utilizar el panel de administrador de sitio y la configuración empresarial para seguir configurando tu empresa, administrar usuarios, organizaciones y repositorios, y para configurar políticas que reducen los riesgos e incrementan la calidad.

Todas las empresas se configuran con aislamiento de subdominios y compatibilidad con TLS 1.2 y superior únicamente para el tráfico cifrado.
{% endif %}

### Leer más

- "[Administrar usuarios, organizaciones y repositorios](/admin/user-management)"
- "[Configurar políticas para tu empresa](/admin/policies)"
