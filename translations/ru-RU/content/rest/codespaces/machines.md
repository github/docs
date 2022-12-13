---
title: Компьютеры codespaces
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: Используйте REST API для управления доступностью типов компьютеров для codespace.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5b53ceb3fb7cf137f61285b1f9ed0aa7838a9179
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193547'
---
## Сведения о компьютерах с {% data variables.product.prodname_codespaces %}

Вы можете определить, какие типы компьютеров доступны для создания codespace, либо в заданном репозитории, либо в качестве пользователя, прошедшего проверку подлинности. Дополнительные сведения см. в разделе [Сведения о типах компьютеров](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types).

Эти сведения также можно использовать при изменении компьютера существующего кодового пространства, обновив его свойство `machine`. Обновление компьютера будет выполнено при следующем перезапуске кодового пространства. Дополнительные сведения см. в разделе [Изменение типа компьютера для кодового пространства](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace).
