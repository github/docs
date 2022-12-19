---
title: Invitaciones a un repositorio
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: Repository invitations API permite ver y administrar invitaciones para colaborar en un repositorio.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065798'
---
## Acerca de Repository invitations API

Repository invitations API permite ver y administrar invitaciones para colaborar en un repositorio. Los usuarios invitados (o los servicios externos en nombre de estos) pueden elegir aceptar o rechazar la invitación.

Para agregar un usuario como colaborador, usa Collaborators API en su lugar. Para obtener más información, vea "[Incorporación de un colaborador de repositorio](/rest/collaborators/collaborators#add-a-repository-collaborator)".

Tenga en cuenta que el [ámbito de OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` concede acceso de destino a las invitaciones **sin** conceder también acceso al código del repositorio, mientras que el ámbito `repo` concede permiso para el código y las invitaciones.
