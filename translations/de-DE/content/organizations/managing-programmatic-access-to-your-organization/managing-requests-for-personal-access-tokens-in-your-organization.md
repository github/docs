---
title: Verwalten von Anforderungen für persönliche Zugangstoken in deiner Organisation
intro: 'Organisationsinhaber können {% data variables.product.pat_v2 %} genehmigen oder ablehnen, mit denen Zugriff auf ihre Organisation angefordert wird.'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: ea2f01436ca4649cae5310b14070625c5947922e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107404'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Informationen zu Anforderungen für {% data variables.product.pat_v2 %}

Wenn Mitglieder einer Organisation ein {% data variables.product.pat_v2 %} erstellen, um auf Ressourcen zuzugreifen, die der Organisation gehören, muss der Organisationsbesitzer das Token genehmigen, sofern die Organisation eine Genehmigung für {% data variables.product.pat_v2 %}s verlangt, bevor das Token für den Zugriff auf nicht öffentliche Ressourcen verwendet werden kann. Weitere Informationen findest du unter [Festlegen einer Richtline für {% data variables.product.pat_generic %} für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% data variables.product.company_short %} benachrichtigt Organisationsbesitzer mit einer täglichen E-Mail über alle {% data variables.product.pat_v2 %}, für die eine Genehmigung aussteht. Wenn ein Token abgelehnt oder genehmigt wird, erhält der Benutzer, der das Token erstellt hat, eine E-Mail-Benachrichtigung.

{% note %}

**Hinweis**: Nur {% data variables.product.pat_v2 %} erfordern eine Genehmigung. Dies gilt nicht für {% data variables.product.pat_v1_plural %}. Sofern die Organisation den Zugriff über {% data variables.product.pat_v1_plural %} nicht eingeschränkt hat, kann über {% data variables.product.pat_v1 %} ohne vorherige Genehmigung auf Organisationsressourcen zugegriffen werden. Weitere Informationen findest du unter [Festlegen einer Richtline für {% data variables.product.pat_generic %} für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endnote %}

## Verwalten von Anforderungen für {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** auf **Ausstehende Token**. Wenn für deine Organisation Token zur Genehmigung ausstehen, werden sie angezeigt.
1. Klicke auf den Namen des Tokens, das du genehmigen oder ablehnen möchtest.
1. Überprüfe den Zugriff und die Berechtigungen, die das Token anfordert.
1. Um dem Token Zugriff auf die Organisation zu gewähren, klicke auf **Genehmigen**. Um dem Token den Zugriff auf die Organisation zu verweigern, klicke auf **Ablehnen**.
1. Wenn du die Anforderung abgelehnt hast, kannst du im Bestätigungsfeld optional den Grund für die Ablehnung des Tokens angeben. Dieser Grund wird in der Benachrichtigung mitgeteilt, die an den Tokenbesitzer gesendet wird. Klicke dann auf **Ablehnen**.

Alternativ kannst du auch in einem Arbeitsschritt mehrere Token genehmigen oder ablehnen:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** auf **Ausstehende Token**. Wenn für deine Organisation Token zur Genehmigung ausstehen, werden sie angezeigt.
1. Optional kannst du die Dropdownmenüs **Besitzer** und **Repository** verwenden, um die Anforderungen nach dem Mitglied zu filtern, das die Anforderung stellt.
1. Wähle jedes Token aus, das du genehmigen oder ablehnen möchtest.
1. Wähle das Dropdownmenü **Ausgewählte Anforderung...** aus, und klicke auf **Genehmigen...** oder **Ablehnen...** .
