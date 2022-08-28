{% ifversion fpt or ghes > 2.21 or ghae %}
To keep user-to-server access tokens more secure, you can use access tokens that will expire after 8 hours, and a refresh token that can be exchanged for a new access token. For more information, see "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)."
{% endif %}
