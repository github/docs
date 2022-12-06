---
title: Устранение неполадок с проверкой GPG для GitHub Codespaces
shortTitle: GPG verification
intro: 'В этой статье приводятся рекомендации по устранению ошибок, связанных с подписыванием фиксаций в codespaces.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167116'
---
Если вы включите проверку GPG, {% data variables.product.prodname_github_codespaces %} автоматически подписывает фиксации в codespaces, создаваемых из выбранных репозиториев. Дополнительные сведения см. в разделе [Управление проверкой GPG для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).

{% data reusables.codespaces.gpg-in-active-codespaces %}

Если {% data variables.product.prodname_github_codespaces %} не удается подписать фиксацию, может появиться следующая ошибка.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

Эта ошибка может возникнуть, если: 

- Вы отключили проверку GPG и пытаетесь выполнить обычную фиксацию без знака в существующем пространстве кода.
- Вы включили проверку GPG, но переопределили конфигурацию Git, необходимую для подписывания фиксаций {% data variables.product.prodname_github_codespaces %}, например путем связывания {% data variables.product.prodname_github_codespaces %} с репозиторием файлов точек, содержащим файлы конфигурации Git.

## Ошибки после отключения проверки GPG

При включении проверки GPG {% data variables.product.prodname_github_codespaces %} по умолчанию подписывает все фиксации, выполняемые в codespaces. Для этого для параметра конфигурации `commit.gpgsign` Git задано `true`значение .

Если вы отключили проверку GPG и работаете в существующем codespace, это значение по-прежнему будет иметь значение `true`. Это означает, что {% data variables.product.prodname_github_codespaces %} попытается подписать фиксации, но не сможет это сделать, так как вы отключили параметр проверки GPG.

Чтобы сохранить регулярные фиксации без знака в codespace, сбросьте `commit.gpgsign` значение по умолчанию , введя `false` следующую команду в терминале.

```Shell{:copy}
git config --unset commit.gpgsign
```

Чтобы убедиться, что значение было правильно удалено из конфигурации, можно ввести `git config --list`. Значение для `commit.gpgsign` не должно отображаться в списке.

## Ошибки, вызванные конфликтующей конфигурацией

Чтобы автоматически подписать фиксации, {% data variables.product.prodname_github_codespaces %} задает определенные значения конфигурации Git в codespace. Если переопределить значения, заданные {% data variables.product.prodname_github_codespaces %}, вы не сможете подписать фиксации. 

Вы можете случайно переопределить эти значения, если вы связали {% data variables.product.prodname_github_codespaces %} с репозиторием файлов точек, содержащим файлы конфигурации Git. Дополнительные сведения об использовании файлов точек с {% data variables.product.prodname_github_codespaces %} см. в разделе [Персонализация {% data variables.product.prodname_github_codespaces %} для вашей учетной записи](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles).

### Проверка конфликтующей конфигурации

Чтобы подписать фиксации с помощью GPG, {% data variables.product.prodname_github_codespaces %} автоматически задает следующие значения конфигурации Git на уровне системы.

| Параметр конфигурации | Обязательное значение |
| --------------------- | -------------- |
| `user.name` | Должно соответствовать полному имени, заданному в профиле {% data variables.product.prodname_dotcom %} |
| `credential.helper` | Нужно задать значение `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Нужно задать значение `/.codespaces/bin/gh-gpgsign` |

Чтобы убедиться, что эти значения правильно заданы в codespace, можно использовать `git config --list --show-origin` команду . Так как {% data variables.product.prodname_github_codespaces %} задает эту конфигурацию на уровне системы, необходимые параметры конфигурации должны поступать из `/usr/local/etc/gitconfig`.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

В дополнение к значениям, перечисленным выше, могут возникнуть ошибки, если файлы точек, используемые в codespaces, содержат любое из следующих значений.

- Значение `user.signingkey` конфигурации Git
- Значение `commit.gpgsign` конфигурации Git
- Установка вручную `GITHUB_TOKEN`

### Удаление конфликтующей конфигурации

Если вы хотите сохранить автоматическую проверку GPG для {% data variables.product.prodname_github_codespaces %}, необходимо удалить все конфликтующие конфигурации из файлов точек, используемых в codespaces.

Например, если глобальный `.gitconfig` файл на локальном `gpg.program` компьютере содержит значение и этот файл отправлен в репозиторий файлов точек, связанный с {% data variables.product.prodname_github_codespaces %}, может потребоваться удалить `gpg.program` из этого файла и установить его на уровне системы на локальном компьютере.

{% note %}

**Примечание:** Любые изменения в репозитории dotfiles будут применяться к новым пространствам кода, которые вы создаете, но не к существующим пространствам кода.

{% endnote %}

1. На локальном компьютере откройте терминал.
2. Чтобы удалить конфликтующее значение из `~/.gitconfig` (Mac/Linux) или `C:\Users\YOUR-USER\.gitconfig` (Windows), используйте `git config --global --unset` команду .

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. Отправьте изменение в репозиторий файлов точек на {% data variables.product.prodname_dotcom %}.
4. При необходимости, чтобы сохранить локальную конфигурацию, снова задайте значение в файле конфигурации Git, который не отправляется в репозиторий файлов точек. 

   Например, с помощью флага `--system` можно задать конфигурацию в файле системного уровня в `PATH/etc/gitconfig`, где `PATH` — это каталог, в котором Git установлен в системе.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

Кроме того, если репозиторий dotfiles содержит скрипт установки в распознаваемом файле, например `install.sh`, можно использовать `$CODESPACES` переменную среды для добавления условной логики, например только в `gpg.program` том случае, если вы не находитесь в пространстве кода. В следующем примере возвращает значение `true` , `-z "$CODESPACES"` если вы не находитесь в пространстве кода.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Дополнительные материалы
- "[Сведения о проверке подписи фиксации](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
- [`git config`](https://git-scm.com/docs/git-config) в официальной документации по Git
