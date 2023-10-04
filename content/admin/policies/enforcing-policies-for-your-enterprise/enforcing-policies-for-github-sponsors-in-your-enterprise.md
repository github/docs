---
title: Enforcing policies for GitHub Sponsors in your enterprise
intro: "Enterprise owners can control whether to allow the enterprise's organizations to sponsor open source projects."
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_sponsors %} in an enterprise.'
versions:
  feature: enterprise-orgs-sponsors-with-cc
type: how_to
topics:
  - Sponsors
  - Enterprise
  - Policies
shortTitle: '{% data variables.product.prodname_sponsors %} policies'
---

## About enterprise policies for {% data variables.product.prodname_sponsors %}

{% data variables.product.prodname_sponsors %} allows your organizations to financially support developers who build the open source projects you depend on. For more information, see "[AUTOTITLE](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)" and "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)."

By default, organizations that belong to an enterprise that pays by credit card cannot sponsor open source contributors. You can set a policy to enable {% data variables.product.prodname_sponsors %} for individual organizations in your enterprise.

Organizations that belong to an enterprise that pays by invoice can either pay for sponsorship by invoice or attribute sponsorships using a linked account. For more information, see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/paying-for-github-sponsors-by-invoice)" or "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)."

## Enforcing a policy to allow the use of {% data variables.product.prodname_sponsors %} in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under {% octicon "law" aria-hidden="true" %} "Policies", click **Sponsors**.
1. Under "Sponsors", click **Add organization**.
1. Begin typing the name of the organization you'd like to enable sponsorships for, then click the name of the organization in the list.
1. Click **Enable sponsorships**.

## Enforcing a policy to disallow the use of {% data variables.product.prodname_sponsors %} in your enterprise

You can disallow the use of {% data variables.product.prodname_sponsors %} for an organization that you previously allowed to use the feature.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under {% octicon "law" aria-hidden="true" %} "Policies", click **Sponsors**.
1. Under "Sponsors", to the right of the organization's name, click **Disable**.
