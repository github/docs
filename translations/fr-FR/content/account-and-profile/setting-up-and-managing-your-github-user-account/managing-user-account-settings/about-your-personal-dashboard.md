---
title: À propos de votre tableau de bord personnel
redirect_from:
- /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
- /articles/opting-into-the-public-beta-for-a-new-dashboard
- /articles/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: You can visit your personal dashboard to keep track of issues and pull requests you're working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: a6c91f68a30f06bbc5b3b7bc8a0b95dddfbae64a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086467"
---
## <a name="accessing-your-personal-dashboard"></a>Accès à votre tableau de bord personnel

Votre tableau de bord personnel est la première page que vous voyez lorsque vous vous connectez à {% data variables.product.product_name %}.

Pour accéder à votre tableau de bord personnel une fois que vous êtes connecté, cliquez sur {% octicon "mark-github" aria-label="The github octocat logo" %} dans le coin supérieur gauche de n’importe quelle page sur {% data variables.product.product_name %}.

## <a name="finding-your-recent-activity"></a>Recherche de votre activité récente

Dans la section « Activité récente » de votre fil d’actualité, vous pouvez rapidement rechercher et suivre les problèmes et les demandes de tirage récemment mis à jour sur lesquels vous travaillez. Sous « Activité récente », vous pouvez afficher un aperçu des 4 mises à jour récentes effectuées au cours des deux dernières semaines.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## <a name="finding-your-top-repositories-and-teams"></a>Recherche de vos principaux dépôts et équipes

Dans la barre latérale gauche de votre tableau de bord, vous pouvez accéder aux principaux dépôts et équipes que vous utilisez.

![liste des dépôts et des équipes de différentes organisations](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

La liste des principaux dépôts est générée automatiquement, et peut comprendre tous les dépôts avec lesquels vous avez interagi, qu’ils soit détenus directement par votre compte ou non. Les interactions incluent la création de commits, l’ouverture de problèmes et de demandes de tirage, ainsi que la rédaction de commentaires sur ceux-ci. La liste des principaux dépôts ne peut pas être modifiée, mais les dépôts sont supprimés de la liste quatre mois après la dernière interaction.

Vous trouverez également une liste des dépôts, équipes et tableaux de projet auxquels vous avez récemment accédé en cliquant dans la barre de recherche en haut de n’importe quelle page sur {% data variables.product.product_name %}.

## <a name="staying-updated-with-activity-from-the-community"></a>Se tenir à jour de l’activité de la communauté

{% if for-you-feed %} La section principale de votre tableau de bord comporte deux flux d’activités :

- Suivi : activité par les personnes que vous suivez et des dépôts que vous surveillez.
- Pour vous : activité et recommandations basées sur votre réseau {% data variables.product.product_name %}.

### <a name="following-feed"></a>Flux Suivi

Ce flux affiche l’activité des dépôts et des utilisateurs pour lesquels vous avez montré un intérêt direct, en suivant un utilisateur ou en surveillant un dépôt. Par exemple, vous verrez les mises à jour lorsqu’un utilisateur que vous suivez :

{% else %} Dans la section « Toute l’activité » de votre fil d’actualité, vous pouvez afficher les mises à jour des dépôts que vous surveillez et des utilisateurs que vous suivez.

Vous verrez les mises à jour dans votre fil d’actualité lorsqu’un utilisateur que vous suivez : {% endif %}


- Met en vedette un dépôt.
- Suit un autre utilisateur.{% ifversion fpt or ghes or ghec %}
- Crée un dépôt public.{% endif %}
- Ouvre un problème ou une demande de tirage avec l’étiquette « Aide souhaitée » ou « bon premier problème » sur un dépôt que vous surveillez.
- Pousse des commits dans un dépôt que vous surveillez.{% ifversion fpt or ghes or ghec %}
- Duplique un dépôt public.{% endif %}
- Publie une nouvelle mise en production.

Pour plus d’informations sur le suivi des personnes et la surveillance des dépôts, consultez « [Suivi des personnes](/get-started/exploring-projects-on-github/following-people) » et « [Être social](/get-started/quickstart/be-social) ».

{% if for-you-feed %}
### <a name="for-you-feed"></a>Flux Pour vous

{% note %}

**Remarque :** Ce nouvel onglet est actuellement en version bêta publique, et sujet à modification. 

{% endnote %}

Ce flux affiche une activité et des recommandations basées sur votre réseau sur {% data variables.product.product_name %}. Il est conçu pour fournir des mises à jour qui vous inspirent, vous tiennent à jour et vous aident à trouver de nouvelles communautés auxquelles vous souhaiterez participer. Votre réseau comprend :

- Les dépôts que vous avez mis en vedette.
- Les dépôts auxquels vous avez contribué.
- Les utilisateurs que vous suivez ou parrainez.
- Les utilisateurs avec qui vous avez collaboré.
- Les organisations que vous suivez.

{% endif %}

## <a name="exploring-recommended-repositories"></a>Exploration des dépôts recommandés

Dans la section « Explore repositories » située à droite de votre tableau de bord, vous pouvez explorer les dépôts recommandés dans vos communautés. Les recommandations sont basées sur les dépôts que vous avez mis en vedette ou auxquels vous avez accédé, les personnes que vous suivez et l’activité dans les dépôts auxquels vous avez accès.{% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Trouver des moyens de contribuer à l’open source sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

## <a name="further-reading"></a>Pour aller plus loin

- « [À propos de votre tableau de bord d’organisation](/articles/about-your-organization-dashboard) »
