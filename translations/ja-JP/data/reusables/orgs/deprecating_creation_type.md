{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Parameter Deprecation Notice:** {% data variables.product.prodname_dotcom %} will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} 2.20+. 詳しい情報については[ブログポスト](https://developer.github.com/changes/2019-12-03-internal-visibility-changes)を参照してください。

{% endwarning %}
{% endif %}
