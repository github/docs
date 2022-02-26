{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. In the left sidebar, click **Actions**.
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navigate to where your self-hosted runner is registered:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion ghec %}**If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}**If using an enterprise-level runner**:

     1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="The rocket ship" %}.
     1. In the left sidebar, click **Enterprise overview**.
     1. In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
1. Navigate to the {% data variables.product.prodname_actions %} settings:
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec or ghes > 3.1 or ghae %}, then click **Runners**{% endif %}.
   * {% ifversion ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion fpt or ghec or ghes > 3.1 or ghae %}, then click the **Runners** tab{% endif %}.
{% endif %}
