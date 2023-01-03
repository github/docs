---
title: Gestion de plusieurs comptes
intro: "Si vous utilisez une station de travail afin de contribuer à des projets pour plusieurs comptes sur {% data variables.product.product_location %}, vous pouvez modifier votre configuration\_Git afin de simplifier le processus de contribution."
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
ms.openlocfilehash: 3d1c31cb645d9f592121e955e07e8bf9ee473a82
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147687169'
---
## À propos de la gestion de plusieurs comptes

Dans certains cas, vous pouvez être amené à utiliser plusieurs comptes sur {% data variables.product.product_location %}. Par exemple, vous pouvez disposer d’un compte personnel pour les contributions open source, et d’un compte d’entreprise créé et géré par votre employeur. 

Vous ne pouvez pas utiliser votre {% data variables.product.prodname_managed_user %} pour contribuer à des projets publics sur {% data variables.product.product_location %}. Vous devez donc contribuer à ces ressources à l’aide de votre compte personnel. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}.{% endif %}

Si vous souhaitez utiliser une station de travail pour apporter des contributions en utilisant les deux comptes, vous pouvez simplifier la contribution avec Git en utilisant un mélange de protocoles pour accéder aux données des dépôts, ou en utilisant des informations d’identification pour chaque dépôt.

{% warning %}

**Avertissement** : Vous devez utiliser une station de travail pour apporter des contributions en utilisant deux comptes distincts. La gestion de plusieurs comptes peut augmenter le risque de fuite de code interne.

{% endwarning %}

Si vous n’êtes pas obligé d’utiliser un {% data variables.product.prodname_managed_user %}, {% data variables.product.company_short %} recommande d’utiliser un compte personnel pour tous vos travaux sur {% data variables.product.product_location %}. Avec un compte personnel, vous pouvez contribuer à une combinaison de projets personnels, open source et professionnels à l’aide d’une même identité. D’autres personnes peuvent inviter le compte à contribuer à des dépôts d’utilisateur ou à des dépôts appartenant à une organisation. En outre, le compte peut être membre de plusieurs organisations ou entreprises.

## Contribution à l’aide de deux comptes à l’aide des protocoles HTTPS et SSH

Si vous contribuez avec deux comptes à partir d’une station de travail, vous pouvez accéder aux dépôts en utilisant des informations d’identification et un protocole différents pour chaque compte. 

Git peut utiliser le protocole HTTPS ou SSH pour accéder aux données et les mettre à jour dans les dépôts sur {% data variables.product.product_location %}. Le protocole que vous utilisez pour cloner un dépôt détermine les informations d’identification que votre station de travail utilisera pour s’authentifier lorsque vous accéderez au dépôt. Avec cette approche de gestion des comptes, vous stockez les informations d’identification d’un compte à utiliser pour les connexions HTTPS, et vous chargez une clé SSH dans l’autre compte à utiliser pour les connexions SSH.

Vous trouverez les URL HTTPS et SSH pour le clonage d’un dépôt sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Clonage d’un dépôt](/repositories/creating-and-managing-repositories/cloning-a-repository) ».

Pour plus d’informations sur l’utilisation du SSH pour accéder aux dépôts sur {% data variables.product.product_name %}, consultez « [Connexion à {% data variables.product.prodname_dotcom %} avec SSH](/authentication/connecting-to-github-with-ssh) ».

## Contribution à plusieurs comptes à l’aide du protocole HTTPS et de jetons d’accès personnel

Si vous souhaitez utiliser le protocole HTTPS pour les deux comptes, vous pouvez utiliser différents jetons d’accès personnels (PAT) pour chaque compte en configurant Git de manière à stocker des informations d’identification différentes pour chaque dépôt.

{% mac %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %}
   - Si la sortie est `osxkeychain`, vous utilisez un trousseau macOS. Pour effacer les informations d’identification, entrez la commande suivante.

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Ouvrez l’interpréteur de commandes Git.
{% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %}
   - Si la sortie est `wincred`, vous utilisez le Gestionnaire d’informations d’identification Windows. Pour effacer les informations d’identification, entrez la commande suivante.

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endlinux %}

## Contribution à plusieurs comptes à l’aide du protocole SSH et de `GIT_SSH_COMMAND`

Si vous souhaitez utiliser le protocole SSH pour les deux comptes, vous pouvez utiliser différentes clés SSH pour chaque compte. Pour plus d’informations sur l’utilisation du protocole SSH, consultez « [Connexion à {% data variables.product.prodname_dotcom %} avec SSH](/authentication/connecting-to-github-with-ssh) ».

Si vous souhaitez utiliser une clé SSH différente pour chaque dépôt que vous clonez sur votre station de travail, vous devez écrire une fonction wrapper shell pour les opérations Git. La fonction doit exécuter les étapes suivantes.
1. Déterminez le nom complet du dépôt avec son propriétaire, à l’aide d’une commande comme `git config --get remote.origin.url`.
2. Choisissez la clé SSH appropriée pour l’authentification.
3. Modifiez `GIT_SSH_COMMAND` en conséquence. Pour plus d’informations sur `GIT_SSH_COMMAND`, consultez « [Variables d’environnement](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) » dans la documentation Git.

Par exemple, la commande suivante définit la variable d’environnement `GIT_SSH_COMMAND` pour spécifier une commande SSH qui utilise le fichier de clé privée situé dans **_PATH/TO/KEY/FILE_** pour l’authentification afin de cloner le dépôt nommé **_OWNER_**/**_REPOSITORY_** sur {% data variables.product.product_location %}.

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
