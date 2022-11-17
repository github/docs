---
title: Поддержка Dockerfile для GitHub Actions
shortTitle: Dockerfile support
intro: 'При создании `Dockerfile` для действия контейнера Docker следует знать, как отдельные инструкции Docker взаимодействуют с GitHub Actions и файлом метаданных действия.'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088645'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Инструкции по Dockerfile

`Dockerfile` содержит инструкции и аргументы, определяющие содержимое и реакцию на событие запуска контейнера Docker. Дополнительные сведения об инструкциях, поддерживаемых Docker, см. в статье [Справочник по Dockerfile](https://docs.docker.com/engine/reference/builder/) в документации по Docker.

## Инструкции и переопределения Dockerfile

Некоторые инструкции Docker взаимодействуют с GitHub Actions, а файл метаданных действия может переопределять некоторые инструкции Docker. Обязательно изучите то, как Dockerfile взаимодействует с {% data variables.product.prodname_actions %}, чтобы предотвратить непредвиденную реакцию на событие.

### Пользователь

Действия Docker должен выполнять пользователь Docker по умолчанию (корневой). Не используйте инструкцию `USER` в `Dockerfile`, поскольку вы не сможете получить доступ к `GITHUB_WORKSPACE`. Дополнительные сведения см. в статье [Использование переменных среды](/actions/configuring-and-managing-workflows/using-environment-variables) и в [справочнике USER](https://docs.docker.com/engine/reference/builder/#user) в документации по Docker.

### FROM

Первой инструкцией в `Dockerfile` должна быть `FROM`, выбирающая базовый образ Docker. Дополнительные сведения см. в [справочнике FROM](https://docs.docker.com/engine/reference/builder/#from) в документации по Docker.

Далее приведены некоторые рекомендации по настройке аргумента `FROM`:

- Рекомендуется использовать официальные образы Docker. Например, `python` или `ruby`.
- Используйте тег версии (если он существует), предпочтительно с основным номером версии. Например, используйте `node:10` вместо `node:latest`.
- Рекомендуется использовать образы Docker, основанные на операционной системе [Debian](https://www.debian.org/).

### WORKDIR

{% data variables.product.product_name %} задает путь к рабочей папке в переменной среды `GITHUB_WORKSPACE`. Инструкцию `WORKDIR` не рекомендуется использовать в `Dockerfile`. Перед выполнением действия {% data variables.product.product_name %} подключит каталог `GITHUB_WORKSPACE` поверх всего, что находилось в этом расположении в образе Docker и задаст `GITHUB_WORKSPACE` в качестве рабочей папки. Дополнительные сведения см. в статье [Использование переменных среды](/actions/configuring-and-managing-workflows/using-environment-variables) и в [справочнике WORKDIR](https://docs.docker.com/engine/reference/builder/#workdir) в документации по Docker.

### ENTRYPOINT

Если вы укажите `entrypoint` в файле метаданных действия, он переопределит `ENTRYPOINT`, указанный в файле `Dockerfile`. Дополнительные сведения см. в разделе [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint).

Инструкция Docker `ENTRYPOINT` имеет форму _оболочки_ и форму _exec_. В документации по `ENTRYPOINT` Docker рекомендуется использовать форму _exec_ инструкции `ENTRYPOINT`. Дополнительные сведения о форме _exec_ и форме _оболочки_ см. в [справочнике ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) в документации по Docker.

Не следует применять `WORKDIR` для указания точки входа в Dockerfile. Вместо этого воспользуйтесь абсолютным путем. Дополнительные сведения см. в статье о [WORKDIR](#workdir).

Если вы настроите контейнер для использования формы _exec_ инструкции `ENTRYPOINT`, `args`, настроенный в файле метаданных действия, не будет выполняться в командной оболочке. Если `args` действия содержит переменную среды, эта переменная не будет заменена. Например, при использовании следующего формата _exec_ вместо значения, хранящегося в `$GITHUB_SHA`, будет напечатано `"$GITHUB_SHA"`.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Если вам нужно выполнить подстановку переменной, используйте форму _оболочки_ или выполните оболочку напрямую. Например, используя следующий формат _exec_, можно выполнить оболочку для печати значения, хранящегося в переменной среды `GITHUB_SHA`.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Чтобы предоставить `args`, определенный в файле метаданных действия, контейнеру Docker, который использует форму _exec_ в `ENTRYPOINT`, рекомендуется создать сценарий оболочки под именем `entrypoint.sh`, вызываемый из инструкции `ENTRYPOINT`:

#### Пример *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### Пример файла *entrypoint.sh*

Используя приведенный выше пример Dockerfile, {% data variables.product.product_name %} отправит `args`, настроенный в файле метаданных действия в качестве аргументов, в `entrypoint.sh`. Добавьте `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) в начало файла `entrypoint.sh`, чтобы явно использовать оболочку, соответствующую [POSIX](https://en.wikipedia.org/wiki/POSIX).

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Ваш код должен быть исполняемым. Прежде чем использовать файл `entrypoint.sh` в рабочем процессе, убедитесь, что он имеет разрешения `execute`. Вы можете изменить разрешение в терминале с помощью следующей команды:
  ``` sh
  chmod +x entrypoint.sh
  ```

Если сценарий оболочки `ENTRYPOINT` не является исполняемым, вы получите следующую ошибку:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

Если вы определите `args` в файле метаданных действия, `args` переопределит инструкцию `CMD`, указанную в `Dockerfile`. Дополнительные сведения см. в статье [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs).

При использовании `CMD` в своем `Dockerfile` следуйте приведенным ниже рекомендациям:

{% data reusables.actions.dockerfile-guidelines %}

## Поддерживаемые возможности Linux

{% data variables.product.prodname_actions %} поддерживает возможности Linux по умолчанию, которые поддерживает Docker. Возможности нельзя добавлять или удалять. Дополнительные сведения о возможностях Linux по умолчанию, которые поддерживает Docker, см. в статье [Привилегии среды выполнения и возможности Linux](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities) в документации по Docker. Дополнительные сведения о возможностях Linux см. в статье [Общие сведения о возможностях Linux](http://man7.org/linux/man-pages/man7/capabilities.7.html) на страницах руководства Linux.
