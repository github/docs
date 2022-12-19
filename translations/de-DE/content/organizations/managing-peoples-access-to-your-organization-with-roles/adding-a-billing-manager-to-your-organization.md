---
title: Hinzufügen von Abrechnungsmanager zu deiner Organisation
intro: 'Ein *Abrechnungsmanager* ist ein Benutzer oder eine Benutzerin, der oder die die Abrechnungseinstellungen für deine Organisation verwaltet. Er oder sie aktualisiert beispielsweise die Zahlungsinformationen. Es ist eine hilfreiche Option, wenn normale Mitglieder deiner Organisation typischerweise keinen Zugriff auf Abrechnungsressourcen haben.'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
ms.openlocfilehash: f7b4e6d17ff0e6680fdf9509b467f314b1a9e4ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106208'
---
Mitglieder des Teams „Besitzer“ deiner Organisation können anderen Benutzern *Abrechnungsmanager*-Berechtigungen zuweisen. Wenn ein Benutzer die Einladung, Abrechnungsmanager zu werden, annimmt, kann er weitere Benutzer einladen, Abrechnungsmanager zu werden.

{% note %}

**Hinweis**: Abrechnungsmanager nutzen keine gebührenpflichtige Lizenz im Abonnement deiner Organisation.

{% endnote %}

## Berechtigungen für Abrechnungsmanager

Abrechnungsmanager können

- Das Konto herauf- oder herabstufen,
- Zahlungsmethoden hinzufügen, aktualisieren oder entfernen,
- Den Zahlungsverlauf anzeigen,
- Quittungen herunterladen,
- Abrechnungsmanager anzeigen, einladen und entfernen.
- Sponsorings starten, ändern oder abbrechen

Zusätzlich erhalten alle Abrechnungsmanager am Abrechnungsdatum der Organisation per E-Mail Abrechnungsquittungen.

Abrechnungsmanager können folgende Aufgaben **nicht** durchführen:

- Repositorys in deinen Organisationen erstellen oder auf sie zugreifen,
- Die privaten Mitglieder deiner Organisation sehen,
- In der Liste der Mitglieder der Organisation gesehen werden,
- Abonnements für {% data variables.product.prodname_marketplace %}-Apps erwerben, bearbeiten oder stornieren.

{% tip %}

**Tipp**: Wenn deine Organisation [die zweistufige Authentifizierung für Mitglieder, Abrechnungsmanager und externe Mitarbeiter vorschreibt](/articles/requiring-two-factor-authentication-in-your-organization), muss der Benutzer die zweistufige Authentifizierung aktivieren, damit er deine Einladung zur Rolle des Abrechnungsmanagers für die Organisation annehmen kann.

{% endtip %}

## Abrechnungsmanager einladen

{% ifversion ghec %} {% note %}

**Hinweis**: Wenn deine Organisation im Besitz eines Unternehmenskontos ist, kannst du Abrechnungsmanager nicht auf Organisationsebene einladen. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).

{% endnote %} {% endif %}

Der eingeladene Benutzer erhält eine Einladungs-E-Mail, in der er darum gebeten wird, Abrechnungsmanager für deine Organisation zu werden. Wenn der eingeladene Benutzer in der E-Mail auf den Link zum Annehmen der Einladung klickt, wird er automatisch als Abrechnungsmanager zur Organisation hinzugefügt. Wenn er noch kein GitHub-Konto besitzt, wird er auf eine Seite umgeleitet, auf der er ein Konto erstellen kann. Nach der Erstellung des Kontos wird er automatisch als Abrechnungsmanager zur Organisation hinzugefügt.

{% data reusables.organizations.billing-settings %}
1. Klicke unter „Abrechnungsverwaltung“ neben „Abrechnungsmanager“ auf **Hinzufügen**.
  ![Abrechnungsmanager einladen](/assets/images/help/billing/settings_billing_managers_list.png)
6. Gib den Benutzernamen oder die E-Mail-Adresse der Person ein, die du hinzufügen möchtest, und klicke auf **Einladung senden**.
  ![Seite zum Einladen eines Abrechnungsmanagers](/assets/images/help/billing/billing_manager_invite.png)

## Weitere Informationsquellen

- [Einladen von Personen zum Verwalten deines Unternehmens](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) {% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation{% endif %}
