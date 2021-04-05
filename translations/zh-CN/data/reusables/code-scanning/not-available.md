{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注意：** 对于私有和内部仓库，{% data variables.product.prodname_code_scanning %} 在对该资源库启用了 {% data variables.product.prodname_GH_advanced_security %} 功能时可用。 如果您看到错误 `Advanced Security must be enabled for this repository to use code scanning（必须启用高级安全性，此仓库才能使用代码扫描）`，请检查 {% data variables.product.prodname_GH_advanced_security %} 是否已启用。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。

{% endnote %}
{% endif %}
