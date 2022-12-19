---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109481"
---
Das obligatorische Abzeichnen von Commits gilt nur für Commits, die auf der Weboberfläche erfolgen. Bei Commits über die Git-Befehlszeilenschnittstelle muss der Autor des Commits den Commit mit der Option `--signoff` abzeichnen. Weitere Informationen findest du in der [Git-Dokumentation](https://git-scm.com/docs/git-commit).


Du kannst feststellen, ob für ein Repository, an dem du mitwirkst, das obligatorische Abzeichnen von Commits aktiviert ist, indem du den Header des Commitformulars am Ende der von dir bearbeiteten Datei überprüfst. Nachdem das obligatorische Abzeichnen von Commits aktiviert wurde, steht im Header „Änderungen abzeichnen und committen“.

![Screenshot des Commitformulars mit aktiviertem obligatorischen Abzeichnen](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Ehe du einen Commit abzeichnest, solltest du dich vergewissern, dass dein Commit mit den Regeln und Lizenzen des Repositorys übereinstimmt, in das du committest. Das Repository kann eine Abzeichnungsvereinbarung verwenden, z. B. das Developer Certificate of Origin der Linux Foundation. Weitere Informationen findest du im [Developer Certificate of Origin](https://developercertificate.org/).

Das Abzeichnen eines Commits unterscheidet sich vom Signieren eines Commits. Weitere Informationen zum Signieren eines Commits findest du unter [Informationen zur Commitsignaturverifizierung](/authentication/managing-commit-signature-verification/about-commit-signature-verification).
