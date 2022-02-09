---
title: Gerenciar as suas camadas de patrocínio
intro: 'Você pode adicionar uma nova camada de patrocínio, ou editar ou retirar uma camada existente.'
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
shortTitle: Gerenciar camadas de pagamento
---

## Sobre as camadas de patrocínio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Adicionar uma camada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Se você estiver configurando as camadas pela primeira vez, recomendamos que você revise os exemplos de camadas sugeridas para ver como alguns outros contribuidores de código aberto configuraram o valor de {% data variables.product.prodname_sponsors %}. Decida se deseja começar com alguns rascunhos de camada sugeridos, que você pode personalizar no editor de camadas.
   - Para usar uma camada sugerida, selecione as recompensas que você gostaria de incluir no seu rascunho da camada ou camadas. Em seguida, clique em **Seguir para o editor de camadas**.
   - Para criar níveis sem usar com nenhuma das sugestões de rascunho, clique em **Pular esta etapa**. ![Opção "Pular esta etapa" e botão "Seguir para o editor"](/assets/images/help/sponsors/tier-editor-button.png)
1. Opcionalmente, para editar uma camada no rascunho, encontre a camada no rascunho e clique em **Editar**. ![Botão editar ao lado da camada no rascunho](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

## Editando ou retirar uma camada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **Observação:** Para ver as ideias das descrições de camadas, desça a barra de rolagem.

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

## Habilitar camadas com quantidades personalizadas

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

## Desabilitar camadas com quantidades personalizadas

Você pode desabilitar camadas com valores personalizados desmarcando a opção **Habilitar valores** personalizados na aba **Camadas de Sponsors**. Se você desabilitar quantidades personalizadas, todas as camadas personalizadas irão se tornar obsoletas..
