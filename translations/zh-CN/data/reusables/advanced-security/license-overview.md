{% data variables.product.prodname_GH_advanced_security %} 的每个许可证都规定了可以使用这些功能的最大帐户或席位数量。 至少一个启用了该功能的仓库的每个活跃提交者将使用一个席位。 如果提交者的某个提交在过去 90 天内被推送到存储库，则无论其最初创建时间如何，都将被视为活动提交者。

{% note %}

**注意：** 活动提交者是使用提交作者信息和将代码推送到 {% data variables.product.product_name %} 时的时间戳计算的。

- 当用户将代码推送到 {% data variables.product.prodname_dotcom %} 时，在该推送中编写代码的每个用户都会计入 {% data variables.product.prodname_GH_advanced_security %} 席位，即使代码不是 {% data variables.product.prodname_dotcom %} 的新代码。

- 用户应始终从最近的基本分支创建分支，或在推送之前变基。 这将确保在过去 90 天内未提交的用户不会占用 {% data variables.product.prodname_GH_advanced_security %} 席位。

{% endnote %}

