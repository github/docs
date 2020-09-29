1. 在用户拥有的复刻中，如果您不希望对上游仓库具有推送权限的任何人更改您的拉取请求，请取消选中 **Allow edits from maintainers（允许维护员编辑）**。

    {% warning %}

    **Warning:** If your fork contains {% data variables.product.prodname_actions %} workflows, the option is  **Allow edits and access to secrets by maintainers**. Allowing edits on a fork's branch that contains {% data variables.product.prodname_actions %} workflows also allows a maintainer to edit the forked repository's workflows, which can potentially reveal values of secrets and grant access to other branches.

    {% endwarning %}
