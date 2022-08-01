---
title: デプロイ キーをレビューする
intro: デプロイ キーをレビューして、許可されていない (あるいは侵害された可能性のある) キーがないことを確認してください。 有効な既存のデプロイ キーを承認することもできます。
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: デプロイキー
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. In the "Security" section of the sidebar, click **{% octicon "key" aria-label="The key icon" %} Deploy keys**.
{% else %}
3. 左サイドバーで [**Deploy keys**] をクリックします。 ![デプロイキーの設定](/assets/images/help/settings/settings-sidebar-deploy-keys.png)
{% endif %}
4. [Deploy keys] ページで、自分のアカウントに関連付けられているデプロイ キーを書き留めます。 覚えていないか古くなっている場合は、[**Delete**] をクリックします。 残しておきたい有効なデプロイ キーがある場合は、[**Approve**] をクリックします。 ![デプロイキーのリスト](/assets/images/help/settings/settings-deploy-key-review.png)

詳しい情報については、「[デプロイキーを管理する](/guides/managing-deploy-keys)」を参照してください。

## 参考リンク
- [通知を設定する](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
