---
title: Empfohlene Hardwareressourcen zum Ausführen von CodeQL
shortTitle: Hardware resources for CodeQL
intro: 'Empfohlene Spezifikationen (RAM, CPU-Kerne und Datenträger) für die Ausführung einer {% data variables.product.prodname_codeql %}-Analyse auf selbstgehosteten Computern, die auf der Größe deiner Codebasis basieren.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
ms.openlocfilehash: 9f180e28a3207ef64a516a1e6cd6a8bbcf17ea53
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105452'
---
Du kannst {% data variables.product.prodname_codeql %} in {% data variables.product.prodname_actions %} oder einem externen CI-System einrichten. {% data variables.product.prodname_codeql %} ist vollständig kompatibel mit {% data variables.product.prodname_dotcom %}-gehosteten Runnern auf {% data variables.product.prodname_actions %}.

Wenn du ein externes CI-System oder selbstgehostete Runner in {% data variables.product.prodname_actions %} für private Repositorys verwendest, bist du für die Konfiguration deiner eigenen Hardware verantwortlich. Die optimale Hardwarekonfiguration für die Ausführung von {% data variables.product.prodname_codeql %} kann je nach Größe und Komplexität deiner Codebasis, den verwendeten Programmiersprachen und Buildsystemen sowie deiner CI-Workfloweinrichtung variieren.

Die folgende Tabelle enthält auf der Größe deiner Codebasis basierende empfohlene Hardwarespezifikationen für die Ausführung der {% data variables.product.prodname_codeql %}-Analyse. Verwende diese als Ausgangspunkt, um deine Hardware oder virtuellen Computer auszuwählen. Ein Computer mit größeren Ressourcen kann die Analyseleistung verbessern, aber auch in der Wartung teurer sein.

| Codebasisgröße | RAM | CPU |
|--------|--------|--------|
| Klein (<100 K Codezeilen) | Mindestens 8 GB | 2 Kerne |
| Mittel (100 K bis 1 M Codezeilen) | Mindestens 16 GB | 4 oder 8 Kerne |
| Groß (>1 M Codezeilen) | Mindestens 64 GB | 8 Kerne |

Für alle Codebasisgrößen empfehlen wir die Verwendung eines SSD-Datenträgers mit mindestens 14 GB Speicherplatz. Es muss genügend Speicherplatz auf dem Datenträger vorhanden sein, um deinen Code auszuchecken und zu kompilieren, sowie zusätzlicher Speicherplatz für Daten, die von {% data variables.product.prodname_codeql %} erstellt wurden.
