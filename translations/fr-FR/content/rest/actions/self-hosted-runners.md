---
title: Exécuteurs auto-hébergés
intro: 'L’API d’exécuteurs auto-hébergés vous permet d’inscrire, d’afficher et de supprimer des exécuteurs auto-hébergés.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064377'
---
## À propos de l’API d’exécuteurs auto-hébergés

L’API d’exécuteurs auto-hébergés vous permet d’inscrire, d’afficher et de supprimer des exécuteurs auto-hébergés. {% data reusables.actions.about-self-hosted-runners %} Pour plus d’informations, consultez « [Hébergement de vos propres exécuteurs](/actions/hosting-your-own-runners) ».

{% data reusables.actions.actions-authentication %} Les {% data variables.product.prodname_github_apps %} doivent avoir l’autorisation `administration` pour les référentiels et l’autorisation `organization_self_hosted_runners` pour les organisations. Les utilisateurs authentifiés doivent disposer d’un accès administrateur aux référentiels ou aux organisations, ou à l’étendue `manage_runners:enterprise` pour les entreprises pour utiliser cette API.
