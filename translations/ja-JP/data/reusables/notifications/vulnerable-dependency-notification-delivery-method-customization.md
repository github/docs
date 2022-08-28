{% ifversion fpt %}
Watchしているか、セキュリティアラートをサブスクライブしているリポジトリ上で
{% data variables.product.prodname_dependabot_alerts %}に関する通知の配信方法と頻度を選択できます。
{% else %}
Watchしているリポジトリ上の
{% ifversion ghes %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}に関する通知の配信方法を、通知が送信される頻度と共に選択できます。
{% endif %}
