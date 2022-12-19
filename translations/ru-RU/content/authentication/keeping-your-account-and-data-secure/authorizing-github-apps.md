---
title: Авторизация приложений GitHub
intro: 'Вы можете авторизовать {% data variables.product.prodname_github_app %}, чтобы разрешить приложению получать сведения о вашей учетной записи {% data variables.product.prodname_dotcom %} и в отдельных случаях вносить изменения в {% data variables.product.prodname_dotcom %} от вашего имени.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115056'
---
Сторонние приложения, которым необходимо проверять ваше удостоверение {% data variables.product.prodname_dotcom %} или взаимодействовать с данными на {% data variables.product.prodname_dotcom %} от вашего имени, могут запрашивать авторизацию {% data variables.product.prodname_github_app %}. 

При авторизации {% data variables.product.prodname_github_app %} следует убедиться в том, что вы доверяете приложению, проверить, кем оно разработано, и просмотреть типы сведений, к которым приложению требуется доступ.

Во время авторизации вам будет предложено предоставить {% data variables.product.prodname_github_app %} следующие разрешения:
* **Проверка удостоверения {% data variables.product.prodname_dotcom %}**<br/>
  После авторизации {% data variables.product.prodname_github_app %} сможет программным способом получать ваш общедоступный профиль GitHub, а также некоторые закрытые сведения (например, ваш адрес электронной почты) в зависимости от запрошенного уровня доступа.
* **Сведения о доступных вам ресурсах**<br/>
  После авторизации {% data variables.product.prodname_github_app %} сможет программным способом считывать _частные_ ресурсы {% data variables.product.prodname_dotcom %}, к которым у вас есть доступ (например, частные репозитории {% data variables.product.prodname_dotcom %}), _где_ также имеется установка {% data variables.product.prodname_github_app %}. Приложение может использовать ее, например, чтобы отображать соответствующий список репозиториев.
* **Действие от вашего имени**<br/>
  Приложению может требоваться выполнять задачи на {% data variables.product.prodname_dotcom %} от вашего имени. Это может быть создание проблемы или добавление комментария к запросу на вытягивание. Возможность действовать от вашего имени ограничена ресурсами {% data variables.product.prodname_dotcom %}, к которым есть _доступ_ как у вас, так и у {% data variables.product.prodname_github_app %}. Однако в некоторых случаях приложение никогда не вносит изменений от вашего имени.
  
## Когда {% data variables.product.prodname_github_app %} действует от вашего имени

Ситуации, в которых {% data variables.product.prodname_github_app %} действует от вашего имени, зависят от назначения {% data variables.product.prodname_github_app %} и контекста его использования. 

Например, интегрированная среда разработки (IDE) может использовать {% data variables.product.prodname_github_app %} для взаимодействия от вашего имени с целью отправки созданных вами изменений через IDE в репозитории на {% data variables.product.prodname_dotcom %}.  {% data variables.product.prodname_github_app %} делает это с помощью [запроса "пользователь — сервер](/get-started/quickstart/github-glossary#user-to-server-request)".

Когда {% data variables.product.prodname_github_app %} действует от вашего имени, на GitHub об этом свидетельствует специальный значок с небольшим аватаром {% data variables.product.prodname_github_app %}, наложенным на ваш аватар, как показано ниже.

![Проблема, созданная запросом "пользователь — сервер" из {% data variables.product.prodname_github_app %}](/assets/images/help/apps/github-apps-new-issue.png)

## В какой степени {% data variables.product.prodname_github_app %} может получать сведения о вашем доступе к ресурсам и действовать от вашего имени

Степень, в которой {% data variables.product.prodname_github_app %} может получать сведения о вашем доступе к ресурсам и действовать от вашего имени после авторизации, ограничена следующими факторами:

* организации или репозитории, в которых установлено приложение; 
* запрошенные приложением разрешения;
* ваш доступ к ресурсам {% data variables.product.prodname_dotcom %}.

Поясним это на примере.

Пользователь {% data variables.product.prodname_dotcom %} Алиса входит в стороннее веб-приложение ExampleApp, используя свое удостоверение {% data variables.product.prodname_dotcom %}. В ходе этого процесса Алиса разрешает ExampleApp выполнять действия от ее имени.

Однако действия, которые ExampleApp может выполнять от имени Алисы на {% data variables.product.prodname_dotcom %}, ограничены репозиториями, в которых установлено приложение ExampleApp, запрошенными этим приложением разрешениями и доступом Алисы к ресурсам {% data variables.product.prodname_dotcom %}. 

Это означает, что, чтобы приложение ExampleApp могло создать проблему от имени Алисы в репозитории Repo A, должны соблюдаться все перечисленные ниже условия.

* {% data variables.product.prodname_github_app %} ExampleApp запрашивает доступ на запись к проблемам.
* Пользователь с правами администратора Repo A должен установить {% data variables.product.prodname_github_app %} ExampleApp в Repo A.
* У Алисы должно быть разрешение на чтение в Repo A. Сведения о том, какие разрешения необходимы для выполнения различных действий, см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).
