---
title: Genehmigen von Workflowausführungen über öffentliche Forks
intro: 'Wenn ein externer Mitwirkender einen Pull Request an ein öffentliches Repository übermittelt, muss ein Maintainer mit Schreibzugriff ggf. Workflowausführungen genehmigen.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164123'
---
## Informationen zu Workflowausführungen über öffentliche Forks

{% data reusables.actions.workflow-run-approve-public-fork %}

Du kannst Workflowgenehmigungsanforderungen für ein [Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks), eine [Organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks) oder [ein Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise) konfigurieren.

Workflowausführungen, die mehr als 30 Tage lang auf eine Genehmigung warten, werden automatisch gelöscht.

## Genehmigen von Workflowausführungen für einen Pull Request über einen öffentlichen Fork

{% data reusables.actions.workflows.approve-workflow-runs %}
