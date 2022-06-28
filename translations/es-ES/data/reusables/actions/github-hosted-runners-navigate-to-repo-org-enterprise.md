{% ifversion fpt %}
1. Navega a la página principal de la organización o repositorio.
1. Haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
1. En la barra lateral izquierda, haz clic en **Acciones** y luego en **Ejecutores**.
{% elsif ghec %}
1. Navega a los ajustes de tu ejecutor:
   * **En una organización o repositorio**: Navega a la página principal y luego haz clic en {% octicon "gear" aria-label="The Settings gear" %} **Ajustes**.
   * **Si estás utilizando una cuenta empresarial**: Navega a tu cuenta empresarial haciendo clic en tu foto de perfil en la esquina superior derecha de {% data variables.product.prodname_dotcom_the_website %} y luego haz clic en **Tus empresas** y luego en la empresa que desees.
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En una organización o repositorio**: Haz clic en **Acciones** en la barra lateral izquierda y luego en **Ejecutores**.
   * **Si estás utilizando una cuenta empresarial**: en la barra lateral izquierda, haz clic en **"{% octicon "law" aria-label="The law icon" %} Políticas"**, luego en **Acciones** y luego en la pestaña de **Ejecutores**.
{% endif %}
