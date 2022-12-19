---
title: Authentification avec les applications GitHub
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 6862e33adfc29cc1568d5801ac50e44587c86fa9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147718052'
---
## Génération d’une clé privée

Après avoir créé une application GitHub, vous devez générer une ou plusieurs clés privées. Vous utilisez la clé privée pour signer les demandes de jeton d’accès.

Vous pouvez créer plusieurs clés privées et les alterner pour éviter les temps d’arrêt si une clé est compromise ou perdue. Pour vérifier qu’une clé privée correspond à une clé publique, consultez [Vérification des clés privées](#verifying-private-keys).

Pour générer une clé privée :

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Dans « Clés privées », cliquez sur **Générer une clé privée**.
![Générer une clé privée](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. Une clé privée au format PEM est téléchargée sur votre ordinateur. Veillez à stocker ce fichier, car GitHub stocke uniquement la partie publique de la clé.

{% note %}

**Remarque :** Si vous utilisez une bibliothèque qui nécessite un format de fichier spécifique, le fichier PEM que vous téléchargez est au format `PKCS#1 RSAPrivateKey`.

{% endnote %}

## Vérification des clés privées
{% data variables.product.product_name %} génère une empreinte digitale pour chaque paire de clés privée et publique à l’aide de la fonction de hachage SHA-256. Vous pouvez vérifier que votre clé privée correspond à la clé publique stockée sur {% data variables.product.product_name %} en générant l’empreinte digitale de votre clé privée et en la comparant à l’empreinte digitale affichée sur {% data variables.product.product_name %}.

Pour vérifier une clé privée :

1. Recherchez l’empreinte digitale de la paire de clés privée et publique à vérifier dans la section « Clés privées » de la page des paramètres de développement de l’{% data variables.product.prodname_github_app %}. Pour plus d’informations, consultez [Génération d’une clé privée](#generating-a-private-key).
![Empreinte digitale de clé privée](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Générez localement l’empreinte digitale de votre clé privée (PEM) à l’aide de la commande suivante :
    ```shell
    $ openssl rsa -in <em>PATH_TO_PEM_FILE</em> -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. Comparez les résultats de l’empreinte digitale générée localement à l’empreinte digitale que vous voyez dans {% data variables.product.product_name %}.

## Suppression de clés privées
Vous pouvez retirer une clé privée perdue ou compromise en la supprimant, mais vous devez avoir au moins une clé privée. Quand vous n’avez qu’une seule clé, vous devez en générer une nouvelle avant de supprimer l’ancienne.
![Suppression de la dernière clé privée](/assets/images/github-apps/github_apps_delete_key.png)

## Authentification en tant qu’{% data variables.product.prodname_github_app %}

L’authentification en tant qu’{% data variables.product.prodname_github_app %} vous permet de faire plusieurs choses :

* Vous pouvez récupérer des informations de gestion générales concernant votre {% data variables.product.prodname_github_app %}.
* Vous pouvez demander des jetons d’accès pour une installation de l’application.

Pour vous authentifier en tant qu’{% data variables.product.prodname_github_app %}, [générez une clé privée](#generating-a-private-key) au format PEM, puis téléchargez-la sur votre machine locale. Vous allez utiliser cette clé pour signer un jeton [JWT (JSON Web Token)](https://jwt.io/introduction) et l’encoder à l’aide de l’algorithme `RS256`. {% data variables.product.product_name %} vérifie que la requête est authentifiée en contrôlant le jeton avec la clé publique stockée de l’application.

Voici un script Ruby rapide qui vous permet de générer un jeton JWT. Notez que vous devez exécuter `gem install jwt` avant de l’utiliser.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

`YOUR_PATH_TO_PEM` et `YOUR_APP_ID` sont les valeurs que vous devez remplacer. Veillez à placer les valeurs entre guillemets doubles.

Utilisez l’identificateur (`YOUR_APP_ID`) de votre {% data variables.product.prodname_github_app %} en tant que valeur de la revendication JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (émetteur). Vous pouvez obtenir l’identificateur de l’{% data variables.product.prodname_github_app %} via le ping de webhook initial après la [création de l’application](/apps/building-github-apps/creating-a-github-app/), ou à tout moment à partir de la page des paramètres de l’application dans l’IU de GitHub.com.

Après avoir créé le jeton JWT, définissez-le dans le `Header` de la requête d’API :

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` est la valeur que vous devez remplacer.

L’exemple ci-dessus utilise le délai d’expiration maximal de 10 minutes. Une fois ce délai atteint, l’API retourne une erreur `401` :

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

Vous devez créer un jeton JWT après l’expiration du délai.

## Accès aux points de terminaison d’API en tant qu’{% data variables.product.prodname_github_app %}

Pour obtenir la liste des points de terminaison d’API REST que vous pouvez utiliser afin d’obtenir des informations générales sur une {% data variables.product.prodname_github_app %}, consultez « [Applications GitHub](/rest/reference/apps) ».

## Authentification en tant qu’installation

L’authentification en tant qu’installation vous permet d’effectuer des actions dans l’API pour cette installation. Avant de vous authentifier en tant qu’installation, vous devez créer un jeton d’accès d’installation. Vérifiez que vous avez déjà installé votre application GitHub sur au moins un dépôt. Il est impossible de créer un jeton d’installation sans la moindre installation. Ces jetons d’accès d’installation sont utilisés par les {% data variables.product.prodname_github_apps %} pour s’authentifier. Pour plus d’informations, consultez « [Installation d’applications GitHub](/developers/apps/managing-github-apps/installing-github-apps) ».

Par défaut, les jetons d’accès d’installation ont une étendue qui se limite à tous les dépôts auxquels une installation peut accéder. Vous pouvez limiter l’étendue du jeton d’accès d’installation à des dépôts spécifiques en utilisant le paramètre `repository_ids`. Pour plus d’informations, consultez le point de terminaison [Créer un jeton d’accès d’installation pour une application](/rest/reference/apps#create-an-installation-access-token-for-an-app). Les jetons d’accès d’installation disposent d’autorisations configurées par l’{% data variables.product.prodname_github_app %} et expirent au bout d’une heure.

Pour lister les installations d’une application authentifiée, incluez le jeton JWT [généré ci-dessus](#jwt-payload) dans l’en-tête d’autorisation de la requête d’API :

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

La réponse comprend une liste d’installations, où le `id` de chaque installation peut être utilisé pour créer un jeton d’accès d’installation. Pour plus d’informations sur le format de réponse, consultez « [Lister les installations de l’application authentifiée](/rest/reference/apps#list-installations-for-the-authenticated-app) ».

Pour créer un jeton d’accès d’installation, incluez le jeton JWT [généré ci-dessus](#jwt-payload) dans l’en-tête d’autorisation de la requête d’API, puis remplacez `:installation_id` par le `id` de l’installation :

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

La réponse comprend votre jeton d’accès d’installation, la date d’expiration, les autorisations du jeton ainsi que les dépôts auxquels le jeton peut accéder. Pour plus d’informations sur le format de réponse, consultez le point de terminaison [Créer un jeton d’accès d’installation pour une application](/rest/reference/apps#create-an-installation-access-token-for-an-app).

Pour vous authentifier avec un jeton d’accès d’installation, incluez-le dans l’en-tête d’autorisation de la requête d’API :

```shell
$ curl -i \
-H "Authorization: Bearer YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` est la valeur que vous devez remplacer.

{% note %}

**Remarque :** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

## Accès aux points de terminaison d’API en tant qu’installation

Pour obtenir la liste des points de terminaison d’API REST pouvant être utilisés par les {% data variables.product.prodname_github_apps %} à l’aide d’un jeton d’accès d’installation, consultez « [Points de terminaison disponibles](/rest/overview/endpoints-available-for-github-apps) ».

Pour obtenir la liste des points de terminaison liés aux installations, consultez « [Installations](/rest/reference/apps#installations) ».

## Accès HTTP à Git par une installation

Les installations disposant d’[autorisations](/apps/building-github-apps/setting-permissions-for-github-apps/) sur le `contents` d’un dépôt peuvent utiliser leurs jetons d’accès d’installation pour s’authentifier dans le cadre de l’accès à Git. Utilisez le jeton d’accès d’installation en tant que mot de passe HTTP :

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
