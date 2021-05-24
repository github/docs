---
title: Instalar un certificado de Apple en ejecutores de macOS para el desarrollo de Xcode
intro: 'Puedes firmar apps de Xcode dentro de tu flujo de integración continua (IC) si instalas un certificado de firma de código de Apple en los ejecutores de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Xcode
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Esta guía te muestra cómo agregar un paso a tu flujo de trabajo de integración continua (IC), el cual instale un certificado de firma de código de Apple y perfil de aprovisionamiento en los ejecutores de {% data variables.product.prodname_actions %}. Esto te permitirá firmar tus apps de Xcode para publicarlas en la App Store de Apple o distribuirlas a los grupos de prueba.

### Prerrequisitos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta:

- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"

Debes entender la forma en la que la app de Xcode crea y firma las apps. Para obtener más información, consulta la [Documentación de desarrollador de Apple](https://developer.apple.com/documentation/).

### Crear secretos para tu certificado y perfil de aprovisionamiento

El proceso de inicio de sesión involucra almacenar certificados y perfiles de aprovisionamiento, transferirlos al ejecutor, importarlos en el keychain del ejecutor y utilizarlos en tu compilación.

Para utilizar tu certificado y perfil de aprovisionamiento en un ejecutor, te recomendamos fuertemente que utilices los secretos de {% data variables.product.prodname_dotcom %}. Para obtener más información sobre cómo crear secretos y utilizarlos en un flujo de trabajo, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets)".

Crea secretos en tu repositorio u organización para los siguientes elementos:

* Tu certificado de inicio de sesión de Apple.

  - Este es tu archivo de certificado `p12`. Para obtener más información sobre cómo exportar tu certificado de inicio de sesión desde Xcode, consulta la [documentación de Xcode](https://help.apple.com/xcode/mac/current/#/dev154b28f09).

  - Deberías convertir tu certificado en Base64 cuando lo guartes como secreto. En este ejemplo, el secreto se llama `BUILD_CERTIFICATE_BASE64`.

  - Utiliza el siguiente comando para convertir tu certificado en Base64 y cópialo a tu portapapeles:

    ```shell
    base64 <em>build_certificate</em>.p12 | pbcopy
    ```
* La contraseña de tu certificado de inicio de sesión de Apple.
  - En este ejemplo, el secreto se llama `P12_PASSWORD`.

* Tu perfil de aprovisionamiento de Apple.

  - Para obtener más información sobre cómo exportar tu perfil de aprovisionamiento desde Xcode, consulta la [documentación de Xcode](https://help.apple.com/xcode/mac/current/#/deva899b4fe5).

  - Debes convertir tu perfil de aprovisionamiento a Base64 cuando lo guardas como secreto. En este ejemplo, el secreto se llama `BUILD_PROVISION_PROFILE_BASE64`.

  - Utiliza el siguiente comando para convertir tu perfil de aprovisionamiento en Base64 y cópialo a tu portapapeles:

    ```shell
    base64 <em>provisioning_profile.mobileprovision</em> | pbcopy
    ```

* Una contraseña de keychain.

  - Se creará una keychain nueva en el ejecutor para que la contraseña de esta pueda ser cualquier secuencia aleatoria. En este ejemplo, el secreto se llama `KEYCHAIN_PASSWORD`.

### Agrega un paso a tu flujo de trabajo

Este flujo de trabajo de ejemplo incluye un paso que importa el certificado de Apple y perfil de aprovisionamiento desde los secretos de {% data variables.product.prodname_dotcom %} y los instala en el ejecutor.

{% raw %}
```yaml{:copy}
name: App build
on: push

jobs:
  build_with_signing:
    runs-on: macos-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Install the Apple certificate and provisioning profile
        env:
          BUILD_CERTIFICATE_BASE64: ${{ secrets.BUILD_CERTIFICATE_BASE64 }}
          P12_PASSWORD: ${{ secrets.P12_PASSWORD }}
          BUILD_PROVISION_PROFILE_BASE64: ${{ secrets.BUILD_PROVISION_PROFILE_BASE64 }}
          KEYCHAIN_PASSWORD: ${{ secrets.KEYCHAIN_PASSWORD }}
        run: |
          # create variables
          CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
          PP_PATH=$RUNNER_TEMP/build_pp.mobileprovision
          KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

          # import certificate and provisioning profile from secrets
          echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode --output $CERTIFICATE_PATH
          echo -n "$BUILD_PROVISION_PROFILE_BASE64" | base64 --decode --output $PP_PATH

          # create temporary keychain
          security create-keychain -p $KEYCHAIN_PASSWORD $KEYCHAIN_PATH
          security set-keychain-settings -lut 21600 $KEYCHAIN_PATH
          security unlock-keychain -p $KEYCHAIN_PASSWORD $KEYCHAIN_PATH

          # import certificate to keychain
          security import $CERTIFICATE_PATH -P $P12_PASSWORD -A -t cert -f pkcs12 -k $KEYCHAIN_PATH
          security list-keychain -d user -s $KEYCHAIN_PATH

          # apply provisioning profile
          mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
          cp $PP_PATH ~/Library/MobileDevice/Provisioning\ Profiles
      - name: Build app
        ...
```
{% endraw %}

### Limpieza requerida en los ejecutores auto-hospedados

Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} son máquinas virtuales aisladas que se destruyen automáticamente al final de la ejecución del job. Esto significa que los certificados y prefil de aprovisionamiento que se utiliza en el ejecutor durante el job se destruirán con el ejecutor cuando se complete dicho job.

En los ejecutores auto-hospedados, el directorio `$RUNNER_TEMP` se limpia al final de la ejecución del job, pero la keychain y archivo de aprovisionamiento podrían seguir existiendo en el ejecutor.

Si utilizas ejecutores auto-programados, deberás agregar un paso final a tu flujo de trabajo para ayudar a asegurarte que estos archivos sensibles se borren al final del job. El paso de flujo de trabajo que se muestra a continuación es un ejemplo de como hacer esto.

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
