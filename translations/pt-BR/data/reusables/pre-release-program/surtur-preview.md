{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

**Note:** New repository creation permissions are available to preview. You can now use `members_can_create_public_repositories`, `members_can_create_private_repositories`, and `members_can_create_internal_repositories`. You can only allow members to create internal repositories if your organization is associated with an enterprise account using {% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %} 2.20+. These parameters provide more granular permissions to configure the type of repositories organization members can create.

To access these new parameters during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.surtur-preview+json
```
{% endnote %}
{% else %}
{% note %}

**Note:** New repository creation permissions are available to preview. You can now set the `members_allowed_repository_creation_type` parameter to configure whether organization members can create repositories and the type of repositories they can create.

To access this new parameter during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.surtur-preview+json
```
{% endnote %}
{% endif %}
