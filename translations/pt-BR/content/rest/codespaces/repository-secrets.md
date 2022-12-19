---
title: Segredos do repositório de codespaces
allowTitleToDifferFromFilename: true
shortTitle: Repository secrets
intro: Use a API REST para gerenciar segredos para repositórios aos quais o usuário tem acesso em um codespace.
permissions: 'Users with write access to a repository can manage {% data variables.product.prodname_codespaces %} repository secrets.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f38e196db7ab0601a28612cf13c363f18181342a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192726'
---
## Sobre segredos do repositório do {% data variables.product.prodname_codespaces %}

Você pode criar, listar e excluir segredos (como tokens de acesso para serviços em nuvem) para repositórios aos quais o usuário tem acesso. Estes segredos são disponibilizados para o codespace em tempo de execução. Para obter mais informações, confira "[Como gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
