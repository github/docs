{% if currentVersion == "free-pro-team@latest" %}1. En la esquina superior derecha de {% data variables.product.product_name %}, da clic en tu foto de perfil y luego en **Tus empresas**.
  !["Tus empresas" en el menú desplegable de la foto de perfil en {% data variables.product.product_name %}](/assets/images/help/enterprises/your-enterprises.png)

1. En la lista de empresas, da clic en aquella que quieras ver. ![Nombre de una empresa en la lista de tus empresas](/assets/images/help/enterprises/your-enterprises-list.png)

{% elsif currentVersion ver_lt "enterprise-server@2.22" %}1. Navega a tu cuenta empresarial a través de {% raw %}<code>https://<em>HOSTNAME</em>/enterprises/<em>ENTERPRISE-NAME</em></code>{% endraw %}, reemplazando `HOSTNAME` con el nombre del host de tu instancia y `ENTERPRISE-NAME` con el nombre de tu cuenta empresarial.

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}1. En la esquina superior derecha de {% data variables.product.product_name %}, da clic en tu foto de perfil y luego en **Configuración de empresa**.
    !["Configuración de empresa" en el menú desplegable de la foto de perfil en {% data variables.product.product_name %}](/assets/images/enterprise/settings/enterprise-settings.png)

{% endif %}
