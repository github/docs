{% ifversion fpt %}
1. Navega a la página principal de la organización o repositorio en donde se registró tu grupo de ejecutores auto-hospedados.
2. Haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En un repositorio organizacional**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * **Si utilizas un ejecutor a nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización o repositorio**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   {%- ifversion ghec or ghae or ghes %}
   * **Si utilizas un ejecutor a nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
   {%- endif %}
{% endif %}
