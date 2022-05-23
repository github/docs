{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. セルフホストランナーが登録されているところへアクセスしてください:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * **Enterpriseレベルのランナーを使っている場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **In an organization**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Enterpriseレベルのランナーを使っている場合**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
{% endif %}
