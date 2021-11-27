1. Navega a donde se ubiquen tus grupos de ejecutores auto-hospedados:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion fpt or ghec %}**Si se utiliza una cuenta empresarial**: navega a tu cuenta visitando `https://github.com/enterprises/ENTERPRISE-NAME`, remplazando la parte de `ENTERPRISE-NAME` con tu nombre de cuenta empresarial.{% elsif ghes or ghae %}**Si utilizas un ejecutor a nivel empresarial**:

     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     1. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     1. {% endif %} En la barra lateral de empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navega a los ajustes de los "Grupos de ejecutores":
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec %}, then click **Runner groups** below it{% endif %}.
   * {% ifversion fpt or ghec %}**Si estás utilizand una cuenta empresarial**:{% elsif ghes or ghae %}**Si estás utilizando un ejecutor a nivel empresarial**:{% endif %} Haz clic en **Acciones** debajo de "{% octicon "law" aria-label="The law icon" %} Políticas"{% ifversion fpt or ghec %}, y luego en la pestaña de **Grupos de Ejecutores** {% endif %}.
