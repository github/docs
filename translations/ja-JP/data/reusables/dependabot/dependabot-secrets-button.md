{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. サイドバーの"Security（セキュリティ）"セクションで、**{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets（シークレット）**を選択し、続いて**{% data variables.product.prodname_dependabot %}**をクリックしてください。
{% else %}
1. サイドバーで**{% data variables.product.prodname_dependabot %}**をクリックしてください。 ![{% data variables.product.prodname_dependabot %}シークレットサイドバーオプション](/assets/images/enterprise/3.3/dependabot/dependabot-secrets.png)
{% endif %}
