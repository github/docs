---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062402"
---
Du kannst deinen Codespace anpassen, indem du die Anzahl der vCPUs und den RAM anpassst, [Dotfiles zum Personalisieren deiner Umgebung hinzufügst](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) oder die installierten Tools und Skripts bearbeitest.

{% data variables.product.prodname_codespaces %} verwendet eine Datei namens `devcontainer.json`, um den Entwicklungscontainer zu konfigurieren, mit dem du in einem Codespace arbeitest. Jedes Repository kann eine oder mehrere `devcontainer.json`-Dateien enthalten, sodass du genau die Entwicklungsumgebung erhältst, die du zum Arbeiten an deinem Code in einem Codespace benötigst. 

Beim Starten verwendet {% data variables.product.prodname_codespaces %} eine `devcontainer.json`-Datei sowie alle davon abhängigen Dateien, aus denen die Entwicklungscontainerkonfiguration besteht, um Tools und Runtimes zu installieren und weitere Einrichtungsaufgaben auszuführen, die für das Projekt benötigt werden. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project).
