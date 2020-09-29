---
title: Conectar el servidor de GitHub Enterprise a GitHub Enterprise Cloud
intro: 'Después de que habilites {% data variables.product.prodname_github_connect %}, puedes compartir características y flujos de trabajo específicos entre {% data variables.product.product_location_enterprise %} y {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Los administradores de sitio para {% data variables.product.prodname_ghe_server %} que también sean dueños de una cuenta de organización o empresa de {% data variables.product.prodname_ghe_cloud %} podrán habilitar {% data variables.product.prodname_github_connect %}.'
versions:
  enterprise-server: '*'
---

### Acerca de {% data variables.product.prodname_github_connect %}

Para habilitar {% data variables.product.prodname_github_connect %}, debes configurar la conexión en ambos {% data variables.product.product_location_enterprise %} y en tu cuenta de empresa u organización de {% data variables.product.prodname_ghe_cloud %}.

Para configurar una conexión, tu configuración proxy debe permitir la conectividad a `github.com` y `api.github.com`. Para obtener más información, consulta "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."

Después de habilitar {% data variables.product.prodname_github_connect %}, podrás habilitar características, como búsqueda unificada y contribuciones unificadas. Para obtener más información acerca de todas las características disponibles, consulta "[Administrar conexiones entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)."

Cuando conectas {% data variables.product.product_location_enterprise %} a {% data variables.product.prodname_ghe_cloud %}, un registro en {% data variables.product.prodname_dotcom_the_website %} almacena información sobre la conexión:
- La parte pública de la clave de tu licencia {% data variables.product.prodname_ghe_server %}
- Un hash de tu licencia {% data variables.product.prodname_ghe_server %}
- El nombre personalizado de tu licencia {% data variables.product.prodname_ghe_server %}
- El nombre del host de {% data variables.product.product_location_enterprise %}
- La versión de {% data variables.product.product_location_enterprise %}
- La cuenta de empresa u organización en {% data variables.product.prodname_dotcom_the_website %} está conectada a {% data variables.product.product_location_enterprise %}
- El token de autenticación que usa {% data variables.product.product_location_enterprise %} para hacerle solicitudes a {% data variables.product.prodname_dotcom_the_website %}

Habilitar {% data variables.product.prodname_github_connect %} también crea un {% data variables.product.prodname_github_app %} cuyo dueño es la cuenta empresarial u organizacional de {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_ghe_server %} usa las credenciales de {% data variables.product.prodname_github_app %} para hacerle solicitudes a {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_ghe_server %} almacena credenciales desde la {% data variables.product.prodname_github_app %}. Estas credenciales se replicarán en cualquier entorno de alta disponibilidad o de agrupación y se almacenarán en cualquier copia de seguridad, incluidas las instantáneas creadas por {% data variables.product.prodname_enterprise_backup_utilities %}.
- Un token de autenticación, que es válido durante una hora
- Una clave privada, que se utiliza para generar un nuevo token de autenticación

Habilitar {% data variables.product.prodname_github_connect %} no permitirá {% data variables.product.prodname_dotcom_the_website %} que los usuarios hagan cambios en {% data variables.product.prodname_ghe_server %}.

{% if currentVersion ver_gt "enterprise-server@2.18" %}
Para obtener más información acerca de cómo administrar las cuentas empresariales utilizando la API de GraphQL, consulta la sección "[Cuentas empresariales](/v4/guides/managing-enterprise-accounts)".
{% endif %}
### Habilitar {% data variables.product.prodname_github_connect %}

1. Iniciar sesión en {% data variables.product.product_location_enterprise %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. En "{% data variables.product.prodname_dotcom_the_website %} aún no está habilitado", haz clic en **Enable {% data variables.product.prodname_github_connect %}** (Habilitar). Al hacer clic en **Enable {% data variables.product.prodname_github_connect %}** (Habilitar), aceptas el <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">Anexo {% data variables.product.prodname_github_connect %} al Acuerdo de licencia {% data variables.product.prodname_enterprise %}</a>. ![Habilitar el botón Conectar de GitHub](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. Al lado de la cuenta de usuario u organización a la que quieres conectarte, haz clic en **Connect** (Conectar). ![Conecta el botón junto a una cuenta de empresa o negocio](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### Desconectar una {% data variables.product.prodname_ghe_cloud %} organización o cuenta de empresa de {% data variables.product.product_location_enterprise %}

Cuando te desconectas de {% data variables.product.prodname_ghe_cloud %}, se elimina la {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} de tu cuenta de empresa u organización, y las credenciales almacenadas en {% data variables.product.product_location_enterprise %} se eliminan.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Al lado de la cuenta de empresa u organización de la que te quieres desconectar, haz clic en **Disable {% data variables.product.prodname_github_connect %}** (Inhabilitar {% data variables.product.prodname_github_connect %}). ![Inhabilitar el botón Conectar de GitHub para una cuenta de empresa o nombre de organización](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. Lee la información acerca de la desconexión y haz clic en **Disable {% data variables.product.prodname_github_connect %}** (Inhabilitar {% data variables.product.prodname_github_connect %}). ![Modal con información de advertencia acerca de la desconexión y el botón de confirmación](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)

