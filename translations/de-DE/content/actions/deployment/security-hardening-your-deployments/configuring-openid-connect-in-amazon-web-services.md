---
title: Konfigurieren von OpenID Connect in Amazon Web Services
shortTitle: OpenID Connect in AWS
intro: 'Verwende OpenID Connect in deinen Workflows, um dich bei Amazon Web Services zu authentifizieren.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182257'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

OpenID Connect (OIDC) ermöglicht deinen {% data variables.product.prodname_actions %}-Workflows den Zugriff auf Ressourcen in Amazon Web Services (AWS), ohne dass die AWS-Anmeldeinformationen als langlebige {% data variables.product.prodname_dotcom %}-Geheimnisse gespeichert werden müssen. 

Dieser Leitfaden beschreibt die Konfiguration von AWS, um von {% data variables.product.prodname_dotcom %} als Verbundidentität zu vertrauen, und enthält ein Workflowbeispiel für die [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials), die Token zur Authentifizierung bei AWS und zum Zugriff auf Ressourcen verwendet.

## Voraussetzungen

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Hinzufügen des Identitätsanbieters zu AWS

Weitere Informationen zum Hinzufügen des {% data variables.product.prodname_dotcom %}-OIDC-Anbieters zu IAM findest du in der [AWS-Dokumentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

- Für die Anbieter-URL: Verwende {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}
- Für die „Zielgruppe“: Verwende `sts.amazonaws.com`, wenn du die [offizielle Aktion](https://github.com/aws-actions/configure-aws-credentials) verwendest.

### Konfigurieren der Rolle und der Vertrauensstellungsrichtlinie

Um die Rolle und die Vertrauensstellung in IAM zu konfigurieren, lies die AWS-Dokumentation zu [Annehmen einer Rolle](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role) und [Erstellen einer Rolle für Webidentität oder OpenID Connect-Verbund](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html).

Bearbeite die Vertrauensstellungsrichtlinie, um das `sub`-Feld den Überprüfungsbedingungen hinzuzufügen. Beispiel:

```json{:copy}
"Condition": {
  "StringEquals": {
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:aud": "sts.amazonaws.com",
    "{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/octo-branch"
  }
}
```

Im folgenden Beispiel wird `StringLike` mit einem Platzhalteroperator (`*`) verwendet, um jedem Branch, jedem Branch für das Mergen des Pull Requests oder jeder Umgebung aus der Organisation und dem Repository `octo-org/octo-repo` die Übernahme einer Rolle in AWS zu ermöglichen.

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


## Aktualisieren deines {% data variables.product.prodname_actions %}-Workflows

Um deine Workflows für OIDC zu aktualisieren, musst du zwei Änderungen an deinen YAML-Daten vornehmen:
1. Füge Berechtigungseinstellungen für das Token hinzu.
2. Tausche mit der [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials)-Aktion das OIDC-Token (JWT) gegen ein Cloudzugriffstoken aus.

### Hinzufügen von Berechtigungseinstellungen

 {% data reusables.actions.oidc-permissions-token %}

### Anfordern des Zugriffstokens

Die `aws-actions/configure-aws-credentials`-Aktion empfängt ein JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter und fordert dann ein Zugriffstoken von AWS an. Weitere Informationen findest du in der [AWS-Dokumentation](https://github.com/aws-actions/configure-aws-credentials).

- `<example-bucket-name>`: Füge den Namen deines S3-Buckets hier hinzu.
- `<role-to-assume>`: Ersetze das Beispiel durch deine AWS-Rolle.
- `<example-aws-region>`: Füge den Namen deiner AWS-Region hier hinzu.

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
