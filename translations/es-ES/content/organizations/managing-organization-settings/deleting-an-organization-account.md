---
title: Eliminar una cuenta de una organización
intro: 'Cuando eliminas una organización, se eliminan también todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas del proyecto y de la organización. {% if currentVersion == "free-pro-team@latest" %}El nombre de la organización estará disponible para que otra cuenta de usuario o de organización lo utilice, y tu facturación terminará.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Sugerencia**: Si deseas cancelar tu suscripción paga, puedes [bajar la categoría de tu organización a {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) en lugar de eliminar la organización y su contenido.

{% endtip %}

{% endif %}

### 1. Haz una copia de respaldo del contenido de tu organización

Una vez que eliminas una organización, GitHub **no puede restaurar su contenido**. Por lo tanto, antes de que borres tu organización, asegúrate de que tengas una copia de todos los repositorios, wikis, propuestas y tableros de proyecto de la cuenta.

### 2. Elimina la organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Junto a la parte inferior de la página de configuración de la organización, haz clic en **Eliminar esta organización**. ![Botón Eliminar esta organización](/assets/images/help/settings/settings-organization-delete.png)
