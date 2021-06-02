---
title: Acerca de la visibilidad de un repositorio
intro: 'Puedes restringir quién tiene acceso a un repositorio si eliges la visibilidad del mismo: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} pública, interna, o privada{% elsif currentVersion == "github-ae@latest"  %}privada o interna{% else %} pública o privada{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Acerca de la visibilidad de un repositorio

{% if currentVersion == "github-ae@latest" %}Cuando creas un repositorio que pertenece a tu cuenta de usuario, éste siempre será privado. Cuando creas un repositorio que pertenece a una organización, puedes elegir hacerlo privado o interno.{% else %}Cuando creas un repositorio, puedes elegir hacerlo público o privado.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} Si estás creando el repositorio en una organización{% if currentVersion == "free-pro-team@latest" %} que pertenece a una cuenta empresarial{% endif %}, también puedes elegir hacer el repositorio interno.{% endif %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Si
{% data variables.product.product_location %} no está en modo privado o detrás de un cortafuegos, cualquiera en la internet podrá acceder a los repositorios públicos. De lo contrario, los repositorios públicos estarán disponibles para cualquiera que utilice {% data variables.product.product_location %}, incluyendo a los colaboradores externos. Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados. {% if currentVersion ver_gt "enterprise-server@2.19" %} Los miembros de la empresa pueden acceder a los repositorios internos. Para obtener más información, consulta la sección "[Acerca de los repositorios internos](#about-internal-repositories)."{% endif %}
{% elsif currentVersion == "github-ae@latest" %}
Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados. Todos los miembros de la empresa pueden acceder a los repositorios internos. Para obtener más información, consulta la sección "[Acerca de los repositorios internos](#about-internal-repositories)".
{% else %}
Cualquiera en la internet puede acceder a los repositorios públicos. Solo tú, las personas con las que compartes el acceso explícitamente y, para los repositorios de organizaciones, algunos miembros de la organización, pueden acceder a los repositorios privados. Los miembros de las empresas pueden acceder a los repositorios internos. Para obtener más información, consulta la sección "[Acerca de los repositorios internos](#about-internal-repositories)".
{% endif %}

Los propietarios de la organización siempre tiene acceso a todos los repositorios creados en la misma. Para obtener más información, consulta "[Niveles de permiso del repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)".

Las personas con permisos de administrador para un repositorio pueden cambiar la visibilidad de los repositorios existentes. Para obtener más información, consulta la sección "[Configurar la visibilidad de los repositorios](/github/administering-a-repository/setting-repository-visibility)".

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Acerca de los repositorios internos

{% note %}

**Nota:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %}Para obtener más información sobre innersource, consulta la documentación técnica de {% data variables.product.prodname_dotcom %} "Introducción a innersource".

Todos los miembros de las empresas tienen permiso de lectura para los repositorios internos, pero las personas {% if currentVersion == "free-pro-team@latest" %}externas a la empresa{% else %}que no sean miembros de una organización{% endif %}, incluyendo los colaboradores externos en los repositorios organizacionales, no pueden verlos. Para obtener más información, consulta las secciones {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" y {% endif %}"[Niveles de permiso en un repositorio de una organización](/articles/repository-permission-levels-for-an-organization)".

{% data reusables.repositories.internal-repo-default %}

Si se elimina a un usuario de todas las organizaciones que pertenezcan a la empresa, las bifurcaciones de dicho usuario para los repositorios internos se eliminarán automáticamente.
{% endif %}
