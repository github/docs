---
title: Getting started with GitHub Enterprise Server
intro: 'Get started with setting up and managing {% data variables.location.product_location %}.'
versions:
  ghes: '*'
---

This guide will walk you through setting up, configuring and managing {% data variables.location.product_location %} as an enterprise administrator.

{% data variables.product.company_short %} provides two ways to deploy {% data variables.product.prodname_enterprise %}.

* **{% data variables.product.prodname_ghe_cloud %}**
* **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} hosts {% data variables.product.prodname_ghe_cloud %}. You can deploy and host {% data variables.product.prodname_ghe_server %} in your own datacenter or a supported cloud provider.

For more information about {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/overview/about-github-enterprise-server)."

## Part 1: Installing {% data variables.product.product_name %}

To get started with {% data variables.product.product_name %}, you will need to create your enterprise account, install the instance, use the {% data variables.enterprise.management_console %} for initial setup, configure your instance, and manage billing.

### 1. Creating your enterprise account

Before you install {% data variables.product.product_name %}, you can create an enterprise account on {% data variables.product.prodname_dotcom_the_website %} by contacting [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact). An enterprise account on {% data variables.product.prodname_dotcom_the_website %} is useful for billing and for shared features with {% data variables.product.prodname_dotcom_the_website %} via {% data variables.product.prodname_github_connect %}.  For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/about-enterprise-accounts)."

### 2. Installing {% data variables.product.product_name %}

To get started with {% data variables.product.product_name %}, you will need to install the appliance on a virtualization platform of your choice. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance)."

### 3. Using the {% data variables.enterprise.management_console %}

You will use the {% data variables.enterprise.management_console %} to walk through the initial setup process when first launching {% data variables.location.product_location %}. You can also use the  {% data variables.enterprise.management_console %} to manage instance settings such as the license, domain, authentication, and TLS. For more information, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-web-ui)."

### 4. Configuring {% data variables.location.product_location %}

In addition to the {% data variables.enterprise.management_console %}, you can use the site admin dashboard and the administrative shell (SSH) to manage {% data variables.location.product_location %}. For example, you can configure applications and rate limits, view reports, use command-line utilities. For more information, see "[AUTOTITLE](/admin/configuration)."

You can use the default network settings used by {% data variables.product.product_name %} via the dynamic host configuration protocol (DHCP), or you can also configure the network settings using the virtual machine console. You can also configure a proxy server or firewall rules. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings)."

### 5. Configuring high availability

You can configure {% data variables.location.product_location %} for high availability to minimize the impact of hardware failures and network outages. For more information, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability)."

### 6. Setting up a staging instance

You can set up a staging instance to test modifications, plan for disaster recovery, and try out updates before applying them to {% data variables.location.product_location %}.  For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

### 7. Designating backups and disaster recovery

To protect your production data, you can configure automated backups of {% data variables.location.product_location %} with {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see "[AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance)."

### 8. Managing billing for your enterprise

Billing for all the organizations and {% data variables.product.product_name %} instances connected to your enterprise account is aggregated into a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services. Enterprise owners and billing managers can access and manage billing settings for enterprise accounts. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)."

## Part 2: Organizing and managing your team

As an enterprise owner or administrator, you can manage settings on user, repository, team and organization levels. You can manage members of your enterprise, create and manage organizations, set policies for repository management, and create and manage teams.

### 1. Managing members of {% data variables.location.product_location %}

{% data reusables.getting-started.managing-enterprise-members %}

### 2. Creating organizations

{% data reusables.getting-started.creating-organizations %}

### 3. Adding members to organizations

{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Creating teams

{% data reusables.getting-started.creating-teams %}

### 5. Setting organization and repository permission levels

{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Enforcing repository management policies

{% data reusables.getting-started.enforcing-repo-management-policies %}

{% ifversion enterprise-readme %}

### 7. Creating a README for the enterprise

{% data reusables.enterprise.about-readmes %} For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-a-readme-for-an-enterprise)."

{% endif %}

## Part 3: Building securely

To increase the security of {% data variables.location.product_location %}, you can configure authentication for enterprise members, use tools and audit logging to stay in compliance, configure security and analysis features for your organizations, and optionally enable {% data variables.product.prodname_GH_advanced_security %}.

### 1. Authenticating enterprise members

You can use {% data variables.product.product_name %}'s built-in authentication method, or you can choose between an external authentication provider, such as CAS, LDAP, or SAML, to integrate your existing accounts and centrally manage user access to {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-identity-and-access-management)."

You can also require two-factor authentication for each of your organizations. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)."

### 2. Staying in compliance

You can implement required status checks and commit verifications to enforce your organization's compliance standards and automate compliance workflows. You can also use the audit log for your organization to review actions performed by your team. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policy-with-pre-receive-hooks)" and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."

{% ifversion ghes %}

### 3. Configuring security features for your organizations

{% data reusables.getting-started.configuring-security-features %}
{% endif %}

{% ifversion ghes %}

### 4. Enabling {% data variables.product.prodname_GH_advanced_security %} features

You can upgrade your {% data variables.product.product_name %} license to include {% data variables.product.prodname_GH_advanced_security %}. This provides extra features that help users find and fix security problems in their code, such as code and secret scanning. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."
{% endif %}

## Part 4: Customizing and automating your enterprise's work on {% data variables.product.prodname_dotcom %}

You can customize and automate work in organizations in your enterprise with {% data variables.product.prodname_dotcom %} and {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} , and {% data variables.product.prodname_pages %}.

### 1. Building {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

You can build integrations with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, such as {% data variables.product.prodname_github_apps %} or {% data variables.product.prodname_oauth_apps %}, for use in organizations in your enterprise to complement and extend your workflows. For more information, see "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps)."

### 2. Using the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API

{% data reusables.getting-started.api %}

{% ifversion ghes %}

### 3. Building {% data variables.product.prodname_actions %}

{% data reusables.getting-started.actions %}

For more information on enabling and configuring {% data variables.product.prodname_actions %} on {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."

### 4. Publishing and managing {% data variables.product.prodname_registry %}

{% data reusables.getting-started.packages %}

For more information on enabling and configuring {% data variables.product.prodname_registry %} for {% data variables.location.product_location %}, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."
{% endif %}

### 5. Using {% data variables.product.prodname_pages %}

{% data reusables.getting-started.github-pages-enterprise %}

## Part 5: Connecting with other {% data variables.product.prodname_dotcom %} resources

You can use {% data variables.product.prodname_github_connect %} to share resources.

If you are the owner of both a {% data variables.product.product_name %} instance and a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account, you can enable {% data variables.product.prodname_github_connect %}. {% data variables.product.prodname_github_connect %} allows you to share specific workflows and features between {% data variables.location.product_location %} and {% data variables.product.prodname_ghe_cloud %}, such as unified search and contributions. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."

## Part 6: Using {% data variables.product.prodname_dotcom %}'s learning and support resources

Your enterprise members can learn more about Git and {% data variables.product.prodname_dotcom %} with our learning resources, and you can get the support you need when setting up and managing {% data variables.location.product_location %} with {% data variables.product.prodname_dotcom %} Enterprise Support.

### 1. Reading about {% data variables.product.product_name %} on {% data variables.product.prodname_docs %}

You can read documentation that reflects the features available with {% data variables.product.prodname_ghe_server %}. For more information, see "[AUTOTITLE](/get-started/using-github-docs/about-versions-of-github-docs)."

{% data reusables.enterprise.best-practices %}

### 2. Learning with {% data variables.product.prodname_learning %}

{% data reusables.getting-started.learning-enterprise %}

### 3. Working with {% data variables.product.prodname_dotcom %} Enterprise Support

{% data reusables.getting-started.contact-support-enterprise %}
