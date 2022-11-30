---
title: Compartir acciones y flujos de trabajo con tu empresa
intro: Puedes compartir una acción o flujo de trabajo con tu empresa sin publicar la acción o el flujo de trabajo públicamente.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069951'
---
## Acerca del acceso de las {% data variables.product.prodname_actions %} a los repositorios internos

Si tu organización le pertenece a una cuenta empresarial, puedes compartir las acciones y flujos de trabajo dentro de tu empresa, sin publicar la acción o flujo de trabajo al público en general, si permites que los flujos de trabajo de {% data variables.product.prodname_actions %} accedan a un repositorio interno que contenga dicha acción o flujo de trabajo. 

Cualquier acción o flujo de trabajo almacenado en el repositorio interno puede utilizarse en los flujos de trabajo que se definen en los repositorios privados o internos que pertenecen a la misma organización o que pertenecen a cualquier organización que pertenezca a la empresa. Las acciones y flujos de trabajo almacenados en los repositorios internos no pueden utilizarse en los públicos.

{% warning %}

**Advertencia**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Compartir acciones y flujos de trabajo con tu empresa

1. Almacena la acción o flujo de trabajo en un repositorio interno. Para más información, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".
1. Configura el repositorio para permitir el acceso a los flujos de trabajo en otros repositorios privados o internos. Para más información, vea "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Información adicional

- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
- "[Reutilización de flujos de trabajo](/actions/using-workflows/reusing-workflows)"
