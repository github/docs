---
title: Festlegen einer Richtlinie für persönliche Zugriffstoken für deine Organisation
intro: 'Organisationsbesitzer können steuern, ob {% data variables.product.pat_v2 %} und {% data variables.product.pat_v1_plural %} zulässig sein sollen, und ob eine Genehmigung für {% data variables.product.pat_v2 %} erforderlich sein soll.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106469'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Einschränken des Zugriffs über {% data variables.product.pat_v2 %}

Organisationsbesitzer können den Zugriff über {% data variables.product.pat_v2 %} auf Ressourcen verhindern, die der Organisation gehören. {% data variables.product.pat_v2_caps %} ermöglichen weiterhin das Lesen öffentlicher Ressourcen innerhalb der Organisation. Diese Einstellung steuert nur den Zugriff über {% data variables.product.pat_v2 %}, nicht über {% data variables.product.pat_v1_plural %}. Weitere Informationen zur Einschränkung des Zugriffs über {% data variables.product.pat_v1_plural %} findest du auf dieser Seite unter [Einschränken des Zugriffs über {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic).

{% ifversion ghec or ghes or ghae %} Befindet sich die Organisation im Besitz eines Unternehmens und wurde der Zugriff über {% data variables.product.pat_v2 %} durch den Unternehmensbesitzer eingeschränkt, kann die Richtlinie in der Organisation nicht außer Kraft gesetzt werden. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.pat_generic %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Einstellungen**.
1. Wähle unter **{% data variables.product.pat_v2_caps %}** die gewünschte Option aus:
   - **Zugriff über {% data variables.product.pat_v2 %} zulassen**: {% data variables.product.pat_v2_caps %} können auf Ressourcen im Besitz der Organisation zugreifen.
   - **Zugriff über {% data variables.product.pat_v2 %} einschränken**: {% data variables.product.pat_v2_caps %} können nicht auf Ressourcen im Besitz der Organisation zugreifen. Durch {% data variables.product.pat_v2 %} erstellte SSH-Schlüssel funktionieren weiterhin.
1. Klicken Sie auf **Speichern**.

## Erzwingen einer Richtlinie zur Genehmigung von {% data variables.product.pat_v2 %}

Organisationsbesitzer können eine Genehmigung für {% data variables.product.pat_v2 %} anfordern, die auf die Organisation zugreifen können. {% data variables.product.pat_v2_caps %} ermöglichen weiterhin das Lesen öffentlicher Ressourcen innerhalb der Organisation ohne Genehmigung. Von Organisationsbesitzern erstellte {% data variables.product.pat_v2_caps %} benötigen keine Genehmigung.

{% ifversion ghec or ghes or ghae %} Befindet sich die Organisation im Besitz eines Unternehmens und wurde eine Richtlinie zur Genehmigung von {% data variables.product.pat_v2 %} durch den Unternehmensbesitzer festgelegt, kann die Richtlinie in der Organisation nicht außer Kraft gesetzt werden. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.pat_generic %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).{% endif %}

{% note %}

**Hinweis**: Nur {% data variables.product.pat_v2 %} erfordern eine Genehmigung. Dies gilt nicht für {% data variables.product.pat_v1_plural %}. Sofern die Organisation den Zugriff über {% data variables.product.pat_v1_plural %} nicht eingeschränkt hat, können {% data variables.product.pat_v1 %} ohne vorherige Genehmigung auf Organisationsressourcen zugreifen. Weitere Informationen findest du auf dieser Seite unter [Einschränken des Zugriffs über {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic).

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Einstellungen**.
1. Wähle unter **Genehmigung für {% data variables.product.pat_v2 %} anfordern** die gewünschte Option aus:
   - **Genehmigung durch Administrator erforderlich**: Ein Organisationsbesitzer muss alle {% data variables.product.pat_v2 %} genehmigen, die auf die Organisation zugreifen können. Von Organisationsbesitzern erstellte {% data variables.product.pat_v2_caps %} benötigen keine Genehmigung.
   - **Genehmigung durch Administrator nicht erforderlich**: Von Organisationsmitgliedern erstellte {% data variables.product.pat_v2_caps %} können ohne vorherige Genehmigung auf Ressourcen in der Organisation zugreifen.
1. Klicken Sie auf **Speichern**.

## Einschränken des Zugriffs über {% data variables.product.pat_v1_plural %}

Organisationsbesitzer können den Zugriff über {% data variables.product.pat_v1_plural %} auf Ressourcen verhindern, die der Organisation gehören. {% data variables.product.pat_v1_caps_plural %} ermöglichen weiterhin das Lesen öffentlicher Ressourcen innerhalb der Organisation. Diese Einstellung steuert nur den Zugriff über {% data variables.product.pat_v1_plural %}, nicht über {% data variables.product.pat_v2 %}. Weitere Informationen zur Einschränkung des Zugriffs über {% data variables.product.pat_v2 %} findest du auf dieser Seite unter [Einschränken des Zugriffs über {% data variables.product.pat_v2 %}](#restricting-access-by-fine-grained-personal-access-tokens).

{% ifversion ghec or ghes or ghae %} Befindet sich die Organisation im Besitz eines Unternehmens und wurde der Zugriff über {% data variables.product.pat_v1_plural %} durch den Unternehmensbesitzer eingeschränkt, kann die Richtlinie in der Organisation nicht außer Kraft gesetzt werden. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.pat_generic %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise).{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Einstellungen**.
1. Wähle unter **{% data variables.product.pat_v1_caps %}** die gewünschte Option aus:
   - **Zugriff über {% data variables.product.pat_v1_plural %} zulassen**: {% data variables.product.pat_v1_caps_plural %} können auf Ressourcen im Besitz der Organisation zugreifen.
   - **Zugriff über {% data variables.product.pat_v1_plural %} einschränken**: {% data variables.product.pat_v1_caps_plural %} können nicht auf Ressourcen im Besitz der Organisation zugreifen. Durch {% data variables.product.pat_v1_plural %} erstellte SSH-Schlüssel funktionieren weiterhin.
1. Klicken Sie auf **Speichern**.
