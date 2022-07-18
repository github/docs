---
title: 在用于 Xcode 开发的 macOS 运行器上安装 Apple 证书
intro: '您可以在 {% data variables.product.prodname_actions %} 运行器上安装 Apple 代码签名证书，以在持续集成 (CI) 工作流程中对 Xcode 应用签名。'
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
shortTitle: 签名 Xcode 应用程序
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南显示如何在持续集成 (CI) 工作流程中添加一个步骤，以在 {% data variables.product.prodname_actions %} 运行器上安装 Apple 代码签名证书和预配配置文件。 这将允许您签署您的 Xcode 应用以发布到 Apple App Store 或分发到测试组。

## 基本要求

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅：

- "[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"

您应该了解 Xcode 应用的构建和签名。 更多信息请参阅 [Apple 开发者文档](https://developer.apple.com/documentation/)。

## 为您的证书和预配配置文件创建密码

签名过程包括存储证书和预配配置文件、将它们传输给运行器、将它们导入运行器的密钥链，以及在构建中使用它们。

要在运行器上使用您的证书和预配配置文件，我们强烈建议您使用 {% data variables.product.prodname_dotcom %} 密码。 有关创建密码和在工作流程中使用它们的更多信息，请参阅“[加密密钥](/actions/reference/encrypted-secrets)”。

在您的仓库或组织中为下列项目创建密钥：

* 您的 Apple 签名证书。

  - 这是您的 `p12` 证书文件。 有关从 Xcode 导出签名证书的更多信息，请参阅 [Xcode 文档](https://help.apple.com/xcode/mac/current/#/dev154b28f09)。

  - 当您将证书保存为密钥时，您应该将其转换为 Base64 。 在此示例中，该密钥名为 `BUILD_CERTIFICATE_BASE64`。

  - 使用以下命令将证书转换为 Base64 并将其复制到剪贴板：

    ```shell
    base64 <em>build_certificate</em>.p12 | pbcopy
    ```
* 您的 Apple 签名证书的密码。
  - 在此示例中，该密钥名为 `P12_PASSWORD`。

* 您的 Apple 预配配置文件。

  - 有关从 Xcode 导出预配配置文件的更多信息，请参阅 [Xcode 文档](https://help.apple.com/xcode/mac/current/#/deva899b4fe5)。

  - 当您将预配配置文件保存为密钥时，您应该将其转换为 Base64 。 在此示例中，该密钥名为 `BUILD_PROVISION_PROFILE_BASE64`。

  - 使用以下命令将预配配置文件转换为 Base64 并将其复制到剪贴板：

    ```shell
    base64 <em>provisioning_profile.mobileprovision</em> | pbcopy
    ```

* 密钥链密码。

  - 将在运行器上创建一个新的密钥链，因此新密钥链的密码可以是任何新的随机字符串。 在此示例中，该密钥名为 `KEYCHAIN_PASSWORD`。

## 在工作流程中添加一个步骤

此示例工作流程包括从 {% data variables.product.prodname_dotcom %} 密钥导入 Apple 证书和配置文件并将其安装在运行器上的步骤。

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

## 自托管运行器上的必要清理

{% data variables.product.prodname_dotcom %} 托管的运行器是孤立的虚拟机器，在作业执行结束时自动销毁。 这意味着在运行器中使用的证书和预配配置文件将在运行器完成任务后被销毁。

自托管的运行器中，`$RUNNER_TEMP` 目录在任务执行结束时被清除，但在运行器上可能仍然存在密钥链和预配配置文件。

如果您使用自托管的运行器， 您应该在工作流程中添加最后一步，以帮助确保这些敏感文件在作业结束时被删除。 下面显示的工作流程步骤是如何执行此操作的一个示例。

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
