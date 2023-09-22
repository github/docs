{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner is registered.
1. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% elsif ghec or ghes or ghae %}
1. Navigate to where your runner is registered:
   - **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   - **If using an enterprise-level runner**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Navigate to the {% data variables.product.prodname_actions %} settings:
   - **In an organization**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   - **If using an enterprise-level runner**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %}
{% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %}
{% endif %}
