<!--This reusable is an intentional duplicate of data/reusables/secret-scanning/generic-secret-detection-ai.md. The duplicate is necessary to enforce legal review of Responsible AI content. If you are updating this content, you may also want to update data/reusables/secret-scanning/generic-secret-detection-ai.md. -->
{% note %}

**Note:** {% ifversion secret-scanning-ai-generic-secret-detection %}
Generic secret detection for {% data variables.product.prodname_secret_scanning %} is in beta. Functionality and documentation are subject to change. During this phase, generic secret detection is limited to looking for passwords in source code.
{% elsif fpt %}
Generic secret detection for {% data variables.product.prodname_secret_scanning %} is in beta. Functionality and documentation are subject to change. The feature is available for enterprise accounts that use {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

{% endnote %}
