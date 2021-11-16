---
title: Acerca de la facturación de tu empresa
intro: Puedes visualizar la información de facturación para tu empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Facturación de tu empresa
---

## Acerca de la facturación para tu empresa

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Una vez por día, {% data variables.product.prodname_dotcom %} contará la cantidad de usuarios en tu empresa que tengan una licencia. {% data variables.product.company_short %} te cobra por cada usuario con una licencia sin importar si éstos han ingresado en {% data variables.product.prodname_ghe_managed %} ese día.

Para las regiones comerciales, el precio por usuario por día es de $1.2580645161. Para los meses de 31 días, el costo mensual de cada usuario es de $39. Para los meses que tienen menos días, el costo mensual es menor. Cada mes de facturación comienza en una hora fija del primer día calendario de cada mes.

Si agregas un usuario licenciado a mitad de mes, éste solo se incluirá en el conteo de los días en los que haya tenido una licencia. Cuando elimines a un usuario con licencia, éste permanecerá en el conteo hasta el final de dicho mes. Por lo tanto, si agregas a un usuario a mitad de mes y después lo eliminas en el mismo mes, el usuario se incluirá en la cuenta desde el día que el usuario se agregó hasta el final del mes. No existe costo adicional si vuelves a agregar a un usuario durante el mismo mes en el que se eliminó.

Por ejemplo, aquí mostramos los costos para los usuarios con licencias en fechas diferentes.

| Usuario   | Fechas de licencia                              | Días contados | Costo  |
| --------- | ----------------------------------------------- | ------------- | ------ |
| @octocat  | Enero 1 - Enero 31                              | 31            | $39    |
| @robocat  | Febrero 1 - Febrero 28                          | 28            | $35.23 |
| @devtocat | Enero 15 - Enero 31                             | 17            | $21.39 |
| @doctocat | Enero 1 - Enero 15                              | 31            | $39    |
| @prodocat | Enero 7 - Enero 15                              | 25            | $31.45 |
| @monalisa | Enero 1 - Enero 7,<br>Enero 15 - Enero 31 | 31            | $39    |

{% data variables.product.prodname_ghe_managed %} tiene un mínimo de 500 usuarios por instancia. {% data variables.product.company_short %} te cobra por un mínimo de 500 usuarios por instancia, aún si hay menos de 500 usuarios con una licencia en ese día.

Puedes ver tu uso actual en tu [Portal de cuenta de Azure](https://portal.azure.com).

{% elsif ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.company_short %} cobra mensualmente por la cantidad total de miembros en tu cuenta empresarial, así como por cualquier servicio que utilices con {% data variables.product.prodname_ghe_cloud %}.

{% elsif ghes %}

Cada usuario en {% data variables.product.product_location %} consume una plaza en tu licencia. {% data variables.product.company_short %} cobra mensualmente por la cantidad total de plazas que se consumen en tu licencia.

{% endif %}

{% data reusables.billing.about-invoices-for-enterprises %} For more information about usage and invoices, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and {% ifversion ghes %}"[Managing invoices for your enterprise](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}"[Managing invoices for your enterprise](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)."{% endif %}

Los administradores de tu cuenta empresarial de {% data variables.product.prodname_dotcom_the_website %} pueden acceder y administrar la facturación de la empresa.

{% ifversion ghec %}

Cada miembro de tu cuenta empresarial con una dirección de correo electrónico única consumirá una plaza. Los gerentes de facturación no consumen plazas. Cada colaborador externo de un repositorio privado que pertenezca a una organización en tu empresa consumirá una licencia, a menos de que dicho repositorio privado sea una bifurcación. Cada invitado a tu cuenta empresarial, incluyendo a los propietarios, miembros de las organizaciones y colaboradores externos, consumirán una licencia. Para obtener más información sobre los roles en una cuenta empresarial, consulta las secciones "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" y "[Invitar a personas para que administren tu empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)".

{% ifversion ghec %}
{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obtener más información, consulta la sección "[Conectar una suscripción de Azure a tu empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

{% endif %}

{% ifversion ghes %}

{% data reusables.billing.ghes-with-no-enterprise-account %}

{% endif %}

## Acerca de la sincronización del uso de licencias

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see {% ifversion ghec %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

{% endif %}

## Leer más

- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"{% ifversion ghec or ghes %}
- "[Acerca de las licencias para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"{% endif %}
