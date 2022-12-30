---
title: Interações do usuário
shortTitle: User
allowTitleToDifferFromFilename: true
intro: 'A API de Interações do usuário permite restringir temporariamente o tipo de usuário que pode comentar, abrir problemas ou criar solicitações de pull nos seus repositórios públicos.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066895'
---
## Sobre a API de Interações do usuário

A API de Interações do usuário permite restringir temporariamente o tipo de usuário que pode comentar, abrir problemas ou criar solicitações de pull nos seus repositórios públicos. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interagir com seus repositórios.

Definir o limite de interação no nível do usuário sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes ao usuário. Para definir diferentes limites de interação em repositórios individuais pertencentes ao usuário, use os pontos de extremidade das interações do [Repositório](#repository).
