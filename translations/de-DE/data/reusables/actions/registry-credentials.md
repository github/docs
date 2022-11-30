---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068118"
---
Wenn die Containerregistrierung des Images eine Authentifizierung benötigt, damit das Image gepullt werden kann, kannst du mit `jobs.<job_id>.container.credentials` eine `map` von `username` und `password` festlegen. Die Anmeldeinformationen sind dieselben Werte, die du für den [`docker login`](https://docs.docker.com/engine/reference/commandline/login/)-Befehl angeben würdest.
