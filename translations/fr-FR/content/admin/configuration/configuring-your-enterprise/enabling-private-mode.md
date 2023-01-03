---
title: Activation du mode privé
intro: 'En mode privé, {% data variables.product.prodname_ghe_server %} oblige chaque utilisateur à se connecter pour accéder à l’installation.'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 99488886b1da5b07c2ddb5d7054c10957f6c573b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332783'
---
Vous devez activer le mode privé si {% data variables.product.product_location %} est accessible publiquement via Internet. En mode privé, les utilisateurs ne peuvent pas cloner de façon anonyme des dépôts sur `git://`. Si l’authentification intégrée est également activée, un administrateur doit inviter les nouveaux utilisateurs à créer un compte sur l’instance. Pour plus d’informations, consultez « [Configurer l’authentification intégrée](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication) ».

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

Quand le mode privé est activé, vous pouvez autoriser les opérations Git non authentifiées (et toute personne ayant un accès réseau à {% data variables.product.product_location %}) à lire le code d’un dépôt public sur votre instance avec l’accès en lecture Git anonyme activé. Pour plus d’informations, consultez « [Autoriser les administrateurs à activer l’accès en lecture Git anonyme aux dépôts publics](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories) ».

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. Sélectionnez **Mode privé**.
  ![Case à cocher permettant d’activer le mode privé](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
