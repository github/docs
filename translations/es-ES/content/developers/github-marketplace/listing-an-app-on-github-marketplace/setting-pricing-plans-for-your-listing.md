---
title: Configurar planes de precios para tu listado
intro: 'Cuando listas tu app en {% data variables.product.prodname_marketplace %}, puedes elegir proporcionarla como un servicio gratuito o venderla. Si planeas vender tu app, puedes crear planes de precio diferentes para los diferentes escalones de características.'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans/
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans/
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan/
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /developers/github-marketplace/setting-pricing-plans-for-your-listing
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

### Acerca de configurar planes de precios

{% data variables.product.prodname_marketplace %} ofrece varios tipos diferentes de planes de pago. Para obener información detallada, consulta la sección "[Planes de precios para {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)".

Para ofrecer un plan de pago para tu app, esta debe pertenecer a una organización que haya completado el proceso de verificación de publicadores y debe cumplir con ciertos criterios. Para obtener más información, consulta las secciones "[Solicitar una verificación de publicador para tu organizción](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)" y "[Requisitos para listar una app en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)".

Si tu app ya se publicó con un plan de pago y eres un publicador verificado, entonces puedes publicar un plan de pago nuevo desde la página de "Editar plan de precios" en la configuración del listado de tu app de Marketplace.

![Botón de publicar este plan](/assets/images/marketplace/publish-this-plan-button.png)

Si tu app ya se publicó con un plan de pago, pero no puedes verificar al publicador, entonces no podrás publicar un plan de pago nuevo hasta que seas un publicador verificado. Para obtener más información acerca de cómo convertirse en un publicador verificado, consulta la sección "[Solicitar una verificación de publicador para tu organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

### Acerca de guardar los planes de precios

Puedes guardar los planes de precios con los estados de "borrador" o de "publicado". Si aún no emites tu listado de {% data variables.product.prodname_marketplace %} para su aprobación, los planes publicados funcionarán de la misma forma que los planes en borrador hasta que se apruebe tu listado y se muestre en {% data variables.product.prodname_marketplace %}. Los planes en borrador te permiten crear y guardar nuevos planes de precios sin hacerlos disponibles en tu página de listado de {% data variables.product.prodname_marketplace %}. Una vez que publicas un plan de precios en un listado publicado, éste estará disponible para que los clientes lo compren de inmediato. Puedes publicar hasta 10 planes de precios.

Para obtener lineamientos sobre la facturación a clientes, consulta la sección "[Facturar a clientes](/developers/github-marketplace/billing-customers)".

### Crear planes de precios

Para crear un plan de precios para tu listado de {% data variables.product.prodname_marketplace %}, da clic en **Planes y precios** en la barra lateral izquierda de tu [página de listado de{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Para obtener más información, consulta la sección "[Crear un borrador de listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)".

Cuando das clic en **Nuevo borrador de plan**, verás un formato que te permite personalizar tu plan de precios. Necesitarás configurar los siguientes cambios para crear un plan de precios:

- **Nombre del plan** - El nombre de tu plan de precios aparecerá en la página de llegada de tu app de {% data variables.product.prodname_marketplace %}. Puedes personalizar el nombre de tu plan de precios para que se ajuste con los recursos del plan, el tamaño de la compañía que lo utilizará, o con lo que gustes.

- **Modelos de precios** - Hay tres tipos de planes de precios: grtuito, tasa fija, y por unidad. Todos los planes requieren que proceses eventos de compras nuevas y de cancelaciones desde la API de marketplace. Adicionalmente, para los planes pagados:

  - Debes configurar un precio para las suscripciones tanto anuales como mensuales en dólares estadounidenses.
  - Tu app debe procesar los eventos de cambio de planes.
  - Debes solicitar la verificación para publicar un listado con un plan de pago.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  Para obtener información detallada, consulta las secciones "[Planes de precios para las apps de {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)" y "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

- **Disponible para** - Los planes de precios de {% data variables.product.prodname_marketplace %} pueden aplicar para las **cuentas personales y de organización**, **Cuentas personales únicamente**, o **Cuentas de organización únicamente**. Por ejemplo, si tu plan de precios es por unidad y proporciona plazas múltioples, seleccionarías **únicamente para cuentas de organización**, ya que no hay manera de asignar plazas a las personas de la organización desde una cuenta personal.

- **Descripción corta** - Escribe un resumen breve de los detalles del plan de precios. La descripción puede incluir el tipo de cliente para el cual se creó el plan o los recursos que dicho plan incluye.

- **Viñetas** - Puedes escribir hasta cuatro viñetas que incluyan más detalles sobre tu plan de precios. Estas viñetas pueden incluir los casos de uso de tu app o listar información más detallada acerca de los recursos o de las características que incluye el plan.

{% data reusables.marketplace.free-plan-note %}

### Cambiar un plan de precios del listado de {% data variables.product.prodname_marketplace %}.

Si ya no se requiere algún plan de precios para tu listado de {% data variables.product.prodname_marketplace %}, o si necesitas ajustar los detalles de los precios, puedes eliminarlo.

![Botón para eliminar tu plan de precios](/assets/images/marketplace/marketplace_remove_this_plan.png)

No podrás hacer cambios a un plan de precios para una app que ya está listada en {% data variables.product.prodname_marketplace %} una vez que lo publiques. En su lugar, necesitarás eliminar el plan de precios y crear un plan nuevo. Los clientes que ya compraron el plan de precios que se eliminó seguirán utilizándolo hasta que decidan abandonarlo y migrarse a un plan de precios nuevo. Para encontrar más información acerca de los planes de precios, consulta la sección "[planes de precios en {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/)".

Una vez que elimines el plan de precios, los usuarios ya no podrán comprar tu app utilizando dicho plan. Los usuarios existentes del plan que eliminaste seguirán en ese plan hasta que cancelen su suscripción.

{% note %}

**Nota:** {% data variables.product.product_name %} no puede eliminar a los usuarios de un plan de precios que ya no existe. Puedes lanzar una campaña para exhortar a los usuarios a mejorar o degradar su suscripción para el plan de precios que eliminaste hacia un plan nuevo.

{% endnote %}

Puedes inhabilitar los periodos de prueba gratuitos en GitHub Marketplace sin retirar el plan de precios, pero esto te impide inciar periodos de prueba gratuitos en el futuro para este plan. Si eliges inhabilitar los periodos de prueba gratuitos para un plan de precios, los usuarios que ya se hayan registrado pueden completar su periodo de prueba gratuito.

Después de dar de baja un plan de precios, puedes crear uno nuevo con el mismo nombre que aquél que eliminaste. Por ejemplo, si tienes un plan de precios "Pro" pero necesitas cambiar el precio de tasa fija, puedes eliminar el plan "Pro" y crear uno nuevo, que también sea "Pro" con un precio actualizado. Los usuarios podrán comprar el nuevo plan de precios inmediatamente.

Si no eres un publicador verificado, entonces no podrás cambiar el plan de precios para tu app. Para obtener más información acerca de cómo convertirse en un publicador verificado, consulta la sección "[Solicitar una verificación de publicador para tu organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".
