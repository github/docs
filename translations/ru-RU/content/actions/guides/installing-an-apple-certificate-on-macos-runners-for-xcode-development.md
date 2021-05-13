---
title: Installing an Apple certificate on macOS runners for Xcode development
intro: 'You can sign Xcode apps within your continuous integration (CI) workflow by installing an Apple code signing certificate on {% data variables.product.prodname_actions %} runners.'
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

### Introduction

This guide shows you how to add a step to your continuous integration (CI) workflow that installs an Apple code signing certificate and provisioning profile on {% data variables.product.prodname_actions %} runners. This will allow you to sign your Xcode apps for publishing to the Apple App Store, or distributing it to test groups.

### Требования

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. Дополнительные сведения см. в:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"

You should have an understanding of Xcode app building and signing. For more information, see the [Apple developer documentation](https://developer.apple.com/documentation/).

### Creating secrets for your certificate and provisioning profile

The signing process involves storing certificates and provisioning profiles, transferring them to the runner, importing them to the runner's keychain, and using them in your build.

To use your certificate and provisioning profile on a runner, we strongly recommend that you use {% data variables.product.prodname_dotcom %} secrets. For more information on creating secrets and using them in a workflow, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."

Create secrets in your repository or organization for the following items:

* Your Apple signing certificate.

  - This is your `p12` certificate file. For more information on exporting your signing certificate from Xcode, see the [Xcode documentation](https://help.apple.com/xcode/mac/current/#/dev154b28f09).

  - You should convert your certificate to Base64 when saving it as a secret. In this example, the secret is named `BUILD_CERTIFICATE_BASE64`.

  - Use the following command to convert your certificate to Base64 and copy it to your clipboard:

    ```shell
    base64 <em>build_certificate</em>.p12 | pbcopy
    ```
* The password for your Apple signing certificate.
  - In this example, the secret is named `P12_PASSWORD`.

* Your Apple provisioning profile.

  - For more information on exporting your provisioning profile from Xcode, see the [Xcode documentation](https://help.apple.com/xcode/mac/current/#/deva899b4fe5).

  - You should convert your provisioning profile to Base64 when saving it as a secret. In this example, the secret is named `BUILD_PROVISION_PROFILE_BASE64`.

  - Use the following command to convert your provisioning profile to Base64 and copy it to your clipboard:

    ```shell
    base64 <em>provisioning_profile.mobileprovision</em> | pbcopy
    ```

* A keychain password.

  - A new keychain will be created on the runner, so the password for the new keychain can be any new random string. In this example, the secret is named `KEYCHAIN_PASSWORD`.

### Add a step to your workflow

This example workflow includes a step that imports the Apple certificate and provisioning profile from the {% data variables.product.prodname_dotcom %} secrets, and installs them on the runner.

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

### Required clean-up on self-hosted runners

{% data variables.product.prodname_dotcom %}-hosted runners are isolated virtual machines that are automatically destroyed at the end of the job execution. This means that the certificates and provisioning profile used on the runner during the job will be destroyed with the runner when the job is completed.

On self-hosted runners, the `$RUNNER_TEMP` directory is cleaned up at the end of the job execution, but the keychain and provisioning profile might still exist on the runner.

If you use self-hosted runners, you should add a final step to your workflow to help ensure that these sensitive files are deleted at the end of the job. The workflow step shown below is an example of how to do this.

{% raw %}
```yaml
- name: Clean up keychain and provisioning profile
  if: ${{ always() }}
  run: |
    security delete-keychain $RUNNER_TEMP/app-signing.keychain-db
    rm ~/Library/MobileDevice/Provisioning\ Profiles/build_pp.mobileprovision
```
{% endraw %}
