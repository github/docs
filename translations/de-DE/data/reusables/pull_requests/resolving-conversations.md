### Unterhaltungen auflösen

Du kannst eine Unterhaltung in einem Pull Request auflösen, wenn Du den Pull Request geöffnet hast oder Du über Schreibzugriff auf das Repository verfügst, in dem der Pull Request geöffnet wurde.

Um anzugeben, dass eine Unterhaltung auf der Registerkarte **Files changed** (geänderte Dateien) abgeschlossen ist, klicke auf **Resolve conversation** (Unterhaltung auflösen).

![Pull-Request-Unterhaltung mit Schaltfläche „Resolve conversation“ (Unterhaltung auflösen)](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

Die gesamte Unterhaltung wird reduziert und als aufgelöst markiert. Dadurch lassen sich Unterhaltungen einfacher auffinden, die noch angegangen werden müssen.

![Aufgelöste Unterhaltung](/assets/images/help/pull_requests/resolved-conversation.png)

Wenn der Vorschlag in einem Kommentar nicht in den Geltungsbereich Deines Pull Requests fällt, kannst Du einen neuen Issue öffnen, das das Feedback nachverfolgt und zum ursprünglichen Kommentar zurück verknüpft. Weitere Informationen findest Du unter „[Öffnen eines Issue aus einem Kommentar](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
#### Discovering and navigating conversations

You can discover and navigate to all the conversations in your pull request using the **Conversations** menu that's shown at the top of the **Files Changed** tab.

From this view, you can see which conversations are unresolved, resolved, and outdated. This makes it easy to discover and resolve conversations.

![Showing the conversations menu](/assets/images/help/pull_requests/conversations-menu.png)
{% endif %}
