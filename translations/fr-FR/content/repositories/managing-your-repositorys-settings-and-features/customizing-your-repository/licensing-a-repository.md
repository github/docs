---
title: Gestion des licences d’un référentiel
intro: 'Les dépôts publics sur GitHub sont souvent utilisés pour partager un logiciel open source. Pour que votre dépôt soit réellement open source, vous devez gérer ses licences afin que d’autres personnes soient libres d’utiliser, de changer et de distribuer le logiciel.'
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f49dad5c20909647b1d7da7bb44a80a771337966
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881795'
---
## Choix de la licence appropriée

Nous avons créé [choosealicense.com](https://choosealicense.com), pour vous aider à comprendre comment choisir une licence pour votre code. Une licence logicielle indique aux autres ce qu'ils peuvent et ne peuvent pas faire avec votre code source. Il est donc important de prendre une décision en connaissance de cause.

Vous n’êtes pas obligé de choisir une licence. Toutefois, sans licence, les lois sur les droits d'auteur s'appliquent par défaut, ce qui signifie que vous conservez tous les droits sur votre code source et que personne ne peut reproduire, distribuer ou créer des œuvres dérivées de votre travail. Si vous créez un projet open source, nous vous encourageons vivement à y inclure une licence open source. Le [Guide open source](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) fournit des conseils supplémentaires sur le choix de la licence appropriée pour votre projet.

{% note %}

**Remarque :** si vous publiez votre code source dans un référentiel public sur {% data variables.product.product_name %}, {% ifversion fpt or ghec %}conformément aux [Conditions d’utilisation du service](/free-pro-team@latest/github/site-policy/github-terms-of-service), {% endif %}, les utilisateurs de {% data variables.product.product_location %} sont autorisés à afficher et à dupliquer votre référentiel. Si vous avez déjà créé un référentiel et que vous ne souhaitez plus que d’autres utilisateurs y aient accès, vous pouvez rendre le référentiel privé. Lorsque vous rendez un référentiel privé, les duplications existantes et copies locales créées par d’autres utilisateurs existent toujours. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/github/administering-a-repository/setting-repository-visibility) ».

{% endnote %}

## Déterminer l’emplacement de votre licence

La plupart des personnes placent leur texte de licence dans un fichier nommé `LICENSE.txt` (ou `LICENSE.md` ou `LICENSE.rst`) à la racine du référentiel ; [voici un exemple de Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Certains projets incluent des informations sur leur licence dans leur fichier README. Par exemple, le fichier README d’un projet peut inclure une remarque indiquant « Ce projet est concédé sous licence selon les termes de la licence MIT ».

En guise de bonne pratique, nous vous encourageons à inclure le fichier de licence avec votre projet.

## Recherche dans GitHub par type de licence

Vous pouvez filtrer les référentiels en fonction de leur licence ou famille de licences à l’aide du qualificateur `license` et du mot clé de licence exact :

Licence | Mot clé de licence
---  | ---
| Academic Free License v3.0 | `afl-3.0` |
| Licence Apache 2.0 | `apache-2.0` |
| Licence Artistic 2.0 | `artistic-2.0` |
| Licence logicielle Boost 1.0 | `bsl-1.0` |
| Licence BSD « simplifiée » à 2 clauses | `bsd-2-clause` |
| Licence BSD « nouvelle» ou «révisée» à 3 clauses | `bsd-3-clause` |
| Licence BSD Clear à 3 clauses | `bsd-3-clause-clear` |
| Famille de licences Creative Commons | `cc` |
| Creative Commons Zero v1.0 Universal | `cc0-1.0` |
| Creative Commons Attribution 4.0 | `cc-by-4.0` |
| Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
| Do What The F*ck You Want To Public License | `wtfpl` |
| Educational Community License v2.0 | `ecl-2.0` |
| Eclipse Public License 1.0 | `epl-1.0` |
| Eclipse Public License 2.0 | `epl-2.0` |
| Licence publique de l’Union européenne 1.1 | `eupl-1.1` |
| GNU Affero General Public License v3.0 | `agpl-3.0` |
| Famille de licences publiques générales GNU | `gpl` |
| Licence publique générale GNU v2.0 | `gpl-2.0` |
| Licence publique générale GNU v3.0 | `gpl-3.0` |
| Famille de licences publiques générales limitées GNU | `lgpl` |
| Licence publique générale limitée GNU v2.1 | `lgpl-2.1` |
| Licence publique générale limitée GNU v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| LaTeX Project Public License v1.3c | `lppl-1.3c` |
| Microsoft Public License | `ms-pl` |
| MIT | `mit` |
| Mozilla Public License 2.0 | `mpl-2.0` |
| Open Software License 3.0 | `osl-3.0` |
| PostgreSQL License | `postgresql` |
| SIL Open Font License 1.1 | `ofl-1.1` |
| Licence open source Université de l’Illinois/NCSA | `ncsa` |
| Unlicense | `unlicense` |
| zLib License | `zlib` |

Lorsque vous effectuez une recherche par famille de licences, vos résultats incluent toutes les licences de cette famille. Par exemple, lorsque vous utilisez la requête `license:gpl`, vos résultats incluent des référentiels sous licence publique générale GNU v2.0 et sous licence publique générale GNU v3.0. Pour plus d’informations, consultez « [Recherche de dépôts](/search-github/searching-on-github/searching-for-repositories/#search-by-license) ».

## Détection d’une licence

[Le titulaire de licence open source Ruby gem](https://github.com/licensee/licensee) compare le fichier *LICENCE* du référentiel à une courte liste de licences connues. Le titulaire de licence fournit également l’[API Licences](/rest/reference/licenses) et [nous donne des informations sur la façon dont les référentiels sur {% data variables.product.product_name %} sont concédés sous licence](https://github.com/blog/1964-open-source-license-usage-on-github-com). Si votre référentiel utilise une licence non répertoriée sur le [site web Choisir une licence](https://choosealicense.com/appendix/), vous pouvez [demander à ce que cette licence soit incluse](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Si votre dépôt utilise une licence répertoriée sur le site web Choisir une licence et qu'elle ne s'affiche pas clairement en haut de la page du référentiel, il se peut qu'il contienne plusieurs licences ou une autre complexité. Pour que votre licence soit détectée, simplifiez votre fichier *LICENCE* et notez la complexité ailleurs, comme dans le fichier *README* de votre référentiel.

## Application d’une licence à un référentiel avec une licence existante

Le sélecteur de licences est uniquement disponible lorsque vous créez un projet sur GitHub. Vous pouvez ajouter manuellement une licence à l’aide du navigateur. Pour plus d’informations sur l’ajout d’une licence à un référentiel, consultez « [Ajout d’une licence à un référentiel](/articles/adding-a-license-to-a-repository) ».

![Capture d’écran du sélecteur de licences sur GitHub.com](/assets/images/help/repository/repository-license-picker.png)

## Clause d'exclusion de responsabilité

L'objectif des efforts de GitHub en matière de licences open source est de fournir un point de départ pour vous aider à faire un choix éclairé. GitHub affiche les informations relatives aux licences pour aider les utilisateurs à obtenir des informations sur les licences open source et les projets qui les utilisent. Nous espérons que cela vous aidera, mais gardez à l’esprit que nous ne sommes pas des avocats et que nous faisons des erreurs comme tout le monde. Pour cette raison, GitHub fournit les informations sur une base « en l’état » et n’offre aucune garantie concernant les informations ou licences fournies sur ou par son intermédiaire, et exclut la responsabilité pour tous dommages résultant de l’utilisation des informations relatives aux licences. Si vous avez des questions concernant la bonne licence pour votre code ou toute autre question juridique s'y rapportant, il est toujours préférable de consulter un professionnel.

## Pour aller plus loin

- Section des Guides open source « [Aspect juridique de l’open source](https://opensource.guide/legal/) » {% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
