---
ms.openlocfilehash: 383458a6038400299b6ab8759b8bbfd1ebbd3a2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145101536"
---
| Status         | BESCHREIBUNG |
| -------------- | ----------- |
| **Überprüft**   | Der Commit ist signiert, die Signatur wurde erfolgreich überprüft und der Committer ist der einzige Autor, der den Wächtermodus aktiviert hat. 
| **Teilweise&nbsp; überprüft** | Der Commit ist signiert und die Signatur wurde erfolgreich überprüft, aber der Commit hat einen Autor, der a) nicht der Committer ist und b) den Wächtermodus aktiviert hat. In diesem Fall garantiert die Commitsignatur nicht die Zustimmung des Autors, daher wird der Commit nur teilweise verifiziert.
| **Nicht überprüft** | Eine beliebige der folgenden Aussagen trifft zu:<br>– Der Commit ist signiert, aber die Signatur konnte nicht überprüft werden.<br>– Der Commit ist nicht signiert, und der Committer hat den Wächtermodus aktiviert.<br>– Der Commit ist nicht signiert, und ein Autor hat den Wächtermodus aktiviert.<br>
