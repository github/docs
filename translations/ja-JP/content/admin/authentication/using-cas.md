---
title: CASの利用
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication/
  - /enterprise/admin/articles/about-cas-authentication/
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
intro: 'CAS は、複数の Web アプリケーションのためのシングルサインオン (SSO) プロトコルです。 CAS ユーザアカウントは、ユーザがサインインするまで、{% if currentVersion ver_gt "enterprise-server@2.16" %}ユーザライセンス{% else %}シート{% endif %}の使用を開始しません。'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### CASでのユーザ名についての考慮

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### CASの属性

以下の属性が利用できます。

| 属性名    | 種類 | 説明                                                       |
| ------ | -- | -------------------------------------------------------- |
| `ユーザ名` | 必須 | {% data variables.product.prodname_ghe_server %} のユーザ名 |

### CASの設定
{% warning %}

**警告：**{% data variables.product.product_location %}でCASを設定するまでは、ユーザはCASのユーザ名とパスワードをAPIリクエストの認証やHTTP/HTTPS経由のGit操作に使えないことに注意してください。 その代わりに、ユーザは[アクセストークンを作成](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use)しなければなりません。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. **CAS**を選択してください。 ![CAS の選択](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![CAS ビルトイン認証の選択チェックボックス](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. **Server URL（サーバのURL）**フィールドにCASサーバの完全なURLを入力してください。 CAS サーバが {% data variables.product.prodname_ghe_server %} が検証できない証明書を使っているなら、`ghe-ssl-ca-certificate-install` を使えばその証明書を信頼済みの証明書としてインストールできます。
