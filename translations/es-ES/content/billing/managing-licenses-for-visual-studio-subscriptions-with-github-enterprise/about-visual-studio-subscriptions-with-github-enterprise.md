---
title: About Visual Studio subscriptions with GitHub Enterprise
intro: 'You can give {% data variables.product.prodname_vs %} subscribers on your team access to {% data variables.product.prodname_enterprise %} with a combined offering from Microsoft.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: Acerca de
---

## Acerca de {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %} se encuentra disponible desde Microsoft bajo las condiciones del Acuerdo Empresarial de Microsoft. Para obtener más información, consulta la sección [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) en el sitio web de {% data variables.product.prodname_vs %}.

Para utilizar la porción de {% data variables.product.prodname_enterprise %} de la licencia, cada cuenta de usuario del suscriptor de {% data variables.product.prodname_dotcom_the_website %} debe ser o convertirse en miembro de una organización que pertenezca a tu empresa en {% data variables.product.prodname_dotcom_the_website %}. To accomplish this, organization owners can invite new members to an organization by email address. El suscriptor puede aceptar la invitación con una cuenta de usuario existente en {% data variables.product.prodname_dotcom_the_website %} o crear una cuenta nueva.

For more information about the setup of {% data variables.product.prodname_vss_ghe %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

## Acerca de las licencias para {% data variables.product.prodname_vss_ghe %}

Después de que asignes una licencia para {% data variables.product.prodname_vss_ghe %} a un suscriptor, éste utilizará la porción de {% data variables.product.prodname_enterprise %} de la licencia al unirse a una organización en tu empresa con una cuenta de usuario de {% data variables.product.prodname_dotcom_the_website %}. Si la dirección de correo electrónico para la cuent de usuario de un miembro de la empresa en {% data variables.product.prodname_dotcom_the_website %} coincide con el Nombre Primario de Usuario (UPN) para un suscriptor de tu cuenta de {% data variables.product.prodname_vs %}, dicho suscriptor de {% data variables.product.prodname_vs %} consumirá una licencia de {% data variables.product.prodname_vss_ghe %} automáticamente.

La cantidad total de licencias para tu empresa en {% data variables.product.prodname_dotcom %} es la suma de todas las licencias estándar de {% data variables.product.prodname_enterprise %} y de la cantidad de licencias de suscripción de {% data variables.product.prodname_vs %} que incluyan acceso a {% data variables.product.prodname_dotcom %}. Si la cuenta de usuario de un miembro de la empresa no corresponde con la dirección de correo electrónico de un suscriptor de {% data variables.product.prodname_vs %}, la licencia que consuma esa cuenta de usuario no estará disponible para un suscriptor de {% data variables.product.prodname_vs %}.

Para obtener más información acerca de {% data variables.product.prodname_enterprise %}, consulta los productos de "[{% data variables.product.company_short %}](/github/getting-started-with-github/githubs-products#github-enterprise)." Para obtener más información acerca de las cuentas en {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

You can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise on {% data variables.product.product_location %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. Para obtener más información, consulta las secciones "[Ver la suscripción y so de tu cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" y "[Ver a las personas en tu empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)".

{% tip %}

**Tip**: Si descargas un archivo CSV con el uso de licencia de tu empresa en el paso 6 de la sección "[Ver la suscripción y uso de tu cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)", cualquier miembro con un valor faltante en las columnas de "Nombre" o "Perfil" aún no han aceptado la invitación para unirse a una organización dentro de la empresa.

{% endtip %}

También puedes ver las invitaciones pendientes de {% data variables.product.prodname_enterprise %} para los suscriptores en {% data variables.product.prodname_vss_admin_portal_with_url %}.

## Leer más

- [Suscripciones de {% data variables.product.prodname_vs %} con {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) en los documentos de Microsoft
- [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
