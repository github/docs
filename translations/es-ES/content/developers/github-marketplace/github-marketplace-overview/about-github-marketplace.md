---
title: Acerca de Mercado GitHub
intro: 'Aprende más sobre {% data variables.product.prodname_marketplace %}, en donde puedes compartir tus apps y acciones públicamente con todos los usuarios de {% data variables.product.product_name %}.'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092146'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) le conecta a desarrolladores que quieren ampliar y mejorar sus flujos de trabajo de {% data variables.product.prodname_dotcom %}. Puedes listar herramientas gratuitas y de pago para que las utilicen los desarrolladores en {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} ofrece dos tipos de herramientas para los desarrolladores: {% data variables.product.prodname_actions %} y Apps, y cada herramienta requiere pasos diferentes para agregarla a {% data variables.product.prodname_marketplace %}.

## Acciones de GitHub

{% data reusables.actions.actions-not-verified %}

Para obtener información sobre la publicación de {% data variables.product.prodname_actions %} en {% data variables.product.prodname_marketplace %}, vea "[Publicación de acciones en GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)".

## Aplicaciones

Cualquiera puede compartir las apps con otros usuarios gratuitamente en {% data variables.product.prodname_marketplace %}, pero solo las apps que pertenezcan a las organizaciones pueden venderse. 

Para publicar planes de pago para tu app y mostrar una insignia de marketplace, debes completar el proceso de verificación del publicador. Para más información, vea "[Solicitud de la comprobación del publicador para la organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)" o "[Requisitos para la oferta de una aplicación](/developers/github-marketplace/requirements-for-listing-an-app)".

Una vez que la organización cumpla con los requisitos, alguien con permisos de propietario en la organización puede publicar planes de pago para cualquiera de sus apps. Cada app con un plan de pago también llevará un proceso de incorporación financiera para habilitar los pagos.

Para publicar las apps con planes gratuitos, solo necesitas cumplir con los requisitos generales para listar cualquier app. Para más información, vea "[Requisitos para todas las ofertas de GitHub Marketplace](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)".

### ¿Eres nuevo en las apps?

Si le interesa crear una aplicación para {% data variables.product.prodname_marketplace %}, pero no está familiarizado con {% data variables.product.prodname_github_apps %} o {% data variables.product.prodname_oauth_apps %}, vea "[Compilación de {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" o "[Compilación de {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps)".

### {% data variables.product.prodname_github_apps %} vs. {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}, aunque puedes listar tanto las Apps de OAuth como las {% data variables.product.prodname_github_apps %} en {% data variables.product.prodname_marketplace %}. Para más información, vea "[Diferencias entre {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)" y "[Migración de {% data variables.product.prodname_oauth_apps %} a {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)".

## Resumen de cómo publicar una app en {% data variables.product.prodname_marketplace %}

Cuando termines de crear tu app, puedes compartirla con otros usuarios si la publicas en {% data variables.product.prodname_marketplace %}. En resúmen, el proceso es:

1. Revisa tu app cuidadosamente para garantizar que se comporte en otros repositorios como se espera y que cumpla con los lineamientos de mejores prácticas. Para más información, vea "[Procedimientos recomendados de seguridad para aplicaciones](/developers/github-marketplace/security-best-practices-for-apps)" y "[Requisitos para la oferta de una aplicación](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)".

1. Agrega eventos de webhook a la app para rastrear las solicitudes de facturación de los usuarios. Para más información sobre la API {% data variables.product.prodname_marketplace %}, los eventos de webhook y las solicitudes de facturación, vea "[Uso de la API {% data variables.product.prodname_marketplace %} en la aplicación](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

1. Crea un borrador de lista de {% data variables.product.prodname_marketplace %}. Para más información, vea "[Borrador de una oferta para la aplicación](/developers/github-marketplace/drafting-a-listing-for-your-app)".

1. Agrega un plan de precios. Para más información, vea "[Establecimiento de planes de precios para la oferta](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

1. Lea y acepte los términos del "[Contrato de desarrollador de {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement)".

1. Emite tu listado para que se publique en {% data variables.product.prodname_marketplace %}. Para más información, vea "[Envío de la oferta para su publicación](/developers/github-marketplace/submitting-your-listing-for-publication)".

## Ver el desempeño de tu app

Puedes acceder a las métricas y transacciones de tu lista. Para más información, consulte:

- "[Visualización de métricas para la oferta](/developers/github-marketplace/viewing-metrics-for-your-listing)"
- "[Visualización de transacciones para la oferta](/developers/github-marketplace/viewing-transactions-for-your-listing)"

## Contactar a soporte 

Si tienes preguntas acerca de {% data variables.product.prodname_marketplace %}, por favor contacta directamente a {% data variables.contact.contact_support %}.
