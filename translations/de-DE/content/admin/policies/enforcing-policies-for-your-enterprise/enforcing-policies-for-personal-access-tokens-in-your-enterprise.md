---
title: Erzwingen von Richtlinien für persönliche Zugriffstoken in deinem Unternehmen
intro: 'Unternehmensbesitzer können steuern, ob {% data variables.product.pat_v2 %} und {% data variables.product.pat_v1_plural %} zulässig sein sollen, und ob eine Genehmigung für {% data variables.product.pat_v2 %} erzwungen werden soll.'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107005'
---
{% note %}

**Hinweis**: {% data reusables.user-settings.pat-v2-beta %}

Während der Betaphase müssen Unternehmen {% data variables.product.pat_v2 %} abonnieren. Sollte sich dein Unternehmen noch nicht angemeldet haben, wirst du beim Ausführen der unten angegebenen Schritte zur Anmeldung und zum Festlegen von Richtlinien aufgefordert.

Auch wenn ein Unternehmen {% data variables.product.pat_v2 %} nicht abonniert hat, können sich Organisationen im Besitz des Unternehmens anmelden. Alle Benutzer, einschließlich {% data variables.product.prodname_emus %}, können {% data variables.product.pat_v2 %} mit Zugriff auf Ressourcen erstellen, die dem Benutzer/der Benutzerin gehören (z. B. mit ihrem Konto erstellte Repositorys). Dies gilt auch dann, wenn das Unternehmen {% data variables.product.pat_v2 %} nicht abonniert hat.

{% endnote %}

## Einschränken des Zugriffs über {% data variables.product.pat_v2 %}

Unternehmensbesitzer können den Zugriff über {% data variables.product.pat_v2 %} auf private und interne Ressourcen verhindern, die dem Unternehmen gehören. {% data variables.product.pat_v2_caps %} ermöglichen weiterhin den Zugriff auf öffentliche Ressourcen innerhalb der Organisationen. Diese Einstellung steuert nur den Zugriff über {% data variables.product.pat_v2 %}, nicht über {% data variables.product.pat_v1_plural %}. Weitere Informationen zur Einschränkung des Zugriffs über {% data variables.product.pat_v1_plural %} findest du auf dieser Seite unter [Einschränken des Zugriffs über {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Klicke unter {% octicon "law" aria-label="The law icon" %} **Richtlinien** auf **Organisationen**.
1. Wähle unter **Zugriff über {% data variables.product.pat_v2 %} einschränken** die gewünschte Option aus:
   - **Konfiguration von Zugriffsanforderungen durch Organisationen zulassen**: Jede Organisation im Besitz des Unternehmens kann entscheiden, ob der Zugriff über {% data variables.product.pat_v2 %} eingeschränkt werden soll.
   - **Zugriff über {% data variables.product.pat_v2 %} einschränken**: {% data variables.product.pat_v2_caps %} können nicht auf Organisationen im Besitz des Unternehmens zugreifen. Durch {% data variables.product.pat_v2 %} erstellte SSH-Schlüssel funktionieren weiterhin. Organisationen können diese Einstellung nicht außer Kraft setzen.
   - **Zugriff über {% data variables.product.pat_v2 %} zulassen**: {% data variables.product.pat_v2_caps %} können auf Organisationen im Besitz des Unternehmens zugreifen. Organisationen können diese Einstellung nicht außer Kraft setzen.
1. Klicken Sie auf **Speichern**.

## Erzwingen einer Richtlinie zur Genehmigung von {% data variables.product.pat_v2 %}

Unternehmensbesitzer können erzwingen, dass alle Organisationen im Besitz des Unternehmens {% data variables.product.pat_v2 %} mit Zugriff auf die Organisation genehmigen. {% data variables.product.pat_v2_caps %} ermöglichen weiterhin das Lesen öffentlicher Ressourcen innerhalb der Organisation ohne Genehmigung. Umgekehrt können Unternehmensbesitzer den Zugriff über {% data variables.product.pat_v2 %} auf Organisationen im Besitz des Unternehmens ohne vorherige Genehmigung zulassen. Unternehmensbesitzer können auch festlegen, dass jede Organisation innerhalb des Unternehmens eigene Genehmigungseinstellungen auswählt.

{% note %}

**Hinweis**: Nur {% data variables.product.pat_v2 %} erfordern eine Genehmigung. Dies gilt nicht für {% data variables.product.pat_v1_plural %}. Sofern die Organisation oder das Unternehmen den Zugriff über {% data variables.product.pat_v1_plural %} nicht eingeschränkt hat, können {% data variables.product.pat_v1 %} ohne vorherige Genehmigung auf Organisationsressourcen zugreifen. Weitere Informationen zur Einschränkung von {% data variables.product.pat_v1_plural %} findest du auf dieser Seite unter [Einschränken des Zugriffs über {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic) sowie unter [Festlegen einer Richtlinie für {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Klicke unter {% octicon "law" aria-label="The law icon" %} **Richtlinien** auf **Organisationen**.
1. Wähle unter **Genehmigung für {% data variables.product.pat_v2 %} anfordern** die gewünschte Option aus:
   - **Konfiguration von Genehmigungsanforderungen durch Organisationen zulassen**: Jede Organisation im Besitz des Unternehmens kann entscheiden, ob für {% data variables.product.pat_v2 %} mit Zugriff auf die Organisation eine Genehmigung angefordert werden soll.
   - **Nutzung des Genehmigungsflows durch Organisationen erzwingen**: Alle Organisationen im Besitz des Unternehmens müssen {% data variables.product.pat_v2 %} mit Zugriff auf die Organisation genehmigen. Von Organisationsbesitzern erstellte {% data variables.product.pat_v2_caps %} benötigen keine Genehmigung. Organisationen können diese Einstellung nicht außer Kraft setzen.
   - **Genehmigungsflow in allen Organisationen deaktivieren**: Von Organisationsmitgliedern erstellte {% data variables.product.pat_v2_caps %} können ohne vorherige Genehmigung auf Organisationen im Besitz des Unternehmens zugreifen. Organisationen können diese Einstellung nicht außer Kraft setzen.
1. Klicken Sie auf **Speichern**.

## Einschränken des Zugriffs über {% data variables.product.pat_v1_plural %}

Unternehmensbesitzer können den Zugriff über {% data variables.product.pat_v1_plural %} auf das Unternehmen und Organisationen im Besitz des Unternehmens verhindern. {% data variables.product.pat_v1_caps_plural %} ermöglichen weiterhin den Zugriff auf öffentliche Ressourcen innerhalb der Organisation. Diese Einstellung steuert nur den Zugriff über {% data variables.product.pat_v1_plural %}, nicht über {% data variables.product.pat_v2 %}. Weitere Informationen zur Einschränkung des Zugriffs über {% data variables.product.pat_v2 %} findest du auf dieser Seite unter [Einschränken des Zugriffs über {% data variables.product.pat_v2 %}](#restricting-access-by-fine-grained-personal-access-tokens).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Klicke unter {% octicon "law" aria-label="The law icon" %} **Richtlinien** auf **Organisationen**.
1. Wähle unter **Zugriff über {% data variables.product.pat_v1_plural %} auf deine Organisationen einschränken** die gewünschte Option aus:
   - **Konfiguration von Zugriffsanforderungen für {% data variables.product.pat_v1_plural %} durch Organisationen zulassen**: Jede Organisation im Besitz des Unternehmens kann entscheiden, ob der Zugriff über {% data variables.product.pat_v1_plural %} eingeschränkt werden soll.
   - **Zugriff über {% data variables.product.pat_v1_plural %} einschränken**: {% data variables.product.pat_v1_caps_plural %} können nicht auf das Unternehmen oder Organisationen im Besitz des Unternehmens zugreifen. Durch {% data variables.product.pat_v1_plural %} erstellte SSH-Schlüssel funktionieren weiterhin. Organisationen können diese Einstellung nicht außer Kraft setzen.
   - **Zugriff über {% data variables.product.pat_v1_plural %} zulassen**: {% data variables.product.pat_v1_caps_plural %} können auf das Unternehmen und Organisationen im Besitz des Unternehmens zugreifen. Organisationen können diese Einstellung nicht außer Kraft setzen.
1. Klicken Sie auf **Speichern**.
