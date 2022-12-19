---
title: Installation d’un certificat Apple sur des exécuteurs macOS pour le développement Xcode
intro: 'Vous pouvez signer les applications Xcode dans votre workflow d’intégration continue (CI) en installant un certificat de signature de code Apple sur les exécuteurs {% data variables.product.prodname_actions %}.'
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
shortTitle: Sign Xcode applications
ms.openlocfilehash: 47c534db1e16595af4735362c524f673376b53fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086689'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide vous montre comment ajouter une étape à votre workflow d’intégration continue (CI) pour installer un certificat de signature de code Apple et un profil de provisionnement sur les exécuteurs {% data variables.product.prodname_actions %}. Cela vous permettra de signer vos applications Xcode pour la publication sur l’Apple App Store ou de la distribuer aux groupes de test.

## Prérequis

Vous devez être familiarisé avec YAML et la syntaxe {% data variables.product.prodname_actions %}. Pour plus d'informations, consultez les pages suivantes :

- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »
- « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) »

Vous devez comprendre la création et la signature d’applications Xcode. Pour plus d’informations, consultez la [documentation pour développeurs Apple](https://developer.apple.com/documentation/).

## Création de secrets pour votre certificat et votre profil de provisionnement

Le processus de signature implique de stocker des certificats et des profils de provisionnement, de les transférer vers l’exécuteur, de les importer dans le trousseau de l’exécuteur et de les utiliser dans votre build.

Pour utiliser votre certificat et votre profil de provisionnement sur un exécuteur, nous vous recommandons vivement d’utiliser des secrets {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur la création de secrets et leur utilisation dans un workflow, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

Créez des secrets dans votre dépôt ou votre organisation pour les éléments suivants :

* Votre certificat de signature Apple.

  - Il s’agit de votre fichier de certificat `p12`. Pour plus d’informations sur l’exportation de votre certificat de signature à partir de Xcode, consultez la [documentation Xcode](https://help.apple.com/xcode/mac/current/#/dev154b28f09).
  
  - Vous devez convertir votre certificat en Base64 quand vous l’enregistrez en tant que secret. Dans cet exemple, le secret est nommé `BUILD_CERTIFICATE_BASE64`.

  - Utilisez la commande suivante pour convertir votre certificat en Base64 et le copier dans le Presse-papiers :

    ```shell
    base64 <em>build_certificate</em>.p12 | pbcopy
    ```
* Mot de passe de votre certificat de signature Apple.
  - Dans cet exemple, le secret est nommé `P12_PASSWORD`.

* Votre profil de provisionnement Apple.

  - Pour plus d’informations sur l’exportation de votre profil de provisionnement à partir de Xcode, consultez la [documentation Xcode](https://help.apple.com/xcode/mac/current/#/deva899b4fe5).

  - Vous devez convertir votre profil de provisionnement en Base64 quand vous l’enregistrez en tant que secret. Dans cet exemple, le secret est nommé `BUILD_PROVISION_PROFILE_BASE64`.

  - Utilisez la commande suivante pour convertir votre profil de provisionnement en Base64 et le copier dans le Presse-papiers :
  
    ```shell
    base64 <em>provisioning_profile.mobileprovision</em> | pbcopy
    ```

* Un mot de passe de trousseau.

  - Un nouveau trousseau est créé sur l’exécuteur. Ainsi, le mot de passe du nouveau trousseau peut être n’importe quelle nouvelle chaîne aléatoire. Dans cet exemple, le secret est nommé `KEYCHAIN_PASSWORD`.

## Ajouter une étape à votre workflow

Cet exemple de workflow inclut une étape qui importe le profil de provisionnement et le certificat Apple à partir des secrets {% data variables.product.prodname_dotcom %} et les installe sur l’exécuteur.

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

## Nettoyage requis sur les exécuteurs auto-hébergés

Les exécuteurs hébergés sur {% data variables.product.prodname_dotcom %} sont des machines virtuelles isolées qui sont automatiquement détruites à la fin de l’exécution du travail. Cela signifie que les certificats et le profil de provisionnement utilisés sur l’exécuteur pendant le travail seront détruits avec l’exécuteur lorsque le travail sera terminé.

Sur les exécuteurs auto-hébergés, le répertoire `$RUNNER_TEMP` est nettoyé à la fin de l’exécution du travail, mais le trousseau et le profil de provisionnement peuvent encore exister sur l’exécuteur.

Si vous utilisez des exécuteurs auto-hébergés, vous devez ajouter une étape finale à votre workflow pour vous assurer que ces fichiers sensibles sont supprimés à la fin du travail. L’étape de workflow indiquée ci-dessous est un exemple de procédure à suivre.

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
