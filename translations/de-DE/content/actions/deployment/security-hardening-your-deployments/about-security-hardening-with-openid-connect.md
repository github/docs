---
title: Informationen zur Sicherheitshärtung mit OpenID Connect
shortTitle: Security hardening with OpenID Connect
intro: 'OpenID Connect ermöglicht es deinen Workflows, kurzlebige Token direkt mit deinem Cloudanbieter auszutauschen.'
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90a2f8c6cb2114f060bfbd0f422cb1ef6dbca604
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192031'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht über OpenID Connect

{% data variables.product.prodname_actions %}-Workflows sind häufig für den Zugriff auf einen Cloudanbieter (z. B. AWS, Azure, GCP oder HashiCorp Vault) ausgelegt, um Software bereitzustellen oder die Clouddienste zu verwenden. Bevor der Workflow auf diese Ressourcen zugreifen kann, werden dem Cloudanbieter Anmeldeinformationen, z. B. ein Kennwort oder ein Token, bereitgestellt. Diese Anmeldeinformationen werden in der Regel als Geheimnis in {% data variables.product.prodname_dotcom %} gespeichert, und der Workflow stellt dieses Geheimnis bei jeder Ausführung für den Cloudanbieter bereit. 

Die Verwendung von hart codierten Geheimnissen erfordert jedoch, dass du Anmeldeinformationen im Cloudanbieter erstellst und dann als Geheimnis in {% data variables.product.prodname_dotcom %} duplizierst. 

Mit OpenID Connect (OIDC) kannst du einen anderen Ansatz verfolgen, indem du deinen Workflow so konfigurierst, dass ein kurzlebiges Zugriffstoken direkt vom Cloudanbieter angefordert wird. Dein Cloudanbieter muss auch OIDC auf seiner Seite unterstützen, und du musst eine Vertrauensstellung konfigurieren, die steuert, welche Workflows die Zugriffstoken anfordern können. Zu den Anbietern, die derzeit OIDC unterstützen, gehören Amazon Web Services, Azure, Google Cloud Platform und HashiCorp Vault.

### Vorteile der Verwendung von OIDC

Wenn du deine Workflows für die Verwendung von OIDC-Token aktualisierst, kannst du die folgenden bewährten Sicherheitspraktiken übernehmen:

- **Keine Cloudgeheimnisse:** Du musst deine Cloudanmeldeinformationen nicht als langlebige {% data variables.product.prodname_dotcom %}-Geheimnisse duplizieren. Stattdessen kannst du die OIDC-Vertrauensstellung auf deinem Cloudanbieter konfigurieren und dann deine Workflows aktualisieren, um ein kurzlebiges Zugriffstoken vom Cloudanbieter über OIDC anzufordern. 
- **Authentifizierungs- und Autorisierungsverwaltung**: Du hast genauere Kontrolle darüber, wie Workflows Anmeldeinformationen verwenden können, indem du die Authentifizierungs- (authN) und Autorisierungstools (authZ) deines Cloudanbieters verwendest, um den Zugriff auf Cloudressourcen zu steuern.
- **Rotierende Anmeldeinformationen**: Mit OIDC stellt dein Cloudanbieter ein kurzlebiges Zugriffstoken aus, das nur für einen einzelnen Auftrag gültig ist und dann automatisch abläuft.

### Erste Schritte mit OIDC

Das folgende Diagramm enthält einen Überblick darüber, wie der OIDC-Anbieter von {% data variables.product.prodname_dotcom %} mit deinen Workflows und dem Cloudanbieter integriert ist:

![OIDC-Diagramm](/assets/images/help/images/oidc-architecture.png)

1. Erstelle in deinem Cloudanbieter eine OIDC-Vertrauensstellung zwischen deiner Cloudrolle und deinen {% data variables.product.prodname_dotcom %}-Workflows, die Zugriff auf die Cloud benötigen.
2. Jedes Mal, wenn dein Auftrag ausgeführt wird, generiert der OIDC-Anbieter von {% data variables.product.prodname_dotcom %} automatisch ein OIDC-Token. Dieses Token enthält mehrere Ansprüche zum Einrichten einer sicherheitsfesten und überprüften Identität über den spezifischen Workflow, der versucht, sich zu authentifizieren.
3. Du kannst einen Schritt oder eine Aktion in deinem Auftrag einschließen, um dieses Token vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} anzufordern und es für den Cloudanbieter bereitzustellen.
4. Nachdem der Cloudanbieter die im Token dargestellten Ansprüche erfolgreich überprüft hat, stellt er ein kurzlebiges Cloudzugriffstoken bereit, das nur für die Dauer des Auftrags verfügbar ist.

## Konfigurieren der OIDC-Vertrauensstellung mit der Cloud

Wenn du deine Cloud so konfigurierst, dass sie dem OIDC-Anbieter von {% data variables.product.prodname_dotcom %} vertraut, **musst** du Bedingungen hinzufügen, die eingehende Anforderungen filtern, sodass nicht vertrauenswürdige Repositorys oder Workflows keine Zugriffstoken für deine Cloudressourcen anfordern können:

- Bevor dein Cloudanbieter ein Zugriffstoken erteilt, überprüft er, ob die [`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) und andere Ansprüche, die zum Festlegen von Bedingungen in seinen Vertrauenseinstellungen verwendet werden, mit denen im JSON-Webtoken (JWT) der Anforderung übereinstimmen. Daher musst du darauf achten, den _Antragsteller_ und andere Bedingungen in deinem Cloudanbieter ordnungsgemäß zu definieren.
- Die OIDC-Konfigurationsschritte und die Syntax zum Festlegen von Bedingungen für Cloudrollen (mit _Antragsteller_ und anderen Ansprüchen) variieren je nach dem von Ihnen verwendeten Cloudanbieter. Einige Beispiele findest du unter [Beispiele für Antragstelleransprüche](#example-subject-claims).
 
### Grundlegendes zum OIDC-Token

Jeder Auftrag fordert ein OIDC-Token vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} an, der mit einem automatisch generierten JSON-Webtoken (JWT) reagiert, das für jeden Workflowauftrag, in dem es generiert wird, eindeutig ist. Wenn der Auftrag ausgeführt wird, wird das OIDC-Token für den Cloudanbieter bereitgestellt. Zur Überprüfung des Tokens ermittelt der Cloudanbieter, ob der Antragsteller des OIDC-Tokens und andere Ansprüche mit den Bedingungen übereinstimmen, die für die OIDC-Vertrauensdefinition der Cloudrolle vorkonfiguriert wurden.

Im folgenden Beispiel verwendet das OIDC-Token einen Antragsteller (`sub`), der auf eine Auftragsumgebung namens `prod` im Repository `octo-org/octo-repo` verweist.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

Zum Anzeigen aller Ansprüche, die vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} unterstützt werden, lies die `claims_supported`-Einträge unter {% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %}https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

Das Token umfasst die Standardzielgruppe, den Aussteller und die Antragstelleransprüche:

|    Anspruch    | BESCHREIBUNG            |
| ----------- | ---------------------- |
| `aud`| _(Zielgruppe)_ Standardmäßig ist dies die URL des Repositorybesitzers, z. B. die Organisation, die das Repository besitzt. Dies ist der einzige Anspruch, der angepasst werden kann. Du kannst eine benutzerdefinierte Zielgruppe mit einem Toolkitbefehl festlegen: [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)          | 
| `iss`| _(Aussteller)_ Der Aussteller des OIDC-Tokens: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(Antragsteller)_ Definiert den Antragstelleranspruch, der vom Cloudanbieter überprüft werden soll. Diese Einstellung ist wichtig, um sicherzustellen, dass Zugriffstoken nur auf vorhersehbare Weise zugewiesen werden.|

Das OIDC-Token enthält auch zusätzliche Standardansprüche:

|    Anspruch    | BESCHREIBUNG            |
| ----------- | ---------------------- |
| `alg`| _(Algorithmus)_ Der Algorithmus, der vom OIDC-Anbieter verwendet wird.                    | 
| `exp`| _(Ablaufzeit)_ Identifiziert die Ablaufzeit des JWT.                    | 
| `iat`| _(Ausgestellt um)_ Der Zeitpunkt, zu dem das JWT ausgestellt wurde.                   | 
| `jti`| _(JWT-Tokenbezeichner)_ Eindeutiger Bezeichner für das OIDC-Token.                   | 
| `kid`| _(Schlüsselbezeichner)_ Eindeutiger Schlüssel für das OIDC-Token.                   | 
| `nbf`| _(Nicht vor)_ JWT ist vor diesem Zeitpunkt nicht gültig für die Verwendung.                   | 
| `typ`| _Typ_ Beschreibt den Tokentyp. Dies ist ein JSON Web Token (JWT).                   | 

Das Token enthält auch benutzerdefinierte Ansprüche, die von {% data variables.product.prodname_dotcom %} bereitgestellt werden:

|    Anspruch    | BESCHREIBUNG            |
| ----------- | ---------------------- |
| `actor`| Das persönliche Konto, das die Workflowausführung ausgelöst hat.                   | 
| `actor_id`| Die ID des persönlichen Kontos, das die Workflowausführung ausgelöst hat.             |
| `base_ref`| Der Zielbranch des Pull Requests in einer Workflowausführung.                   | 
| `environment`| Der Name der vom Auftrag verwendeten Umgebung.                    | 
| `event_name`| Der Name des Ereignisses, das den Workflow-Lauf ausgelöst hat.                    | 
| `head_ref`| Der Quellbranch des Pull Requests in einer Workflowausführung.                   | 
| `job_workflow_ref`| Dies ist der Ref-Pfad zum wiederverwendbaren Workflow, der von diesem Auftrag verwendet wird. Weitere Informationen findest du unter [Verwenden von OpenID Connect mit wiederverwendbaren Workflows](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows).                  | 
| `ref`| _(Referenz)_ Die Git-Ref, die die Workflowausführung ausgelöst hat.                   | 
| `ref_type`| Der `ref`-Typ, z. B. „Branch“.                  | 
| `repository_visibility` | Die Sichtbarkeit des Repositorys, in dem der Workflow ausgeführt wird. Akzeptiert die folgenden Werte: `internal`, `private` oder `public`.                   | 
| `repository`| Das Repository, aus dem der Workflow ausgeführt wird.                   | 
| `repository_id`| Das Repository, über das der Workflow ausgeführt wird.  |
| `repository_owner`| Der Name der Organisation, in der das `repository` gespeichert wird.                   | 
| `repository_owner_id`| Die ID der Organisation, in der das `repository` gespeichert wird.            |
| `run_id`| Die ID der Workflowausführung, die den Workflow ausgelöst hat.                   | 
| `run_number`| Die Angabe, wie oft dieser Workflow ausgeführt wurde.                   | 
| `run_attempt`| Die Angabe, wie oft diese Workflowausführung wiederholt wurde.                    | 
| `workflow`| Der Name des Workflows.                   | 

### Definieren von Vertrauensbedingungen für Cloudrollen mithilfe von OIDC-Ansprüchen

Bei OIDC erfordert ein {% data variables.product.prodname_actions %}-Workflow ein Token, um auf Ressourcen in deinem Cloudanbieter zuzugreifen. Der Workflow fordert ein Zugriffstoken von deinem Cloudanbieter an, das die Details überprüft, die vom JWT dargestellt werden. Wenn die Vertrauenskonfiguration im JWT übereinstimmt, reagiert dein Cloudanbieter mit der Ausgabe eines temporären Tokens für den Workflow, das dann für den Zugriff auf Ressourcen in deinem Cloudanbieter verwendet werden kann. Du kannst deinen Cloudanbieter so konfigurieren, dass nur auf Anforderungen reagiert wird, die aus dem Repository einer bestimmten Organisation stammen; du kannst auch zusätzliche Bedingungen angeben, die unten beschrieben werden.

Zielgruppen- und Antragstelleransprüche werden in der Regel zusammen verwendet, während die Bedingungen für die Cloudrolle/Ressourcen festgelegt werden, um den Zugriff auf die GitHub-Workflows zu beschränken.
- **Zielgruppe**: Standardmäßig verwendet dieser Wert die URL der Organisation oder des Repositorybesitzers. Damit kann eine Bedingung festgelegt werden, nach der nur die Workflows in der bestimmten Organisation auf die Cloudrolle zugreifen können.
- **Antragsteller**: Verfügt standardmäßig über ein vordefiniertes Format und ist eine Verkettung einiger der wichtigsten Metadaten zum Workflow, z. B. die {% data variables.product.prodname_dotcom %}-Organisation, Repository, Branch oder zugehörige [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment)-Umgebung. Unter [Beispiele für Antragstelleransprüche](#example-subject-claims) wird dargestellt, wie der Antragstelleranspruch aus verketteten Metadaten zusammengefügt wird.

Wenn du detailliertere Bedingungen für Vertrauensstellungen benötigst, kannst du die Ansprüche für den Aussteller (`iss`) und für den Antragsteller (`sub`) anpassen, die im JWT enthalten sind. Weitere Informationen findest du unter [Anpassen des Tokenansprüche](#customizing-the-token-claims).

Es gibt viele zusätzliche Ansprüche, die im OIDC-Token unterstützt werden und zum Festlegen dieser Bedingungen verwendet werden können. Darüber hinaus könnte dein Cloudanbieter zulassen, dass du den Zugriffstoken eine Rolle zuweist, sodass du noch genauere Berechtigungen angeben kannst.

{% note %}

**Hinweis**: Zur Steuerung, wie dein Cloudanbieter Zugriffstoken ausgibt, **musst** du mindestens eine Bedingung definieren, damit nicht vertrauenswürdige Repositorys keine Zugriffstoken für deine Cloudressourcen anfordern können.

{% endnote %}

### Beispiele für Antragstelleransprüche

Die folgenden Beispiele veranschaulichen, wie du „Antragsteller“ als Bedingung verwendest, und erläutern, wie „Antragsteller“ aus verketteten Metadaten zusammengefügt wird. Der [Antragsteller](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) verwendet Informationen aus dem [`job` Kontext](/actions/learn-github-actions/contexts#job-context) und weist deinen Cloudanbieter an, dass Zugriffstokenanforderungen nur für Anforderungen aus Workflows gewährt werden, die in bestimmten Branches und Umgebungen ausgeführt werden. In den folgenden Abschnitten werden einige allgemeine Antragsteller beschrieben, die du verwenden kannst.

#### Filtern nach einer bestimmten Umgebung

Der Antragstelleranspruch umfasst den Umgebungsnamen, wenn der Auftrag auf eine Umgebung verweist.

Du kannst einen Antragsteller konfigurieren, der nach einem bestimmten [Umgebungsnamen](/actions/deployment/using-environments-for-deployment) filtert. In diesem Beispiel muss die Workflowausführung aus einem Auftrag stammen, der eine Umgebung namens `Production` in einem Repository namens `octo-repo` hat, das der Organisation `octo-org`:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| Beispiel:| `repo:octo-org/octo-repo:environment:Production`       |

#### Filtern nach `pull_request`-Ereignissen

Der Antragstelleranspruch enthält die Zeichenfolge `pull_request`, wenn der Workflow durch ein Pull Request-Ereignis ausgelöst wird, aber nur, wenn der Auftrag nicht auf eine Umgebung verweist.

Du kannst einen Antragsteller konfigurieren, der nach dem [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request)-Ereignis filtert. In diesem Beispiel muss die Workflowausführung durch ein `pull_request`-Ereignis in einem Repository namens `octo-repo` ausgelöst worden sein, das der Organisation `octo-org` gehört:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:pull_request`      | 
| Beispiel:| `repo:octo-org/octo-repo:pull_request`      |

#### Filtern nach einem bestimmten Branch

Der Antragstelleranspruch enthält den Branchnamen des Workflows, aber nur, wenn der Auftrag nicht auf eine Umgebung verweist und wenn der Workflow nicht durch ein Pull Request-Ereignis ausgelöst wird.

Du kannst einen Antragsteller konfigurieren, der nach einem bestimmten Branchnamen filtert. In diesem Beispiel muss die Workflowausführung aus einem Branch namens `demo-branch` in einem Repository namens `octo-repo` ausgelöst worden sein, das der Organisation `octo-org` gehört:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| Beispiel:| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtern nach einem bestimmten Tag

Der Antragstelleranspruch enthält den Tagnamen des Workflows, aber nur, wenn der Auftrag nicht auf eine Umgebung verweist und wenn der Workflow nicht durch ein Pull Request-Ereignis ausgelöst wird.

Du kannst einen Antragsteller erstellen, der nach einem bestimmten Tag filtert. In diesem Beispiel muss die Workflowausführung mit einem Tag namens `demo-tag` in einem Repository namens `octo-repo` ausgelöst worden sein, das der Organisation `octo-org` gehört:

|        |             |
| ------ | ----------- |
| Syntax: | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| Beispiel:| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### Konfigurieren des Antragstellers bei deinem Cloudanbieter

Für die Konfiguration des Antragstellers in der Vertrauensstellung deines Cloudanbieters musst du der vertrauenswürdigen Konfiguration die Antragstellerzeichenfolge hinzufügen. In den folgenden Beispielen wird veranschaulicht, wie verschiedene Cloudanbieter denselben Antragsteller `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` auf unterschiedliche Weise akzeptieren können:

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

Weitere Informationen findest du in den Leitfäden unter [Aktivieren von OpenID Connect für deinen Cloudanbieter](#enabling-openid-connect-for-your-cloud-provider).

## Aktualisieren deiner Aktionen für OIDC

Für die Aktualisierung deiner benutzerdefinierten Aktionen zur Authentifizierung mithilfe von OIDC kannst du `getIDToken()` aus dem Actions-Toolkit verwenden, um ein JWT vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} anzufordern. Weitere Informationen findest du unter „OIDC-Token“ in der [Dokumentation für das npm-Paket](https://www.npmjs.com/package/@actions/core/v/1.6.0).

Du kannst auch einen `curl`-Befehl verwendest, um die JWT anzufordern, indem du die folgenden Umgebungsvariablen verwendest:

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | Die URL für den OIDC-Anbieter von {% data variables.product.prodname_dotcom %}.      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Bearertoken für die Anforderung an den OIDC-Anbieter.      |


Beispiel:

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Hinzufügen von Berechtigungseinstellungen

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## Anpassen der Tokenansprüche

Du kannst die Sicherheit deiner OIDC-Konfiguration verbessern, indem du die Ansprüche anpasst, die im JWT enthalten sind. Mit diesen Anpassungen kannst du detailliertere Vertrauensbedingungen für deine Cloudrollen definieren, wenn du deinen Workflows den Zugriff auf in der Cloud gehostete Ressourcen gestattest:

{% ifversion ghec %} – Für eine zusätzliche Sicherheitsebene kannst du der `issuer`-URL das Platzhalterfeld deines Unternehmens anfügen. Auf diese Weise kannst du Bedingungen für den Ausstelleranspruch (`iss`) festlegen, indem du ihn so konfigurierst, dass nur JWT-Token von einer eindeutigen `issuer`-URL akzeptiert werden, die das Platzhalterfeld deines Unternehmens enthalten muss.{% endif %}
- Du kannst deine OIDC-Konfiguration standardisieren, indem du Bedingungen für den Antragstelleranspruch (`sub`) festlegst, die erfordern, dass JWT-Token aus einem bestimmten Repository, einem wiederverwendbaren Workflow oder einer anderen Quelle stammen.
- Du kannst detaillierte OIDC-Richtlinien definieren, indem du zusätzliche OIDC-Tokenansprüche wie z. B. `repository_id` und `repository_visibility` verwendest. Weitere Informationen findest du unter [Grundlegendes zum OIDC-Token](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token).

Um diese Anspruchsformate anzupassen, können Organisations- und Repositoryadministratoren die REST-API-Endpunkte verwenden, die in den folgenden Abschnitten beschrieben werden.

{% ifversion ghec %}

### Wechseln zu einer eindeutigen Token-URL

Standardmäßig wird das JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter unter `https://token.actions.githubusercontent.com` ausgestellt. Dieser Pfad wird deinem Cloudanbieter über den `iss`-Wert im JWT angezeigt.

Unternehmensadministratoren können die Sicherheit ihrer OIDC-Konfiguration verbessern, indem sie ihr Unternehmen für den Empfang von Token von einer eindeutigen URL unter `https://token.actions.githubusercontent.com/<enterpriseSlug>` konfigurieren. Ersetze `<enterpriseSlug>` durch den Platzhalterwert deines Unternehmens. 

Diese Konfiguration führt dazu, dass dein Unternehmen das OIDC-Token von einer eindeutigen URL empfängt. Anschließend kannst du deinen Cloudanbieter so konfigurieren, dass nur Token von dieser URL akzeptiert werden. Dadurch wird sichergestellt, dass nur die Repositorys des Unternehmens mithilfe von OIDC auf deine Cloudressourcen zugreifen können.

Um diese Einstellung für dein Unternehmen zu aktivieren, muss ein Unternehmensadministrator den `/enterprises/{enterprise}/actions/oidc/customization/issuer`-Endpunkt verwenden und im Anforderungstext `"include_enterprise_slug": true` angeben. Weitere Informationen findest du unter [Festlegen der benutzerdefinierten {% data variables.product.prodname_actions %}-OIDC-Ausstellerrichtlinie für ein Unternehmen](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise).

Nachdem diese Einstellung angewendet wurde, enthält das JWT den aktualisierten `iss`-Wert. Im folgenden Beispiel verwendet der `iss`-Schlüssel `octocat-inc` als `enterpriseSlug`-Wert:

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### Anpassen der Antragstelleransprüche für eine Organisation oder ein Repository

Um Sicherheit, Compliance und Standardisierung zu verbessern, kannst du die Standardansprüche an deine erforderlichen Zugriffsbedingungen anpassen. Wenn dein Cloudanbieter Bedingungen für Antragstelleransprüche unterstützt, kannst du eine Bedingung erstellen, die überprüft, ob der `sub`-Wert dem Pfad des wiederverwendbaren Workflows entspricht, z. B. `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`. Das genaue Format variiert je nach OIDC-Konfiguration deines Cloudanbieters. Um die übereinstimmende Bedingung für {% data variables.product.prodname_dotcom %} zu konfigurieren, kannst du die REST-API verwenden, um zu verlangen, dass der `sub`-Anspruch immer einen bestimmten benutzerdefinierten Anspruch enthalten muss, z. B. `job_workflow_ref`. Du kannst mithilfe der [OIDC-REST-API](/rest/actions/oidc) eine Anpassungsvorlage auf den OIDC-Antragstelleranspruch anwenden. So kannst du beispielsweise festlegen, dass der `sub`-Anspruch innerhalb des OIDC-Tokens immer einen bestimmten benutzerdefinierten Anspruch (wie z. B. `job_workflow_ref`) enthalten muss.

{% note %}

**Hinweis**: Die Anwendung der Organisationsvorlage hat keine Auswirkungen auf die Workflows in vorhandenen Repositorys, die bereits OIDC verwenden. Bei bestehenden Repositorys sowie bei neuen Repositorys, die nach Anwendung der Vorlage erstellt werden, muss der Besitzer des Repositorys diese Konfiguration aktivieren oder alternativ eine andere Konfiguration für das Repository anwenden. Weitere Informationen findest du unter [Festlegen der Anpassungsvorlage für einen OIDC-Antragstelleranspruch für eine Organisation oder ein Repository](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository).

{% endnote %}

Das Anpassen der Ansprüche führt zu einem neuen Format für den gesamten `sub`-Anspruch, welches das vordefinierte `sub`-Standardformat in dem unter [Beispiele für Antragstelleransprüche](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) beschriebenen Token ersetzt.

In den folgenden Beispielvorlagen werden verschiedene Möglichkeiten zum Anpassen des Antragstelleranspruchs veranschaulicht. Zum Konfigurieren dieser Einstellungen für {% data variables.product.prodname_dotcom %} geben Organisationsadministratoren mithilfe der REST-API eine Liste der Ansprüche an, die in den Antragstelleranspruch (`sub`) einbezogen werden müssen. 

{% data reusables.actions.use-request-body-api %}

Um deine Antragstelleransprüche anzupassen, solltest du zuerst eine Vergleichsbedingung in der OIDC-Konfiguration deines Cloudanbieters erstellen, bevor du die Konfiguration mithilfe der REST-API anpasst. Sobald die Konfiguration abgeschlossen ist, folgt bei jeder Ausführung eines neuen Auftrags das während dieses Auftrags generierte OIDC-Token der neuen Anpassungsvorlage. Wenn die Vergleichsbedingung vor der Ausführung des Auftrags nicht in der OIDC-Konfiguration des Cloudanbieters vorhanden ist, wird das generierte Token möglicherweise nicht vom Cloudanbieter akzeptiert, weil die Cloudbedingungen möglicherweise nicht synchronisiert wurden.

#### Beispiel: Zulassen des Repositorys basierend auf Sichtbarkeit und Besitzer

In dieser Beispielvorlage kann der `sub`-Anspruch ein neues Format aufweisen, das `repository_owner` und `repository_visibility` verwendet:

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um anzugeben, dass Ansprüche bestimmte Werte für `repository_owner` und `repository_visibility` aufweisen müssen. Beispiel: `"repository_owner: "monalisa":repository_visibility:private"`. Mit dem Ansatz kannst du den Cloudrollenzugriff auf private Repositorys innerhalb einer Organisation oder eines Unternehmens beschränken.

#### Beispiel: Zulassen des Zugriffs auf alle Repositorys mit einem bestimmten Besitzer

Durch diese Beispielvorlage kann der `sub`-Anspruch ein neues Format nur mit dem Wert von `repository_owner` aufweisen. 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um anzugeben, dass Ansprüche einen bestimmten Wert für `repository_owner` aufweisen müssen. Beispiel: `"repository_owner: "monalisa""`

#### Beispiel: Erfordern eines wiederverwendbaren Workflows

In dieser Beispielvorlage kann der `sub`-Anspruch ein neues Format aufweisen, das den Wert des `job_workflow_ref`-Anspruchs enthält. Dadurch kann ein Unternehmen [wiederverwendbare Workflows](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) verwenden, um konsistente Bereitstellungen in allen eigenen Organisationen und Repositorys zu erzwingen.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um anzugeben, dass Ansprüche einen bestimmten Wert für `job_workflow_ref` aufweisen müssen. Beispiel: `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`.

#### Beispiel: Anfordern eines wiederverwendbaren Workflows und anderer Ansprüche

Die folgende Beispielvorlage kombiniert die Anforderung eines bestimmten wiederverwendbaren Workflows mit zusätzlichen Ansprüchen.

{% data reusables.actions.use-request-body-api %}

In diesem Beispiel wird auch veranschaulicht, wie `"context"` zum Definieren deiner Bedingungen verwendet werden kann. Dies ist der Teil, der dem Repository im [`sub`-Standardformat](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) folgt. Wenn der Auftrag beispielsweise auf eine Umgebung verweist, enthält der Kontext Folgendes: `environment:<environmentName>`.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um anzugeben, dass Ansprüche bestimmte Werte für `repo`, `context` und `job_workflow_ref` aufweisen müssen.

Diese Anpassungsvorlage erfordert, dass der `sub`-Anspruch das folgende Format verwendet: `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`. Beispiel: `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Beispiel: Gewähren des Zugriffs auf ein bestimmtes Repository

In dieser Beispielvorlage kannst du für alle Branches/Tags und Umgebungen cloudbasierten Zugriff auf alle Workflows in einem bestimmten Repository gewähren. Um die Sicherheit zu verbessern, kombiniere diese Vorlage mit der benutzerdefinierten Aussteller-URL, die unter [Anpassen der Token-URL für ein Unternehmen](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise) beschrieben wird. 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um einen `repo`-Anspruch zu verlangen, der dem erforderlichen Wert entspricht.

#### Beispiel: Verwenden systemgenerierter GUIDs

Diese Beispielvorlage ermöglicht vorhersagbare OIDC-Ansprüche mit systemgenerierten GUIDs, die bei der Umbenennung von Entitäten (z. B. beim Umbenennen eines Repositorys) unverändert bleiben. 

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um einen `repository_id`-Anspruch zu verlangen, der dem erforderlichen Wert entspricht.

oder:

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um einen `repository_owner_id`-Anspruch zu verlangen, der dem erforderlichen Wert entspricht.

#### Zurücksetzen deiner Anpassungen

In dieser Beispielvorlage werden die Antragstelleransprüche auf das Standardformat zurückgesetzt. Mit dieser Vorlage werden alle Anpassungsrichtlinien auf Organisationsebene außer Kraft gesetzt.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

Konfiguriere in der OIDC-Konfiguration deines Cloudanbieters die `sub`-Bedingung, um anzugeben, dass Ansprüche bestimmte Werte für `repo` und `context` aufweisen müssen.

#### Verwenden der Standardansprüche für Antragsteller

Für Repositorys, die eine Antragstelleranspruchsrichtlinie aus ihrer Organisation erhalten können, kann der Repositorybesitzer sich später entscheiden, diese zu deaktivieren und stattdessen das Standardformat des `sub`-Anspruchs zu verwenden. Dies bedeutet, dass das Repository nicht die benutzerdefinierte Vorlage der Organisation verwendet. 

Um das Repository zur Verwendung des standardmäßigen Anspruchsformats `sub` zu konfigurieren, muss ein Repositoryadministrator den REST-API-Endpunkt unter [Festlegen der Anpassungsvorlage für einen OIDC-Antragstelleranspruch für eine Organisation oder ein Repository](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository) mit dem folgenden Anforderungstext festlegen:

```json
{
   "use_default": true
}
```

#### Beispiel: Konfigurieren eines Repositorys für die Verwendung einer Organisationsvorlage

Ein Repositoryadministrator kann sein Repository so konfigurieren, dass es die vom Administrator der Organisation erstellte Vorlage verwendet.

Um das Repository zur Verwendung der Organisationsvorlage zu konfigurieren, muss ein Repositoryadministrator den REST-API-Endpunkt unter [Festlegen der Anpassungsvorlage für einen OIDC-Antragstelleranspruch für ein Repository](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository) mit dem folgenden Anforderungstext festlegen:

```json
{
   "use_default": false
}
```

{% endif %}

## Aktualisieren deiner Workflows für OIDC

Du kannst jetzt deine YAML-Workflows aktualisieren, um OIDC-Zugriffstoken anstelle von Geheimnissen zu verwenden. Beliebte Cloudanbieter haben ihre offiziellen Anmeldeaktionen veröffentlicht, die es Ihnen erleichtern, mit OIDC zu beginnen. Weitere Informationen zum Aktualisieren deiner Workflows findest du in den cloudspezifischen Leitfäden unten unter [Aktivieren von OpenID Connect für deinen Cloudanbieter](#enabling-openid-connect-for-your-cloud-provider).


## Aktivieren von OpenID Connect für deinen Cloudanbieter

Informationen zum Aktivieren und Konfigurieren von OIDC für deinen spezifischen Cloudanbieter findest du in den folgenden Anleitungen:

- [Konfigurieren von OpenID Connect in Amazon Web Services](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- [Konfigurieren von OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- [Konfigurieren von OpenID Connect in Google Cloud Platform](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- [Konfigurieren von OpenID Connect in Hashicorp Vault](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

Informationen zum Aktivieren und Konfigurieren von OIDC für einen anderen Cloudanbieter findest du in der folgenden Anleitung:

- [Konfigurieren von OpenID Connect in Cloudanbietern](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
