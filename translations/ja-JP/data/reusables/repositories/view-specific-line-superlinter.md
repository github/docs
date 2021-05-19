{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. あるいはログの中の特定の行へのリンクを取得するには、そのステップの行番号をクリックします。 このリンクは、Webブラウザのアドレスバーからコピーできます。
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![リンクをコピーするボタン](/assets/images/help/repository/copy-link-button-updated-2.png)
  {% else %}
  ![リンクをコピーするボタン](/assets/images/help/repository/copy-link-button-updated.png)
  {% endif %}
{% else %}
1. あるいはログの中の特定の行へのリンクを取得するには、そのステップの行番号をクリックします。 このリンクは、Webブラウザのアドレスバーからコピーできます。 ![リンクをコピーするボタン](/assets/images/help/repository/copy-link-button.png)
{% endif %}