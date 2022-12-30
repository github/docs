---
title: Рекомендуемое оборудование для запуска CodeQL
shortTitle: Hardware resources for CodeQL
intro: 'Рекомендуемые спецификации (ОЗУ, количество ядер ЦП и дисковое пространство) для выполнения анализа {% data variables.product.prodname_codeql %} на локальных компьютерах с учетом размера базы кода.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117715'
---
{% data variables.product.prodname_codeql %} можно настроить в {% data variables.product.prodname_actions %} или во внешней системе CI. {% data variables.product.prodname_codeql %} полностью совместим со средствами выполнения на базе {% data variables.product.prodname_dotcom %} в {% data variables.product.prodname_actions %}.

Если вы используете внешнюю систему CI или локальные средства выполнения в {% data variables.product.prodname_actions %} для частных репозиториев, вы сами должны настроить свои оборудование. Оптимальная конфигурация оборудования для запуска {% data variables.product.prodname_codeql %} зависит от размера и сложности базы кода, используемых языков программирования и систем сборки и настройки рабочего процесса CI.

В приведенной ниже таблице представлены рекомендуемые спецификации оборудования для выполнения анализа {% data variables.product.prodname_codeql %} в соответствии с размером вашей базы кода. Используйте их в качестве отправной точки при выборе оборудования или виртуальной машины. Компьютер с более существенным объемом ресурсами может справляться с анализом быстрее, но при этом обходится дороже.

| Размер базы кода | ОЗУ | ЦП |
|--------|--------|--------|
| Малый (< 100 тыс. строк кода) | 8 ГБ или более | 2 ядра |
| Средний (от 100 тыс. до 1 млн строк кода) | 16 ГБ или более | 4 или 8 ядер |
| Большой (> 1 млн строк кода) | 64 ГБ или более | 8 ядер |

Независимо от размера базы кода рекомендуется использовать SSD с дисковым пространством 14 ГБ или более. На диске должно быть достаточно места для получения и сборки кода плюс дополнительное пространство для данных, создаваемых {% data variables.product.prodname_codeql %}.
