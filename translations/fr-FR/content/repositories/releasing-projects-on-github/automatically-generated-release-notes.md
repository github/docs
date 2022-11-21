---
title: Notes de publication générées automatiquement
intro: Vous pouvez générer automatiquement des notes de publication pour vos versions GitHub
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: a4adfa306873ef172950666756add7d0e67e168d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432015'
---
## À propos des notes de publication générées automatiquement

Les notes de publication générées automatiquement offrent une alternative automatisée à l’écriture manuelle des notes de publication pour vos versions {% data variables.product.prodname_dotcom %}. Avec des notes de publication générées automatiquement, vous pouvez rapidement générer une vue d’ensemble du contenu d’une version. Les notes de publication générées automatiquement incluent une liste de demandes de tirage (pull request) fusionnées, une liste de contributeurs à la version et un lien vers un journal de modification complet.

Vous pouvez également personnaliser vos notes de publication automatisées en utilisant des étiquettes pour créer des catégories personnalisées afin d’y organiser les demandes de tirage de votre choix, et exclure certaines étiquettes et utilisateurs dans la sortie.

## Création de notes de publication générées automatiquement pour une nouvelle version

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Cliquez sur **Créer un brouillon d’une nouvelle version**.
   ![Bouton Brouillon de versions](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Cliquez sur **Choisir une étiquette** et tapez{% else %}Tapez{% endif %} un numéro de version pour votre version. Vous pouvez aussi sélectionner une étiquette existante.
  {% ifversion fpt or ghec %} ![Entrer une étiquette](/assets/images/help/releases/releases-tag-create.png)
5. Si vous créez une étiquette, cliquez sur **Créer une étiquette**.
![Confirmez que vous voulez créer une nouvelle étiquette](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![Version étiquetée des mises en production](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
6. Si vous avez créé une étiquette, utilisez le menu déroulant pour sélectionner la branche qui contient le projet à publier.
  {% ifversion fpt or ghec %}![Choisir une branche](/assets/images/help/releases/releases-choose-branch.png) {% else %}![Branche étiquetée des mises en production](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. En haut à droite de la zone de texte de description, cliquez sur {% ifversion previous-release-tag %}**Générer des notes de publication**{% else %}**Générer automatiquement des notes de publication**{% endif %}.{% ifversion previous-release-tag %} ![Générer des notes de publication](/assets/images/help/releases/generate-release-notes.png){% else %} ![Générer automatiquement des notes de publication](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Passez en revue les notes générées pour vérifier qu’elles comprennent toutes (et uniquement) les informations que vous voulez ajouter.
9. Vous pouvez aussi ajouter des fichiers binaires comme des programmes compilés dans votre mise en production, pour ce faire, faites un glisser-déposer des fichiers dans la zone Fichiers binaires, ou sélectionnez-les manuellement.
   ![Fourniture d’un DMG avec la mise en production](/assets/images/help/releases/releases_adding_binary.gif)
10. Pour avertir les utilisateurs que la mise en production n’est pas prête pour la production et peut être instable, sélectionnez **Il s’agit d’une préversion**.
   ![Case à cocher pour marquer une mise en production comme préversion](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion fpt or ghec %}
11. Vous pouvez aussi sélectionner **Créer une discussion pour cette version**, puis sélectionner le menu déroulant **Catégorie** et cliquer sur une catégorie pour la discussion de mise en production.
  ![Case à cocher pour créer une discussion de mise en production et menu déroulant pour choisir une catégorie](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
12. Si vous êtes prêt à rendre publique votre mise en production, cliquez sur **Publier la mise en production**. Pour travailler sur la mise en production par la suite, cliquez sur **Enregistrer le brouillon**.
   ![Boutons Publier la version et Enregistrer un brouillon de la version](/assets/images/help/releases/release_buttons.png)


## Configuration des notes de publication générées automatiquement

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ de nom de fichier, tapez `.github/release.yml` pour créer le fichier `release.yml` dans le répertoire `.github`.
  ![Créer un fichier](/assets/images/help/releases/release-yml.png)
4. Dans le fichier, en utilisant les options de configuration ci-dessous, spécifiez dans le YAML les étiquettes et les auteurs de demande de tirage à exclure de cette version. Vous pouvez également créer des catégories et lister les étiquettes de demande de tirage qui doivent être ajoutées dans chacune d’elles.

### Options de configuration

| Paramètre | Description |
| :- | :- |
| `changelog.exclude.labels` | Liste d’étiquettes qui excluent une demande de tirage dans les notes de publication. |
| `changelog.exclude.authors` | Liste des descripteurs de connexion d’utilisateur ou de bot dont les demandes de tirage doivent être exclues des notes de publication. |
| `changelog.categories[*].title` | **Obligatoire.** Titre d’une catégorie de changements dans les notes de publication. |
| `changelog.categories[*].labels`| **Obligatoire.** Étiquettes qui qualifient une demande de tirage pour cette catégorie. Utilisez `*` comme « fourre-tout » pour les demandes de tirage qui ne correspondent à aucune des catégories précédentes. |
| `changelog.categories[*].exclude.labels` | Liste d’étiquettes qui excluent une demande de tirage dans cette catégorie. |
| `changelog.categories[*].exclude.authors` | Liste des descripteurs de connexion d’utilisateur ou de bot dont les demandes de tirage doivent être exclues de cette catégorie. |

### Exemple de configuration

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

## Pour aller plus loin

- « [Gestion des étiquettes](/issues/using-labels-and-milestones-to-track-work/managing-labels) » 
