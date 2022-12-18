---
title: Configuration d’OpenID Connect dans Azure
shortTitle: Configuring OpenID Connect in Azure
intro: Utilisez OpenID Connect dans vos workflows pour vous authentifier auprès d’Azure.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 64c7371eec248c7ebeb45a50091b9ef5dbed645e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105210'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

OpenID Connect (OIDC) permet à vos workflows {% data variables.product.prodname_actions %} d’accéder aux ressources dans Azure, sans avoir à stocker d’informations d’identification Azure en tant que secrets {% data variables.product.prodname_dotcom %} à long terme. 

Ce guide offre une vue d’ensemble sur la façon de configurer Azure pour approuver le protocole OIDC de {% data variables.product.prodname_dotcom %} en tant qu’identité fédérée et il inclut un exemple de workflow pour l’action [`azure/login`](https://github.com/Azure/login) qui utilise des jetons pour s’authentifier auprès d’Azure et accéder aux ressources.

## Prérequis

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Ajout des informations d’identification fédérées à Azure

Le fournisseur OIDC de {% data variables.product.prodname_dotcom %} fonctionne avec la fédération d’identité de charge de travail d’Azure. Pour obtenir une vue d’ensemble, consultez la documentation de Microsoft sur la « [fédération d’identité de charge de travail](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation) ».

Pour configurer le fournisseur d’identité OIDC dans Azure, vous devez effectuer la configuration suivante. Pour obtenir des instructions afin d’apporter ces modifications, reportez-vous à [la documentation Azure](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Créez une application Azure Active Directory et un principal de service.
2. Ajoutez des informations d’identification fédérées pour l’application Azure Active Directory.
3. Créez des secrets {% data variables.product.prodname_dotcom %} pour stocker la configuration Azure.

Conseils supplémentaires pour la configuration du fournisseur d’identité :

- Pour renforcer la sécurité, veillez à passer en revue [« Configuration de l’approbation OIDC avec le cloud »](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Pour obtenir un exemple, consultez [« Configuration de l’objet dans votre fournisseur de cloud »](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Pour le paramètre `audience`,  `api://AzureADTokenExchange` est la valeur recommandée, mais vous pouvez également spécifier d’autres valeurs ici.

## Mise à jour de votre workflow {% data variables.product.prodname_actions %}

Pour mettre à jour vos workflows pour OIDC, vous devez apporter deux modifications à votre code YAML :
1. Ajoutez des paramètres d’autorisations pour le jeton.
2. Utilisez l’action [`azure/login`](https://github.com/Azure/login) pour échanger le jeton OIDC (JWT) afin d’obtenir un jeton d’accès cloud.

### Ajout de paramètres d’autorisations

 {% data reusables.actions.oidc-permissions-token %}

### Demande du jeton d’accès

L’action [`azure/login`](https://github.com/Azure/login) reçoit un jeton JWT à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %}, puis demande un jeton d’accès à partir d’Azure. Pour plus d’informations, consultez la documentation [`azure/login`](https://github.com/Azure/login).

L’exemple suivant échange un jeton d’ID OIDC avec Azure pour recevoir un jeton d’accès, qui peut ensuite être utilisé pour accéder aux ressources cloud.

{% raw %}
```yaml{:copy}
name: Run Azure Login with OIDC
on: [push]

permissions:
      id-token: write
      contents: read
jobs: 
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
  
      - name: 'Run az commands'
        run: |
          az account show
          az group list
```
 {% endraw %}
