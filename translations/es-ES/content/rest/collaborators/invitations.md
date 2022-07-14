---
title: Repository invitations
allowTitleToDifferFromFilename: true
shortTitle: Invitaciones
intro: La API de invitaciones al repositorio te permite ver y administrar las invitaciones para colaborar en un repositorio.
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

La API de invitaciones al repositorio te permite ver y administrar las invitaciones para colaborar en un repositorio. Los usuarios invitados (o los servicios externos en nombre de estos) pueden elegir aceptar o rechazar la invitación.

To add a user as a collaborator, use the Collaborators API instead. Para obtener más información, consulta la sección "[Agregar un colaborador del repositorio](/rest/collaborators/collaborators#add-a-repository-collaborator)".

Toma en cuenta que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` otorga un acceso dirigido a las invitaciones **sin** otorgar también el acceso al código del repositorio, mientras que el alcance `repo` otorga permisos para el código así como para las invitaciones.
