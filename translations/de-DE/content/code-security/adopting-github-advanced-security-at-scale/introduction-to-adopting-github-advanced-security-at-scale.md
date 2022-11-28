---
title: Informationen zur Einführung von GitHub Advanced Security nach Maß
intro: 'Du kannst {% data variables.product.prodname_GH_advanced_security %} gemäß bewährter Branchen- und GitHub-Methoden nach Maß in deinem Unternehmen einführen.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109718'
---
## Informationen zu diesen Artikeln

{% data variables.product.prodname_GH_advanced_security %} (GHAS) hilft Teams, mithilfe von integrierten Tools wie Geheimnis- und Codeüberprüfung und CodeQL schneller sicheren Code zu erstellen. Informationen zu den Sicherheitsfeatures, die über {% data variables.product.prodname_GH_advanced_security %} verfügbar sind, findest du unter [Informationen zu erweiterten GitHub-Sicherheitsfeatures](/get-started/learning-about-github/about-github-advanced-security).

Bei GHAS handelt es sich um eine Sammlung von Tools, die eine aktive Beteiligung von Entwickler*innen im gesamten Unternehmen erfordert. Wenn du optimal von deiner Investition profitieren möchtest, musst du dich darüber informieren, wie du GHAS verwendest, anwendest und verwaltest.


Wir haben ausgehend von bewährten Branchenmethoden und bewährten GitHub-Methoden eine Vorgehensweise für GHAS-Rollouts in mehreren Phasen entwickelt. Wir gehen davon aus, dass die meisten Kunden diese Phasen befolgen möchten, und zwar auf der Grundlage unserer Erfahrungen bei der erfolgreichen Bereitstellung von {% data variables.product.prodname_GH_advanced_security %}, aber möglicherweise musst du diesen Ansatz an die Bedürfnisse deines Unternehmens anpassen. 

Die Aktivierung von GHAS in einer großen Organisation kann in sechs Kernphasen unterteilt werden.

1. [**Deine Rolloutstrategie und -ziele abstimmen**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): Überlege dir, wie Erfolg aussehen soll, und stimme die Implementierung von GHAS in deinem Unternehmen darauf ab. Diese Phase dauert zwar nur ein paar Tage oder eine Woche, aber sie schafft eine solide Grundlage für den Rest des Rollouts.
  
2. [**Aktivierung nach Maß vorbereiten**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): Bereite Entwickler vor, sammle Daten zu deinen Repositorys, und stelle sicher, dass du für die nächste Phase bereit bist.
  
3. [**Pilotprogramme**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): Führe optional ein Pilotprogramm mit einem anfänglichen Rollout für einige relevante Projekte und Teams durch. Auf diese Weise kann sich eine erste Gruppe innerhalb deines Unternehmens mit GHAS vertraut machen, ehe der Rollout für den Rest deines Unternehmens erfolgt. 
  
4. [**Interne Dokumentation erstellen**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): Erstelle und kommuniziere die interne Dokumentationen für die GHAS-Benutzer. Ohne eine angemessene Dokumentation für Entwickler, Sicherheitsverantwortliche und andere GHAS-Benutzer wird der Mehrwert des Rollouts verloren gehen.
  
5. [**Rollout und Skalierung von {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): Nutze die verfügbaren APIs zum automatischen Rollout von {% data variables.product.prodname_code_scanning %} nach Team und Sprache in deinem Unternehmen, und verwende dabei die zuvor gesammelten Repositorydaten.
  
6. [**Rollout und Skalierung von {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): Führe ein Rollout von {% data variables.product.prodname_secret_scanning %} durch, das weniger Konfiguration erfordert und daher einfacher einzuführen ist als {% data variables.product.prodname_code_scanning %}. Trotzdem ist es wichtig, eine Strategie für den Umgang mit neuen und alten Ergebnissen zu haben.

## {% data variables.contact.github_support %} und {% data variables.product.prodname_professional_services_team %}

Wenn du während deiner Implementierung auf Probleme stößt oder Fragen hast, kannst du in unserer Dokumentation nach Lösungen suchen oder dich an {% data variables.contact.github_support %} wenden. Weitere Informationen findest du unter [Informationen zum GitHub-Support](/support/learning-about-github-support/about-github-support).

Wenn du eine Anleitung während des gesamten Rolloutprozesses bevorzugst, können {% data variables.product.prodname_professional_services %} dich beim erfolgreichen Rollout und der Implementierung von {% data variables.product.prodname_GH_advanced_security %} unterstützen. Wir bieten eine Vielzahl von Möglichkeiten zur Anleitung und Unterstützung. Außerdem bieten wir Schulungen und Bootcamps an, damit du {% data variables.product.prodname_GH_advanced_security %} in deinem Unternehmen optimal nutzen kannst.

Wende dich an den zuständigen Vertriebsmitarbeiter, um weitere Informationen zu allen verfügbaren Professional Services-Optionen zu erhalten. Für weitere Informationen kontaktiere das {% data variables.contact.contact_enterprise_sales %}.

{% note %}

Den ersten Artikel dieser Reihe findest du unter [Phase 1: Abstimmen deiner Rolloutstrategie und -ziele](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals).

{% endnote %}
