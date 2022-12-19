---
title: Generieren einer Integritätsprüfung für dein Unternehmen
intro: 'Durch Generieren einer Integritätsprüfung kannst du Einblicke in die allgemeine Integrität sowie die Git- und API-Anforderungen von {% data variables.product.product_location %} erhalten.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: f02fc61f050fc01a69f9fafe2dcdc95d91322dfa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146460021'
---
{% note %}

**Hinweis:** Das Generieren einer Integritätsprüfung befindet sich derzeit in der Betaversion für {% data variables.product.prodname_ghe_server %} und kann jederzeit geändert werden.

{% endnote %}

## Informationen zu generierten Integritätsprüfungen

Du kannst ein Supportpaket für {% data variables.product.product_location %} erstellen, das viele Daten enthält, z. B. Diagnose- und Protokolldateien. Um diese Daten zu analysieren und zu interpretieren, kannst du eine Integritätsprüfung generieren. Weitere Informationen zu Supportpaketen findest du unter [Bereitstellen von Daten für {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

Eine Integritätsprüfung enthält die folgenden Informationen zu {% data variables.product.product_location %}.
- Einblicke in den allgemeinen Zustand von {% data variables.product.product_location %}, z. B. Upgrade-Status, Speicherplatz und Nutzung von lizenzierten Arbeitsplätzen
- Ein Sicherheitsabschnitt, der sich auf die Isolierung von Unterdomänen und die Benutzerauthentifizierung konzentriert
- Analyse von Git-Anforderungen mit Details zu den ausgelastetsten Repositorys und Git-Benutzern 
- Analyse von API-Anforderungen, einschließlich der am häufigsten angeforderten Endpunkte und der meisten aktiven Aufrufer

Wenn du eine Integritätsprüfung für {% data variables.product.prodname_ghe_cloud %} generieren möchtest, wende dich an den {% data variables.contact.github_support %}. Weitere Informationen findest du unter [Erstellen eines Supporttickets](/support/contacting-github-support/creating-a-support-ticket).

## Generieren einer Integritätsprüfung

Bevor du eine Integritätsprüfung generieren kannst, musst du ein Supportpaket erstellen. Weitere Informationen findest du unter [Bereitstellen von Daten für {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

1. Rufe das [{% data variables.contact.support_portal %}](https://support.github.com/) auf.
2. Klicke in der oberen rechte Ecke der Seite auf **Premium**.

   ![Screenshot des Links „Premium“ im GitHub Support-Portal-Header.](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. Klicke rechts neben den **Integritätsüberprüfungen** auf **Integritätsprüfung anfordern**.

   ![Screenshot der Schaltfläche „Integritätsprüfung anfordern“](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. Wähle unter „Unternehmenskonto auswählen“ das Dropdownmenü aus, und klicke auf ein Unternehmenskonto.

   ![Screenshot des Dropdownmenüs „Unternehmenskonto“.](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. Klicke unter „Supportpaket hochladen“ auf **Datei auswählen**, und wähle eine Datei aus, die hochgeladen werden soll. Klicke dann auf **Integritätsprüfung anfordern**.

   ![Screenshot der Schaltflächen „Datei auswählen“ und „Integritätsprüfung anfordern“.](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

Nachdem du eine Integritätsprüfung angefordert hast, wird ein Auftrag geplant, um die Integritätsprüfung zu generieren. Nach mehreren Stunden bis zu einem Tag wird die generierte Integritätsprüfung im Abschnitt „Integritätsprüfung“ des {% data variables.contact.support_portal %} angezeigt.

![Screenshot des Abschnitts „Integritätsprüfungen“ des {% data variables.contact.support_portal %}.](/assets/images/enterprise/support/support-portal-health-checks-section.png)
