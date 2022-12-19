---
title: Migrações de usuário
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097109'
---
## Sobre a API de Migrações de Usuários

A API de Migrações de Usuário só está disponível para proprietários de contas autenticadas. Para obter mais informações, confira "[Outros métodos de autenticação](/rest/overview/other-authentication-methods)".

{% data variables.migrations.user_migrations_intro %} Para ver uma lista de dados de migração que você pode baixar, confira "[Baixar um arquivo de migração de usuário](#download-a-user-migration-archive)".

Para fazer o download de um arquivo, você deverá iniciar uma migração de usuário primeiro. Depois que o status da migração for `exported`, você poderá baixar a migração.

Ao criar um arquivo de migração, ele ficará disponível para download por sete dias. No entanto, você pode excluir o arquivo de migração do usuário mais cedo, se desejar. Desbloqueie o repositório quando a migração for `exported` para começar a usar seu repositório novamente ou excluir o repositório se não precisar mais dos dados de origem.
