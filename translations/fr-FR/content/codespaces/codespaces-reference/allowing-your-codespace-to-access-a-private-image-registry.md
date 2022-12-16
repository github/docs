---
title: Autoriser votre codespace à accéder à un registre d’images privé
intro: Vous pouvez utiliser des secrets pour autoriser {% data variables.product.prodname_github_codespaces %} à accéder à un registre d’images privées
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
shortTitle: Private image registry
ms.openlocfilehash: c11cfe0179856caf17f30ac32830ee1485defa3c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159204"
---
## À propos des registres d’images privé et {% data variables.product.prodname_github_codespaces %}

Un registre est un espace sécurisé destiné au stockage, à la gestion et à l’extraction d’images conteneur privées. Il permet de stocker une ou plusieurs images. Il existe de nombreux exemples de registres, parmi lesquels{% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Azure Container Registry ou DockerHub.

{% data variables.packages.prodname_ghcr_and_npm_registry %} peut être configuré pour permettre de tirer (pull) les images conteneur de manière fluide dans {% data variables.product.prodname_github_codespaces %} lors de la création de codespaces, sans devoir fournir d’informations d’identification d’authentification. Pour les autres registres d’images, vous devez créer des secrets dans {% data variables.product.prodname_dotcom %} pour stocker les détails d’accès et permettre à {% data variables.product.prodname_github_codespaces %} d’accéder aux images stockées dans ce registre.

## Accès aux images stockées dans {% data variables.packages.prodname_ghcr_and_npm_registry %}

{% data variables.packages.prodname_ghcr_and_npm_registry %} constitue le moyen le plus simple permettant à {% data variables.product.prodname_github_codespaces %} de consommer des images conteneur de développement.

Pour plus d’informations, consultez « [Utilisation du registre de conteneurs](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) » et « [Utilisation du registre npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) ».

### Accès à une image publiée dans le même référentiel que le codespace

Si vous publiez une image conteneur sur le {% data variables.packages.prodname_ghcr_or_npm_registry %} dans le même référentiel que celui dans lequel le codespace est lancé, vous pouvez automatiquement récupérer (fetch) cette image lors de la création du codespace. Vous n’avez pas à fournir d’informations d’identification supplémentaires, sauf si l’option **Hériter l’accès du référentiel** n’a pas été sélectionnée lors de la publication de l’image conteneur.

#### Héritage de l’accès du référentiel à partir duquel une image a été publiée

Par défaut, quand vous publiez une image conteneur sur le {% data variables.packages.prodname_ghcr_or_npm_registry %}, l’image hérite du paramètre d’accès du référentiel à partir duquel l’image a été publiée. Par exemple, si le référentiel est public, l’image est également publique. Si le référentiel est privé, l’image est également privée, mais reste accessible à partir du référentiel.

L’option **Hériter l’accès du référentiel** contrôle ce comportement. L’option **Hériter de l’accès à partir du référentiel** est sélectionnée par défaut lors de la publication via {% data variables.product.prodname_actions %}, mais pas lors de la publication directement dans le {% data variables.packages.prodname_ghcr_or_npm_registry %} à l’aide d’un {% data variables.product.pat_generic %}.

Si l’option **Hériter de l’accès à partir du dépôt** n’a pas été sélectionnée lors de la publication de l’image, vous pouvez ajouter manuellement le référentiel aux contrôles d’accès de l’image conteneur publiée. Pour plus d’informations, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository) ».

### Accès à une image publiée dans l’organisation dans laquelle un codespace sera lancé

Si vous souhaitez qu’une image conteneur soit accessible à tous les codespaces d’une organisation, nous vous recommandons de publier cette image conteneur avec une visibilité interne. L’image est ainsi visible par tous les codespaces de l’organisation, sauf si le référentiel à partir duquel le codespace est lancé est public.

Si le codespace est lancé à partir d'un référentiel public faisant référence à une image interne ou privée, vous devez autoriser manuellement le référentiel public à accéder à l'image de conteneur interne. Cela permet d’éviter que l'image interne ne soit accidentellement divulguée publiquement. Pour plus d’informations, consultez « [Garantie d’accès des codespaces à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) ».

### Accès à un conteneur privé à partir d’un sous-ensemble de référentiels dans une organisation

Si vous souhaitez autoriser un sous-ensemble de référentiels d'une organisation à accéder à une image conteneur, ou autoriser l'accès à une image interne ou privée à partir d'un codespace lancé dans un référentiel public, vous pouvez ajouter manuellement des référentiels aux paramètres d'accès d'une <span class="x x-first x-last">image</span> conteneur. Pour plus d’informations, consultez « [Garantie d’accès des codespaces à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last"></span> ».

### Publication d’une image conteneur à partir d’un codespace

L’accès fluide d’un codespace vers le {% data variables.packages.prodname_ghcr_or_npm_registry %} est limité à l’extraction d’images conteneur. Si vous souhaitez publier une image conteneur à partir d’un codespace, vous devez utiliser un {% data variables.product.pat_v1 %} avec l’étendue `write:packages`.

Nous vous recommandons de publier des images via {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Publication d’images Docker](/actions/publishing-packages/publishing-docker-images) » et « [Publication de packages Node.js](/actions/publishing-packages/publishing-nodejs-packages) ».

## Accès aux images stockées dans d’autres registres de conteneurs

Si vous accédez à une image conteneur à partir d’un registre autre que le {% data variables.packages.prodname_ghcr_or_npm_registry %}, {% data variables.product.prodname_github_codespaces %} vérifie la présence de trois secrets définissant le nom du serveur, le nom de l’utilisateur et {% data variables.product.pat_generic %} pour un registre de conteneurs. Si ces secrets sont trouvés, {% data variables.product.prodname_github_codespaces %} met à disposition le registre dans votre codespace.

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
