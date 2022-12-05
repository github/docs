---
title: Vérification de votre domaine personnalisé pour GitHub Pages
intro: Vous pouvez accroître la sécurité de votre domaine personnalisé et éviter les attaques de prise de contrôle en vérifiant votre domaine.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529670'
---
## À propos de la vérification de domaine pour GitHub Pages

Quand vous vérifiez votre domaine personnalisé pour votre compte personnel ou votre organisation, seuls les dépôts appartenant à votre compte personnel ou votre organisation peuvent être utilisés pour publier un site {% data variables.product.prodname_pages %} sur le domaine personnalisé vérifié ou sur les sous-domaines immédiats du domaine.

La vérification de votre domaine empêche d’autres utilisateurs GitHub de prendre votre domaine personnalisé et de l’utiliser pour publier leur propre site {% data variables.product.prodname_pages %}. Des prises de contrôle de domaine peuvent se produire quand vous supprimez votre dépôt, quand votre plan de facturation est rétrogradé ou après n’importe quelle autre modification qui dissocie le domaine personnalisé ou désactive {% data variables.product.prodname_pages %}, alors que le domaine reste configuré pour {% data variables.product.prodname_pages %} et n’est pas vérifié.

Quand vous vérifiez un domaine, tous les sous-domaines immédiats sont également inclus dans la vérification. Par exemple, si le domaine personnalisé `github.com` est vérifié, `docs.github.com`, `support.github.com` et tous les autres sous-domaines immédiats sont également protégés contre les prises de contrôle.

{% data reusables.pages.wildcard-dns-warning %}

Il est également possible de vérifier un domaine pour votre organisation{% ifversion ghec %} ou votre entreprise{% endif %}, qui affiche un badge « Vérifié » sur le profil de l’organisation {% ifversion ghec %}ou l’entreprise{% endif %} {% ifversion ghec %}, et sur {% data variables.product.prodname_ghe_cloud %}, vous permet de restreindre les notifications aux adresses e-mail utilisant le domaine vérifié{% endif %}. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %} » et « [Vérification ou approbation d’un domaine pour votre entreprise](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %} ».

## Vérification d’un domaine pour votre site utilisateur

{% data reusables.user-settings.access_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "browser" aria-label="The pages icon" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Attendez que votre configuration DNS change, ce qui peut être immédiat ou prendre jusqu’à 24 heures. Vous pouvez vérifier la modification apportée à votre configuration DNS en exécutant la commande `dig` sur la ligne de commande. Dans la commande ci-dessous, remplacez `USERNAME` par votre nom d’utilisateur et `example.com` par le domaine que vous vérifiez. Si votre configuration DNS a été mise à jour, vous devez voir votre nouvel enregistrement TXT dans la sortie.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Vérification d’un domaine pour le site de votre organisation

Les propriétaires d’organisation peuvent vérifier des domaines personnalisés pour leur organisation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Code, planification et automatisation » de la barre latérale, cliquez sur **{% octicon "browser" aria-label="The browser icon" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Attendez que votre configuration DNS change, ce qui peut être immédiat ou prendre jusqu’à 24 heures. Vous pouvez vérifier la modification apportée à votre configuration DNS en exécutant la commande `dig` sur la ligne de commande. Dans la commande ci-dessous, remplacez `ORGANIZATION` par le nom de votre organisation et `example.com` par le domaine que vous vérifiez. Si votre configuration DNS a été mise à jour, vous devez voir votre nouvel enregistrement TXT dans la sortie.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
