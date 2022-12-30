---
title: Aprobar ejecuciones de flujo de trabajo desde bifurcaciones públicas
intro: 'Cuando un contribuyente externo emite una solicitud de cambios a un repositorio público, podría ser que un mantenedor con acceso de escritura tenga que aprobar cualquier ejecución de flujo de trabajo.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164127'
---
## Acerca de las ejecuciones de flujo de trabajo de las bifurcaciones públicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Puede configurar los requisitos de aprobación de flujo de trabajo para un [repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), una [organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) o una [empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).

Las ejecuciones de flujos de trabajo que hayan estado esperando una aprobación por más de 30 días se borrarán automáticamente.

## Aprobar las ejecuciones de flujo de trabajo en una solicitud de cambios de una bifurcación pública

{% data reusables.actions.workflows.approve-workflow-runs %}
