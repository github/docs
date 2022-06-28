{% ifversion fpt %}
1. Acesse a página principal da organização ou repositório onde o grupo de executor auto-hospedado está registrado.
2. Clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. Navegue por onde seu runner auto-hospedado está registrado:
   * **Em uma organização ou repositório**: navegue até a página principal e clique em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**.
   * **Se estiver usando um executor de nível corporativo**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navegue até as configurações {% data variables.product.prodname_actions %}:
   * **Em uma organização ou repositório**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   {%- ifversion ghec or ghae or ghes %}
   * **Se estiver usando um executor de nível corporativo**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
   {%- endif %}
{% endif %}
