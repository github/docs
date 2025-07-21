Before you can search for a token using the REST API, after you generate a SHA-256 hash, you also need to URI-escape the hash. Most major programming languages provide a utility for URI escaping. For example, [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) encodes a string for JavaScript.

Then, include `hashed_token:"VALUE"` in your search phrase, replacing VALUE with the URI-escaped hash.

{% ifversion token-audit-log-more-metadata %}

Searches using the REST API do not return Git events.

{% endif %}
