{% ifversion fpt %}
1. Navega a la página principal del repositorio u organización en donde se ubican tus grupos de ejecutores auto-hospedados.
2. Haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
{% elsif ghec or ghes or ghae %}
1. Navega a donde se ubiquen tus grupos de ejecutores auto-hospedados:
   * **En una organización**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * **Si utilizas un grupo a nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navega a los ajustes de los "Grupos de ejecutores":
   * **En una organización**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **Si estás utilizando un grupo a nivel de empresa**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %}
{% endif %}
