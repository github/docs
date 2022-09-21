---
title: Billing and payments on GitHub
shortTitle: Billing and payments
intro: '{% ifversion fpt %}{% data variables.product.product_name %} offers free and paid products for every account. You can upgrade or downgrade your account''s subscription and manage your billing settings at any time.{% elsif ghec or ghes or ghae %}{% data variables.product.company_short %} bills for your enterprise members'' {% ifversion ghec or ghae %}usage of {% data variables.product.product_name %}{% elsif ghes %} licence seats for {% data variables.product.product_name %}{% ifversion ghes %} and any additional services that you purchase{% endif %}{% endif %}. {% endif %}{% ifversion ghec %} You can view your subscription and manage your billing settings at any time. {% endif %}{% ifversion fpt or ghec %} You can also view usage and manage spending limits for {% data variables.product.product_name %} features such as {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, and {% data variables.product.prodname_github_codespaces %}.{% endif %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github
  - /categories/setting-up-and-managing-billing-and-payments-on-github
introLinks:
  overview: '{% ifversion fpt or ghec %}/billing/managing-your-github-billing-settings/about-billing-on-github{% elsif ghes%}/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise{% endif %}'
featuredLinks:
  guides:
    - '{% ifversion fpt or ghec %}/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method{% endif %}'
    - '{% ifversion fpt %}/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription{% endif %}'
    - '{% ifversion ghec %}/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise{% endif %}'
    - '{% ifversion fpt or ghec %}/billing/managing-your-github-billing-settings/setting-your-billing-email{% endif %}'
    - '{% ifversion fpt or ghec %}/billing/managing-billing-for-your-github-account/about-per-user-pricing{% endif %}'
    - '{% ifversion ghes %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise{% endif %}'
    - '{% ifversion ghae %}/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise{% endif %}'
  popular:
    - '{% ifversion ghec %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account{% endif %}'
    - '{% ifversion fpt or ghec %}/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription{% endif %}'
    - '{% ifversion fpt or ghec %}/billing/managing-billing-for-github-actions/about-billing-for-github-actions{% endif %}'
    - '{% ifversion fpt or ghec %}/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces{% endif %}'
    - '{% ifversion ghes %}/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security{% endif %}'
    - '{% ifversion ghes %}/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server{% endif %}'
    - '{% ifversion ghae %}/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise{% endif %}'
  guideCards:
    - /billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process
    - /billing/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise{% endif %}'
    - '{% ifversion ghes %}/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud{% endif %}'
layout: product-landing
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Billing
children:
  - /managing-your-github-billing-settings
  - /managing-billing-for-your-github-account
  - /managing-your-license-for-github-enterprise
  - /managing-licenses-for-visual-studio-subscriptions-with-github-enterprise
  - /managing-billing-for-github-actions
  - /managing-billing-for-github-codespaces
  - /managing-billing-for-github-packages
  - /managing-billing-for-github-copilot
  - /managing-billing-for-github-advanced-security
  - /managing-billing-for-github-sponsors
  - /managing-billing-for-github-marketplace-apps
  - /managing-billing-for-git-large-file-storage
  - /setting-up-paid-organizations-for-procurement-companies
---
