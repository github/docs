---
title: GitHub Task Runner verwenden
intro: 'Sie können {% data variables.product.prodname_dotcom %} Task Runner verwenden, wenn Ihr CI/CD-integriertes System Bestandteil des geschlossenen Early Access Program ist. Mit {% data variables.product.product_name %} Task Runner können Sie auf Basis einer Konfigurationsdatei in Ihrem Repository Ihren Code automatisch in einer {% data variables.product.prodname_github_app %} entwickeln, testen und bereitstellen.'
hidden: true
redirect_from:
  - /enterprise/admin/articles/using-github-task-runner
versions:
  enterprise-server: '*'
---


{% note %}

**Hinweis:** Bevor Sie den Zugriff auf {% data variables.product.prodname_dotcom %} Task Runner anfordern können, müssen Sie den Haftungsausschluss und die Haftungsbegrenzung des Early Access Program unter `EARLY ACCESS-LINK` für {% data variables.product.product_location_enterprise %} lesen und akzeptieren. Diese Dokumentation wird durch diese Bedingungen abgedeckt.

{% endnote %}

### In diesem Handbuch
- [Informationen zu {% data variables.product.prodname_dotcom %} Task Runner](#about-github-task-runner)
- [{% data variables.product.prodname_dotcom %} Task Runner-Binärdatei herunterladen](#downloading-the-github-task-runner-binary)
- [{% data variables.product.prodname_github_app %} für {% data variables.product.prodname_dotcom %} Task Runner auf Ihrer Appliance erstellen](#creating-the-github-task-runner-github-app-on-your-appliance)
- [App für {% data variables.product.prodname_dotcom %} Task Runner installieren](#installing-the-github-task-runner-app)
- [Aufgaben für ein Projekt ausführen](#running-tasks-for-a-project)

### Informationen zu {% data variables.product.prodname_dotcom %} Task Runner

{% data variables.product.product_name %} muss Aufgaben ausführen, die vom Dispatcher in die Warteschlange versetzt wurden. Hierbei handelt es sich um einen getrennten Dienst, der Webhook-Push-Ereignisse verarbeitet und Aufgaben in die Warteschlange versetzt.

Dispatcher ist standardmäßig in {% data variables.product.product_location_enterprise %} enthalten. Demgegenüber müssen Sie {% data variables.product.product_name %} Task Runner manuell auf Ihrer Appliance installieren. Zum Einrichten von {% data variables.product.product_name %} Task Runner müssen Sie die Runner-Binärdatei herunterladen, eine {% data variables.product.prodname_github_app %} auf Ihrer Appliance erstellen und einen Server so einrichten, dass er mit Dispatcher interagiert.

### {% data variables.product.prodname_dotcom %} Task Runner-Binärdatei herunterladen

Die Binärdatei der {% data variables.product.product_name %} Task Runner-Anwendung muss sich auf {% data variables.product.product_location_enterprise %} befinden. Besuchen Sie `https://HOSTNAME/_dispatcher/downloads/`, und ersetzen Sie `hostname` durch den {% data variables.product.product_location_enterprise %}-Hostnamen oder die -IP-Adresse, um die Binärdatei für die gewünschte Plattform herunterzuladen:

Führen Sie den Befehl `chmod` aus, um die Berechtigungen für die Verwendung von {% data variables.product.product_name %} Task Runner an der Befehlszeile zu ändern.

{% mac %}

```shell
$ chmod +x task-runner_darwin_amd64
```

{% endmac %}

{% windows %}

```shell
$ move task-runner_windows_amd64 task-runner_windows_amd64.exe
```

{% endwindows %}

{% linux %}

```shell
$ chmod +x task-runner_linux_amd64
```

{% endlinux %}

### {% data variables.product.prodname_github_app %} für {% data variables.product.prodname_dotcom %} Task Runner auf Ihrer Appliance erstellen

1. Erstellen Sie die Konfigurationsdatei `.task-runner.yaml` in Ihrem aktuellen Verzeichnis. Sie können das Flag `--config` verwenden, um die Datei in ein anderes Verzeichnis zu verschieben.

```shell
Task Runner-Einrichtung
```

2. Geben Sie den Hostnamen von {% data variables.product.product_location_enterprise %} ein.
3. Geben Sie ein persönliches Zugriffstoken ein, das mit spezialisierten Berechtigungen konfiguriert ist. Weitere Informationen finden Sie unter „[Einen persönlichen Zugriffstoken für die Befehlszeile erstellen](/articles/creating-a-personal-access-token-for-the-command-line/)“. Sie können `user`-Berechtigungen verwenden, wenn Sie die {% data variables.product.prodname_github_app %} für Ihr Konto erstellen. Alternativ können Sie `admin:org` verwenden, wenn Sie die {% data variables.product.prodname_github_app %} für eine Organisation erstellen.
4. Geben Sie einen Namen für die {% data variables.product.prodname_github_app %} ein, beispielsweise `Octocat Task Runner`.
5. Wenn Sie eine {% data variables.product.prodname_github_app %} für eine Organisation erstellen, geben Sie den Namen der Organisation ein.
6. Starten Sie Task Runner.

```shell
Task Runner-Start
```

### App für {% data variables.product.prodname_dotcom %} Task Runner installieren

1. Klicken Sie in der oberen rechten Ecke einer beliebigen Seite auf Ihr Profilfoto und anschließend auf „Settings“ (Einstellungen). ![Symbol für Einstellungen auf der Benutzerleiste](/assets/images/help/images/userbar-account-settings.png)
2. Klicken Sie auf der linken Seitenleiste auf **Developer settings** (Entwicklereinstellungen). ![Abschnitt „Developer settings“ (Entwicklereinstellungen)](/assets/images/help/images/developer_settings.png)
3. Klicken Sie auf der linken Seitenleiste auf **{% data variables.product.prodname_dotcom %} Apps**. ![Abschnitt „GitHub Apps“](/assets/images/help/images/github_apps.png)
4. Klicken Sie auf die App, die Sie installieren möchten.
5. Klicken Sie auf der linken Seitenleiste auf **Public page** (Öffentliche Seite). ![Abschnitt „Public page“ (Öffentliche Seite)](/assets/images/help/images/public-page-tab.png)
6. Klicken Sie auf **Install** (Installieren). ![Schaltfläche „Install“ (Installieren) auf der öffentlichen Seite von GitHub App](/assets/images/help/images/install-runner-public-page.png)
7. Wählen Sie **Only select repositories** (Nur Repositorys auswählen) aus, und geben Sie die Repository-Namen ein, wo Sie {% data variables.product.prodname_dotcom %} Task Runner installieren möchten. ![Repositorys für die Installation auswählen](/assets/images/help/images/repositories-install-task-runner.png)
8. Klicken Sie auf **Install** (Installieren). ![Schaltfläche „Install“ (Installieren) auf der Installationsseite von GitHub App](/assets/images/help/images/install-runner-installation-page.png)
9. Navigieren Sie zu einem Repository, in dem Sie die App installiert haben.
10. Erstellen Sie die Datei `github/tasks.gf`, die Folgendem ähnelt:

  ```
task "my task" {
command = "command-to-run"
runnerType = "Shell"
env =  {
  FOO="bar",
  BAR="baz"
}
}
  ```
12. Öffnen Sie einen Pull Request, um Ihrem Repository die Datei hinzuzufügen.
13. Übertragen Sie die Änderungen per Push-Vorgang, um die ausgeführten CI-Aufgaben anzuzeigen.

### Aufgaben für ein Projekt ausführen

Nach der Erstellung des Pull Requests überträgt die {% data variables.product.prodname_github_app %} das Ereignis per Push-Vorgang an Dispatcher, wo die Aufgabe in die Warteschlange versetzt und an {% data variables.product.prodname_dotcom %} Task Runner gesendet wird. Sobald {% data variables.product.prodname_dotcom %} Task Runner die Aufgaben empfängt und ausführt, werden sie Dispatcher gemeldet, der den Pull Request mit den Ergebnissen aktualisiert.

![CI-Testergebnisse des Pull Requests](/assets/images/help/images/task-results.png)
