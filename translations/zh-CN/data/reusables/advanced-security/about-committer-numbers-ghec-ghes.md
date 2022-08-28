我们在 {% data variables.product.product_location %}上记录并显示 {% data variables.product.prodname_GH_advanced_security %} 的两个提交者：

- **提交者**是指参与组织中至少一个{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库并且占用企业许可中一个席位的提交者数量。 也就是说，他们也是组织成员、外部协作者，或者具有待处理的企业帐户中组织加入邀请。
- **对此仓库/组织唯一**是只参与该仓库或该组织中仓库的提交者数量。 此数字显示您可以通过禁用该仓库或组织的 {% data variables.product.prodname_GH_advanced_security %} 来释放多少许可证席位。

如果没有唯一的提交者，则意味着所有活跃的提交者也参与其他使用 {% data variables.product.prodname_GH_advanced_security %} 的仓库或组织。 禁用该仓库或组织的功能将不会在您的许可证上腾出任何席位。

从企业帐户中删除用户后，用户的许可证在 24 小时内被释放。

{% note %}

**注：**用户可以参与多个仓库或组织。 使用数是在整个企业帐户中计量的，确保每个成员使用一个席位，无论该用户参与多少个仓库或组织。

{% endnote %}
