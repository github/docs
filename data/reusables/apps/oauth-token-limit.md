There is a limit of ten tokens that are issued per user/application/scope combination, and a rate limit of ten tokens created per hour. If an application creates more than ten tokens for the same user and the same scopes, {% data variables.product.github %} revokes one of the existing tokens with the same user/application/scope combination, chosen in this order:

{% ifversion oauth-token-revocation-grace-period %}

1. The oldest token that has never been used and that was created more than one minute ago. Tokens created within the last minute are usually protected, so that an application has time to use a token it has just created.
1. If there is no such token, but at least one token has been used, the token that was least recently used.
1. If no token has ever been used, the oldest token, even if it was created within the last minute.

{% else %}

1. The oldest token that has never been used.
1. If every token has been used, the token that was least recently used.

{% endif %}

Hitting the hourly rate limit will not revoke your oldest token. Instead, it will trigger a re-authorization prompt within the browser, asking the user to double check the permissions they're granting your app. This prompt is intended to give a break to any potential infinite loop the app is stuck in, since there's little to no reason for an app to request ten tokens from the user within an hour.
