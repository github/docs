1. Navigate to where your self-hosted runner is registered:
   * **In an organization or repository**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% if currentVersion == "free-pro-team@latest" %}**If using an enterprise account**: navigate to your enterprise account by visiting `https://github.com/enterprises/ENTERPRISE-NAME`, replacing `ENTERPRISE-NAME` with your enterprise account's name.{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**If using an enterprise-level runner**:

     1. Klicke in der oberen rechten Ecke einer beliebigen Seite auf {% octicon "rocket" aria-label="The rocket ship" %}.
     1. In the left sidebar, click **Enterprise overview**.
     1. {% endif %} In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.
1. Navigate to the {% data variables.product.prodname_actions %} settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% if currentVersion == "free-pro-team@latest" %}, then click **Runners**{% endif %}.
   * {% if currentVersion == "free-pro-team@latest" %}**If using an enterprise account**:{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% if currentVersion == "free-pro-team@latest" %}, then click the **Runners** tab{% endif %}.
