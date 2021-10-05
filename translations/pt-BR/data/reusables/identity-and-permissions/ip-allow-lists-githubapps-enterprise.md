Se você estiver usando uma lista de permissões, você também pode optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que estão instalados na sua empresa.

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para mais informações sobre como criar uma lista de permissões para uma {% data variables.product.prodname_github_app %} que você criou, consulte "[Gerenciar endereços IP permitidos para um aplicativo GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

Para habilitar a adição automática de endereço IP para {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Em "Lista de permissão do IP", selecione **Habilitar o IP para a configuração da lista de aplicativos instalados no GitHub**. ![Caixa de seleção para permitir endereços IP do aplicativo GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Clique em **Salvar**.
