---
title: À propos de la configuration d’entreprise
intro: 'Vous pouvez utiliser le tableau de bord d’administration de site{% ifversion ghes %}, la {% data variables.enterprise.management_console %} et l’interpréteur de commandes d’administration (SSH) {% elsif ghae %} ainsi que les paramètres d’entreprise, ou vous pouvez contacter le support{% endif %} pour gérer votre entreprise.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145103041'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Pour plus d’informations, consultez « [Tableau de bord de l’administrateur de site](/admin/configuration/site-admin-dashboard) ».

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Pour plus d’informations, consultez « [Accès à la console de gestion](/admin/configuration/accessing-the-management-console) ».

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration](/admin/configuration/accessing-the-administrative-shell-ssh) ».
{% endif %}

{% ifversion ghae %} Pour bien démarrer avec {% data variables.product.product_name %}, vous devez d’abord déployer {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Déploiement de {% data variables.product.product_name %}](/admin/configuration/configuring-your-enterprise/deploying-github-ae) ».

Au moment d’accéder pour la première fois à votre entreprise, vous procéderez à une configuration initiale pour préparer {% data variables.product.product_name %}. La configuration initiale consiste notamment à connecter votre entreprise à un fournisseur d’identité (IdP), à l’authentifier avec l’authentification unique SAML, à configurer des stratégies pour les dépôts et les organisations de votre entreprise et à configurer SMTP pour les e-mails sortants. Pour plus d’informations, consultez « [Initialisation de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae) ».

Par la suite, vous pourrez utiliser le tableau de bord de l’administrateur de site et les paramètres d’entreprise pour affiner la configuration de votre entreprise, gérer les utilisateurs, les organisations et les dépôts, et définir des stratégies qui réduisent les risques et améliorent la qualité. 

Toutes les entreprises sont configurées avec l’isolation de sous-domaine et la prise en charge du protocole TLS version 1.2 et ultérieures pour le trafic chiffré uniquement.
{% endif %}

## Pour aller plus loin

- « [Gestion des utilisateurs, des organisations et des dépôts](/admin/user-management) »
- « [Définition de stratégies pour votre entreprise](/admin/policies) »
