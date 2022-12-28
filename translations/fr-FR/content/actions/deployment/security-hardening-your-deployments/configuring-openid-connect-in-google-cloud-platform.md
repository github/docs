---
title: Configuration d’OpenID Connect dans Google Cloud Platform
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: Utilisez OpenID Connect dans vos workflows pour vous authentifier auprès de Google Cloud Platform.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: f8b2c63d442fb5dc5758a6f33bb9db5c2a49c9cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145087306'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

OpenID Connect (OIDC) permet à vos workflows {% data variables.product.prodname_actions %} d’accéder aux ressources dans Google Cloud Platform (GCP), sans avoir à stocker d’informations d’identification GPC en tant que secrets {% data variables.product.prodname_dotcom %} à long terme. 

Ce guide offre une vue d’ensemble sur la façon de configurer GCP pour approuver le protocole OIDC de {% data variables.product.prodname_dotcom %} en tant qu’identité fédérée et il inclut un exemple de workflow pour l’action [`google-github-actions/auth`](https://github.com/google-github-actions/auth) qui utilise des jetons pour s’authentifier auprès de GCP et accéder aux ressources.

## Prérequis

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Ajout d’un fournisseur d’identité de charge de travail Google Cloud

Pour configurer le fournisseur d’identité OIDC dans GCP, vous devez effectuer la configuration suivante. Pour obtenir des instructions afin d’apporter ces modifications, reportez-vous à [la documentation GCP](https://github.com/google-github-actions/auth).

1. Créez un nouveau pool d’identités.
2. Configurez le mappage et ajoutez des conditions.
3. Connectez le nouveau pool à un compte de service. 

Conseils supplémentaires pour la configuration du fournisseur d’identité :

- Pour renforcer la sécurité, veillez à passer en revue [« Configuration de l’approbation OIDC avec le cloud »](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Pour obtenir un exemple, consultez [« Configuration de l’objet dans votre fournisseur de cloud »](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Pour que le compte de service soit disponible pour la configuration, il doit être affecté au rôle `roles/iam.workloadIdentityUser`. Pour plus d’informations, consultez [la documentation de GCC](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- URL de l’émetteur à utiliser : {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## Mise à jour de votre workflow {% data variables.product.prodname_actions %}

Pour mettre à jour vos workflows pour OIDC, vous devez apporter deux modifications à votre code YAML :
1. Ajoutez des paramètres d’autorisations pour le jeton.
2. Utilisez l’action [`google-github-actions/auth`](https://github.com/google-github-actions/auth) pour échanger le jeton OIDC (JWT) afin d’obtenir un jeton d’accès cloud.

### Ajout de paramètres d’autorisations

 {% data reusables.actions.oidc-permissions-token %}

### Demande du jeton d’accès

L’action `google-github-actions/auth` reçoit un jeton JWT à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %}, puis demande un jeton d’accès à partir de GCP. Pour plus d’informations, consultez la [documentation](https://github.com/google-github-actions/auth) GCP.

Cet exemple comporte un travail appelé `Get_OIDC_ID_token` qui utilise des actions pour demander une liste de services à partir de GCP.

- `<example-workload-identity-provider>` : remplacez cela par le chemin d’accès à votre fournisseur d’identité dans GCP. Par exemple : `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>` : remplacez cela par le nom de votre compte de service dans GCP.
- `<project-id>` : remplacez cela par l’ID de votre projet GCP.

Cette action permet d’échanger un jeton OIDC {% data variables.product.prodname_dotcom %} pour obtenir un jeton d’accès Google Cloud, à l’aide de la [fédération d’identité de charge de travail](https://cloud.google.com/iam/docs/workload-identity-federation).

{% raw %}
```yaml{:copy}
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```
{% endraw %}
