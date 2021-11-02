---
title: Acerca de la facturación para Codespaces
shortTitle: Acerca de la facturación
intro: 'Ver los precios y cómo administrar la facturación de {% data variables.product.prodname_codespaces %} para tu organización.'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
---

## Precios de {% data variables.product.prodname_codespaces %}

El uso de {% data variables.product.prodname_codespaces %} se factura para todas las cuentas en los planes de equipo y empresa y no incluye ningún derecho. El uso de {% data variables.product.prodname_codespaces %} no se cobra actualmente para las cuentas individuales.

El uso de {% data variables.product.prodname_codespaces %} se cobra de acuerdo con las unidades de medida en la siguiente tabla:

| Producto           | SKU            | Unit of measure | Price |
| ------------------ | -------------- | --------------- | ----- |
| Codespaces Compute | 2 núcleos      | 1 hour          | $0.18 |
|                    | 4 núcleos      | 1 hour          | $0.36 |
|                    | 8 núcleos      | 1 hour          | $0.72 |
|                    | 16 núcleos     | 1 hour          | $1.44 |
|                    | 32 núcleos     | 1 hour          | $2.88 |
| Codespaces Storage | Almacenamiento | 1 GB-month      | $0.07 |

## Acerca de la facturación para {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Tu uso de {% data variables.product.prodname_codespaces %} comparte la fecha de facturación, método de pago y recibo existente en tu cuenta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %}
Si compraste {% data variables.product.prodname_enterprise %} mediante un Acuerdo de Microsoft Enterprise, puedes conectar tu ID de Suscripción de Azure a tu cuenta empresarial para habilitar y pagar por el uso de {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Conectar una suscripción de Azure a tu empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

{% data reusables.dotcom_billing.pricing_cal %}

## Configurar un límite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Para obtener más información sobre cómo administrar y cambiar el límite de gastos de tu organización, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

{% data reusables.codespaces.exporting-changes %}

## Cómo se maneja la facturación para los repositorios bifurcados

Los {% data variables.product.prodname_codespaces %} solo pueden utilizarse en las organizaciones donde se haya definido un propietario al que se le pueda facturar. Para incurrir en cargos a la organización, el usuario debe ser un miembro o colaborador, de lo contrario, no podrán crear un codespace.

Por ejemplo, un usuario en una organización privada puede bifurcar un repositorio dentro de dicha organización y puede utilizar subsecuentemente un codespace que se facture a la organización; esto es porque la organización es la propietaria del repositorio padre, la cual puede eliminar el acceso del usuario, el repositorio bifurcado y el codespace.

## Cómo se maneja la facturación cuando se transfiere un repositorio

El uso se cobra y reporta por hora. Como tal, pagas por cualquier uso cuando un repositorio se encuentra dentro de tu organización. Cuando un repositorio se transfiere fuera de tu organización, cualquier codespace en este repositorio se elimina como parte del proceso de transferencia.

## Lo que sucede cuando se eliminan usuarios

Si un usuario se elimina de una organización o repositorio, su codespace se borra automáticamente. 
