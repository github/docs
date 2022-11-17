---
title: Blocage d’utilisateurs
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065785'
---
Le jeton utilisé pour authentifier l’appel doit avoir l’étendue `admin:org` pour effectuer des appels bloquants pour une organisation. Sinon, la réponse retourne `HTTP 404`.
