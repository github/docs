---
title: Manuelles Synchronisieren von Aktionen über GitHub.com
intro: 'Für Benutzer*innen, die Zugriff auf Aktionen von {% data variables.product.prodname_dotcom_the_website %} benötigen, kannst du bestimmte Aktionen in deinem Unternehmen synchronisieren.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107269'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

Wenn du Zugriff auf Aktionen von {% data variables.product.prodname_dotcom_the_website %} aktivieren möchtest, besteht die empfohlene Vorgehensweise darin, automatischen Zugriff auf alle Aktionen zu aktivieren. Dazu verwendest du {% data variables.product.prodname_github_connect %}, um {% data variables.product.product_name %} mit {% data variables.product.prodname_ghe_cloud %} zu integrieren. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen mithilfe von {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect).

Wenn du jedoch eine strengere Kontrolle darüber wünschst, welche Aktionen in deinem Unternehmen zulässig sind, kannst{% else %}du{% endif %} diesem Leitfaden folgen, um das Open-Source-[`actions-sync`](https://github.com/actions/actions-sync)-Tool von {% data variables.product.company_short %} dazu zu verwenden, einzelne Aktionsrepositorys von {% data variables.product.prodname_dotcom_the_website %} mit deinem Unternehmen zu synchronisieren.

## Informationen zum `actions-sync`-Tool

Das `actions-sync`-Tool muss auf einem Computer ausgeführt werden, von dem auf die {% data variables.product.prodname_dotcom_the_website %}-API sowie auf die API deiner {% data variables.product.product_name %}-Instanz zugegriffen werden kann. Der Computer muss nicht gleichzeitig mit beiden APIs verbunden sein.

Wenn mit dem Computer auf beide Systeme gleichzeitig zugegriffen werden kann, kannst du die Synchronisierung mit einem einzelnen `actions-sync sync`-Befehl ausführen. Wenn du jeweils nur auf ein System zugreifen kannst, kannst du die Befehle `actions-sync pull` und `push` verwenden.

Mit dem `actions-sync`-Tool können nur Aktionen von {% data variables.product.prodname_dotcom_the_website %} heruntergeladen werden, die in öffentlichen Repositorys gespeichert sind.

{% note %}

**Hinweis:** Das `actions-sync`-Tool ist für die Verwendung auf Systemen vorgesehen, auf denen {% data variables.product.prodname_github_connect %} nicht aktiviert ist. Wenn du das Tool auf einem System ausführst, auf dem {% data variables.product.prodname_github_connect %} aktiviert ist, wird möglicherweise der Fehler `The repository <repo_name> has been retired and cannot be reused` angezeigt. Dies deutet darauf hin, dass ein Workflow die Aktion direkt auf {% data variables.product.prodname_dotcom_the_website %} verwendet hat und der Namespace auf {% data variables.location.product_location %} deaktiviert ist. Weitere Informationen findest du unter [Automatisches Deaktivieren von Namespaces für Aktionen, auf die über {% data variables.product.prodname_dotcom_the_website%} zugegriffen wird](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom). 

{% endnote %}

## Voraussetzungen

* Bevor du das `actions-sync`-Tool verwendest, musst du dich vergewissern, dass alle Zielorganisationen bereits in deinem Unternehmen vorhanden bist. Im folgenden Beispiel wird veranschaulicht, wie Aktionen mit einer Organisation namens `synced-actions` synchronisiert werden. Weitere Informationen findest du unter [Erstellen einer neuen Organisation von Grund auf](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
* Du musst ein persönliches Zugriffstoken {% data variables.product.pat_generic %} für dein Unternehmen erstellen, mit dem das Erstellen und Schreiben in Repositorys in den Zielorganisationen möglich ist. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).{% ifversion ghes %}
* Wenn du die gebündelten Aktionen in der Organisation `actions` in {% data variables.location.product_location %} synchronisieren möchtest, musst du Besitzer der Organisation `actions` sein.

  {% note %}
  
  **Hinweis:** Standardmäßig sind nicht einmal Websiteadministratoren Besitzer der Organisation `actions` mit den gebündelten Aktionen.
  
  {% endnote %}

  Websiteadministratoren können den Befehl `ghe-org-admin-promote` in der Verwaltungsshell verwenden, um einen Benutzer zum Besitzer der Organisation `actions` mit den gebündelten Aktionen hochzustufen. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) und [`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote).

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   Im obigen Befehl werden die folgenden Argumente verwendet:

   * `--cache-dir`: Das Cacheverzeichnis auf dem Computer, auf dem der Befehl ausgeführt wird.
   * `--destination-token`: Ein {% data variables.product.pat_generic %} für die Zielunternehmensinstanz.
   * `--destination-url`: Die URL der Zielunternehmensinstanz.
   * `--repo-name`: Das Aktionsrepository, das synchronisiert werden soll. Dieses nimmt das Format `owner/repository:destination_owner/destination_repository` an.
     
     * Im obigen Beispiel wird das Repository [`actions/stale`](https://github.com/actions/stale) mit dem Repository `synced-actions/actions-stale` in der Zielunternehmensinstanz synchronisiert. Du musst die Organisation namens `synced-actions` in deinem Unternehmen erstellen, bevor du den obigen Befehl ausführst.
     * Wenn du `:destination_owner/destination_repository` weglässt, wird vom Tool der ursprüngliche Besitzer- und Repositoryname für dein Unternehmen verwendet. Bevor du den Befehl ausführst, musst du eine neue Organisation in deinem Unternehmen erstellen, die dem Besitzernamen der Aktion entspricht. Verwende am besten eine zentrale Organisation, um die synchronisierten Aktionen in deinem Unternehmen zu speichern, da dies bedeutet, dass du nicht mehrere neue Organisationen erstellen musst, wenn du Aktionen von verschiedenen Besitzern synchronisierst.
     * Du kannst mehrere Aktionen synchronisieren, indem du den Parameter `--repo-name` durch `--repo-name-list` oder `--repo-name-list-file` ersetzt. Weitere Informationen findest du in der [`actions-sync`-Infodatei](https://github.com/actions/actions-sync#actions-sync).
1. Nachdem das Aktionsrepository in deinem Unternehmen erstellt wurde, können Personen in deinem Unternehmen das Zielrepository verwenden, um in ihren Workflows auf die Aktion zu verweisen. Für die oben gezeigte Beispielaktion:
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses).
