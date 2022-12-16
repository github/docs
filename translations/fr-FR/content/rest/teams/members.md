---
title: Des membres d'équipe
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877122'
---
## À propos de l’API Membres de l’équipe

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Remarque :** Lorsque vous avez configuré la synchronisation d’équipe pour une équipe avec le fournisseur d’identité de votre organisation, une erreur s’affiche si vous essayez d’utiliser l’API pour apporter des modifications à l’appartenance de l’équipe. Si vous avez accès à la gestion de l’appartenance au groupe dans votre fournisseur d’identité, vous pouvez gérer l’appartenance à l’équipe GitHub via votre fournisseur d’identité, ce qui ajoute et supprime automatiquement les membres de l’équipe dans une organisation. Pour plus d’informations, consultez « [Synchronisation des équipes entre votre fournisseur d’identité et GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) ».

{% endnote %}

{% endif %}
