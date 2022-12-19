---
ms.openlocfilehash: 4055717eec0cdd95951ec6fb5bdea20efaed1948
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147573381"
---
Antes de que puedas autorizar un token de acceso personal o llave SSH, debes haber vinculado una identidad de SAML. Si eres miembro de una organización en donde está habilitado el SSO de SAML, puedes crear una identidad vinculada autenticándote en tu organización con tu IdP por lo menos una vez. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)".

Después de autorizar un token de acceso personal o una clave SSH, el token o la clave conservarán la autorización hasta que se revoque de una de las maneras siguientes.
- Un propietario de la organización o la empresa revoca la autorización.
- Se te elimina de la organización.
- Se editan los alcances en un token de acceso personal o este se regenera.
- El token de acceso personal venció conforme a lo definido durante su creación.
