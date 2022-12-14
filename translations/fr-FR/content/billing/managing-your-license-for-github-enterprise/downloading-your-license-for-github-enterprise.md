---
title: Téléchargement de votre licence pour GitHub Enterprise
intro: 'Vous pouvez télécharger une copie de votre fichier de licence pour {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: eed588e2580558280e2e11639f0904b5f9fcf118
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085613'
---
## À propos des fichiers de licence pour {% data variables.product.prodname_enterprise %}

Après avoir acheté ou mis à niveau une licence pour {% data variables.product.prodname_enterprise %} auprès de l’{% data variables.contact.contact_enterprise_sales %}, vous devez télécharger votre nouveau fichier de licence. Pour plus d’informations sur les licences pour {% data variables.product.prodname_enterprise %}, consultez « [À propos des licences pour {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise) ».

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Téléchargement de votre licence à partir de {% data variables.product.prodname_dotcom_the_website %}

Vous devez disposer d’un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} pour télécharger votre licence à partir de {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %} ».{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Dans la barre latérale gauche, cliquez sur **Gestion des licences Enterprise**.
  ![Onglet « Gestion des licences Enterprise » dans la barre latérale des paramètres du compte d’entreprise](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Sous « Instances Enterprise Server », cliquez sur {% octicon "download" aria-label="The download icon" %} pour télécharger votre fichier de licence.
  ![Télécharger la licence GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

Après avoir téléchargé votre fichier de licence, vous pouvez le charger sur {% data variables.product.product_location_enterprise %} pour valider votre application. Pour plus d’informations, {% ifversion ghec %}« [Chargement d’une nouvelle licence sur {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) » dans la documentation {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}« [Chargement d’une nouvelle licence sur {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server). »{% endif %}

## Téléchargement de votre licence si vous n’avez pas de compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}

Si vous n’avez pas de compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} ou que vous n’êtes pas sûr d’en avoir un, vous pouvez télécharger votre licence {% data variables.product.prodname_ghe_server %} à partir du [site web {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).

Si vous avez des questions sur le téléchargement de votre licence, contactez l’{% data variables.contact.contact_enterprise_sales %}.
