{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在侧边栏的“Security（安全性）”部分中，选择 **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} 机密** 然后单击 **{% data variables.product.prodname_dependabot %}**。
{% else %}
1. 在侧边栏中，单击 **{% data variables.product.prodname_dependabot %}**。 ![{% data variables.product.prodname_dependabot %} 密钥边栏选项](/assets/images/enterprise/3.3/dependabot/dependabot-secrets.png)
{% endif %}
