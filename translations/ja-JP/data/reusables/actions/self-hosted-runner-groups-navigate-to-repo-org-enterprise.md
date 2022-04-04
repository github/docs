{% ifversion fpt %}
1. Navigate to the main page of the repository or organization where your self-hosted runner groups are located.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
{% elsif ghec or ghes or ghae %}
1. Navigate to where your self-hosted runner groups are located:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * **If using an enterprise-level group**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. Navigate to the "Runner groups" settings:
   * **In an organization**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **If using an enterprise-level group**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %}
{% endif %}
