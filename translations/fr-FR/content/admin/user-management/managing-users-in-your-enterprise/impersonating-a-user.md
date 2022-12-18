---
title: Emprunt d’identité d’un utilisateur
intro: 'Vous pouvez emprunter l’identité des utilisateurs et effectuer des actions en leur nom à des fins de résolution de problèmes, de déblocage et d’autres raisons légitimes.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: df0513c3ca2931378e656f228939540dd5ea5816
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108555'
---
## À propos de l’emprunt d’identité d’un utilisateur

Si vous devez prendre temporairement le contrôle d’un compte d’utilisateur, par exemple pour résoudre un problème d’un utilisateur ou quand l’utilisateur n’est pas disponible et qu’une action urgente est nécessaire, vous pouvez démarrer une session d’emprunt d’identité pour agir en son nom.

Pour chaque session d’emprunt d’identité, vous devez fournir un motif pour l’emprunt d’identité. Une session est limitée à une heure et vous aurez le même accès que l’utilisateur dont vous empruntez l’identité.

Les actions que vous effectuez pendant une session d’emprunt d’identité sont enregistrées comme événements dans le journal d’audit de l’entreprise et dans le journal de sécurité de l’utilisateur dont vous empruntez l’identité. La personne dont vous empruntez l’identité reçoit une notification par e-mail au démarrage de la session d’emprunt d’identité. Pour plus d’informations, consultez « [Événements du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) » et « [Examen de votre journal de sécurité](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log) ».

## Emprunt d’identité d’un utilisateur

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. En haut à gauche de la page, cliquez sur **Informations utilisateur**.

   ![Informations utilisateur](/assets/images/enterprise/stafftools/user-info.png)
5. Sous « Zone de danger », cliquez sur **Se connecter à GitHub en tant que @username**

   ![Emprunter l'identité d'un utilisateur](/assets/images/enterprise/stafftools/impersonate.png)
6. Sélectionnez un motif dans la liste déroulante. Si vous sélectionnez **Autre**, vous devez fournir un contexte supplémentaire dans la section **Notes**. Cliquez sur **Commencer l’emprunt d’identité** pour commencer la session.

   ![Motif de l’emprunt d’identité](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. Quand vous êtes prêt à mettre fin à la session d’emprunt d’identité, cliquez sur la bannière **Retrouver mon identité habituelle** en haut de la page.

   ![Fin de l’emprunt d’identité](/assets/images/enterprise/stafftools/end-impersonation.png)
