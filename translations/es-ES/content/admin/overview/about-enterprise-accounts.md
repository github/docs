---
title: Acerca de las cuentas de empresa
intro: 'Con {% data variables.product.product_name %}, puedes utilizar una cuenta de empresa para {% ifversion ghec %}permitir la colaboración entre tus organizaciones, al tiempo que proporcionas{% elsif ghes or ghae %}das{% endif %} a los administradores un punto único de visibilidad y administración.'
redirect_from:
  - /articles/about-github-business-accounts
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
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127631'
---
## Acerca de las cuentas de empresa en {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} te permite administrar organizaciones múltiples. Tu cuenta empresarial debe tener un manipulador, como una organización o cuenta de usuario en {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

La cuenta empresarial en {% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} te permite administrar las organizaciones{% ifversion ghes %} en{% elsif ghae %} que pertenecen a{% endif %} tu {% ifversion ghes %}instancia de {% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa{% endif %}.

{% endif %}

Las organizaciones son cuentas compartidas en donde los miembros de las empresas pueden colaborar a través de muchos proyectos al mismo tiempo. Los propietarios de la organización pueden administrar el acceso a los datos y proyectos de esta con seguridad y características administrativas sofisticadas. Para obtener más información, vea "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

{% ifversion ghec %} En la configuración de empresa, los propietarios de empresas pueden invitar a las organizaciones existentes a unirse a tu cuenta de empresa, transferir organizaciones entre cuentas de empresa o crear nuevas organizaciones. Para más información, vea "[Adición de organizaciones a la empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".
{% endif %}

La cuenta de empresa te permite administrar y aplicar directivas para todas las organizaciones que pertenecen a la empresa. {% data reusables.enterprise.about-policies %} Para más información, consulta "[Acerca de las directivas empresariales](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)".

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} Para obtener más información, vea "[Crear una cuenta de empresa](/admin/overview/creating-an-enterprise-account)".

{% endif %}

## Acerca de la administración de tu cuenta empresarial

{% ifversion ghes or ghae %}

Desde tu cuenta empresarial de {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}una instancia de {% data variables.product.prodname_ghe_server %} {% endif %}, los administradores pueden ver{% ifversion remove-enterprise-members %} y administrar{% endif %} la pertenencia empresarial{% ifversion enterprise-owner-join-org %}, administrar su propia pertenencia en organizaciones propiedad de la empresa{% endif %} y administrar lo siguiente para la instancia de {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa en {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- Uso de licencia{% endif %}
- Seguridad ({% ifversion ghae %}inicio de sesión único, listas de IP permitidas, {% endif %}autoridades de certificados SSH, autenticación bifactorial)
- Políticas empresariales para las organizaciones que pertenezcan a la cuenta empresarial

{% endif %}

{% ifversion ghes %}

### Acerca de la administración de tu cuenta empresarial en {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Al probar o comprar {% data variables.product.prodname_enterprise %}, puede{% ifversion ghes %} also{% endif %} crear una cuenta de empresa para {% data variables.product.prodname_ghe_cloud %} en {% data variables.product.prodname_dotcom_the_website %}. Los administradores de la cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} pueden ver {% ifversion remove-enterprise-members %} y administrar{% endif %} la pertenencia empresarial{% ifversion enterprise-owner-join-org %}, administrar su propia pertenencia en las organizaciones propiedad de la empresa,{% endif %} y administrar lo siguiente para la cuenta empresarial{% ifversion ghes %} de {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Facturación y uso (Servicios en {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, licencias de usuario)
- Seguridad (Inicio de sesión único, listas de IP permitidas, autoridades de certificados SSH, autenticación bifactorial)
- Políticas empresariales para las organizaciones que pertenezcan a la cuenta empresarial

Si utilizas tanto {% data variables.product.prodname_ghe_cloud %} como {% data variables.product.prodname_ghe_server %}, también puedes administrar lo siguiente para {% data variables.product.prodname_ghe_server %} desde tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}.

- Facturación y uso de las instancias de {% data variables.product.prodname_ghe_server %}
- Solicitudes y paquetes de soporte compartidos con {% data variables.contact.enterprise_support %}

También puedes conectar la cuenta empresarial en {% data variables.location.product_location_enterprise %} a tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} para ver los detalles de uso de licencia para tu suscripción de {% data variables.product.prodname_enterprise %} desde {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea {% ifversion ghec %}"[Sincronización del uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronización del uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %}

Para más información sobre las diferencias entre {% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %}, vea "[Productos de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)". {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## Acerca de la facturación para tu cuenta empresarial

La factura de tu cuenta empresarial incluye el costo mensual de cada miembro de ella. La factura incluye {% ifversion ghec %}cualquier tipo de licencia de pago en organizaciones fuera de tu cuenta empresarial, suscripciones a las apps en {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}los servicios de pago adicionales para tu empresa{% ifversion ghec %} como paquetes de datos para {% data variables.large_files.product_name_long %},{% endif %} y{% endif %} el uso de {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Para más información sobre la facturación de la suscripción de {% data variables.product.prodname_ghe_cloud %}, vea "[Visualización de la suscripción y el uso de la cuenta de empresa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" y "[Acerca de la facturación de la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Para más información sobre la facturación de {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, vea "[Acerca de la facturación de la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} ofrece opciones de despliegue. Adicionalmente a las {% data variables.product.prodname_ghe_cloud %}, puedes utilizar {% data variables.product.prodname_ghe_server %} para hospedar trabajo de desarrollo para tu empresa en tu centro de datos o proveedor compatible en la nube. {% endif %}Los propietarios empresariales en {% data variables.product.prodname_dotcom_the_website %} pueden utilizar una cuenta empresarial para administrar el pago y el licenciamiento de las instancias de {% data variables.product.prodname_ghe_server %}. Para más información, vea "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise)" y "[Administración de la licencia de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% endif %}

## Información adicional

- "[Cuentas de empresa](/graphql/guides/managing-enterprise-accounts)" en la documentación de GraphQL API
