---
title: OpenAPI-Beschreibung
intro: "Eine vollständige Erläuterung der {% data variables.product.product_name %}-REST-API findest du in einem OpenAPI\_3.0-konformen Dokument."
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 84c81c856da1da67320463fba4b9b52bca88c844
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109152'
---
## Über OpenAPI-Beschreibungen

Bei [OpenAPI](https://swagger.io/docs/specification/about/) handelt es sich um eine Spezifikation zum Beschreiben von REST-APIs. OpenAPI-Beschreibungen ermöglichen es Menschen und Computern, die Funktionen einer API zu ermitteln, ohne zuerst Dokumentation lesen oder die Implementierung verstehen zu müssen. {% data variables.product.company_short %} hat seine REST-API als OpenAPI 3.0-kompatibles Dokument öffentlich verfügbar gemacht.

## Abrufen der {% data variables.product.company_short %} OpenAPI-Beschreibung

Du findest die Beschreibung im Open Source-Repository [REST-API OpenAPI Description](https://github.com/github/rest-api-description) (REST-API OpenAPI-Beschreibung).

Wir stellen die Beschreibung in zwei Formaten bereit. Die gebündelte Version funktioniert in den meisten Fällen, da sie OpenAPI-Komponenten zur Wiederverwendung und Lesbarkeit enthält. Wenn deine Tools keine Inlineverweise auf Komponenten unterstützen, stellen wir auch eine vollständig dereferenzierte Version bereit.

## Verwenden der {% data variables.product.company_short %} OpenAPI-Beschreibung

Es gibt viele Verwendungsmöglichkeiten für eine OpenAPI-Beschreibung. Beispielsweise ist Folgendes möglich:

* Generiere deinen eigenen API-Client.
* Überprüfen und Testen einer {% data variables.product.company_short %} REST-API-Integration.
* Erkunde und interagiere mit der {% data variables.product.product_name %} REST-API mithilfe von Tools von Drittanbietern, z. B. Insomnia oder Postman.

{% data variables.product.company_short %} verwendet beispielsweise die REST OpenAPI-Beschreibung, um die {% data variables.product.product_name %} [REST-API-Referenzdokumentation](/rest) zu generieren.
