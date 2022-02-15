---
title: Administrar tus niveles de patrocinio
intro: Puedes agregar un nuevo nivel de patrocinio o editar o retirar un nivel existente.
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Administrar los niveles de pago
---

## Acerca de los niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Agregar un nivel

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Si estás configurando niveles por primera vez, te recomendamos que revises los ejemplos de niveles sugeridos para ver cómo lotros contribuyetntes de código abierto configuraron {% data variables.product.prodname_sponsors %}. Decide siquieres iniciar con algunos niveles de borrador sugeridos, los cuales puedes personalizar en el editor de niveles.
   - Para utilizar un nivel sugerido, selecciona las contraseñas que te gustaría incluir en tu nivel o niveles de borrador. Posteriormente, haz clic en **Seguir con el editor de niveles**.
   - Para crear niveles sin utilizar con cualquiera de las sugerencias de borrador, haz clic en **Saltar este paso**. ![Opción de "Saltar este paso" y botón de "Avanzar al editor de niveles"](/assets/images/help/sponsors/tier-editor-button.png)
1. Opcionalmente, para editar un nivel de borrador, encuentra dicho nivel y haz clic en **Editar**. ![Botón de editar junto al nivel en borrador](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

## Editar o retirar un nivel

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **Nota:** Para ver las ideas de las descripciones de nivel, despázate hacia abajo.

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

## Adding a repository to a sponsorship tier

{% data reusables.sponsors.sponsors-only-repos %}

### About adding repositories to a sponsorship tier

To add a repository to a tier, the repository must be private and owned by an organization, and you must have admin access to the repository.

When you add a repository to a tier, {% data variables.product.company_short %} will automatically send repository invitations to new sponsors and remove access when a sponsorship is cancelled.

Only personal accounts, not organizations, can be invited to private repositories associated with a sponsorship tier.

You can also manually add or remove collaborators to the repository, and {% data variables.product.company_short %} will not override these in the sync.

### About transfers for repositories that are added to sponsorship tiers

If you transfer a repository that has been added to a sponsorship tier, sponsors who have access to the repository through the tier may be affected.

- If the sponsored profile is for an organization and the repository is transferred to a different organization, current sponsors will be transferred, but new sponsors will not be added. The new owner of the repository can remove existing sponsors.
- If the sponsored profile is for a personal account, the repository is transferred to an organization, and the personal account has admin access to the new repository, existing sponsors will be transferred, and new sponsors will continue to be added to the repository.
- If the repository is transferred to a personal account, all sponsors will be removed and new sponsors will not be added to the repository.

### Adding a repository a sponsorship tier

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
1. Select **Grant sponsors access to a private repository**.

   ![Screenshot of checkbox to grant sponsors access to a private repository](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Select the dropdown menu and click the repository you want to add.

   ![Screenshot of dropdown menu to choose the repository to grant sponsors access to](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## Habilitar niveles con cantidades personalizadas

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

## Inhabilitar niveles con cantidades personalizadas

Puedes inhabilitar los niveles con cantidades personalizadas si deseleccionas la opción **Habilitar cantidades personalizadas** en la pestaña de **Niveles de patrocinio**. Si inhabilitas las cantidades personalizadas, todos los niveles personalizados se reintentarán.
