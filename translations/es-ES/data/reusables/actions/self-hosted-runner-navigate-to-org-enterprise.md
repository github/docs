{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner is registered.
2. Haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En una organización**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * **Si utilizas un ejecutor a nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **In an organization**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Si utilizas un ejecutor a nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
{% endif %}
