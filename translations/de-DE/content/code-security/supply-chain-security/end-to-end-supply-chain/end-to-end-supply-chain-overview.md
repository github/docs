---
title: Sichern einer End-to-End-Lieferkette
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 'Einführung bewährter Anleitungen zur vollständigen Lieferkettensicherheit, einschließlich persönlicher Konten, Code und Buildprozesse'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060682'
---
## Was ist die End-to-End-Lieferkette?

Im Kern geht es bei der Sicherheit der End-to-End-Software-Lieferkette, darum zu gewährleisten, dass der von Ihnen verteilte Code nicht manipuliert wurde. Zuvor konzentrierten sich Angreifer auf von Ihnen verwendete Abhängigkeiten, z. B. Bibliotheken und Frameworks. Angreifer haben nun ihren Fokus, auf Benutzerkonten und Buildprozesse erweitert, und daher müssen diese Systeme ebenfalls geschützt werden.

Informationen zu Features in {% data variables.product.prodname_dotcom %}, die dir helfen können, Abhängigkeiten zu sichern, findest du unter [Informationen zur Sicherheit der Lieferkette](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

## Informationen zu diesen Leitfäden

In dieser Reihe von Leitfäden wird erläutert, wie du deine End-to-End-Lieferkette schützt: persönliches Konto, Code und Buildprozesse. Jeder Leitfaden erläutert das Risiko für diesen Bereich und führt die {% data variables.product.product_name %}-Features ein, die Ihnen dabei helfen, dieses Risiko zu beheben. 

Da jeder Benutzer andere Bedürfnisse hat, beginnt jeder Leitfaden mit den Änderungen, die sich am stärksten auswirken, und fährt dann mit weiteren Verbesserungen fort, die du in Betracht ziehen solltest. Du kannst dich natürlich frei entscheiden und dich auf die Verbesserungen konzentrieren, von denen du glaubst, dass sie den größten Nutzen für dich bringen. Das Ziel besteht nicht darin, alles gleichzeitig umzusetzen, sondern die Sicherheit deiner Systeme im Laufe der Zeit kontinuierlich zu verbessern.

- „[Bewährte Methoden zum Schützen von Konten](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)“

- [Bewährte Methoden zum Sichern von Code in einer Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)

- [Bewährte Methoden zum Sichern deines Buildsystems](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)

## Weiterführende Themen

- [Schutz der Artefakteintegrität in jeder Software-Lieferkette](https://slsa.dev/)
- [Microsoft-Modell zur Lieferkettenintegrität](https://github.com/microsoft/scim)
- [Whitepaper zu Sicherheit der Software-Lieferkette: CNCF Security Technical Advisory Group](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
