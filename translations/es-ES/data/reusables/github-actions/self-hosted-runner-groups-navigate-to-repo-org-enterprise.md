1. Navigate to where your self-hosted runner groups are located:
   * **En un repositorio organizacional**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * {% ifversion fpt %}**Si se utiliza una cuenta empresarial**: navega a tu cuenta visitando `https://github.com/enterprises/ENTERPRISE-NAME`, remplazando la parte de `ENTERPRISE-NAME` con tu nombre de cuenta empresarial.{% elsif ghes or ghae %}**Si utilizas un ejecutor a nivel empresarial**:

     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     1. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     1. {% endif %} En la barra lateral de empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navigate to the "Runner groups" settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt %}, then click **Runner groups** below it{% endif %}.
   * {% ifversion fpt %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion fpt %}, then click the **Runners groups** tab{% endif %}.
