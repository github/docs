---
title: Hacer un borrador de un listado para tu app
intro: 'Cuando creas un listado de {% data variables.product.prodname_marketplace %}, GitHub lo guarda en modo borrador hasta que emitas la app para su aprobación. Tu listado muestra a los clientes cómo pueden utilizar tu app.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092137'
---
## Crear un borrador nuevo de un listado de {% data variables.product.prodname_marketplace %}

Solo puedes crear borradores de listados para las apps que sean públicas. Antes de crear tu borrador de listado puedes leer los siguientes lineamientos para escribir y configurar los ajustes en tu listado de {% data variables.product.prodname_marketplace %}:

* [Escribir descripciones de los listados de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [Configurar un plan de precios para el listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [Configurar el Webhook de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

Para crear un listado de {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. En la barra lateral de la izquierda, haga clic en **OAuth Apps** o **GitHub Apps** en función de la aplicación que esté agregando a {% data variables.product.prodname_marketplace %}.

  {% note %}

  **Nota**: También puede agregar un listado; para ello, vaya a https://github.com/marketplace/new, vea las aplicaciones disponibles y haga clic en **Create draft listing**.

  {% endnote %}

  ![Selección del tipo de app](/assets/images/settings/apps_choose_app.png)

4. Selecciona la app que quisieras agregar a {% data variables.product.prodname_marketplace %}.
![Selección de la aplicación para el listado de {% data variables.product.prodname_marketplace %}](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. Una vez que hayas creado un borrador nuevo de un listado, verás un resumen de las secciones que necesitas visitar antes de que tu listado de {% data variables.product.prodname_marketplace %} esté completo.
![Listado de GitHub Marketplace](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**Nota:** En la sección "Contact info" del listado, se recomienda usar direcciones de correo electrónico individuales, en lugar de direcciones de correo electrónico de grupo como support@domain.com. GitHub utilizará estas direcciones de correo electrónico para contactarte con respecto a las actualizaciones a {% data variables.product.prodname_marketplace %} que pudieran afectar tu listado, a los lanzamientos de nuevas características, a las oportunidades de marketing, a los pagos, y a la información sobre conferencias y patrocinios.

{% endnote %}

## Editar tu listado

Ya que hayas creado un borrador de listado de {% data variables.product.prodname_marketplace %}, puedes regresar a modificar la información de éste en cualquier momento. Si tu app ya se aprobó y está en {% data variables.product.prodname_marketplace %}, puedes editar la información e imágenes en tu listado, pero no podrás cambiar los planes de precios que ya estén publicados. Consulte "[Configurar un plan de precios para el listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".

## Emitir tu app

Una vez completado su listado de {% data variables.product.prodname_marketplace %}, puede enviarlo para su revisión a desde la página **Overview**. Deberá leer y aceptar el contrato del desarrollador de "[{% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/) y, a continuación, hacer clic en **Submit for review**. Después de emitir tu app para su revisión te contactará un experto en integraciones con cualquier tipo de información adicional que se requiera para el proceso de integración.

## Eliminar un listado de {% data variables.product.prodname_marketplace %}

Si ya no quieres listar tu app en {% data variables.product.prodname_marketplace %}, contacta a {% data variables.contact.contact_support %} para eliminar tu lista.
