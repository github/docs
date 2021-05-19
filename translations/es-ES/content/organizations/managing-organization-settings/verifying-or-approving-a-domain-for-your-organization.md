---
title: Verifying or approving a domain for your organization
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm your organization''s identity. You can also approve domains that {% data variables.product.company_short %} can send email notifications to for members of your organization.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
---

### Acerca de la verificación de dominios

Después de verificar la propiedad de los dominios de tu organización, se mostrará un distintivo "Verified" (Verificado) en el perfil de la organización. Si tu organización está en {% data variables.product.prodname_ghe_cloud %} y ha aceptado los Términos de servicio corporativos, los propietarios de la organización podrán verificar la identidad de los miembros de la organización al ver la dirección de correo electrónico de cada miembro dentro del dominio verificado. Para obtener más información, consulta "[Acerca de la página de perfil de tu organización](/articles/about-your-organization-s-profile/)" y "[Actualizar a los Términos de servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)."

Si tu organización le pertenece a una cuenta empresarial, se mostrará una "insignia verificada" en el perfil de tu organización para cualquier dominio verificado en dicha cuenta, adicinalmente a cualquier dominio verificado para la organización. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owners. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

{% data reusables.organizations.verified-domains-details %}

En {% data variables.product.prodname_ghe_cloud %}, después de verificar la propiedad del dominio de tu organización, puedes restringir las notificaciones por correo electrónico para la organización a ese dominio. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

### About domain approval

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

### Verifying a domain for your organization

To verify a domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puedes confirmar que tu configuración de DNS cambió si ejecutas el comando `dig` en la línea de comandos, reemplazando `ORGANIZATION` con el nombre de tu organización y `example.com` con el dominio que te gustaría verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through three above to navigate to your organization's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
11. Como alternativa, una vez que la insignia "Verified" (Verificado) es visible en la página de perfil de tu organización, puedes eliminar la entrada de TXT desde el registro de DNS en tu servicio de alojamiento de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)

### Approving a domain for your organization

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

### Removing an approved or verified domain

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. To the right of the domain to remove, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**. !["Delete" for a domain](/assets/images/help/organizations/domains-delete.png)
