{% ifversion fpt %}
1. セルフホストランナーがあるリポジトリもしくはOrganizationのメインページにアクセスしてください。
2. {% octicon "gear" aria-label="The Settings gear" %} **Settings（設定）**をクリックしてください。
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
{% elsif ghec or ghes or ghae %}
1. セルフホストランナーがあるところへアクセスしてください。
   * **Organizationの場合**: メインページにアクセスして{% octicon "gear" aria-label="The Settings gear" %} **Settings（設定）**をクリックしてください。
   * **Enterpriseレベルのグループを使っている場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. "Runner groups（ランナーグループ）"の設定にアクセスしてください。
   * **Organizationの場合**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Enterpriseレベルのグループを使っている場合**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %}
{% endif %}
