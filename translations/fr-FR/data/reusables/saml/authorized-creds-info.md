---
ms.openlocfilehash: 4055717eec0cdd95951ec6fb5bdea20efaed1948
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147573376"
---
Avant de pouvoir autoriser un jeton d’accès personnel ou une clé SSH, vous devez disposer d’une identité SAML liée. Si vous êtes membre d'une organisation où l’authentification unique SAML est activée, vous pouvez créer une identité liée en vous authentifiant auprès de votre organisation avec votre fournisseur d'identité au moins une fois. Pour plus d’informations, consultez « [À propos de l’authentification à l’aide de l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on) ».

Une fois que vous avez autorisé un jeton d’accès personnel ou une clé SSH, le jeton ou la clé reste autorisé jusqu’à leur révocation de l’une des façons suivantes.
- Un propriétaire d’entreprise ou d’organisation révoque l’autorisation.
- Vous êtes supprimé de l’organisation.
- Les étendues d’un jeton d’accès personnel sont modifiées ou le jeton est régénéré.
- Le jeton d’accès personnel a expiré tel que défini lors de la création.
