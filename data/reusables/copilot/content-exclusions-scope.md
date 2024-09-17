{% ifversion fpt %}

Content exclusion settings only apply to members of the organization in which the content exclusion is configured, who have been granted a seat as part of a {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription.

{% else %}

You can only specify content exclusions in the settings for an organization or repository, not in the settings for an enterprise. Content exclusion settings defined in an organization or repository within an enterprise will apply to all members of the enterprise who have been granted a seat as part of a {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription.

{% endif %}

Anyone else who can access the specified files will still see code completion suggestions and {% data variables.product.prodname_copilot_chat %} responses referencing the specified files.
