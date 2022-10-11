{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
Para manter tokens de acesso do usuário para servidor mais seguros, você pode usar tokens de acesso que expiram após 8 horas, e um token de atualização que pode ser trocado por um novo token de acesso. Para mais informação, consulte "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)."
{% endif %}
