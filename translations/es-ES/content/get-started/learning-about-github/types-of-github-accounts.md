---
title: Tipos de cuentas de GitHub
intro: 'Tu cuenta de usuario es tu identidad en {% data variables.product.product_location %}. Your user account can be a member of any number of organizations.{% ifversion fpt or ghec %} Organizations can belong to enterprise accounts.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

{% ifversion fpt or ghec %}
Para encontrar un listado completo de características para cada producto de {% data variables.product.product_name %}, consulta la sección "[Productos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)".
{% endif %}

## Cuentas de usuarios personales

Toda persona que utilice {% data variables.product.product_location %} tiene su propia cuenta de usuario, la cual incluye:

{% ifversion fpt or ghec %}

- Repositorios públicos y privados ilimitados con {% data variables.product.prodname_free_user %}
- Colaboradores ilimitados con {% data variables.product.prodname_free_user %}
- Funciones adicionales para los repositorios privados con {% data variables.product.prodname_pro %}
- Capacidad para [invitar colaboradores del repositorio](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Repositorios y [colaboradores](/articles/permission-levels-for-a-user-account-repository) ilimitados
- Capacidad para [agregar colaboradores del repositorio ilimitados](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% ifversion fpt or ghec %}

{% tip %}

**Tips**:

- Puedes utilizar una cuenta para múltiples propósitos, como uso personal y uso comercial. No recomendamos crear más de una cuenta. Para obtener más información, consulta "[Fusionar múltiples cuentas de usuario](/articles/merging-multiple-user-accounts)".
- Las cuentas de usuario están pensadas para seres humanos, pero le puedes dar una a un robot, como un bot de integración continua, si resulta necesario.

{% endtip %}

{% else %}

{% tip %}

**Sugerencia**: Las cuentas de usuario están pensadas para seres humanos, pero le puedes dar una a un robot, como un bot de integración continua, si resulta necesario.

{% endtip %}

{% endif %}

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_emus %}

Con las {% data variables.product.prodname_emus %}, en vez de utilizar tu cuenta personal, los miembros de una {% data variables.product.prodname_emu_enterprise %} son cuentas aprovisionadas utilizando el proveedor de identidad empresarial (IdP). Los {% data variables.product.prodname_managed_users_caps %} se autentican utilizando su IdP en vez de un nombre de usuario y contraseña de {% data variables.product.prodname_dotcom_the_website %}.

Los {% data variables.product.prodname_managed_users_caps %} solo pueden interactuar con usuarios, repositorios y organizaciones que son parte de la empresa. Los {% data variables.product.prodname_managed_users_caps %} tienen acceso de solo lectura para el resto del {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
{% endif %}

## Cuentas de organización

Las organizaciones son cuentas compartidas donde grupos de personas pueden colaborar en muchos proyectos a la vez. Los propietarios y los administradores pueden administrar el acceso de los miembros a los datos y los proyectos de la organización con características administrativas y de seguridad sofisticadas.

{% data reusables.organizations.organizations_include %}

{% ifversion fpt or ghec %}

## Cuentas de empresa

Con las cuentas de empresa, puedes administrar de forma centralizada la política y la facturación de múltiples {% data variables.product.prodname_dotcom_the_website %} organizaciones. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## Leer más

{% ifversion fpt or ghec %}- "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)"
- "Productos de [{% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- "[Crear una cuenta de organización nueva](/articles/creating-a-new-organization-account)"
