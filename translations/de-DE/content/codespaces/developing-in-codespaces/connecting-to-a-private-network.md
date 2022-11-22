---
title: Herstellen einer Verbindung mit einem privaten Netzwerk
intro: 'Du kannst eine Verbindung von {% data variables.product.prodname_github_codespaces %} mit Ressourcen in einem privaten Netzwerk einschließlich Paketregistrierungen, Lizenzservern und lokalen Datenbanken herstellen.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 92b8f2b9ea438a4cc799aec1969ff6773f90c298
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159602'
---
## Informationen zum Codespacenetzwerk

Standardmäßig haben deine Codespaces Zugriff auf alle Ressourcen im öffentlichen Internet – z. B. auf Paket-Manager, Lizenzserver, Datenbanken und Cloudplattform-APIs –, aber sie haben keinen Zugriff auf Ressourcen in privaten Netzwerken.

## Herstellen einer Verbindung mit Ressourcen in einem privaten Netzwerk

Es gibt derzeit zwei Methoden für den Zugriff auf Ressourcen in einem privaten Netzwerk innerhalb von {% data variables.product.prodname_github_codespaces %}.
- Mithilfe einer {% data variables.product.prodname_cli %}-Erweiterung zum Konfigurieren deines lokalen Computers als Gateway zu Remoteressourcen.
- Über ein VPN. 

### Verwenden der GitHub CLI-Erweiterung für den Zugriff auf Remoteressourcen

{% note %}

**Hinweis**: Die {% data variables.product.prodname_cli %}-Erweiterung liegt derzeit als Betaversion vor und kann sich noch ändern. 

{% endnote %}

Mit der {% data variables.product.prodname_cli %}-Erweiterung kannst du eine Brücke zwischen einem Codespace und deinem lokalen Computer erstellen, sodass der Codespace auf jede Remoteressource zugreifen kann, die über deinen Computer zugänglich ist. Der Codespace verwendet deinen lokalen Computer als Netzwerkgateway, um diese Ressourcen zu erreichen. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_cli %} für den Zugriff auf Remoteressourcen](https://github.com/github/gh-net#codespaces-network-bridge).

   
   

### Verwenden eines VPN zum Zugreifen auf Ressourcen hinter einem privaten Netzwerk

Alternativ zur {% data variables.product.prodname_cli %}-Erweiterung kannst du ein VPN verwenden, um auf Ressourcen hinter einem privaten Netzwerk in deinem Codespace zuzugreifen.

Wir empfehlen VPN-Tools wie [OpenVPN](https://openvpn.net/), um auf Ressourcen in einem privaten Netzwerk zuzugreifen. Weitere Informationen findest du unter [Verwenden des OpenVPN-Clients aus {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces-contrib/codespaces-openvpn).

Es gibt außerdem eine Reihe von Drittanbieterlösungen, die zwar nicht ausdrücklich von {% data variables.product.prodname_dotcom %} unterstützt werden, aber für die es Beispiele zur Integration mit {% data variables.product.prodname_github_codespaces %} gibt.

Dies sind u. a. folgende Drittanbieterlösungen:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Aufnehmen privater Ressourcen für Codespaces in die Positivliste

Während {% data variables.product.prodname_dotcom %} in seiner Meta-API IP-Adressbereiche für verschiedene Produkte veröffentlicht, werden die IP-Adressen für Codespaces dynamisch zugewiesen, d. h. es ist nicht garantiert, dass dein Codespace jeden Tag die gleiche IP-Adresse erhält. Wir raten Benutzern dringend davon ab, einen ganzen IP-Adressbereich in die auf die Positivliste zu setzen, da dies einen zu weitreichenden Zugang zu allen Codespaces ermöglichen würde (auch für Benutzer ohne Bezug zu deinen Codespaces).

Weitere Informationen zur Meta-API findest du unter [Meta](/rest/reference/meta).

## Einschränken des Zugriffs auf das öffentliche Internet

Derzeit gibt es keine Möglichkeit, Codespaces den Zugang zum öffentlichen Internet zu verwehren oder entsprechend authentifizierte Benutzer vom Zugriff auf einen weitergeleiteten Port abzuhalten.

Weitere Informationen zum Sichern deiner Codespaces findest du unter [Sicherheit in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces).
