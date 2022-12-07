---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105500"
---
Wenn Du E-Mail- oder Webbenachrichtigungen für {% data variables.product.prodname_actions %} aktivierst, erhältst Du eine Benachrichtigung, wenn ein von Dir ausgelöster Workflow abgeschlossen ist. Die Benachrichtigung enthält den Status der Workflow-Ausführung (einschließlich erfolgreicher, fehlgeschlagener, neutraler und abgebrochener Ausführungen). Du kannst auch auswählen, ob Du nur dann eine Benachrichtigung erhalten möchtest, wenn eine Workflow-Ausführung fehlgeschlagen ist. Weitere Informationen zum Aktivieren und Deaktivieren von Benachrichtigungen findest du unter [Informationen zu Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

Benachrichtigungen für geplante Workflows werden an den Benutzer gesendet, der den Workflow ursprünglich erstellt hat. Wenn ein anderer Benutzer die Cron-Syntax in der Workflowdatei aktualisiert, werden nachfolgende Benachrichtigungen stattdessen an diesen Benutzer gesendet.{% ifversion fpt or ghes or ghec %} Wenn ein geplanter Workflow deaktiviert und dann reaktiviert wird, werden die Benachrichtigungen an den Benutzer gesendet, der den Workflow reaktiviert hat, und nicht an den Benutzer, der die Cron-Syntax zuletzt geändert hat.{% endif %}

Du kannst außerdem auf der Registerkarte „Aktionen“ eines Repositorys den Status von Workflowausführungen anzeigen. Weitere Informationen findest du unter [Verwalten einer Workflowausführung](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run).
