---
title: Acerca de las cuentas de empresa
intro: 'Con {% data variables.product.product_name %}, puedes utilizar una cuenta empresarial para {% ifversion ghec %}habilitar la colaboración entre tus organizaciones, mientras que proporcionas{% elsif ghes or ghae %}dar{% endif %} a los administradores un punto único de visibilidad y administración.'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

## Acerca de las cuentas empresariales en {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} te permite administrar organizaciones múltiples. Tu cuenta de empresa debe tener un controlador, como una organización o cuenta personal en {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

La cuenta empresarial en {% ifversion ghes %}{% data variables.product.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} te permite administrar las organizaciones{% ifversion ghes %} en{% elsif ghae %} que pertenecen a{% endif %} tu {% ifversion ghes %}instancia de {% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa{% endif %}.

{% endif %}

Las organizaciones son cuentas compartidas en donde los miembros de las empresas pueden colaborar a través de muchos proyectos al mismo tiempo. Los propietarios de la organización pueden administrar el acceso a los datos y proyectos de esta con seguridad y características administrativas sofisticadas. Para obtener más información, consulta la sección {% ifversion ghec %}"[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".{% elsif ghes or ghae %}"[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)" y "[Administrar usuarios, organizaciones y repositorios](/admin/user-management)".{% endif %}

{% ifversion ghec %}

Los propietarios de las empresas pueden crear organizaciones y enlazarlas a la empresa. Alternatively, you can invite an existing organization to join your enterprise account. Después de que agregues organizaciones a tu cuenta empresarial, puedes administrar y requerir políticas para dichas organizaciones. Las opciones de cumplimiento específicas varían según el parámetro, generalmente, puedes elegir implementar una política única para cada organización en tu cuenta de empresa o puedes permitirle a los propietarios configurar la política en el nivel de organización. For more information, see "[Setting policies for your enterprise](/admin/policies)."

{% elsif ghes or ghae %}

Para obtener más información sobre la administración de políticas para tu cuenta empresarial, consulta la sección "[Configurar las políticas de tu empresa](/admin/policies)".

{% endif %}

## Acerca de la administración de tu cuenta empresarial

{% ifversion ghes or ghae %}

Desde tu cuenta empresarial en {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}una instancia de {% data variables.product.prodname_ghe_server %}{% endif %}, los administradores pueden ver la membrecía empresrial y administrar lo siguiente para la instancia de {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa en {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- Uso de licencia{% endif %}
- Seguridad ({% ifversion ghae %}inicio de sesión único, listas de IP permitidas, {% endif %}autoridades de certificados SSH, autenticación bifactorial)
- Políticas empresariales para las organizaciones que pertenezcan a la cuenta empresarial

{% endif %}

{% ifversion ghes %}

### Acerca de la administración de tu cuenta empresarial en {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Cuando pruebas o compras {% data variables.product.prodname_enterprise %}, también {% ifversion ghes %} puedes{% endif %} crear una cuenta empresarial para {% data variables.product.prodname_ghe_cloud %} en {% data variables.product.prodname_dotcom_the_website %}. Los administradores de la cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} pueden ver la membrecía y administrar lo siguiente para la cuenta empresarial{% ifversion ghes %} en {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Facturación y uso (Servicios en {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, licencias de usuario)
- Seguridad (Inicio de sesión único, listas de IP permitidas, autoridades de certificados SSH, autenticación bifactorial)
- Políticas empresariales para las organizaciones que pertenezcan a la cuenta empresarial

Si utilizas tanto {% data variables.product.prodname_ghe_cloud %} como {% data variables.product.prodname_ghe_server %}, también puedes administrar lo siguiente para {% data variables.product.prodname_ghe_server %} desde tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}.

- Facturación y uso de las instancias de {% data variables.product.prodname_ghe_server %}
- Solicitudes y paquetes de soporte compartidos con {% data variables.contact.enterprise_support %}

También puedes conectar la cuenta empresarial en {% data variables.product.product_location_enterprise %} a tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} para ver los detalles de uso de licencia para tu suscripción de {% data variables.product.prodname_enterprise %} desde {% data variables.product.prodname_dotcom_the_website %}. For more information, see {% ifversion ghec %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

Para obtener más información acerca de las diferencias entre {% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %}, consulta la sección "[ productos de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)". {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

{% ifversion ghec %}

## Acerca de {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

{% endif %}

## Acerca de la facturación para tu cuenta empresarial

La factura de tu cuenta empresarial incluye el costo mensual de cada miembro de ella. The bill includes {% ifversion ghec %}any paid licenses in organizations outside of your enterprise account, subscriptions to apps in {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}additional paid services for your enterprise{% ifversion ghec %} like data packs for {% data variables.large_files.product_name_long %},{% endif %} and{% endif %} usage for {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Para obtener más información sobre la facturación de tu suscripción de {% data variables.product.prodname_ghe_cloud %}, consulta las secciones "[Ver la suscripción y el uso de tu cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" y "[Acerca de la facturación de tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

For more information about billing for {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} ofrece opciones de despliegue. Adicionalmente a las {% data variables.product.prodname_ghe_cloud %}, puedes utilizar {% data variables.product.prodname_ghe_server %} para hospedar trabajo de desarrollo para tu empresa en tu centro de datos o proveedor compatible en la nube. {% endif %}Los propietarios empresariales en {% data variables.product.prodname_dotcom_the_website %} pueden utilizar una cuenta empresarial para administrar el pago y el licenciamiento de las instancias de {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta las secciones "[ productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise)" y "[Administrar tu licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% endif %}

## Leer más

- "[Cuentas empresariales](/graphql/guides/managing-enterprise-accounts)" en la documentación de la API de GraphQL
