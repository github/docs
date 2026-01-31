---
title: Not enough GitHub Advanced Security licenses
shortTitle: Not enough GHAS licenses
intro: If you are on a subscription-based billing model for GHAS, you need available GHAS licenses to enable GHAS features on a private{% ifversion ghec or ghes %} or internal{% endif %} repository.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/troubleshooting-security-configurations/not-enough-github-advanced-security-licenses
contentType: how-tos
---

If you are on a volume / subscription-based billing model for {% data variables.product.prodname_GHAS %} (GHAS), you must have an available GHAS license for any additional unique active committers to enable GHAS features on a private{% ifversion ghec or ghes %} or internal{% endif %} repository. To learn about GHAS licensing, as well as unique and active committers, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

If you try to apply a {% data variables.product.prodname_security_configuration %} with GHAS features to your repositories and don't have enough GHAS licenses, the configuration will only be successfully applied to public repositories. For private {% ifversion ghec or ghes %}and internal {% endif %}repositories, only free security features will be enabled due to the license limitation, resulting in the following outcomes:

  * Free security features enabled in the configuration _will_ be enabled for _all_ private {% ifversion ghec or ghes %}and internal {% endif %}repositories.
  * GHAS features _will not_ be enabled for _any_ private {% ifversion ghec or ghes %}or internal {% endif %}repositories.
  * The {% data variables.product.prodname_security_configuration %} _will not_ be applied to _any_ private {% ifversion ghec or ghes %}or internal {% endif %}repositories, since only some features from the configuration are enabled.

For more information on managing GHAS licenses for your organization, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage).
