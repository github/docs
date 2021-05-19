为仓库启用或禁用 {% data variables.product.prodname_advanced_security %} 时，{% data variables.product.prodname_dotcom %} 将显示许可证使用情况变化的概况。 如果您禁用对 {% data variables.product.prodname_GH_advanced_security %} 的访问，任何被“唯一”提交者使用的席位都将释放。

如果您超过了许可证限制，{% data variables.product.prodname_GH_advanced_security %} 将继续在所有已启用的仓库中工作。 但是，在为新仓库启用 {% data variables.product.prodname_GH_advanced_security %} 的组织中，将会创建禁用该功能的仓库。 此外，对现有仓库启用 {% data variables.product.prodname_GH_advanced_security %} 的选项将不可用。{% if currentVersion == "free-pro-team@latest" %}如果将公共仓库的可见性更改为私有，则 {% data variables.product.prodname_GH_advanced_security %} 将对该仓库禁用。{% endif %}

一旦您释放一些席位，通过对某些仓库禁用 {% data variables.product.prodname_GH_advanced_security %} 或通过增加您的许可证大小，用于启用 {% data variables.product.prodname_GH_advanced_security %} 的选项将继续正常工作。
