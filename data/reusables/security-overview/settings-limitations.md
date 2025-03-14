{% ifversion secret-scanning-non-provider-patterns %}

> [!NOTE]
> * Enabling {% data variables.product.prodname_code_scanning %} default setup _will not_ override any existing configurations of advanced setup for the selected repositories, but it _will_ override any existing configurations of default setup.
> * Enabling "Alerts" for {% data variables.product.prodname_secret_scanning %} enables {% ifversion secret-scanning-alert-experimental-list %}default{% else %}high confidence{% endif %} alerts. If you want to enable non-provider alerts, you need to edit the repository, organization, or enterprise settings. For more information about alert types, see [Supported secrets](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).

{% elsif bulk-code-scanning-query-suite and not fpt %}

> [!NOTE]
> For {% ifversion code-security-multi-repo-enablement %}both the single and multiple {% else %}the single {% endif %}repository enablement settings, enabling {% data variables.product.prodname_code_scanning %} will override any existing {% data variables.product.prodname_code_scanning %} configurations for the selected repositories, including any previous query suite selections and workflows for advanced setups.

{% endif %}
