---
title: Configuration d’un essai de GitHub Enterprise Server
intro: 'Vous pouvez essayer {% data variables.product.prodname_ghe_server %} gratuitement.'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Server trial
ms.openlocfilehash: 9beee350488bdf27beb7107deda3c44f560d29e9
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163556'
---
## À propos des essais de {% data variables.product.prodname_ghe_server %}

Vous pouvez prétendre à un essai gratuit de 45 jours pour évaluer {% data variables.product.prodname_ghe_server %}. Votre essai gratuit est installé sous forme d’appliance virtuelle, avec des options pour un déploiement local ou cloud. Pour plus d’informations sur {% data variables.product.prodname_ghe_server %} et pour obtenir une liste des plateformes de virtualisation prises en charge, consultez « [À propos de {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server) ».

Les alertes de {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}sécurité{% endif %} et {% data variables.product.prodname_github_connect %} ne sont actuellement pas disponibles dans les essais gratuits de {% data variables.product.prodname_ghe_server %}. Pour obtenir une démonstration de ces fonctionnalités, contactez l’{% data variables.contact.contact_enterprise_sales %}. Pour plus d’informations sur ces fonctionnalités, consultez « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) » et « [Connexion de votre compte d’entreprise à {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud) ».

Les essais gratuits sont également disponibles pour {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Configuration d’un essai de {% data variables.product.prodname_ghe_cloud %}](/articles/setting-up-a-trial-of-github-enterprise-cloud) ».

{% data reusables.products.which-product-to-use %}

## Configuration de votre essai de {% data variables.product.prodname_ghe_server %}

{% data variables.product.prodname_ghe_server %} est installé sous forme d’appliance virtuelle. Déterminez qui est la personne la plus apte dans votre organisation à configurer une machine virtuelle et demandez-lui d’envoyer une [demande d’essai gratuit](https://enterprise.github.com/trial). Vous pouvez commencer votre essai gratuit immédiatement après l’envoi d’une demande.

Pour configurer un compte pour le portail web {% data variables.product.prodname_enterprise %}, cliquez sur le lien dans l’e-mail que vous avez reçu après avoir envoyé votre demande d’essai gratuit, puis suivez les invites. Ensuite, téléchargez votre fichier de licence. Pour plus d’informations, consultez « [Gestion de votre licence pour {% data variables.product.prodname_enterprise %}](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise) ».

Pour installer {% data variables.product.prodname_ghe_server %}, téléchargez les composants nécessaires et chargez votre fichier de licence. Pour plus d’informations, consultez les instructions relatives à la plateforme de visualisation que vous avez choisie dans « [Configuration d’une instance de {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/installation/setting-up-a-github-enterprise-server-instance) ».

## Étapes suivantes

Pour tirer le meilleur parti de votre essai gratuit, suivez ces étapes :

1. [Créez une organisation](/enterprise-server@latest/admin/user-management/creating-organizations).
2. Pour apprendre les fondamentaux de l’utilisation de {% data variables.product.prodname_dotcom %}, consultez :
   - Webcast [Introduction à {% data variables.product.prodname_dotcom %}](https://resources.github.com/devops/methodology/maximizing-devops-roi/)
   - [Présentation du flux {% data variables.product.prodname_dotcom %}](https://guides.github.com/introduction/flow/) dans les guides de {% data variables.product.prodname_dotcom %}
   - [Hello World](https://guides.github.com/activities/hello-world/) dans les guides de {% data variables.product.prodname_dotcom %}
   - « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) »
3. Pour configurer votre instance afin de répondre aux besoins de votre organisation, consultez « [Configuration de votre entreprise](/enterprise-server@latest/admin/configuration/configuring-your-enterprise) ».
4. Pour intégrer {% data variables.product.prodname_ghe_server %} à votre fournisseur d’identité, consultez « [Utilisation de SAML](/enterprise-server@latest/admin/user-management/using-saml) » et « [Utilisation de LDAP](/enterprise-server@latest/admin/authentication/using-ldap) ».
5. Invitez un nombre illimité de personnes à participer à votre essai gratuit.
   - Ajoutez des utilisateurs à votre instance de {% data variables.product.prodname_ghe_server %} en utilisant l’authentification intégrée ou votre fournisseur d’identité configuré. Pour plus d’informations, consultez « [Utilisation de l’authentification intégrée](/enterprise-server@latest/admin/user-management/using-built-in-authentication) ».
   - Pour inviter des personnes à devenir administrateurs de compte, visitez le [portail web de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login).

    {% note %}

    **Remarque :** Les personnes que vous invitez à devenir administrateurs de compte reçoivent un e-mail qui contient un lien pour accepter votre invitation.

    {% endnote %}

{% data reusables.enterprise.best-practices %}    

{% data reusables.products.product-roadmap %}

## Fin de votre essai gratuit

Vous pouvez effectuer une mise à niveau vers des licences complètes dans le [portail web de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/login) à tout moment pendant la période d’essai gratuit.

Si vous n’avez pas effectué de mise à niveau à l’issue du dernier jour de votre essai gratuit, vous recevez un e-mail vous informant que votre essai a pris fin. Si vous avez besoin de plus de temps pour évaluer {% data variables.product.prodname_enterprise %}, contactez l’{% data variables.contact.contact_enterprise_sales %} pour demander une prolongation.

## Pour aller plus loin

- « [Configuration d’un essai de {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud) »
