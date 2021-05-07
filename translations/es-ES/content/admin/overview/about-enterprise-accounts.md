---
title: Acerca de las cuentas de empresa
intro: 'Con {% data variables.product.product_name %}, puedes utilizar una cuenta empresarial para proporcionar a los administradores una visibilidad centralizada y la administración{% if enterpriseServerVersions contains currentVersion %} del uso de licencia y su facturación{% endif %}.'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
topics:
  - Enterprise
---

### Acerca de las cuentas empresariales en {% data variables.product.product_name %}

Una cuenta empresarial te permite administrar varias organizaciones{% if enterpriseServerVersions contains currentVersion %} e instancias de {% data variables.product.prodname_ghe_server %}{% else %} eb {% data variables.product.product_name %}{% endif %}. Tu cuenta de empresa debe tener un controlador, como una organización o cuenta personal en {% data variables.product.prodname_dotcom %}. Los administradores de empresas pueden administrar los parámetros y las referencias, como:

- El acceso y administración de miembros (miembros de la organización, colaboradores externos){% if enterpriseServerVersions contains currentVersion %}
- La facturación y uso (instancias de {% data variables.product.prodname_ghe_server %}, licencias de usuario, paquetes de {% data variables.large_files.product_name_short %}){% endif %}
- La seguridad {% if enterpriseServerVersions contains currentVersion %}(inicio de sesión único, autenticación bifactorial)
- El compartir los paquetes de solicitudes y {% if enterpriseServerVersions contains currentVersion %}soporte {% endif %} con {% data variables.contact.enterprise_support %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %} Para obtener más información sobre la administración de tu suscripción a {% data variables.product.prodname_ghe_cloud %}, consulta la sección "[Visualizar la suscripción y el uso de tu cuenta empresarial](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)". {% endif %}Para obtener más información acerca de cómo administrar tu {% data variables.product.product_name %} configuración de facturación, consulta la sección "[Administrar la facturación de tu empresa](/admin/overview/managing-billing-for-your-enterprise)".

Para obtener más información acerca de la administración de usuarios, organizaciones, datos y políticas para {% data variables.product.product_location %}, consulta las secciones "[Administrar usuarios, organizaciones y repositorios](/admin/user-management)" y "[Configurar políticas para tu empresa](/admin/policies)".

Para obtener más información acerca de la administración para cuentas empresariales utilizando la API de GraphQL, consulta la sección "[Cuentas empresariales](/graphql/guides/managing-enterprise-accounts)".

{% if enterpriseServerVersions contains currentVersion %}

Para obtener más información acerca de las diferencias entre {% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %}, consulta la sección "[ productos de {% data variables.product.prodname_dotcom %}](/articles/githubs-products)". Para mejorar tu cuenta a {% data variables.product.prodname_enterprise %} o para comenzar con una cuenta empresarial, contacta a {% data variables.contact.contact_enterprise_sales %}.

### Administrar las licencias de {% data variables.product.prodname_ghe_server %} enlazadas con tu cuenta empresarial

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
