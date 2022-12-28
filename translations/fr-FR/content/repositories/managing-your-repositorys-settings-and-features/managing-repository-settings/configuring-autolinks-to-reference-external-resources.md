---
title: Configuration de liens automatiques pour référencer des ressources externes
intro: Vous pouvez ajouter des liens automatiques à des ressources externes comme des problèmes JIRA et des tickets Zendesk pour simplifier votre workflow.
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748588'
---
## À propos des liens automatiques

Toute personne disposant d’autorisations d’administrateur pour un dépôt peut configurer des références de lien automatique pour lier des problèmes, des demandes de tirage, des messages de commit et des descriptions de mise en production à des services tiers externes.

{% ifversion autolink-reference-alphanumeric %} Les références de lien automatique acceptent désormais les caractères alphanumériques. Quand ils ont été introduits initialement, les liens automatiques personnalisés étaient limités aux ressources externes utilisant des identificateurs numériques. Les liens automatiques personnalisés fonctionnent désormais avec des identificateurs alphanumériques. Les références de lien automatique héritées qui acceptent uniquement les identificateurs numériques sont déconseillées. Elles portent une étiquette « héritée ».

Vous définissez les liens automatiques personnalisés en spécifiant un préfixe de référence et une URL cible.
- Les préfixes de référence ne peuvent pas présenter des noms qui se chevauchent. Un référentiel ne peut par exemple pas avoir deux liens automatiques personnalisés avec des préfixes comme `TICKET` et `TICK`, étant donné que les deux préfixes correspondent à la chaîne `TICKET123a`.
- Les URL cibles incluent une variable `<num>` qui prend en charge les caractères suivants : `a-z` (qui ne respecte pas la casse), `0-9` et `-`.
{% endif %}

## Configuration de liens automatiques pour référencer des ressources externes

Cette procédure montre comment configurer les liens automatiques pour référencer des ressources externes. Si vous utilisez Zendesk par exemple pour suivre les tickets signalés par l’utilisateur, vous pouvez référencer un numéro de ticket dans la demande de tirage (pull request) que vous avez ouverte pour résoudre le problème.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Dans la section « Intégrations » de la barre latérale, cliquez sur **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Références de lien automatique**.
{% else %}
1. Dans la barre latérale gauche, cliquez sur **Références de lien automatique**.
![Onglet Références de lien automatique dans la barre latérale gauche](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. Cliquez sur **Ajouter une référence de lien automatique**.
![Bouton pour renseigner les informations de référence de lien automatique](/assets/images/help/repository/add-autolink-reference-details.png)
5. Sous « Préfixe de référence », tapez un préfixe court et explicite que vous souhaitez que les collaborateurs utilisent afin de générer des liens automatiques pour la ressource externe.
{% ifversion autolink-reference-alphanumeric %}![Champ où taper l’abréviation pour le système externe](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Champ où taper l’abréviation pour le système externe](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. Sous « URL cible », tapez le lien vers le système externe auquel vous souhaitez établir un lien. Veillez à conserver `<num>` en tant que variable pour le numéro de référence.
{% ifversion autolink-reference-alphanumeric %}![Champ où taper l’abréviation pour le système externe](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Champ où taper l’URL vers le système externe](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Cliquez sur **Ajouter une référence de lien automatique**.
{% ifversion autolink-reference-alphanumeric %}{% else %}![Bouton pour ajouter une référence de lien automatique](/assets/images/help/repository/add-autolink-reference.png){% endif %}
