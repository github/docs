---
title: Configuring webhooks for organization events in your enterprise account
intro: Enterprise owners can configure webhooks for events in organizations owned by an enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - корпоративный
---

You can configure webhooks to receive events from organizations owned by your enterprise account. For more information about webhooks, see "[Webhooks](/webhooks/)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Next to "Webhooks", click **Add webhook**. ![Add webhook button in the Webhooks sidebar](/assets/images/help/business-accounts/add-webhook-button.png)
5. Type a payload URL, then optionally customize the configuration. For more information, see "[Creating webhooks](/webhooks/creating/#creating-webhooks)." ![Fields for payload URL and other customization options](/assets/images/help/business-accounts/webhook-payload-url-and-customization-options.png)
6. Under "Which events would you like to trigger this webhook?", select **Let me select individual events**. ![Selecting individual events](/assets/images/help/business-accounts/webhook-let-me-select-individual-events.png)
7. Select one or more enterprise account events for your webhook to receive. For more information, see "[Event types and payloads](/webhooks/event-payloads/)." ![Selecting individual events](/assets/images/help/business-accounts/webhook-selected-events.png)
8. To receive the selected events for triggered webhooks, select **Active**. ![Selecting individual events](/assets/images/help/business-accounts/webhook-active.png)
9. Click **Add webhook**.
