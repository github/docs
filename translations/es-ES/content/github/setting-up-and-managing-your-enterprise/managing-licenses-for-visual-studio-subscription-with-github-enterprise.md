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

Después de que asignes una licencia para {% data variables.product.prodname_vss_ghe %} a un suscriptor, éste utilizará la porción de {% data variables.product.prodname_enterprise %} de la licencia al unirse a una organización en tu cuenta empresarial con una cuenta de usuario de {% data variables.product.prodname_dotcom_the_website %}. Si la dirección de correo electrónico para la cuent de usuario de un miembro de la empresa en {% data variables.product.prodname_dotcom_the_website %} coincide con el Nombre Primario de Usuario (UPN) para un suscriptor de tu cuenta de {% data variables.product.prodname_vs %}, dicho suscriptor de {% data variables.product.prodname_vs %} consumirá una licencia de {% data variables.product.prodname_vss_ghe %} automáticamente.

La cantidad total de licencias para tu empresa en {% data variables.product.prodname_dotcom %} es la suma de todas las licencias estándar de {% data variables.product.prodname_enterprise %} y de la cantidad de licencias de suscripción de {% data variables.product.prodname_vs %} que incluyan acceso a {% data variables.product.prodname_dotcom %}. Si la cuenta de usuario de un miembro de la empresa no corresponde con la dirección de correo electrónico de un suscriptor de {% data variables.product.prodname_vs %}, la licencia que consuma esa cuenta de usuario no estará disponible para un suscriptor de {% data variables.product.prodname_vs %}.

Para obtener más información acerca de {% data variables.product.prodname_enterprise %}, consulta los productos de "[{% data variables.product.company_short %}](/github/getting-started-with-github/githubs-products#github-enterprise)." Para obtener más información acerca de las cuentas en {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

### Prerrequisitos

1. Después de que compres {% data variables.product.prodname_vss_ghe %}, contacta a {% data variables.contact.contact_enterprise_sales %} y menciona "{% data variables.product.prodname_vss_ghe %}". El equipo de ventas te ayudará para crear una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}. Si ya tienes una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}, o si no estás seguro de ello, por favor, comunícaselo a nuestro equipo de ventas.

2. Asigna licencias de {% data variables.product.prodname_vss_ghe %} a los suscriptores en {% data variables.product.prodname_vss_admin_portal_with_url %}. Para obtener más información acerca de la asignación de licencias, consulta la sección [Administrar las suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/assign-github) en los documentos de Microsoft.

3. En {% data variables.product.prodname_dotcom_the_website %}, crea por lo menos una organización que pertenezca a tu cuenta empresarial. Para obtener más información, consulta la sección "[Agregar organizaciones a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)".

### Invitar a un suscriptor para que utilice {% data variables.product.prodname_enterprise %}

Para utilizar la porción de {% data variables.product.prodname_enterprise %} de la licencia, la cuenta de usuario del suscriptor de {% data variables.product.prodname_dotcom_the_website %} debe ser o convertirse en miembro de una organización que pertenezca a tu empresa en {% data variables.product.prodname_dotcom_the_website %}.

Los propietarios de las organizaciones pueden invitar a miembros nuevos a una organización por correo electrónico. El suscriptor puede aceptar la invitación con una cuenta de usuario existente en {% data variables.product.prodname_dotcom_the_website %} o crear una cuenta nueva.

While not required, we recommend that organization owners send an invitation to the same email address used for the {% data variables.product.prodname_vs %} subscriber's User Primary Name (UPN). When the email address on {% data variables.product.product_name %} matches the subscriber's UPN, you can ensure that another member of the organization does not claim the subscriber's license.

Para obtener más información, consulta las secciones "[Invitar a usuarios para que se unan a tu organización](/github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization)", "[Registrarse para {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)", y "[Administrar las preferencias de correo electrónico](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)".

### Visualizar el licenciamiento de {% data variables.product.prodname_enterprise %}

Después de asignar una licencia para {% data variables.product.prodname_vss_ghe %} en el {% data variables.product.prodname_vss_admin_portal_with_url %}, puedes ver la cantidad de licencias de {% data variables.product.prodname_enterprise %} que están disponibles para tu cuenta empresarial. Para obtener más información, consulta "[Ver la suscripción y el uso de tu cuenta de empresa](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)".

También puedes ver las invitaciones pendientes de {% data variables.product.prodname_enterprise %} para los suscriptores en {% data variables.product.prodname_vss_admin_portal_with_url %}. La lista de invitaciones pendientes incluye a los suscriptores que aún no son miembros de por lo menos una organización en tu cuenta empresarial. Para obtener más información, consulta la sección "[Visualizar a las personas en tu empresa](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)".

### Leer más

- [Introducir las suscripciones de Visual Studio con GitHub enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) en los documentos de Microsoft
