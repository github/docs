---
title: Publishing actions in GitHub Marketplace
intro: 'You can publish actions in {% data variables.product.prodname_marketplace %} and share actions you''ve created with the {% data variables.product.prodname_dotcom %} community.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
  - /actions/creating-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
---

You must accept the terms of service to publish actions in {% data variables.product.prodname_marketplace %}.

## About publishing actions

Before you can publish an action, you'll need to create an action in your repository. For more information, see "[AUTOTITLE](/actions/creating-actions)."

When you plan to publish your action to {% data variables.product.prodname_marketplace %}, you'll need to ensure that the repository only includes the metadata file, code, and files necessary for the action. Creating a single repository for the action allows you to tag, release, and package the code in a single unit. {% data variables.product.prodname_dotcom %} also uses the action's metadata on your {% data variables.product.prodname_marketplace %} page.

Actions are published to {% data variables.product.prodname_marketplace %} immediately and aren't reviewed by {% data variables.product.prodname_dotcom %} as long as they meet these requirements:

* The action must be in a public repository.
* Each repository must contain a single action.
* Each repository must _not_ contain any workflow files.
* The action's metadata file (`action.yml` or `action.yaml`) must be in the root directory of the repository.
* The `name` in the action's metadata file must be unique.
  * The `name` cannot match an existing action name published on {% data variables.product.prodname_marketplace %}.
  * The `name` cannot match a user or organization on {% data variables.product.prodname_dotcom %}, unless the user or organization owner is publishing the action. For example, only the {% data variables.product.prodname_dotcom %} organization can publish an action named `github`.
  * The `name` cannot match an existing {% data variables.product.prodname_marketplace %} category.
  * {% data variables.product.prodname_dotcom %} reserves the names of {% data variables.product.prodname_dotcom %} features.

## Publishing an action

You can add the action you've created to {% data variables.product.prodname_marketplace %} by tagging it as a new release and publishing it.

To draft a new release and publish the action to {% data variables.product.prodname_marketplace %}, follow these instructions:

{% data reusables.repositories.navigate-to-repo %}
1. Navigate to the action metadata file in your repository (`action.yml` or `action.yaml`), and you'll see a banner to publish the action to {% data variables.product.prodname_marketplace %}. Click **Draft a release**.
1. Under "Release Action", select **Publish this Action to the {% data variables.product.prodname_marketplace %}**.

   {% note %}

   **Note**: The "Publish" checkbox is disabled if the account that owns the repository has not yet accepted the {% data variables.product.prodname_marketplace %} Developer Agreement. If you own the repository or are an organization owner, click the link to "accept the GitHub Marketplace Developer Agreement", then accept the agreement. If there is no link, send the organization owner a link to this "Release Action" page and ask them to accept the agreement.

   {% endnote %}
1. If the labels in your metadata file contain any problems, you will see an error message. Address them by updating your metadata file. Once complete, you will see an "Everything looks good!" message.
1. Select the **Primary Category** dropdown menu and click a category that will help people find your action in {% data variables.product.prodname_marketplace %}.
1. Optionally, select the **Another Category** dropdown menu and click a secondary category.
1. In the tag field, type a version for your action. This helps people know what changes or features the release includes. People will see the version in the action's dedicated {% data variables.product.prodname_marketplace %} page.
1. In the title field, type a release title.
1. Complete all other fields and click **Publish release**. Publishing requires you to use two-factor authentication. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

## Removing an action from {% data variables.product.prodname_marketplace %}

To remove a published action from {% data variables.product.prodname_marketplace %}, you'll need to update each published release. Perform the following steps for each release of the action you've published to {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% data reusables.releases.edit-release %}
1. Select **Publish this action to the {% data variables.product.prodname_marketplace %}** to remove the check from the box.
1. Click **Update release** at the bottom of the page.

## Transferring an action repository

You can transfer an action repository to another user or organization. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository)."

When a repository admin transfers an action repository, {% data variables.product.prodname_dotcom %} automatically creates a redirect from the previous URL to the new URL, meaning workflows that use the affected action do not need to be updated.

Actions published on {% data variables.product.prodname_marketplace %} are linked to a repository by their unique `name` identifier, meaning you can publish new releases of an action from the transferred repository under the same {% data variables.product.prodname_marketplace %} listing. If an action repository is deleted, the {% data variables.product.prodname_marketplace %} listing is also deleted, and the unique `name` identifier becomes available.

{% note %}

**Note:** The "Verified" badge seen on an organization's {% data variables.product.prodname_dotcom %} profile is different from the verified creator badge on {% data variables.product.prodname_marketplace %}. If you transfer an action repository, the {% data variables.product.prodname_marketplace %} listing will lose the verified creator badge unless the new owner is also a verified creator.

{% endnote %}
  
## About badges in {% data variables.product.prodname_marketplace %}

Actions with the {% octicon "verified" aria-label="The verified badge" %}, or  verified creator badge,  indicate that {% data variables.product.prodname_dotcom %} has verified the creator of the action as a partner organization. Partners can email <a href="mailto:partnerships@github.com">partnerships@github.com</a> to request the verified creator badge.

![Screenshot of {% data variables.product.prodname_actions %} with the verified creator badge.](/assets/images/marketplace/verified-creator-badge-for-actions.png)
