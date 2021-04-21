---
title: Tipos de cuentas de GitHub
intro: 'Tu cuenta de usuario es tu identidad en {% data variables.product.product_location %}. Tu cuenta de usuario puede ser miembro de cualquier cantidad de organizaciones.{% if currentVersion == "free-pro-team@latest" %} Las organizaciones pueden pertenecer a cuentas empresariales.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - cuentas
  - cli
  - móvil
  - desktop
  - seguridad
---

{% if currentVersion == "free-pro-team@latest" %}
Para encontrar una lista completa de cada
producto de {% data variables.product.product_name %}, consulta la sección "[productos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)".
{% endif %}

### Cuentas de usuarios personales

Toda persona que utilice {% data variables.product.product_location %} tiene su propia cuenta de usuario, la cual incluye:

{% if currentVersion == "free-pro-team@latest" %}

- Repositorios públicos y privados ilimitados con {% data variables.product.prodname_free_user %}
- Colaboradores ilimitados con {% data variables.product.prodname_free_user %}
- Funciones adicionales para los repositorios privados con {% data variables.product.prodname_pro %}
- Capacidad para [invitar colaboradores del repositorio](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Repositorios y [colaboradores](/articles/permission-levels-for-a-user-account-repository) ilimitados
- Capacidad para [agregar colaboradores del repositorio ilimitados](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

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

### Cuentas de organización

Las organizaciones son cuentas compartidas donde grupos de personas pueden colaborar en muchos proyectos a la vez. Los propietarios y los administradores pueden administrar el acceso de los miembros a los datos y los proyectos de la organización con características administrativas y de seguridad sofisticadas.

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### Cuentas de empresa

Con las cuentas de empresa, puedes administrar de forma centralizada la política y la facturación de múltiples {% data variables.product.prodname_dotcom_the_website %} organizaciones. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Leer más

{% if currentVersion == "free-pro-team@latest" %}- "[Inicia sesión para crear una cuenta nueva de {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)"
- "Productos de [{% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- "[Crear una cuenta de organización nueva](/articles/creating-a-new-organization-account)"
