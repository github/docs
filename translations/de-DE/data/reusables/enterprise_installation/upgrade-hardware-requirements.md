{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### About minimum requirements for {% data variables.product.prodname_ghe_server %} 3.0 and later

Before upgrading to {% data variables.product.prodname_ghe_server %} 3.0 or later, review the hardware resources you've provisioned for your instance. {% data variables.product.prodname_ghe_server %} 3.0 introduces new features such as {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %}, and requires more resources than versions 2.22 and earlier. For more information, see the [{% data variables.product.prodname_ghe_server %} 3.0 release notes](/enterprise-server@3.0/admin/release-notes).

Increased requirements for {% data variables.product.prodname_ghe_server %} 3.0 and later are **bold** in the following table.

| Benutzerlizenzen                                           |                           vCPUs |                         Arbeitsspeicher |                        Attached-Storage | Root-Storage |
|:---------------------------------------------------------- | -------------------------------:| ---------------------------------------:| ---------------------------------------:| ------------:|
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen |   **4**<br/>_Up from 2_ |   **32 GB**<br/>_Up from 16 GB_ | **150 GB**<br/>_Up from 100 GB_ |       200 GB |
| 10–3000                                                    |   **8**<br/>_Up from 4_ |   **48 GB**<br/>_Up from 32 GB_ | **300 GB**<br/>_Up from 250 GB_ |       200 GB |
| 3000–5000                                                  |  **12**<br/>_Up from 8_ |                                   64 GB |                                  500 GB |       200 GB |
| 5000–8000                                                  | **16**<br/>_Up from 12_ |                                   96 GB |                                  750 GB |       200 GB |
| 8000–10000+                                                | **20**<br/>_Up from 16_ | **160 GB**<br/>_Up from 128 GB_ |                                 1000 GB |       200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

For more information about hardware requirements for {% data variables.product.prodname_actions %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)."

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
