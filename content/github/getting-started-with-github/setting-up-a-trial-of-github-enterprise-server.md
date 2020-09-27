---
title: Setting up a trial of GitHub Enterprise Server
intro: 'You can try {{ site.data.variables.product.prodname_ghe_server }} for free.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise/
  - /articles/setting-up-a-trial-of-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About trials of {{ site.data.variables.product.prodname_ghe_server }}

You can request a 45-day trial to evaluate {{ site.data.variables.product.prodname_ghe_server }}. Your trial will be installed as a virtual appliance, with options for on-premises or cloud deployment. For a list of supported visualization platforms, see "[Setting up a GitHub Enterprise Server instance](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_dependabot_short }}{% else %}Security{% endif %} alerts and {{ site.data.variables.product.prodname_github_connect }} are not currently available in trials of {{ site.data.variables.product.prodname_ghe_server }}. For a demonstration of these features, contact {{ site.data.variables.contact.contact_enterprise_sales }}. For more information about these features, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[Connecting {{ site.data.variables.product.prodname_ghe_server }} to {{ site.data.variables.product.prodname_dotcom_the_website }}](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

Trials are also available for {{ site.data.variables.product.prodname_ghe_cloud }}. For more information, see "[Setting up a trial of {{ site.data.variables.product.prodname_ghe_cloud }}](/articles/setting-up-a-trial-of-github-enterprise-cloud)."

{{ site.data.reusables.products.which-product-to-use }}

### Setting up your trial of {{ site.data.variables.product.prodname_ghe_server }}

{{ site.data.variables.product.prodname_ghe_server }} is installed as a virtual appliance. Determine the best person in your organization to set up a virtual machine, and ask that person to submit a [trial request](https://enterprise.github.com/trial). You can begin your trial immediately after submitting a request.

To set up an account for the {{ site.data.variables.product.prodname_enterprise }} Web portal, click the link in the email you received after submitting your trial request, and follow the prompts. Then, download your license file. For more information, see "[Managing your {{ site.data.variables.product.prodname_enterprise }} license](/enterprise/admin/installation/managing-your-github-enterprise-license)."

To install {{ site.data.variables.product.prodname_ghe_server }}, download the necessary components and upload your license file. For more information, see the instructions for your chosen visualization platform in "[Setting up a {{ site.data.variables.product.prodname_ghe_server }} instance](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)."

### Next steps

To get the most out of your trial, follow these steps:

1. [Create an organization](/enterprise/admin/user-management/creating-organizations).
2. To learn the basics of using {{ site.data.variables.product.prodname_dotcom }}, see:
   - [Quick start guide to {{ site.data.variables.product.prodname_dotcom }}](https://resources.github.com/webcasts/Quick-start-guide-to-GitHub/) webcast
   - [Understanding the {{ site.data.variables.product.prodname_dotcom }} flow](https://guides.github.com/introduction/flow/) in {{ site.data.variables.product.prodname_dotcom }} Guides
   - [Hello World](https://guides.github.com/activities/hello-world/) in {{ site.data.variables.product.prodname_dotcom }} Guides
3. To configure your instance to meet your organization's needs, see "[Configuring the {{ site.data.variables.product.prodname_ghe_server }} appliance](/enterprise/admin/installation/configuring-the-github-enterprise-server-appliance)."
4. To integrate {{ site.data.variables.product.prodname_ghe_server }} with your identity provider, see "[Using SAML](/enterprise/admin/user-management/using-saml)" and "[Using LDAP](/enterprise/admin/authentication/using-ldap)."
5. Invite an unlimited number of people to join your trial.
   - Add users to your {{ site.data.variables.product.prodname_ghe_server }} instance using built-in authentication or your configured identity provider. For more information, see "[Using built in authentication](/enterprise/admin/user-management/using-built-in-authentication)."
   - To invite people to become account administrators, visit the [{{ site.data.variables.product.prodname_enterprise }} Web portal](https://enterprise.github.com/login).

    {% note %}

    **Note:** People you invite to become account administrators will receive an email with a link to accept your invitation.

    {% endnote %}

{{ site.data.reusables.products.product-roadmap }}

### Finishing your trial

You can upgrade to full licenses in the [{{ site.data.variables.product.prodname_enterprise }} Web portal](https://enterprise.github.com/login) at any time during the trial period.

If you haven't upgraded by the last day of your trial, you'll receive an email notifying you that your trial had ended. If you need more time to evaluate {{ site.data.variables.product.prodname_enterprise }}, contact {{ site.data.variables.contact.contact_enterprise_sales }} to request an extension.

### Further reading

- "[Setting up a trial of {{ site.data.variables.product.prodname_ghe_cloud }}](/articles/setting-up-a-trial-of-github-enterprise-cloud)"
