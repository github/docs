---
title: Bewährte Methoden zum Schützen deines Buildsystems
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: "Leitfaden, wie du das Ende deiner Lieferkette schützen kannst, d.\_h. die Systeme, mit denen du Artefakte erstellst und verteilst."
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518856'
---
## Über diesen Leitfaden

Dieser Leitfaden beschreibt die Änderungen mit den größten Auswirkungen, die du vornehmen kannst, um die Sicherheit deines Buildsystems zu verbessern. In den einzelnen Abschnitten wird jeweils eine Änderung beschrieben, die du zur Verbesserung der Sicherheit an deinen Prozessen vornehmen kannst. Die Änderungen mit den größten Auswirkungen sind zuerst aufgeführt.

## Welches Risiko besteht?

Einige Angriffe auf Softwarelieferketten zielen direkt auf das Buildsystem ab. Wenn ein Angreifer den Buildprozess ändern kann, kann er dein System missbrauchen, ohne persönliche Konten oder Code kompromittieren zu müssen. Es ist wichtig, dass du nicht vergisst, sowohl das Buildsystem als auch persönliche Konten und Code zu schützen.

## Schützen deines Buildsystems

Ein Buildsystem sollte über mehrere Sicherheitsfunktionen verfügen:

1. Die Buildschritte sollten klar und wiederholbar sein.

2. Du solltest genau wissen, was während des Buildvorgangs ausgeführt wurde.

3. Jeder Build sollte in einer neuen Umgebung beginnen, sodass ein kompromittierter Build nicht beibehalten wird, damit er keine zukünftigen Builds beeinflussen kann.

{% data variables.product.prodname_actions %} kann dir helfen, diese Funktionen zu erfüllen. Buildanweisungen werden zusammen mit deinem Code in deinem Repository gespeichert. Du wählst aus, in welcher Umgebung dein Build ausgeführt wird, einschließlich Windows, Mac, Linux oder Runnern, die du selbst hostest. Jeder Build beginnt mit einem neuen Runner-Image, was es einem Angriff erschwert, in deiner Buildumgebung zu überleben.

Neben den Sicherheitsvorteilen kannst du mit {% data variables.product.prodname_actions %} Builds manuell, periodisch oder bei Git-Ereignissen in deinem Repository auslösen, sodass häufige und schnelle Builds möglich sind.

{% data variables.product.prodname_actions %} ist ein umfangreiches Thema, aber ein guter Einstieg ist [Grundlegendes zu GitHub Actions](/actions/learn-github-actions/understanding-github-actions) sowie [Auswahl von GitHub gehosteter Runner](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners) und [Auslösen eines Workflows](/actions/using-workflows/triggering-a-workflow).

## Signieren deines Builds

Sobald dein Buildprozess sicher ist, solltest du verhindern, dass jemand das Endergebnis deines Buildprozesses manipuliert. Eine gute Möglichkeit hierzu ist das Signieren deiner Builds. Wenn Software öffentlich verteilt wird, geschieht dies häufig mit einem öffentlichen/privaten kryptografischen Schlüsselpaar. Mit dem privaten Schlüssel signierst du den Build, und du veröffentlichst deinen öffentlichen Schlüssel, damit Benutzer deiner Software die Signatur auf dem Build überprüfen können, bevor sie sie verwenden. Wenn die Bytes des Builds geändert werden, wird die Signatur nicht bestätigt.

Wie genau du deinen Build signierst, hängt davon ab, welche Art von Code du schreibst, und wer deine Benutzer sind. Oft ist schwer zu entscheiden, wie der private Schlüssel sicher aufbewahrt werden kann. Eine grundsätzliche Möglichkeit ist die Verwendung verschlüsselter {% data variables.product.prodname_actions %}-Geheimnisse, wobei du allerdings genau darauf achten musst, wer Zugriff auf diese {% data variables.product.prodname_actions %}-Workflows hat. {% ifversion fpt or ghec %}Wenn dein privater Schlüssel in einem anderen, über das öffentliche Internet zugänglichen System (wie Microsoft Azure oder HashiCorp Vault) gespeichert ist, ist eine erweiterte Option die Authentifizierung mit OpenID Connect, damit du keine Geheimnisse zwischen den Systemen austauschen musst.{% endif %} Wenn dein privater Schlüssel nur über ein privates Netzwerk zugänglich ist, ist eine weitere Option die Verwendung selbstgehosteter Runner für {% data variables.product.prodname_actions %}.

Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets){% ifversion fpt or ghec %}, [Informationen zur Sicherheitshärtung mit OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect),{% endif %} und [Informationen zu selbst gehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners).

## Härten der Sicherheit für {% data variables.product.prodname_actions %}

Du kannst viele weitere Schritte ausführen, um {% data variables.product.prodname_actions %} zusätzlich zu schützen. Gehe insbesondere beim Evaluieren der Workflows von Drittanbietern sorgfältig vor, und erwäge die Verwendung von `CODEOWNERS`, um einzuschränken, wer Änderungen an deinen Workflows vornehmen kann.

Weitere Informationen findest du unter [Sicherheitshärtung für GitHub Actions](/actions/security-guides/security-hardening-for-github-actions), insbesondere [Verwenden von Aktionen von Drittanbietern](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) und [Verwenden von `CODEOWNERS` zum Überwachen von Änderungen](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes).

## Nächste Schritte

- [Sichern einer End-to-End-Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)

- [Bewährte Methoden zum Schützen von Konten](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)

- [Bewährte Methoden zum Sichern von Code in einer Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)
