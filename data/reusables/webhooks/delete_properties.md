Key | Type | Description
----|------|-------------
`ref`|`string` | {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}The [`git ref`](/v3/git/refs/#get-a-reference) resource.{% else %}The [`git ref`](/v3/git/refs/#get-a-reference) resource.{% endif %}
`ref_type`|`string` | The type of Git ref oject deleted in the repository. Can be `branch` or `tag`.