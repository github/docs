---
title: Résolution des problèmes liés aux vérifications de statut requises
intro: Vous pouvez rechercher les erreurs courantes et résoudre les problèmes liés aux vérifications d’état requises.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135805'
---
Si vous disposez d’une vérification et d’un statut portant le même nom, et sélectionnez ce nom comme vérification de statut requise, la vérification et le statut sont obligatoires. Pour plus d’informations, consultez « [Vérifications](/rest/reference/checks) ».

Une que vous activé les vérifications de statut requises, il se peut que votre branche doive être mise à jour avec la branche de base avant la fusion. Cela garantit que votre branche a été testée avec le code le plus récent de la branche de base. Si votre branche est obsolète, vous devez la fusionner avec la branche de base. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging) ».

{% note %}

**Remarque :** vous pouvez également mettre à jour votre branche avec la branche de base à l’aide d’un rebasage Git. Pour plus d’informations, consultez « [À propos du rebasage Git](/github/getting-started-with-github/about-git-rebase) ».

{% endnote %}

Vous ne pourrez pas envoyer (push) des modifications locales à une branche protégée tant que toutes les vérifications de statut requises n’auront pas abouti. Au lieu de cela, vous recevrez un message d’erreur similaire à celui-ci :

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Remarque :** les demandes de tirage à jour qui passent les vérifications de statut requises peuvent être fusionnées localement et envoyées (push) à la branche protégée. Cela peut être effectué sans vérification de statut sur la validation de fusion elle-même.

{% endnote %}

## Conflits entre la validation principale et la validation de fusion test

Parfois, les résultats des vérifications de statut pour la validation de fusion test et la validation principale sont contradictoires. Si la validation de fusion test a un statut, elle doit aboutir. Autrement, le statut de la validation principale doit passer la vérification avant que vous puissiez fusionner la branche. Pour plus d’informations sur les validations de fusion test, consultez « [Tirages](/rest/reference/pulls#get-a-pull-request) ».

![Branche avec des validations de fusion contradictoires](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Gestion ignorée mais vérifications requises

{% note %}

**Remarque :** si un workflow est ignoré en raison d’un [filtrage de chemin d’accès](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), d’un [filtrage de branche](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou d’un [message de validation](/actions/managing-workflow-runs/skipping-workflow-runs), les vérifications associées à ce workflow restent à l’état « En attente ». La fusion d’une demande de tirage nécessitant la réussite de ces vérifications sera bloquée.

Si un travail dans un workflow est ignoré en raison d’un paramètre conditionnel, il signale son statut comme « Réussite ». Pour plus d’informations, consultez [Ignorer les exécutions de flux de travail](/actions/managing-workflow-runs/skipping-workflow-runs) et [Utilisation de conditions pour contrôler l’exécution des travaux](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Exemple

L’exemple suivant montre un workflow nécessitant un statut d’accomplissement « Réussi » pour le travail `build`, mais le workflow est ignoré si la demande de tirage ne change aucun fichier dans le répertoire `scripts`.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

En raison du [filtrage de chemin d’accès](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), une demande de tirage qui modifie uniquement un fichier à la racine du dépôt ne déclenche pas ce workflow et sa fusion est bloquée. Vous devriez voir le statut suivant sur la demande de tirage :

![Vérification requise ignorée, mais affichée comme en attente](/assets/images/help/repository/PR-required-check-skipped.png)

Vous pouvez corriger cela en créant un workflow générique du même nom, qui retournera la valeur true dans tout cas similaire au workflow ci-dessous :

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
Désormais, les vérifications aboutiront chaque fois qu’une personne enverra une demande de tirage qui ne modifie pas les fichiers répertoriés sous `paths` le premier workflow.

![Une vérification ignorée aboutit en raison d’un workflow générique](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Remarques :**
* Assurez-vous que la clé `name` et le nom de travail requis dans les deux fichiers de workflow sont identiques. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions) ».
* L’exemple ci-dessus utilise {% data variables.product.prodname_actions %} mais cette solution de contournement s’applique également à d’autres fournisseurs de CI/CD qui s’intègrent avec {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Vérifications d’état nécessaires à partir de sources inattendues

Il est également possible qu’une branche protégée exige une vérification de statut d’une {% data variables.product.prodname_github_app %} spécifique. Si vous voyez un message similaire au suivant, vous devez vérifier que la vérification répertoriée dans la zone de fusion a été définie par l’application attendue.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
