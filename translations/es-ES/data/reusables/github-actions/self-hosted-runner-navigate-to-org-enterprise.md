1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion fpt %}**Si se utiliza una cuenta empresarial**: navega a tu cuenta visitando `https://github.com/enterprises/ENTERPRISE-NAME`, remplazando la parte de `ENTERPRISE-NAME` con tu nombre de cuenta empresarial.{% elsif ghes or ghae %}**Si utilizas un ejecutor a nivel empresarial**:

     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     1. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     1. {% endif %} En la barra lateral de empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghes > 3.1 or ghae-next %}, then click **Runners**{% endif %}.
   * {% ifversion fpt %}**Si estás utilizand una cuenta empresarial**:{% elsif ghes or ghae %}**Si estás utilizando un ejecutor a nivel empresarial**:{% endif %} Haz clic en **Acciones** debajo de "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion fpt or ghes > 3.1 or ghae-next %}, y luego en la pestaña de **Ejecutores** {% endif %}.
