---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080483"
---
Dependency submission API te permite enviar dependencias para un proyecto. Esto te permite agregar dependencias, como las que se resuelven cuando se compila o crea software, a la característica de gráfico de dependencias de {% data variables.product.prodname_dotcom %}, lo que proporciona un panorama más completo de todos las dependencias del proyecto.

El gráfico de dependencias muestra las dependencias que envías mediante la API, además de las dependencias identificadas mediante archivos de bloqueo o de manifiesto en el repositorio (por ejemplo, un archivo `package-lock.json` en un proyecto de JavaScript). Para más información sobre la visualización del gráfico de dependencias, consulta "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)". 

Las dependencias enviadas recibirán {% data variables.product.prodname_dependabot_alerts %} y {% data variables.product.prodname_dependabot_security_updates %} para cualquier vulnerabilidad conocida. Solo obtendrás {% data variables.product.prodname_dependabot_alerts %} para las dependencias que proceden de uno de los [ecosistemas compatibles](https://github.com/github/advisory-database#supported-ecosystems) de {% data variables.product.prodname_advisory_database %}. Las dependencias enviadas no se mostrarán en la revisión de dependencias ni en la información de las dependencias de la organización.
