---
title: Administrar la facturación para tu empresa
intro: Puedes visualizar la información de facturación para tu empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-ae.about-billing %} Una vez por día, {% data variables.product.prodname_dotcom %} contará la cantidad de usuarios en tu empresa que tengan una licencia. {% data variables.product.company_short %} te cobra por cada usuario con una licencia sin importar si éstos han ingresado en {% data variables.product.prodname_ghe_managed %} ese día.

Para las regiones comerciales, el precio por usuario por día es de $1.2580645161. Para los meses de 31 días, el costo mensual de cada usuario es de $39. Para los meses que tienen menos días, el costo mensual es menor. Cada mes de facturación comienza en una hora fija del primer día calendario de cada mes.

Si agregas un usuario licenciado a mitad de mes, éste solo se incluirá en el conteo de los días en los que haya tenido una licencia. Cuando elimines a un usuario con licencia, éste permanecerá en el conteo hasta el final de dicho mes. Por lo tanto, si agregas a un usuario a mitad de mes y después lo eliminas en el mismo mes, el usuario se incluirá en la cuenta desde el día que el usuario se agregó hasta el final del mes. No existe costo adicional si vuelves a agregar a un usuario durante el mismo mes en el que se eliminó.

Por ejemplo, aquí mostramos los costos para los usuarios con licencias en fechas diferentes.

| Usuario   | Fechas de licencia                              | Días contados | Costo  |
| --------- | ----------------------------------------------- | ------------- | ------ |
| @octocat  | Enero 1 - Enero 31                              | 31            | $39    |
| @robocat  | Febrero 1 - Febrero 28                          | 29            | $35.23 |
| @devtocat | Enero 15 - Enero 31                             | 17            | $21.39 |
| @doctocat | Enero 1 - Enero 15                              | 31            | $39    |
| @prodocat | Enero 7 - Enero 15                              | 25            | $31.45 |
| @monalisa | Enero 1 - Enero 7,<br>Enero 15 - Enero 31 | 31            | $39    |

Tu empresa puede incluir una o más instancias. {% data variables.product.prodname_ghe_managed %} tiene un mínimo de 500 usuarios por instancia. {% data variables.product.company_short %} te cobra por un mínimo de 500 usuarios por instancia, aún si hay menos de 500 usuarios con una licencia en ese día.

Puedes ver tu uso actual en tu [Portal de cuenta de Azure](https://portal.azure.com).

{% else %}

### Acerca de la facturación para las cuentas de empresa

Las cuentas empresariales actualmente están disponibles para los clientes de {% data variables.product.prodname_enterprise %} que pagan por factura. La facturación para todas las organizaciones e instancias de {% data variables.product.prodname_ghe_server %} conectadas con tu cuenta empresarial se conjunta en un solo cargo por factura para todos tus servicios pagados de {% data variables.product.prodname_dotcom_the_website %} (incluyendo las licencias pagadas en organizaciones, paquetes de datos de {% data variables.large_files.product_name_long %}, y suscripciones a las apps de {% data variables.product.prodname_marketplace %}).

Los propietarios de la empresa y los gerente de facturación pueden acceder y administrar todas las configuraciones de facturación para las cuentas de empresa. Para obtener más información sobre las cuentas empresariales, {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" y {% endif %}"[niveles de permiso en los repositorios para una organización](/articles/repository-permission-levels-for-an-organization)". Para obtener más información acerca de administrar a los gerentes de facturación, consulta la sección "[Invitar a las personas para que administren tu empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

### Visualizar tu factura actual

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Dabajo de "Acciones Rápidas", da clic en **Ver factura**. ![Enlace para ver factura](/assets/images/help/business-accounts/view-invoice-link.png)

### Pagar tu factura actual

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Dabajo de "Acciones Rápidas", da clic en **Pagar factura**. ![Enlace para pagar factura](/assets/images/help/business-accounts/pay-invoice-link.png)
5. Debajo de "Pagar factura", teclea tu información de tarjeta de crédito en la forma segura, posteriormente, da clic en **Pagar factura**. ![Confirmar y pagar la factura](/assets/images/help/business-accounts/pay-invoice.png)

### Descargar tu factura actual

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Dabajo de "Acciones Rápidas", da clic en **Descargar factura actual**. ![Enlace de descarga de factura actual](/assets/images/help/business-accounts/download-current-invoice.png)

### Ver tu historial de pagos

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Debajo de "Facturación", da clic en **Facturas pasadas** para ver un resumen de tu actividad de facturación pasada. ![Pestaña de ver historial de pago](/assets/images/help/business-accounts/view-payment-history.png)

{% endif %}
