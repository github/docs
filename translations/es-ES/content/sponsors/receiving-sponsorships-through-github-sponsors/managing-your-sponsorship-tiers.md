---
title: Managing your sponsorship tiers
intro: 'You can add a new sponsorship tier, or edit or retire an existing tier.'
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
shortTitle: Manage payment tiers
---

## About sponsorship tiers

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Adding a tier

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. If you are setting up tiers for the first time, we recommend you review the suggested tier examples to see how some other open source contributors have set up {% data variables.product.prodname_sponsors %}. Decide whether you want to start with some suggested draft tiers, which you can customize in the tier editor.
   - To use a suggested tier, select the rewards you'd like to include in your draft tier or tiers. Then, click **Continue to tier editor**.
   - To create tiers without using with any of the draft suggestions, click **Skip this step**.
     
     ![Screenshot of "Skip this step" option and "Continue to tier editor" button](/assets/images/help/sponsors/tier-editor-button.png)

1. Optionally, in the text boxes under "Custom amounts", type a recommended or minimum sponsorship amount. The minimum amount applies to both recurring and one-time sponsorships.

   ![Screenshot of custom amounts fields](/assets/images/help/sponsors/custom-amounts.png)

1. Optionally, to edit a draft tier, find the draft tier and click **Edit**.

   ![Screenshot of edit button next to draft tier](/assets/images/help/sponsors/draft-tier-edit.png)

{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

## Editing or retiring a tier

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **Note:** To see ideas of tier descriptions, scroll down.

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
