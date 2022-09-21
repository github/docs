---
ms.openlocfilehash: 7020f9ed86843200a1b56c9b9142ed238aaf0dd5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764167"
---
Puedes elegir un sistema operativo y una configuración de hardware en la lista de opciones disponibles. Cuando se implementan nuevas instancias de este ejecutor mediante el escalado automático, usarán el mismo sistema operativo y la misma configuración de hardware que has definido aquí.

También puedes definir las etiquetas que identifican al ejecutor, que es la forma en que los flujos de trabajo podrán enviar trabajos a los ejecutores para su procesamiento (mediante `runs-on`). Los nuevos ejecutores se asignan automáticamente al grupo predeterminado o puedes elegir qué grupo deben unirse los ejecutores durante el proceso de creación del ejecutor. Además, puedes modificar los miembros del grupo del ejecutor después de que lo hayas registrado. Para obtener más información, consulta "[Controlar el acceso a {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".