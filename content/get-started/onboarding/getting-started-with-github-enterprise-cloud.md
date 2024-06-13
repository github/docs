---
title: Getting started with GitHub Enterprise Cloud
intro: 'Get started with setting up and managing your enterprise account with {% data variables.product.prodname_ghe_cloud %}.'
versions:
  fpt: '*'
  ghec: '*'
---

This guide will walk you through setting up, configuring and managing your {% data variables.product.prodname_ghe_cloud %} account as an enterprise owner.

{% data variables.product.prodname_dotcom %} provides two types of Enterprise products:

* **{% data variables.product.prodname_ghe_cloud %}**
* **{% data variables.product.prodname_ghe_server %}**

The main difference between the products is that {% data variables.product.prodname_ghe_cloud %} is hosted by {% data variables.product.prodname_dotcom %}, while {% data variables.product.prodname_ghe_server %} is self-hosted.

{% data variables.product.prodname_ghe_cloud %} includes an enterprise account, which allows you to manage multiple organizations. You can choose to let enterprise members create and manage their own personal accounts, or you can use {% data variables.product.prodname_emus %}. For more information about {% data variables.product.prodname_ghe_cloud %}, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)."

## Part 1: Setting up your enterprise account

To get started with {% data variables.product.prodname_ghe_cloud %}, decide which type of enterprise to create, create an enterprise account, and add one or more organizations.

### 1. Choosing an enterprise type

{% data reusables.enterprise-accounts.about-enterprise-types %} Before you begin using {% data variables.product.prodname_ghe_cloud %}, you must decide which type of enterprise to use. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud)."

### 2. About enterprise accounts

An enterprise account allows you to centrally manage policy and settings for multiple {% data variables.product.prodname_dotcom %} organizations, including member access, billing and usage and security. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-your-enterprise-account/about-enterprise-accounts)."

### 3. Creating an enterprise account

To create your enterprise account, start a free 30-day trial of {% data variables.product.prodname_ghe_cloud %}. For more information, see "[AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)."

<a href="https://github.com/account/enterprises/new?ref_cta=GHEC+trial&ref_loc=getting+started+with+github+enterprise+cloud&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Try {% data variables.product.prodname_ghe_cloud %} for free</span> {% octicon "link-external" height:16 %}</a>

### 4. Adding organizations to your enterprise account

You can add any number of new or existing organizations to manage within your enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)."

### 5. Creating a README for the enterprise

{% data reusables.enterprise.about-readmes %} For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise)."

### 6. Viewing the subscription and usage for your enterprise account

You can view your current subscription, license usage, invoices, payment history, and other billing information for your enterprise account at any time. Both enterprise owners and billing managers can access and manage billing settings for enterprise accounts. For more information, see  "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)."

## Part 2: Managing your enterprise members with {% data variables.product.prodname_ghe_cloud %}

If your enterprise uses {% data variables.product.prodname_emus %}, your members are fully managed through your identity provider. Adding members, making changes to their membership, and assigning roles is all managed using your IdP. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users)."

If your enterprise does not use {% data variables.product.prodname_emus %}, follow the steps below.

### 1. Assigning roles in an enterprise

By default, everyone in an enterprise is a member of the enterprise. There are also administrative roles, including enterprise owner and billing manager, that have different levels of access to enterprise settings and data. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)."

### 2. Inviting people to manage your enterprise

You can invite people to manage your enterprise as enterprise owners or billing managers or remove administrators who no longer need access. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

You can also grant enterprise members the ability to manage support tickets in the support portal. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."

### 3. Viewing people in your enterprise

To audit access to enterprise-owned resources or user license usage, you can view every enterprise administrator, enterprise member, and outside collaborator in your enterprise. You can see the organizations that a member belongs to and the specific repositories that an outside collaborator has access to. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)."

## Part 3: Managing security with {% data variables.product.prodname_ghe_cloud %}

* [Managing security with {% data variables.product.prodname_emus  %}](#managing-security-with-enterprise-managed-users)
* [Managing security without {% data variables.product.prodname_emus  %}](#managing-security-without-enterprise-managed-users)

### Managing security with {% data variables.product.prodname_emus  %}

With {% data variables.product.prodname_emus %}, access and identity is managed centrally through your identity provider. Two-factor authentication and other access requirements should be enabled and enforced on your IdP.

#### 1. Enabling SAML single sign-on and provisioning in your {% data variables.enterprise.prodname_emu_enterprise %}

In an {% data variables.enterprise.prodname_emu_enterprise %}, all members are provisioned and managed by your identity provider. You must enable SSO and SCIM provisioning before you can start using your enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users)."

#### 2. Managing organization and team membership in your {% data variables.enterprise.prodname_emu_enterprise %} with your identity provider

To manage organization and team membership within your enterprise from your IdP, you can connect teams in your organizations to security groups in your identity provider. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)."

#### 3. Managing allowed IP addresses for organizations in your {% data variables.enterprise.prodname_emu_enterprise %}

You can configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your {% data variables.enterprise.prodname_emu_enterprise %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)."

#### 4. Enforcing policies for Advanced Security features in your {% data variables.enterprise.prodname_emu_enterprise %}

{% data reusables.getting-started.enterprise-advanced-security %}

### Managing security without {% data variables.product.prodname_emus  %}

To manage security for your enterprise, you can require two-factor authentication, manage allowed IP addresses, enable SAML single sign-on and team synchronization, and sign up for and enforce GitHub Advanced Security features.

#### 1. Requiring two-factor authentication and managing allowed IP addresses for organizations in your enterprise account

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise account use two-factor authentication to secure their personal accounts. Before doing so, we recommend notifying all who have access to organizations in your enterprise. You can also configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your enterprise account.

For more information about enforcing two-factor authentication and allowed IP address lists, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)."

#### 2. Enabling and enforcing SAML single sign-on for organizations in your enterprise account

You can centrally manage access to your enterprise's resources from your IdP using SAML single sign-on (SSO). Enterprise owners can enable SAML SSO across all organizations owned by an enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-saml-for-enterprise-iam)."

#### 3. Managing team synchronization

You can enable and manage team synchronization between an identity provider (IdP) and {% data variables.product.prodname_dotcom %} to allow organizations owned by your enterprise account to manage team membership with IdP groups. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise)."

#### 4. Enforcing policies for Advanced Security features in your enterprise account

{% data reusables.getting-started.enterprise-advanced-security %}

## Part 4: Managing organization and enterprise level policies and settings

To manage and moderate your enterprise, you can set policies for organizations within the enterprise, view audit logs, configure webhooks, and restrict email notifications.

### 1. Managing policies for organizations in your enterprise account

You can choose to enforce a number of policies for all organizations owned by your enterprise, or choose to allow these policies to be set in each organization. Types of policies you can enforce include repository management, projects, and team policies. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies)."

### 2. Viewing audit logs, configuring webhooks, and restricting email notifications for your enterprise

You can view actions from all of the organizations owned by your enterprise account in the enterprise audit log. You can also configure webhooks to receive events from organizations owned by your enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)."

You can also restrict email notifications for your enterprise account so that enterprise members can only use an email address in a verified or approved domain to receive notifications. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."

## Part 5: Customizing and automating your enterprise's work on {% data variables.product.prodname_dotcom %}

Members of your organization or enterprise can use tools from the {% data variables.product.prodname_marketplace %}, the {% data variables.product.prodname_dotcom %} API, and existing {% data variables.product.product_name %} features to customize and automate your work.

### 1. Using {% data variables.product.prodname_marketplace %}

{% data reusables.getting-started.marketplace %}

### 2. Using the {% data variables.product.prodname_dotcom %} API

{% data reusables.getting-started.api %}

### 3. Building {% data variables.product.prodname_actions %}

{% data reusables.getting-started.actions %}

### 4. Publishing and managing {% data variables.product.prodname_registry %}

{% data reusables.getting-started.packages %}

### 5. Using {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository and publishes a website. You can manage the publication of {% data variables.product.prodname_pages %} sites at the organization level. For more information, see  "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" and "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages)."

## Part 6: Participating in {% data variables.product.prodname_dotcom %}'s community

You and your enterprise members can use GitHub's learning and support resources to get the help they need. You can also support the open source community.

### 1. Reading about {% data variables.product.prodname_ghe_cloud %} on {% data variables.product.prodname_docs %}

{% data reusables.docs.ghec-docs %}

{% data reusables.enterprise.best-practices %}

### 2. Learning with {% data variables.product.prodname_learning %}

Enterprise members can learn new skills by completing fun, realistic projects in your very own GitHub repository with [{% data variables.product.prodname_learning %}](https://skills.github.com/). Each course is a hands-on lesson created by the GitHub community and taught by a friendly bot.

For more information, see "[AUTOTITLE](/get-started/start-your-journey/git-and-github-learning-resources)."

### 3. Supporting the open source community

{% data reusables.getting-started.sponsors %}

### 4. Contacting {% data variables.contact.github_support %}

{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} allows you to submit priority support requests with a target eight-hour response time. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support)."
