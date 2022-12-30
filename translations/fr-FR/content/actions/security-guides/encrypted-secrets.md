---
title: Secrets chiffrés
intro: 'Les secrets chiffrés vous permettent de stocker des informations sensibles dans votre organisation{% ifversion fpt or ghes or ghec %}, référentiel ou environnements de référentiel{% else %} ou référentiel{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162798'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des secrets chiffrés

Les secrets sont des variables d’environnement chiffrées que vous créez dans une organisation, un dépôt ou un environnement de dépôt. Les secrets que vous créez sont disponibles pour être utilisés dans les workflows {% data variables.product.prodname_actions %}. {% data variables.product.prodname_dotcom %} utilise une [boîte scellée libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) pour garantir que les secrets sont chiffrés avant qu’ils n’atteignent {% data variables.product.prodname_dotcom %} et restent chiffrés jusqu’à ce que vous les utilisiez dans un workflow.

{% data reusables.actions.secrets-org-level-overview %}

Pour les secrets stockés au niveau de l’environnement, vous pouvez permettre aux réviseurs nécessaires de contrôler l’accès aux secrets. Un travail de workflow ne peut pas accéder aux secrets d’environnement tant que l’approbation n’est pas accordée par les réviseurs nécessaires.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**Remarque** : {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### Nommage de vos secrets

{% data reusables.codespaces.secrets-naming %}

  Par exemple, un secret créé au niveau de l’environnement doit avoir un nom unique dans cet environnement, un secret créé au niveau du dépôt doit avoir un nom unique dans ce dépôt, et un secret créé au niveau de l’organisation doit avoir un nom unique à ce niveau.

  {% data reusables.codespaces.secret-precedence %} De même, si une organisation, un dépôt et un environnement ont tous un secret portant le même nom, le secret au niveau de l’environnement est prioritaire.

Pour vous assurer que {% data variables.product.prodname_dotcom %} retire votre secret dans les journaux, évitez d’utiliser des données structurées comme valeurs de secrets. Par exemple, évitez de créer des secrets qui contiennent des objets blob JSON ou Git encodés.

### Accès à vos secrets

Pour rendre un secret disponible pour une action, vous devez définir le secret en tant que variable d’entrée ou d’environnement dans le fichier de workflow. Passez en revue le fichier README de l’action pour en savoir plus sur les entrées et variables d’environnement attendues par l’action. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv) ».

Vous pouvez utiliser et lire des secrets chiffrés dans un fichier de workflow si vous avez accès à la modification du fichier. Pour plus d’informations, consultez « [Autorisations d’accès sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github) ».

{% data reusables.actions.secrets-redaction-warning %}

Les secrets de l’organisation et du dépôt sont lus quand une exécution de workflow est mise en file d’attente, et les secrets de l’environnement sont lus quand un travail référençant l’environnement démarre.

Vous pouvez également gérer des secrets à l’aide de l’API REST. Pour plus d’informations, consultez « [Secrets](/rest/reference/actions#secrets) ».

### Limitation des autorisations d’informations d’identification

Lors de la génération d’informations d’identification, nous vous recommandons d’accorder les autorisations minimales possibles. Par exemple, au lieu d’utiliser des informations d’identification personnelles, utilisez des [clés de déploiement](/developers/overview/managing-deploy-keys#deploy-keys) ou un compte de service. Envisagez d’accorder des autorisations en lecture seule si cela suffit et limitez l’accès autant que possible. Lors de la génération d’un {% data variables.product.pat_v1 %}, sélectionnez le moins d’étendues nécessaires.{% ifversion pat-v2 %} Lors de la génération d’un {% data variables.product.pat_v2 %}, sélectionnez l’accès minimal au référentiel requis.{% endif %}

{% note %}

**Remarque :** Vous pouvez utiliser l’API REST pour gérer les secrets. Pour plus d’informations, consultez « [API des secrets {% data variables.product.prodname_actions %}](/rest/reference/actions#secrets) ».

{% endnote %}

## Création de secrets chiffrés pour un dépôt

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. Cliquez sur **Nouveau secret de dépôt**.
1. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
1. Entrez la valeur de votre secret.
1. Cliquez sur **Ajouter un secret**.

Si votre dépôt possède des secrets d’environnement ou peut accéder aux secrets de l’organisation parente, ces secrets sont également listés dans cette page.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour ajouter un secret de dépôt, utilisez la sous-commande `gh secret set`. Remplacez `secret-name` par le nom de votre secret.

```shell
gh secret set SECRET_NAME
```

L’interface CLI vous invite à entrer une valeur secrète. Vous pouvez également lire la valeur du secret à partir d’un fichier.

```shell
gh secret set SECRET_NAME < secret.txt
```

Pour répertorier tous les secrets du dépôt, utilisez la sous-commande `gh secret list`.

{% endcli %}

## Création de secrets chiffrés pour un environnement

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Cliquez sur l’environnement auquel vous souhaitez ajouter un secret.
2. Sous **Secrets d’environnement**, cliquez sur **Ajouter un secret**.
3. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
4. Entrez la valeur de votre secret.
5. Cliquez sur **Ajouter un secret**.

{% endwebui %}

{% cli %}

Pour ajouter un secret pour un environnement, utilisez la sous-commande `gh secret set` avec l’indicateur `--env` ou `-e` suivi du nom de l’environnement.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

Pour répertorier tous les secrets pour un environnement, utilisez la sous-commande `gh secret list` avec l’indicateur `--env` ou `-e` suivi du nom de l’environnement.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Création de secrets chiffrés pour une organisation

Lors de la création d’un secret dans une organisation, vous pouvez utiliser une stratégie pour limiter les dépôts qui peuvent accéder à ce secret. Par exemple, vous pouvez accorder l’accès à tous les dépôts, ou limiter l’accès aux seuls dépôts privés ou à une liste spécifiée de dépôts.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Cliquez sur **Nouveau secret d’organisation**.
1. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
1. Entrez la **valeur** de votre secret.
1. Dans la liste déroulante **Accès au dépôt**, choisissez une stratégie d’accès.
1. Cliquez sur **Ajouter un secret**.

{% endwebui %}

{% cli %}

{% note %}

**Remarque :** Par défaut, {% data variables.product.prodname_cli %} s’authentifie auprès des étendues `repo` et `read:org`. Pour gérer les secrets de l’organisation, vous devez également autoriser l’étendue `admin:org`.

```
gh auth login --scopes "admin:org"
```

{% endnote %}

Pour ajouter un secret pour une organisation, utilisez la sous-commande `gh secret set` avec l’indicateur `--org` ou `-o` suivi du nom de l’organisation.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

Par défaut, le secret est uniquement disponible pour les dépôts privés. Pour spécifier que le secret doit être disponible pour tous les dépôts au sein de l’organisation, utilisez l’indicateur `--visibility` ou `-v`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

Pour spécifier que le secret doit être disponible pour les dépôts sélectionnés au sein de l’organisation, utilisez l’indicateur `--repos` ou `-r`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

Pour répertorier tous les secrets pour une organisation, utilisez la sous-commande `gh secret list` avec l’indicateur `--org` ou `-o` suivi du nom de l’organisation.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Examen de l’accès aux secrets au niveau de l’organisation

Vous pouvez vérifier quelles stratégies d’accès sont appliquées à un secret dans votre organisation.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. La liste des secrets inclut toutes les autorisations et stratégies configurées. Par exemple : ![Liste des secrets](/assets/images/help/settings/actions-org-secrets-list.png)
1. Pour plus d’informations sur les autorisations configurées pour chaque secret, cliquez sur **Mettre à jour**.

## Utilisation de secrets chiffrés dans un workflow

{% note %}

**Remarques :**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* Les secrets ne sont pas transmis automatiquement aux workflows réutilisables. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow) ».

{% endif %}

{% endnote %}

Pour fournir une action avec un secret en tant que variable d’entrée ou d’environnement, vous pouvez utiliser le contexte `secrets` pour accéder aux secrets que vous avez créés dans votre dépôt. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts) » et « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) ».

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

Les secrets ne peuvent pas être directement référencés dans les conditions `if:`. Au lieu de cela, envisagez de définir des secrets en tant que variables d’environnement au niveau du travail, puis de référencer les variables d’environnement pour exécuter des étapes de manière conditionnelle dans le travail. Pour plus d’informations, consultez « [Disponibilité du contexte](/actions/learn-github-actions/contexts#context-availability) » et [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Si un secret n’a pas été défini, la valeur de retour d’une expression référençant le secret (comme {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} dans l’exemple) est une chaîne vide.

Évitez de passer des secrets entre les processus de la ligne de commande, dans la mesure du possible. Les processus de ligne de commande peuvent être visibles par d’autres utilisateurs (à l’aide de la commande `ps`) ou capturés par des [événements d’audit de sécurité](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). Pour protéger les secrets, envisagez d’utiliser des variables d’environnement, `STDIN` ou d’autres mécanismes pris en charge par le processus cible.

Si vous devez passer des secrets dans une ligne de commande, placez-les entre guillemets conformément aux règles appropriées. Les secrets contiennent souvent des caractères spéciaux susceptibles d’affecter involontairement votre environnement. Pour placer ces caractères spéciaux dans une séquence d’échappement, utilisez des guillemets avec vos variables d’environnement. Par exemple :

### Exemple d’utilisation de Bash

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

### Exemple d’utilisation de PowerShell

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

### Exemple d’utilisation de Cmd.exe

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

## Limites pour les secrets

Vous pouvez stocker jusqu’à 1 000 secrets d’organisation, 100 secrets de dépôt et 100 secrets d’environnement.

Un workflow créé dans un dépôt peut accéder au nombre de secrets suivant :

* Les 100 secrets du dépôt.
* Si le dépôt a accès à plus de 100 secrets d’organisation, le workflow ne peut utiliser que les 100 premiers secrets d’organisation (triés par ordre alphabétique par nom de secret).
* Les 100 secrets d’environnement.

La taille des secrets est limitée à 64 Ko. Pour stocker des secrets plus volumineux, consultez la solution de contournement « [Stockage de secrets volumineux](#storing-large-secrets) » ci-dessous.

### Stockage de secrets volumineux

Pour utiliser des secrets avec une taille supérieure à 64 Ko, vous pouvez utiliser une solution de contournement pour stocker les secrets chiffrés dans votre référentiel et enregistrer la phrase secrète de déchiffrement sous la forme d’un secret sur {% data variables.product.prodname_dotcom %}. Par exemple, vous pouvez utiliser `gpg` pour chiffrer un fichier contenant votre secret localement avant de vérifier le fichier chiffré dans votre référentiel sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html) ».

{% warning %}

**Avertissement** : veillez à ce que vos secrets ne soient pas imprimés lorsque votre workflow s’exécute. Lorsque vous utilisez cette solution de contournement, {% data variables.product.prodname_dotcom %} ne retire pas les secrets imprimés dans les journaux.

{% endwarning %}

1. Exécutez la commande suivante à partir de votre terminal pour chiffrer le fichier contenant votre secret avec `gpg` et l’algorithme de chiffrement AES256. Dans cet exemple, `my_secret.json` est le fichier contenant le secret.

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. Vous serez invité à entrer une phrase secrète. Mémorisez la phrase secrète, car vous devrez créer un secret sur {% data variables.product.prodname_dotcom %} qui utilise la phrase secrète comme valeur.

1. Créez un secret qui contient la phrase secrète. Par exemple, créez un secret avec le nom `LARGE_SECRET_PASSPHRASE` et définissez la valeur du secret sur la phrase secrète utilisée à l’étape ci-dessus.

1. Copiez votre fichier chiffré sur un chemin d’accès dans votre référentiel et validez-le. Dans cet exemple, le fichier chiffré est `my_secret.json.gpg`.

   {% warning %}

   **Avertissement** : veillez à copier le fichier chiffré `my_secret.json.gpg` se terminant par l’extension de fichier `.gpg` et **non** le fichier non chiffré `my_secret.json`.

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. Créez un script d’interpréteur de commandes dans votre référentiel pour déchiffrer le fichier secret. Dans cet exemple, le script est nommé `decrypt_secret.sh`.

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. Vérifiez que votre script shell est exécutable avant de l’archiver dans votre dépôt.

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. Dans votre workflow {% data variables.product.prodname_actions %}, utilisez un `step` pour appeler le script d’interpréteur de commandes et déchiffrer le secret. Pour avoir une copie de votre dépôt dans l’environnement dans lequel votre workflow s’exécute, vous devez utiliser l’action [`actions/checkout`](https://github.com/actions/checkout). Référencez votre script shell à l’aide de la commande `run` relative à la racine de votre dépôt.

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Stockage d’objets blob binaires Base64 en tant que secrets

Vous pouvez utiliser l’encodage Base64 pour stocker de petits objets blob binaires en tant que secrets. Vous pouvez ensuite référencer le secret dans votre workflow et le décoder pour une utilisation sur l’exécuteur. Pour connaître les limites de taille, consultez [« Limites pour les secrets ».](/actions/security-guides/encrypted-secrets#limits-for-secrets)

{% note %}

**Remarque** : Notez que Base64 convertit uniquement le binaire en texte et n’est pas un substitut pour le chiffrement réel.

{% endnote %}

1. Utilisez `base64` pour encoder votre fichier en une chaîne Base64. Par exemple :

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Créez un secret qui contient la chaîne Base64. Par exemple :

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. Pour accéder à la chaîne Base64 à partir de votre exécuteur, dirigez le secret vers `base64 --decode`.  Par exemple : 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
