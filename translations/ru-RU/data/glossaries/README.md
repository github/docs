---
ms.openlocfilehash: 6d982c0371125b4bf2536b0f7840abe05281db2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069620"
---
# Глоссарии

В [глоссарий Crowdin](https://support.crowdin.com/glossary/) входят следующие файлы:

* `external.yml` содержит записи глоссария, доступные для клиентов.
  * В строках `external.yml` можно использовать условные операторы Liquid. См. [contributing/liquid-helpers.md](/contributing/liquid-helpers.md).
* `internal.yml` содержит записи, используемые только переводчиками. Эти термины отображаются в пользовательском интерфейсе Crowdin, чтобы предоставить переводчикам дополнительный контекст того, что они переводят, а также предлагаемую локализованную строку для этого термина.
* `candidates.yml` содержит термины, которые должны быть включены либо во внутренний, либо во внешний глоссарий, но еще не определены.
