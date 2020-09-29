{% if currentVersion != "free-pro-team@latest" %}

{% warning %}

Se sua instância do {% data variables.product.prodname_ghe_server %} tiver [LDAP Sync enabled and the option to synchronize emails enabled](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), esta API está desativada e retornará uma resposta `403`. Os usuários gerenciados no LDAP não poderão adicionar ou excluir um endereço de e-mail através da API com estas opções ativadas.

{% endwarning %}

{% endif %}
