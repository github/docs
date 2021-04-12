{% if currentVersion != "github-ae@latest" %}
如果您的仓库具有受支持的依赖项清单
{% if currentVersion == "free-pro-team@latest" %}（并且对私有仓库设置了依赖图）{% endif %}，则只要 {% data variables.product.product_name %} 检测到仓库中易受攻击的依赖项，您就会收到每周摘要电子邮件。 您也可以在 {% data variables.product.product_name %} 界面中将安全警报配置为 web 通知、单个电子邮件通知、每日电子邮件摘要或警报。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
{% endif %}