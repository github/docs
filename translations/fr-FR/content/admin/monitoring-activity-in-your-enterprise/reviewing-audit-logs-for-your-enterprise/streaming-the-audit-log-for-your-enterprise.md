---
title: Streaming de journaux d’audit pour votre entreprise
intro: 'Vous pouvez envoyer en streaming les données d’événements d’audit et Git à partir de {% data variables.product.prodname_dotcom %} vers un système de gestion des données externe.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: 81eb88f760016390a321798589e7994542c9f312
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710338'
---
{% ifversion ghes %} {% note %}

**Remarque :** Le streaming de journaux d’audit est actuellement en version bêta pour {% data variables.product.product_name %} et est susceptible d’être modifié.

{% endnote %} {% endif %}

## À propos du streaming de journaux d’audit

Pour protéger votre propriété intellectuelle et assurer la conformité de votre organisation, vous pouvez utiliser le streaming pour conserver des copies des données de vos journaux d’audit et superviser : {% data reusables.audit_log.audited-data-list %}

Le streaming des données d’audit offre notamment les avantages suivants :

* **Exploration des données**. Vous pouvez examiner les événements envoyés en streaming à l’aide de votre outil préféré pour interroger de grandes quantités de données. Le flux contient à la fois les événements d’audit et les événements Git pour l’ensemble du compte d’entreprise.{% ifversion pause-audit-log-stream %}
* **Continuité des données**. Vous pouvez suspendre le flux jusqu’à sept jours sans perdre de données d’audit.{% endif %}
* **Conservation des données**. Vous pouvez conserver les données exportées des journaux d’audit et des événements Git tant que vous en avez besoin.

Les propriétaires d’entreprise peuvent configurer{% ifversion pause-audit-log-stream %}, suspendre,{% endif %} ou supprimer un flux à tout moment. Le flux exporte les données d’audit et d’événements Git pour toutes les organisations de votre entreprise.

## Configuration du streaming de journaux d’audit

Vous configurez le flux de journaux d’audit sur {% data variables.product.product_name %} en suivant les instructions de votre fournisseur.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Stockage Blob Azure](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Configuration du streaming vers Amazon S3

{% ifversion streaming-oidc-s3 %} Vous pouvez configurer le streaming vers S3 avec des clés d’accès ou, pour éviter de stocker des secrets à longue durée de vie dans {% data variables.product.product_name %}, avec OpenID Connect (OIDC).

- [Configuration de la diffusion en continu sur S3 avec des clés d’accès](#setting-up-streaming-to-s3-with-access-keys)
- [Configuration de la diffusion en continu sur S3 avec OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Désactivation du streaming vers S3 avec OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### Configuration de la diffusion en continu sur S3 avec des clés d’accès
{% endif %}

Pour envoyer des journaux d’audit vers un point de terminaison S3 d’Amazon en streaming, vous devez disposer d’un compartiment et de clés d’accès. Pour plus d’informations, consultez [Création, configuration et utilisation des compartiments Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) dans la documentation AWS. Veillez à bloquer l’accès public au compartiment pour protéger les informations de vos journaux d’audit. 

Pour configurer l’envoi en streaming de journaux d’audit à partir de {% data variables.product.prodname_dotcom %} vous aurez besoin des éléments suivants :
* Le nom de votre compartiment Amazon S3
* Votre ID de clé d’accès AWS
* Votre clé secrète AWS

Pour obtenir des informations sur la création de votre ID de clé d’accès et de votre clé secrète et sur la manière d’y accéder, consultez [Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) (Compréhension et obtention de vos informations d’identification AWS) dans la documentation AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. Sous « Authentification », cliquez sur **Clés d’accès**.

   ![Capture d’écran des options d’authentification pour la diffusion en continu vers Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Configurez les paramètres de flux.

   - Sous « Compartiment », entrez le nom du compartiment destinataire du streaming. Par exemple : `auditlog-streaming-test`.
   - Sous « ID de clé d’accès », tapez votre ID de clé d’accès. Par exemple : `ABCAIOSFODNN7EXAMPLE1`.
   - Sous « Clé secrète », tapez votre clé secrète. Par exemple : `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### Configuration de la diffusion en continu sur S3 avec OpenID Connect

{% note %}

**Remarque :** Le streaming vers Amazon S3 avec OpenID Connect est actuellement en version bêta et peut faire l’objet de modifications.

{% endnote %}

1. Dans AWS, ajoutez le fournisseur OIDC {% data variables.product.prodname_dotcom %} à IAM. Pour plus d’informations, consultez [Création de fournisseurs d’identité OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) dans la documentation AWS.

   - Pour l’URL du fournisseur : utilisez `https://oidc-configuration.audit-log.githubusercontent.com`.
   - Pour « Public », utilisez `sts.amazonaws.com`.
1. Créez un compartiment et bloquez l’accès public au compartiment. Pour plus d’informations, consultez [Création, configuration et utilisation des compartiments Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) dans la documentation AWS.
1. Créez une stratégie qui autorise {% data variables.product.company_short %} à écrire dans le compartiment. {% data variables.product.prodname_dotcom %} ne requiert que les autorisations suivantes.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
   }
   ```
   Pour plus d’informations, consultez [Création de stratégies de gestion des identités et des accès](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) dans la documentation AWS.
1. Configurez le rôle et la stratégie d’approbation pour le fournisseur d’identité {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez [Création d’un rôle pour l’identité web ou la fédération OpenID Connect (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) dans la documentation AWS.
  
   - Ajoutez la stratégie d’autorisations que vous avez créée ci-dessus pour autoriser les écritures dans le compartiment.
   - Modifiez la relation d’approbation pour ajouter le champ `sub` aux conditions de validation, en remplaçant `ENTERPRISE` par le nom de votre entreprise.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Notez le nom de ressource Amazon (ARN) du rôle créé.
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. Sous « Authentification », cliquez sur **OpenID Connect**.

   ![Capture d’écran des options d’authentification pour la diffusion en continu vers Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Configurez les paramètres de flux.

   - Sous « Compartiment », entrez le nom du compartiment destinataire du streaming. Par exemple : `auditlog-streaming-test`.
   - Sous « Rôle ARN », tapez le rôle ARN que vous avez noté précédemment. Par exemple : `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### Désactivation du streaming vers S3 avec OpenID Connect

Si vous souhaitez désactiver le streaming vers S3 avec OIDC pour une raison ou une autre, comme la découverte d’une vulnérabilité de sécurité dans OIDC, supprimez le fournisseur OIDC {% data variables.product.prodname_dotcom %} que vous avez créé dans AWS lors de la configuration du streaming. Pour plus d’informations, consultez [Création de fournisseurs d’identité OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) dans la documentation AWS.

Ensuite, configurez le streaming avec des clés d’accès jusqu’à ce que la vulnérabilité soit résolue. Pour plus d’informations, consultez « [Configuration du streaming vers S3 avec des clés d’accès](#setting-up-streaming-to-s3-with-access-keys) ».

{% endif %}

### Configuration du streaming vers le Stockage Blob Azure

Avant de configurer un flux dans {% data variables.product.prodname_dotcom %}, vous devez créer un compte de stockage et un conteneur dans Microsoft Azure. Pour plus d’informations, consultez la documentation Microsoft « [Présentation du Stockage Blob Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) ». 

Pour configurer le flux dans {% data variables.product.prodname_dotcom %}, vous avez besoin de l’URL d’un jeton SAS.

**Dans le portail Microsoft Azure** :
1. Sur la page d’accueil, cliquez sur **Comptes de stockage**.
2. Cliquez sur le nom du compte de stockage que vous souhaitez utiliser, puis cliquez sur **Conteneurs**.
   
   ![Lien Conteneurs dans Azure](/assets/images/azure/azure-storage-containers.png)

1. Cliquez sur le nom du conteneur à utiliser.
1. Cliquez sur **Jetons d’accès partagé**. 
   
   ![Lien Jetons d’accès partagé dans Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. Dans le menu déroulant **Autorisations**, modifiez les autorisations pour autoriser `Create` et `Write` uniquement.
   
   ![Menu déroulant Autorisations](/assets/images/azure/azure-storage-permissions.png)

1. Définissez une date d’expiration conforme à votre stratégie de rotation de secret.
1. Cliquez sur **Générer une URL et un jeton SAS**.
1. Copiez la valeur du champ **URL SAP d’objet blob**. Vous utiliserez cette URL dans {% data variables.product.prodname_dotcom %}.

**Dans {% data variables.product.prodname_dotcom %}**  : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Cliquez sur **Configurer le flux** et sélectionnez **Stockage Blob Azure**.
   
   ![Choisissez Stockage Blob Azure dans le menu déroulant](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. Dans la page de configuration, entrez l’URL SAS d’objet blob que vous avez copiée dans Azure. Le champ **Conteneur** est rempli automatiquement en fonction de l’URL.

   ![Entrez les paramètres de flux](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. Cliquez sur **Vérifier le point de terminaison** pour vérifier que {% data variables.product.prodname_dotcom %} peut se connecter au point de terminaison Stockage Blob Azure et écrire dessus.
   
   ![Vérification du point de terminaison](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configuration du streaming vers Azure Event Hubs

Avant de configurer un flux dans {% data variables.product.prodname_dotcom %}, vous devez disposer d’un espace de noms de hub d’événements dans Microsoft Azure. Ensuite, vous devez créer une instance de hub d’événements dans l’espace de noms. Vous aurez besoin des détails de cette instance de hub d’événements quand vous configurerez le flux. Pour plus d’informations, consultez la documentation Microsoft « [Démarrage rapide : Créer un hub d’événements avec le portail Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create) ». 

Vous avez besoin de deux informations sur votre hub d’événements : son nom d’instance et la chaîne de connexion. 

**Dans le portail Microsoft Azure** :
1. Recherchez « Event Hubs ».

   ![Zone de recherche du portail Azure](/assets/images/azure/azure-resources-search.png )

1. Sélectionnez **Event Hubs**. Les noms de vos hubs d’événements sont listés. 
   
   ![Liste de hubs d’événements](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Notez le nom du hub d’événements destinataire du streaming.
1. Cliquez sur le hub d’événements requis. Puis, dans le menu de gauche, sélectionnez **Stratégies d’accès partagé**.
1. Sélectionnez une stratégie d’accès partagé dans la liste des stratégies ou créez une stratégie.
   
   ![Liste de stratégies d’accès partagé](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Cliquez sur le bouton à droite du champ **Clé primaire de la chaîne de connexion** pour copier la chaîne de connexion.
   
   ![Chaîne de connexion du hub d’événements](/assets/images/help/enterprises/azure-connection-string.png)

**Dans {% data variables.product.prodname_dotcom %}**  : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Cliquez sur **Configurer le flux** et sélectionnez **Azure Event Hubs**.
   
   ![Choisissez Azure Events Hubs dans le menu déroulant](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. Sur la page de configuration, entrez :
   * Le nom de l’instance Azure Event Hubs
   * Chaîne de connexion
  
   ![Entrez les paramètres de flux](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. Cliquez sur **Vérifier le point de terminaison** pour vérifier que {% data variables.product.prodname_dotcom %} peut se connecter au point de terminaison Azure Events Hubs et écrire dessus.
   
   ![Vérification du point de terminaison](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Configuration du streaming vers Datadog

Pour configurer le streaming vers Datadog, vous devez créer un jeton client ou une clé API dans Datadog, puis configurer le streaming de journaux d’audit dans {% data variables.product.product_name %} à l’aide du jeton pour l’authentification. Vous n’avez pas besoin de créer un compartiment ou un autre conteneur de stockage dans Datadog.

Après avoir configuré le streaming vers Datadog, vous pouvez voir vos données de journal d’audit en filtrant sur « github.audit.streaming ». Pour plus d’informations, consultez « [Gestion des journaux](https://docs.datadoghq.com/logs/) ».

1. Si vous ne disposez pas encore d’un compte Datadog, créez-en un.
1. Dans Datadog, générez un jeton client ou une clé API, puis cliquez sur **Copier la clé**. Pour plus d’informations, consultez [Clés API et clés d’application](https://docs.datadoghq.com/account_management/api-app-keys/) dans la documentation Datadog. {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Sélectionnez le menu déroulant **Configurer le flux**, puis cliquez sur **Datadog**.
   
   ![Capture d’écran du menu déroulant « Configurer le flux » avec « Datadog » mis en évidence](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. Sous « Jeton », collez le jeton que vous avez copié précédemment.

   ![Capture d’écran du champ « Jeton »](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. Sélectionnez le menu déroulant « Site », puis cliquez sur votre site Datadog. Pour déterminer votre site Datadog, comparez votre URL Datadog avec la table dans la documentation Datadog [Sites Datadog](https://docs.datadoghq.com/getting_started/site/).

   ![Capture d’écran du menu déroulant « Site »](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. Pour vérifier que {% data variables.product.prodname_dotcom %} peut se connecter au point de terminaison Datadog et écrire dessus, cliquez sur **Vérifier le point de terminaison**.
   
   ![Vérifier le point de terminaison](/assets/images/help/enterprises/audit-stream-check.png) - {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. Après quelques minutes, vérifiez que les données du journal d’audit apparaissent sous l’onglet **Journaux** dans Datadog. Si les données du journal d’audit n’apparaissent pas, vérifiez que votre jeton et votre site sont corrects dans {% data variables.product.prodname_dotcom %}.
{% endif %}

### Configuration du streaming vers Google Cloud Storage

Pour configurer le streaming vers Google Cloud Storage, vous devez créer un compte de service dans Google Cloud avec les informations d’identification et les autorisations appropriées, puis configurer le streaming de journaux d’audit dans {% data variables.product.product_name %} à l’aide des informations d’identification du compte de service pour l’authentification.

1. Créez un compte de service pour Google Cloud. Vous n’avez pas besoin de définir des contrôles d’accès ou des rôles IAM pour le compte de service. Pour plus d’informations, consultez [Créer et gérer des comptes de service](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) dans la documentation Google Cloud.
1. Créez une clé JSON pour le compte de service et stockez-la clé de manière sécurisée. Pour plus d’informations, consultez [Créer et gérer les clés de comptes de service](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) dans la documentation Google Cloud.
1. Créez le compartiment si ce n’est déjà fait. Pour plus d’informations, consultez [Créer des buckets de stockage](https://cloud.google.com/storage/docs/creating-buckets) dans la documentation Google Cloud.
1. Attribuez au compte de service le rôle Créateur des objets de l’espace de stockage pour le compartiment. Pour plus d’informations, consultez [Utiliser des autorisations IAM](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) dans la documentation Google Cloud.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Sélectionnez le menu déroulant Configurer le flux, puis cliquez sur **Google Cloud Storage**.

   ![Capture d’écran du menu déroulant « Configurer le flux »](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Sous « Compartiment », tapez le nom de votre compartiment Google Cloud Storage.

   ![Capture d’écran du champ de texte « Compartiment »](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Sous « Informations d’identification JSON », collez tout le contenu du fichier pour la clé JSON de votre compte de service.

   ![Capture d’écran du champ texte « Informations d’identification JSON »](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Pour vérifier que {% data variables.product.prodname_dotcom %} peut se connecter au compartiment Google Cloud Storage et écrire dessus, cliquez sur **Vérifier le point de terminaison**. 

   ![Capture d’écran du bouton « Vérifier le point de terminaison »](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configuration du streaming vers Splunk

Pour envoyer des journaux d’audit en streaming vers le point de terminaison du collecteur d’événements HTTP (HEC, HTTP Event Collector) de Splunk, vous devez vérifier que le point de terminaison est configuré pour accepter les connexions HTTPS. Pour plus d’informations, consultez [Set up and use HTTP Event Collector in Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) (Configurer et utiliser le collecteur d’événements HTTP) dans la documentation Splunk.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Cliquez sur **Configurer le flux** et sélectionnez **Splunk**.
   
   ![Choisissez Splunk dans le menu déroulant](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. Sur la page de configuration, entrez :
   * Le domaine sur lequel l’application destinataire du streaming est hébergée.
  
     Si vous utilisez Splunk Cloud, `Domain` doit être `http-inputs-<host>`, où `host` est le domaine que vous utilisez dans Splunk Cloud. Par exemple : `http-inputs-mycompany.splunkcloud.com`. 

   * Le port sur lequel l’application accepte les données.<br>

     Si vous utilisez Splunk Cloud, `Port` doit être `443` si vous n’avez pas modifié la configuration du port. Si vous utilisez la version d’essai gratuite de Splunk Cloud, `Port` doit être `8088`.

   * Un jeton que {% data variables.product.prodname_dotcom %} peut utiliser pour s’authentifier auprès de l’application tierce.
  
   ![Entrez les paramètres de flux](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Laissez la case **Activer la vérification SSL** cochée.

    Les journaux d’audit sont toujours envoyés en streaming sous forme de données chiffrées. Cependant, quand cette option est sélectionnée, {% data variables.product.prodname_dotcom %} vérifie le certificat SSL de votre instance Splunk au moment de la remise des événements. La vérification SSL permet de s’assurer que les événements sont remis à votre point de terminaison d’URL de manière sécurisée. Vous pouvez désactiver cette case, mais nous recommandons de garder la vérification SSL activée.
1. Cliquez sur **Vérifier le point de terminaison** pour vérifier que {% data variables.product.prodname_dotcom %} peut se connecter au point de terminaison Splunk et écrire dessus.
   ![Vérifier le point de terminaison](/assets/images/help/enterprises/audit-stream-check-splunk.png) - {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## Suspension du streaming de journaux d’audit

La suspension du flux vous permet d’effectuer une maintenance sur l’application de réception sans perdre les données d’audit. Les journaux d’audit sont stockés jusqu’à sept jours sur {% data variables.product.product_location %}, puis sont exportés quand vous annulez la suspension.

{% ifversion streaming-datadog %} Datadog accepte uniquement les journaux ayant une ancienneté maximale de 18 heures. Si vous suspendez un flux vers un point de terminaison Datadog pendant plus de 18 heures, vous risquez de perdre les journaux que Datadog n’acceptera pas après avoir repris le streaming.
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Cliquez sur **Suspendre le flux**.
   
   ![Suspendre le flux](/assets/images/help/enterprises/audit-stream-pause.png)

1. Un message de confirmation s’affiche. Cliquez sur **Suspendre le flux** pour confirmer.

Quand l’application est prête à recevoir de nouveau les journaux d’audit, cliquez sur **Reprendre le flux** pour redémarrer le streaming des journaux d’audit.
{% endif %}

## Suppression du flux de journaux d’audit

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Cliquez sur **Supprimer le flux**.
   
   ![Supprimer le flux](/assets/images/help/enterprises/audit-stream-delete.png)

1. Un message de confirmation s’affiche. Cliquez sur **Supprimer le flux** pour confirmer.
