---
title: "Verwenden von Aktionen in GitHub\_AE"
intro: '{% data variables.product.prodname_ghe_managed %} umfasst die meisten der von {% data variables.product.prodname_dotcom %} erstellten Aktionen.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106780'
---
Workflows von {% data variables.product.prodname_actions %} kannst _Aktionen_ verwenden, bei denen es sich um einzelne Vorgänge handelt, die du zum Erstellen von Aufträgen und dem Anpassen des Workflows kombinieren kannst. Du kannst eigene Aktionen erstellen oder Aktionen verwenden und anpassen, die von der {% data variables.product.prodname_dotcom %}-Community geteilt wurden.

## Offizielle Aktionen, die in {% data variables.product.prodname_ghe_managed %} enthalten sind

Die meisten offiziellen, über {% data variables.product.prodname_dotcom %} erstellten Aktionen werden automatisch mit {% data variables.product.prodname_ghe_managed %} gebündelt und zu einem bestimmten Zeitpunkt über {% data variables.product.prodname_marketplace %} erfasst. Wenn deine {% data variables.product.prodname_ghe_managed %}-Instanz aktualisiert wird, werden auch die gebündelten offiziellen Aktionen aktualisiert.

Zu den gebündelten offiziellen Aktionen zählen unter anderem `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler` und verschiedene Aktionen vom Typ `actions/setup-`. Navigiere in deiner Instanz zu den folgenden Organisationen, um zu sehen, welche offiziellen Aktionen enthalten sind: 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Die Dateien jeder Aktion befinden sich in einem Repository in den Organisationen `actions` und `github`. Jedes Aktionsrepository enthält die erforderlichen Tags, Branches und Commit-SHAs, mit denen deine Workflows auf die Aktion verweisen können.
