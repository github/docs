{% ifversion fpt %}
1. Acesse a página principal do repositório ou organização onde os grupos de executores auto-hospedados estão localizados.
2. Clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
{% elsif ghec or ghes or ghae %}
1. Acesse o local onde os seus grupos de executores estão localizados:
   * **Em uma organização**: Acesse a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * **Se estiver usando um grupo de nível corporativo**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Acese as configurações "Grupos de executores":
   * **Em uma organização**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Se estiver usando um grupo de nível corporativo**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %}
{% endif %}
