---
title: Überprüfen deiner benutzerdefinierten Domäne für GitHub Seiten
intro: 'Du kannst die Sicherheit deiner benutzerdefinierten Domäne erhöhen und Übernahmeangriffe vermeiden, indem du deine Domäne überprüfst.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529671'
---
## Informationen zur Domänenüberprüfung für GitHub Seiten

Wenn du deine benutzerdefinierte Domäne für dein persönliches Konto oder deine Organisation verifizierst, können nur Repositorys, die deinem persönlichen Konto oder deiner Organisation gehören, verwendet werden, um eine {% data variables.product.prodname_pages %} Seite für die verifizierte benutzerdefinierte Domäne oder die unmittelbaren Subdomänen der Domäne zu veröffentlichen.

Die Überprüfung deiner Domäne verhindert, dass andere GitHub-Benutzer deine benutzerdefinierte Domäne übernehmen und sie zur Veröffentlichung ihrer eigenen {% data variables.product.prodname_pages %} Seite verwenden. Domänenübernahmen können passieren, wenn du dein Repositorys löschst, wenn dein Abrechnungstarif herabgestuft wird oder nach einer anderen Änderung, die die benutzerdefinierte Domäne aufhebt oder {% data variables.product.prodname_pages %} deaktiviert, während die Domäne für {% data variables.product.prodname_pages %} konfiguriert bleibt und nicht verifiziert wird.

Wenn du eine Domäne überprüfst, werden auch alle unmittelbaren Subdomänen in die Überprüfung einbezogen. Wenn zum Beispiel die benutzerdefinierte Domäne `github.com` verifiziert ist, sind auch `docs.github.com`, `support.github.com` und alle anderen unmittelbaren Subdomänen vor Übernahmen geschützt.

{% data reusables.pages.wildcard-dns-warning %}

Es ist auch möglich, eine Domäne für deine Organisation{% ifversion ghec %} oder dein Unternehmen{% endif %} zu verifizieren, wodurch ein "Verifiziert"-Badge auf dem Organisations {% ifversion ghec %} oder Unternehmensprofil{% endif %} {% ifversion ghec %} angezeigt wird und du auf {% data variables.product.prodname_ghe_cloud %} Benachrichtigungen auf E-Mail-Adressen beschränken kannst, die die verifizierte Domäne verwenden{% endif %}. Weitere Informationen findest du unter " [Verifizieren oder Genehmigen einer Domäne für dein Unternehmen](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) {% ifversion ghec %}" und " [Verifizieren oder Genehmigen einer Domäne für dein Unternehmen ](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}."

## Verifizieren einer Domäne für deine Benutzerwebsite

{% data reusables.user-settings.access_settings %}
1. Klicke auf der Randleiste im Abschnitt "Code, Planung und Automatisierung" auf **{% octicon "browser" aria-label="The pages icon" %} Seiten**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Warte, bis deine DNS-Konfiguration geändert werden kann. Dies kann direkt sein oder bis zu 24 Stunden dauern. Du kannst die Änderung an deiner DNS-Konfiguration bestätigen, indem du den `dig` Befehl in der Befehlszeile ausführst. Ersetze im folgenden Befehl `USERNAME` durch deinen Benutzernamen und `example.com` durch die Domäne, die du verifizieren willst. Wenn deine DNS-Konfiguration aktualisiert wurde, solltest du deinen neuen TXT-Eintrag in der Ausgabe sehen.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Verifizieren einer Domäne für deine Organisationswebsite

Organisationsbesitzer können benutzerdefinierte Domänen für ihre Organisation überprüfen.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke auf der Randleiste im Abschnitt "Code, Planung und Automatisierung" auf **{% octicon "browser" aria-label="The browser icon" %} Seiten**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Warte, bis deine DNS-Konfiguration geändert werden kann. Dies kann direkt sein oder bis zu 24 Stunden dauern. Du kannst die Änderung an deiner DNS-Konfiguration bestätigen, indem du den `dig` Befehl in der Befehlszeile ausführst. Ersetze im folgenden Befehl `ORGANIZATION` durch den Namen deiner Organisation und `example.com` durch die Domäne, die du verifizieren willst. Wenn deine DNS-Konfiguration aktualisiert wurde, solltest du deinen neuen TXT-Eintrag in der Ausgabe sehen.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
