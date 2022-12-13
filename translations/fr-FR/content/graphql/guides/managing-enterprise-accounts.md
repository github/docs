---
title: Gestion des comptes d’entreprise
intro: Vous pouvez gérer votre compte d’entreprise et les organisations qu’il détient avec l’API GraphQL.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106780'
---
## À propos de la gestion des comptes d’entreprise avec GraphQL

Pour vous aider à superviser et à apporter des modifications dans vos organisations et à maintenir la conformité, vous pouvez utiliser l’API Enterprise Accounts et l’API Audit Log, qui sont disponibles uniquement en tant qu’API GraphQL.

Les points de terminaison des comptes d’entreprise fonctionnent à la fois pour GitHub Enterprise Cloud et pour GitHub Enterprise Server.

GraphQL vous permet de demander et de retourner uniquement les données que vous spécifiez. Par exemple, vous pouvez créer une requête GraphQL ou demander des informations pour afficher tous les nouveaux membres de l’organisation ajoutés à votre organisation. Ou vous pouvez effectuer une mutation, ou un changement, pour inviter un administrateur à votre compte d’entreprise.

Avec l’API Audit Log, vous pouvez surveiller quand quelqu’un :
- Accède aux paramètres de votre organisation ou de votre référentiel.
- Modifie les autorisations.
- Ajoute ou supprime des utilisateurs dans une organisation, un référentiel ou une équipe.
- Promeut les utilisateurs en administrateurs.
- Modifie les autorisations d’une application GitHub.

L’API Audit Log vous permet de conserver des copies de vos données de journal d’audit. Pour les requêtes effectuées avec l’API Audit Log, la réponse GraphQL peut inclure des données pendant 90 à 120 jours. Pour obtenir la liste des champs disponibles avec l’API Audit Log, consultez [« Interface AuditEntry](/graphql/reference/interfaces#auditentry/) ».

Avec l’API Enterprise Accounts, vous pouvez :
- Lister et passer en revue toutes les organisations et dépôts qui appartiennent à votre compte d’entreprise.
- Modifier les paramètres de compte d’entreprise.
- Configurer des stratégies pour les paramètres sur votre compte d’entreprise et ses organisations.
- Inviter des administrateurs à votre compte d’entreprise.
- Créer de nouvelles organisations dans votre compte d’entreprise.

Pour obtenir la liste des champs disponibles avec l’API Enterprise Accounts, consultez « [Types et champs GraphQL pour l’API Enterprise Accounts](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api) ».

## Bien démarrer avec GraphQL pour les comptes d’entreprise

Suivez ces étapes pour commencer à utiliser GraphQL pour gérer vos comptes d’entreprise :
 - Authentification avec un {% data variables.product.pat_generic %}
 - Choix d’un client GraphQL ou utilisation de l’Explorateur GraphQL
 - Configuration d’Insomnia pour utiliser l’API GraphQL

Pour obtenir des exemples de requêtes, consultez « [Exemple de requête à l’aide de l’API Enterprise Accounts](#an-example-query-using-the-enterprise-accounts-api) ».

### 1 Authentifiez-vous avec votre {% data variables.product.pat_generic %}

{% data reusables.user-settings.graphql-classic-pat-only %}

1. Pour vous authentifier auprès de GraphQL, vous devez générer un {% data variables.product.pat_generic %} à partir des paramètres du développeur. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».

2. Accordez des autorisations d’administrateur et de contrôle total à votre {% data variables.product.pat_generic %} pour les zones de GHES auxquelles vous souhaitez accéder. Pour des autorisations complètes sur les dépôts privés, les organisations, les équipes et les données utilisateur, et pour l’accès aux données de facturation et de profil d’entreprise, nous vous recommandons de sélectionner ces étendues pour votre {% data variables.product.pat_generic %} :
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  Les étendues propres au compte d’entreprise sont les suivantes :
    - `admin:enterprise` : donne le contrôle total des entreprises (y compris `manage_runners:enterprise`, `manage_billing:enterprise` et `read:enterprise`)
    - `manage_billing:enterprise` : lire et écrire des données de facturation d’entreprise.{% ifversion ghes or ghae %}
    - `manage_runners:enterprise` : accès pour gérer les exécuteurs et groupes d’exécuteurs d’entreprise GitHub Actions.{% endif %}
    - `read:enterprise` : lire les données de profil d’entreprise.

3. Copiez votre {% data variables.product.pat_generic %} et conservez-le dans un endroit sécurisé jusqu’à ce que vous l’ajoutiez à votre client GraphQL.

### 2. Choisir un client GraphQL

Nous vous recommandons d’utiliser GraphiQL ou un autre client GraphQL autonome qui vous permet de configurer l’URL de base.

Vous pouvez également envisager d’utiliser ces clients GraphQL :
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

Les étapes suivantes utilisent Insomnia.

### 3. Configuration d’Insomnia de façon à utiliser l’API GraphQL GitHub avec des comptes d’entreprise

1. Ajoutez l’URL de base et la méthode `POST` à votre client GraphQL. Lorsque vous utilisez GraphQL pour demander des informations (requêtes), modifier des informations (mutations) ou transférer des données à l’aide de l’API GitHub, la méthode HTTP par défaut est `POST` et l’URL de base suit cette syntaxe :
    - Pour votre instance d’entreprise : `https://<HOST>/api/graphql`
    - Pour GitHub Enterprise Cloud : `https://api.github.com/graphql`

2. Pour vous authentifier, ouvrez le menu d’options d’authentification et sélectionnez **Jeton du porteur**. Ensuite, ajoutez votre {% data variables.product.pat_generic %} que vous avez copié précédemment.

 ![Options des autorisations pour {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Options des autorisations pour {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Incluez les informations d’en-tête.
   - Ajoutez `Content-Type` en tant qu’en-tête et `application/json` en tant que valeur.
   ![En-tête standard](/assets/images/developer/graphql/json-content-type-header.png)
   ![En-tête avec valeur d’aperçu pour l’API Audit Log](/assets/images/developer/graphql/preview-header-for-2.18.png)

Maintenant, vous êtes prêt à effectuer des requêtes.

## Exemple de requête utilisant l’API Enterprise Accounts

Cette requête GraphQL demande le nombre total de {% ifversion not ghae %}`public`{% else %}`private`{% endif %} dépôts dans chacune des organisations de votre appliance à l’aide de l’API Enterprise Accounts. Pour personnaliser cette requête, remplacez `<enterprise-account-name>` par le handle de votre compte d’entreprise. Par exemple, si votre compte d’entreprise se trouve à `https://github.com/enterprises/octo-enterprise`l’emplacement, remplacez `<enterprise-account-name>` par `octo-enterprise`.

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

L’exemple de requête GraphQL suivant montre combien il est difficile de récupérer le nombre de {% ifversion not ghae %}`public`{% else %}`private`{% endif %} dépôts dans chaque organisation sans utiliser l’API Enterprise Accounts.  Notez que l’API GraphQL Enterprise Accounts simplifie cette tâche pour les entreprises, car vous n’avez besoin de personnaliser qu’une seule variable. Pour personnaliser cette requête, remplacez `<name-of-organization-one>` et `<name-of-organization-two>`, etc. par les noms d’organisation de votre instance.

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## Interroger chaque organisation séparément

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

Cette requête GraphQL demande les cinq dernières entrées de journal pour une organisation d’entreprise. Pour personnaliser cette requête, remplacez `<org-name>` et `<user-name>`.

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

Pour plus d’informations sur la prise en main de GraphQL, consultez « [Introduction à GraphQL](/graphql/guides/introduction-to-graphql) » et « [Création d’appels avec GraphQL](/graphql/guides/forming-calls-with-graphql) ».

## Types et champs GraphQL pour l’API Enterprise Accounts

Voici une vue d’ensemble des nouvelles requêtes, mutations et types définis par le schéma disponibles pour une utilisation avec l’API Enterprise Accounts.

Pour plus d’informations sur les nouvelles requêtes, mutations et types définis par schéma disponibles pour une utilisation avec l’API Enterprise Accounts, consultez la barre latérale où figurent des définitions GraphQL détaillées à partir de n’importe quelle [page de référence GraphQL](/graphql).

Vous pouvez accéder aux documents de référence à partir de l’Explorateur GraphQL sur GitHub. Pour plus d’informations, consultez « [Utilisation de l’Explorateur](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs) ».
Pour d’autres informations, telles que des détails sur la limite de débit et l’authentification, consultez les [guides](/graphql/guides).
