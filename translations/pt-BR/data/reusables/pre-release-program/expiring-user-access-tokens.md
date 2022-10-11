{% if currentVersion ver_gt "enterprise-server@2.21" and currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**Observação:** Os tokens de usuário com data de vencimento atualmente fazem parte do beta com data de vencimento do token de usuário para servidor e estão sujeitos a alterações. Para optar por participar do recurso beta de expiração de token de usuário para servidor, consulte "[Habilitar funcionalidades opcionais para aplicativos](/developers/apps/activating-optional-features-for-apps)." Para obter mais informações, consulte "[Tokens com data de vencimento de acesso de usuário para servidor para aplicativos GitHub](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)".

{% endnote %}

{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}

{% note %}

**Observação:** Tokens de usuário vencidos são atualmente um recurso opcional e estão sujeitos a alterações. Para optar por participar do recurso de expiração de token de usuário para servidor, consulte "[Habilitar funcionalidades opcionais para aplicativos](/developers/apps/activating-optional-features-for-apps)". Para obter mais informações, consulte "[Tokens com data de vencimento de acesso de usuário para servidor para aplicativos GitHub](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)".

{% endnote %}

{% endif %}
