1. Navigate to where your self-hosted runner is registered:
   * **In an organization or repository**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion fpt %}**If using an enterprise account**: navigate to your enterprise account by visiting `https://github.com/enterprises/ENTERPRISE-NAME`, replacing `ENTERPRISE-NAME` with your enterprise account's name.{% elsif ghes > 2.21 or ghae %}**If using an enterprise-level runner**:
   
     1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="The rocket ship" %}.
     1. In the left sidebar, click **Enterprise overview**. 
     1. {% endif %} In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.
1. Navigate to the {% data variables.product.prodname_actions %} settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt %}, then click **Runners**{% endif %}.
   * {% ifversion fpt %}**If using an enterprise account**:{% elsif ghes > 2.21 or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion fpt %}, then click the **Runners** tab{% endif %}.
