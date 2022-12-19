---
title: Установка сертификата Apple в средствах выполнения macOS для разработки в Xcode
shortTitle: Sign Xcode applications
intro: 'Вы можете подписать приложения Xcode в ходе рабочего процесса непрерывной интеграции (CI), установив сертификат подписи кода Apple в {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/guides/installing-an-apple-certificate-on-macos-runners-for-xcode-development
  - /actions/deployment/installing-an-apple-certificate-on-macos-runners-for-xcode-development
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Xcode
ms.openlocfilehash: f95de8998d067fcae3829f8f4137c86fdeb92212
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010015'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как добавить в рабочий процесс непрерывной интеграции (CI) этап, на котором в средствах выполнения {% data variables.product.prodname_actions %} устанавливаются сертификат подписывания кода Apple и профиль обеспечения. Это позволит подписывать приложения Xcode для публикации в Apple App Store или распространения в тестовых группах.

## Предварительные требования

Требуются знания YAML и синтаксиса {% data variables.product.prodname_actions %}. Дополнительные сведения можно найти в разделе

- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»
- [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)

У вас должно быть представление о создании и подписывании приложений в Xcode. Дополнительные сведения см. в [документации Apple для разработчиков](https://developer.apple.com/documentation/).

## Создание секретов для сертификата и профиля обеспечения

Процесс подписывания включает сохранение сертификатов и профилей обеспечения, их передачу в средство выполнения, импорт в цепочку ключей средства выполнения и использование при сборке.

Для применения сертификата и профиля обеспечения в средстве выполнения настоятельно рекомендуется использовать секреты {% data variables.product.prodname_dotcom %}. Дополнительные сведения о создании секретов и их использовании в рабочем процессе см. в разделе [Зашифрованные секреты](/actions/reference/encrypted-secrets).

Создайте секреты в репозитории или организации для перечисленных ниже элементов.

* Сертификат для подписи Apple.

  - Это ваш файл сертификата `p12`. Дополнительные сведения об экспорте сертификата для подписи из Xcode см. в [документации по Xcode](https://help.apple.com/xcode/mac/current/#/dev154b28f09).
  
  - При сохранении сертификата в качестве секрета необходимо преобразовать его в формат Base64. В этом примере секрет называется `BUILD_CERTIFICATE_BASE64`.

  - Чтобы преобразовать сертификат в формат Base64 и скопировать его в буфер обмена, используйте следующую команду:

    ```shell
    base64 BUILD_CERTIFICATE.p12 | pbcopy
    ```
* Пароль сертификата для подписи Apple.
  - В этом примере секрет называется `P12_PASSWORD`.

* Профиль обеспечения Apple.

  - Дополнительные сведения об экспорте профиля обеспечения из Xcode см. в [документации по Xcode](https://help.apple.com/xcode/mac/current/#/deva899b4fe5).

  - При сохранении профиля обеспечения в качестве секрета необходимо преобразовать его в формат Base64. В этом примере секрет называется `BUILD_PROVISION_PROFILE_BASE64`.

  - Чтобы преобразовать профиль обеспечения в формат Base64 и скопировать его в буфер обмена, используйте следующую команду:
  
    ```shell
    base64 PROVISIONING_PROFILE.mobileprovision | pbcopy
    ```

* Пароль цепочки ключей.

  - В средстве выполнения будет создана новая цепочка ключей, поэтому ее паролем может быть любая новая случайная строка. В этом примере секрет называется `KEYCHAIN_PASSWORD`.

## Добавьте этап в рабочий процесс.

В этом примере рабочего процесса включен этап, на котором сертификат Apple и профиль обеспечения импортируются из секретов {% data variables.product.prodname_dotcom %} и устанавливаются в средстве выполнения.

```yaml{:copy}
name: App build
on: push

jobs:
  build_with_signing:
    runs-on: macos-latest

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Install the Apple certificate and provisioning profile
        env:
          BUILD_CERTIFICATE_BASE64: {% raw %}${{ secrets.BUILD_CERTIFICATE_BASE64 }}{% endraw %}
          P12_PASSWORD: {% raw %}${{ secrets.P12_PASSWORD }}{% endraw %}
          BUILD_PROVISION_PROFILE_BASE64: {% raw %}${{ secrets.BUILD_PROVISION_PROFILE_BASE64 }}{% endraw %}
          KEYCHAIN_PASSWORD: {% raw %}${{ secrets.KEYCHAIN_PASSWORD }}{% endraw %}
        run: |
          # create variables
          CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
          PP_PATH=$RUNNER_TEMP/build_pp.mobileprovision
          KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

          # import certificate and provisioning profile from secrets
          echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode --output $CERTIFICATE_PATH
          echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode --output $PP_PATH

          # create temporary keychain
          security create-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH
          security set-keychain-settings -lut 21600 $KEYCHAIN_PATH
          security unlock-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH

          # import certificate to keychain
          security import $CERTIFICATE_PATH -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k $KEYCHAIN_PATH
          security list-keychain -d user -s $KEYCHAIN_PATH

          # apply provisioning profile
          mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
          cp $PP_PATH ~/Library/MobileDevice/Provisioning\ Profiles
      - name: Build app
        ...
```

## Обязательная очистка в локальных средствах выполнения

Размещенные на {% data variables.product.prodname_dotcom %} средства выполнения — это изолированные виртуальные машины, которые автоматически уничтожаются после выполнения задания. Это означает, что сертификаты и профиль обеспечения, используемые в средстве выполнения во время выполнения задания, будут уничтожены вместе со средством выполнения после завершения задания.

В локальных средствах выполнения каталог `$RUNNER_TEMP` очищается по завершении выполнения задания, но цепочка ключей и профиль обеспечения могут по-прежнему существовать в средстве выполнения.

Если вы используете локальные средства выполнения, следует добавить последний этап в рабочий процесс, чтобы гарантировать удаление этих конфиденциальных файлов по завершении задания. Примером может служить показанный ниже этап рабочего процесса.

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
