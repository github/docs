---
title: Exitcodes für Aktionen setzen
shortTitle: Exitcodes setzen
intro: 'Du kannst mittels Exitcodes den Status einer Aktion setzen. {% data variables.product.prodname_dotcom %} zeigt Status, um erfolgreiche oder fehlgeschlagene Aktionen kenntlich zu machen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Exitcodes

{% data variables.product.prodname_dotcom %} uses the exit code to set the action's check run status, which can be `success` or `failure`.

| Exit-Status    | Prüflaufstatus         | Beschreibung                                                                                                                                                                                                                                                                          |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`            | `success (Erfolg)`     | Die Aktion wurde erfolgreich abgeschlossen, und andere Aufgaben, die von dieser Aktion abhängig sind, können nun starten.                                                                                                                                                             |
| Nicht-Nullwert | `failure (Fehlschlag)` | Alle anderen Exit-Codes weisen darauf hin, dass die Aktion fehlgeschlagen ist. Wenn eine Aktion fehlschlägt, werden alle derzeit laufenden Aktionen abgebrochen, und künftige Aktionen werden übersprungen. Sowohl der Prüflauf als auch die Prüfsuite erhalten den Status `failure`. |

### Fehler-Exit-Code in einer JavaScript-Aktion festlegen

Wenn Sie eine JavaScript-Aktion erstellen, können Sie mit dem Aktions-Toolkit [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) eine Meldung protokollieren und einen Fehler-Exit-Code festlegen. Ein Beispiel:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Weitere Informationen finden Sie unter „[Eine JavaScript-Aktion erstellen](/articles/creating-a-javascript-action)“.

### Fehler-Exit-Code in einer Docker-Container-Aktion festlegen

Wenn Sie eine Docker-Container-Aktion erstellen, können Sie einen Fehler-Exit-Code im `entrypoint.sh`-Skript festlegen. Ein Beispiel:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Weitere Informationen finden Sie unter „[Eine Docker-Container-Aktion erstellen](/articles/creating-a-docker-container-action)“.
