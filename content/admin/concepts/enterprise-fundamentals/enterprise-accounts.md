---
title: Enterprise accounts
intro: 'Get started with top-down administration by understanding the key components of an enterprise account.'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
  - /admin/overview/about-enterprise-accounts
  - /admin/managing-your-enterprise-account/about-enterprise-accounts
  - /admin/overview/feature-overview-for-github-enterprise-cloud
versions:
  ghec: '*'
  ghes: '*'
contentType: concepts
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

An enterprise account is the central point of administration for your business on {% data variables.product.github %}. It brings together administrative tools for access management, policies, billing, and more. Enterprise administrators can set up features and policies efficiently at scale before deploying them across the business.

This guide provides an overview of the major administrative features included in an enterprise account. By understanding the tools at your disposal, you will be able to adapt {% data variables.product.github %} to your unique needs, set your business up for future scaling, and enable teams to focus on strategic work.

## Users

Your enterprise contains all the users who need to access any part of your company's resources on {% data variables.product.github %}. Users can be grouped into teams and given access to organizations.

{% ifversion ghes %}
On {% data variables.product.prodname_ghe_server %}, you have a range of options for creating and authenticating user accounts, including built-in accounts or provisioning accounts from an identity provider.
{% else %}
Depending on your enterprise type, you will invite users into your enterprise with their existing {% data variables.product.github %} account, or provision dedicated accounts from a central identity provider.
{% endif %}

By default, most users have a non-administrative role in your enterprise, which means they have little reason to interact with the enterprise account itself. However, you can change this by granting enterprise roles that provide access to specific settings.

## Organizations

An enterprise account may contain one or more organizations. Like an enterprise account, an organization account contains its own administrative features such as audit logs, policies, and teams.

An organization also contains the places where non-admins typically do their work, such as repositories, discussions, and projects. The users in an organization are the people who need to access these places to do their jobs.

Generally, you can govern organizations consistently from your enterprise account. To allow for more tailored and granular administration, you can also delegate some decisions, such as policy settings, to organization administrators.

{% ifversion enterprise-teams %}

## Teams

Teams are groups of users that you can use to manage people's access to organizations, roles, and licenses at scale. You can use teams to add people to shared projects or delegate duties to specialized teams.

You can define teams at the enterprise level, then grant them administrative roles or add them to organizations, where they can receive organization-level roles and repository access.

Teams can be synced with IdP groups, allowing you to manage any privileges that come with team membership directly from your company's centralized identity management system.

{% endif %}

## Repositories

Repositories host files such as your company's source code or internal documentation. They are where developers typically do their work, and they contain their own features and administration options that need to live closer to the code, such as {% data variables.product.prodname_actions %} workflows.

Repositories are owned by organizations and are not directly accessible under the enterprise account.{% ifversion custom-properties-enterprise %} However, your enterprise can define custom properties to apply the same governance model to all repositories with shared characteristics. For example, if you do not want anyone to delete repositories that contain production code, this is something you can govern from the enterprise level.{% endif %}

{% ifversion ghec %}

## Cost centers

Cost centers allow you to allocate spending on {% data variables.product.github %} features to specific business units. They let you define your billing structure independently from other parts of the enterprise, so you can focus on using organization accounts to group related work or governance requirements.

If your account is billed through Azure, cost centers also allow you to bill usage to multiple different Azure subscriptions.

## Policies

Enterprise administrators can set policies to govern how people work across your enterprise, such as:

* IP allow lists to enforce restrictions on where people can access your enterprise
* {% data variables.product.prodname_copilot_short %} policies to govern which features and models people can use
* Repository policies to control who can do things like delete, rename, or transfer repositories
* Rulesets to define how people can interact with important branches, such as requiring pull requests with reviews

{% endif %}

{% ifversion enterprise-apps-public-beta %}

## Apps

{% data variables.product.prodname_github_apps %} are a secure way to manage automations across your enterprise. A {% data variables.product.prodname_github_app %} is a dedicated identity that provides scoped tokens to your external scripts and workflows, allowing you to automate processes and integrate with other platforms.

In your enterprise account, you can define app registrations to automate a process consistently across organizations.{% ifversion enterprise-installed-apps %} You can also install apps for automations that take actions on the enterprise account itself, such as creating organizations.{% endif %}

Users can also authorize {% data variables.product.prodname_github_apps %} to use their {% data variables.product.github %} account and data in other applications—for example, to use their {% data variables.product.github %} account to sign in to an IDE or connect a CI provider to your repositories.

{% endif %}

{% ifversion ghec %}

## Next steps

Learn how to set up these features with our [AUTOTITLE](/enterprise-cloud@latest/enterprise-onboarding) journey for {% data variables.product.prodname_ghe_cloud %}.

{% endif %}
