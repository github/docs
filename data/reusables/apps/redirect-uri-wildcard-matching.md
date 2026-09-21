If required, you may enable wildcard matching for a callback URL. When wildcard matching is enabled, the redirect URL's host (excluding subdomains) and port must exactly match the callback URL, and the redirect URL's path must reference a subdirectory of the callback URL. This means that any subdomain or subdirectory of the callback URL will match and be allowed as a callback URL. For example, if wildcard matching is enabled for the callback URL `https://example.com/path`:

    CALLBACK: https://example.com/path

    MATCH: https://example.com/path
    MATCH: https://example.com/path/subdir/other
    MATCH: https://oauth.example.com/path
    MATCH: https://oauth.example.com/path/subdir/other
    FAIL:  https://example.com/bar
    FAIL:  https://example.com/
    FAIL:  https://example.com:8080/path
    FAIL:  https://oauth.example.com:8080/path
    FAIL:  https://example.org

When wildcard matching is disabled, the redirect URL must exactly match the callback URL. You can enable or disable wildcard matching for each callback URL in your app's settings.

> [!WARNING]
> {% data reusables.apps.redirect-uri-wildcard-security-warning %}

Apps that had a single callback URL enabled prior to {% ifversion fpt or ghec %}August 3, 2026{% else %}{% data variables.product.prodname_ghe_server %} 3.24{% endif %} have wildcard matching enabled for that callback URL. This preserves the redirect behavior that existed before wildcard matching became a configurable setting, and is why all {% data variables.product.prodname_oauth_apps %} and some {% data variables.product.prodname_github_apps %} created before that date have wildcard matching enabled. If your app does not need wildcard matching, we recommend that you disable it.
