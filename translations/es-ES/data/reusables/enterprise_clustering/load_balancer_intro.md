---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111834"
---
Un diseño de balanceador de carga utiliza un dispositivo de red para dirigir el tráfico de Git y HTTP a los aparatos individuales del {% data variables.product.prodname_ghe_server %}. Puedes utilizar un balanceador de carga para restringir el tráfico directo al aparato con fines de seguridad o para redirigir el tráfico, de ser necesario, sin cambios en los registros DNS. Es altamente recomendable utilizar un balanceador de carga basado en TPC que admita el protocolo PROXY.
