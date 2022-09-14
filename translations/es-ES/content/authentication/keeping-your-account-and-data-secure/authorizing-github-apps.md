---
title: Autorizar GitHub Apps
intro: 'Puedes autorizar a una {% data variables.product.prodname_github_app %} para que permita que una aplicación recupere información sobre tu cuenta de {% data variables.product.prodname_dotcom %} y, en algunos casos, para hacer cambios en {% data variables.product.prodname_dotcom %} en tu nombre.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
ms.openlocfilehash: 050f437f411919c4be488e61c032a8543a301e02
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115057'
---
Las aplicaciones de terceros que necesitan verificar tu identidad de {% data variables.product.prodname_dotcom %} o interactuar con los datos de {% data variables.product.prodname_dotcom %} en tu nombre pueden pedirte que autorices la {% data variables.product.prodname_github_app %} para hacerlo. 

Al autorizar la {% data variables.product.prodname_github_app %}, deberías asegurarte de que confías en la aplicación, revisar quién la desarrolló y revisar los tipos de información a la que desea acceder la aplicación.

Durante la autorización, se te pedirá que otorgues el permiso de {% data variables.product.prodname_github_app %} para:
* **Comprobación de la identidad de {% data variables.product.prodname_dotcom %}**<br/>
  Cuando se autoriza, {% data variables.product.prodname_github_app %} podrá recuperar mediante programación el perfil de GitHub público, además de algunos detalles privados (como la dirección de correo electrónico), en función del nivel de acceso solicitado.
* **Saber a qué recursos puede acceder**<br/>
  Cuando se autoriza, {% data variables.product.prodname_github_app %} podrá leer mediante programación los recursos _privados_ de {% data variables.product.prodname_dotcom %} a los que puede acceder (por ejemplo, los repositorios privados de {% data variables.product.prodname_dotcom %}), _donde_ también está presente una instalación de {% data variables.product.prodname_github_app %}. La aplicación podría utilizar esto, por ejemplo, para que pueda mostrarte una lista adecuada de repositorios.
* **Actuar en su nombre**<br/>
  Es posible que la aplicación tenga que realizar tareas en {% data variables.product.prodname_dotcom %} en su nombre. Esto podría incluir el crear una propuesta o comentar en una solicitud de cambios. Esta capacidad de actuar en su nombre se limita a los recursos de {% data variables.product.prodname_dotcom %} en los que _tanto_ usted como {% data variables.product.prodname_github_app %} tengan acceso. Sin embargo, en algunos casos, la aplicación podría jamás hacer cambios en tu nombre.
  
## ¿Cuándo actúa una {% data variables.product.prodname_github_app %} en tu nombre?

Las situaciones en las cuales una {% data variables.product.prodname_github_app %} actúa en tu nombre varían de acuerdo con el propósito de la {% data variables.product.prodname_github_app %} y el contexto en el cual se utiliza. 

Por ejemplo, un ambiente de desarrollo integrado (IDE) podría utilizar una {% data variables.product.prodname_github_app %} para interactuar en tu nombre para subir los cambios que son de tu autoría a través del IDE de vuelta a los repositorios en {% data variables.product.prodname_dotcom %}.  {% data variables.product.prodname_github_app %} lo logrará mediante una [solicitud de usuario a servidor](/get-started/quickstart/github-glossary#user-to-server-request).

Cuando una {% data variables.product.prodname_github_app %} actúa en tu nombre de esta forma, esto lo identifica GitHub a través de un icono especial que muestra un avatar pequeño de la {% data variables.product.prodname_github_app %} sobre tu propio avatar, similar al que se muestra a continuación.

![Una incidencia creada por una solicitud de a "usuario a servidor" desde una instancia de {% data variables.product.prodname_github_app %}](/assets/images/help/apps/github-apps-new-issue.png)

## ¿Hasta qué punto puede una {% data variables.product.prodname_github_app %} saber a qué recursos puedes acceder y actuar en tu nombre?

El grado en el que una {% data variables.product.prodname_github_app %} puede saber a qué recursos puedes acceder y actuar en tu nombre, después de que la has autorizado, se limita por:

* Las organizaciones o repositorios en los cuales se instaló la app 
* Los permisos que la app solicitó
* Tu acceso a los recursos de {% data variables.product.prodname_dotcom %}

Utilicemos un ejemplo para explicar esto.

{% data variables.product.prodname_dotcom %} el usuario Alice inicia sesión en una aplicación web de un tercero, ExampleApp, utilizando su identidad de {% data variables.product.prodname_dotcom %}. Durante este proceso, Alice autoriza a ExampleApp para que realice acciones en su nombre.

Sin embargo, la actividad que ExampleApp puede realizar en nombre de Alice en {% data variables.product.prodname_dotcom %} está limitada por: los repositorios en los cuales se instaló ExampleApp, los permisos que solicitó ExampleApp y el acceso de Alice a los recursos de {% data variables.product.prodname_dotcom %}. 

Esto significa que, para que la ExampleApp cree una propuesta en nombre de Alice, en un repositorio llamado Repo A, todo lo siguiente debe suceder:

* La {% data variables.product.prodname_github_app %} de ExampleApp solicita acceso de escritura para las propuestas.
* Un usuario que tiene acceso administrativo para el Repo A debe tener instalada la {% data variables.product.prodname_github_app %} de ExampleApp en este.
* Alice debe tener permiso de lectura para el repositorio A. Para obtener información sobre qué permisos son necesarios para realizar varias actividades, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".
