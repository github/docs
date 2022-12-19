---
title: Selbst-gehostete Runner entfernen
intro: 'Du kannst selbstgehostet Runner dauerhaft aus einem Repository{% ifversion fpt %} oder einer Organisation{% elsif ghec or ghes or gahe %}, einer Organisation oder einem Unternehmen{% endif %} entfernen.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Remove self-hosted runners
ms.openlocfilehash: d47a2e348f2d1a79342934e70115314d9e62f6f0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090439'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einen Runner aus einem Repository entfernen

{% note %}

**Hinweis**: {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Um einen selbstgehosteten Runner aus einem Benutzerrepository zu entfernen, musst du der Repositorybesitzer sein. Für ein Organisationsrepository musst du der Besitzer der Organisation sein oder über Administratorzugriff auf das Repository verfügen. Es empfiehlt sich, auch Zugriff auf den selbstgehosteten Runnercomputer zu besitzen. Weitere Informationen zum Entfernen einer selbstgehosteten Runnergruppe mit der REST-API findest du unter [Selbstgehostete Runner](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Einen Runner aus einer Organisation entfernen

{% note %}

**Hinweis**: {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Um einen selbst-gehosteten Runner aus einer Organisation zu entfernen, musst du ein Organisationsinhaber sein. Es empfiehlt sich, auch Zugriff auf den selbstgehosteten Runnercomputer zu besitzen. Weitere Informationen zum Entfernen einer selbstgehosteten Runnergruppe mit der REST-API findest du unter [Selbstgehostete Runner](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion fpt or ghes > 3.3 or ghec %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghes < 3.4 or ghae %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %}

## Entfernen eines Runners aus einem Unternehmen

{% ifversion fpt %} Wenn du {% data variables.product.prodname_ghe_cloud %} verwendest, kannst du auch Runner aus einem Unternehmen entfernen. Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-enterprise).
{% endif %} {% ifversion ghec or ghes or ghae %} {% note %}

**Hinweis**: {% data reusables.actions.self-hosted-runner-removal-impact %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% endnote %}

Um einen selbstgehosteten Runner aus einem Unternehmen zu entfernen, musst du ein Unternehmensbesitzer sein. Es empfiehlt sich, auch Zugriff auf den selbstgehosteten Runnercomputer zu besitzen. Weitere Informationen zum Entfernen eines selbstgehosteten Runners mit der REST-API findest du unter den Unternehmensendpunkten in der [{% data variables.product.prodname_actions %}-REST-API](/rest/reference/actions#self-hosted-runners).

{% data reusables.actions.self-hosted-runner-reusing %} {% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.self-hosted-runner-removing-a-runner-updated %} {% elsif ghae or ghes < 3.4 %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.self-hosted-runner-removing-a-runner %} {% endif %} {% endif %}
