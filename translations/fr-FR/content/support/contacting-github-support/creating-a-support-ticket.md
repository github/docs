---
title: Création d’un ticket de support
intro: 'Vous pouvez utiliser {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %} pour créer un ticket de support et discuter avec {% data variables.contact.github_support %}.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145134175'
---
{% ifversion fpt or ghec or ghes %}

## À propos des tickets de support

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} Vous pouvez créer votre ticket à l’aide de {% data variables.contact.support_portal %} ou, si vous souhaitez inclure des diagnostics avec votre ticket de support, vous pouvez utiliser la console Gestion de serveur GitHub Enterprise.
{% endif %}

Après avoir créé votre ticket, vous pouvez l’afficher avec les réponses de {% data variables.contact.github_support %} sur {% data variables.contact.contact_landing_page_portal %}. Pour plus d’informations, consultez « [Affichage et mise à jour des tickets de support](/support/contacting-github-support/viewing-and-updating-support-tickets) ». 

## Présentation de votre ticket de support

{% data variables.contact.github_support %} est fourni avec tout ce qui est nécessaire pour comprendre, localiser et reproduire un problème pour une résolution plus rapide et moins d’aller-retour entre vous et le support technique. Pour vous assurer que {% data variables.contact.github_support %} peut vous aider, tenez compte des points suivants lorsque vous écrivez votre ticket :

- Obtenez des informations qui peuvent aider {% data variables.contact.github_support %} à suivre, hiérarchiser, reproduire ou examiner le problème.
- Incluez des URL complètes, des noms de référentiel et des noms d’utilisateur, le cas échéant.
- Reproduisez le problème si nécessaire et soyez prêt à partager les étapes.
- Préparez-vous à fournir une description complète du problème et des résultats attendus.
- Copiez la formulation exacte de tous les messages d’erreur liés à votre problème.
- Vérifiez qu’il existe un numéro de ticket pour toutes les communications en cours avec {% data variables.contact.github_support %}.
- Incluez les journaux pertinents et joignez toutes les captures d’écran qui illustrent le problème.

{% ifversion ghes %}
## Choix d’une personne contact

En particulier pour les tickets avec la priorité {% data variables.product.support_ticket_priority_urgent %}, la personne qui contacte {% data variables.contact.github_support %} doit :

 - être informée des systèmes internes, outils, stratégies et pratiques.
 - être un utilisateur compétent de {% data variables.product.product_name %}.
 - disposer d’un accès et d’autorisations complets à tous les services requis pour résoudre le problème.
 - être autorisée à apporter les modifications recommandées à votre réseau et à tous les produits applicables.

{% endif %}

## Création d’un ticket de support{% ifversion ghes %} à l’aide du portail de support{% endif %}

1. Accédez au {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Création d’un ticket à l’aide de la console Gestion de serveur GitHub Enterprise

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. Si vous souhaitez inclure des diagnostics avec votre ticket de support, sous « Diagnostics », cliquez sur **Télécharger les informations de diagnostic** et enregistrez le fichier localement. Vous joindrez ce fichier à votre ticket de support ultérieurement.
  ![Capture d’écran du bouton intitulé « Télécharger les informations de diagnostic » sur la page Support de la console de gestion.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Pour terminer votre ticket et afficher {% data variables.contact.enterprise_portal %}, sous « Ouvrir la demande de support », cliquez sur **Nouvelle demande de support**.
  ![Capture d’écran du bouton intitulé « Nouvelle demande de support » sur la page Support de la console de gestion.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Vous pouvez envoyer un ticket de demande de support avec {% data variables.product.prodname_ghe_managed %} from the {% data variables.contact.ae_azure_portal %}.

## Prérequis

Pour envoyer un ticket pour {% data variables.product.prodname_ghe_managed %} dans l {% data variables.contact.ae_azure_portal %}, vous devez fournir l’ID de votre abonnement {% data variables.product.prodname_ghe_managed %} Azure à votre Gestionnaire de comptes de réussite client (CSAM) sur Microsoft.

## Envoi d’un ticket à l’aide de {% data variables.contact.ae_azure_portal %}

Les clients commerciaux peuvent soumettre une demande de support au {% data variables.contact.contact_ae_portal %}. Les clients gouvernementaux doivent utiliser le [Portail Azure pour les clients gouvernementaux](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Pour plus d’informations, consultez [Créer une demande de support Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) dans Microsoft Docs.

## Résolution des problèmes dans le {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} ne peut pas résoudre les problèmes d’accès ni d’abonnement dans le Portail Azure. Pour obtenir de l’aide sur le Portail Azure, contactez votre CSAM auprès de Microsoft ou consultez les informations suivantes.

- Si vous ne pouvez pas vous connecter au Portail Azure, consultez [Résoudre les problèmes de connexion d’abonnement Azure](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) dans Microsoft Docs ou [envoyer une demande directement](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Si vous pouvez vous connecter au Portail Azure, mais que vous ne pouvez pas envoyer de ticket pour {% data variables.product.prodname_ghe_managed %}, consultez les conditions préalables à l’envoi d’un ticket. Pour plus d’informations, consultez « [Conditions préalables](#prerequisites) ».

{% endif %}

## Pour aller plus loin

- « [À propos du support GitHub](/support/learning-about-github-support/about-github-support) »
