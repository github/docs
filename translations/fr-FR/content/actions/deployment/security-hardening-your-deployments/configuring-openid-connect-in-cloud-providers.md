---
title: Configuration d’OpenID Connect dans les fournisseurs de cloud
shortTitle: OpenID Connect in cloud providers
intro: Utilisez OpenID Connect dans vos workflows pour vous authentifier auprès des fournisseurs de cloud.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90dfa54e71fc602243ddb0d51b190fb8530727e4
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135493'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

OpenID Connect (OIDC) permet à vos workflows {% data variables.product.prodname_actions %} d’accéder aux ressources dans votre fournisseur de cloud, sans avoir à stocker d’informations d’identification en tant que secrets {% data variables.product.prodname_dotcom %} à long terme.

Pour utiliser OIDC, vous devez d’abord configurer votre fournisseur de cloud pour approuver le protocole OIDC de {% data variables.product.prodname_dotcom %} en tant qu’identité fédérée, puis mettre à jour vos workflows afin de vous authentifier à l’aide de jetons.

## Prérequis

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Mise à jour de votre workflow {% data variables.product.prodname_actions %}

Pour mettre à jour vos workflows pour OIDC, vous devez apporter deux modifications à votre code YAML :
1. Ajoutez des paramètres d’autorisations pour le jeton.
2. Utilisez l’action officielle à partir de votre fournisseur de cloud pour échanger le jeton OIDC (JWT) afin d’obtenir un jeton d’accès cloud.

Si votre fournisseur de cloud n’offre pas encore d’action officielle, vous pouvez mettre à jour vos workflows pour effectuer ces étapes manuellement.

### Ajout de paramètres d’autorisations

 {% data reusables.actions.oidc-permissions-token %}

### Utilisation d’actions officielles

Si votre fournisseur de cloud a créé une action officielle pour l’utilisation d’OIDC avec {% data variables.product.prodname_actions %}, il vous permet d’échanger facilement le jeton OIDC pour obtenir un jeton d’accès. Vous pouvez ensuite mettre à jour vos workflows afin d’utiliser ce jeton lors de l’accès aux ressources cloud.

## Utilisation d’actions personnalisées

Si votre fournisseur de cloud n’a pas d’action officielle ou si vous préférez créer des scripts personnalisés, vous pouvez demander manuellement le jeton JSON Web Token (JWT) à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %}.

Si vous n’utilisez pas d’action officielle, {% data variables.product.prodname_dotcom %} recommande que vous utilisiez le kit de ressources principal Actions. Vous pouvez également utiliser les variables d’environnement suivantes pour récupérer le jeton : `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_URL`.

Pour mettre à jour vos workflows à l’aide de cette approche, vous devez apporter trois modifications à votre code YAML :

1. Ajoutez des paramètres d’autorisations pour le jeton.
2. Ajoutez du code qui demande le jeton OIDC à partir du fournisseur OIDC de {% data variables.product.prodname_dotcom %}.
3. Ajoutez du code qui échange le jeton OIDC avec votre fournisseur de cloud pour obtenir un jeton d’accès.

### Demande du jeton JWT à l’aide du kit de ressources principal Actions

L’exemple suivant montre comment utiliser `actions/github-script` avec le kit de ressources `core` pour demander le jeton JWT auprès du fournisseur OIDC de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Ajout de packages de kit de ressources d’actions](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages) ».

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: {% data reusables.actions.action-github-script %}
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()
          coredemo.setOutput('id_token', id_token)
```

### Demande du jeton JWT à l’aide de variables d’environnement

L’exemple suivant montre comment utiliser des variables d’environnement pour demander un jeton JSON Web Token.

Pour votre travail de déploiement, vous devez définir les paramètres de jeton en utilisant `actions/github-script` avec le kit de ressources `core`. Pour plus d’informations, consultez « [Ajout de packages de kit de ressources d’actions](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages) ».

Par exemple :

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-github-script %}
      id: script
      timeout-minutes: 10
      with:
        debug: true
        script: |
          const token = process.env['ACTIONS_RUNTIME_TOKEN']
          const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
          core.setOutput('TOKEN', token.trim())
          core.setOutput('IDTOKENURL', runtimeUrl.trim())
```

Vous pouvez ensuite utiliser `curl` pour récupérer un jeton JWT à partir du fournisseur OIDC de {% data variables.product.prodname_dotcom %}. Par exemple :

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer {% raw %} ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} {% endraw %} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
{%- ifversion actions-save-state-set-output-envs %}
        echo "idToken=${IDTOKEN}" >> $GITHUB_OUTPUT
{%- else %}
        echo "::set-output name=idToken::${IDTOKEN}"
{%- endif %}
      id: tokenid
```

### Obtention du jeton d’accès à partir du fournisseur de cloud

Vous devez présenter le jeton JWT OIDC à votre fournisseur de cloud afin d’obtenir un jeton d’accès.

Pour chaque déploiement, vos workflows doivent utiliser des actions de connexion cloud (ou des scripts personnalisés) qui récupèrent le jeton OIDC et le présentent à votre fournisseur de cloud. Le fournisseur de cloud valide ensuite les revendications dans le jeton. S’il réussit, il fournit un jeton d’accès cloud disponible uniquement pour cette exécution de travail. Le jeton d’accès fourni peut ensuite être utilisé par les actions suivantes dans le travail pour la connexion au cloud et le déploiement sur ses ressources.

Les étapes d’échange du jeton OIDC pour un jeton d’accès varient pour chaque fournisseur de cloud.

### Accès aux ressources dans votre fournisseur de cloud

Une fois que vous avez obtenu le jeton d’accès, vous pouvez utiliser des scripts ou des actions cloud spécifiques pour vous authentifier auprès du fournisseur de cloud et déployer sur ses ressources. Ces étapes peuvent différer pour chaque fournisseur de cloud.
En outre, le temps d’expiration par défaut de ce jeton d’accès peut varier entre chaque cloud et peut être configurable du côté du fournisseur de cloud.
