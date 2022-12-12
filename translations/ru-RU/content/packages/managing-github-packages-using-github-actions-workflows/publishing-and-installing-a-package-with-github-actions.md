---
title: Публикация и установка пакета с помощью GitHub Actions
intro: 'Вы можете настроить в {% data variables.product.prodname_actions %} рабочий процесс для автоматической публикации или установки пакета из {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 80516eb55e9ffc8f2de3f92cf24a7d7f230b8407
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193125'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Сведения об установке {% data variables.product.prodname_registry %} с помощью {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions).

Вы можете расширить возможности CI и CD вашего репозитория, публикуя или устанавливая пакеты в рамках рабочего процесса.

{% ifversion packages-registries-v2 %}
### Проверка подлинности в реестрах пакетов с детализированными разрешениями

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### Проверка подлинности в реестрах пакетов с разрешениями уровня репозитория

{% endif %}

{% ifversion packages-registries-v2 %} Некоторые реестры {% data variables.product.prodname_registry %} поддерживают только разрешения на уровне репозитория и не поддерживают детализированные разрешения. Список этих реестров см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

Если вы хотите, чтобы рабочий процесс мог получить доступ к реестру {% data variables.product.prodname_registry %}, который не поддерживает детализированные разрешения, то{% else %}Для проверки подлинности в реестрах пакетов в {% data variables.product.product_name %},{% endif %} рекомендуется использовать `GITHUB_TOKEN` , который {% data variables.product.product_name %} автоматически создает для репозитория при включении {% data variables.product.prodname_actions %}. Вам следует установить разрешения для этого маркера доступа в файле рабочего процесса, чтобы предоставить доступ на чтение в области `contents` и доступ на запись в области `packages`. Для вилок `GITHUB_TOKEN` предоставляется доступ на чтение в родительском репозитории. Дополнительные сведения см. в разделе [Проверка подлинности с помощью GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token).

Вы можете ссылаться на `GITHUB_TOKEN` в файле рабочего процесса с помощью контекста {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Дополнительные сведения см. в разделе [Проверка подлинности с помощью GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token).

## Сведения о разрешениях и доступе к пакетам

{% ifversion packages-registries-v2 %}

### Пакеты, ограниченные пользователями или организациями

Реестры, поддерживающие детализированные разрешения, позволяют пользователям создавать и администрировать пакеты как свободные ресурсы на уровне организации. Пакеты могут принадлежать организации или личной учетной записи, и вы можете настраивать доступ к каждому пакету отдельно от разрешений репозитория.

Все рабочие процессы, обращаюющиеся к реестрам, поддерживающим детализированные разрешения, должны использовать `GITHUB_TOKEN` вместо {% data variables.product.pat_generic %}. Дополнительные сведения о лучших методиках обеспечения безопасности см. в разделе [Усиление безопасности для GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets).

### Пакеты, ограниченные репозиториями

{% endif %}

Когда вы включаете GitHub Actions, GitHub устанавливает приложение GitHub в вашем репозитории. Секрет `GITHUB_TOKEN` — это маркер доступа к установке приложения GitHub. Маркер доступа установки можно использовать для проверки подлинности от имени приложения GitHub, установленного в вашем репозитории. Разрешения маркера ограничены репозиторием, содержащим ваш рабочий процесс. Дополнительные сведения см. в разделе [Разрешения для GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret).

{% data variables.product.prodname_registry %} позволяют отправлять и получать пакеты с помощью маркера `GITHUB_TOKEN`, доступного рабочему процессу {% data variables.product.prodname_actions %}.

{% ifversion packages-registries-v2 %}

## Разрешения и параметры доступа по умолчанию для контейнеров, изменяемых с помощью рабочих процессов

При создании, установке, изменении или удалении контейнера с помощью рабочего процесса существуют некоторые разрешения и параметры доступа по умолчанию, используемые для обеспечения доступа администраторов к рабочему процессу. Вы также можете настраивать эти параметры доступа.

Например, если рабочий процесс создает контейнер с помощью `GITHUB_TOKEN`, то по умолчанию:
- контейнер наследует модель видимости и разрешений репозитория, в котором выполняется рабочий процесс;
- администраторы репозитория, в которых выполняется рабочий процесс, становятся администраторами контейнера после создания контейнера.

Ниже приведены дополнительные примеры работы разрешений по умолчанию для рабочих процессов, управляющих пакетами.

| Задача рабочего процесса {% data variables.product.prodname_actions %} | Разрешения и права доступа по умолчанию |
|----|----|
| Загрузка существующего контейнера | - Если контейнер является общедоступным, любой рабочий процесс, выполняющийся в любом репозитории, может загрузить этот контейнер. <br> - Если контейнер является внутренним, все рабочие процессы, выполняющиеся в любом репозитории, принадлежащем учетной записи Enterprise, могут загрузить этот контейнер. Для корпоративных организаций вы можете читать любой репозиторий организации. <br> - Если контейнер является частным, то только рабочие процессы, выполняющиеся в репозиториях, которым предоставлено разрешение на чтение в этом контейнере, могут загружать контейнер. <br>
| Отправка новой версии в существующий контейнер | - Если контейнер является частным, внутренним или общедоступным, то только рабочие процессы, выполняющиеся в репозиториях, которым предоставлено разрешение на запись в этом контейнере, могут отправлять в него новые версии.
| Удаление контейнера или версий контейнера | - Если контейнер является частным, внутренним или общедоступным, то только рабочие процессы, выполняющиеся в репозиториях, которым предоставлено разрешение на удаление в этом контейнере, могут удалять существующие версии контейнера.

Вы также можете настроить доступ к контейнерам более точно или настроить поведение разрешений по умолчанию. Дополнительные сведения см. в разделе [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% endif %}

## Публикация пакета с помощью действия

Для автоматической публикации пакетов в рамках потока непрерывной интеграции (CI) можно использовать {% data variables.product.prodname_actions %}. Такой подход к непрерывному развертыванию (CD) позволяет автоматизировать создание новых версий пакетов, если код соответствует вашим стандартам качества. Например, можно создать рабочий процесс, который выполняет тесты CI каждый раз, когда разработчик отправляет код в определенную ветвь. Если тесты будут пройдены, рабочий процесс сможет опубликовать новую версию пакета в {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

В следующем примере показано, как использовать {% data variables.product.prodname_actions %}, чтобы выполнить сборку {% ifversion not fpt or ghec %}и тестирование{% endif %} вашего приложения, а затем автоматически создать образ Docker и опубликовать его в {% data variables.product.prodname_registry %}.

Создайте новый файл рабочего процесса в репозитории (таком как `.github/workflows/deploy-image.yml`) и добавьте следующий код YAML:

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: webpack artifacts
          path: public/

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [12.x, 14.x]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

Соответствующие параметры описаны в следующей таблице. Полные сведения о каждом элементе рабочего процесса см. в разделе [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions).

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
Настраивает рабочий процесс <code>Create and publish a Docker image</code> для запуска при каждой отправке изменений в ветвь с именем <code>release</code>.
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  Определяет две пользовательские переменные среды для рабочего процесса. Они используются для домена {% data variables.product.prodname_container_registry %} и имени образа Docker, создаваемого этим рабочим процессом.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  Это единственное задание в данном рабочем процессе. Оно настроено для запуска в последней доступной версии Ubuntu.
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  Это задание устанавливает NPM и использует его для сборки приложения.
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: webpack artifacts
        path: public
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```

</td>
<td>
Это задание использует <code>npm test</code> для тестирования кода. Команда <code>needs: run-npm-build</code> делает это задание зависимым от задания <code>run-npm-build</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
Это задание публикует пакет. Команда <code>needs: run-npm-test</code> делает это задание зависимым от задания <code>run-npm-test</code>.
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
Задает разрешения, предоставляемые <code>GITHUB_TOKEN</code> для действий в этом задании.
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Создает шаг с именем <code>Log in to the {% data variables.product.prodname_container_registry %}</code>, выполняющий вход в реестр с помощью учетной записи и пароля, которые будут публиковать пакеты. После публикации пакеты становятся собственностью определенной здесь учетной записи.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
Этот шаг использует <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> для извлечения тегов и меток, которые будут применены к указанному образу. <code>id</code> "meta" позволяет ссылаться на выходные данные этого шага на следующем шаге. Значение <code>images</code> предоставляет базовое имя для тегов и меток.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Создает новый шаг с именем <code>Log in to GitHub Docker Registry</code>, выполняющий вход в реестр с помощью учетной записи и пароля, которые будут публиковать пакеты. После публикации пакеты становятся собственностью определенной здесь учетной записи.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
Создает новый шаг с именем <code>Build and push Docker image</code>. Этот шаг выполняется как часть задания <code>build-and-push-image</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
Использует действие Docker <code>build-push-action</code> для сборки образа на основе <code>Dockerfile</code> вашего репозитория. Если сборка выполнена успешно, передает образ в {% data variables.product.prodname_registry %}.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
Отправляет необходимые параметры в действие <code>build-push-action</code>. Они определяются в последующих строках.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
Определяет контекст сборки как набор файлов, расположенных по указанному пути. Дополнительные сведения см. в разделе <a href="https://github.com/docker/build-push-action#usage">Использование</a>.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
Отправляет этот образ в реестр, если он был успешно собран.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  Добавляет теги и метки, извлеченные на шаге "meta".
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
Помечает образ с помощью SHA фиксации, которая активировала рабочий процесс.
</td>
</tr>
{% endif %}

</table>

Этот новый рабочий процесс будет запускаться автоматически при каждой отправке изменения в ветвь с именем `release` в репозитории. Ход выполнения можно просматривать на вкладке **Действия**.

Через несколько минут после завершения рабочего процесса новый пакет будет отображаться в репозитории. Сведения о поиске доступных пакетов см. в разделе [Просмотр пакетов репозитория](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages).

## Установка пакета с помощью действия

Пакеты можно устанавливать в рамках потока CI с помощью {% data variables.product.prodname_actions %}. Например, можно настроить рабочий процесс так, чтобы каждый раз, когда разработчик отправляет код в запрос на вытягивание, этот рабочий процесс разрешал зависимости путем загрузки и установки пакетов, размещенных в {% data variables.product.prodname_registry %}. Затем рабочий процесс может выполнять тесты CI, которые требуют зависимости.

Установка пакетов, размещенных в {% data variables.product.prodname_registry %} с помощью {% data variables.product.prodname_actions %}, требует минимальной настройки или дополнительной проверки подлинности при использовании `GITHUB_TOKEN`.{% ifversion fpt or ghec %} Передача данных также является бесплатной при установке пакета действием. Дополнительные сведения см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}
## Обновление рабочего процесса, который обращается к реестру с помощью {% data variables.product.pat_generic %}

{% data variables.product.prodname_registry %} поддерживает для простой `GITHUB_TOKEN` и безопасной проверки подлинности в рабочих процессах. Если вы используете реестр, поддерживающий детализированные разрешения, и рабочий процесс использует {% data variables.product.pat_generic %} для проверки подлинности в реестре, мы настоятельно рекомендуем обновить рабочий процесс для использования `GITHUB_TOKEN`.

Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

`GITHUB_TOKEN`Использование вместо {% data variables.product.pat_v1 %} с областью `repo` повышает безопасность репозитория, так как вам не нужно использовать долгоживущий {% data variables.product.pat_generic %}, который предоставляет ненужный доступ к репозиторию, в котором выполняется рабочий процесс. Дополнительные сведения о лучших методиках обеспечения безопасности см. в разделе [Усиление безопасности для GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets).

1. Перейдите на целевую страницу вашего пакета.
1. В левой боковой панели выберите **Управление доступом**.
  ![Параметр "Доступ к действиям" в меню слева](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. Чтобы обеспечить вашему пакету контейнера доступ к рабочему процессу, необходимо добавить в контейнер репозиторий, в котором хранится рабочий процесс. Нажмите **Добавить репозиторий** и найдите репозиторий, который вы хотите добавить.
   ![Кнопка добавления репозитория](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  **Примечание.** Добавление репозитория в контейнер с помощью пункта меню **Доступ к действиям** отличается от подключения контейнера к репозиторию. Дополнительные сведения см. в разделах [Обеспечение доступа рабочего процесса к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package) и [Подключение репозитория к пакету](/packages/learn-github-packages/connecting-a-repository-to-a-package).

  {% endnote %}
1. При необходимости, используя раскрывающееся меню "role", выберите уровень доступа по умолчанию, который хотите предоставить репозиторию для вашего образа контейнера.
  ![Уровни доступа разрешений для предоставления репозиториям](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. Откройте файл рабочего процесса. В строке, в которой вы входите в реестр, замените {% data variables.product.pat_generic %} {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Например, этот рабочий процесс публикует образ Docker в {% data variables.product.prodname_container_registry %} и использует {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} для проверки подлинности.

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the {% data variables.product.pat_generic %} to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
