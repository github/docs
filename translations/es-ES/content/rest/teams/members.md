---
title: Miembros del equipo
allowTitleToDifferFromFilename: true
shortTitle: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9f2e4a1bee298bddf1d1712c78b2bac41f15c27e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879394'
---
## Acerca de la API de miembros del equipo

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Nota:** Al configurar la sincronización de equipos para un equipo con el proveedor de identidades (IdP) de la organización, verá un error si intenta utilizar la API para realizar cambios en la pertenencia del equipo. Si tienes acceso para administrar las membrecías de usuario en tu IdP, puedes administrar la membrecía del equipo de GitHub a través de tu proveedor de identidad, lo cual agrega y elimina automáticamente a los miembros en una organización. Para más información, vea "[Sincronización de equipos entre el proveedor de identidades y GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% endnote %}

{% endif %}
