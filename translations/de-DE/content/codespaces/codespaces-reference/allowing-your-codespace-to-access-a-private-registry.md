---
title: Zulassen des Codespacezugriffs auf eine private Registrierung
intro: 'Du kannst {% data variables.product.prodname_github_codespaces %} den Zugriff auf Containerimages und andere Pakete in einer privaten Registrierung ermöglichen.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193395'
---
## Informationen zu privaten Registrierungen und {% data variables.product.prodname_github_codespaces %}

Eine Registrierung ist ein sicherer Ort für das Speichern, Verwalten und Abrufen von Containerimages und anderen Paketen. Es gibt viele Beispiele für Registrierungen, z. B.: 
- {% data variables.product.prodname_container_registry %} von {% data variables.product.company_short %}, Azure Container Registry und Docker Hub für Containerimages.
- Die {% data variables.product.prodname_npm_registry %} für Node.js-Pakete.

Bestimmte {% data variables.product.prodname_registry %}-Registrierungen, einschließlich {% data variables.product.prodname_container_registry %}, können so konfiguriert werden, dass Pakete beim Erstellen von Codespaces nahtlos in {% data variables.product.prodname_github_codespaces %} gepullt werden können, ohne dass du Anmeldeinformationen für die Authentifizierung angeben musst.

Für den Zugriff auf andere Containerimageregistrierungen kannst du Geheimnisse in {% data variables.product.prodname_dotcom %} erstellen, um die Zugangsdaten zu speichern, mit denen {% data variables.product.prodname_github_codespaces %} auf die in dieser Registrierung gespeicherten Images zugreifen kann.

## Zugreifen auf Pakete in Registrierungen mit spezifischen Berechtigungen

{% data variables.product.prodname_registry %}-Registrierungen, die spezifische Berechtigungen unterstützen, einschließlich {% data variables.product.prodname_container_registry %}, stellen für {% data variables.product.prodname_github_codespaces %} die einfachste Möglichkeit dar, um Pakete zu nutzen. Eine Liste der {% data variables.product.prodname_registry %}-Registrierungen, die spezifische Berechtigungen und nahtlosen {% data variables.product.prodname_github_codespaces %}-Zugriff unterstützen, findest du unter Informationen [zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

### Zugreifen auf ein im selben Repository wie der Codespace veröffentlichtes Paket

Wenn du ein Paket im selben Repository veröffentlichst, in dem der Codespace gestartet wird, kannst du dieses beim Erstellen des Codespace automatisch abrufen. Du musst keine zusätzlichen Anmeldeinformationen angeben, es sei denn, die Option **Zugriff von Repository erben** wurde bei der Veröffentlichung des Pakets deaktiviert.

#### Vererbung des Zugriffs von dem Repository, aus dem ein Paket veröffentlicht wurde

Standardmäßig erbt das Paket die Zugriffseinstellung des Repositorys, aus dem es veröffentlicht wurde. Wenn das Repository zum Beispiel öffentlich ist, ist auch das Paket öffentlich. Ist das Repository privat, ist auch das Paket privat, aber über das Repository zugänglich.

Dieses Verhalten wird über die Option **Zugriff von Repository erben** gesteuert. Die Option **Zugriff von Repository erben** ist standardmäßig aktiviert, wenn die Veröffentlichung über {% data variables.product.prodname_actions %} erfolgt, aber nicht, wenn die direkte Veröffentlichung in einer Registrierung mithilfe eines {% data variables.product.pat_generic %} erfolgt.

Wenn die Option **Zugriff von Repository erben** bei der Veröffentlichung des Pakets nicht ausgewählt wurde, kannst du das Repository manuell zur Zugriffssteuerung des veröffentlichten Pakets hinzufügen. Weitere Informationen findest du unter [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository).

### Zugreifen auf ein Paket, das in der Organisation veröffentlicht wurde, in der ein Codespace gestartet wird

Wenn du möchtest, dass ein Paket für alle Codespaces in einer Organisation zugänglich ist, empfehlen wir, es mit interner Sichtbarkeit zu veröffentlichen. Dadurch wird das Paket automatisch für alle Codespaces innerhalb der Organisation sichtbar – es sei denn, das Repository, aus dem der Codespace gestartet wird, ist öffentlich.

Wenn der Codespace aus einem öffentlichen Repository gestartet wird, das auf ein internes oder privates Paket verweist, musst du dem öffentlichen Repository manuell Zugriff auf das interne Paket gewähren. So wird verhindert, dass das interne Paket versehentlich öffentlich verfügbar gemacht wird. Weitere Informationen findest du unter [Sicherstellen des Codespaces-Zugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package).

### Zugreifen auf ein privates Paket aus einer Teilmenge der Repositorys in einer Organisation

Wenn du einem Teil der Repositorys einer Organisation Zugriff auf ein Paket gewähren oder den Zugriff auf ein internes oder privates Paket von einem Codespace aus zulassen möchtest, der in einem öffentlichen Repository gestartet wurde, kannst du Repositorys manuell zu den Zugriffseinstellungen eines Pakets hinzufügen. Weitere Informationen findest du unter [Sicherstellen des Codespaces-Zugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package).

### Veröffentlichen eines Pakets aus einem Codespace

Der nahtlose Zugriff eines Codespaces auf eine Registrierung ist auf das Pullen von Paketen beschränkt. Wenn du ein Paket über einen Codespace veröffentlichen möchtest, musst du ein {% data variables.product.pat_v1 %} mit dem Bereich `write:packages` verwenden.

Es wird empfohlen, Pakete über {% data variables.product.prodname_actions %} zu veröffentlichen. Weitere Informationen findest du unter [Veröffentlichen von Docker-Images](/actions/publishing-packages/publishing-docker-images) und [Veröffentlichen von Node.js-Paketen](/actions/publishing-packages/publishing-nodejs-packages).

## Zugreifen auf in anderen Registrierungen gespeicherte Images

Du kannst Geheimnisse definieren, damit {% data variables.product.prodname_github_codespaces %} auf andere Containerimageregistrierungen als {% data variables.product.prodname_container_registry %} von {% data variables.product.company_short %} zugreifen kann. Wenn du über eine Registrierung auf ein Containerimage zugreifst, die keinen nahtlosen Zugriff unterstützt, überprüft {% data variables.product.prodname_github_codespaces %} das Vorhandensein von drei Geheimnissen, die den Servernamen, den Benutzernamen und das {% data variables.product.pat_generic %} für eine Registrierung definieren. Wenn diese Geheimnisse gefunden werden, macht {% data variables.product.prodname_github_codespaces %} die Registrierung in deinem Codespace verfügbar.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Du kannst Geheimnisse auf Benutzer-, Repository- oder Organisationsebene speichern, sodass du sie sicher zwischen verschiedenen Codespaces austauschen kannst. Wenn du einen Satz von Geheimnissen für eine private Imageregistrierung erstellst, musst du das <*> im Namen durch einen einheitlichen Bezeichner ersetzen. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) und [Verwalten verschlüsselter Geheimnisse für dein Repository und deine Organisation für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces).

Wenn du die Geheimnisse auf Benutzer- oder Organisationsebene festlegst, stelle sicher, dass du diese Geheimnisse dem Repository zuweist, in dem du den Codespace erstellst. Wähle dazu eine Zugriffsrichtlinie aus der Dropdownliste aus.  

![Beispielgeheimnis für Imageregistrierung](/assets/images/help/codespaces/secret-repository-access.png)

### Beispielgeheimnisse

Für eine private Imageregistrierung in Azure könntest du die folgenden Geheimnisse erstellen:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

Informationen zu gängigen Imageregistrierungen findest du unter [Gängige Imageregistrierungsserver](#common-image-registry-servers). Beachte, dass der Zugriff auf AWS Elastic Container Registry (ECR) anders funktioniert.

![Beispielgeheimnis für Imageregistrierung](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Wenn du die Geheimnisse hinzugefügt hast, musst du den Codespace, in dem du dich befindest, möglicherweise anhalten und anschließend neu starten, damit die neuen Umgebungsvariablen an den Container übergeben werden. Weitere Informationen findest du unter [Anhalten oder Beenden eines Codespaces](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace).

#### Zugreifen auf AWS Elastic Container Registry

Für den Zugriff auf AWS Elastic Container Registry (ECR) kannst du eine AWS-Zugangsschlüssel-ID und einen geheimen Schlüssel angeben, und {% data variables.product.prodname_dotcom %} kann ein Zugriffstoken für dich abrufen und sich in deinem Namen anmelden.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

Außerdem musst du sicherstellen, dass du über die entsprechenden AWS-IAM-Berechtigungen verfügst, um den Berechtigungstausch (z. B. `sts:GetServiceBearerToken`) und den ECR-Lesevorgang (entweder `AmazonEC2ContainerRegistryFullAccess` oder `ReadOnlyAccess`) durchzuführen.

Wenn du nicht möchtest, dass GitHub die Anmeldeinformationen in deinem Namen austauscht, kannst du auch ein Autorisierungstoken angeben, das du über die AWS-APIs oder die CLI abrufst.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Da diese Token kurzlebig sind und regelmäßig erneuert werden müssen, empfehlen wir, eine Zugriffsschlüssel-ID und ein Geheimnis anzugeben.

Diese Geheimnisse können zwar einen beliebigen Namen haben, solange es sich bei `*_CONTAINER_REGISTRY_SERVER` um eine ECR-URL handelt, aber wir empfehlen die Verwendung von `ECR_CONTAINER_REGISTRY_*` – es sei denn, du arbeitest mit mehreren ECR-Registrierungen.

Weitere Informationen findest du in der [Dokumentation zur Authentifizierung der privaten Registrierung](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html) von AWS ECR.

### Gängige Imageregistrierungsserver

Im Folgenden sind einige der gängigen Imageregistrierungsserver aufgeführt:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (USA), `eu.gcr.io` (EU), `asia.gcr.io` (Asien)

## Debuggen des Registrierungszugriffs für private Images

Wenn du Probleme hast, ein Image aus einer privaten Imageregistrierung zu pullen, vergewissere dich, dass du `docker login -u <user> -p <password> <server>` mit den Werten der oben definierten Geheimnisse ausführen kannst. Wenn die Anmeldung fehlschlägt, vergewissere dich, dass die Anmeldedaten gültig sind und dass du auf dem Server die geeigneten Berechtigungen hast, um ein Containerimage abzurufen. Wenn die Anmeldung erfolgreich war, vergewissere dich, dass diese Werte in die richtigen {% data variables.product.prodname_github_codespaces %}-Geheimnisse kopiert wurden, entweder auf Benutzer-, Repository- oder Organisationsebene. Versuche es anschließend erneut.
