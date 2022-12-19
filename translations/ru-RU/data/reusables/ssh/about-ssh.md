---
ms.openlocfilehash: 40cfb976f7916116555f1b184beadbe25644845e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097759"
---
Доступ к данным и запись данных в репозиториях можно получить в {% ifversion fpt или ghec или ghes %}{% данных variables.location.product_location %}{% elsif ghae %}{% данных variables.product.product_name %}{% endif %} с помощью SSH (протокол Secure Shell). При подключении через SSH проверка подлинности выполняется с помощью файла закрытого ключа на локальном компьютере.
