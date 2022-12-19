---
ms.openlocfilehash: d8e7abc58e82244acc379f494ed50f40679117ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123728"
---
Для устройства {% data variables.product.prodname_ghe_server %} требуется диск данных хранилища класса Premium, который поддерживается на любой виртуальной машине Azure, поддерживающей хранилище класса Premium. Типы виртуальных машин Azure с суффиксом `s` поддерживают хранилище класса Premium. Дополнительные сведения см. в разделах [Типы дисков, доступные в Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd). и [Хранилище Azure класса Premium: проектирование для высокой производительности](https://docs.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance) в документации Azure.

{% data variables.product.company_short %} рекомендует оптимизированную для памяти виртуальную машину для {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Размеры виртуальных машин, оптимизированных для памяти](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-memory) документации Azure.

{% data variables.product.prodname_ghe_server %} поддерживает любой регион, поддерживающий ваш тип виртуальной машины. Дополнительные сведения о поддерживаемых регионах для каждой виртуальной машины см. в разделе [Доступные продукты по регионам](https://azure.microsoft.com/regions/services/).
