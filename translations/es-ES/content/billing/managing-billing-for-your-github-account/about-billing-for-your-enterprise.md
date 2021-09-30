---
title: About billing for your enterprise
intro: Puedes visualizar la información de facturación para tu empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

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

{% elsif fpt or ghes %}

{% ifversion fpt %}

{% data variables.product.company_short %} bills monthly for the total number of members in your enterprise account, as well as any additional services you use with {% data variables.product.prodname_ghe_cloud %}.

{% elsif ghes %}

Each user on {% data variables.product.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% data reusables.billing.about-invoices-for-enterprises %} Para obtener más información sobre el uso y las facturas, consulta las secciones "[Visualizar la suscripción y uso para tu cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" y {% ifversion ghes %}"<a href="/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise" class="dotcom-only">Administrar las facturas de tu empresa</a>" en la documentación de {% data variables.product.prodname_dotcom_the_website %}.{% elsif fpt %}"[Administrar las facturas de tu empresa](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)".{% endif %}

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise.

{% ifversion fpt %}

Each member of your enterprise account with a unique email address consumes a license. Billing managers do not consume a license. Each outside collaborator on a private repository that an organization in your enterprise owns consumes a license, unless the private repository is a fork. Each invitee to your enterprise account, including owners, members of organizations, and outside collaborators, consume a license. For more information about roles in an enterprise account, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

{% endif %}

{% ifversion ghes %}

{% data reusables.billing.ghes-with-no-enterprise-account %}

{% endif %}

## About synchronization of license usage

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obtener más información, consulta la sección {% ifversion fpt %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %}

{% endif %}

## Leer más

- "[About enterprise accounts]({% ifversion fpt or ghes %}/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts#about-enterprise-accounts-on-githubcom{% elsif ghae %}/admin/overview/about-enterprise-accounts{% endif %})"{% ifversion fpt or ghes %} <!-- When you're viewing the fpt version of this article, this link's anchor won't resolve, but that's okay -->
- "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"{% endif %}
