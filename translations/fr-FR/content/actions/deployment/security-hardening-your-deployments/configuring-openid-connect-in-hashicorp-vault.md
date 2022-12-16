---
title: Configuration d’OpenID Connect dans HashiCorp Vault
shortTitle: OpenID Connect in HashiCorp Vault
intro: Utilisez OpenID Connect dans vos workflows pour vous authentifier auprès de HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106628'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

OpenID Connect (OIDC) permet à vos workflows {% data variables.product.prodname_actions %} de s’authentifier auprès d’un coffre-fort HashiCorp Vault pour récupérer des secrets.

Ce guide fournit une vue d’ensemble de la façon de configurer HashiCorp Vault pour approuver le protocole OIDC de {% data variables.product.prodname_dotcom %} en tant qu’identité fédérée et montre comment utiliser cette configuration dans l’action [hashicorp/vault-action](https://github.com/hashicorp/vault-action) pour récupérer des secrets à partir de HashiCorp Vault.

## Prérequis

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Ajout du fournisseur d’identité à HashiCorp Vault

Pour utiliser OIDC avec HashiCorp Vault, vous devez ajouter une configuration d’approbation pour le fournisseur OIDC {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez la [documentation](https://www.vaultproject.io/docs/auth/jwt) sur HashiCorp Vault.

Pour configurer le serveur Vault afin qu’il accepte les jetons JWT pour l’authentification :

1. Activez la méthode `auth` JWT et utilisez `write` pour appliquer la configuration à votre coffre. 
  Pour les paramètres `oidc_discovery_url` et `bound_issuer`, utilisez {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. Ces paramètres permettent au serveur Vault de vérifier les jetons JWT reçus pendant le processus d’authentification.

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Configurez une stratégie qui accorde l’accès uniquement aux chemins que vos workflows utiliseront pour récupérer des secrets. Pour plus d’informations sur les stratégies avancées, consultez la [documentation sur les stratégies](https://www.vaultproject.io/docs/concepts/policies) HashiCorp Vault.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Configurez des rôles pour regrouper différentes stratégies. Si l’authentification réussit, ces stratégies seront attachées au jeton d’accès de coffre résultant.

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` définit la validité du jeton d’accès résultant.
- Vérifiez que le paramètre `bound_claims` est défini selon vos exigences de sécurité, et qu’il comprend au moins une condition. Si vous le souhaitez, vous pouvez également définir le paramètre `bound_subject` ainsi que le paramètre `bound_audiences`.
- Pour vérifier les revendications arbitraires dans la charge utile JWT reçue, le paramètre `bound_claims` comprend un ensemble de revendications avec les valeurs nécessaires. Dans l’exemple ci-dessus, le rôle accepte toutes les demandes d’authentification entrantes provenant du dépôt `repo-name` qui appartient au compte `user-or-org-name`.
- Pour afficher toutes les revendications disponibles qui sont prises en charge par le fournisseur OIDC {% data variables.product.prodname_dotcom %}, consultez [« Configuration de l’approbation OIDC avec le cloud ».](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)

Pour plus d’informations, consultez la [documentation](https://www.vaultproject.io/docs/auth/jwt) sur HashiCorp Vault.

## Mise à jour de votre workflow {% data variables.product.prodname_actions %}

Pour mettre à jour vos workflows pour OIDC, vous devez apporter deux modifications à votre code YAML :
1. Ajoutez des paramètres d’autorisations pour le jeton.
2. Utilisez l’action [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) pour échanger le jeton OIDC (JWT) afin d’obtenir un jeton d’accès cloud.


Pour ajouter l’intégration OIDC à vos workflows afin de leur permettent d’accéder aux secrets dans Vault, vous devez apporter les modifications suivantes au code :

- Accordez l’autorisation d’extraire le jeton à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %} :
  - Le workflow a besoin des paramètres `permissions:` avec la valeur `id-token` définie sur `write`. Cela vous permet d’extraire le jeton OIDC de chaque travail dans le workflow.
- Demandez le jeton JWT auprès du fournisseur OIDC {% data variables.product.prodname_dotcom %} et présentez-le à HashiCorp Vault pour recevoir un jeton d’accès :
  - Vous pouvez utiliser l’action [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) pour récupérer le jeton JWT et recevoir le jeton d’accès du coffre. Vous pouvez également utiliser le [kit de ressources Actions](https://github.com/actions/toolkit/) afin de récupérer les jetons de votre travail.

Cet exemple montre comment utiliser OIDC avec l’action officielle pour demander un secret à HashiCorp Vault.

### Ajout de paramètres d’autorisations

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**Remarque** :

Lorsque la clé `permissions` est utilisée, toutes les autorisations non spécifiées sont définies sur _Aucun accès_, à l’exception de l’étendue de métadonnées, qui obtient toujours l’accès _en lecture_. Par conséquent, vous devrez peut-être ajouter d’autres autorisations, telles que `contents: read`. Pour plus d’informations, consultez « [Authentification automatique par jeton](/actions/security-guides/automatic-token-authentication) ».

{% endnote %}

### Demande du jeton d’accès

L’action `hashicorp/vault-action` reçoit un jeton JWT à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %}, puis demande un jeton d’accès à partir de votre instance HashiCorp Vault pour récupérer des secrets. Pour plus d’informations, consultez la [documentation](https://github.com/hashicorp/vault-action) GitHub Actions HashiCorp Vault.

Cet exemple montre comment créer un travail qui demande un secret à HashiCorp Vault.

- `<Vault URL>` : remplacez cela par l’URL de votre coffre HashiCorp Vault.
- `<Vault Namespace>` : à remplacer par l’espace de noms que vous avez défini dans HashiCorp Vault. Par exemple : `admin`.
- `<Role name>` : remplacez cela par le rôle que vous avez défini dans la relation d’approbation HashiCorp Vault.
- `<Secret-Path>` : remplacez cela par le chemin d’accès au secret que vous récupérez à partir de HashiCorp Vault. Par exemple : `secret/data/production/ci npmToken`.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Remarque** :

- Si votre serveur Vault n’est pas accessible à partir du réseau public, vous pouvez utiliser un exécuteur auto-hébergé avec d’autres [méthodes d’authentification](https://www.vaultproject.io/docs/auth) Vault disponibles. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ».
- `<Vault Namespace>` doit être défini pour un déploiement Vault Enterprise (y compris HCP Vault). Pour plus d’informations, consultez [Espace de noms Vault](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Révocation du jeton d’accès

Par défaut, le serveur Vault révoque automatiquement les jetons d’accès quand leur durée de vie a expiré. Vous n’êtes donc pas obligé de révoquer manuellement les jetons d’accès. Toutefois, si vous souhaitez révoquer des jetons d’accès immédiatement après l’achèvement ou l’échec de votre travail, vous pouvez révoquer manuellement le jeton émis à l’aide de l’[API Vault](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Définissez l’option `exportToken` sur `true` (valeur par défaut : `false`). Cette opération exporte le jeton d’accès Vault émis en tant que variable d’environnement : `VAULT_TOKEN`.
2. Ajoutez une étape pour appeler l’API Vault [Revoke a Token (Self)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) afin de révoquer le jeton d’accès.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
