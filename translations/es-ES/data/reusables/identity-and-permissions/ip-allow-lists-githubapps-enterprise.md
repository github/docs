Si estás utilizando una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que hayas instalado en tu empresa.

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para obtener más información sobre cómo crear una lista de direcciones permitidas para una {% data variables.product.prodname_github_app %} que hayas creado, consulta la sección "[Administrar las direcciones IP permitidas para una GitHub App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

Para habilitar la adición automática de direcciones IP para las {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Lista de direcciones IP permitidas", selecciona **Habilitar la configuración de la lista de direcciones IP permitidas para las GitHub Apps instaladas**. ![Casilla de verificación para permitir las direcciones IP de las GitHub Apps](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Haz clic en **Save ** (guardar).
