---
title: Convites do repositório
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: A API de Convites do repositório permite exibir e gerenciar convites para colaborar em um repositório.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065791'
---
## Sobre a API de Convites do repositório

A API de Convites do repositório permite exibir e gerenciar convites para colaborar em um repositório. Os usuários convidados (ou serviços externos em nome dos usuários convidados) podem optar por aceitar ou recusar os convites.

Para adicionar um usuário como colaborador, use a API Colaboradores. Para obter mais informações, confira "[Adicionar um colaborador do repositório](/rest/collaborators/collaborators#add-a-repository-collaborator)".

Observe que o [escopo OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` permite acesso direcionado aos convites **sem** também permitir acesso ao código do repositório, enquanto o escopo `repo` concede permissão no código, bem como nos convites.
