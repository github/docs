---
title: À propos des fichiers CITATION
intro: Vous pouvez ajouter un fichier CITATION à votre référentiel pour aider les utilisateurs à citer correctement votre logiciel.
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 96e5e7308ba5d1877f231dcb454d7b797a63f221
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108397'
---
## À propos des fichiers CITATION

Vous pouvez ajouter un fichier `CITATION.cff` à la racine d’un dépôt pour informer d’autres utilisateurs de la façon dont vous souhaitez qu’ils citent votre travail. Le format du fichier de citation est un texte brut avec des informations de citation lisibles par l’utilisateur et par ordinateur.

Exemple de fichier `CITATION.cff` :

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
```

L’invite de citation GitHub sur votre dépôt affiche l’exemple de contenu `CITATION.cff` dans ces formats :

**APA**

```
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}
```
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github/linguist},
  version = {2.0.4},
  year = {2017}
}
```
{% endraw %}

Notez que l’exemple ci-dessus produit une citation _logicielle_ (autrement dit, type `@software` BibTeX plutôt que `@article`).

Pour plus d’informations, consultez le site web sur le [format de fichier de citation](https://citation-file-format.github.io/).

Lorsque vous ajoutez un fichier `CITATION.cff` à la branche par défaut de votre dépôt, il est automatiquement lié à partir de la page d’accueil du dépôt. Cela permet aux autres utilisateurs de citer facilement votre projet de logiciel en utilisant les informations que vous avez fournies.

![Lien de citation dans la page d’accueil du dépôt](/assets/images/help/repository/citation-link.png)

## Citer quelque chose d’autre que le logiciel

Si vous préférez que les informations de citation {% data variables.product.prodname_dotcom %} soient liées à une autre ressource, telle qu’un article de recherche, vous pouvez utiliser la substitution `preferred-citation` dans CFF avec les types suivants.

| Ressource | Type CFF | Type BibTeX | Annotation APA |
|----------|----------|-------------|----------------|
| Article de journal | `article` | `@article` | |
| Book | `book` | `@book` | |
| Livret (lié mais non publié) | `pamphlet` | `@booklet` | |
| Article/document de conférence | `conference-paper` | `@inproceedings` | [Document de conférence] |
| Compte-rendu de conférence | `conference`, `proceedings` | `@proceedings` | |
| Jeu de données | `data`, `database` | `@misc` | [Jeu de données] |
| Article de magazine | `magazine-article` | `@article` | |
| Manuel | `manual` | `@manual` | |
| Divers/générique/autre | `generic`, tout autre type CFF | `@misc` | |
| Article de journal | `newspaper-article` | `@article` | |
| Logiciel |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Logiciel informatique] |
| Rapport/rapport technique | `report` | `@techreport` | |
| Publication annulée | `unpublished` | `@unpublished` | |

Fichier CITATION.cff étendu décrivant le logiciel, mais liant à un article de recherche comme citation préférée :

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
preferred-citation:
  type: article
  authors:
  - family-names: "Lisa"
    given-names: "Mona"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  - family-names: "Bot"
    given-names: "Hew"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  doi: "10.0000/00000"
  journal: "Journal Title"
  month: 9
  start: 1 # First page number
  end: 10 # Last page number
  title: "My awesome research software"
  issue: 1
  volume: 1
  year: 2021
```

L’exemple de fichier `CITATION.cff` ci-dessus génère les sorties suivantes dans l’invite de citation GitHub :

**APA**

```
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}
```
@article{Lisa_My_awesome_research_2021,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.0000/00000},
  journal = {Journal Title},
  month = {9},
  number = {1},
  pages = {1--10},
  title = {{My awesome research software}},
  volume = {1},
  year = {2021}
}
```
{% endraw %}

## Citation d’un jeu de données

Si votre dépôt contient un jeu de données, vous pouvez définir `type: dataset` au niveau supérieur de votre fichier `CITATION.cff` pour produire une sortie de chaîne de citation de données dans l’invite de citation {% data variables.product.prodname_dotcom %}.

## Autres fichiers de citation

La fonctionnalité de citation GitHub détectera également un petit nombre de fichiers supplémentaires souvent utilisés par les communautés et les projets pour décrire comment ils aimeraient que leur travail soit cité.

GitHub établira un lien vers ces fichiers dans l’invite _Citer ce dépôt_, mais ne tentera pas de les analyser dans d’autres formats de citation.

```
# Note these are case-insensitive and must be in the root of the repository
CITATION
CITATIONS
CITATION.bib
CITATIONS.bib
CITATION.md
CITATIONS.md

# CITATION files for R packages are typically found at inst/CITATION
inst/CITATION
```

## Formats de citation

Nous prenons actuellement en charge les formats de fichiers APA et BibTex.

Vous recherchez d’autres formats de citation ? GitHub utilise une bibliothèque Ruby pour analyser les fichiers `CITATION.cff`. Vous pouvez demander des formats supplémentaires dans le dépôt [ruby-cff](https://github.com/citation-file-format/ruby-cff), ou contribuer vous-même.
