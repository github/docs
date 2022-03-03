---
title: Getting started with GitHub Enterprise Cloud
intro: 'Get started with setting up and managing your {% data variables.product.prodname_ghe_cloud %} organization or enterprise account.'
versions:
  fpt: '*'
  ghec: '*'
---

This guide will walk you through setting up, configuring and managing your {% data variables.product.prodname_ghe_cloud %} account as an organization or enterprise owner.

{% data reusables.enterprise.ghec-cta-button %}

## Part 1: Choosing your account type

{% data variables.product.prodname_dotcom %} provides two types of Enterprise products:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

The main difference between the products is that {% data variables.product.prodname_ghe_cloud %} is hosted by {% data variables.product.prodname_dotcom %}, while {% data variables.product.prodname_ghe_server %} is self-hosted.

With {% data variables.product.prodname_ghe_cloud %}, you have the option of using {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}

If you choose to let your members create and manage their own user accounts instead, there are two types of accounts you can use with {% data variables.product.prodname_ghe_cloud %}:

- A single organization account
- An enterprise account that contains multiple organizations

### 1. Understanding the differences between an organization account and enterprise account

Both organization and enterprise accounts are available with {% data variables.product.prodname_ghe_cloud %}. An organization is a shared account where groups of people can collaborate across many projects at once, and owners and administrators can manage access to data and projects. An enterprise account enables collaboration between multiple organizations, and allows owners to centrally manage policy, billing and security for these organizations. For more information on the differences, see "[Organizations and enterprise accounts](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)."



If you choose an enterprise account, keep in mind that some policies can be set only at an organization level, while others can be enforced for all organizations in an enterprise.

Once you choose the account type you would like, you can proceed to setting up your account. In each of the sections in this guide, proceed to either the single organization or enterprise account section based on your account type.

## Part 2: Setting up your account
To get started with {% data variables.product.prodname_ghe_cloud %}, you will want to create your organization or enterprise account and set up and view billing settings, subscriptions and usage.
### Setting up a single organization account with {% data variables.product.prodname_ghe_cloud %}

#### 1. 关于组织
组织是共享帐户，供多个项目的人员同时协作之用。 With {% data variables.product.prodname_ghe_cloud %}, owners and administrators can manage their organization with sophisticated user authentication and management, as well as escalated support and security options. 更多信息请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。
#### 2. Creating or upgrading an organization account

To use an organization account with {% data variables.product.prodname_ghe_cloud %}, you will first need to create an organization. When prompted to choose a plan, select "Enterprise". 更多信息请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

Alternatively, if you have an existing organization account that you would like to upgrade, follow the steps in "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)."
#### 3. Setting up and managing billing

When you choose to use an organization account with {% data variables.product.prodname_ghe_cloud %}, you'll first have access to a [30-day trial](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). If you don't purchase {% data variables.product.prodname_enterprise %} or {% data variables.product.prodname_team %} before your trial ends, your organization will be downgraded to {% data variables.product.prodname_free_user %} and lose access to any advanced tooling and features that are only included with paid products. For more information, see "[Finishing your trial](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)."

Your organization's billing settings page allows you to manage settings like your payment method and billing cycle, view information about your subscription, and upgrade your storage and {% data variables.product.prodname_actions %} minutes. 有关管理帐单设置的更多信息，请参阅"[管理您的 {% data variables.product.prodname_dotcom %} 计费设置](/billing/managing-your-github-billing-settings)"。

只有拥有*所有者*或*帐单管理员*角色的组织成员才能访问或更改组织的帐单设置。 A billing manager is a user who manages the billing settings for your organization and does not use a paid license in your organization's subscription. 有关向组织添加帐单管理员的详细信息，请参阅“[将帐单管理员添加到组织](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”。

### Setting up an enterprise account with {% data variables.product.prodname_ghe_cloud %}
 {% note %}

To get an enterprise account created for you, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

 {% endnote %}

#### 1. 关于企业帐户

An enterprise account allows you to centrally manage policy and settings for multiple {% data variables.product.prodname_dotcom %} organizations, including member access, billing and usage and security. 更多信息请参阅“[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)”。
#### 2. 将组织添加到企业帐户

您可以在企业帐户中创建要管理的新组织。 For more information, see "[Adding organizations to your enterprise](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)."

Contact your {% data variables.product.prodname_dotcom %} sales account representative if you want to transfer an existing organization to your enterprise account.
#### 3. 查看企业帐户的订阅和使用情况
You can view your current subscription, license usage, invoices, payment history, and other billing information for your enterprise account at any time. Both enterprise owners and billing managers can access and manage billing settings for enterprise accounts. For more information, see  "[Viewing the subscription and usage for your enterprise account](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)."

## Part 3: Managing your organization or enterprise members and teams with {% data variables.product.prodname_ghe_cloud %}

### Managing members and teams in your organization
You can set permissions and member roles, create and manage teams, and give people access to repositories in your organization.
#### 1. 管理组织成员
{% data reusables.getting-started.managing-org-members %}
#### 2. 组织权限和角色
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. 关于和创建团队
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. 管理团队设置
{% data reusables.getting-started.managing-team-settings %}
#### 5. 为人员和团队提供对存储库、项目板和应用程序的访问权限
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Managing members of an enterprise account
Managing members of an enterprise is separate from managing members or teams in an organization. It is important to note that enterprise owners or administrators cannot access organization-level settings or manage members for organizations in their enterprise unless they are made an organization owner. For more information, see the above section, "[Managing members and teams in your organization](#managing-members-and-teams-in-your-organization)."

If your enterprise uses {% data variables.product.prodname_emus %}, your members are fully managed through your identity provider. Adding members, making changes to their membership, and assigning roles is all managed using your IdP. 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

If your enterprise does not use {% data variables.product.prodname_emus %}, follow the steps below.

#### 1. Assigning roles in an enterprise
By default, everyone in an enterprise is a member of the enterprise. There are also administrative roles, including enterprise owner and billing manager, that have different levels of access to enterprise settings and data. 更多信息请参阅“[企业中的角色](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。
#### 2. 邀请人员管理企业
You can invite people to manage your enterprise as enterprise owners or billing managers, as well as remove those who no longer need access. For more information, see "[Inviting people to manage your enterprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)."

You can also grant enterprise members the ability to manage support tickets in the support portal. 更多信息请参阅“[管理企业的支持权利](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”。
#### 3. 查看企业中的人员
To audit access to enterprise-owned resources or user license usage, you can view every enterprise administrator, enterprise member, and outside collaborator in your enterprise. You can see the organizations that a member belongs to and the specific repositories that an outside collaborator has access to. 更多信息请参阅“[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)”。

## Part 4: Managing security with {% data variables.product.prodname_ghe_cloud %}

* [Managing security for a single organization](#managing-security-for-a-single-organization)
* [Managing security for an {% data variables.product.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Managing security for an enterprise account without {% data variables.product.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Managing security for a single organization
You can help keep your organization secure by requiring two-factor authentication, configuring security features, reviewing your organization's audit log and integrations, and enabling SAML single sign-on and team synchronization.
#### 1. 需要双重身份验证
{% data reusables.getting-started.requiring-2fa %}
#### 2. 为组织配置安全功能
{% data reusables.getting-started.configuring-security-features %}

#### 3. 查看组织的审核日志和集成
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Enabling and enforcing SAML single sign-on for your organization
If you manage your applications and the identities of your organization members with an identity provider (IdP), you can configure SAML single-sign-on (SSO) to control and secure access to organization resources like repositories, issues and pull requests. When members of your organization access organization resources that use SAML SSO, {% data variables.product.prodname_dotcom %} will redirect them to your IdP to authenticate. For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

Organization owners can choose to disable, enable but not enforce, or enable and enforce SAML SSO. For more information, see "[Enabling and testing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)" and "[Enforcing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)."
#### 5. 管理组织的团队同步
Organization owners can enable team synchronization between your identity provider (IdP) and {% data variables.product.prodname_dotcom %} to allow organization owners and team maintainers to connect teams in your organization with IdP groups. 更多信息请参阅“[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”。

### Managing security for an {% data variables.product.prodname_emu_enterprise %}

With {% data variables.product.prodname_emus %}, access and identity is managed centrally through your identity provider. Two-factor authentication and other login requirements should be enabled and enforced on your IdP.

#### 1. Enabling and SAML single sign-on and provisioning in your {% data variables.product.prodname_emu_enterprise %}

In an {% data variables.product.prodname_emu_enterprise %}, all members are provisioned and managed by your identity provider. You must enable SAML SSO and SCIM provisioning before you can start using your enterprise. For more information on configuring SAML SSO and provisioning for an {% data variables.product.prodname_emu_enterprise %}, see "[Configuring SAML single sign-on for Enterprise Managed Users](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

#### 2. Managing teams in your {% data variables.product.prodname_emu_enterprise %} with your identity provider

You can connect teams in your organizations to security groups in your identity provider, managing membership of your teams and access to repositories through your IdP. For more information, see "[Managing team memberships with identity provider groups](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)."

#### 3. Managing allowed IP addresses for organizations in your {% data variables.product.prodname_emu_enterprise %}

You can configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your {% data variables.product.prodname_emu_enterprise %}. 更多信息请参阅“[在企业中实施安全设置策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”。

#### 4. Enforcing policies for Advanced Security features in your {% data variables.product.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Managing security for an enterprise account without {% data variables.product.prodname_managed_users %}
To manage security for your enterprise, you can require two-factor authentication, manage allowed IP addresses, enable SAML single sign-on and team synchronization at an enterprise level, and sign up for and enforce GitHub Advanced Security features.

#### 1. Requiring two-factor authentication and managing allowed IP addresses for organizations in your enterprise account
企业所有者可以要求企业帐户拥有的所有组织中的组织成员、帐单管理员和外部协作者使用双重身份验证来保护其个人帐户。 Before doing so, we recommend notifying all who have access to organizations in your enterprise. You can also configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your enterprise account.

For more information on enforcing two-factor authentication and allowed IP address lists, see "[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)."
#### 2. Enabling and enforcing SAML single sign-on for organizations in your enterprise account
You can centrally manage access to your enterprise's resources, organization membership and team membership using your IdP and SAM single sign-on (SSO). Enterprise owners can enable SAML SSO across all organizations owned by an enterprise account. 更多信息请参阅“[关于企业的身份和访问权限管理](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)”。

#### 3. Managing team synchronization
You can enable and manage team synchronization between an identity provider (IdP) and {% data variables.product.prodname_dotcom %} to allow organizations owned by your enterprise account to manage team membership with IdP groups. 更多信息请参阅“[管理企业帐户中组织的团队同步](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”。

#### 4. Enforcing policies for Advanced Security features in your enterprise account
{% data reusables.getting-started.enterprise-advanced-security %}

## Part 5: Managing organization and enterprise level policies and settings

### Managing settings for a single organization
To manage and moderate your organization, you can set organization policies, manage permissions for repository changes, and use organization-level community health files.
#### 1. 管理组织策略
{% data reusables.getting-started.managing-org-policies %}
#### 2. 管理存储库更改
{% data reusables.getting-started.managing-repo-changes %}
#### 3. 使用组织级别的社区健康文件和调解工具
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Managing settings for an enterprise account
To manage and moderate your enterprise, you can set policies for organizations within the enterprise, view audit logs, configure webhooks, and restrict email notifications.
#### 1. Managing policies for organizations in your enterprise account

You can choose to enforce a number of policies for all organizations owned by your enterprise, or choose to allow these policies to be set in each organization. Types of policies you can enforce include repository management, project board, and team policies. 更多信息请参阅“[为您的企业设置策略](/enterprise-cloud@latest/admin/policies)”。
#### 2. Viewing audit logs, configuring webhooks, and restricting email notifications for your enterprise
You can view actions from all of the organizations owned by your enterprise account in the enterprise audit log. You can also configure webhooks to receive events from organizations owned by your enterprise account. For more information, see "[Viewing the audit logs for organizations in your enterprise](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/viewing-the-audit-logs-for-organizations-in-your-enterprise)" and "[Managing global webhooks](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks)."

You can also restrict email notifications for your enterprise account so that enterprise members can only use an email address in a verified or approved domain to receive notifications. 更多信息请参阅“[限制企业的电子邮件通知](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”。

## Part 6: Customizing and automating your organization or enterprise's work on {% data variables.product.prodname_dotcom %}
Members of your organization or enterprise can use tools from the {% data variables.product.prodname_marketplace %}, the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, and existing {% data variables.product.product_name %} features to customize and automate your work.

### 1. 使用 {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. 使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API
{% data reusables.getting-started.api %}
### 3. 构建 {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. 发布和管理 {% data variables.product.prodname_registry %}
{% data reusables.getting-started.packages %}
### 5. 使用 {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository and publishes a website. You can manage the publication of {% data variables.product.prodname_pages %} sites at the organization level. For more information, see  "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" and "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."
## Part 7: Participating in {% data variables.product.prodname_dotcom %}'s community

Members of your organization or enterprise can use GitHub's learning and support resources to get the help they need. You can also support the open source community.

### 1. Reading about {% data variables.product.prodname_ghe_cloud %} on {% data variables.product.prodname_docs %}
You can read documentation that reflects the features available with {% data variables.product.prodname_ghe_cloud %}. For more information, see "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)."

### 2. 通过 {% data variables.product.prodname_learning %} 学习
Members of your organization or enterprise can learn new skills by completing fun, realistic projects in your very own GitHub repository with [{% data variables.product.prodname_learning %}](https://lab.github.com/). Each course is a hands-on lesson created by the GitHub community and taught by the friendly Learning Lab bot.

For more information, see "[Git and {% data variables.product.prodname_dotcom %} learning resources](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)."
### 3. 支持开源社区
{% data reusables.getting-started.sponsors %}

### 4. 联系 {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} allows you to submit priority support requests with a target eight-hour response time. 更多信息请参阅“[{% data variables.product.prodname_ghe_cloud %} 支持](/github/working-with-github-support/github-enterprise-cloud-support)”。
