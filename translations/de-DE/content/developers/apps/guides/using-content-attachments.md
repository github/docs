---
title: Verwenden von Inhaltsanlagen
intro: 'Inhaltsanlagen ermöglichen es einer GitHub-App, weitere Informationen für URLs in GitHub bereitzustellen, die mit registrierten Domänen verknüpft sind. GitHub rendert die von der App bereitgestellten Informationen unter der URL im Text oder Kommentar eines Issues bzw. Pull Requests.'
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  ghes: <3.4
topics:
  - GitHub Apps
ms.openlocfilehash: f557a804d48144df24398f75e90a589d563d941b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081023'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## Informationen zu Inhaltsanlagen

Von einer GitHub-App können Domänen registriert werden, die `content_reference`-Ereignisse auslösen. Wenn jemand eine URL in den Textkörper oder Kommentar eines Issues oder Pull Requests aufnimmt, die mit einer registrierten Domäne verknüpft ist, empfängt die App den [`content_reference`-Webhook](/webhooks/event-payloads/#content_reference). Du kannst Inhaltsanlagen verwenden, um visuell mehr Kontext oder Daten für die URL bereitzustellen, die einem Issue oder Pull Request hinzugefügt wurde. Die URL muss eine vollqualifizierte URL sein, die entweder mit `http://` oder mit `https://` beginnt. URLs, die Teil eines Markdownlinks sind, werden ignoriert und lösen das `content_reference`-Ereignis nicht aus.

Bevor du die {% data variables.product.prodname_unfurls %}-API verwenden kannst, musst du Inhaltsverweise für deine GitHub-App konfigurieren:
* Gewähre der App `Read & write`-Berechtigungen für Inhaltsverweise.
* Registriere bis zu fünf gültige, öffentlich zugängliche Domänen, wenn du die Berechtigung „Inhaltsverweise“ konfigurierst. Verwende beim Konfigurieren der Inhaltsverweisdomänen keine IP-Adressen. Du kannst einen Domänennamen (example.com) oder eine Unterdomäne (subdomain.example.com) registrieren.
* Abonniere für deine App das Ereignis „Inhaltsverweis“.

Sobald die App in einem Repository installiert ist, wird von im Repository angelegten Issue- oder Pull-Request-Kommentaren, die URLs für die registrierten Domänen enthalten, ein Inhaltsverweisereignis generiert. Von der App muss innerhalb von sechs Stunden nach Veröffentlichung der Inhaltsverweis-URL eine Inhaltsanlage erstellt werden.

Durch Inhaltsanlagen werden URLs nicht rückwirkend aktualisiert. Dies funktioniert nur für URLs, die Issues oder Pull Requests hinzugefügt werden, nachdem du die App gemäß den oben beschriebenen Anforderungen konfiguriert hast und wenn dann eine Person die App in ihrem Repository installiert.

Unter [Erstellen einer GitHub-App](/apps/building-github-apps/creating-a-github-app/) oder [Bearbeiten der Berechtigungen einer GitHub-App](/apps/managing-github-apps/editing-a-github-app-s-permissions/) kannst du dich mit den Schritten vertraut machen, die zum Konfigurieren von GitHub-App-Berechtigungen und -Ereignisabonnements erforderlich sind.

## Implementieren des Inhaltsanlageflows

Der Inhaltsanlagenflow zeigt dir die Beziehung zwischen der URL im Issue oder Pull Request, dem `content_reference`-Webhookereignis und dem REST-API-Endpunkt, den du aufrufen musst, um das Issue oder den Pull Request mit zusätzlichen Informationen zu aktualisieren:

**Schritt 1.** Richte deine App mithilfe der in [Informationen zu Inhaltsanlagen](#about-content-attachments) beschriebenen Richtlinien ein. Außerdem kannst du das [Probot-App-Beispiel](#example-using-probot-and-github-app-manifests) verwenden, um mit Inhaltsanlagen zu beginnen.

**Schritt 2.** Füge die URL für die Domäne hinzu, die du für ein Issue oder einen Pull Request registriert hast. Du musst eine vollqualifizierte URL verwenden, die mit `http://` oder `https://` beginnt.

![Einem Issue hinzugefügte URL](/assets/images/github-apps/github_apps_content_reference.png)

**Schritt 3.** Die App erhält den [`content_reference`-Webhook](/webhooks/event-payloads/#content_reference) mit der Aktion `created`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {
    "full_name": "Codertocat/Hello-World",
  },
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Schritt 4.** Von der App werden die Felder `content_reference` `id` und `repository` `full_name` dazu verwendet, mithilfe der REST-API [eine Inhaltsanlage zu erstellen](/rest/reference/apps#create-a-content-attachment). Du benötigst auch die `installation` `id` für das Authentifizieren als [GitHub-App-Installation](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Der `body`-Parameter kann Markdown enthalten:

```shell
curl -X POST \
  {% data variables.product.api_url_code %}/repos/Codertocat/Hello-World/content_references/17/attachments \
  -H 'Accept: application/vnd.github.corsair-preview+json' \
  -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
  -d '{
    "title": "[A-1234] Error found in core/models.py file",
    "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
}'
```

Weitere Informationen zum Erstellen eines Installationstokens findest du unter [Authentifizieren als GitHub-App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

**Schritt 5.** Die neue Inhaltsanlage wird unter dem Link in einem Pull-Request- oder Issuekommentar angezeigt:

![An einen Verweis in einem Issue angefügter Inhalt](/assets/images/github-apps/content_reference_attachment.png)

## Verwenden von Inhaltsanlagen in GraphQL
Die `node_id` wird im [`content_reference`-Webhook](/webhooks/event-payloads/#content_reference)-Ereignis bereitgestellt, damit du auf die `createContentAttachment`-Mutation in der GraphQL-API verweisen kannst.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Beispiel:

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
cURL-Beispiel:

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Weitere Informationen zu `node_id` findest du unter [Verwenden globaler Knoten-IDs](/graphql/guides/using-global-node-ids).

## Beispiel für die Verwendung von Probot und GitHub-App-Manifesten

Zum schnellen Einrichten einer GitHub-App, die die {% data variables.product.prodname_unfurls %}-API verwenden kann, kannst du [Probot](https://probot.github.io/) verwenden. Unter [Erstellen von GitHub-Apps aus einem Manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/) kannst du dich damit vertraut machen, wie GitHub-App-Manifeste von Probot verwendet werden.

Führe die folgenden Schritte aus, um eine Probot-App zu erstellen:

1. [Erstelle eine neue GitHub-App](https://probot.github.io/docs/development/#generating-a-new-app).
2. Öffne das erstellte Projekt, und passe die Einstellungen in der Datei `app.yml` an. Abonniere das Ereignis `content_reference`, und aktiviere `content_references`-Schreibberechtigungen:

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. Füge der Datei `index.js` folgenden Code hinzu, um `content_reference`-Ereignisse zu verarbeiten und die REST-API aufzurufen:

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/repos/${context.payload.repository.full_name}/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Führe die GitHub-App lokal aus](https://probot.github.io/docs/development/#running-the-app-locally). Navigiere zu `http://localhost:3000`, und klicke auf die Schaltfläche **GitHub-App registrieren**:

   ![Registrieren einer GitHub-App mit Probot](/assets/images/github-apps/github_apps_probot-registration.png)

5. Installiere die App in einem Testrepository.
6. Erstelle ein Issue im Testrepository.
7. Füge dem von dir geöffneten Issue einen Kommentar hinzu, der die URL enthält, die du in der Datei `app.yml` konfiguriert hast.
8. Im Issuekommentar siehst du ein Update, das wie folgt aussieht:

   ![An einen Verweis in einem Issue angefügter Inhalt](/assets/images/github-apps/content_reference_attachment.png)
