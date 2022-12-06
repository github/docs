---
title: Résolution des problèmes liés aux crochets de service
intro: 'Si des charges utiles ne sont pas remises, vérifiez qu’elles ne sont pas en proie à ces problèmes courants.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104734'
---
## Obtention d’informations sur les remises

Vous pouvez trouver des informations concernant la dernière réponse pour toutes les remises de crochets de service sur n’importe quel dépôt.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Accédez au dépôt investigué.
3. Cliquez sur le lien **Crochets** dans la barre latérale de navigation.
  ![Barre latérale - Crochets](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Cliquez sur le lien **Remise la plus récente** sous le crochet de service posant problème.
  ![Détails du crochet](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. Sous **Appels distants**, vous voyez les en-têtes qui ont été utilisés au moment de la requête POST vers le serveur distant avec la réponse retournée à votre installation par le serveur distant.

## Visualisation de la charge utile

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Accédez au dépôt investigué.
3. Cliquez sur le lien **Crochets** dans la barre latérale de navigation.
  ![Barre latérale - Crochets](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Cliquez sur le lien **Remise la plus récente** sous le crochet de service posant problème.
5. Cliquez sur **Remise**.
  ![Visualisation de la charge utile](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## Visualisation des remises passées

Les remises sont stockées pendant 15 jours.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Accédez au dépôt investigué.
3. Cliquez sur le lien **Crochets** dans la barre latérale de navigation.
  ![Barre latérale - Crochets](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Cliquez sur le lien **Remise la plus récente** sous le crochet de service posant problème.
5. Pour voir d’autres remises sur ce crochet spécifique, cliquez sur **Plus pour cet ID de crochet** : ![Visualisation d’autres remises](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
