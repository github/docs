---
title: Acerca de las organizaciones
intro: Las organizaciones son cuentas compartidas donde las empresas y los proyectos de código abierto pueden colaborar en muchos proyectos a la vez. Los propietarios y los administradores pueden administrar el acceso de los miembros a los datos y los proyectos de la organización con características administrativas y de seguridad sofisticadas.
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}
### Organizaciones y cuentas de empresa

Las cuentas de empresa le permiten a los propietarios administrar en forma centralizada las políticas y la facturación de varias organizaciones de {% data variables.product.prodname_dotcom_the_website %}.

Para las organizaciones que pertenecen a una cuenta de empresa, la facturación se administra en el nivel de cuenta de empresa y los parámetros de facturación no están disponibles en el nivel de organización. Los propietarios de la empresa pueden establecer políticas para todas las organizaciones en la cuenta de empresa o permitirle a los propietarios de la organización establecer las políticas en el nivel de organización. Los propietarios de la organización no pueden cambiar los parámetros implementados para tu organización en el nivel de cuenta de empresa. Si tienes consultas sobre una política o la configuración para tu organización, comunícate con el propietario de tu cuenta de empresa.

{% data reusables.gated-features.enterprise-accounts %}

{% data reusables.organizations.org-ownership-recommendation %} Para obtener más información, consulta la sección "[Mantener la continuidad de propiedad para tu organización](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)".

### Términos de servicio y protección de datos para organizaciones

Una entidad, como una empresa, una organización sin fines de lucro o un grupo, puede aceptar los Términos de servicio estándar o los Términos de servicio corporativos para su organización. Para obtener más información, consulta "[Actualizarse a los Términos de servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% data reusables.organizations.enter-data-protection-agreement %} Para obtener más información, consulta "[Ingresar el contrato de protección de datos con {% data variables.product.prodname_dotcom %} para el cumplimiento con el RGPD](/articles/entering-a-data-protection-agreement-with-github-for-gdpr-compliance)".
{% endif %}
