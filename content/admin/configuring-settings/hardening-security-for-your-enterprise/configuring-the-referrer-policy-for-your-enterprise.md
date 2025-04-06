---
title: Configuring the referrer policy for your enterprise
shortTitle: Configure referrer policy
intro: 'You can increase the privacy of {% data variables.location.product_location %} by configuring the policy for cross-origin requests.'
redirect_from:
  - /admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise
  - /admin/configuration/hardening-security-for-your-enterprise/configuring-the-referrer-policy-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
---

## About the referrer policy for your enterprise

The referrer policy controls the information that {% data variables.product.product_name %} transmits in HTTP headers when someone visits a link from {% data variables.location.product_location %} to an external site.

By default, when a user on {% data variables.location.product_location %} visits a link to another site from a file or comment on your instance, the request includes the hostname for your instance in plain text within the `Referer` header. If the link leads to an external website, the owner of the website could read the hostname for your instance in requests or log files.

You can control the information that {% data variables.product.product_name %} sends when a user visits a link from your instance.

## Enabling the `same-origin` referrer policy

You can enable the `same-origin` referrer policy to instruct modern browsers to exclude the hostname for {% data variables.location.product_location %} from requests to external websites. The setting applies to all links from the web interface on your instance. By default, {% data variables.product.product_name %} uses the `origin-when-cross-origin` and `strict-origin-when-cross-origin` referrer policies, which means your instance's hostname will appear in HTTP and HTTPS requests to external websites.

{% note %}

**Note**: Changing the referrer policy to `same-origin` can affect external sites that expect a hostname in the HTTP headers for a request.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-hidden="true" %} **Settings**, click **Authentication security**.
1. Under "User Agent Referrer Policy", select **Enable same origin referrer policy for all organizations**.
1. Click **Save**.
