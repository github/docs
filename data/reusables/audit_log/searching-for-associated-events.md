To identify events associated with a specific token, you can use the UI or REST API. {% ifversion token-audit-log-more-metadata %}To identify Git events, you'll need to export the events from the audit log.{% endif %} To identify any events, you will need to know the SHA-256 hash of the token first.

- [Generating a SHA-256 hash value for a token](#generating-a-sha-256-hash-value-for-a-token)
- [Searching on {% data variables.product.prodname_dotcom %}](#searching-on-github)
- [Searching with the REST API](#searching-with-the-rest-api)
{%- ifversion token-audit-log-more-metadata %}
- [Identifying Git events](#identifying-git-events)
{%- endif %}
