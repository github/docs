---
title: Administrar las licencias para la suscripción a Visual Studio con GitHub Enterprise
intro: 'Puedes administrar las licencias de {% data variables.product.prodname_enterprise %} para {% data variables.product.prodname_vss_ghe %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
---

### Acerca de {% data variables.product.prodname_vss_ghe %}

{% data variables.product.prodname_vss_ghe %} es una oferta combinada de Microsoft que permite a los suscriptores utilizar tanto {% data variables.product.prodname_enterprise %} como {% data variables.product.prodname_vs %}. {% data variables.product.prodname_vss_ghe %} se encuentra disponible desde Microsoft bajo las condiciones del Acuerdo Empresarial de Microsoft. Para obtener más información, consulta la sección [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) en el sitio web de {% data variables.product.prodname_vs %}.

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise account with a user account on {% data variables.product.prodname_dotcom_the_website %}. If the email address for the user account of an enterprise member on {% data variables.product.prodname_dotcom_the_website %} matches the User Primary Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.product.prodname_vss_ghe %}.

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}. If the user account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, the license that the user account consumes is unavailable for a {% data variables.product.prodname_vs %} subscriber.

Para obtener más información acerca de {% data variables.product.prodname_enterprise %}, consulta los productos de "[{% data variables.product.company_short %}](/github/getting-started-with-github/githubs-products#github-enterprise)." Para obtener más información acerca de las cuentas en {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

### Prerrequisitos

1. Después de que compres {% data variables.product.prodname_vss_ghe %}, contacta a {% data variables.contact.contact_enterprise_sales %} y menciona "{% data variables.product.prodname_vss_ghe %}". El equipo de ventas te ayudará para crear una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}. Si ya tienes una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}, o si no estás seguro de ello, por favor, comunícaselo a nuestro equipo de ventas.

2. Asigna licencias de {% data variables.product.prodname_vss_ghe %} a los suscriptores en {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obtener más información acerca de la asignación de licencias, consulta la sección [Administrar las suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/assign-github) en los documentos de Microsoft.

3. En {% data variables.product.prodname_dotcom_the_website %}, crea por lo menos una organización que pertenezca a tu cuenta empresarial. Para obtener más información, consulta la sección "[Agregar organizaciones a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)".

### Invitar a un suscriptor para que utilice {% data variables.product.prodname_enterprise %}

To use the {% data variables.product.prodname_enterprise %} portion of the license, the subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}.

Organization owners can invite new members to an organization by email address. The email address that the organization owner invites must match the {% data variables.product.prodname_vs %} subscriber's User Primary Name (UPN), which should be an email address. The subscriber can accept the invitation with an existing user account on {% data variables.product.prodname_dotcom_the_website %} or create a new account.

For more information, see "[Inviting users to join your organization](/github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization)," "[Signing up for {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)," and "[Managing email preferences](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)."

### Visualizar el licenciamiento de {% data variables.product.prodname_enterprise %}

Después de asignar una licencia para {% data variables.product.prodname_vss_ghe %} en el {% data variables.product.prodname_vss_admin_portal_with_url %}, puedes ver la cantidad de licencias de {% data variables.product.prodname_enterprise %} que están disponibles para tu cuenta empresarial. Para obtener más información, consulta "[Ver la suscripción y el uso de tu cuenta de empresa](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)".

También puedes ver las invitaciones pendientes de {% data variables.product.prodname_enterprise %} para los suscriptores en {% data variables.product.prodname_vss_admin_portal_with_url %}. La lista de invitaciones pendientes incluye a los suscriptores que aún no son miembros de por lo menos una organización en tu cuenta empresarial. Para obtener más información, consulta la sección "[Visualizar a las personas en tu empresa](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)".

### Further reading

- [Introducir las suscripciones de Visual Studio con GitHub enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) en los documentos de Microsoft
