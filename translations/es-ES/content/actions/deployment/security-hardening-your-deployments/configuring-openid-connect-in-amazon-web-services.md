---
title: Configurar OpenID Connect en Amazon Web Services
shortTitle: OpenID Connect in AWS
intro: Utiliza OpenID Connect con tus flujos de trabajo para autenticarte con Amazon Web Services.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 597ea408c2f0172eb0eacf07fc2d1ad320872f09
ms.sourcegitcommit: 94ba3891ebcc3c05812f468e4adafdd15b99e390
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182261'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} accedan a los recursos de Amazon Web Services (AWS) sin necesidad de almacenar las credenciales de AWS como secretos de {% data variables.product.prodname_dotcom %} de larga duración. 

En esta guía se explica cómo configurar AWS para que confíe en el OIDC de {% data variables.product.prodname_dotcom %} como una entidad federada y se incluye un ejemplo de flujo de trabajo para [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) en el que se usan tokens para autenticarse en AWS y acceder a los recursos.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Agregar el proveedor de identidad a AWS

Para agregar el proveedor de OIDC de {% data variables.product.prodname_dotcom %} a IAM, vea la [documentación de AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

- Para la dirección URL del proveedor: usa {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- Para "Público": utilice `sts.amazonaws.com` si usa la [acción oficial](https://github.com/aws-actions/configure-aws-credentials).

### Configurar el rol y política de confianza

Para configurar el rol y la confianza en IAM, vea la documentación de AWS sobre ["Asumir un rol"](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role) y ["Creación de un rol para la identidad web o la federación de OpenID Connect"](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html).

Edite la directiva de confianza para agregar el campo `sub` a las condiciones de validación. Por ejemplo:

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

En el ejemplo siguiente, `StringLike` se usa con un operador comodín (`*`) para permitir que cualquier rama, rama de combinación de solicitudes de incorporación de cambios o entorno del repositorio y la organización `octo-org/octo-repo` asuman un rol en AWS.

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
                "StringEquals": {
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}
```


## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Use la acción [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) para intercambiar el token de OIDC (JWT) por un token de acceso a la nube.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

### Solicitar el token de acceso

La acción `aws-actions/configure-aws-credentials` recibe un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y luego solicita un token de acceso a AWS. Para más información, vea la [documentación](https://github.com/aws-actions/configure-aws-credentials) de AWS.

- `<example-bucket-name>`: agregue aquí el nombre del cubo de S3.
- `<role-to-assume>`: reemplace el ejemplo por el rol de AWS.
- `<example-aws-region>`: agregue aquí el nombre de la región de AWS.

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
