---
title: Enterprise アカウント配下のOrganizationイベント用の webhook を設定する
intro: Enterprise のオーナーは、Enterprise アカウントが所有する Organization のイベントに、webhook を設定できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

Enterprise アカウントが所有する Organization からイベントを受信するように webhook を設定できます。 webhook に関する詳しい情報については、「[webhook](/webhooks/)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. [Webhooks] の横にある [**Add webhook**] をクリックします。 ![[Webhooks] サイドバーの [Add webhook] ボタン](/assets/images/help/business-accounts/add-webhook-button.png)
5. ペイロード URL を入力し、必要な場合は設定をカスタマイズします。 詳しい情報については「[webhook を作成する](/webhooks/creating/#creating-webhooks)」を参照してください。 ![ペイロード URL やその他カスタマイズオプションのフィールド](/assets/images/help/business-accounts/webhook-payload-url-and-customization-options.png)
6. [Which events would you like to trigger this webhook?] で、 [**Let me select individual events**] を選択します。 ![特定のイベントを選択する](/assets/images/help/business-accounts/webhook-let-me-select-individual-events.png)
7. webhook が受信する Enterprise アカウントイベントを 1 つ以上選択します。 詳細は「[イベントのタイプとペイロード](/webhooks/event-payloads/)」を参照してください。 ![特定のイベントを選択する](/assets/images/help/business-accounts/webhook-selected-events.png)
8. トリガーされた webhook に対して選択したイベントを受信するには、[**Active**] を選択します。 ![特定のイベントを選択する](/assets/images/help/business-accounts/webhook-active.png)
9. **Add webhook（webhookの追加）**をクリックしてください。
