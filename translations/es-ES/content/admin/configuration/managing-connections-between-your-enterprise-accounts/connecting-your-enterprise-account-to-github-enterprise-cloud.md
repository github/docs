---
title: Conectar tu cuenta empresarial con GitHub Enterprise Cloud
shortTitle: Conectar cuentas empresariales
intro: 'Después de que habilites {% data variables.product.prodname_github_connect %}, puedes compartir características y flujos de trabajo específicos entre {% data variables.product.product_location %} y {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Enterprise owners who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## Acerca de {% data variables.product.prodname_github_connect %}

Para habilitar {% data variables.product.prodname_github_connect %}, debes configurar la conexión en ambos {% data variables.product.product_location %} y en tu cuenta de empresa u organización de {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}
Para configurar una conexión, tu configuración proxy debe permitir la conectividad a `github.com` y `api.github.com`. Para obtener más información, consulta "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

Después de habilitar {% data variables.product.prodname_github_connect %}, podrás habilitar características, como búsqueda unificada y contribuciones unificadas. Para obtener más información sobre todas las características disponibles, consulta la sección "[Administrar las conexiones entre tus cuentas empresariales](/admin/configuration/managing-connections-between-your-enterprise-accounts)".

Cuando conectas {% data variables.product.product_location %} a {% data variables.product.prodname_ghe_cloud %}, un registro en {% data variables.product.prodname_dotcom_the_website %} almacena información sobre la conexión:
{% ifversion ghes %}
- La parte pública de la clave de tu licencia {% data variables.product.prodname_ghe_server %}
- Un hash de tu licencia {% data variables.product.prodname_ghe_server %}
- El nombre personalizado de tu licencia {% data variables.product.prodname_ghe_server %}
- La versión de {% data variables.product.product_location_enterprise %}{% endif %}
- The hostname of your {% data variables.product.product_name %} instance
- La cuenta de empresa u organización en {% data variables.product.prodname_dotcom_the_website %} está conectada a {% data variables.product.product_location %}
- El token de autenticación que usa {% data variables.product.product_location %} para hacerle solicitudes a {% data variables.product.prodname_dotcom_the_website %}

Habilitar {% data variables.product.prodname_github_connect %} también crea un {% data variables.product.prodname_github_app %} cuyo dueño es la cuenta empresarial u organizacional de {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} usa las credenciales de {% data variables.product.prodname_github_app %} para hacerle solicitudes a {% data variables.product.prodname_dotcom_the_website %}.
{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} almacena credenciales desde la {% data variables.product.prodname_github_app %}. Estas credenciales se replicarán en cualquier entorno de alta disponibilidad o de agrupación y se almacenarán en cualquier copia de seguridad, incluidas las instantáneas creadas por {% data variables.product.prodname_enterprise_backup_utilities %}.
- Un token de autenticación, que es válido durante una hora
- Una clave privada, que se utiliza para generar un nuevo token de autenticación
{% endif %}

Habilitar {% data variables.product.prodname_github_connect %} no permitirá {% data variables.product.prodname_dotcom_the_website %} que los usuarios hagan cambios en {% data variables.product.product_name %}.

Para obtener más información acerca de cómo administrar las cuentas empresariales utilizando la API de GraphQL, consulta la sección "[Cuentas empresariales](/graphql/guides/managing-enterprise-accounts)".
## Habilitar {% data variables.product.prodname_github_connect %}

{% ifversion ghes %}
1. Iniciar sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Iniciar sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. En "{% data variables.product.prodname_github_connect %} aún no está habilitado", haz clic en **Enable {% data variables.product.prodname_github_connect %}** (Habilitar). By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Al lado de la cuenta de usuario u organización a la que quieres conectarte, haz clic en **Connect** (Conectar). ![Conecta el botón junto a una cuenta de empresa o negocio](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Disconnecting a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account from your enterprise account

Cuando te desconectas de {% data variables.product.prodname_ghe_cloud %}, se elimina la {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} de tu cuenta de empresa u organización, y las credenciales almacenadas en {% data variables.product.product_location %} se eliminan.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Al lado de la cuenta de empresa u organización de la que te quieres desconectar, haz clic en **Disable {% data variables.product.prodname_github_connect %}** (Inhabilitar {% data variables.product.prodname_github_connect %}).
{% ifversion ghes %}
  ![Inhabilitar el botón Conectar de GitHub para una cuenta de empresa o nombre de organización](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Lee la información acerca de la desconexión y haz clic en **Disable {% data variables.product.prodname_github_connect %}** (Inhabilitar {% data variables.product.prodname_github_connect %}). ![Modal con información de advertencia acerca de la desconexión y el botón de confirmación](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![Inhabilitar el botón Conectar de GitHub para una cuenta de empresa o nombre de organización](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Lee la información acerca de la desconexión y haz clic en **Disable {% data variables.product.prodname_github_connect %}** (Inhabilitar {% data variables.product.prodname_github_connect %}). ![Modal con información de advertencia acerca de la desconexión y el botón de confirmación](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
