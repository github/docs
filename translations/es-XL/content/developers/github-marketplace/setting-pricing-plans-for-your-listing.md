---
title: Configurar planes de precios para tu listado
intro: 'Cuando [listas tu app en {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/), puedes elegir proporcionarla como un servicio gratuito o venderla. Si planeas vender tu app, puedes crear planes de precio diferentes para los diferentes escalones de características.'
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
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



### Crear planes de precios

Para aprender sobre los planes de precios que ofrece {% data variables.product.prodname_marketplace %}, consulta la sección "[Planes de Precios de {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/)". También te resultarán útiles los lineamientos de facturación que se encuentran en "[Vender tu app](/marketplace/selling-your-app/)".

Los planes de precios pueden estar publicados o en forma de borrador. Si no has emitido tu listado de {% data variables.product.prodname_marketplace %} para su aprobación, un listado publicado funcionará de la misma forma que un listado en borrador hasta que se apruebe tu app y se liste en {% data variables.product.prodname_marketplace %}. Los listados en borrador te permiten crear y guardar planes de precios nuevos sin ponerlos como disponibles en tu página de listado de {% data variables.product.prodname_marketplace %}. Una vez que publicas el plan de precios, este se mostrará disponible para que los clientes lo compren de inmediato. Puedes publicar hasta 10 planes de precios.

Para crear un plan de precios para tu listado de {% data variables.product.prodname_marketplace %}, da clic en **Planes y precios** en la barra lateral izquierda de tu [página de listado de{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Si aún no creas un listado de {% data variables.product.prodname_marketplace %}, lee la sección "[Crear un borrador de listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" para aprender cómo hacerlo.

Cuando das clic en **Nuevo borrador de plan**, verás un formato que te permite personalizar tu plan de precios. Necesitarás configurar los siguientes cambios para crear un plan de precios:

#### Nombre del plan

El nombre de tu plan de precios aparecerá en la página de llegada de tu app en {% data variables.product.prodname_marketplace %}. Puedes personalizar el nombre de tu plan de precios para apegarte a los recursos del plan, al tamaño de la compañía que lo utilizará, o lo que sea.

#### Modelos de precios

##### Planes gratuitos

{% data reusables.marketplace.free-apps-encouraged %} Un plan gratuito aún necesitará que gestiones los flujos de facturación para las [compras nuevas](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/) y las [cancelaciones](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/). Consulta la sección "[Flujos de facturación](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)" para obtener más detalles.

##### Planes de tasa fija

Los planes de tasa fija te permiten ofrecer tu servicio a los clientes por una cuota fija. {% data reusables.marketplace.marketplace-pricing-free-trials %}

Debes configurar un precio tanto mensual como anual para las suscripciones en dólares estadounidenses para los planes de tasa fija. estadounidenses para los planes de tasa fija.

##### Planes por unidad

Los precios por unidad te permiten ofrecer tu app en unidades. Por ejemplo, una unidad puede ser una persona, una plaza o un usuario. Necesitarás proporcionar un nombre para la unidad y configurar un precio tanto mensual como anual para las suscripciones en dólares estadounidenses. estadounidenses.

#### Disponible para

Los planes de precios de {% data variables.product.prodname_marketplace %} pueden aplicar para las **cuentas de organización y personales**, **únicamente para cuentas personales**, o **únicamente para cuentas de organización**. Por ejemplo, si tu plan de precios es por unidad y proporciona plazas múltioples, seleccionarías **únicamente para cuentas de organización**, ya que no hay manera de asignar plazas a las personas de la organización desde una cuenta personal.

#### Descripción corta

Escribe un resumen de los detalles del plan de precios. La descripción puede incluir el tipo de cliente para el cual se creó el plan o los recursos que dicho plan incluye.

#### Viñetas

Puedes escribir hasta cuatro viñetas que incluyan más detalles acerca de tu plan de precios. Estas viñetas pueden incluir los casos de uso de tu app o listar información más detallada acerca de los recursos o de las características que incluye el plan.

### Cambiar un plan de precios del listado de {% data variables.product.prodname_marketplace %}.

Si ya no se necesita un plan de precios para tu plan de {% data variables.product.prodname_marketplace %} o si necesitas ajustar los detalles de tus precios, puedes eliminarlo.

![Botón para eliminar tu plan de precios](/assets/images/marketplace/marketplace_remove_this_plan.png)

Una vez que publicas un plan de precios para una app que ya esté listada en {% data variables.product.prodname_marketplace %}, no podrás hacer cambios al plan. En vez de ésto, necesitarás eliminar el plan de precios. Los clientes que ya compraron el plan de precios que se eliminó seguirán utilizándolo hasta que decidan abandonarlo y migrarse a un plan de precios nuevo. Para encontrar más información acerca de los planes de precios, consulta la sección "[planes de precios en {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/)".

Una vez que elimines el plan de precios, los usuarios ya no podrán comprar tu app utilizando dicho plan. Los usuarios existentes del plan que eliminaste seguirán en ese plan hasta que cancelen su suscripción.

{% note %}

**Nota:** {% data variables.product.product_name %} no puede eliminar a los usuarios de un plan de precios que ya no existe. Puedes lanzar una campaña para exhortar a los usuarios a mejorar o degradar su suscripción para el plan de precios que eliminaste hacia un plan nuevo.

{% endnote %}

Puedes inhabilitar los periodos de prueba gratuitos en GitHub Marketplace sin retirar el plan de precios, pero esto te impide inciar periodos de prueba gratuitos en el futuro para este plan. Si eliges inhabilitar los periodos de prueba gratuitos para un plan de precios, los usuarios que ya se hayan registrado pueden completar su periodo de prueba gratuito.

Después de dar de baja un plan de precios, puedes crear uno nuevo con el mismo nombre que aquél que eliminaste. Por ejemplo, si tienes un plan de precios "Pro" pero necesitas cambiar el precio de tasa fija, puedes eliminar el plan "Pro" y crear uno nuevo, que también sea "Pro" con un precio actualizado. Los usuarios podrán comprar el nuevo plan de precios inmediatamente.
