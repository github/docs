---
title: Informationen zur Codesuche (Betaversion) auf GitHub
intro: 'Mit der neuen Codesuche (Betaversion) kannst du überall auf GitHub Code durchsuchen, durch diesen navigieren und ihn verstehen.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160225'
---
{% note %}

**Hinweis:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## Informationen zur neuen Codesuche (Betaversion)

Mit der neuen Codesuche (Betaversion) kannst du schnell auf {% data variables.product.prodname_dotcom_the_website %} deinen eigenen Code, den deines Teams und den Code der Open-Source-Community durchsuchen, durch diesen Code navigieren und ihn verstehen. Dieses Suchmodul ist so konzipiert, dass es skalierbar und codeorientiert ist und das Durchsuchen von Code überall auf GitHub mithilfe von regulären Ausdrücken, booleschen Operatoren, speziellen Qualifizierern und der Symbolsuche unterstützt. Weitere Informationen zur Syntax für die neue Codesuche (Betaversion) findest du unter [Grundlegendes zur Syntax für die Codesuche (Betaversion) auf GitHub](/search-github/github-code-search/understanding-github-code-search-syntax).

Neben dem neuen Suchmodul für Code umfasst die Codesuche (Betaversion) auch neue Features für die Suchschnittstelle auf {% data variables.product.prodname_dotcom_the_website %}, z. B. Vorschläge, Vervollständigungen und die Möglichkeit, deine Suchen zu speichern. Dank der neuen Suchschnittstelle kannst du das Gesuchte schneller und leichter finden. Weitere Informationen findest du unter [Verwenden der Codesuche (Betaversion) auf GitHub](/search-github/github-code-search/using-github-code-search).

{% data reusables.search.non-code-search-explanation %}

Die neue Codesuche (Betaversion) ist eng mit einer umgestalteten Codeansicht (Betaversion) auf {% data variables.product.prodname_dotcom_the_website %} integriert. {% data reusables.search.code-view-link %}

Wenn du Zugriff auf die neue Codesuche (Betaversion) und die neue Codeansicht erhalten möchtest, kannst du dich für die [Warteliste](https://github.com/features/code-search-code-view/signup) registrieren. 

## Aktivieren und Deaktivieren der neuen Codesuche und Codeansicht (Betaversion)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Einschränkungen

Wir haben bereits viele öffentliche Repositorys für die neue Codesuche (Betaversion) indiziert und werden auch noch weitere indizieren. Darüber hinaus werden die privaten Repositorys von GitHub-Benutzer*innen, die die Betaversion nutzen, indiziert und für Betabenutzer*innen durchsuchbar gemacht, die bereits Zugriff auf diese privaten Repositorys auf GitHub.com haben. Sehr große Repositorys werden derzeit jedoch möglicherweise noch nicht indiziert, und es wird auch nicht alles an Code indiziert. 

Derzeit gelten die folgenden Einschränkungen für indizierten Code:
   - Übernommener und generierter Code ist ausgenommen (wird mit [Enry](https://github.com/go-enry/go-enry) ermittelt).
   - Leere Dateien und Dateien mit einer Größe von mehr als 350 KB sind ausgenommen.
   - Nur UTF-8-codierte Dateien sind eingeschlossen.
   - Sehr große Repositorys werden möglicherweise nicht indiziert.

Derzeit wird die Suche nach Code nur im Standardbranch eines Repositorys unterstützt.

Die Anzahl der Ergebnisse für eine Suche mit der neuen Codesuche (Betaversion) ist auf 100 Ergebnisse (10 Seiten) beschränkt. Das Sortieren von Ergebnissen für die Codesuche wird derzeit nicht unterstützt. Diese Einschränkung gilt nur für das Durchsuchen von Code mit der neuen Codesuche (Betaversion) und nicht für andere Arten von Suchen.

Die neue Codesuche (Beta) unterstützt das Suchen nach Symboldefinitionen in Code, z. B. Funktions- oder Klassendefinitionen, mithilfe des Qualifizierers `symbol:`. Beachte jedoch, dass mit dem Qualifizierer `symbol:` nur nach Definitionen und nicht nach Verweisen gesucht wird und noch nicht alle Symboltypen und Sprachen vollständig unterstützt werden. Eine Liste der unterstützten Sprachen findest du unter [Qualifizierer „symbol:“](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier).

## Feedback und Support

In unserem [Diskussionsforum](https://github.com/orgs/community/discussions/categories/code-search-and-navigation) kannst du Feedback zur neuen Codesuche (Betaversion) anzeigen und geben.
