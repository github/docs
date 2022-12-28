---
title: À propos des demandes de tirage (pull requests)
intro: 'Les demandes de tirage vous permettent d’indiquer aux autres utilisateurs les modifications que vous avez envoyées à une branche dans un référentiel sur {% data variables.product.product_name %}. Une fois qu’une demande de tirage est ouverte, vous pouvez discuter et examiner les modifications potentielles avec les collaborateurs et ajouter des validations de suivi avant que vos modifications soient fusionnées dans la branche de base.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 6912f0ca38cc522d5698a9e8b1a1042f445b999e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111107'
---
## À propos des demandes de tirage (pull requests)

{% note %}

**Remarque :** Lorsque vous utilisez des demandes de tirage, n’oubliez pas ce qui suit :
* Si vous travaillez dans le [modèle de dépôt partagé](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), nous vous recommandons d’utiliser une branche de rubrique pour votre demande de tirage. Bien que vous puissiez envoyer des demandes de tirage à partir de n’importe quelle branche ou n’importe quel commit, avec une branche de rubrique, vous pouvez pousser (push) des commits de suivi si vous avez besoin de mettre à jour vos changements proposés.
* Faites preuve de prudence quand vous forcer la poussée (push) de commits vers une demande de tirage. Un forçage de poussée modifie l’historique du dépôt et peut endommager votre demande de tirage. Si d’autres collaborateurs créent une branche dans le projet avant un forçage de poussée, ce dernier risque de remplacer les commits sur lesquels ces collaborateurs ont basé leur travail.

{% endnote %}

Vous pouvez créer des demandes de tirage sur {% data variables.product.prodname_dotcom_the_website %}, avec {% data variables.product.prodname_desktop %}, dans {% data variables.product.prodname_github_codespaces %}, sur {% data variables.product.prodname_mobile %} et lors de l’utilisation de l’interface CLI de GitHub.

Une fois que vous avez initialisé une demande de tirage, une page de révision s’affiche et présente un aperçu général des changements entre votre branche (la branche de comparaison) et la branche de base du dépôt. Vous pouvez ajouter un résumé des changements proposés, réviser les changements apportés par les commits, ajouter des étiquettes, des jalons et des personnes responsables, ainsi que mentionner (@mention) des contributeurs individuels ou des équipes. Pour plus d’informations, consultez « [Création d’une demande de tirage](/articles/creating-a-pull-request) ».

Une fois que vous avez créé une demande de tirage, vous pouvez pousser (push) des commits à partir de votre branche de rubrique pour les ajouter à votre demande de tirage existante. Ces commits apparaissent dans l’ordre chronologique au sein de votre demande de tirage et les changements sont visibles sous l’onglet « Fichiers modifiés ».

D’autres contributeurs peuvent passer en revue vos changements proposés, ajouter des commentaires de révision, participer à la discussion sur la demande de tirage et même ajouter des commits à cette dernière. {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %} Vous pouvez voir des informations sur l’état de déploiement actuel de la branche et sur l’activité de déploiement passée sous l’onglet « Conversation ». Pour plus d’informations, consultez « [Affichage de l’activité de déploiement d’un dépôt](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository) ».
{% endif %}

Une fois que les changements proposés vous semblent satisfaisants, vous pouvez fusionner la demande de tirage. Si vous travaillez dans un modèle de dépôt partagé, vous créez une demande de tirage et c’est vous-même ou quelqu’un d’autre qui fusionnez vos changements depuis votre branche de fonctionnalité dans la branche de base que vous spécifiez dans votre demande de tirage. Pour plus d’informations, consultez « [Fusion d’une demande de tirage](/articles/merging-a-pull-request) ».

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Conseils :**
- Pour basculer entre la vue réduite et la vue développée de tous les anciens commentaires de révision dans une demande de tirage, maintenez la touche <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> enfoncée et cliquez sur **Afficher les obsolètes** ou **Masquer les obsolètes**. Pour plus d’informations sur les raccourcis, consultez « [Raccourcis clavier](/articles/keyboard-shortcuts) ».
- Vous pouvez écraser des commits quand vous fusionnez une demande de tirage afin d’obtenir une vue plus rationalisée des changements. Pour plus d’informations, consultez « [À propos des fusions de demandes de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) ».

{% endtip %}

Vous pouvez consulter votre tableau de bord pour trouver rapidement des liens vers les demandes de tirage récemment mises à jour sur lesquelles vous travaillez ou auxquelles vous êtes abonné. Pour plus d’informations, consultez « [À propos de votre tableau de bord personnel](/articles/about-your-personal-dashboard) ».

## Brouillon des demandes de tirage (pull request)

{% data reusables.gated-features.draft-prs %}

Lorsque vous créez une demande de tirage, vous pouvez choisir d’en créer une prête pour la révision ou de créer un brouillon. Les brouillons de demande de tirage ne peuvent pas être fusionnés et les propriétaires de code ne sont pas automatiquement invités à les réviser. Pour plus d’informations sur la création d’un brouillon de demande de tirage, consultez « [Création d’une demande de tirage](/articles/creating-a-pull-request) » et « [Création d’une demande de tirage à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) ».

{% data reusables.pull_requests.mark-ready-review %} Vous pouvez convertir une demande de tirage en brouillon à tout moment. Pour plus d’informations, consultez « [Modification de l’étape d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) ».

## Différences entre les commits dans les pages de comparaison et de demande de tirage

Les pages de comparaison et de demande de tirage utilisent différentes méthodes pour calculer les différences des fichiers modifiés :

- Les pages de comparaison indiquent la différence entre le conseil de la référence principale et l’ancêtre commun actuel (c’est-à-dire la base de fusion) de la référence principale et de base.
- Les pages de demande de tirage indiquent la différence entre le conseil de la référence principale et l’ancêtre commun de la référence principale et de base au moment où la demande de tirage a été créée. Ainsi, la base de fusion utilisée pour la comparaison risque d’être différente.

## Pour aller plus loin

- « [Demande de tirage](/articles/github-glossary/#pull-request) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [À propos des branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) »
- « [Commentaires sur une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) »
- « [Fermeture d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) »
