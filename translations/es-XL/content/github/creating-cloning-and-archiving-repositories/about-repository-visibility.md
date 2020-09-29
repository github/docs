---
title: Acerca de la visibilidad de un repositorio
intro: 'Puedes restringir quién tiene acceso a un repositorio si eliges su visibilidad: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}pública, interna, o privada{% else %} pública o privada{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de la visibilidad de un repositorio

Cuando creas un repositorio, puedes elegir configurarlo como público o privado. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Si creas un repositorio en una organización{% if currentVersion == "free-pro-team@latest" %} que sea propiedad de una cuenta empresarial{% endif %}, también puedes configurarlo como interno.{% endif %}

{% if currentVersion != "free-pro-team@latest" %}Si {% data variables.product.product_location_enterprise %} no está en modo privado o detrás de un cortafuegos, cualquier persona en la internet podrá acceder a los repositorios p{% else %}P{% endif %}úblicos.{% if currentVersion != "free-pro-team@latest" %}De lo contrario, los repositorios públicos estarán disponibles para cualquiera que utilice {% data variables.product.product_location_enterprise %}, incluyendo a los colaboradores externos.{% endif %} Solo tú y las personas con las que compartas el acceso explícitamente podrán acceder a los repositorios privados y, en caso de los repositorios organizacionales, solo [algunos miembros específicos de la organización](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Los {% if currentVersion == "free-pro-team@latest" %}miembros de tu cuenta empresarial y{% else %}los de cualquier organización en tu instancia{% endif %} tienen acceso a los repositorios internos. Para obtener más información, consulta la sección "[Acerca de los repositorios internos](#about-internal-repositories)."{% endif %}

Los propietarios de la organización siempre tiene acceso a todos los repositorios creados en la misma. Para obtener más información, consulta la sección "[Niveles de permiso en un repositorio para una organización](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)".

Las personas con permisos de administrador para un repositorio pueden cambiar la visibilidad de los repositorios existentes. Para obtener más información, consulta la sección "[Configurar la visibilidad de los repositorios](/github/administering-a-repository/setting-repository-visibility)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Acerca de los repositorios internos

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %}Para obtener más información sobre innersource, consulta la documentación técnica de {% data variables.product.prodname_dotcom %} "Introducción a innersource".

Todos los {% if currentVersion == "free-pro-team@latest" %} miembros empresariales{% else %}miembros organizacionales{% endif %}tienen permisos de lectura para los repositorios internos, pero estos no serán visibles para aquellos {% if currentVersion == "free-pro-team@latest" %} externos a la cuenta empresarial{% else %} que no sean miembros de una organización{% endif %}, incluyendo los colaboradores en repositorios organizacionales. Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" %}"[Roles para una cuenta empresarial](/articles/roles-for-an-enterprise-account#enterprise-members)" y {% endif %}"[Niveles de permiso para una organización en los repositorios](/articles/repository-permission-levels-for-an-organization)".

{% data reusables.repositories.internal-repo-default %}
Si se elimina a un usuario de

{% if currentVersion == "free-pro-team@latest" %}una cuenta empresarial{% else %} todas las organizaciones en la instancia{% endif %}, que las bifurcaciones de un usuario en los repositorios internos se eliminan automáticamente.
{% endif %}
