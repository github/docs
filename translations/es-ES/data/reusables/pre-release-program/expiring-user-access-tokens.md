{% if currentVersion ver_gt "enterprise-server@2.21" and currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**Nota:** Los tokens de usuario con caducidad son actualmente parte del beta de tokens de usuario a servidor y están sujetos a cambios. Para decidir unirse a la característica beta de vigencia determinada de los tokens de usuario a servidor, consulta la sección "[Activar las características opcionales para las apps](/developers/apps/activating-optional-features-for-apps)". Para obtener más información, consulta la sección "[Tokens de acceso con caducidad de usuario a servidor para las GitHub Apps](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)".

{% endnote %}

{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}

{% note %}

**Nota:** Los tokens de usuario con vigencia determinada actualmente son una característica opcional y están sujetos a cambios. Para decidir unirse a o salir de la característica de vigencia determinada de los tokens de usuario a servidor, consulta la sección "[Activar las características opcionales para las apps](/developers/apps/activating-optional-features-for-apps)". Para obtener más información, consulta la sección "[Tokens de acceso con caducidad de usuario a servidor para las GitHub Apps](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)".

{% endnote %}

{% endif %}
