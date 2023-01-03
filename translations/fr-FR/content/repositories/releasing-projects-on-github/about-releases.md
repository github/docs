---
title: À propos des versions
intro: 'Vous pouvez créer une version pour empaqueter des logiciels, ainsi que des notes de publication et des liens vers des fichiers binaires, pour que d’autres personnes puissent les utiliser.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881504'
---
## À propos des versions

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![Vue d’ensemble des versions](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![Vue d’ensemble des versions](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![Vue d’ensemble des versions](/assets/images/help/releases/releases-overview.png) {% endif %}

Les versions sont des itérations logicielles déployables que vous pouvez empaqueter et rendre disponibles au téléchargement pour un public plus large.

Les versions sont basées sur des [étiquettes Git](https://git-scm.com/book/en/Git-Basics-Tagging), qui marquent un point spécifique dans l’historique de votre dépôt. Une date d’étiquette peut être différente d’une date de publication, car elles peuvent être créées à des moments différents. Pour plus d’informations sur la consultation de vos étiquettes existantes, consultez « [Consultation des versions et des étiquettes de votre dépôt](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags) ».

Vous pouvez recevoir des notifications quand de nouvelles versions sont publiées dans un dépôt, mais pas forcément pour les autres mises à jour du dépôt. Pour plus d’informations, consultez « [Consultation de vos abonnements](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions) ».

Toute personne avec un accès en lecture sur un dépôt peut voir et comparer les versions, mais seules les personnes avec des autorisations d’écriture sur un dépôt peuvent gérer les versions. Pour plus d’informations, consultez « [Gestion des versions dans un dépôt](/github/administering-a-repository/managing-releases-in-a-repository) ».

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} Vous pouvez manuellement créer des notes de publication quand vous gérez une version. Vous pouvez également générer automatiquement des notes de publication à partir d’un modèle par défaut ou personnaliser votre propre modèle de notes de publication. Pour plus d’informations, consultez « [Notes de publication générées automatiquement](/repositories/releasing-projects-on-github/automatically-generated-release-notes) ».
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} Quand vous regardez les détails d’une version, la date de création de chaque ressource de version est affichée à côté de la ressource en question.
{% endif %}

{% ifversion fpt or ghec %} Les personnes qui ont des autorisations d’administrateur sur un dépôt peuvent choisir si les objets {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) sont ajoutés dans les fichiers ZIP et les tarballs que {% data variables.product.product_name %} crée pour chaque version. Pour plus d’informations, consultez « [Gestion des objets {% data variables.large_files.product_name_short %} dans les archives de votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository) ».

Si une version corrige une vulnérabilité de sécurité, vous devez publier un avis de sécurité dans votre dépôt. {% data variables.product.prodname_dotcom %} passe en revue chaque avis de sécurité publié et peut l’utiliser pour envoyer des {% data variables.product.prodname_dependabot_alerts %} aux dépôts affectés. Pour plus d’informations, consultez « [À propos des avis de sécurité GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories) ».

Vous pouvez regarder l’onglet **Dépendants** du graphe des dépendances pour voir les dépôts et packages qui dépendent du code de votre dépôt et qui peuvent donc être affectés par une nouvelle version. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».
{% endif %}

Vous pouvez également utiliser l’API Releases pour collecter des informations, comme le nombre de fois que les personnes téléchargent une ressource de version. Pour plus d’informations, consultez « [Releases](/rest/reference/releases) ».

{% ifversion fpt or ghec %}
## Quotas de bande passante et de stockage

 Chaque fichier inclus dans une version doit être inférieur à {% data variables.large_files.max_file_size %}. Il n’y a pas de limite de la taille totale d’une version, ni d’utilisation de la bande passante.

{% endif %}
