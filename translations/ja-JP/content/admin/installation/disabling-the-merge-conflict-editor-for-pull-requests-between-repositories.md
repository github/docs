---
title: リポジトリ間のプルリクエストのためのマージコンフリクトエディタの無効化
intro: 'ベースブランチとヘッドブランチが別のリポジトリにあるプルリクエストに対して、{% data variables.product.prodname_ghe_server %} でマージコンフリクトエディタを無効にすることで、ローカルでマージコンフリクトを解決するように人々に要求することができます。'
redirect_from:
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
versions:
  enterprise-server: '*'
---

ユーザが自分のコンピュータ上でローカルにマージコンフリクトを解決するように要求すれば、うっかりフォークから上流のリポジトリに書き込んでしまうことを回避できます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. "Conflict editor for pull requests between repositories（リポジトリ間のプルリクエストのコンフリクトエディタ）"の下でドロップダウンメニューを使い、**Disabled（無効化）**を選択してください。 ![マージコンフリクトエディタを無効化するオプションを持つドロップダウンメニュー](/assets/images/enterprise/settings/conflict-editor-settings.png)
