---
title: Managing GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'You can enable {% data variables.product.prodname_github_connect %} to access additional features and workflows for {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## Acerca de {% data variables.product.prodname_github_connect %}

You can access additional features and workflows on {% data variables.product.product_location %} by enabling {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)."

Cuando habilitas {% data variables.product.prodname_github_connect %}, configuras una conexión entre {% data variables.product.product_location %} y una organización o cuenta empresarial en {% data variables.product.prodname_ghe_cloud %}. Enabling {% data variables.product.prodname_github_connect %} creates a {% data variables.product.prodname_github_app %} owned by the organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} usa las credenciales de {% data variables.product.prodname_github_app %} para hacerle solicitudes a {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} almacena credenciales desde la {% data variables.product.prodname_github_app %}. The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
- Un token de autenticación, que es válido durante una hora
- Una clave privada, que se utiliza para generar un nuevo token de autenticación
{% endif %}

## Prerrequisitos

To use {% data variables.product.prodname_github_connect %}, you must have an organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}. You may already have {% data variables.product.prodname_ghe_cloud %} included in your plan. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}
If your organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.product.product_location %} to your IP allow list on {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta las secciones "[Administrar las direcciones IP permitidas en tu organización](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" y "[Requerir políticas para los ajustes de seguridad en tu empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.

To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

## Habilitar {% data variables.product.prodname_github_connect %}

Los propietarios de empresa que también son propietarios de una cuenta de empresa u organización que utiliza {% data variables.product.prodname_ghe_cloud %} pueden habilitar {% data variables.product.prodname_github_connect %}.

Si estás conectando a {% data variables.product.product_location %} a una organización en {% data variables.product.prodname_ghe_cloud %} que no le pertenezca a una cuenta empresarial, debes iniciar sesión en {% data variables.product.prodname_dotcom_the_website %} como propietario de organización.

Si estás conectando {% data variables.product.product_location %} a una organización de {% data variables.product.prodname_ghe_cloud %} que le pertenezca a una cuenta empresarial o si la conectas a la cuenta empresarial misma, deberás iniciar sesión en {% data variables.product.prodname_dotcom_the_website %} como propietario de empresa.

{% ifversion ghes %}
1. Iniciar sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Iniciar sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. En "{% data variables.product.prodname_github_connect %} aún no está habilitado", haz clic en **Enable {% data variables.product.prodname_github_connect %}** (Habilitar). Cuando haces clic en **Habilitar {% data variables.product.prodname_github_connect %}**, estás confirmando que estás de acuerdo con los "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">Términos de {% data variables.product.prodname_dotcom %} para las Características y Productos Adicionales</a>".
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Al lado de la cuenta de usuario u organización a la que quieres conectarte, haz clic en **Connect** (Conectar). ![Conecta el botón junto a una cuenta de empresa o negocio](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Inhabilitar las {% data variables.product.prodname_github_connect %}

Los propietarios de empresas pueden inhabilitar {% data variables.product.prodname_github_connect %}.

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.product.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Next to the enterprise account or organization you'd like to disconnect, click **Disable {% data variables.product.prodname_github_connect %}**.
{% ifversion ghes %}
  ![Inhabilitar el botón Conectar de GitHub para una cuenta de empresa o nombre de organización](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Lee la información sobre la desconexión y haz clic en **Inhabilitar {% data variables.product.prodname_github_connect %}**. ![Modal con información de advertencia acerca de la desconexión y el botón de confirmación](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![Inhabilitar el botón Conectar de GitHub para una cuenta de empresa o nombre de organización](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Lee la información sobre la desconexión y haz clic en **Inhabilitar {% data variables.product.prodname_github_connect %}**. ![Modal con información de advertencia acerca de la desconexión y el botón de confirmación](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
