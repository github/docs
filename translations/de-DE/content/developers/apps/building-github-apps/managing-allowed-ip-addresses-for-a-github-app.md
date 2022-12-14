---
title: Verwalten zulässiger IP-Adressen für eine GitHub-App
intro: 'Du kannst deiner {% data variables.product.prodname_github_app %} eine Liste zugelassener IP-Adressen hinzufügen, um zu verhindern, dass deine App von der eigenen Positivliste einer Organisation blockiert wird.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage allowed IP addresses
ms.openlocfilehash: 1df357700bec03b86ad0008b2d31fc9db537fe74
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707291'
---
## Informationen zu Positivlisten für IP-Adressen für {% data variables.product.prodname_github_apps %}

Unternehmens- und Organisationsbesitzer*innen können den Zugriff auf Ressourcen einschränken, indem du eine Positivliste für IP-Adressen konfigurierst. Diese Liste gibt die IP-Adressen an, die eine Verbindung herstellen dürfen. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

Wenn eine Organisation über eine Positivliste verfügt, werden Drittanbieteranwendungen, die über eine {% data variables.product.prodname_github_app %} eine Verbindung herstellen, der Zugriff verweigert, es sei denn, die beiden folgenden Bedingungen sind erfüllt:

* Der Ersteller der {% data variables.product.prodname_github_app %} hat eine Positivliste für die Anwendung konfiguriert, die die IP-Adressen angibt, an denen seine Anwendung ausgeführt wird. Ausführliche Anleitungen hierzu findest du nachfolgend.
* Der Organisationsbesitzer hat sich entschieden, die Adressen in der Positivliste der {% data variables.product.prodname_github_app %} zu seiner eigenen Positivliste hinzuzufügen. Weitere Informationen findest du unter [Verwalten zulässiger IP-Adressen für deine Organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %} {% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## Hinzufügen einer Positivlisten für IP-Adressen zu einer {% data variables.product.prodname_github_app %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
1. Scrolle nach unten bis zum Abschnitt „IP-Positivliste“.
![Abschnitt „Grundlegende Informationen“ für deine GitHub-App](/assets/images/github-apps/github-apps-allow-list-empty.png) {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} Die Beschreibung dient als Referenz und wird nicht in der Positivliste von Organisationen verwendet, in denen die {% data variables.product.prodname_github_app %} installiert ist. Stattdessen enthalten Positivlisten von Organisationen „Managed by the NAME GitHub App“ (Verwaltet durch die GitHub-App NAME) als Beschreibung.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
