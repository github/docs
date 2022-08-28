---
title: Administrar tus niveles de patrocinio
intro: Puedes agregar un nuevo nivel de patrocinio o editar o retirar un nivel existente.
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
---

### Acerca de los niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

### Agregar un nivel

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Si estás configurando niveles por primera vez, te recomendamos que revises los ejemplos de niveles sugeridos para ver cómo lotros contribuyetntes de código abierto configuraron {% data variables.product.prodname_sponsors %}. Decide siquieres iniciar con algunos niveles de borrador sugeridos, los cuales puedes personalizar en el editor de niveles.
   - Para utilizar un nivel sugerido, selecciona las contraseñas que te gustaría incluir en tu nivel o niveles de borrador. Posteriormente, haz clic en **Seguir con el editor de niveles**.
   - Para crear niveles sin utilizar con cualquiera de las sugerencias de borrador, haz clic en **Saltar este paso**. ![Opción de "Saltar este paso" y botón de "Avanzar al editor de niveles"](/assets/images/help/sponsors/tier-editor-button.png)
1. Opcionalmente, para editar un nivel de borrador, encuentra dicho nivel y haz clic en **Editar**. ![Botón de editar junto al nivel en borrador](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

### Editar o retirar un nivel

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **Nota:** Para ver las ideas de las descripciones de nivel, despázate hacia abajo.

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

### Habilitar niveles con cantidades personalizadas

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

### Inhabilitar niveles con cantidades personalizadas

Puedes inhabilitar los niveles con cantidades personalizadas si deseleccionas la opción **Habilitar cantidades personalizadas** en la pestaña de **Niveles de patrocinio**. Si inhabilitas las cantidades personalizadas, todos los niveles personalizados se reintentarán.
