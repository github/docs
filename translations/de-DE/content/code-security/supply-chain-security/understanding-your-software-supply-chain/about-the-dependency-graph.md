---
title: Informationen zum Abhängigkeitsdiagramm
intro: 'Du kannst das Abhängigkeitsdiagramm verwenden, um alle Abhängigkeiten deines Projekts zu identifizieren. Das Abhängigkeitsdiagramm unterstützt eine Reihe beliebter Paketökosysteme.'
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106493'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Informationen zum Abhängigkeitsdiagramm

{% data reusables.dependabot.about-the-dependency-graph %}

Wenn du ein Commit mit Push an {% data variables.product.product_name %} überträgst, das eine unterstützte Manifest- oder Sperrdatei ändert oder dem Standardbranch hinzufügt, wird das Abhängigkeitsdiagramm automatisch aktualisiert.{% ifversion fpt or ghec %} Darüber hinaus wird das Diagramm aktualisiert, wenn jemand eine Änderung mithilfe von Push an das Repository einer deiner Abhängigkeiten überträgt.{% endif %} Informationen zu den unterstützten Ökosystemen und Manifestdateien findest du unter [Unterstützte Paketökosysteme](#supported-package-ecosystems) weiter unten.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Beim Erstellen eines Pull Requests, der Änderungen an Abhängigkeiten enthält und auf den Standardbranch abzielt, verwendet {% data variables.product.prodname_dotcom %} das Abhängigkeitsdiagramm, um Abhängigkeitsüberprüfungen zum Pull Request hinzuzufügen. Diese geben an, ob die Abhängigkeiten Sicherheitsrisiken enthalten und zeigen ggf. die Version der Abhängigkeit an, in der die Sicherheitsanfälligkeit behoben wurde. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/about-dependency-review).

## Verfügbarkeit von Abhängigkeitsdiagrammen

{% ifversion fpt or ghec %}Das Abhängigkeitsdiagramm ist für jedes öffentliche Repository verfügbar, das Abhängigkeiten in einem unterstützten Paketökosystem mithilfe eines unterstützten Dateiformats definiert. Repositoryadministrator*innen können das Abhängigkeitsdiagramm außerdem für private Repositorys einrichten. {% endif %}Weitere Informationen {% ifversion ghes %}zur Konfiguration des Abhängigkeitsdiagramms {% endif %}findest du unter [Konfigurieren des Abhängigkeitsdiagramms](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Abhängigkeiten enthalten

Das Abhängigkeitsdiagramm enthält alle Abhängigkeiten eines Repositorys, die im Manifest und in den Sperrdateien oder deren Entsprechung für unterstützte Ökosysteme{% ifversion dependency-submission-api %} beschreiben werden, sowie alle Abhängigkeiten, die mit der Abhängigkeitsübermittlungs-API (Beta) übermittelt werden{% endif %}. Dies schließt Folgendes ein:

- Direkte Abhängigkeiten, die explizit in einer Manifest- oder Sperrdatei definiert sind, {% ifversion dependency-submission-api %} oder mithilfe der Abhängigkeitsübermittlungs-API (Beta) übermittelt wurden{% endif %}
- Indirekte Abhängigkeiten dieser direkten Abhängigkeiten, auch bekannt als transitive Abhängigkeiten oder Unterabhängigkeiten bezeichnet

Das Abhängigkeitsdiagramm identifiziert indirekte Abhängigkeiten{% ifversion fpt or ghec %} entweder explizit aus einer Sperrdatei oder durch Überprüfen der Abhängigkeiten deiner direkten Abhängigkeiten. Für eine optimale Zuverlässigkeit des Diagramms solltest du Sperrdateien (oder deren Entsprechungen) verwenden, da sie genau definieren, welche Versionen der direkten und indirekten Abhängigkeiten derzeit verwendet werden. Wenn du Sperrdateien verwendest, stelle auch sicher, dass alle Mitwirkenden des Repositorys dieselben Versionen verwenden, wodurch es dir erleichtert wird, Code{% else %} aus den Sperrdateien zu testen und zu debuggen{% endif %}.

Weitere Informationen dazu, wie {% data variables.product.product_name %} dabei hilft, die Abhängigkeiten in deiner Umgebung zu verstehen, findest du unter [Informationen zur Sicherheit der Lieferkette](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

{% ifversion fpt or ghec %}

## Abhängige Objekte enthalten

Bei öffentlichen Repositorys werden nur öffentliche Repositorys im Bericht angezeigt, die von ihnen oder den von ihnen veröffentlichten Paketen abhängig sind. Für private Repositorys werden diese Informationen nicht im Bericht angezeigt.{% endif %}

## Verwenden des Abhängigkeitsdiagramms

Du kannst das Abhängigkeitsdiagramm verwenden, um folgende Aktionen auszuführen:

- Erkunden der Repositorys, von denen dein Code abhängig ist,{% ifversion fpt or ghec %}, und denen, die von ihm abhängig sind{% endif %}. Weitere Informationen findest du unter [Untersuchen der Abhängigkeiten eines Repositorys](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository). {% ifversion ghec %}
- Anzeigen einer Zusammenfassung der in den Repositorys deiner Organisation verwendeten Abhängigkeiten in einem einzelnen Dashboard. Weitere Informationen findest du unter [Anzeigen von Erkenntnissen zu deiner Organisation](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights).{% endif %}
- Anzeigen und Aktualisieren von sicherheitsanfälligen Abhängigkeiten für dein Repository. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies). {% ifversion fpt or ghes or ghec %}
- Informationen zu sicherheitsanfälligen Abhängigkeiten in Pull Requests. Weitere Informationen findest du unter [Überprüfen von Abhängigkeitsänderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).{% endif %}

## Unterstützte Paket-Ökosysteme

Die empfohlenen Formate definieren explizit, welche Versionen für alle direkten und indirekten Abhängigkeiten verwendet werden. Wenn du diese Formate verwendest, ist dein Abhängigkeitsdiagramm genauer. Außerdem wird der aktuelle Build eingerichtet und ermöglicht es dem Abhängigkeitsdiagramm, Sicherheitsrisiken sowohl in direkten als auch indirekten Abhängigkeiten zu melden.{% ifversion fpt or ghec %} Aus einer Manifestdatei (oder deren Entsprechung) abgeleitete indirekte Abhängigkeiten werden aus den Prüfungen auf unsichere Abhängigkeiten ausgeschlossen.{% endif %}

| Paket-Manager | Languages | Empfohlene Formate | Alle unterstützten Formate |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | {%- endif %} | Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` | | NuGet | .NET-Sprachen (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` | {%- ifversion github-actions-in-dependency-graph %} | {% data variables.product.prodname_actions %}-Workflows<sup>[†]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` | {%- endif %} | Go-Module | Go | `go.sum` | `go.mod`, `go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`<sup>[‡]</sup> | {%- ifversion dependency-graph-dart-support %} | pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` | {%- endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] {% data reusables.enterprise.3-5-missing-feature %} {% data variables.product.prodname_actions %}-Workflows müssen sich im `.github/workflows/`-Verzeichnis eines Repositorys befinden, um als Manifeste erkannt zu werden. Alle Aktionen oder Workflows, auf die mithilfe der Syntax `jobs[*].steps[*].uses` oder `jobs.<job_id>.uses` verwiesen wird, werden als Abhängigkeiten analysiert. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions).

{% endif %}

[‡] Wenn du deine Python-Abhängigkeiten in einer `setup.py`-Datei auflistest, können wir möglicherweise nicht alle Abhängigkeiten in deinem Projekt analysieren und auflisten.

{% ifversion github-actions-in-dependency-graph %} {% note %}

**Hinweis:** {% data variables.product.prodname_actions %} Workflowabhängigkeiten werden im Abhängigkeitsdiagramm zu Informationszwecken angezeigt. Dependabot-Warnungen werden für {% data variables.product.prodname_actions %}-Workflows derzeit nicht unterstützt.

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}Du kannst die Abhängigkeitsübermittlungs-API (Beta) verwenden, um Abhängigkeiten aus dem Paket-Manager oder dem Ökosystem deiner Wahl zum Abhängigkeitsdiagramm hinzuzufügen, selbst dann, wenn sich das Ökosystem nicht in der Liste der unterstützen Ökosysteme (oben) befindet. Das Abhängigkeitsdiagramm zeigt die übermittelten Abhängigkeiten nach Ökosystemen gruppiert an, jedoch getrennt von den aus Manifest- oder Sperrdateien geparsten Abhängigkeiten. Du empfängst {% data variables.product.prodname_dependabot_alerts %} nur für Abhängigkeiten, die von einem der [unterstützten Ökosysteme](https://github.com/github/advisory-database#supported-ecosystems) von {% data variables.product.prodname_advisory_database %} stammen. Weitere Informationen zur Abhängigkeitsübermittlungs-API findest du unter [Verwenden der Abhängigkeitsübermittlungs-API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).{% endif %}
## Weiterführende Themen

- "[Abhängigkeitsdiagramm](https://en.wikipedia.org/wiki/Dependency_graph)" auf Wikipedia
- [Untersuchen der Abhängigkeiten eines Repositorys](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
- [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Problembehandlung bei der Erkennung von anfälligen Abhängigkeiten](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
