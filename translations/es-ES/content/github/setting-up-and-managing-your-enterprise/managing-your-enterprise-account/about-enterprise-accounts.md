---
title: Acerca de las cuentas de empresa
intro: 'Con {% data variables.product.prodname_ghe_cloud %}, puedes crear una cuenta de empresa para activar la colaboración entre tus organizaciones, al mismo tiempo que le das a los administradores un punto único de visibilidad y administración.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---

### Acerca de las cuentas de empresa

Una cuenta empresarial te permite administrar varias organizaciones de {% data variables.product.prodname_dotcom %} e instancias de {% data variables.product.prodname_ghe_server %}. Tu cuenta de empresa debe tener un controlador, como una organización o cuenta personal en {% data variables.product.prodname_dotcom %}. Los administradores de empresas pueden administrar los parámetros y las referencias, como:

- El acceso de los miembros y la administración (miembros de la organización, colaboradores externos).
- Uso y facturación (instancias de {% data variables.product.prodname_ghe_server %}, licencias de usuario, paquetes de {% data variables.large_files.product_name_short %}{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}, uso de {% data variables.product.prodname_GH_advanced_security %}{% endif %})
- Seguridad (inicio de sesión único, autenticación de dos factores).
- Solicitudes y paquetes de soporte compartidos con {% data variables.contact.enterprise_support %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %} Para obtener más información sobre cómo administrar tu suscripción de {% data variables.product.prodname_ghe_cloud %}, consulta la sección "[Visualizar la suscripción y uso de tu cuenta empresarial](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)". Para obtener más información acerca de cómo administrar tu configuración de facturación de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Administrar la facturación de tu empresa](/admin/overview/managing-billing-for-your-enterprise)".

Para obtener más información acerca de las diferencias entre {% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %}, consulta la sección "[ productos de {% data variables.product.prodname_dotcom %}](/articles/githubs-products)". Para mejorar tu cuenta a {% data variables.product.prodname_enterprise %} o para comenzar con una cuenta empresarial, contacta a {% data variables.contact.contact_enterprise_sales %}.

Para obtener más información sobre el acceso y la administración de los miembros, consulta la sección "{% if currentVersion == "free-pro-team@latest" %}[Administrar a los usuarios en tu empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise){% elsif currentVersion == "enterprise-ae@latest" or enterpriseServerVersions contains currentVersion %}[Administrar a los usuarios, organizaciones y repositorios](/admin/user-management){% endif %}".

Para obtener más información acerca de cómo administrar las cuentas empresariales utilizando la API de GraphQL, consulta la sección "[Cuentas empresariales](/graphql/guides/managing-enterprise-accounts)".

{% if currentVersion == "free-pro-team@latest" %}

### Administrar las organizaciones vinculadas con tu cuenta de empresa

Las organizaciones son cuentas compartidas donde grupos de personas pueden colaborar en muchos proyectos a la vez. Los propietarios pueden administrar el acceso de los miembros a los datos y los proyectos de la organización con características administrativas y de seguridad sofisticadas. Para obtener más información, consulta "[Acerca de las organizaciones](/articles/about-organizations)".

Los propietarios de la empresa pueden crear organizaciones y vincularlas a la empresa. Después de añadir organizaciones a tu cuenta empresarial, podrás administrar y hacer cumplir las políticas organizacionales. Las opciones de cumplimiento específicas varían según el parámetro, generalmente, puedes elegir implementar una política única para cada organización en tu cuenta de empresa o puedes permitirle a los propietarios configurar la política en el nivel de organización.

Para obtener más información, consulta "[Administrar las organizaciones de tu cuenta de empresa](/articles/managing-organizations-in-your-enterprise-account)" y "[Configurar políticas para las organizaciones de tu cuenta de empresa](/articles/setting-policies-for-organizations-in-your-enterprise-account)".

{% endif %}

### Administrar las licencias de {% data variables.product.prodname_ghe_server %} enlazadas con tu cuenta empresarial

{% data reusables.enterprise-accounts.admin-managing-licenses %}
