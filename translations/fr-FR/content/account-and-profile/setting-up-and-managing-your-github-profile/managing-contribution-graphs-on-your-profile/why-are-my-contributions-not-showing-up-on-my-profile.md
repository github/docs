---
title: Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?
intro: Learn common reasons that contributions may be missing from your contributions graph.
redirect_from:
- /articles/why-are-my-contributions-not-showing-up-on-my-profile
- /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Missing contributions
ms.openlocfilehash: c3921897284e16c979542c5f7629690ded2b841e
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145106297"
---
## <a name="about-your-contribution-graph"></a>À propos de votre graphe de contribution

Votre graphe de contributions de profil est un enregistrement des contributions que vous avez apportées aux dépôts {% ifversion ghae %}appartenant à{% else %}sur{% endif %} {% data variables.product.product_location %}. Les contributions sont horodatées d’après le temps universel coordonné (UTC) plutôt que votre fuseau horaire local. Les contributions ne sont comptabilisées que si elles remplissent certains critères. Dans certains cas, nous devrons peut-être reconstruire votre graphe afin que les contributions apparaissent.

Si vous faites partie d’une organisation qui utilise l’authentification unique SAML, vous ne pourrez pas voir l’activité de contribution de l’organisation sur votre profil si vous n’avez pas de session d’authentification unique active. Les personnes qui affichent votre profil à partir de l’extérieur de votre organisation verront une version anonymisée de votre activité de contribution pour votre organisation.

## <a name="contributions-that-are-counted"></a>Contributions comptabilisées

### <a name="issues-pull-requests-and-discussions"></a>Problèmes, demandes de tirage (pull requests) et discussions

Les problèmes, les demandes de tirage et les discussions apparaissent sur votre graphe de contribution s’ils ont été ouverts dans un dépôt autonome, et non une duplication (fork).

### <a name="commits"></a>Commits
Les commits apparaissent sur votre graphe de contributions s’ils remplissent **toutes** les conditions suivantes :
- L’adresse e-mail utilisée pour les commits est associée à votre compte sur {% data variables.product.product_location %}.
- Les commits ont été effectués dans un dépôt autonome, et non une duplication.
- Les commits ont été effectués :
  - Dans la branche par défaut du dépôt.
  - Dans la branche `gh-pages` (pour les dépôts avec des sites de projet).

Pour plus d’informations sur les sites de projet, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) ».

De plus, **au moins un** des énoncés suivants doit être vrai :
- Vous êtes collaborateur sur le dépôt ou membre de l’organisation propriétaire du dépôt.
- Vous avez dupliqué le dépôt.
- Vous avez ouvert une demande de tirage ou un problème dans le dépôt.
- Vous avez mis en vedette le dépôt.

## <a name="common-reasons-that-contributions-are-not-counted"></a>Raisons courantes pour lesquelles les contributions ne sont pas comptabilisées

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### <a name="commit-was-made-less-than-24-hours-ago"></a>Le commit a été effectué il y a moins de 24 heures

Après avoir effectué un commit qui répond aux exigences de contribution, vous devrez peut-être attendre jusqu’à 24 heures pour voir la contribution apparaître sur votre graphe.

### <a name="your-local-git-commit-email-isnt-connected-to-your-account"></a>Votre e-mail de commit Git local n’est pas connecté à votre compte

Les commits doivent être effectués avec une adresse e-mail connectée à votre compte sur {% data variables.product.product_location %}{% ifversion fpt or ghec %}, ou avec l’adresse e-mail `noreply` fournie par {% data variables.product.prodname_dotcom %} dans vos paramètres de messagerie,{% endif %} afin d’apparaître sur votre graphe de contributions.{% ifversion fpt or ghec %} Pour plus d’informations sur les adresses `noreply`, consultez « [Définition de votre adresse e-mail de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses) ».{% endif %}

Vous pouvez vérifier l’adresse e-mail utilisée pour un commit en ajoutant `.patch` à la fin d’une URL de commit, par exemple <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a> :

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

L’adresse e-mail mentionnée dans le champ `From:` est l’adresse qui a été définie dans les [paramètres de configuration git locaux](/articles/set-up-git). Dans cet exemple, l’adresse e-mail utilisée pour le commit est `octocat@nowhere.com`.

Si l’adresse e-mail utilisée pour le commit n’est pas connectée à votre compte sur {% data variables.product.product_location %}, {% ifversion ghae %}modifiez l’adresse e-mail utilisée pour créer des commits dans Git. Pour plus d’informations, consultez « [Définition de votre adresse e-mail de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git) ».{% else %}vous devez [ajouter l’adresse e-mail](/articles/adding-an-email-address-to-your-github-account) à votre compte sur {% data variables.product.product_location %}. Votre graphe de contributions sera reconstruit automatiquement lorsque vous ajouterez la nouvelle adresse.{% endif %}

{% warning %}

**Avertissement** : Les adresses e-mail génériques, telles que `jane@computer.local`, ne peuvent pas être ajoutées aux comptes {% data variables.product.prodname_dotcom %}. Si vous utilisez une adresse e-mail de ce type pour vos commits, ils ne seront pas liés à votre profil {% data variables.product.prodname_dotcom %} et n’apparaîtront pas dans votre graphe de contributions.

{% endwarning %}

### <a name="commit-was-not-made-in-the-default-or-gh-pages-branch"></a>Le commit n’a pas été effectué dans la branche `gh-pages` ou par défaut

Les commits sont comptabilisés uniquement s’ils sont effectués dans la branche par défaut ou la branche `gh-pages` (pour les dépôts avec des sites de projet). Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) ».

Si vos commit se trouvent dans une branche autre que `gh-pages` ou par défaut et que vous souhaitez qu’ils soient comptabilisés dans vos contributions, vous devez effectuer l’une des opérations suivantes :
- [Ouvrir une demande de tirage](/articles/creating-a-pull-request) pour que vos modifications soient fusionnées dans la branche par défaut ou la branche `gh-pages`.
- [Changer la branche par défaut](/github/administering-a-repository/changing-the-default-branch) du dépôt.

{% warning %}

**Avertissement** : Le changement de branche par défaut du dépôt entraîne son changement pour tous les collaborateurs du dépôt. Faites-le uniquement si vous souhaitez que la nouvelle branche devienne la base par rapport à laquelle toutes les futures demandes de tirage et commits seront effectuées.

{% endwarning %}

### <a name="commit-was-made-in-a-fork"></a>Le commit a été effectué dans une duplication

Les commits effectués dans une duplication ne comptent pas pour vos contributions. Pour qu’elles comptent, vous devez effectuer l’une des opérations suivantes :
- [Ouvrir une demande de tirage](/articles/creating-a-pull-request) pour que vos modifications soient fusionnées dans le dépôt parent.
- Pour détacher la duplication et la transformer en dépôt autonome sur {% data variables.product.product_location %}, contactez {% data variables.contact.contact_support %}. Si la duplication a ses propres duplications, indiquez à {% data variables.contact.contact_support %} si les duplications doivent être déplacées avec votre dépôt dans un nouveau réseau ou rester dans le réseau actuel. Pour plus d’informations, consultez [À propos des duplications (forks)](/articles/about-forks/) ».

## <a name="further-reading"></a>Pour aller plus loin

- « [Publicisation ou masquage de vos contributions privées sur votre profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile) »
- « [Affichage des contributions sur votre page de profil](/articles/viewing-contributions-on-your-profile-page) »
