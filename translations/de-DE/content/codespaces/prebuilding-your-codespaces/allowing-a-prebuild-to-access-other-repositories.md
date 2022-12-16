---
title: Gewähren von Zugriff auf andere Repositorys durch einen Pebuild
shortTitle: Allow external repo access
intro: 'Du kannst deinem Prebuild den Zugriff auf andere {% data variables.product.prodname_dotcom %}-Repositorys gestatten, damit er erfolgreich erstellt werden kann.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: c88433a59ca297f419aec787f9cff1b6c3013c89
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107317'
---
Der {% data variables.product.prodname_actions %}-Workflow für eine Prebuildkonfiguration kann standardmäßig nur auf Inhalte im eigenen Repository zugreifen. Dein Projekt verwendet für die Erstellung der Entwicklungsumgebung möglicherweise zusätzliche Ressourcen, die sich an anderer Stelle befinden.

## Gewähren von Lesezugriff auf externe Ressourcen durch einen Prebuild

Du kannst Lesezugriff auf andere {% data variables.product.prodname_dotcom %}-Repositorys mit dem bzw. der gleichen Repositorybesitzer*in konfigurieren, indem du Berechtigungen in der von der Prebuildkonfiguration verwendeten `devcontainer.json`-Datei angibst. Weitere Informationen findest du unter [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

{% note %}

**Hinweis**: Du kannst nur Leseberechtigungen auf diese Weise autorisieren, und der bzw. die Besitzer*in des Zielrepositorys müssen dem bzw. der Besitzer*in des Repositorys entsprechen, für das du einen Prebuild erstellst. Wenn du z. B. eine Prebuildkonfiguration für das `octo-org/octocat`-Repository erstellst, kannst du Leseberechtigungen für andere `octo-org/*`-Repositorys erteilen, wenn dies in der `devcontainer.json` Datei angegeben ist und du selbst über diese Berechtigungen verfügst.

{% endnote %}

Beim Erstellen oder Bearbeiten einer Prebuildkonfiguration für eine `devcontainer.json`-Datei, die Lesezugriff auf andere Repositorys mit dem bzw. der gleichen Repositorybesitzer*in einrichtet, wirst du aufgefordert, diese Berechtigungen zu erteilen, wenn du auf **Erstellen** oder **Aktualisieren** klickst. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild).

## Gewähren von Schreibzugriff auf externe Ressourcen durch einen Prebuild

Wenn dein Projekt Schreibzugriff auf Ressourcen benötigt, oder wenn sich die externen Ressourcen in einem Repository mit einem anderen Besitzer befinden als das Repository, für das du eine Prebuildkonfiguration erstellst, kannst du ein {% data variables.product.pat_generic %} verwenden, um diesen Zugriff zu gewähren.

Du musst ein neues persönliches Konto erstellen und mit diesem Konto ein {% data variables.product.pat_v1 %} mit den geeigneten Bereichen generieren.

1. Erstelle auf {% data variables.product.prodname_dotcom %} ein neues persönliches Konto. 
   
   {% warning %}
   
   **Warnung**: Auch wenn du das {% data variables.product.pat_v1 %} mit deinem bestehenden persönlichen Konto generieren kannst, wird dringend empfohlen, ein neues Konto zu erstellen, das nur auf die Zielrepositorys zugreifen kann, die für dein Szenario benötigt werden. Dies wird empfohlen, da die `repository`-Berechtigung des Zugriffstokens den Zugriff auf alle Repositorys ermöglicht, auf die das Konto zugreifen kann. Weitere Informationen findest du unter [Registrieren eines neuen GitHub-Kontos](/get-started/signing-up-for-github/signing-up-for-a-new-github-account) und [Sicherheitshärtung für {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access).
   
   {% endwarning %}
1. Erteile dem neuen Konto Lesezugriff auf die benötigten Repositorys. Weitere Informationen findest du unter [Verwalten des Zugriffs einer Einzelperson auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository).
1. Erstelle ein {% data variables.product.pat_v1 %} mit dem Bereich `repo`, nachdem du dich bei dem neuen Konto angemeldet hast. Wähle optional den `read:packages`-Geltungsbereich aus, wenn der Prebuild die Pakete aus der {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} herunterladen muss. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

   ![Für ein {% data variables.product.pat_v1 %} ausgewählte Repository- und Paketbereiche](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   Wenn der Prebuild ein Paket aus der {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} nutzt, musst du dem neuen Konto entweder den Zugriff auf das Paket gewähren oder das Paket so konfigurieren, dass es die Zugriffsberechtigungen des Repositorys erbt, das gerade vorab erstellt wird. Weitere Informationen findest du unter [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).   
{% ifversion ghec %}1. Autorisiere das Token für die Verwendung mit dem einmaligen Anmelden mit SAML, damit es auf Repositorys zugreifen kann, die sich im Besitz von Organisationen befinden, für die SSO aktiviert ist. Weitere Informationen findest du unter [Autorisieren eines {% data variables.product.pat_generic %} für die Verwendung mit SAML-SSO](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

   ![Die Schaltfläche zum Konfigurieren von SSO für ein {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. Kopiere die Tokenzeichenfolge. Weise diese einem {% data variables.product.prodname_codespaces %}-Repositorygeheimnis zu.
1. Melde dich wieder bei dem Konto an, das über den Administratorzugriff auf das Repository verfügt. 
1. Erstelle im Repository, für das du {% data variables.product.prodname_github_codespaces %}-Prebuilds erstellen möchtest, ein neues {% data variables.product.prodname_codespaces %}-Repositorygeheimnis namens `CODESPACES_PREBUILD_TOKEN`, und gib ihm den Wert des von dir erstellen und kopierten Tokens. Weitere Informationen findest du unter [Verwalten von verschlüsselten Geheimnissen für dein Repository und deine Organisation für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository).

Das {% data variables.product.pat_generic %} wird für alle nachfolgenden Prebuilds verwendet, die für dein Repository erstellt werden. Im Gegensatz zu anderen {% data variables.product.prodname_codespaces %}-Repositorygeheimnissen wird das `CODESPACES_PREBUILD_TOKEN`-Geheimnis nur für das Prebuilding verwendet und kann nicht in Codespaces verwendet werden, die aus deinem Repository erstellt wurden.

## Weitere Informationsquellen

- [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [Problembehandlung bei Prebuilds](/codespaces/troubleshooting/troubleshooting-prebuilds)
