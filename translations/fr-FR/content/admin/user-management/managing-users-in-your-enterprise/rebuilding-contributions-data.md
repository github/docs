---
title: Regénération de données de contributions
intro: Vous pouvez être amené à recréer des données de contributions pour lier les commits existants à un compte d’utilisateur.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104705'
---
Chaque fois qu’un commit est poussé (push) sur {% data variables.product.prodname_enterprise %}, il est lié à un compte d’utilisateur s’ils sont tous deux associés à la même adresse e-mail. Toutefois, les commits existants *ne sont pas* liés de manière rétroactive quand un utilisateur inscrit une nouvelle adresse e-mail ou crée un compte.

1. Visitez la page de profil de l’utilisateur.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Sur le côté gauche de la page, cliquez sur **Administrateur**. ![Onglet Administrateur](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. Sous **Données de contributions**, cliquez sur **Regénérer**.
![Bouton Regénérer](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} lance alors des travaux en arrière-plan pour lier de nouveau les commits à ce compte d’utilisateur.
  ![Travaux de regénération en file d’attente](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
