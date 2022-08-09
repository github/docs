{% ifversion fpt %}
1. セルフホストランナーグループが登録されているOrganizationもしくはリポジトリのメインページにアクセスしてください。
2. {% octicon "gear" aria-label="The Settings gear" %} **Settings（設定）**をクリックしてください。
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. セルフホストランナーが登録されているところへアクセスしてください:
   * **Organizationもしくはリポジトリ内**: メインページにアクセスして{% octicon "gear" aria-label="The Settings gear" %}** Settings（設定）**をクリックしてください。
   * **Enterpriseレベルのランナーを使っている場合**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organizationもしくはリポジトリ内の場合**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   {%- ifversion ghec or ghae or ghes %}
   * **Enterpriseレベルのランナーを使っている場合**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
   {%- endif %}
{% endif %}
