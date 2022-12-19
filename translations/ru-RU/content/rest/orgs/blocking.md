---
title: Блокировка пользователей
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 1649cc0627ed55be5317e0606bb29287dbd3d94a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065789'
---
Маркер, используемый для проверки подлинности вызова, должен иметь область `admin:org`, чтобы выполнять любые блокирующие вызовы в организации. Иначе возвращается ответ `HTTP 404`.
