{% if currentVersion == "free-pro-team@latest" %}1. {% data variables.product.product_name %}の右上で、自分のプロフィール写真をクリックし、続いて**Your enterprises（自分のEnterprise）**をクリックしてください。
  ![{% data variables.product.product_name %}のプロフィール写真のドロップダウンメニュー内の"Your enterprises"](/assets/images/help/enterprises/your-enterprises.png)

1. Enterpriseのリストで、表示したいEnterpriseをクリックしてください。 ![Enterpriseのリスト中のEnterpriseの名前](/assets/images/help/enterprises/your-enterprises-list.png)

{% elsif currentVersion ver_lt "enterprise-server@2.22" %}1. {% raw %}<code>https://<em>HOSTNAME</em>/enterprises/<em>ENTERPRISE-NAME</em></code>{% endraw %}にアクセスしてEnterpriseアカウントに移動してください。`HOSTNAME`はインスタンスのホスト名で、`ENTERPRISE-NAME`はEnterpriseアカウント名で置き換えてください。

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}1. {% data variables.product.product_name %}の右上で、プロフィール写真をクリックし、続いて**Enterprise settings（Enterpriseの設定）**をクリックしてください。
    ![{% data variables.product.product_name %}のプロフィール写真のドロップダウンメニュー内の"Enterprise settings"](/assets/images/enterprise/settings/enterprise-settings.png)

{% endif %}
