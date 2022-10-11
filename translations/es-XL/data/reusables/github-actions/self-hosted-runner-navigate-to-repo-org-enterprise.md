1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En un repositorio organizacional**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * {% if currentVersion == "free-pro-team@latest" %}**If using an enterprise account**: navigate to your enterprise account by visiting `https://github.com/enterprises/ENTERPRISE-NAME`, replacing `ENTERPRISE-NAME` with your enterprise account's name.{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}**If using an enterprise-level runner**:

     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     1. In the left sidebar, click **Enterprise overview**.
     1. {% endif %} In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En un repositorio de organización**: da clic en **Acciones** en la barra lateral izquierda.

     ![Configuración de acciones](/assets/images/help/settings/settings-sidebar-actions.png)
   * {% if currentVersion == "free-pro-team@latest" %}**If using an enterprise account**{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}**If using an enterprise-level runner**{% endif %}: click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies".
