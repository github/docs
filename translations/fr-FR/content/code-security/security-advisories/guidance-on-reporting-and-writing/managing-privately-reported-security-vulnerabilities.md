---
title: Gestion des vulnérabilités de sécurité signalées en privé
intro: Les chargés de maintenance de dépôt peuvent gérer les vulnérabilités de sécurité qui leur ont été signalées en privé par des chercheurs en sécurité pour les dépôts où la création de rapports de vulnérabilités privés est activée.
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159787'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## À propos du signalement privé d’une vulnérabilité de sécurité

Les rapports de vulnérabilités privés permettent aux chercheurs en sécurité de vous signaler les vulnérabilités directement au moyen d’un simple formulaire. 

Quand un chercheur en sécurité signale une vulnérabilité en privé, vous en êtes averti et vous pouvez choisir d’accepter le rapport, de poser d’autres questions ou de le rejeter. Si vous acceptez le rapport, vous êtes prêt à collaborer sur un correctif de la vulnérabilité en privé avec le chercheur en sécurité.

## Gestion des vulnérabilités de sécurité signalées en privé

{% data variables.product.prodname_dotcom %} avertit les chargés de maintenance de dépôt quand les chercheurs en sécurité signalent en privé des vulnérabilités dans leur dépôt, et envoie des notifications si les chargés de maintenance surveillent le dépôt ou s’ils ont des notifications activées pour le dépôt. Pour plus d’informations, consultez « [Configuration des notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. Cliquez sur l’avis que vous souhaitez consulter. Un avis qui est signalé en privé a l’état `Needs triage`.
  
   ![Capture d’écran montrant un exemple de liste d’avis](/assets/images/help/security/advisory-list.png)
   
2. Examinez attentivement le rapport. Vous pouvez :
   - Collaborez avec le chercheur en sécurité sur un correctif en privé, en cliquant sur **Démarrer une duplication (fork) privée temporaire**. Cette action vous octroie un espace pour d’autres discussions avec le contributeur sans changer le statut de l’avis proposé (`Needs triage`).
   - Acceptez le rapport de vulnérabilité en tant que brouillon d’avis sur {% data variables.product.prodname_dotcom %}, en cliquant sur **Accepter et ouvrir en tant que brouillon**. Si vous choisissez cette option :
      - Cela ne rend pas le rapport public.
      - Le rapport devient un brouillon d’avis de sécurité de dépôt et vous pouvez travailler dessus de la même façon que sur tout brouillon d’avis que vous créez.
     Pour plus d’informations sur les avis de sécurité, consultez « [À propos des avis de sécurité des dépôts](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories) ».
   - Rejetez le rapport en cliquant sur **Fermer l’avis de sécurité**. Si possible, avant de fermer l’avis, vous devez ajouter un commentaire expliquant pourquoi vous ne considérez pas le rapport comme un risque pour la sécurité.

     ![Capture d’écran montrant les options disponibles pour le chargé de maintenance de dépôt lors de l’examen d’un rapport de vulnérabilité soumis en externe](/assets/images/help/security/advisory-maintainer-options.png)
