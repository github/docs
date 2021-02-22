---
title: Selbst-gehostete Runner in einem Workflow benutzen
intro: 'Um selbst-gehostete Runner in einem Workflow zu verwenden, kannst Du mittels Labels den Runner-Typ für einen Job angeben.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Informationen zum Erstellen benutzerdefinierter und Standard-Labels findest Du unter „[Labels mit selbst-gehosteten Runnern verwenden](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)“.

### Selbst-gehostete Runner in einem Workflow benutzen

Mithilfe von Labels kannst Du Workflow-Jobs entsprechend ihrer gemeinsamen Merkmale an bestimmte Typen von selbst-gehosteten Runnern senden. Wenn Dein Job beispielsweise eine bestimmte Hardwarekomponente oder ein bestimmtes Softwarepaket benötigt, kannst Du einem Runner ein benutzerdefiniertes Label zuweisen und dann Deinen Job so konfigurieren, dass er nur auf Runnern mit diesem Label ausgeführt wird.

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

Weitere Informationen findest Du unter „[Workflow Syntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

### Standard-Labels verwenden, um Jobs zu lenken

Ein selbst-gehosteter Runner erhält automatisch bestimmte Labels, wenn er zu {% data variables.product.prodname_actions %} hinzugefügt wird. Diese werden verwendet, um das Betriebssystem und die Hardwareplattform anzuzeigen:

* `self-hosted`: Standard-Label, welches allen selbst-gehosteten Runnern zugeteilt wird.
* `Linux`, `windows`, oder `macOS`: Je nach Betriebssystem zugeteilt.
* `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

Du kannst die YAML Deines Workflows verwenden, um Jobs an eine Kombination dieser Labels zu senden. In diesem Beispiel ist ein selbst-gehosteter Runner, der allen drei Labels entspricht, berechtigt, den Job auszuführen:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - Führe diesen Job auf einem selbst-gehosteten Runner aus.
- `linux` - Verwende nur einen Linux-basierten Runner.
- `ARM64` - Verwende nur einen Runner basierend auf ARM64-Hardware.

Die Standard-Labels sind fest und können weder geändert noch entfernt werden. Erwäge die Verwendung benutzerdefinierter Labels, wenn Du mehr Kontrolle über die Job-Steuerung benötigst.

### Benutzerdefinierte Labels verwenden, um Jobs zu lenken

Du kannst jederzeit eigene Labels erstellen und Deinen selbst-gehosteten Runnern zuordnen. Mit benutzerdefinierten Labels kannst Du Jobs an bestimmte Typen von selbst-gehosteten Runnern senden, je nachdem, welche Labels sie haben.

Wenn Du z.B. einen Job hast, der einen bestimmten Typ von Grafikhardware erfordert, kannst Du einen benutzerdefinierten Label mit dem Namen `gpu` erstellen und ihn jenen Runnern zuordnen, auf denen diese Hardware installiert ist. Ein selbst-gehosteter Runner, der allen zugewiesenen Labels entspricht, ist dann berechtigt, den Job auszuführen.

Dieses Beispiel zeigt einen Job, der Standard- und benutzerdefinierte Labels kombiniert:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - Führe diesen Job auf einem selbst-gehosteten Runner aus.
- `linux` - Verwende nur einen Linux-basierten Runner.
- `x64` - Verwende nur einen Runner basierend auf x64-Hardware.
- `gpu` - Dieses benutzerdefinierte Label wurde selbst-gehosteten Runnern mit der GPU-Hardware manuell zugewiesen.

Diese Labels funktionieren kumulativ, so dass die Labels eines selbst-gehosteten Runners mit allen vier übereinstimmen müssen, um den Job abarbeiten zu können.

### Routing precedence for self-hosted runners

When routing a job to a self-hosted runner, {% data variables.product.prodname_dotcom %} looks for a runner that matches the job's `runs-on` labels:

1. {% data variables.product.prodname_dotcom %} first searches for a runner at the repository level, then at the organization level{% if currentVersion ver_gt "enterprise-server@2.21" %}, then at the enterprise level{% endif %}.
2. The job is then sent to the first matching runner that is online and idle.
   - If all matching online runners are busy, the job will queue at the level with the highest number of matching online runners.
   - If all matching runners are offline, the job will queue at the level with the highest number of matching offline runners.
   - If there are no matching runners at any level, the job will fail.
   - If the job remains queued for more than 24 hours, the job will fail.
