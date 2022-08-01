---
title: Setting up a trial of GitHub Enterprise Server
intro: 'You can try {% data variables.product.prodname_ghe_server %} for free.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
---

## About trials of {% data variables.product.prodname_ghe_server %}

You can request a 45-day trial to evaluate {% data variables.product.prodname_ghe_server %}. Your trial will be installed as a virtual appliance, with options for on-premises or cloud deployment. For more information about {% data variables.product.prodname_ghe_server %}, and for a list of supported virtualization platforms, see "[About {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)."

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}Security{% endif %} alerts and {% data variables.product.prodname_github_connect %} are not currently available in trials of {% data variables.product.prodname_ghe_server %}. For a demonstration of these features, contact {% data variables.contact.contact_enterprise_sales %}. For more information about these features, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

Trials are also available for {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Setting up a trial of {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)."

{% data reusables.products.which-product-to-use %}

## Setting up your trial of {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} is installed as a virtual appliance. Determine the best person in your organization to set up a virtual machine, and ask that person to submit a [trial request](https://enterprise.github.com/trial). You can begin your trial immediately after submitting a request.

To set up an account for the {% data variables.product.prodname_enterprise %} Web portal, click the link in the email you received after submitting your trial request, and follow the prompts. Then, download your license file. For more information, see "[Managing your license for {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)."

To install {% data variables.product.prodname_ghe_server %}, download the necessary components and upload your license file. For more information, see the instructions for your chosen visualization platform in "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)."

## Next steps

To get the most out of your trial, follow these steps:

1. [Create an organization](/enterprise-server@latest/admin/user-management/creating-organizations).
2. To learn the basics of using {% data variables.product.prodname_dotcom %}, see:
   - [Intro to {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/) webcast
   - [Understanding the {% data variables.product.prodname_dotcom %} flow](https://guides.github.com/introduction/flow/) in {% data variables.product.prodname_dotcom %} Guides
   - [Hello World](https://guides.github.com/activities/hello-world/) in {% data variables.product.prodname_dotcom %} Guides
   - "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)"
3. To configure your instance to meet your organization's needs, see "[Configuring your enterprise](/enterprise-server@latest/admin/configuration/configuring-your-enterprise)."
4. To integrate {% data variables.product.prodname_ghe_server %} with your identity provider, see "[Using SAML](/enterprise-server@latest/admin/user-management/using-saml)" and "[Using LDAP](/enterprise-server@latest/admin/authentication/using-ldap)."
5. Invite an unlimited number of people to join your trial.
   - Add users to your {% data variables.product.prodname_ghe_server %} instance using built-in authentication or your configured identity provider. For more information, see "[Using built in authentication](/enterprise-server@latest/admin/user-management/using-built-in-authentication)."
   - To invite people to become account administrators, visit the [{% data variables.product.prodname_enterprise %} Web portal](https://enterprise.github.com/login).

    {% note %}

    **Note:** People you invite to become account administrators will receive an email with a link to accept your invitation.

    {% endnote %}

{% data reusables.products.product-roadmap %}

## Finishing your trial

You can upgrade to full licenses in the [{% data variables.product.prodname_enterprise %} Web portal](https://enterprise.github.com/login) at any time during the trial period.

If you haven't upgraded by the last day of your trial, you'll receive an email notifying you that your trial had ended. If you need more time to evaluate {% data variables.product.prodname_enterprise %}, contact {% data variables.contact.contact_enterprise_sales %} to request an extension.

## Further reading

- "[Setting up a trial of {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)"
