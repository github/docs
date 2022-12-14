---
title: Création d’un script de hook de pré-réception
intro: Utilisez des scripts de hook de pré-réception pour créer des conditions d’acceptation ou de rejet d’une poussée (push) en fonction du contenu.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook scripts
ms.openlocfilehash: 3d01ba3d5d189e65cbd2b4589af9072571837944
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332351'
---
Vous pouvez voir des exemples de hooks de pré-réception pour {% data variables.product.prodname_ghe_server %} dans le [dépôt `github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

## Écriture d’un script de hook de pré-réception
Un script de hook de pré-réception s’exécute dans un environnement de hook de pré-réception sur {% data variables.product.product_location %}. Quand vous créez un script de hook de pré-réception, tenez compte des variables d’entrée, de sortie, d’état de sortie et d’environnement disponibles.

### Entrée (`stdin`)
Après une poussée (push) et avant la mise à jour de toute référence pour le dépôt distant, le processus `git-receive-pack` sur {% data variables.product.product_location %} appelle le script de hook de pré-réception. L’entrée standard pour le script, `stdin`, est une chaîne contenant une ligne pour chaque référence à mettre à jour. Chaque ligne contient l’ancien nom d’objet et le nouveau nom d’objet pour la référence ainsi que le nom complet de la référence.

```
<old-value> SP <new-value> SP <ref-name> LF
```

Cette chaîne représente les arguments suivants.

| Argument | Description     |
| :------------- | :------------- |
| `<old-value>` | Ancien nom d’objet stocké dans la référence.<br> Quand vous créez une référence, la valeur est de 40 zéros. |
| `<new-value>` | Nouveau nom d’objet à stocker dans la référence.<br> Quand vous supprimez une référence, la valeur est de 40 zéros. |
| `<ref-name>`  | Nom complet de la référence. |

Pour plus d’informations sur `git-receive-pack`, consultez « [git-receive-pack](https://git-scm.com/docs/git-receive-pack) » dans la documentation Git. Pour plus d’informations sur les références, consultez « [Références Git](https://git-scm.com/book/en/v2/Git-Internals-Git-References) » dans *Pro Git*.

### Sortie (`stdout`)

La sortie standard du script, `stdout`, est retournée au client. Toutes les instructions `echo` seront visibles par l’utilisateur sur la ligne de commande ou dans l’interface utilisateur.

### État de sortie

L’état de sortie d’un script de pré-réception détermine si la poussée sera acceptée.

| Valeur de l’état de sortie | Action |
| :- | :- |
| 0 | La poussée sera acceptée. |
| Différent de zéro | La poussée sera refusée. |

### Variables d'environnement

En plus de l’entrée standard de votre script de hook de pré-réception, `stdin`, {% data variables.product.prodname_ghe_server %} rend les variables suivantes disponibles dans l’environnement Bash pour l’exécution de votre script. Pour plus d’informations sur `stdin` pour votre script de hook de pré-réception, consultez « [Entrée (`stdin`)](#input-stdin) ».

Différentes variables d’environnement sont disponibles pour votre script de hook de pré-réception selon ce qui déclenche l’exécution du script.

- [Toujours disponible](#always-available)
- [Disponible pour les poussées à partir de l’interface web ou de l’API](#available-for-pushes-from-the-web-interface-or-api)
- [Disponible pour les fusions de demandes de tirage (pull request)](#available-for-pull-request-merges)
- [Disponible pour les poussées à l’aide de l’authentification SSH](#available-for-pushes-using-ssh-authentication)

#### Toujours disponible

Les variables suivantes sont toujours disponibles dans l’environnement de hook de pré-réception.

| Variable | Description | Valeur d'exemple |
| :- | :- | :- |
|  <pre>$GIT_DIR</pre> | Chemin du dépôt distant sur l’instance | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
|  <pre>$GIT_PUSH_OPTION_COUNT</pre> | Nombre d’options de poussée envoyées par le client avec `--push-option`. Pour plus d’informations, consultez « [git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt) » dans la documentation Git. | 1 |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | Où _N_ est un entier commençant à 0. Cette variable contient la chaîne d’options de poussée envoyée par le client. La première option envoyée est stockée dans `GIT_PUSH_OPTION_0`, la deuxième option envoyée est stockée dans `GIT_PUSH_OPTION_1` et ainsi de suite. Pour plus d’informations sur les options de poussée, consultez « [git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt) » dans la documentation Git. | abcd |{% ifversion ghes %}
|  <pre>$GIT_USER_AGENT</pre> | Chaîne d’agent utilisateur envoyée par le client Git qui a poussé les modifications | git/2.0.0{% endif %}
|  <pre>$GITHUB_REPO_NAME</pre> | Nom du dépôt mis à jour au format _NOM_/_PROPRIÉTAIRE_ | octo-org/hello-enterprise |
|  <pre>$GITHUB_REPO_PUBLIC</pre> | Booléen indiquant si le dépôt mis à jour est public | <ul><li>true : la visibilité du dépôt est publique</li><li>false : la visibilité du dépôt est privée ou interne</li></ul>
|  <pre>$GITHUB_USER_IP</pre> | Adresse IP du client à l’origine de la poussée | 192.0.2.1 |
|  <pre>$GITHUB_USER_LOGIN</pre> | Nom d’utilisateur du compte à l’origine de la poussée | octocat |

#### Disponible pour les poussées à partir de l’interface web ou de l’API

La variable `$GITHUB_VIA` est disponible dans l’environnement de hook de pré-réception quand la mise à jour de la référence qui déclenche le hook s’effectue par le biais de l’interface web ou de l’API pour {% data variables.product.prodname_ghe_server %}. La valeur décrit l’action qui a mis à jour la référence.

| Valeur | Action | Plus d’informations |
| :- | :- | :- |
| <pre>auto-merge deployment api</pre> | Fusion automatique de la branche de base par le biais d’un déploiement créé avec l’API | « [Créer un déploiement](/rest/reference/deployments#create-a-deployment) » dans la documentation de l’API REST |
| <pre>blob#save</pre> | Modification du contenu d’un fichier dans l’interface web | « [Modification de fichiers](/repositories/working-with-files/managing-files/editing-files) » |
| <pre>branch merge api</pre> | Fusion d’une branche par le biais de l’API | « [Fusionner une branche](/rest/reference/branches#merge-a-branch) » dans la documentation de l’API REST |
| <pre>branches page delete button</pre> | Suppression d’une branche dans l’interface web | « [Création et suppression de branches dans votre dépôt](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch) » |
| <pre>git refs create api</pre> | Création d’une référence par le biais de l’API | « [Base de données Git](/rest/reference/git#create-a-reference) » dans la documentation de l’API REST |
| <pre>git refs delete api</pre> | Suppression d’une référence par le biais de l’API | « [Base de données Git](/rest/reference/git#delete-a-reference) » dans la documentation de l’API REST |
| <pre>git refs update api</pre> | Mise à jour d’une référence par le biais de l’API | « [Base de données Git](/rest/reference/git#update-a-reference) » dans la documentation de l’API REST |
| <pre>git repo contents api</pre> | Modification du contenu d’un fichier par le biais de l’API | « [Créer ou mettre à jour le contenu d’un fichier](/rest/reference/repos#create-or-update-file-contents) » dans la documentation de l’API REST |
{%- ifversion ghes %} | `merge ` | Fusion d’une demande de tirage à l’aide de la fusion automatique | « [Fusion automatique d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) » | {%- endif %} | <pre>merge base into head</pre> | Mise à jour de la branche de rubrique à partir de la branche de base quand la branche de base nécessite des vérifications d’état strictes (avec **Mettre à jour la branche** dans une demande de tirage, par exemple) | « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging) » | | <pre>pull request branch delete button</pre> | Suppression d’une branche de rubrique d’une demande de tirage dans l’interface web | « [Suppression et restauration de branches dans une demande de tirage](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request) » | | <pre>pull request branch undo button</pre> | Restauration d’une branche de rubrique dans une demande de tirage dans l’interface web | « [Suppression et restauration de branches dans une demande de tirage](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch) » | | <pre>pull request merge api</pre> | Fusion d’une demande de tirage par le biais de l’API | « [Tirages](/rest/reference/pulls#merge-a-pull-request) » dans la documentation de l’API REST | | <pre>pull request merge button</pre> | Fusion d’une demande de tirage dans l’interface web | « [Fusion d’une demande de tirage](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github) » | | <pre>pull request revert button</pre> | Rétablissement d’une demande de tirage | « [Rétablissement d’une demande de tirage](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request) » | | <pre>releases delete button</pre> | Suppression d’une mise en production | « [Gestion des mises en production dans un dépôt](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release) » | | <pre>stafftools branch restore</pre> | Restauration d’une branche à partir du tableau de bord d’administrateur de site | « [Tableau de bord d’administrateur de site](/admin/configuration/site-admin-dashboard#repositories) » | | <pre>tag create api</pre> | Création d’une étiquette par le biais de l’API | « [Base de données Git](/rest/reference/git#create-a-tag-object) » dans la documentation de l’API REST | | <pre>slumlord (#<em>SHA</em>)</pre> | Commit par le biais de Subversion | « [Prise en charge des clients Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion) » | | <pre>web branch create</pre> | Création d’une branche par le biais de l’interface web | « [Création et suppression de branches dans votre dépôt](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch) » |

#### Disponible pour les fusions de demandes de tirage

Les variables suivantes sont disponibles dans l’environnement de hook de pré-réception quand la poussée qui déclenche le hook est due à la fusion d’une demande de tirage.

| Variable | Description | Valeur d'exemple |
| :- | :- | :- |
|  <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | Nom d’utilisateur du compte qui a créé la demande de tirage | octocat |
|  <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | Nom de la branche de rubrique de la demande de tirage au format `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
|  <pre>$GITHUB_PULL_REQUEST_BASE</pre> | Nom de la branche de base de la demande de tirage au format `USERNAME:BRANCH` | octocat:main |

#### Disponible pour les poussées à l’aide de l’authentification SSH

| Variable | Description | Valeur d'exemple |
| :- | :- | :- |
|  <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | Empreinte digitale de la clé publique pour l’utilisateur qui a poussé les modifications | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

## Définition des autorisations et poussée d’un hook de pré-réception sur {% data variables.product.prodname_ghe_server %}

Un script de hook de pré-réception est contenu dans un dépôt sur {% data variables.product.product_location %}. Un administrateur de site doit prendre en compte les autorisations du dépôt et veiller à ce que seuls les utilisateurs appropriés y aient accès.

Nous vous recommandons de centraliser les hooks dans un dépôt unique. Si le dépôt dans lequel sont centralisés les hooks est public, `README.md` peut être utilisé pour expliquer les applications de stratégie. En outre, les contributions peuvent être acceptées par le biais de demandes de tirage. Toutefois, les hooks de pré-réception ne peuvent être ajoutés qu’à partir de la branche par défaut. Pour un workflow de test, des duplications (fork) du dépôt avec une configuration doivent être utilisées.

1. Pour les utilisateurs Mac, vérifiez que les scripts ont des autorisations d’exécution :

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   Pour les utilisateurs Windows, vérifiez que les scripts ont des autorisations d’exécution :

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. Commitez et poussez sur le dépôt désigné pour les hooks de pré-réception sur {% data variables.product.product_location %}.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. [Créez le hook de pré-réception](/enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) sur l’instance {% data variables.product.prodname_ghe_server %}.

## Test des scripts pré-réception localement
Vous pouvez tester un script de hook de pré-réception localement avant de le créer ou de le mettre à jour sur {% data variables.product.product_location %}. Vous pouvez, par exemple, créer un environnement Docker local qui jouera le rôle de dépôt distant pouvant exécuter le hook de pré-réception.

{% data reusables.linux.ensure-docker %}

2. Créez un fichier `Dockerfile.dev` contenant :

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. Créez un script de pré-réception de test nommé `always_reject.sh`. Cet exemple de script rejette toutes les poussées, ce qui est utile pour verrouiller un dépôt :

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. Vérifiez que les scripts `always_reject.sh` ont des autorisations d’exécution :

   ```shell
   $ chmod +x always_reject.sh
   ```

5. À partir du répertoire contenant `Dockerfile.dev`, générez une image :

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. Exécutez un conteneur de données qui contient une clé SSH générée :

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. Copiez le hook de pré-réception de test `always_reject.sh` dans le conteneur de données :

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. Exécutez un conteneur d’applications qui exécute `sshd` et exécute le hook. Notez l’ID de conteneur retourné :

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. Copiez la clé SSH générée à partir du conteneur de données sur l’ordinateur local :

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. Modifiez le dépôt distant d’un dépôt de test et poussez sur le dépôt `test.git` dans le conteneur Docker. Cet exemple utilise `git@github.com:octocat/Hello-World.git`, mais vous pouvez utiliser n’importe quel dépôt. Cet exemple suppose que votre ordinateur local (127.0.0.1) lie le port 52311, mais vous pouvez utiliser une autre adresse IP si Docker s’exécute sur un ordinateur distant.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   Notez que la poussée a été rejetée après l’exécution du hook de pré-réception et l’écho de la sortie du script.

## Pour aller plus loin
 - « [Personnalisation de Git - Exemple de stratégie appliquée par Git](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy) » sur le *site web Pro Git*
