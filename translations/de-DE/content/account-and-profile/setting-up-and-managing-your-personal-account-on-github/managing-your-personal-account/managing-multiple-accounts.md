---
title: Verwalten mehrerer Konten
intro: 'Wenn du eine einzelne Arbeitsstation verwendest, um an Projekten für mehrere Konten auf {% data variables.product.product_location %} mitzuwirken, kannst du deine Git-Konfiguration ändern, um den Beitragsprozess zu vereinfachen.'
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
ms.openlocfilehash: 3d1c31cb645d9f592121e955e07e8bf9ee473a82
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687170'
---
## Informationen zur Verwaltung mehrerer Konten

In einigen Fällen musst du möglicherweise mehrere Konten auf {% data variables.product.product_location %} verwenden. Du kannst beispielsweise über ein persönliches Konto für Open-Source-Beiträge verfügen, und zudem kann dein Arbeitgeber ein Benutzerkonto innerhalb eines Unternehmens für dich erstellen und verwalten. 

Du kannst dein {% data variables.product.prodname_managed_user %} nicht verwenden, um an öffentlichen Projekten auf {% data variables.product.product_location %} mitzuwirken, daher musst du Beiträge zu diesen Ressourcen über dein persönliches Konto vornehmen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% elsif ghec %}.{% endif %}

Wenn du eine einzige Arbeitsstation verwenden möchtest, um über beide Konten mitzuwirken, kannst du deine Beiträge mit Git vereinfachen, indem du eine Mischung von Protokollen für den Zugriff auf Repositorydaten nutzt oder Anmeldeinformationen auf Repositorybasis verwendest.

{% warning %}

**Warnung**: Sei vorsichtig, wenn du eine Arbeitsstation für Beiträge über zwei separate Konten verwendest. Die Verwaltung von zwei oder mehr Konten kann das Risiko erhöhen, dass interner Code versehentlich an die Öffentlichkeit gelangt.

{% endwarning %}

Wenn du kein {% data variables.product.prodname_managed_user %} verwenden musst, empfiehlt {% data variables.product.company_short %} die Verwendung eines persönlichen Kontos für all deine Arbeit auf {% data variables.product.product_location %}. Mit einem einzigen persönlichen Konto kannst du Beiträge zu einer Kombination aus persönlichen, Open-Source- oder professionellen Projekten mithilfe einer einzigen Identität verfassen. Andere Personen können das Konto einladen, sowohl zu Einzelrepositorys als auch zu organisationseigenen Repositorys beizutragen, und das Konto kann Mitglied mehrerer Organisationen oder Unternehmen sein.

## Beitragen zu zwei Konten über HTTPS und SSH

Wenn du Beiträge mit zwei Konten auf einer einzigen Arbeitsstation verfasst, kannst du auf Repositorys zugreifen, indem du für jedes Konto ein anderes Protokoll und andere Anmeldeinformationen verwendest. 

Git kann entweder das HTTPS- oder das SSH-Protokoll verwenden, um auf Daten in Repositorys auf {% data variables.product.product_location %} zuzugreifen und diese zu aktualisieren. Das zum Klonen eines Repositorys eingesetzte Protokoll legt fest, welche Anmeldeinformationen deine Arbeitsstation zum Authentifizieren verwendet, wenn du auf das Repository zugreifst. Bei diesem Ansatz der Kontoverwaltung speicherst du die Anmeldeinformationen für ein Konto, das für HTTPS-Verbindungen verwendet werden soll, und lädst einen SSH-Schlüssel in das andere Konto hoch, das für SSH-Verbindungen verwendet werden soll.

Du findest sowohl die HTTPS- als auch die SSH-URL zum Klonen eines Repositorys auf {% data variables.product.product_name %}. Weitere Informationen findest du unter [Klonen eines Repositorys](/repositories/creating-and-managing-repositories/cloning-a-repository).

Weitere Informationen zur Verwendung von SSH zum Zugreifen auf Repositorys auf {% data variables.product.product_name %} findest du unter [Herstellen einer Verbindung mit {% data variables.product.prodname_dotcom %} über SSH](/authentication/connecting-to-github-with-ssh).

## Beitragen zu mehreren Konten über HTTPS und PATs

Wenn du das HTTPS-Protokoll für beide Konten verwenden möchtest, kannst du für jedes Konto unterschiedliche persönliche Zugriffstoken (Personal Access Token, PAT) verwenden, indem du Git für das Speichern verschiedener Anmeldeinformationen für jedes Repository konfigurierst.

{% mac %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %}
   - Wenn die Ausgabe `osxkeychain` lautet, verwendest du den macOS-Schlüsselbund. Gib den folgenden Befehl ein, um die Anmeldeinformationen zu löschen.

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Öffne Git Bash.
{% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %}
   - Wenn die Ausgabe `wincred` lautet, verwendest du die Windows-Anmeldeinformationsverwaltung. Gib den folgenden Befehl ein, um die Anmeldeinformationen zu löschen.

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endlinux %}

## Beitragen zu mehreren Konten über SSH und `GIT_SSH_COMMAND`

Wenn du das SSH-Protokoll für beide Konten verwenden möchtest, kannst du verschiedene SSH-Schlüssel für jedes Konto verwenden. Weitere Informationen zur Verwendung von SSH findest du unter [Herstellen einer Verbindung mit {% data variables.product.prodname_dotcom %} mit SSH](/authentication/connecting-to-github-with-ssh).

Um unterschiedliche SSH-Schlüssel für verschiedene Repositorys zu verwenden, die du auf deine Arbeitsstation klonst, musst du eine Shell-Wrapper-Funktion für Git-Vorgänge schreiben. Die Funktion sollte die folgenden Schritte ausführen.
1. Lege den vollständigen Namen des Repositorys mit Besitzer fest, indem du einen Befehl wie z. B. `git config --get remote.origin.url` verwendest.
2. Wähle den richtigen SSH-Schlüssel für die Authentifizierung aus.
3. Ändere `GIT_SSH_COMMAND` entsprechend. Weitere Informationen zu `GIT_SSH_COMMAND` findest du unter [Umgebungsvariablen](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) in der Git-Dokumentation.

Der folgende Befehl legt beispielsweise die `GIT_SSH_COMMAND`-Umgebungsvariable fest, um einen SSH-Befehl anzugeben, der die private Schlüsseldatei unter **_PATH/TO/KEY/FILE_** für die Authentifizierung zum Klonen des Repositorys namens **_OWNER_**/**_REPOSITORY_** auf {% data variables.product.product_location %} verwendet.

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
