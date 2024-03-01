While searching the audit log on {% data variables.product.prodname_dotcom %}, include `hashed_token:"VALUE"` in your search query, replacing `VALUE` with the SHA-256 hash of the token.

{% note %}

**Note:** Make sure to wrap the hashed token value in quotation marks.

{% endnote %}

{% ifversion token-audit-log-more-metadata %}

Searches using {% data variables.product.prodname_dotcom %} do not return Git events.

{% endif %}
