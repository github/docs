---
title: Convites do repositório
allowTitleToDifferFromFilename: true
shortTitle: Convites
intro: A API de convites do repositório permite visualizar e gerenciar convites para colaborar em um repositório.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de convites do repositório

A API de convites do repositório permite visualizar e gerenciar convites para colaborar em um repositório. Os usuários convidados (ou serviços externos em nome dos usuários convidados) podem optar por aceitar ou recusar os convites.

Para adicionar um usuário como colaborador, use a API de Colaboradores. Para obter mais informações, consulte "[Adicionar um colaborador de repositório](/rest/collaborators/collaborators#add-a-repository-collaborator)".

Observe que o [Escopo OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` concede acesso direcionado aos convites **sem** conceder também acesso ao código do repositório. enquanto o escopo `repo` concede permissão ao código e aos convites convites.
