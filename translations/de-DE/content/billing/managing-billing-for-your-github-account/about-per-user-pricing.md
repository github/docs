---
title: Informationen zur benutzerabhängigen Preisgestaltung
intro: '{% ifversion fpt or ghec %}Für Organisationen{% ifversion ghec %} und Unternehmen{% endif %} beginnt deine {% else %}Deine {% endif %}Rechnung beginnt mit der Anzahl lizenzierter Arbeitsplätze, die du auswählst.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106669'
---
## Informationen zur benutzerabhängigen Preisgestaltung

{% ifversion fpt %}

Neue Organisationen auf {% data variables.product.prodname_dotcom_the_website %} können öffentliche und Open-Source-Projekte mit {% data variables.product.prodname_free_team %} erstellen oder ein Upgrade auf ein kostenpflichtiges Produkt mit benutzerspezifischen Preisen durchführen. Weitere Informationen findest du unter [{% data variables.product.company_short %}-Produkte](/get-started/learning-about-github/githubs-products) und unter [Durchführen eines Upgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription).

Organisationen mit einem kostenpflichtigen Abonnement vor dem 11. Mai 2016 können wählen, ob sie an ihrem bestehenden Abrechnungsplan pro Repository festhalten oder zu einer benutzerabhängigen Preisgestaltung wechseln möchten. {% data variables.product.company_short %} benachrichtigt dich zwölf Monate vor einer vorgeschriebenen Änderung an deinem Abonnement. Weitere Informationen zum Wechseln deines Abonnements findest du unter [Durchführen eines Upgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription).

{% else %}

Die Grundlage deiner Rechnung ist die Anzahl der standardmäßig lizenzierten Arbeitsplätze, die du für deine{% ifversion ghec %} Organisation oder dein {% endif %} Unternehmen auswählst.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Damit dieselben Benutzer*innen nicht mehr als eine Lizenz für mehrere Enterprise-Bereitstellungen verbrauchen, kannst du die Lizenznutzung zwischen deinen {% data variables.product.prodname_ghe_server %}- und {% data variables.product.prodname_ghe_cloud %}-Umgebungen synchronisieren. Weitere Informationen findest du unter [Informationen zu Lizenzen für GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise).

Zusätzlich zu lizenzierten Arbeitsplätzen kann enthält deine Rechnung möglicherweise weitere Gebühren, z. B. {% data variables.product.prodname_GH_advanced_security %}. Weitere Informationen findest du unter [Informationen zur Abrechnung für ein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).
{% endif %}

## Personen, die eine Lizenz nutzen

{% ifversion fpt %}

In {% data variables.product.company_short %} fallen Kosten für die folgenden Personen an:

- Mitglieder der Organisation, einschließlich der Besitzer
- Externe Mitwirkende an privaten Repositorys, die deiner Organisation gehören (ausgenommen Forks)
- Alle Personen mit einer ausstehenden Einladung zur Mitarbeit an privaten oder internen Repositorys, die deiner Organisation gehören (ausgenommen Forks)
- Inaktive Benutzer

{% note %}

**Hinweise:** 
- {% data variables.product.company_short %} zählt jeden externen Projektmitarbeiter nur einmal für die Abrechnung, auch wenn das Benutzerkonto Zugriff auf mehrere Repositorys im Besitz deiner Organisation hat.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

Für die folgenden Personen fallen in {% data variables.product.company_short %} keine Kosten an:

- Abrechnungsmanager
- Alle Personen mit einer ausstehenden Einladung, Abrechnungsmanager zu werden
- Alle Personen mit einer ausstehenden Einladung zur Mitarbeit an einem öffentlichen Repository, das deiner Organisation gehört

{% else %}

In {% data variables.product.company_short %} fallen für jede Bereitstellung von {% data variables.product.prodname_enterprise %} Kosten für die folgenden Konten an.

### Konten, die eine Lizenz für {% data variables.product.prodname_ghe_cloud %} nutzen

In {% data variables.product.company_short %} werden für {% data variables.product.prodname_ghe_cloud %} Gebühren für jedes der folgenden Konten berechnet:

- Unternehmensbesitzer, die Mitglied oder Besitzer mindestens einer Organisation im Unternehmen sind
- Mitglieder der Organisation, einschließlich der Besitzer
- Externe Mitwirkende an privaten oder internen Repositorys, die deiner Organisation gehören (ausgenommen Forks)
- Inaktive Benutzer

Wenn dein Unternehmen {% data variables.product.prodname_emus %} nicht verwendet, werden auch die folgenden Konten in Rechnung gestellt:

- Alle Personen mit einer ausstehenden Einladung, Besitzer oder Mitglied einer Organisation zu werden
- Alle Personen mit einer ausstehenden Einladung zur Mitarbeit an privaten oder internen Repositorys, die deiner Organisation gehören (ausgenommen Forks)

{% note %}

**Hinweise:** 
  - {% data variables.product.company_short %} zählt jedes Mitglied oder jeden externen Projektmitarbeiter nur einmal für die Abrechnung, auch wenn das Benutzerkonto Mitglied in mehreren Organisationen eines Unternehmens ist oder Zugriff auf mehrere Repositorys im Besitz deiner Organisation hat.
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

Für die folgenden Konten fallen in {% data variables.product.company_short %} keine Kosten an:

- {% data variables.enterprise.prodname_managed_users_caps %}, die gesperrt wurden
- Unternehmensbesitzer, die nicht Mitglied oder Besitzer mindestens einer Organisation im Unternehmen sind
- Unternehmensabrechnungsmanager
- Abrechnungsmanager für einzelne Organisationen
- Alle Personen mit einer ausstehenden Einladung, Abrechnungsmanager zu werden
- Alle Personen mit einer ausstehenden Einladung zur Mitarbeit an einem öffentlichen Repository, das deiner Organisation gehört

### Konten, die eine Lizenz für {% data variables.product.prodname_ghe_server %} nutzen

Für jedes Benutzerkonto in {% data variables.product.prodname_ghe_server %} wird ein Arbeitsplatz benötigt.

Gesperrte Benutzer werden beim Berechnen der Anzahl der lizenzierten Benutzer, die Arbeitsplätze beanspruchen, nicht mitgezählt. Weitere Informationen findest du unter [Sperren und Entsperren von Benutzern]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %} in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% else %}.{% endif %}

Ruhende Benutzer belegen eine Arbeitsplatzlizenz. Du kannst also ruhende Benutzer sperren, um Benutzerlizenzen freizugeben. Weitere Informationen findest du unter [Verwalten ruhender Benutzer]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %} in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% else %}.{% endif %}

{% endif %}

## Informationen zu Änderungen an deinem Abonnement

{% ifversion fpt %}

Du kannst dein {% data variables.product.prodname_dotcom %}-Abonnement jederzeit ändern.

### Informationen zu Änderungen für Organisationen an Plänen pro Benutzer

{% endif %}

Du kannst jederzeit weitere lizenzierte Arbeitsplätze deiner {% ifversion fpt or ghec %} Organisation{% endif %}{% ifversion ghec %} oder{% endif %}{% ifversion ghec or ghes %} deinem Unternehmen hinzufügen{% endif %}. Wenn du für mehr Arbeitsplätze bezahlst als derzeit genutzt werden, kannst du auch die Anzahl der Arbeitsplätze verringern.{% ifversion fpt %} Weitere Informationen findest du unter [Durchführen eines Upgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) und unter [Durchführen eines Downgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription).

Bei Fragen zum Abonnement wende dich an den {% data variables.contact.contact_support %}.

Um die Möglichkeiten zur Zusammenarbeit in deinem Team weiter zu unterstützen, kannst du ein Upgrade auf {% data variables.product.prodname_ghe_cloud %} durchführen, um in den Genuss von Features wie SAML-gestütztes einmaliges Anmelden und erweiterte Überwachung für private Repositorys zu kommen. {% data reusables.enterprise.link-to-ghec-trial %}

Weitere Informationen zur benutzerabhängigen Preisgestaltung für {% data variables.product.prodname_ghe_cloud %} findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Wenn du ein Unternehmenskonto für {% data variables.product.prodname_dotcom_the_website %} verwenden und Fragen zu Änderungen an deinem Abonnement hast, wende dich an {% data variables.contact.contact_enterprise_sales %}.

{% endif %} {% ifversion ghec %}

Wenn du eine einzelne Organisation für {% data variables.product.prodname_ghe_cloud %} verwendest, kannst du für dein Abonnement ein Upgrade oder ein Downgrade durchführen. Weitere Informationen findest du unter [Durchführen eines Upgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) oder unter [Durchführen eines Downgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription). Bei Fragen zum Abonnement wende dich an den {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Informationen zu Änderungen für Organisationen an Plänen pro Repository

In den Abrechnungseinstellungen deiner Organisation kannst du zwischen den kostenpflichtigen Plänen wechseln. Wenn du ein Upgrade auf einen Plan mit weiteren privaten Repositorys durchführst, verschiebt {% data variables.product.company_short %} dein Konto sofort in deinen neuen Plan und stellt dir die Preisdifferenz anteilig für die Anzahl der übrigen Tage im Abrechnungszeitraum in Rechnung.

Wenn du zu einem kostenpflichtigen Plan mit weniger privaten Repositorys wechselst, tritt dein neuer Plan zum nächsten Abrechnungsdatum in Kraft. Wenn du mehr private Repositorys hast, als dein neuer Plan vorsieht, werden deine privaten Repositorys gesperrt, sobald dein neuer Plan in Kraft tritt. Um die Anzahl der privaten Repositorys zu reduzieren, kannst du einige deiner privaten Repositorys öffentlich machen. Alternativ kannst du deine privaten Repositorys lokal klonen und die Kopien auf {% data variables.product.prodname_dotcom %} löschen.

{% endif %}

## Weiterführende Themen

{%- ifversion not fpt %}
- [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts)
- [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) {%- endif %}
- [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- [Hinzufügen externer Projektmitarbeiter zu Repositorys in deiner Organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)
