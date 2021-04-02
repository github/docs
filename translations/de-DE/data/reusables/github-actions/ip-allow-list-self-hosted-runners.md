{% if currentVersion == "github-ae@latest" %}
To allow your
{% data variables.actions.hosted_runner %}s to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your {% data variables.actions.hosted_runner %}s to the IP allow list. Weitere Informationen findest Du unter ["Hinzufügen einer zulässigen IP-Adresse".](#adding-an-allowed-ip-address)
{% else %}
{% warning %}

**Warnung**: Wenn Du eine IP-Zulassungsliste verwendest und auch {% data variables.product.prodname_actions %} verwenden möchtest, musst Du selbst gehostete Läufer verwenden. Weitere Informationen findest Du unter ["Hosten Deiner eigenen Läufer".](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)

{% endwarning %}
To allow your self-hosted runners to communicate with

{% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your self-hosted runners to the IP allow list. Weitere Informationen findest Du unter ["Hinzufügen einer zulässigen IP-Adresse".](#adding-an-allowed-ip-address)
{% endif %}
