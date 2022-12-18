---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108522"
---
{% ifversion pages-custom-workflow %}

Du kannst deine Website veröffentlichen, wenn Änderungen an einen bestimmten Branch gepusht werden, oder du kannst einen {% data variables.product.prodname_actions %}-Workflow schreiben, um deine Website zu veröffentlichen. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

Wenn du keine Kontrolle über den Buildprozess für deine Website benötigst, wird empfohlen, deine Website zu veröffentlichen, wenn Änderungen an einen bestimmten Branch gepusht werden. {% data reusables.pages.pages-about-branch-source %}

Wenn du einen anderen Buildprozess als Jekyll verwenden möchtest oder nicht möchtest, dass deine kompilierten statischen Dateien in einem dedizierten Branch enthalten sind, wird empfohlen, einen {% data variables.product.prodname_actions %}-Workflow zu schreiben, um deine Website zu veröffentlichen. {% data variables.product.product_name %} bietet Startworkflows für allgemeine Veröffentlichungsszenarien, die dir beim Schreiben deines Workflows helfen.

{% else %}

Deine {% data variables.product.prodname_pages %}-Website wird veröffentlicht, wenn Änderungen an einen bestimmten Branch gepusht werden. {% data reusables.pages.pages-about-branch-source %}

{% endif %}