{% ifversion fpt %}
1. Navigate to the main page of the organization or repository where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. En la barra lateral izquierda, da clic en **Acciones**.
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En un repositorio organizacional**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**. {% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by visiting `https://github.com/enterprises/ENTERPRISE-NAME`, replacing `ENTERPRISE-NAME` with your enterprise account's name.{% elsif ghes or ghae %}
   * **Si utilizas un ejecutor a nivel de empresa**:
     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     2. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}, then click **Runners**{% endif %}.{% ifversion ghec or ghae or ghes %}
   * {% ifversion ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion ghes > 3.1 or ghae-next or ghec %}, then click the **Runners** tab{% endif %}.{% endif %}
{% endif %}
