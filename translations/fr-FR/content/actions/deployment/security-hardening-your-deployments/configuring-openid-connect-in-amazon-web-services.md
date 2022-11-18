---
title: Configuration d’OpenID Connect dans Amazon Web Services
shortTitle: Configuring OpenID Connect in Amazon Web Services
intro: Utilisez OpenID Connect dans vos workflows pour vous authentifier auprès d’Amazon Web Services.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 6b57dc216c3f2ebc1edb73a8d588edb1967aebcb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876811'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

OpenID Connect (OIDC) permet à vos workflows {% data variables.product.prodname_actions %} d’accéder aux ressources dans Amazon Web Services (AWS), sans avoir à stocker d’informations d’identification AWS en tant que secrets {% data variables.product.prodname_dotcom %} à long terme. 

Ce guide explique comment configurer AWS pour approuver le protocole OIDC de {% data variables.product.prodname_dotcom %} en tant qu’identité fédérée et il inclut un exemple de workflow pour [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) qui utilise des jetons pour s’authentifier auprès d’AWS et accéder aux ressources.

## Prérequis

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Ajout du fournisseur d’identité à AWS

Pour ajouter le fournisseur OIDC {% data variables.product.prodname_dotcom %} à IAM, consultez la [documentation AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

- Pour l’URL du fournisseur : Utilisez {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- Pour le « public » : utilisez `sts.amazonaws.com` si vous utilisez l’[action officielle](https://github.com/aws-actions/configure-aws-credentials).

### Configuration du rôle et de la stratégie d’approbation

Pour configurer le rôle et l’approbation dans IAM, consultez la documentation AWS pour [« adopter un rôle »](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role) et [« créer un rôle pour la fédération d’identité web ou OpenID Connect Federation »](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html).

Modifiez la relation de stratégie pour ajouter le champ `sub` aux conditions de validation. Par exemple :

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

Dans l’exemple suivant, `ForAllValues` est utilisé pour correspondre à plusieurs clés de condition et `StringLike` est utilisé pour correspondre à n’importe quelle référence dans le dépôt spécifié. Notez que `ForAllValues` est [trop permissif](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_multi-value-conditions.html) et ne doit pas être utilisé par lui-même dans un effet `Allow`. Pour cet exemple, l’inclusion de `StringLike` signifie qu’un ensemble vide dans `ForAllValues` ne passe toujours pas la condition :

```json{:copy}
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::123456123456:oidc-provider/token.actions.githubusercontent.com"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringLike": {
                    "token.actions.githubusercontent.com:sub": "repo:octo-org/octo-repo:*"
                },
                "ForAllValues:StringEquals": {
                    "token.actions.githubusercontent.com:iss": "https://token.actions.githubusercontent.com",
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```


## Mise à jour de votre workflow {% data variables.product.prodname_actions %}

Pour mettre à jour vos workflows pour OIDC, vous devez apporter deux modifications à votre code YAML :
1. Ajoutez des paramètres d’autorisations pour le jeton.
2. Utilisez l’action [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) pour échanger le jeton OIDC (JWT) afin d’obtenir un jeton d’accès cloud.

### Ajout de paramètres d’autorisations

 {% data reusables.actions.oidc-permissions-token %}

### Demande du jeton d’accès

L’action `aws-actions/configure-aws-credentials` reçoit un jeton JWT à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %}, puis demande un jeton d’accès à partir d’AWS. Pour plus d’informations, consultez la [documentation](https://github.com/aws-actions/configure-aws-credentials) AWS.

- `<example-bucket-name>` : ajoutez ici le nom de votre compartiment S3.
- `<role-to-assume>` : remplacez l’exemple par votre rôle AWS.
- `<example-aws-region>` : ajoutez ici le nom de votre région AWS.

```yaml{:copy}
# Sample workflow to access AWS resources when workflow is tied to branch
# The workflow Creates static website using aws s3
name: AWS example workflow
on:
  push
env:
  BUCKET_NAME : "<example-bucket-name>"
  AWS_REGION : "<example-aws-region>"
# permission can be added at job level or workflow level    
permissions:
      id-token: write   # This is required for requesting the JWT
      contents: read    # This is required for actions/checkout
jobs:
  S3PackageUpload:
    runs-on: ubuntu-latest
    steps:
      - name: Git clone the repository
        uses: {% data reusables.actions.action-checkout %}
      - name: configure aws credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          role-to-assume: arn:aws:iam::1234567890:role/example-role
          role-session-name: samplerolesession
          aws-region: {% raw %}${{ env.AWS_REGION }}{% endraw %}
      # Upload a file to AWS s3
      - name:  Copy index.html to s3
        run: |
          aws s3 cp ./index.html s3://{% raw %}${{ env.BUCKET_NAME }}{% endraw %}/
```
