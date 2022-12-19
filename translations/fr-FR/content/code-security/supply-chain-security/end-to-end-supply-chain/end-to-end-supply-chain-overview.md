---
title: Sécurisation de votre chaîne d’approvisionnement de bout en bout
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 'Présentation de guides de meilleures pratiques sur la sécurité complète de la chaîne logistique de bout en bout, notamment les comptes personnels, le code et les processus de build.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060681'
---
## Qu’est-ce que la chaîne d’approvisionnement de bout en bout ?

Fondamentalement, la sécurité de la chaîne d’approvisionnement logicielle de bout en bout consiste à s’assurer que le code que vous distribuez n’a pas été falsifié. Auparavant, les attaquants se concentraient sur le ciblage des dépendances utilisées, telles que les bibliothèques et les frameworks. Comme ils ont étendu leurs objectifs aux comptes d’utilisateur et aux processus de génération, ces systèmes doivent également être défendus.

Pour plus d’informations sur les fonctionnalités de {% data variables.product.prodname_dotcom %} qui peuvent vous aider à sécuriser les dépendances, consultez « [À propos de la sécurité de la chaîne d’approvisionnement](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security) ».

## À propos de ces guides

Cette série de guides explique comment réfléchir à la sécurisation de votre chaîne d’approvisionnement de bout en bout : compte personnel, code et processus de génération. Chaque guide explique le risque dans ce domaine et présente les fonctionnalités {% data variables.product.product_name %} qui peuvent vous aider à résoudre ce risque. 

Les besoins de chacun étant différents, chaque guide commence par le changement le plus important, puis aborde les améliorations supplémentaires à envisager. N’hésitez pas à porter votre attention sur les améliorations dont vous pensez pouvoir tirer le meilleur parti. L’objectif n’est pas de tout faire à la fois, mais d’améliorer en permanence la sécurité dans vos systèmes au fil du temps.

- « [Bonnes pratiques pour sécuriser les comptes](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts) »

- « [Bonnes pratiques pour sécuriser le code dans votre chaîne d’approvisionnement](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code) »

- « [Bonnes pratiques pour sécuriser votre système de génération](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds) »

## Pour aller plus loin

- [Protection de l’intégrité des artefacts dans n’importe quelle chaîne d’approvisionnement logicielle](https://slsa.dev/)
- [Modèle d’intégrité de la chaîne d’approvisionnement Microsoft](https://github.com/microsoft/scim)
- [Document sur la sécurité de la chaîne d’approvisionnement logicielle - Groupe consultatif technique de sécurité CNCF](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
