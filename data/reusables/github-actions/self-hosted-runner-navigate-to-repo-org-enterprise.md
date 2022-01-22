{% ifversion fpt %}
1. Navigate to the main page of the organization or repository where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. In the left sidebar, click **Actions**.
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navigate to where your self-hosted runner is registered:
   * **In an organization or repository**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**. {% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}
   * **If using an enterprise-level runner**:
     1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="The rocket ship" %}.
     2. In the left sidebar, click **Enterprise overview**.
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. Navigate to the {% data variables.product.prodname_actions %} settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, then click **Runners**{% endif %}.{% ifversion ghec or ghae or ghes %}
   * {% ifversion ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion ghes > 3.1 or ghae or ghec %}, then click the **Runners** tab{% endif %}.{% endif %}
{% endif %}
