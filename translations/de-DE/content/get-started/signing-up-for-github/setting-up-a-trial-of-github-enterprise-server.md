---
title: Eine Testversion von GitHub Enterprise Server einrichten
intro: 'Du kannst {% data variables.product.prodname_ghe_server %} kostenlos testen.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
ms.openlocfilehash: 9beee350488bdf27beb7107deda3c44f560d29e9
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163557'
---
## Informationen zu {% data variables.product.prodname_ghe_server %}-Testversionen

Du kannst eine Testversion anfordern und {% data variables.product.prodname_ghe_server %} 45 Tage lang kostenlos testen. Deine Testversion wird als virtuelle Appliance installiert, wobei du wählen kannst, ob sie lokal oder in der Cloud bereitgestellt wird. Weitere Informationen zu {% data variables.product.prodname_ghe_server %} und eine Liste der unterstützten Virtualisierungsplattformen findest du unter [Informationen zu {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server).

{% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}Sicherheitsmeldungen{% endif %} und {% data variables.product.prodname_github_connect %} stehen in Testversionen von {% data variables.product.prodname_ghe_server %} derzeit nicht zur Verfügung. Kontaktiere {% data variables.contact.contact_enterprise_sales %} für eine Vorstellung dieser Funktionen. Weitere Informationen zu diesen Features findest du unter „[Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)“ und „[Verbinden deines Enterprise-Kontos mit {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)“.

Testversionen sind auch für {% data variables.product.prodname_ghe_cloud %} verfügbar. Weitere Informationen findest du unter „[Einrichten einer Testversion von {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud)“.

{% data reusables.products.which-product-to-use %}

## Einrichten deiner Testversion von {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} wird als virtuelle Appliance installiert. Wähle in deiner Organisation die Person aus, die du mit der Einrichtung einer virtuellen Maschine beauftragen möchtest, und bitte diese, eine [Testversion anzufordern](https://enterprise.github.com/trial). Mit dem Test kannst du sofort nach dem Absenden der Anfrage beginnen.

Klicke zur Einrichtung eines Kontos für das {% data variables.product.prodname_enterprise %}-Webportal auf den Link in der E-Mail, die du nach dem Anfordern deiner Testversion erhalten hast, und folge den Eingabeaufforderungen. Lade anschließend deine Lizenzdatei herunter. Weitere Informationen findest du unter „[Verwalten deiner Lizenz für {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise)“.

Lade zur Installation von {% data variables.product.prodname_ghe_server %} die erforderlichen Komponenten herunter, und lade deine Lizenzdatei hoch. Weitere Informationen findest du in den Anweisungen zur gewählten Visualisierungsplattform unter „[Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance)“.

## Nächste Schritte

Um deine Testversion optimal zu nutzen, folge diesen Schritten:

1. [Eine Organisation erstellen](/enterprise-server@latest/admin/user-management/creating-organizations)
2. Die grundlegenden Schritte der Verwendung von {% data variables.product.prodname_dotcom %} werden unter folgenden Links beschrieben:
   - Webcast: [Einführung in {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/)
   - [Grundlegendes zum {% data variables.product.prodname_dotcom %}-Flow](https://guides.github.com/introduction/flow/) in {% data variables.product.prodname_dotcom %}-Handbüchern
   - [Hello World](https://guides.github.com/activities/hello-world/) in {% data variables.product.prodname_dotcom %}-Handbüchern
   - [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)
3. Informationen zum Konfigurieren deiner Instanz für die Anforderungen deiner Organisation findest du unter [Konfigurieren deines Unternehmens](/enterprise-server@latest/admin/configuration/configuring-your-enterprise).
4. Informationen zum Integrieren von {% data variables.product.prodname_ghe_server %} in deinen Identitätsanbieter findest du unter „[Verwenden von SAML](/enterprise-server@latest/admin/user-management/using-saml)“ und „[Verwenden von LDAP](/enterprise-server@latest/admin/authentication/using-ldap)“.
5. Lade beliebig viele Personen zum Test ein.
   - Füge die Benutzer zu deiner {% data variables.product.prodname_ghe_server %}-Instanz hinzu, entweder mit der integrierten Authentifizierung oder deinem konfigurierten Identitätsanbieter. Weitere Informationen findest du unter „[Verwenden der integrierten Authentifizierung](/enterprise-server@latest/admin/user-management/using-built-in-authentication)“.
   - Wenn du Personen als Kontoadministratoren einladen möchtest, besuche das [{% data variables.product.prodname_enterprise %}-Webportal](https://enterprise.github.com/login).

    {% note %}

    **Tipp:** Personen, die du als Kontoadministratoren einlädst, erhalten eine E-Mail mit einem Link, über den sie die Einladung annehmen können.

    {% endnote %}

{% data reusables.enterprise.best-practices %}    

{% data reusables.products.product-roadmap %}

## Test beenden

Im [{% data variables.product.prodname_enterprise %}-Webportal](https://enterprise.github.com/login) kannst du während des Testzeitraums jederzeit auf vollständige Lizenzen umstellen.

Wenn das Upgrade nicht spätestens am letzten Tag des Testzeitraums erfolgt, erhältst du eine E-Mail, die Dich über die Beendigung des Tests informiert. Wenn du mehr Zeit für die Beurteilung von {% data variables.product.prodname_enterprise %} benötigst, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %} für eine Verlängerung.

## Weiterführende Themen

- [Einrichten einer Testversion von {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)
