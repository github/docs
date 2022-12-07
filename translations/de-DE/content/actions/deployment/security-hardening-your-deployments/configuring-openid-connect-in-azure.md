---
title: Konfigurieren von OpenID Connect in Azure
shortTitle: Configuring OpenID Connect in Azure
intro: Verwende OpenID Connect in deinen Workflows zum Authentifizieren bei Azure.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 64c7371eec248c7ebeb45a50091b9ef5dbed645e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105211'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

OpenID Connect (OIDC) ermöglicht deinen {% data variables.product.prodname_actions %}-Workflows den Zugriff auf Ressourcen in Azure, ohne dass die Azure-Anmeldeinformationen als langlebige {% data variables.product.prodname_dotcom %}-Geheimnisse gespeichert werden müssen. 

Dieser Leitfaden gibt einen Überblick über die Konfiguration von Azure, um OIDC von {% data variables.product.prodname_dotcom %} als Verbundidentität zu vertrauen, und enthält ein Workflowbeispiel für die [`azure/login`](https://github.com/Azure/login)-Aktion, die Token zur Authentifizierung bei Azure und zum Zugriff auf Ressourcen verwendet.

## Voraussetzungen

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Hinzufügen der Verbundanmeldeinformationen zu Azure

Der OIDC-Anbieter von {% data variables.product.prodname_dotcom %} arbeitet mit dem Workloadidentitätsverbund von Azure zusammen. Eine Übersicht findest du in der Dokumentation von Microsoft unter [Workloadidentitätsverbund (Vorschau)](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation).

Um den OIDC-Identitätsanbieter in Azure zu konfigurieren, musst du die folgende Konfiguration ausführen. Anweisungen zum Vornehmen dieser Änderungen findest du in der [Azure-Dokumentation](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Erstelle eine Azure Active Directory-Anwendung und einen Dienstprinzipal.
2. Füge Verbundanmeldeinformationen für die Azure Active Directory-Anwendung hinzu.
3. Erstelle {% data variables.product.prodname_dotcom %}-Geheimnisse zum Speichern der Azure-Konfiguration.

Weitere Anleitungen zum Konfigurieren des Identitätsanbieters:

- Stelle sicher, dass du [Konfigurieren der OIDC-Vertrauensstellung mit der Cloud](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud) gelesen hast, um die Sicherheit zu verstärken. Ein Beispiel findest du unter [Konfigurieren des Antragstellers in deinem Cloudanbieter](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Für die `audience`-Einstellung wird der Wert `api://AzureADTokenExchange` empfohlen, aber du kannst hier auch andere Werte angeben.

## Aktualisieren deines {% data variables.product.prodname_actions %}-Workflows

Um deine Workflows für OIDC zu aktualisieren, musst du zwei Änderungen an deinen YAML-Daten vornehmen:
1. Füge Berechtigungseinstellungen für das Token hinzu.
2. Tausche mit der [`azure/login`](https://github.com/Azure/login)-Aktion das OIDC-Token (JWT) gegen ein Cloudzugriffstoken aus.

### Hinzufügen von Berechtigungseinstellungen

 {% data reusables.actions.oidc-permissions-token %}

### Anfordern des Zugriffstokens

Die [`azure/login`](https://github.com/Azure/login)-Aktion empfängt ein JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter und fordert dann ein Zugriffstoken von Azure an. Weitere Informationen findest du in der [`azure/login`](https://github.com/Azure/login)-Dokumentation.

Im folgenden Beispiel wird ein OIDC-ID-Token mit Azure ausgetauscht, um ein Zugriffstoken zu empfangen, das dann für den Zugriff auf Cloudressourcen verwendet werden kann.

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
