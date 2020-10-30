{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de depreciação:** {% data variables.product.prodname_dotcom %} irá substituir e descontinuar `members_allowed_repository_creation_type` em favor de mais permissões granulares. Os novos parâmetros de entrada são `members_can_create_public_repositories`, `members_can_create_private_repositories` para todas as organizações e `members_can_create_internal_repositories` para organizações associadas a uma conta corporativa usando {% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %} 2.20+. Para obter mais informações, consulte o [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes) (postagem de blog).

{% endwarning %}
{% endif %}
