{% ifversion fpt %}
1. Navigate to the main page of the organization or repository.
1. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
1. In the left sidebar, click **Actions**, then click **Runners**.
{% elsif ghec %}
1. Navigate to your runner settings:
   * **In an organization or repository**: Navigate to the main page, then click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * **If using an enterprise account**: Navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.
1. Navigate to the {% data variables.product.prodname_actions %} settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar, then click **Runners**.
   * **If using an enterprise account**: In the left sidebar, click **"{% octicon "law" aria-hidden="true" %} Policies"**, then click **Actions**, then click the **Runners** tab.
{% endif %}
