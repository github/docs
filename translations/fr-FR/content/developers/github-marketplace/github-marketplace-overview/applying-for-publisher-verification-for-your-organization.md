---
title: Demande de vérification d’éditeur pour votre organisation
intro: 'Pour proposer des plans payants pour votre application ou pour inclure un badge de place de marché dans le référencement de votre application, vous devez effectuer le processus de vérification de l’éditeur pour votre organisation.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086374'
---
Une vérification d’éditeur garantit que {% data variables.product.prodname_dotcom %} a un moyen de vous contacter, que vous avez activé une authentification à deux facteurs pour votre organisation, et que le domaine de votre organisation a été vérifié.

Une fois que votre organisation a été vérifiée, vous pouvez publier des plans payants pour votre application. Pour plus d’informations, consultez « [Définition des plans tarifaires pour votre référencement](/developers/github-marketplace/setting-pricing-plans-for-your-listing) ».

Pour proposer des plans payants pour votre application, l’application doit appartenir à une organisation et vous devez disposer d’autorisations de propriétaire dans celle-ci. Si votre application appartient actuellement à un compte personnel, vous devez transférer la propriété de l’application à une organisation. Pour plus d’informations, consultez « [Transfert de la propriété d’une application GitHub](/developers/apps/transferring-ownership-of-a-github-app) » ou « [Transfert de la propriété d’une application OAuth](/developers/apps/transferring-ownership-of-an-oauth-app) ».

## Demande de vérification d’éditeur


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, cliquez sur **Paramètres de développeur**.
  ![Option Paramètres de développeur dans la barre latérale des paramètres de l’organisation](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. Sous « Paramètres de développeur », cliquez sur **Vérification de l’éditeur**.
  ![Option Vérification de l’éditeur dans la barre latérale des paramètres de l’organisation](/assets/images/marketplace/publisher-verification-settings-option.png)
1. Sous « Vérification de l’éditeur », complétez les informations de la liste de contrôle :
   - Assurez-vous que vos informations de profil de base sont présentes et précises. Vérifiez également que vous avez inclus la meilleure adresse e-mail pour le support et les mises à jour à partir de {% data variables.product.company_short %}.
   - Vérifiez qu’une authentification à deux facteurs est activée pour votre organisation. Pour plus d’informations, consultez « [Exiger l’authentification à 2 facteurs dans votre organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization) ».
   - Soumettez un domaine vérifié et vérifiez qu’un badge « Vérifié » figure sur la page de profil de votre organisation. Pour des informations connexes, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».

  ![Liste de contrôle pour la vérification de l’éditeur](/assets/images/marketplace/publisher-verification-checklist.png)

2. Cliquez sur **Demander une vérification**. {% data variables.product.company_short %} examinera vos détails et vous informera une fois la vérification de l’éditeur terminée.

## Pour aller plus loin

Pour plus d’informations sur le processus de publication d’applications, consultez « [À propos de la Place de marché GitHub](/developers/github-marketplace/about-github-marketplace) ».
