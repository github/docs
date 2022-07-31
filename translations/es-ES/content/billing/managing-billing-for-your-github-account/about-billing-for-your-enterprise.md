---
title: Acerca de la facturación de tu empresa
intro: 'Puedes ver la información de facturación para tu empresa{% ifversion ghec or ghes %} cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
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

{% data variables.product.company_short %} factura mensualmente por la cantidad total de plazas con licencia para tu organización o cuenta empresarial, así como por cualquier servicio adicional que utilices con {% data variables.product.prodname_ghe_cloud %}, tal como los minutos de {% data variables.product.prodname_actions %}. Para obtener más información sobre la porción de asientos con licencia de tu factura, consulta la sección "[Acerca de los precios por usuario](/billing/managing-billing-for-your-github-account/about-per-user-pricing)".

{% elsif ghes %}

Cada usuario en {% data variables.product.product_location %} consume una plaza en tu licencia. {% data variables.product.company_short %} cobra mensualmente por la cantidad total de plazas que se consumen en tu licencia.

{% endif %}

{% ifversion ghec %}Para los clientes de {% data variables.product.prodname_ghe_cloud %} con una cuenta empresarial, {% data variables.product.company_short %} se factura mediante su cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}. Para los clientes que pagan por factura individual, cada {% elsif ghes %}Para los clientes de {% data variables.product.prodname_enterprise %} que pagan por factura individual, {% data variables.product.company_short %} emite las facturas mediante una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}. Cada{% endif %} factura incluye un cargo único para todos tus servicios de paga de {% data variables.product.prodname_dotcom_the_website %} y para cualquier instancia de {% data variables.product.prodname_ghe_server %}. Para obtener más información sobre {% ifversion ghes %}las licencias, el uso y las facturas{% elsif ghec %}el uso y las facturas{% endif %}, consulta lo siguiente{% ifversion ghes %} en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{%- ifversion ghes %}
- "[Acerca del precio por usuario](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)"
{%- endif %}
- "[Ver la suscripción y uso para tu cuenta empresarial]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)"
- "[Administrar las facturas para tu empresa]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)"

Los administradores de tu cuenta empresarial de {% data variables.product.prodname_dotcom_the_website %} pueden acceder y administrar la facturación de la empresa. Para obtener más información, consulta la sección "[Roles en una empresa]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}".{% elsif ghes %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %}
{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obtener más información, consulta la sección "[Conectar una suscripción de Azure a tu empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

{% ifversion ghes %}
{% data reusables.billing.ghes-with-no-enterprise-account %}
{% endif %}

{% endif %}
## Leer más

- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
