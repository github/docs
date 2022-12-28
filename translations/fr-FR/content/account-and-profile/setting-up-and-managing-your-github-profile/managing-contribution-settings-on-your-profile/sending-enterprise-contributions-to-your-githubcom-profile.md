---
title: Envoi de contributions d’entreprise à votre profil GitHub.com
intro: 'Vous pouvez mettre en valeur votre travail sur {% data variables.product.prodname_enterprise %} en envoyant le nombre de contributions à votre profil {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Send enterprise contributions
ms.openlocfilehash: 6fb1803f3a93dd03af24ce9ea3f360e579d7dbd1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079660'
---
## À propos des contributions d’entreprise sur votre profil {% data variables.product.prodname_dotcom_the_website %}

Votre profil {% data variables.product.prodname_dotcom_the_website %} indique le nombre de contributions {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} au cours des 90 derniers jours. {% data reusables.github-connect.sync-frequency %} Les contributions de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} sont considérées comme des contributions privées. Les détails des commits affichent uniquement le nombre de contributions et le fait que ces contributions ont été effectuées dans un environnement {% data variables.product.prodname_enterprise %} en dehors de {% data variables.product.prodname_dotcom_the_website %}.

Vous pouvez décider d’afficher ou non le nombre de contributions privées sur votre profil. Pour plus d’informations, consultez « [Publicisation ou masquage de vos contributions privées sur votre profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/) ».

Pour plus d’informations sur la façon dont les contributions sont calculées, consultez « [Gestion des graphes de contribution sur votre profil](/articles/managing-contribution-graphs-on-your-profile/) ».

{% note %}

**Remarques :**
- La connexion entre vos comptes est régie par la [déclaration de confidentialité de GitHub](/free-pro-team@latest/github/site-policy/github-privacy-statement/), et les utilisateurs qui autorisent la connexion acceptent les [conditions d’utilisation du service GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service).

- Pour que vous puissiez connecter votre profil {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} à votre profil {% data variables.product.prodname_dotcom_the_website %}, il faut que votre propriétaire d’entreprise ait activé {% data variables.product.prodname_github_connect %} et activé le partage de contributions entre les environnements. Pour plus d’informations, contactez votre administrateur d’entreprise.

{% endnote %}

## Envoi de vos contributions d’entreprise à votre profil {% data variables.product.prodname_dotcom_the_website %}

{% ifversion fpt or ghec %}

- Pour envoyer des contributions d’entreprise de {% data variables.product.prodname_ghe_server %} vers votre profil {% data variables.product.prodname_dotcom_the_website %}, consultez « [Envoi de contributions d’entreprise à votre profil {% data variables.product.prodname_dotcom_the_website %}](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) » dans la documentation {% data variables.product.prodname_ghe_server %}.
- Pour envoyer des contributions d’entreprise de {% data variables.product.prodname_ghe_managed %} vers votre profil {% data variables.product.prodname_dotcom_the_website %}, consultez « [Envoi de contributions d’entreprise à votre profil {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) » dans la documentation {% data variables.product.prodname_ghe_managed %}.

{% elsif ghes %}

1. Connectez-vous à {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_dotcom_the_website %}.
1. Sur {% data variables.product.prodname_ghe_server %}, dans le coin supérieur droit de n’importe quelle page, cliquez sur votre photo de profil, puis sur **Paramètres**.
   ![Icône de paramètres dans la barre d’utilisateurs](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Passez en revue les ressources auxquelles {% data variables.product.prodname_ghe_server %} accédera à partir de votre compte {% data variables.product.prodname_dotcom_the_website %}, puis cliquez sur **Authorize**.
   ![Autoriser la connexion entre GitHub Enterprise Serveur et GitHub.com](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. Connectez-vous à {% data variables.product.prodname_ghe_managed %} et {% data variables.product.prodname_dotcom_the_website %}.
1. Sur {% data variables.product.prodname_ghe_managed %}, dans le coin supérieur droit de n’importe quelle page, cliquez sur votre photo de profil, puis sur **Settings**.
   ![Icône de paramètres dans la barre d’utilisateurs](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
