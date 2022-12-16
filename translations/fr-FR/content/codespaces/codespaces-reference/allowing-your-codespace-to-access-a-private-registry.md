---
title: Autoriser votre codespace à accéder à un registre privé
intro: 'Vous pouvez autoriser {% data variables.product.prodname_github_codespaces %} à accéder à des images conteneur ou à d’autres packages dans un registre privé.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193394'
---
## À propos des registres privés et {% data variables.product.prodname_github_codespaces %}

Un registre est un espace sécurisé pour stocker, gérer et récupérer des images conteneur ou d’autres packages. Il existe de nombreux exemples de registres, tels que : 
- {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}, Azure Container Registry et DockerHub pour les images conteneur
- {% data variables.product.prodname_npm_registry %} pour les packages Node.js.

Certains registres {% data variables.product.prodname_registry %}, notamment le {% data variables.product.prodname_container_registry %}, peuvent être configurés pour autoriser que les packages soient tirés de manière fluide dans {% data variables.product.prodname_github_codespaces %} lors de la création de codespaces, sans avoir à fournir d’informations d’identification d’authentification.

Pour accéder aux autres registres d’images conteneur, vous pouvez créer des secrets dans {% data variables.product.prodname_dotcom %} pour stocker les détails d’accès et permettre à {% data variables.product.prodname_github_codespaces %} d’accéder aux images stockées dans ce registre.

## Accès aux packages stockés dans les registres avec des autorisations granulaires

Les registres {% data variables.product.prodname_registry %} qui prennent en charge les autorisations granulaires, notamment le {% data variables.product.prodname_container_registry %}, offrent le moyen le plus simple pour {% data variables.product.prodname_github_codespaces %} de consommer des packages. Pour obtenir la liste des registres {% data variables.product.prodname_registry %} qui prennent en charge les autorisations granulaires et l’accès fluide aux {% data variables.product.prodname_github_codespaces %}, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages) ».

### Accès à un package publié dans le même dépôt que le codespace

Si vous publiez un package dans le même dépôt que celui dans lequel le codespace est lancé, vous pouvez automatiquement récupérer (fetch) ce package lors de la création du codespace. Vous n’avez pas à fournir d’informations d’identification supplémentaires, sauf si l’option **Hériter de l’accès du dépôt** n’a pas été sélectionnée lors de la publication du package.

#### Héritage de l’accès du dépôt à partir duquel un package a été publié

Par défaut, le package hérite du paramètre d’accès du dépôt à partir duquel il a été publié. Par exemple, si le dépôt est public, le package l’est également. Si le dépôt est privé, le package l’est également, mais est accessible à partir du dépôt.

L’option **Hériter de l’accès du dépôt** contrôle ce comportement. L’option **Hériter de l’accès du dépôt** est sélectionnée par défaut lors de la publication via {% data variables.product.prodname_actions %}, mais pas lors de la publication directement dans un registre avec un {% data variables.product.pat_generic %}.

Si l’option **Hériter de l’accès du dépôt** n’a pas été sélectionnée lors de la publication du package, vous pouvez ajouter manuellement le dépôt aux contrôles d’accès du package publié. Pour plus d’informations, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository) ».

### Accès à un package publié dans l’organisation dans laquelle un codespace sera lancé

Si vous souhaitez qu’un package soit accessible à tous les codespaces d’une organisation, nous vous recommandons de publier ce package avec une visibilité interne. Le package est ainsi visible par tous les codespaces de l’organisation, sauf si le dépôt à partir duquel le codespace est lancé est public.

Si le codespace est lancé à partir d'un dépôt public faisant référence à un package interne ou privé, vous devez autoriser manuellement le dépôt public à accéder au package interne. Cela permet d’éviter que le package interne ne soit accidentellement divulgué publiquement. Pour plus d’informations, consultez « [Garantie d’accès des codespaces à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) ».

### Accès à un package privé à partir d’un sous-ensemble de dépôts d’une organisation

Si vous souhaitez autoriser un sous-ensemble de dépôts d’une organisation à accéder à un package, ou autoriser l’accès à un package interne ou privé à partir d’un codespace lancé dans un dépôt public, vous pouvez ajouter manuellement des dépôts aux paramètres d’accès du package. Pour plus d’informations, consultez « [Garantie d’accès des codespaces à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) ».

### Publication d’un package à partir d’un codespace

L’accès transparent d’un codespace à un registre se limite à l’extraction de packages. Si vous souhaitez publier un package à partir d’un codespace, vous devez utiliser un {% data variables.product.pat_v1 %} avec l’étendue `write:packages`.

Nous vous recommandons de publier des packages via {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Publication d’images Docker](/actions/publishing-packages/publishing-docker-images) » et « [Publication de packages Node.js](/actions/publishing-packages/publishing-nodejs-packages) ».

## Accès aux images stockées dans d’autres registres

Vous pouvez définir des secrets pour permettre à {% data variables.product.prodname_github_codespaces %} d’accéder à des registres d’images conteneur autres que le {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}. Si vous accédez à une image conteneur à partir d’un registre qui ne prend pas en charge l’accès transparent, {% data variables.product.prodname_github_codespaces %} vérifie la présence de trois secrets définissant le nom du serveur, le nom de l’utilisateur et le {% data variables.product.pat_generic %} d’un registre. Si ces secrets sont trouvés, {% data variables.product.prodname_github_codespaces %} met à disposition le registre dans votre codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Vous pouvez stocker des secrets au niveau de l’utilisateur, du référentiel ou de l’organisation, ce qui vous permet de les partager en toute sécurité entre différents codespaces. Lorsque vous créez un ensemble de secrets pour un registre d’images privé, vous devez remplacer « <*> » dans le nom par un identificateur cohérent. Pour plus d’informations, consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) » et « [Gestion des secrets chiffrés de votre référentiel et de votre organisation pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces) ».

Si vous définissez les secrets au niveau de l’utilisateur ou de l’organisation, veillez à attribuer ces secrets au référentiel dans lequel vous créerez le codespace en choisissant une stratégie d’accès dans la liste déroulante.  

![Exemple de secret du registre d’images](/assets/images/help/codespaces/secret-repository-access.png)

### Exemples de secrets

Pour un registre d’images privé dans Azure, vous pouvez créer les secrets suivants :

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

Pour plus d’informations sur les registres d’images courants, consultez « [Serveurs de registre d’images courants](#common-image-registry-servers) ». Notez que l’accès à AWS Elastic Container Registry (ERC) est différent.

![Exemple de secret du registre d’images](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Une fois les secrets ajoutés, vous devrez peut-être arrêter, puis démarrer le codespace dans lequel vous vous trouvez pour permettre la transmission des nouvelles variables d’environnement au conteneur. Pour plus d’informations, consultez « [Suspension ou arrêt d’un codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace) ».

#### Accès à AWS Elastic Container Registry

Pour accéder à AWS Elastic Container Registry (AWS Elastic Container Registry), vous pouvez fournir un ID de clé d’accès AWS et une clé secrète pour permettre à {% data variables.product.prodname_dotcom %} de récupérer un jeton d’accès et se connecter en votre nom.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

Vous devez également vous assurer que vous disposez des autorisations AWS IAM qui conviennent pour procéder à l’échange d’informations d’identification (par exemple`sts:GetServiceBearerToken`) ainsi que l’opération de lecture ERC (`AmazonEC2ContainerRegistryFullAccess` ou `ReadOnlyAccess`).

Si vous ne souhaitez pas que GitHub procède à l’échange d’informations d’identification en votre nom, vous pouvez également fournir un jeton d’autorisation extrait via les API ou l’interface CLI AWS.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

La durée de ces jetons étant courte et ceux-ci devant être régulièrement actualisés, nous vous recommandons de fournir un ID de clé d’accès et un secret.

Bien que ces secrets puissent avoir n’importe quel nom, tant que le `*_CONTAINER_REGISTRY_SERVER` correspond à une URL ERC, nous vous recommandons d’utiliser `ECR_CONTAINER_REGISTRY_*`, sauf si vous traitez plusieurs registres ERC.

Pour plus d’informations, consultez la « [documentation sur l’authentification du registre privé](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html) » ECR AWS.

### Serveurs de registre d’images courants

Voici quelques-uns des serveurs de registre d’images courants :

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asie)

## Débogage de l’accès au registre d’images privé

Si vous avez des difficultés à extraire une image d’un registre d’images privé, vérifiez que vous pouvez exécuter `docker login -u <user> -p <password> <server>`, en utilisant les valeurs des secrets définis ci-dessus. Si la connexion échoue, vérifiez que les informations d’identification de connexion sont valides et que vous disposez des autorisations appropriées sur le serveur pour récupérer une image conteneur. Si la connexion réussit, assurez-vous que ces valeurs sont correctement copiées dans les secrets {% data variables.product.prodname_github_codespaces %} qui conviennent, au niveau de l’utilisateur, du référentiel ou de l’organisation, puis réessayez.
