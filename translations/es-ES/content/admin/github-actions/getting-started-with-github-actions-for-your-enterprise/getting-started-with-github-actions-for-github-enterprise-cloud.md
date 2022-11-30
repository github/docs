---
title: Iniciar con las GitHub Actions para GitHub Enterprise Cloud
shortTitle: Get started
intro: 'Aprende cómo configurar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120441'
---
## Acerca de {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_cloud %}

Las {% data variables.product.prodname_actions %} se habilitan predeterminadamente para tu empresa. Para comenzar a utilizar las {% data variables.product.prodname_actions %} dentro de tu empresa, puedes administrar las políticas que controlan cómo los miembros empresariales utilizan estas {% data variables.product.prodname_actions %} y, opcionalmente, agregar ejecutores auto-hospedados a los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Administrar las políticas para las {% data variables.product.prodname_actions %}

Puedes utilizar políticas para controlar cómo los miembros empresariales utilizan las {% data variables.product.prodname_actions %}. Por ejemplo, puedes restringir qué acciones se permiten y configurar la retención de bitácoras y artefactos. Para más información, vea "[Aplicación de directivas de Acciones de GitHub para la empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

Para ejecutar flujos de trabajo de {% data variables.product.prodname_actions %}, necesitas utilizar ejecutores. {% data reusables.actions.about-runners %} Si utilizas ejecutores hospedados en {% data variables.product.company_short %}, se te facturará con base en el consumo después de agotar los minutos que se incluyen en {% data variables.product.product_name %}, mientras que los ejecutores auto-hospedados son gratuitos. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners).

Si eliges utilizar ejecutores auto-hospedados, puedes agregarlos a nivel de empresa, organización o repositorio. Para más información, vea "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

{% data reusables.actions.general-security-hardening %}
