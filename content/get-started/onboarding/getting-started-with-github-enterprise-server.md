---
title: Getting started with GitHub Enterprise Server
intro: 'Get started with setting up and managing your {% data variables.product.prodname_ghe_server %} instance.'
versions:
  ghes: '*'
---

This guide will walk you through setting up, configuring and managing your {% data variables.product.prodname_ghe_server %} instance as an enterprise owner or administrator.

{% data variables.product.prodname_dotcom %} provides two types of Enterprise products:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

The main difference between the products is that {% data variables.product.prodname_ghe_cloud %} is hosted by {% data variables.product.prodname_dotcom %}, while {% data variables.product.prodname_ghe_server %} is self-hosted. 

For an overview of how {% data variables.product.prodname_ghe_server %} works, see "[System overview](/admin/overview/system-overview?learn=deploy_an_instance)."

## Part 1: Installing {% data variables.product.prodname_ghe_server %}
To get started with {% data variables.product.prodname_ghe_server %}, you will need to create your enterprise account, install the instance, use the Management Console for initial setup, configure your instance, and manage billing. 
### 1. Creating your enterprise account
Before you install {% data variables.product.prodname_ghe_server %}, you will first need to create an enterprise account on GitHub by contacting [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact). For more information, see "[About enterprise accounts](/admin/overview/about-enterprise-accounts)."
### 2. Installing a {% data variables.product.prodname_ghe_server %} instance
To get started with {% data variables.product.prodname_ghe_server %}, you will need to install your instance on a virtualization platform of your choice. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/admin/installation/setting-up-a-github-enterprise-server-instance)."

### 3. Using the Management Console
You will use the Management Console to walk through the initial setup process when first launching your instance. You can also use the  Management Console to manage virtual appliance settings such as the domain, authentication and SSL. For more information, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)."

### 4. Configuring your {% data variables.product.prodname_ghe_server %} instance
In addition to the Management Console, you can use the site admin dashboard and the administrative shell (SSH) to manage your enterprise. You can configure applications and rate limits, view reports, use command-line utilities, and much more. For more information, see "[Configuring your enterprise](/admin/configuration/configuring-your-enterprise)."

You can use the default network settings used by {% data variables.product.prodname_ghe_server %} via the dynamic host configuration protocol (DHCP), or you can also configure the network settings using the virtual machine console. You can also configure a proxy server or firewall rules. For more information, see "[Configuring network settings](/admin/configuration/configuring-network-settings)."

### 5. Configuring high availability
You can configure your {% data variables.product.prodname_ghe_server %} instance for high availability so that any hardware failures or major network outages don't disrupt service. For more information, see "[Configuring high availability](/admin/enterprise-management/configuring-high-availability)."

### 6. Designating backups and disaster recovery
You can use {% data variables.product.prodname_ghe_server %} Backup Utilities to configure automated backups of your {% data variables.product.prodname_ghe_server %} instance, so that you can protect your production data. For more information, see "[Configuring backups on your appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)."

### 7. Geo-replication
{% data variables.product.prodname_ghe_server %} can help to reduce latency between different hosts and locations, if your organization has offices in multiple locations. For more information, see "[About geo-replication](/admin/enterprise-management/configuring-high-availability/about-geo-replication)."
### 8. Managing billing for your enterprise
Billing for all the organizations and {% data variables.product.prodname_ghe_server %} instances connected to your enterprise account is aggregated into a single bill charge for all of your paid {% data variables.product.prodname_dotcom %}.com services. Enterprise owners and billing managers can access and manage billing settings for enterprise accounts. For more information, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

## Part 2: Organizing and managing your team
As an enterprise owner or administrator, you can manage settings on user, repository, team and organization levels. You can manage users in your enterprise, create and manage organizations, set policies for repository management, and create and manage teams.

### 1. Managing users of your enterprise instance
You can manage user settings and audit user activity in your enterprise, including promoting a user to a site administrator, managing dormant and suspended users, and customizing messages that users will see on your {% data variables.product.prodname_ghe_server %} instance. For more information, see "[Managing users in your enterprise](/admin/user-management/managing-users-in-your-enterprise)."

### 2. Creating organizations
You can create new organizations in your enterprise to reflect your company or group's structure. For more information, see "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

### 3. Adding members to organizations
You can add members to organizations in your enterprise as long as you are an organization owner in the organizations you want to manage. You can also configure visibility of organization membership. For more information, see "[Adding people to your organization](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)" and "[Configuring visibility for organization membership](/admin/user-management/managing-organizations-in-your-enterprise/configuring-visibility-for-organization-membership)."

### 4. Creating teams
Teams are groups of organization members that can be granted permissions to specific repositories as a group. You can create individual teams or multiple levels of nested teams in each of your organizations. For more information, see "[Creating teams](/admin/user-management/managing-organizations-in-your-enterprise/creating-teams)" and "[Adding people to teams](/admin/user-management/managing-organizations-in-your-enterprise/adding-people-to-teams)."

### 5. Setting organization and repository permission levels
We recommend giving a limited number of members in each organization an organization owner role, which provides complete administrative access for that organization. For more information, see "[Permission levels for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)."

For organizations where you have admin permissions, you can also customize access to each repository with granular permission levels. For more information, see "[Repository permissions levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)."

### 6. Enforcing repository management policies
 As an enterprise owner, you can set repository management policies for all organizations in your enterprise, or allow policies to be set in each organization. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)."

## Part 3: Building securely
To make your enterprise as secure as possible, you can configure authentication for users, use tools and audit logging to stay in compliance, configure security and analysis features for your organizations, and optionally enable {% data variables.product.prodname_GH_advanced_security %}.
### 1. Authenticating users
You can use {% data variables.product.prodname_ghe_server %}'s built-in authentication method, or you can choose between an established authentication provider, such as CAS, LDAP, or SAML, to integrate your existing accounts and centrally manage user access to your {% data variables.product.prodname_ghe_server %} instance. For more information, see "[Authenticating users for your {% data variables.product.prodname_ghe_server %} instance](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)."

You can also require two-factor authentication for each of your organizations. For more information, see "[Requiring two factor authentication for an organization](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)."

### 2. Staying in compliance
You can implement required status checks and commit verifications to enforce your organization's compliance standards and automate compliance workflows. You can also use the audit log for your organization to review actions performed by your team. For more information, see "[Enforcing policy with pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks)" and "[Audit logging](/enterprise-server@3.1/admin/user-management/monitoring-activity-in-your-enterprise/audit-logging)."

### 3. Configuring security features for your organizations
You can use a variety of {% data variables.product.prodname_dotcom %} security features, including security policies, dependency graphs, secret scanning and Dependabot security and version updates, to keep the organizations in your enterprise secure. For more information, see "[Securing your organization](/code-security/getting-started/securing-your-organization)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
### 4. Enabling {% data variables.product.prodname_GH_advanced_security %} features
You can upgrade your {% data variables.product.prodname_ghe_server %} license to include {% data variables.product.prodname_GH_advanced_security %}. This provides extra features that help users find and fix security problems in their code, such as code and secret scanning. For more information, see "[{% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

## Part 4: Customizing and automating your enterprise's work on {% data variables.product.prodname_dotcom %}
You can customize and automate work in organizations in your enterprise with {% data variables.product.prodname_dotcom %} and {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_dotcom %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} , and {% data variables.product.prodname_pages %}.

### 1. Building {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}
You can build integrations with the {% data variables.product.prodname_dotcom %} API, such as {% data variables.product.prodname_github_apps %} or {% data variables.product.prodname_oauth_apps %}, for use in organizations in your enterprise to complement and extend your workflows. For more information, see "[About apps](/developers/apps/getting-started-with-apps/about-apps)."
### 2. Using the {% data variables.product.prodname_dotcom %} API
{% data reusables.getting-started.api %}
### 3. Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

For more information on enabling and configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."

### 4. Publishing and managing {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

For more information on enabling and configuring {% data variables.product.prodname_registry %} for your {% data variables.product.prodname_ghe_server %} instance, see "[Getting started with {% data variables.product.prodname_registry %} for your enterprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."
### 5. Using {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository in your enterprise and publishes a website. You can enable or disable {% data variables.product.prodname_pages %} for your users at the organization level. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

## Part 5: Connecting with other {% data variables.product.prodname_dotcom %} resources
You can use {% data variables.product.prodname_github_connect %} and {% data variables.product.prodname_insights %} to share resources and understand and improve your processes.

### 1. Enabling {% data variables.product.prodname_github_connect %}
If you are the owner of both a {% data variables.product.prodname_ghe_server %} instance and a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account, you can enable {% data variables.product.prodname_github_connect %}. {% data variables.product.prodname_github_connect %} allows you to share specific workflows and features between your {% data variables.product.prodname_ghe_server %} instance and {% data variables.product.prodname_ghe_cloud %}, such as unified search and contributions. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)."
### 2. Using {% data variables.product.prodname_insights %}
{% data variables.product.prodname_insights %} is a standalone application that provides analytic reports and metrics based on data from your {% data variables.product.prodname_ghe_server %} instance. You can use these reports to understand and improve your software delivery process. For more information, see "[About {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/installing-and-updating-github-insights/about-github-insights)."

## Part 6: Using {% data variables.product.prodname_dotcom %}'s learning and support resources
Your users can learn more about Git and {% data variables.product.prodname_dotcom %} with our learning resources, and you can get the support you need when setting up and managing your {% data variables.product.prodname_ghe_server %} instance with {% data variables.product.prodname_dotcom %} Enterprise Support. 
### 1. Learning with {% data variables.product.prodname_learning %}
Your users can learn new skills by completing fun, realistic projects in their very own {% data variables.product.prodname_dotcom %} repository with [{% data variables.product.prodname_learning %}](https://lab.github.com/). Each course is a hands-on lesson created by the {% data variables.product.prodname_dotcom %} community and taught by the friendly Learning Lab bot.

For more information, see "[Git and {% data variables.product.prodname_dotcom %} learning resources](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)."
### 2. Working with {% data variables.product.prodname_dotcom %} Enterprise Support
{% data variables.product.prodname_ghe_server %} includes access to {% data variables.product.prodname_dotcom %} Enterprise Support. {% data variables.product.prodname_dotcom %} Enterprise Support can help you troubleshoot issues that come up on {% data variables.product.prodname_ghe_server %}. You can also choose to sign up for {% data variables.product.prodname_dotcom %} Premium Support for additional features. For more information, see "[About {% data variables.product.prodname_dotcom %} Enterprise Support](/admin/enterprise-support/overview/about-github-enterprise-support)."
