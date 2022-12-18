---
title: Konfigurieren von OpenID Connect in Google Cloud Platform
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: Verwende OpenID Connect in deinen Workflows zum Authentifizieren bei Google Cloud Platform.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091374'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

OpenID Connect (OIDC) ermöglicht deinen {% data variables.product.prodname_actions %}-Workflows den Zugriff auf Ressourcen in Google Cloud Platform (GCP), ohne dass die GCP-Anmeldeinformationen als langlebige {% data variables.product.prodname_dotcom %}-Geheimnisse gespeichert werden müssen. 

Dieser Leitfaden gibt einen Überblick über die Konfiguration von GCP, um von {% data variables.product.prodname_dotcom %} als Verbundidentität zu vertrauen, und enthält ein Workflowbeispiel für die [`google-github-actions/auth`](https://github.com/google-github-actions/auth)-Aktion, die Token zur Authentifizierung bei GCP und zum Zugriff auf Ressourcen verwendet.

## Voraussetzungen

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Hinzufügen eines Google Cloud-Workloadidentitätsanbieters

Um den OIDC-Identitätsanbieter in GCP zu konfigurieren, musst du die folgende Konfiguration ausführen. Anweisungen zum Vornehmen dieser Änderungen findest du in der [GCP-Dokumentation](https://github.com/google-github-actions/auth).

1. Erstelle einen neuen Identitätspool.
2. Konfiguriere die Zuordnung, und füge Bedingungen hinzu.
3. Verbinde den neuen Pool mit einem Dienstkonto. 

Weitere Anleitungen zum Konfigurieren des Identitätsanbieters:

- Stelle sicher, dass du [Konfigurieren der OIDC-Vertrauensstellung mit der Cloud](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud) gelesen hast, um die Sicherheit zu verstärken. Ein Beispiel findest du unter [Konfigurieren des Antragstellers in deinem Cloudanbieter](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Damit das Dienstkonto für die Konfiguration verfügbar ist, muss es der Rolle `roles/iam.workloadIdentityUser` zugewiesen werden. Weitere Informationen findest du in der [GCP-Dokumentation](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- Die zu verwendende Aussteller-URL: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## Aktualisieren deines {% data variables.product.prodname_actions %}-Workflows

Um deine Workflows für OIDC zu aktualisieren, musst du zwei Änderungen an deinen YAML-Daten vornehmen:
1. Füge Berechtigungseinstellungen für das Token hinzu.
2. Tausche mit der [`google-github-actions/auth`](https://github.com/google-github-actions/auth)-Aktion das OIDC-Token (JWT) gegen ein Cloudzugriffstoken aus.

### Hinzufügen von Berechtigungseinstellungen

 {% data reusables.actions.oidc-permissions-token %}

### Anfordern des Zugriffstokens

Die `google-github-actions/auth` Aktion empfängt ein JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter und fordert dann ein Zugriffstoken von GCP an. Weitere Informationen findest du in der [GCP-Dokumentation](https://github.com/google-github-actions/auth).

In diesem Beispiel ist ein Auftrag namens `Get_OIDC_ID_token` vorhanden, der Aktionen verwendet, um eine Liste der Dienste von GCP anzufordern.

- `<example-workload-identity-provider>`: Ersetze diese Angabe durch den Pfad zu deinem Identitätsanbieter in GCP. Zum Beispiel, `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: Ersetze diese Angabe durch den Namen deines Dienstkontos in GCP.
- `<project-id>`: Ersetze diese Angabe durch die ID deines GCP-Projekts.

Diese Aktion tauscht ein {% data variables.product.prodname_dotcom %}-OIDC-Token gegen ein Google Cloud-Zugangstoken unter Verwendung von [Workloadidentitätsverbund](https://cloud.google.com/iam/docs/workload-identity-federation).

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
