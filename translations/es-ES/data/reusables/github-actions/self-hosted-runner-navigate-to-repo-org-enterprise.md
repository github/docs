{% ifversion fpt %}
1. Navega a la página principal de la organización o repositorio en donde se registró tu grupo de ejecutores auto-hospedados.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. En la barra lateral izquierda, da clic en **Acciones**.
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En un repositorio organizacional**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**. {% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}
   * **Si utilizas un ejecutor a nivel de empresa**:
     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     2. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización o repositorio**: Haz clic **Actions** en la barra lateral izquierda{% ifversion fpt or ghes > 3.1 or ghae or ghec %} y luego en **Ejecutores**{% endif %}.{% ifversion ghec or ghae or ghes %}
   * {% ifversion ghec %}**Si estás utilizand una cuenta empresarial**:{% elsif ghes or ghae %}**Si estás utilizando un ejecutor a nivel empresarial**:{% endif %} Haz clic en **Acciones** debajo de "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion ghes > 3.1 or ghae or ghec %}, y luego en la pestaña de **Ejecutores** {% endif %}.{% endif %}
{% endif %}
