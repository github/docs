There are {% ifversion fpt or ghec %}three{% else %}two{% endif %} types of {% data variables.secret-scanning.alerts %}:

* **{% ifversion fpt or ghec %}User alerts{% else %}{% data variables.secret-scanning.alerts_caps %}{% endif %}**: Reported to users in the **Security** tab of the repository, when a supported secret is detected in the repository.
* **Push protection alerts**: Reported to users in the **Security** tab of the repository, when a contributor bypasses push protection. {% ifversion fpt or ghec %}
* **Partner alerts**: Reported directly to secret providers that are part of {% data variables.product.prodname_secret_scanning %}'s partner program. These alerts are not reported in the **Security** tab of the repository.{% endif %}
