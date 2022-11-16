---
title: Предоставление предварительной сборке доступа к другим репозиториям
shortTitle: Allow external repo access
intro: 'Предварительной сборке можно предоставить доступ к другим репозиториям {% data variables.product.prodname_dotcom %} для выполнения сборки.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: 0186078525944587bc4344e0a7d6a32468ce1cd7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158792'
---
По умолчанию рабочий процесс {% data variables.product.prodname_actions %} для конфигурации предварительной сборки может обращаться только к содержимому в собственном репозитории. Для создания среды разработки в проекте могут использоваться дополнительные ресурсы, расположенные в других местах.

## Предоставление предварительной сборке доступа на чтение внешних ресурсов

Можно настроить доступ на чтение других репозиториев {% data variables.product.prodname_dotcom %}, принадлежащих одному владельцу, для этого необходимо указать разрешения в файле `devcontainer.json`, который используется в конфигурации предварительной сборки. Дополнительные сведения см. в разделе [Управление доступом к другим репозиториям в кодовом пространстве](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

{% note %}

**Примечание.** Таким образом можно предоставить только разрешения на чтение, при этом владелец целевого репозитория также должен являться владельцем репозитория, для которого создается предварительная сборка. Например, если вы создаете конфигурацию предварительной сборки для репозитория `octo-org/octocat`, вы сможете предоставить разрешения на чтение других репозиториев `octo-org/*`, при условии, что это указано в файле `devcontainer.json` и у вас есть такие разрешения.

{% endnote %}

Во время создания или изменения конфигурации предварительной сборки для файла `devcontainer.json`, который настраивает доступ на чтение других репозиториев с тем же владельцем, появится запрос на предоставление этих разрешений после нажатия кнопки **Создать** или **Обновить**. Дополнительные сведения см. в разделе [Настройка предварительных сборок](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

## Предоставление предварительной сборке доступа на запись во внешние ресурсы

Если для проекта требуется доступ на запись к ресурсам или внешние ресурсы находятся в репозитории с владельцем, отличным от владельца репозитория, для которого создается конфигурация предварительной сборки, можно использовать {% data variables.product.pat_generic %}, чтобы предоставить этот доступ.

Вам потребуется создать новую личную учетную запись, а затем использовать ее для создания {% data variables.product.pat_v1 %} с соответствующими областями.

1. Создайте новую личную учетную запись для {% data variables.product.prodname_dotcom %}. 
   
   {% warning %}
   
   **Предупреждение**. Хотя вы можете создать {% data variables.product.pat_v1 %} с помощью существующей личной учетной записи, мы настоятельно рекомендуем создать новую учетную запись с доступом только к целевым репозиториям, необходимым для вашего сценария. Это связано с тем, что разрешение `repository` в маркере доступа предоставляет доступ сразу ко всем репозиториям, к которым есть доступ у соответствующей учетной записи. Дополнительные сведения см. в статьях [Регистрация новой учетной записи GitHub](/get-started/signing-up-for-github/signing-up-for-a-new-github-account) и [Обеспечение безопасности для {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access).
   
   {% endwarning %}
1. Предоставьте новой учетной записи доступ на чтение к необходимым репозиториям. Дополнительные сведения см. в статье [Управление доступом отдельных пользователей к репозиторию организации](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository).
1. Во время входа в новую учетную запись создайте {% data variables.product.pat_v1 %} с областью `repo` . При желании, если ваша предварительная сборка должна получать пакеты из {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, также выберите область `read:packages`. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

   ![Области repo и packages, выбранные для {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   Если предварительная сборка будет использовать пакет из {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, необходимо предоставить новой учетной записи доступ к этому пакету или настроить для него наследование разрешений на доступ от репозитория, для которого выполняется предварительная сборка. Дополнительные сведения см. в разделе [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).   
{% ifversion ghec %}1. Авторизуйте маркер для использования с единым входом SAML, чтобы он смог получить доступ к репозиториям, принадлежащим организациям с настроенным единым входом. Дополнительные сведения см. в разделе [Авторизация {% data variables.product.pat_generic %} для использования с единым входом SAML](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

   ![Кнопка для настройки единого входа для {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. Скопируйте строку маркера. Ее вам нужно назначить секрету репозитория {% data variables.product.prodname_codespaces %}.
1. Снова войдите в учетную запись с правами администратора для репозитория. 
1. В репозитории, для которого требуется создать предварительные сборки {% data variables.product.prodname_github_codespaces %}, создайте секрет репозитория {% data variables.product.prodname_codespaces %} с именем `CODESPACES_PREBUILD_TOKEN`, присвоив ему значение созданного и скопированного маркера. Подробнее см. статью [Управление зашифрованными секретами репозитория и организации для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository).

{% data variables.product.pat_generic %} будет использоваться для всех последующих предварительных сборок, созданных для репозитория. В отличие от других секретов репозитория {% data variables.product.prodname_codespaces %}, секрет `CODESPACES_PREBUILD_TOKEN` используется только для предварительной сборки и не будет доступен для использования в пространствах кода, созданных из этого репозитория.

## Дополнительные материалы

- [Настройка предварительных сборок](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [Устранение неполадок с предварительными сборками](/codespaces/troubleshooting/troubleshooting-prebuilds)
