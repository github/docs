{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner group is registered.
2. Haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
3. En la barra lateral izquierda, da clic en **Acciones**.
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En una organización**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * {% ifversion ghec %}**Si utilizas una cuenta empresarial**: navega a ella haciendo clic en tu foto de perfil en la esquina superior derecha de {% data variables.product.prodname_dotcom_the_website %} y luego haz clic en **Tu empresa** y, después, en la empresa.{% elsif ghes or ghae %}**Si utilizas un ejecutor a nivel de empresa**:

     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     1. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     1. In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización**: Haz clic en **Acciones** en la barra lateral izquierda{% ifversion fpt or ghec or ghes > 3.1 or ghae %} y luego en **Ejecutores**{% endif %}.
   * {% ifversion ghec %}**Si estás utilizand una cuenta empresarial**:{% elsif ghes or ghae %}**Si estás utilizando un ejecutor a nivel empresarial**:{% endif %} Haz clic en **Acciones** debajo de "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion fpt or ghec or ghes > 3.1 or ghae %}, y luego en la pestaña de **Ejecutores** {% endif %}.
{% endif %}
