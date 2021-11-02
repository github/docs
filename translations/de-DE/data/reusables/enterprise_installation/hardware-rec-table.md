{% ifversion ghes %}

| Benutzerlizenzen                                           | vCPUs | Arbeitsspeicher | Attached-Storage | Root-Storage |
|:---------------------------------------------------------- | -----:| ---------------:| ----------------:| ------------:|
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen |     4 |           32 GB |           150 GB |       200 GB |
| 10–3000                                                    |     8 |           48 GB |           300 GB |       200 GB |
| 3000–5000                                                  |    12 |           64 GB |           500 GB |       200 GB |
| 5000–8000                                                  |    16 |           96 GB |           750 GB |       200 GB |
| 8000–10000+                                                |    20 |          160 GB |          1000 GB |       200 GB |

{% else %}

| Benutzerlizenzen                                           | vCPUs | Arbeitsspeicher | Attached-Storage | Root-Storage |
|:---------------------------------------------------------- | -----:| ---------------:| ----------------:| ------------:|
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen |     2 |           16 GB |           100 GB |       200 GB |
| 10–3000                                                    |     4 |           32 GB |           250 GB |       200 GB |
| 3000–5000                                                  |     8 |           64 GB |           500 GB |       200 GB |
| 5000–8000                                                  |    12 |           96 GB |           750 GB |       200 GB |
| 8000–10000+                                                |    16 |          128 GB |          1000 GB |       200 GB |

{% endif %}

{% ifversion ghes %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of your instance, review the requirements for hardware, external storage, and runners in "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)."

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}
