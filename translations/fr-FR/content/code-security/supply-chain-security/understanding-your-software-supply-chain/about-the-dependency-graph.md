---
title: À propos du graphe de dépendances
intro: Vous pouvez utiliser le graphe des dépendances pour identifier toutes les dépendances de votre projet. Le graphe des dépendances prend en charge une gamme d’écosystèmes de packages populaires.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106492'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## À propos du graphe de dépendances

{% data reusables.dependabot.about-the-dependency-graph %}

Quand vous poussez (push) vers {% data variables.product.product_name %} un commit qui change un manifeste ou un fichier de verrouillage pris en charge ou l’ajoute à la branche par défaut, le graphe de dépendances est automatiquement mis à jour.{% ifversion fpt or ghec %} En outre, le graphe est mis à jour quand une personne pousse une modification vers le dépôt de l’une de vos dépendances.{% endif %} Pour plus d’informations sur les fichiers manifestes et les écosystèmes pris en charge, consultez « [Écosystèmes de packages pris en charge](#supported-package-ecosystems) » ci-dessous.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Quand vous créez une demande de tirage (pull request) contenant des modifications apportées aux dépendances qui cible la branche par défaut, {% data variables.product.prodname_dotcom %} utilise le graphe de dépendances pour ajouter des révisions de dépendance à la demande de tirage. Celles-ci indiquent si les dépendances contiennent des vulnérabilités et, si c’est le cas, la version de la dépendance dans laquelle la vulnérabilité a été corrigée. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/about-dependency-review) ».

## Disponibilité du graphe de dépendances

{% ifversion fpt or ghec %}Le graphe de dépendances est disponible pour chaque dépôt public qui définit des dépendances dans un écosystème de packages pris en charge en utilisant un format de fichier pris en charge. Les administrateurs de dépôts peuvent également configurer le graphe de dépendances pour les référentiels privés. {% endif %}Pour plus d’informations {% ifversion ghes %}sur la configuration du graphe de dépendances{% endif %}, consultez « [Configuration du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph) ».

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Dépendances incluses

Le graphe des dépendances comprend toutes les dépendances d’un référentiel qui sont détaillées dans les manifestes et fichiers de verrouillage, ou leur équivalent, pour les écosystèmes pris en charge{% ifversion dependency-submission-api %}, ainsi que toutes les dépendances soumises à l’aide de l’API de soumission de dépendances (bêta){% endif %}. notamment :

- Dépendances directes, qui sont explicitement définies dans un manifeste ou un fichier de verrouillage{% ifversion dependency-submission-api %} ou qui ont été soumises à l’aide de l’API de soumission de dépendances (bêta){% endif %}
- Les dépendances indirectes de ces dépendances directes, également appelées dépendances transitives ou sous-dépendances

Le graphe de dépendances identifie les dépendances indirectes{% ifversion fpt or ghec %} explicitement à partir d’un fichier de verrouillage ou en vérifiant les dépendances de vos dépendances directes. Pour que le graphe soit le plus fiable possible, vous devez utiliser des fichiers de verrouillage (ou leur équivalent), car ils définissent exactement les versions des dépendances directes et indirectes que vous êtes en train d’utiliser. Si vous utilisez des fichiers de verrouillage, vous vous assurez également que tous les contributeurs au dépôt utilisent les mêmes versions, ce qui facilite le test et le débogage du code{% else %} à partir des fichiers de verrouillage{% endif %}.

Pour plus d’informations sur la façon dont {% data variables.product.product_name %} vous aide à comprendre les dépendances au sein de votre environnement, consultez « [À propos de la sécurité de la chaîne d’approvisionnement](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security) ».

{% ifversion fpt or ghec %}

## Éléments dépendants inclus

Dans le cas d’un dépôt public, seuls sont signalés les dépôts publics qui en dépendent ou qui dépendent des packages qu’il publie. Ces informations ne sont pas signalées pour les dépôts privés.{% endif %}

## Utilisation du graphe de dépendances

Vous pouvez utiliser le graphe de dépendances pour :

- Explorer les dépôts dont votre code dépend{% ifversion fpt or ghec %} et ceux qui en dépendent{% endif %}. Pour plus d’informations, consultez « [Exploration des dépendances d’un dépôt](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository) ». {% ifversion ghec %}
- Affichez un récapitulatif des dépendances utilisées dans les dépôts de votre organisation dans un tableau de bord unique. Pour plus d’informations, consultez « [Affichage des insights pour votre organisation](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights) ».{% endif %}
- Affichez et mettez à jour les dépendances vulnérables pour votre dépôt. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ».{% ifversion fpt or ghes or ghec %}
- Consultez des informations sur les dépendances vulnérables dans les demandes de tirage. Pour plus d’informations, consultez « [Examen des modifications des dépendances dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request) ».{% endif %}

## Écosystèmes de packages pris en charge

Les formats recommandés définissent explicitement les versions utilisées pour toutes les dépendances directes et indirectes. Si vous utilisez ces formats, votre graphe des dépendances est plus précis. Cela reflète également la configuration actuelle de la build et permet au graphe de dépendances de signaler les vulnérabilités dans les dépendances directes et indirectes.{% ifversion fpt or ghec %} Les dépendances indirectes déduites d’un fichier manifeste (ou équivalent) sont exclues des recherches de dépendances non sécurisées.{% endif %}

| Gestionnaire de package | Langages | Formats recommandés | Tous les formats pris en charge |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | {%- endif %} | Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` | | NuGet | Langages .NET (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` | {%- ifversion github-actions-in-dependency-graph %} | Workflows {% data variables.product.prodname_actions %}<sup>[†]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` | {%- endif %} | Modules Go | Go | `go.sum` | `go.mod`, `go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`<sup>[‡]</sup> | {%- ifversion dependency-graph-dart-support %} | pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` | {%- endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] {% data reusables.enterprise.3-5-missing-feature %} {% data variables.product.prodname_actions %} les workflows doivent se trouver dans le répertoire `.github/workflows/` d’un référentiel pour être identifiés comme des manifestes. Toutes les actions ou workflows référencés avec la syntaxe `jobs[*].steps[*].uses` ou `jobs.<job_id>.uses` sont analysés en tant que dépendances. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions) ».

{% endif %}

[‡] Si vous listez vos dépendances Python dans un fichier `setup.py`, il est possible que nous ne soyons pas en mesure d’analyser et de lister chaque dépendance dans votre projet.

{% ifversion github-actions-in-dependency-graph %} {% note %}

**Remarque :** Les dépendances de workflow {% data variables.product.prodname_actions %} sont affichées dans le graphe de dépendances à des fins d’information. Les alertes Dependabot ne sont pas prises en charge pour les workflows {% data variables.product.prodname_actions %}.

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}Vous pouvez utiliser l’API de soumission de dépendances (bêta) pour ajouter les dépendances du gestionnaire de package ou de l’écosystème de votre choix au graphe des dépendances, même si l’écosystème ne figure pas dans la liste des écosystèmes pris en charge ci-dessus. Le graphe des dépendances affiche les dépendances soumises regroupées par écosystème, mais séparément des dépendances analysées à partir du manifeste ou des fichiers de verrouillage. Vous ne recevrez des {% data variables.product.prodname_dependabot_alerts %} que pour les dépendances provenant de l’un des [écosystèmes pris en charge](https://github.com/github/advisory-database#supported-ecosystems) par la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations sur l’API de soumission de dépendances, consultez « [Utilisation de l’API de soumission de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) ».{% endif %}
## Pour aller plus loin

- « [Graphe de dépendances](https://en.wikipedia.org/wiki/Dependency_graph) » sur Wikipédia
- « [Exploration des dépendances d’un dépôt](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository) »
- « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »
- « [Résolution des problèmes de détection des dépendances vulnérables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies) »
