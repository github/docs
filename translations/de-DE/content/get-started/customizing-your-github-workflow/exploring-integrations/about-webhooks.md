---
title: Informationen zu Webhooks
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: 'Webhooks bieten die Möglichkeit, Benachrichtigungen an einen externen Webserver zu senden, wenn bestimmte Aktionen in einem Repository oder in einer Organisation auftreten.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 30232a560237d473f17ec01d6451cb25195521fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880613'
---
{% tip %}

**Tipp:** {% data reusables.organizations.owners-and-admins-can %} Webhooks für eine Organisation verwalten. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Webhooks können ausgelöst werden, wenn eine Reihe von Aktionen in einem Repository oder einer Organisation ausgeführt werden. Du kannst einen Webhook beispielsweise so konfigurieren, dass er in folgenden Fällen ausgeführt wird:

* Ein Push an ein Repository wird durchgeführt.
* Ein Pull Request wird geöffnet.
* Eine {% data variables.product.prodname_pages %}-Website wird erstellt
* Ein neues Mitglied wird zu einem Team hinzugefügt.

Unter Verwendung der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API kannst du diese Webhooks dazu veranlassen, eine externe Problemverfolgung zu aktualisieren, CI-Buildvorgänge auszulösen, eine Sicherungsspiegelung zu aktualisieren oder sogar eine Bereitstellung auf deinem Produktionsserver durchzuführen.

Um einen neuen Webhook einzurichten, benötigst Du Zugriff auf einen externen Server und Du musst Dich mit den benötigten technischen Verfahren vertraut machen. Hilfreiche Informationen zum Erstellen eines Webhooks sowie eine vollständige Liste der Aktionen, die zugeordnet werden können, findest du unter [Webhooks](/webhooks).
