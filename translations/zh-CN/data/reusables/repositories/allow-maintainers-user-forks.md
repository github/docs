1. 在用户拥有的复刻中，如果您不希望对上游仓库具有推送权限的任何人更改您的拉取请求，请取消选中 **Allow edits from maintainers（允许维护员编辑）**。

    {% warning %}

    **警告：**如果复刻包含 {% data variables.product.prodname_actions %} 工作流程，则选项是 **Allow edits and access to secrets by maintainers（允许维护员编辑和访问密码）**。 允许对包含 {% data variables.product.prodname_actions %} 工作流程的复刻分支进行编辑，也会允许维护员编辑复刻的仓库的工作流程，从而可能暴露密码值并允许访问其他分支。

    {% endwarning %}
