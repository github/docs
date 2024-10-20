{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, and then click **Access**.

   >[!IMPORTANT] If you have not configured all policies for {% data variables.product.prodname_copilot_short %}, you will not be able to complete the following steps. If that is the case, click **Go to policies** and ensure all policies are configured before proceeding.

1. Under {% ifversion ghec %}"{% data variables.product.prodname_copilot_enterprise_short %} is active in your organization" or {% endif %}"{% data variables.product.prodname_copilot_business_short %} is active in your organization," to revoke {% data variables.product.prodname_copilot %} access for all users in your organization, select **Disabled**.
1. In the "Remove {% data variables.product.prodname_copilot_short %} access" dialog, click **Confirm and remove seats**.
