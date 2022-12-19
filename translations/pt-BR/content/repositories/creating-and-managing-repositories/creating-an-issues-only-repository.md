---
title: Criar um repositório somente com problemas
intro: 'O {% data variables.product.product_name %} não fornece permissões de acesso somente a problemas, mas você pode fazer isso usando um segundo repositório que contenha apenas os problemas.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127093'
---
1. Crie um repositório **privado** para hospedar o código-fonte do projeto.
2. Crie um segundo repositório com as permissões que deseja para hospedar o rastreador de problema.
3. Adicione um arquivo README ao repositório de problemas explicando a finalidade desse repositório e vinculando-o à seção de problemas.
4. Defina colaboradores ou equipes para fornecer acesso aos repositórios conforme desejado.

Os usuários com acesso de gravação a ambos podem fazer referência e fechar problemas nos repositórios, mas aqueles sem as permissões necessárias verão referências que contêm informações mínimas.

Por exemplo, se você efetuar push de um commit para o branch padrão do repositório privado com a mensagem `Fixes organization/public-repo#12`, o problema será fechado, mas apenas os usuários com as permissões adequadas verão a referência entre repositórios indicando o commit que fechou o problema. Sem as permissões, uma referência continua aparecendo, mas os detalhes são omitidos.
