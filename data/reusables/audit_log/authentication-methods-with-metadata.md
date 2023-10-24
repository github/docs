Token data appears in the audit log for the following authentication methods.

- {% data variables.product.pat_generic_caps %}
- OAuth token
- {% data variables.product.prodname_github_apps %} (authentication as an app installation or on behalf of a user)
{%- ifversion token-audit-log-more-metadata %}
- Deploy key
- SSH key

{% note %}

**Note**: Display of token data for SSH keys and deploy keys in the audit log is in public beta and subject to change.

{%- endnote %}
{% endif %}
