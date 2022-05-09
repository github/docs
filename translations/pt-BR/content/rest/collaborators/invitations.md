---
title: Repository invitations
allowTitleToDifferFromFilename: true
shortTitle: Convites
intro: The Repository invitations API allows you to view and manage invitations to collaborate on a repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository invitations API

The Repository invitations API allows you to view and manage invitations to collaborate on a repository. Os usuários convidados (ou serviços externos em nome dos usuários convidados) podem optar por aceitar ou recusar os convites.

To add a user as a collaborator, use the Collaborators API instead. Para obter mais informações, consulte "[Adicionar um colaborador de repositório](/rest/collaborators/collaborators#add-a-repository-collaborator)".

Observe que o [Escopo OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` concede acesso direcionado aos convites **sem** conceder também acesso ao código do repositório. enquanto o escopo `repo` concede permissão ao código e aos convites convites.
