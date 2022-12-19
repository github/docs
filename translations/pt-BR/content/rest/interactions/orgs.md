---
title: Interações da organização
shortTitle: Organization
intro: 'A API de Interações da organização permite que os proprietários da organização restrinjam temporariamente quais tipos de usuário podem comentar, abrir problemas ou criar solicitações de pull nos repositórios públicos da organização.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062463'
---
## Sobre a API de Interações da organização

A API de Interações da organização permite que os proprietários da organização restrinjam temporariamente quais tipos de usuário podem comentar, abrir problemas ou criar solicitações de pull nos repositórios públicos da organização. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} na organização.
* {% data reusables.interactions.contributor-user-limit-definition %} na organização.
* {% data reusables.interactions.collaborator-user-limit-definition %} na organização.

Definir o limite de interação no nível da organização sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes à organização. Para definir diferentes limites de interação em repositórios individuais pertencentes à organização, use os pontos de extremidade das interações do [Repositório](#repository).
