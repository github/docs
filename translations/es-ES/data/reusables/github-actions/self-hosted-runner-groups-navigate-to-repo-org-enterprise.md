{% ifversion fpt %}
1. Navega a la página principal del repositorio u organización en donde se ubican tus grupos de ejecutores auto-hospedados.
2. Haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
3. En la barra lateral izquierda, da clic en **Acciones**.
4. Haz clic en **Grupos de ejecutores**.
{% elsif ghec or ghes or ghae %}
1. Navega a donde se ubiquen tus grupos de ejecutores auto-hospedados:
   * **En una organización**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.{% ifversion ghec %}
   * **Si utilizas una cuenta empresarial**: navega a ella haciendo clic en tu foto de perfil en la esquina superior derecha de {% data variables.product.prodname_dotcom_the_website %} y luego haz clic en **Tu empresa** y, después, en la empresa.{% elsif ghes or ghae %}
   * **Si utilizas un ejecutor a nivel de empresa**:
     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     2. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     3. En la barra lateral de la empresa, haz clic en {% octicon "law" aria-label="The law icon" %} **Políticas**.{% endif %}
2. Navega a los ajustes de los "Grupos de ejecutores":
   * **In an organization**: Click **Actions** in the left sidebar, then click {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}**Runner groups**{% elsif ghae or ghes < 3.4 %}**Runners**{% endif %} below it.{% ifversion ghec or ghes or ghae %}
   * {% ifversion ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies", then click the {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}**Runners groups**{% elsif ghae or ghes < 3.4 %}**Runners**{% endif %} tab.{% endif %}
{% endif %}
