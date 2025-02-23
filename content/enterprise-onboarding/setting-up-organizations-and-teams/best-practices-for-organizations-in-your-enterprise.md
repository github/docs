---
title: Best practices for organizations in your enterprise
intro: 'Learn how to structure your enterprise and organizations for the best developer experience.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Enterprise
shortTitle: Best practices
---

There are multiple options for structuring the organizations within your enterprise. Each approach has pros and cons, and the best structure for your enterprise depends on the characteristics and needs of your business, including size and security constraints.
We recommend aligning your strategy with the culture you want to create, not the culture you currently have. If you want to advance in terms of collaboration and innersourcing, structure your tools accordingly. Then, your tools can assist you in the cultural change instead of acting as a blocker.

This article summarizes key points from {% data variables.product.company_short %}'s recommendations. For more details, see the [Further reading](#further-reading) section.

## Minimize the number of organizations

In general, {% data variables.product.company_short %} recommends minimizing the number of organizations you create.

* Members of an organization can **find resources and communicate** easily, which fosters a **collaborative environment**.
* It's always easier to add organizations than to remove them, so we recommend **starting with a small number** of organizations, which gives you more flexibility in the future.
* Removing organizations is much more **difficult**, often requiring migrations and a reduction in flexibility that teams have gotten used to.

## When are multiple organizations required?

Some customers will require multiple organizations.

* The main benefit of creating multiple organizations is the ability to **configure separate policies, settings, and requirements** for each.
* Organization owners always have access to all repositories owned by the organization. If your company is large enough that **no single owner should have access to all repositories**, consider creating multiple organizations.
* We recommend creating and enforcing fixed and transparent **rules for creating a new organization** in your enterprise. This will make it easier for everyone to understand the purpose of each organization and which assets are located where.

Different customers have succeeded with different setups for numbers of organizations and access permissions within them. To explore options, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/best-practices-for-structuring-organizations-in-your-enterprise#about-organizational-structure).

## Best practices within organizations

Within each organization in your enterprise, you should encourage organization owners to follow best practices.
* **Add multiple owners**: If an organization only has one owner, the organization's projects can become inaccessible if the owner is unreachable. To ensure that no one will lose access to a project, we recommend that at least two people within each organization have the owner role.
* **Use teams**: Teams allow you to manage permissions, code ownership, and notifications for groups of people. If you use an identity provider (IdP) for authentication, we highly recommend managing team membership through your IdP. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/creating-teams).
* **Collaborate in organization-owned repositories**: Where possible, minimize collaboration in user-owned repositories. Organization-owned repositories have more sophisticated security and administrative features, and they remain accessible even as enterprise membership changes.

## Next steps

You have begun creating organizations and managing access for users to match your company's desired structure. Next, learn how to get help when you need it with {% data variables.contact.github_support %}. See [AUTOTITLE](/enterprise-onboarding/support-for-your-enterprise/understanding-support).

## Further reading

* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/best-practices-for-structuring-organizations-in-your-enterprise#about-organizational-structure)
* [Best practices for organizations and teams using GitHub Enterprise Cloud](https://github.blog/enterprise-software/devops/best-practices-for-organizations-and-teams-using-github-enterprise-cloud/) on {% data variables.product.prodname_blog %}
* [Strategies for using organizations in GitHub Enterprise Cloud](https://resources.github.com/learn/pathways/administration-governance/essentials/strategies-for-using-organizations-github-enterprise-cloud/) on {% data variables.product.github %} Resources
