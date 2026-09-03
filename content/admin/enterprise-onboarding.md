---
title: Enterprise onboarding
intro: Onboard your company to {% data variables.product.prodname_ghe_cloud %} by following our recommended plan. You will set up teams with the access they need, create a policy framework to ensure compliance, and automate processes securely throughout your enterprise.
layout: journey-landing
journeyTracks:
  - id: getting_started
    title: Getting started with your enterprise
    description: Master the fundamentals of {% data variables.product.prodname_ghe_cloud %} and get started with a trial.
    guides:
      - href: /admin/concepts/enterprise-fundamentals/choose-an-enterprise-type
      - href: /admin/overview/setting-up-a-trial-of-github-enterprise-cloud
      - href: /admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/add-users
      - href: /billing/concepts/enterprise-billing/billing-for-enterprises
      - href: /migrations/overview/planning-your-migration-to-github
  - id: setting_up_organizations_and_teams
    title: Setting up organizations and teams in your enterprise
    description: Organize work effectively and ensure people have the access they need to resources and administrative settings.
    guides:
      - href: /admin/concepts/enterprise-best-practices/organize-work
      - href: /admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise
      - href: /admin/concepts/enterprise-fundamentals/roles-in-an-enterprise
      - href: /admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/identify-role-requirements
      - href: /admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/create-custom-roles
      - href: /admin/concepts/enterprise-fundamentals/teams-in-an-enterprise
      - href: /admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams
      - href: /admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles
      - href: /admin/concepts/enterprise-best-practices/use-innersource
  - id: govern_people_and_repositories
    title: Governing people and repositories
    description: Implement policies, custom properties, and rulesets to govern users and repositories across your enterprise.
    guides:
      - href: /admin/concepts/security-and-compliance/enterprise-policies
      - href: /admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-custom-properties-for-repositories-in-your-enterprise
      - href: /admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise
      - href: /admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance
      - href: /admin/concepts/security-and-compliance/audit-log-for-an-enterprise
  - id: github_apps
    title: Automating processes with GitHub Apps
    description: Create and install apps to automate processes securely in your enterprise and organizations.
    guides:
      - href: /admin/concepts/enterprise-fundamentals/automations-in-your-enterprise
      - href: /admin/managing-github-apps-for-your-enterprise/creating-github-apps-for-your-enterprise
      - href: /apps/using-github-apps/installing-a-github-app-on-your-enterprise
versions:
  ghec: '*'
redirect_from:
  - /enterprise-onboarding/feature-enhancements
  - /enterprise-onboarding/getting-started-with-your-enterprise
  - /enterprise-onboarding/govern-people-and-repositories
  - /enterprise-onboarding
docsTeamMetrics:
  - enterprise-onboarding
contentType: other
---

# Enterprise accounts

Get started with top-down administration by understanding the key components of an enterprise account.

An enterprise account is the central point of administration for your business on GitHub. It brings together administrative tools for access management, policies, billing, and more. Enterprise administrators can set up features and policies efficiently at scale before deploying them across the business.

This guide provides an overview of the major administrative features included in an enterprise account. By understanding the tools at your disposal, you will be able to adapt GitHub to your unique needs, set your business up for future scaling, and enable teams to focus on strategic work.

## Users

Your enterprise contains all the users who need to access any part of your company's resources on GitHub. Users can be grouped into teams and given access to organizations.

Depending on your enterprise type, you will invite users into your enterprise with their existing GitHub account, or provision dedicated accounts from a central identity provider.

By default, most users have a non-administrative role in your enterprise, which means they have little reason to interact with the enterprise account itself. However, you can change this by granting enterprise roles that provide access to specific settings.

## Organizations

An enterprise account may contain one or more organizations. Like an enterprise account, an organization account contains its own administrative features such as audit logs, policies, and teams.

An organization also contains the places where non-admins typically do their work, such as repositories, discussions, and projects. The users in an organization are the people who need to access these places to do their jobs.

Generally, you can govern organizations consistently from your enterprise account. To allow for more tailored and granular administration, you can also delegate some decisions, such as policy settings, to organization administrators.

## Teams

Teams are groups of users that you can use to manage people's access to organizations, roles, and licenses at scale. You can use teams to add people to shared projects or delegate duties to specialized teams.

You can define teams at the enterprise level, then grant them administrative roles or add them to organizations, where they can receive organization-level roles and repository access.

Teams can be synced with IdP groups, allowing you to manage any privileges that come with team membership directly from your company's centralized identity management system.

## Repositories

Repositories host files such as your company's source code or internal documentation. They are where developers typically do their work, and they contain their own features and administration options that need to live closer to the code, such as GitHub Actions workflows.

Repositories are owned by organizations and are not directly accessible under the enterprise account. However, your enterprise can define custom properties to apply the same governance model to all repositories with shared characteristics.  For example, if you do not want anyone to delete repositories that contain production code, this is something you can govern from the enterprise level.

## Cost centers

Cost centers allow you to allocate spending on GitHub features to specific business units. They let you define your billing structure independently from other parts of the enterprise, so you can focus on using organization accounts to group related work or governance requirements.

If your account is billed through Azure, cost centers also allow you to bill usage to multiple different Azure subscriptions.

## Policies

Enterprise administrators can set policies to govern how people work across your enterprise, such as:

* IP allow lists to enforce restrictions on where people can access your enterprise
* Copilot policies to govern which features and models people can use
* Repository policies to control who can do things like delete, rename, or transfer repositories
* Rulesets to define how people can interact with important branches, such as requiring pull requests with reviews

## Apps

GitHub Apps are a secure way to manage automations across your enterprise. A GitHub App is a dedicated identity that provides scoped tokens to your external scripts and workflows, allowing you to automate processes and integrate with other platforms.

In your enterprise account, you can define app registrations to automate a process consistently across organizations. You can also install apps for automations that take actions on the enterprise account itself, such as creating organizations.

Users can also authorize GitHub Apps to use their GitHub account and data in other applications—for example, to use their GitHub account to sign in to an IDE or connect a CI provider to your repositories.

## Next steps

Learn how to set up these features with our [Enterprise onboarding](/en/enterprise-cloud@latest/enterprise-onboarding) journey for GitHub Enterprise Cloud.

