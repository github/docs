---
title: Affichage des adresses IP dans le journal d’audit de votre entreprise
intro: Vous pouvez afficher les adresses IP sources des événements dans le journal d’audit de votre entreprise.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 7dad3642866b637432442591d8e5714e3db6f59f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508074'
---
## À propos de l’affichage des adresses IP dans le journal d’audit

Par défaut, {% data variables.product.product_name %} n’affichent pas l’adresse IP source des événements dans le journal d’audit de votre entreprise. Pour assurer la conformité et répondre aux menaces, vous pouvez éventuellement afficher l’adresse IP complète associée à l’acteur responsable de chaque événement. Les acteurs sont généralement des utilisateurs, mais peuvent aussi s’agir d’applications ou d’intégrations.

Vous êtes tenu de respecter les obligations légales en matière d’affichage ou de stockage des adresses IP affichées dans le journal d’audit de votre entreprise.

Si vous choisissez d’afficher les adresses IP, celles-ci s’affichent uniquement dans le journal d’audit de votre entreprise. Les adresses IP ne s’affichent pas pour les événements figurant dans les journaux d’audit des différentes organisations relevant de votre entreprise. Pour plus d’informations sur les journaux d’audit des organisations, consultez « [Examen du journal d’audit de votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization) ».

Vous pouvez afficher les adresses IP dans le journal d’audit, quelle que soit la méthode d’authentification que vous utilisez pour votre entreprise sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [À propos de l’authentification pour votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise) ».

Quand un utilisateur crée un compte sur {% data variables.product.product_location %}, il accepte la collecte de la part de {% data variables.product.company_short %} d’informations de base sur les connexions aux services {% data variables.product.company_short %}, notamment l’adresse IP source. Pour plus d’informations, consultez la [déclaration de confidentialité GitHub](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information).

## Événements qui donne lieu à l’affichage d’adresses IP dans le journal d’audit

{% data variables.product.product_name %} affiche une adresse IP dans le journal d’audit dès lors qu’un membre de l’entreprise interagit avec une ressource dont est propriétaire votre entreprise ou une organisation de votre entreprise. Par exemple, vous verrez une adresse IP pour les événements audités impliquant un dépôt interne ou privé dont est propriétaire une organisation de votre entreprise, ou les ressources associées à ces dépôts, telles qu’un problème, une demande de tirage (pull request), une action ou un projet.

Si les membres de votre entreprise accèdent à {% data variables.product.product_location %} avec des comptes personnels qu’ils gèrent eux-mêmes, du fait que vous n’utilisez pas {% data variables.product.prodname_emus %}, {% data variables.product.product_name %} n’affiche pas d’événement ni d’adresse IP dans le journal d’audit pour les actions suivantes.
  
- Authentification auprès de {% data variables.product.product_location %}
- Interactions avec une ressource appartenant au compte personnel, notamment un dépôt, un gist ou un projet
- Interactions avec un dépôt public appartenant à une organisation de votre entreprise

## Activation de l’affichage des adresses IP dans le journal d’audit

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Sous « Journal d’audit », cliquez sur **Divulgation de l’adresse IP source**.

   ![Capture d’écran de l’onglet « Divulgation de l’adresse IP source »](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. Sous « Divulguer les adresses IP d’acteur dans les journaux d’audit », sélectionnez **Activer la divulgation de l’adresse IP source**.

   ![Capture d’écran de la case à cocher permettant d’activer l’affichage des adresses IP dans les journaux d’audit](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. Cliquez sur **Enregistrer**.

Après avoir activé la fonctionnalité, vous pouvez accéder au journal d’audit pour visualiser les événements qui comportent des adresses IP. Pour plus d’informations, consultez « [Accès au journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise) ».
