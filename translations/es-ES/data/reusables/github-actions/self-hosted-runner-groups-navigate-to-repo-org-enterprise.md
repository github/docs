{% ifversion fpt %}
1. Navigate to the main page of the repository or organization where your self-hosted runner groups are located.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. En la barra lateral izquierda, da clic en **Acciones**.
4. Click **Runner groups**.
{% elsif ghec or ghes or ghae %}
1. Navega a donde se ubiquen tus grupos de ejecutores auto-hospedados:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.{% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}
   * **Si utilizas un ejecutor a nivel de empresa**:
     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     2. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. Navega a los ajustes de los "Grupos de ejecutores":
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec %}, then click **Runner groups** below it{% endif %}.{% ifversion ghec or ghes or ghae %}
   * {% ifversion ghec %}**Si estás utilizand una cuenta empresarial**:{% elsif ghes or ghae %}**Si estás utilizando un ejecutor a nivel empresarial**:{% endif %} Haz clic en **Acciones** debajo de "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion ghec %}, y luego en la pestaña de **Grupos de ejecutores** {% endif %}.{% endif %}
{% endif %}
