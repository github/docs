---
title: Instalar um certificado da Apple em executores do macOS para desenvolvimento do Xcode
intro: 'Você pode assinar aplicativos Xcode na sua integração contínua (CI) instalando um certificado de assinatura de código da Apple nos executores de {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'CI'
  - 'Xcode'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra como adicionar uma etapa ao fluxo de trabalho de integração contínua (CI) que instala um certificado de assinatura de código da Apple e o perfil de provisionamento em executores de {% data variables.product.prodname_actions %}. Isso permitirá que você assine seus aplicativos Xcode para publicar na Apple App Store ou distribuí-los para testar grupos.

### Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"

Você deve ter um entendimento de criação e assinatura do aplicativo Xcode. Para obter mais informações, consulte a [Documentação de desenvolvedor da Apple](https://developer.apple.com/documentation/).

### Criar segredos para seu certificado e perfil de provisionamento

O processo de assinatura envolve o armazenamento de certificados e provisionamento de perfis, transferindo-os para o executor, importando-os para a keychain e usando-os na sua compilação.

Para usar seu certificado e perfil de provisionamento em um executor, é altamente recomendado que você use segredos de {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre a criação de segredos e usá-los em um fluxo de trabalho, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets)".

Crie segredos no seu repositório ou organização para os seguintes itens:

* Seu certificado de assinatura Apple.

  - Este é seu arquivo de certificado `p12`. Para obter mais informações sobre como exportar seu certificado de assinatura a partir do Xcode, consulte a [documentação do Xcode](https://help.apple.com/xcode/mac/current/#/dev154b28f09).

  - Você deve converter seu certificado em Base64 ao salvá-lo como um segredo. Neste exemplo, o segredo é denominado `BUILD_CERTIFICATE_BASE64`.

  - Use o comando a seguir para converter seu certificado para Base64 e copiá-lo para a sua área de transferência:

    ```shell
    base64 <em>build_certificate</em>.p12 | pbcopy
    ```
* A senha para seu certificado de assinatura da Apple.
  - Neste exemplo, o segredo é denominado `P12_PASSWORD`.

* O seu perfil de provisionamento da Apple.

  - Para obter mais informações sobre a exportação do seu perfil de provisionamento a partir do Xcode, consulte a [documentação do Xcode](https://help.apple.com/xcode/mac/current/#/deva899b4fe5).

  - Você deve converter o seu perfil de provisionamento para Base64 ao salvá-lo como segredo. Neste exemplo, o segredo é denominado `BUILD_PROVISION_PROFILE_BASE64`.

  - Use o comando a seguir para converter o seu perfil de provisionamento para Base64 e copiá-lo para a sua área de transferência:

    ```shell
    base64 <em>provisioning_profile.mobileprovision</em> | pbcopy
    ```

* Uma senha da keychain.

  - Uma nova keychain será criada no executo. Portanto, a senha para a nova keychain pode ser qualquer nova string aleatória. Neste exemplo, o segredo se chama `KEYCHAIN_PASSWORD`.

### Adicionar uma etapa ao seu fluxo de trabalho

Este fluxo de trabalho de exemplo inclui uma etapa que importa o certificado da Apple e o perfil de provisionamento dos segredos de {% data variables.product.prodname_dotcom %} e os instala no executor.

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

### Limpeza necessária nos executores auto-hospedados

Executores hosperados em {% data variables.product.prodname_dotcom %} são máquinas virtuais isoladas destruídas automaticamente no final da execução do trabalho. Isso significa que os certificados e o perfil de provisionamento usados no executor durante o trabalho serão destruídos com o executor quando o trabalho for concluído.

Nos executores auto-hospedados, o diretório `$RUNNER_TEMP` é limpo no final da execução do trabalho, mas a keychain e o perfil de provisionamento ainda existem no executor.

Se você usa executores auto-hospedados, você deve adicionar uma última etapa ao seu fluxo de trabalho para ajudar a garantir que esses arquivos sensíveis sejam excluídos no final do trabalho. A etapa do fluxo de trabalho abaixo é um exemplo de como fazer isso.

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
