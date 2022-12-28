---
title: Aktuelle Änderungen
intro: 'Erfahre mehr über aktuelle und bevorstehende Breaking Changes an der {% data variables.product.prodname_dotcom %}-GraphQL-API.'
redirect_from:
  - /v4/breaking_changes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: c76520b1f9dc806659373771b42501e072319937
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109497'
---
## Informationen zu Breaking Changes

Breaking Changes sind Änderungen, für die unsere Integratoren möglicherweise Maßnahmen ergreifen müssen. Diese Änderungen werden in zwei Kategorien unterteilt:

- **Breaking Change:** Änderungen, die dazu führen, dass bereits vorhandene Abfragen für die GraphQL-API nicht mehr funktionieren. Ein Beispiel wäre etwa das Entfernen eines Felds.
- **Gefährliche Änderung:** Änderungen, die nicht dazu führen, dass bereits vorhandene Abfragen nicht mehr funktionieren, aber das Laufzeitverhalten von Clients beeinflussen können. Ein Beispiel wäre etwa das Hinzufügen eines Enumerationswerts.

Wir sind bestrebt, stabile APIs für unsere Integratoren bereitzustellen. Wenn ein neues Feature noch weiterentwickelt wird, wird es im Rahmen einer [Schemavorschau](/graphql/overview/schema-previews) veröffentlicht.

Bevorstehende Breaking Changes werden von uns mindestens drei Monate vor der Implementierung der Änderung am GraphQL-Schema angekündigt, damit Integratoren genügend Zeit haben, die erforderlichen Anpassungen vorzunehmen. Änderungen werden am ersten Tag eines Quartals wirksam (also am 1. Januar, 1. April, 1. Juli oder 1. Oktober). Eine am 15. Januar angekündigte Änderung wird also beispielsweise am 1. Juli vorgenommen.
