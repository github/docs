---
title: Comenzar con las GitHub Actions para GitHub AE
shortTitle: Get started
intro: 'Aprende sobre cómo configurar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116705'
---
## Acerca de {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_managed %}

Las {% data variables.product.prodname_actions %} se habilitan predeterminadamente para {% data variables.product.product_name %}. Para iniciar utilizando las {% data variables.product.prodname_actions %} dentro de tu empresa, necesitas administrar los permisos de acceso para las {% data variables.product.prodname_actions %} y agregar ejecutores para que ejecuten los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para más información, vea "[Aplicación de directivas de Acciones de GitHub para la empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

Debes configurar y hospedar tus propias máquinas para que ejecuten jobs para tu empresa en {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Para más información, vea "[Introducción a los ejecutores autohospedados para la empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)" y "[Hospedaje de ejecutores propios](/actions/hosting-your-own-runners)".

{% data reusables.actions.general-security-hardening %}
