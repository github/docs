1. 在“Policies（策略）”下选择选项。

  您可以在您的企业中选择哪些组织可以使用 {% data variables.product.prodname_actions %}，并且可以限制对公共操作的访问。

  {% if currentVersion ver_gt "enterprise-server@2.21" %}
  {% note %}

  **注意：**要启用对公共操作的访问，必须先配置 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_marketplace %}。 更多信息请参阅“[使用 GitHub Connect 启用对 GitHub.com 操作的自动访问](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。

  {% endnote %}
  {% endif %}
  ![启用、禁用或限制此企业帐户的操作](/assets/images/help/organizations/enterprise-actions-policy.png)
