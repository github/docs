---
title: Autorisieren von GitHub-Apps
intro: 'Du kannst eine {% data variables.product.prodname_github_app %} autorisieren, damit eine Anwendung Informationen zu deinem {% data variables.product.prodname_dotcom %}-Konto abrufen und unter bestimmten Umständen in deinem Namen Änderungen auf {% data variables.product.prodname_dotcom %} vornehmen darf.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
ms.openlocfilehash: 050f437f411919c4be488e61c032a8543a301e02
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104123'
---
Drittanbieteranwendungen, die deine {% data variables.product.prodname_dotcom %}-Identität überprüfen oder mit den Daten auf {% data variables.product.prodname_dotcom %} in deinem Namen interagieren müssen, kannst du auffordern, die {% data variables.product.prodname_github_app %} für diese Aufgabe entsprechend zu autorisieren. 

Wenn du die {% data variables.product.prodname_github_app %} autorisierst, solltest du sicherstellen, dass die Anwendung vertrauenswürdig ist, und überprüfen, von wem sie entwickelt wurde und auf welche Daten sie zugreifen möchte.

Während der Autorisierung wirst du aufgefordert, der {% data variables.product.prodname_github_app %} die Berechtigung für Folgendes zu erteilen:
* **Überprüfen deiner {% data variables.product.prodname_dotcom %}-Identität**<br/>
  Nach entsprechender Autorisierung ist die {% data variables.product.prodname_github_app %} je nach angeforderter Zugriffsstufe dazu in der Lage, dein öffentliches GitHub-Profil sowie einige private Details (z. B. deine E-Mail-Adresse) programmgesteuert abzurufen.
* **Erfassen der Information, auf welche Ressourcen du zugreifen kannst**<br/>
  Nach entsprechender Autorisierung ist die {% data variables.product.prodname_github_app %} dazu in der Lage, die _privaten_ {% data variables.product.prodname_dotcom %}-Ressourcen programmgesteuert zu lesen, auf die du zugreifen kannst (z. B. private {% data variables.product.prodname_dotcom %}-Repositorys) und _bei denen_ eine Installation der {% data variables.product.prodname_github_app %} ebenfalls vorhanden ist. Von der Anwendung könnten diese Informationen z. B. dazu verwendet werden, Ihnen eine entsprechende Liste von Repositorys anzuzeigen.
* **Handeln in deinem Namen**<br/>
  Die Anwendung muss möglicherweise in deinem Namen Aufgaben auf {% data variables.product.prodname_dotcom %} ausführen. Dies kann das Erstellen eines Issues oder das Kommentieren eines Pull Requests umfassen. Diese Möglichkeit, in deinem Namen zu handeln, ist auf die {% data variables.product.prodname_dotcom %}-Ressourcen beschränkt, auf die _sowohl_ du als auch die {% data variables.product.prodname_github_app %} Zugriff hast. In bestimmten Fällen darf die Anwendung jedoch niemals Änderungen in deinem Namen durchführen.
  
## Wann handelt eine {% data variables.product.prodname_github_app %} in deinem Namen?

Die Situationen, in denen eine {% data variables.product.prodname_github_app %} in deinem Namen handelt, variieren je nach Zweck der {% data variables.product.prodname_github_app %} und Kontext, in dem sie verwendet wird. 

Beispielsweise kann eine {% data variables.product.prodname_github_app %} von einer integrierten Entwicklungsumgebung (Integrated Development Environment, IDE) dazu verwendet werden, in deinem Namen zu interagieren und Änderungen, die du über die IDE erstellt hast, wieder zurück in Repositorys auf {% data variables.product.prodname_dotcom %} zu übertragen.  Die {% data variables.product.prodname_github_app %} erreicht dies über eine [Benutzer-zu-Server-Anforderung](/get-started/quickstart/github-glossary#user-to-server-request).

Wenn eine {% data variables.product.prodname_github_app %} auf diese Weise in deinem Namen handelt, wird dies auf GitHub über ein spezielles Symbol gekennzeichnet, das aus einem kleinen Avatar für die {% data variables.product.prodname_github_app %} besteht, mit dem dein Avatar wie unten dargestellt überlagert wird.

![Ein Issue, das von einer „Benutzer-zu-Server“-Anforderung von einer {% data variables.product.prodname_github_app %} erstellt wurde](/assets/images/help/apps/github-apps-new-issue.png)

## In welchem Umfang kann eine {% data variables.product.prodname_github_app %} erfassen, auf welche Ressourcen du zugreifen kannst, und in deinem Namen handeln?

Der Umfang, in dem eine {% data variables.product.prodname_github_app %} erfassen kann, auf welche Ressourcen du zugreifen kannst, und der Umfang, in dem sie nach der entsprechenden Autorisierung durch dich in deinem Namen handeln kann, ist durch Folgendes begrenzt:

* Die Organisationen oder Repositorys, in denen die App installiert ist 
* Die Berechtigungen, die die App angefordert hat
* Dein Zugriff auf {% data variables.product.prodname_dotcom %}-Ressourcen

Dies wird anhand eines Beispiels erläutert.

{% data variables.product.prodname_dotcom %}-Benutzerin Alice meldet sich in einer Webanwendung eines Drittanbieters, ExampleApp, mit ihrer {% data variables.product.prodname_dotcom %}-Identität an. Während dieses Prozesses autorisiert Alice ExampleApp, Aktionen in ihrem Namen auszuführen.

Allerdings sind die Aktivitäten, die von ExampleApp im Namen von Alice in {% data variables.product.prodname_dotcom %} durchgeführt werden können, durch Folgendes eingeschränkt: die Repositorys, in denen ExampleApp installiert ist, die Berechtigungen, die von ExampleApp angefordert wurden, und durch den Zugriff, den Alice für {% data variables.product.prodname_dotcom %}-Ressourcen hat. 

Das heißt: Damit von ExampleApp ein Issue im Namen von Alice in einem Repository namens Repo A erstellt werden kann, müssen alle folgenden Punkte zutreffen:

* Die {% data variables.product.prodname_github_app %} von ExampleApp fordert Schreibzugriff für Issues an.
* Ein Benutzer mit Administratorzugriff für Repo A muss die {% data variables.product.prodname_github_app %} von ExampleApp in Repo A installiert haben.
* Alice muss über Leseberechtigungen für Repo A verfügen. Informationen dazu, welche Berechtigungen zum Ausführen verschiedener Aktivitäten erforderlich sind, findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).
