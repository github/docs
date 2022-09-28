---
title: Interações de repositório
shortTitle: Repository
intro: 'A API de interações do repositório permite que pessoas com acesso de proprietário ou administrador restrinjam temporariamente qual tipo de usuário pode comentar, abrir problemas ou criar solicitações de pull em um repositório público.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064663'
---
## Sobre a API de interações de repositório

A API de interações do repositório permite que pessoas com acesso de proprietário ou administrador restrinjam temporariamente qual tipo de usuário pode comentar, abrir problemas ou criar solicitações de pull em um repositório público. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

Se um limite de interação for habilitado para o usuário ou organização proprietária do repositório, o limite não poderá ser alterado para o repositório individual. Em vez disso, use os pontos de extremidade de interações de [Usuário](#user) ou [Organização](#organization) para alterar o limite de interação.
