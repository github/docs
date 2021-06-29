---
title: Getting started with GitHub AE
intro: 'Get started with setting up and configuring {% data variables.product.prodname_ghe_managed %} for your enterprise.'
versions:
  ghae: '*'
---

## Part 1: Setting up {% data variables.product.prodname_ghe_managed %}
To get started with {% data variables.product.prodname_ghe_managed %}, you can create your enterprise account, initialize {% data variables.product.prodname_ghe_managed %}, configure an IP allow list, manage billing, and configure user authentication and provisioning for your enterprise. 

### 1. Creating your {% data variables.product.prodname_ghe_managed %} enterprise account
You will first need to purchase {% data variables.product.prodname_ghe_managed %}. For more information, contact [GitHub's Sales team](/admin/configuration/configuring-your-enterprise/initializing-github-ae).

After you purchase {% data variables.product.prodname_ghe_managed %}, we will ask you for email address and username details for the person you want to initialize the enterprise, which will then be used by your dedicated technical account manager in GitHub Enterprise Support to create an account. 

### 2. Initializing {% data variables.product.prodname_ghe_managed %}
When your {% data variables.product.prodname_ghe_managed %} enterprise account has been created, you will receive an email to log into GitHub AE and complete the initialization. During initialization, you, as the enterprise owner,  will name your enterprise, configure SAML SSO, create policies for all organizations in your enterprise, and configure a support contact for your users. For more information, see "[Initializing {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae)."

### 3. Restricting network traffic
You can configure an allow list for specific IP addresses to restrict access to assets owned by organizations in your enterprise account. For more information, see "[Restricting network traffic to your enterprise](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)."

### 4. Managing identity and access for your enterprise
You can centrally manage access to GitHub AE from an identity provider (IdP) using SAML single sign-on (SSO) for user authentication and System for Cross-domain Identity Management (SCIM) for user provisioning. Once you configure it, you can assign or unassign users to the application from the IdP, creating or disabling user accounts in the enterprise. For more information, see "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)."

### 5. Managing billing for your enterprise
Enterprise owners can view billing information for GitHub AE. For more information, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

## Part 2: Organizing and managing your users
As an enterprise owner for GitHub AE, you can manage settings on user, repository, team and organization levels. You can manage users in your enterprise, create and manage organizations, set policies for repository management, and create and manage teams.

### 1. Managing and auditing users of your enterprise
You can manage user settings and audit user activity in your enterprise, including managing dormant users, viewing the audit log for user activity in your enterprise, and customizing messages that users will see on your enterprise. For more information, see "[Managing users in your enterprise](/admin/user-management/managing-users-in-your-enterprise)."

### 2. Creating organizations
You can create new organizations in your enterprise to reflect your company or group's structure. For more information, see "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

### 3. Adding members to organizations
You can add members to organizations in your enterprise as long as you are an organization owner in the organizations you want to manage. You can also configure visibility of organization membership. For more information, see "[Adding people to your organization](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)" and "[Configuring visibility for organization membership](/admin/user-management/managing-organizations-in-your-enterprise/configuring-visibility-for-organization-membership)."

### 4. Creating teams
Teams are groups of organization members that can be granted permissions to specific repositories as a group. You can create individual teams or multiple levels of nested teams in each of your organizations. For more information, see "[Creating teams](/organizations/organizing-members-into-teams/creating-a-team)" and "[Adding people to teams](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."

### 5. Setting organization and repository permission levels
We recommend giving a limited number of members in each organization an organization owner role, which provides complete administrative access for that organization. For more information, see "[Permission levels for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)."

For organizations where you have admin permissions, you can also customize access to each repository with granular permission levels. For more information, see "[Repository permissions levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)."

### 6. Enforcing repository management policies
As an enterprise owner, you can set repository management policies for all organizations in your enterprise, or allow policies to be set in each organization. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)."

## Part 3: Building securely
To make your enterprise as secure as possible, you can monitor your enterprise and configure security and analysis features for your organizations.

### 1. Monitoring your enterprise
You can monitor your application with you activity dashboard and audit logging. For more information, see "[Monitoring activity in your enterprise](/admin/user-management/monitoring-activity-in-your-enterprise)."

### 2. Configuring security features for your organizations
You can use a variety of {% data variables.product.prodname_dotcom %} security features, including security policies, dependency graphs, secret scanning and Dependabot security and version updates, to keep the organizations in your enterprise secure. For more information, see "[Securing your organization](/code-security/getting-started/securing-your-organization)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

## Part 4: Customizing and automating your enterprise's work on {% data variables.product.prodname_dotcom %}
You can customize and automate work in organizations in your enterprise with the {% data variables.product.prodname_dotcom %} API, {% data variables.product.prodname_actions %}, and {% data variables.product.prodname_pages %}.

### 2. Using the {% data variables.product.prodname_dotcom %} API
{% data reusables.getting-started.api %}

### 3. Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

For more information on enabling and configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae)."

### 4. Using {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository in your enterprise and publishes a website. You can enable or disable {% data variables.product.prodname_pages %} for your users at the organization level. For more information, see "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/admin/configuration/configuring-your-enterprise/configuring-github-pages-for-your-enterprise)."


## Part 6: Using {% data variables.product.prodname_dotcom %}'s learning and support resources
Your users can learn more about Git and {% data variables.product.prodname_dotcom %} with our learning resources, and you can get the support you need when setting up and managing your {% data variables.product.prodname_ghe_server %} instance with {% data variables.product.prodname_dotcom %} Enterprise Support. 

### 1. Learning with {% data variables.product.prodname_learning %}
Your users can learn new skills by completing fun, realistic projects in their very own {% data variables.product.prodname_dotcom %} repository with [{% data variables.product.prodname_learning %}](https://lab.github.com/). Each course is a hands-on lesson created by the {% data variables.product.prodname_dotcom %} community and taught by the friendly Learning Lab bot.

For more information, see “[Git and {% data variables.product.prodname_dotcom %} learning resources](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)."

### 2. Working with {% data variables.product.prodname_dotcom %} Enterprise Support
{% data variables.product.prodname_ghe_managed %} includes access to {% data variables.product.prodname_dotcom %} Enterprise Support. {% data variables.product.prodname_dotcom %} Enterprise Support can help you troubleshoot issues that come up on {% data variables.product.prodname_ghe_managed %}. For more information, see "[About {% data variables.product.prodname_dotcom %} Enterprise Support](/admin/enterprise-support/overview/about-github-enterprise-support)."
