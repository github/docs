{% if enterpriseServerVersions contains currentVersion %}
您的站点管理员必须启用
{% data variables.product.product_location %} 的漏洞依赖项的{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}安全{% endif %}警报，然后您才可使用此功能。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用安全警报](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。
{% endif %}
