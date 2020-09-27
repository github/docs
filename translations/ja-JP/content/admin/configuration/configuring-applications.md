---
title: アプリケーションを設定する
intro: '{{ site.data.variables.product.product_location_enterprise }} 向けに内部アプリケーションを設定できます。'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
versions:
  enterprise-server: '*'
---

### 画像キャッシュを調整する

{{ site.data.variables.product.product_location_enterprise }} がアバターをキャッシュする時間を選択できます。 キャッシュ時間を長くすると、ユーザのアバターをロードするのにかかる時間が長くなります。 キャッシュ時間を短すぎる値で設定すると、{{ site.data.variables.product.product_location_enterprise }} のワークプロセスが過負荷になる可能性があります。

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
3. 左のサイドバーで、**Applications（アプリケーション）** をクリックしてください。 ![[Settings] サイドバーでの [Applications] タブ](/assets/images/enterprise/management-console/sidebar-applications.png)
4. [Avatar image cache time (seconds)] で、{{ site.data.variables.product.product_location_enterprise }} にアバター画像をキャッシュさせる秒数を入力します。 ![アバター画像キャッシュのフォームフィールド](/assets/images/enterprise/management-console/add-image-caching-value-field.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}
