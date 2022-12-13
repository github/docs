---
title: API-Vorschauversionen
intro: 'Du kannst API-Vorschauversionen nutzen, um neue Features auszuprobieren und Feedback zu geben, ehe diese Features offiziell werden.'
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109773'
---
API-Vorschauversionen bieten dir eine Möglichkeit, neue APIs und Änderungen an vorhandenen API-Methoden zu testen, bevor sie ein Bestandteil der offiziellen GitHub-API werden.

Während des Vorschauzeitraums werden möglicherweise einige Features basierend auf Entwicklerfeedback geändert. Solche Änderungen werden im [Entwicklerblog](https://developer.github.com/changes/) ohne vorherige Benachrichtigung veröffentlicht.

Um auf eine API-Vorschau zuzugreifen, musst du im `Accept`-Header einen benutzerdefinierten [Medientyp](/rest/overview/media-types) für deine Anforderungen angeben. In der Featuredokumentation für jede Vorschauversion ist angegeben, welcher benutzerdefinierte Medientyp bereitgestellt werden soll.

{% ifversion ghes < 3.4 %}
## Inhaltsanhänge

Über die {% data variables.product.prodname_unfurls %}-API kannst du jetzt weitere Informationen in GitHub für URLs bereitstellen, die mit registrierten Domänen verknüpft werden können. Weitere Informationen findest du unter [Verwenden von Inhaltsanlagen](/apps/using-content-attachments/).

**Benutzerdefinierte Medientypen:** `corsair-preview`
**Ankündigung:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


