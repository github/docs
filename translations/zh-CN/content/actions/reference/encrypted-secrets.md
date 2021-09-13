---
title: 加密机密
intro: '加密密码可让您将敏感信息存储在您的组织{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}、仓库或者仓库环境{% else %} 或仓库{% endif %} 中。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.environments-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于加密密码

机密是您在组织{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}、仓库或者仓库环境{% else %} 或仓库{% endif %} 中创建的加密环境变量。 您创建的机密可用于 {% data variables.product.prodname_actions %} 工作流程。 在机密到达 {% data variables.product.prodname_dotcom %} 之前，{% data variables.product.prodname_dotcom %} 使用 [libsodium 密封盒](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes)对机密加密，并且在您于工作流程中使用它们之前一直保持加密状态。

{% data reusables.github-actions.secrets-org-level-overview %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
对于存储在环境级别的机密，您可以启用所需的审查者来控制对机密的访问。 在必要的审查者授予批准之前，工作流程作业无法访问环境机密。
{% endif %}

#### 命名您的密码

{% data reusables.codespaces.secrets-naming %}. 例如，{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}在环境级别创建的机密必须在环境中具有唯一的名称，{% endif %}在仓库级别创建的机密必须在该仓库中具有唯一的名称，而在组织级别创建的机密必须在该级别具有独特的名称。

  {% data reusables.codespaces.secret-precedence %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.{% endif %}

为帮助确保 {% data variables.product.prodname_dotcom %} 在日志中编写密码，请勿将结构化数据用作密码的值。 例如，避免创建包含 JSON 或编码 Git blob 的密码。

#### 访问您的密码

为使密码用于操作，必须将密码设置为工作流程文件中的输入或环境变量。 查看操作的自述文件以了解操作预期的输入和环境变量。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)”。

如果您拥有编辑文件的权限，便可在工作流程文件中使用和读取加密密码。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 上的访问权限](/github/getting-started-with-github/access-permissions-on-github)”。

{% warning %}

**警告：**{% data variables.product.prodname_dotcom %} 自动将密码编写到日志，但您应避免有意将密码打印到日志。

{% endwarning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
当工作流程运行排队时读取组织和仓库机密，在引用环境的作业开始时读取环境机密。
{% endif %}

您还可以使用 REST API 管理密码。 更多信息请参阅“[密码](/rest/reference/actions#secrets)”。

#### 限制凭据权限

生成凭据时，建议尽可能授予最低的权限。 例如，不使用个人凭据，而使用[部署密钥](/developers/overview/managing-deploy-keys#deploy-keys)或服务帐户。 请考虑授予只读权限（如果这是所需的全部权限）并尽可能限制访问。 生成个人访问令牌 (PAT) 时，选择所需的最小范围。

### 为仓库创建加密密码

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 单击 **New repository secret（新仓库机密）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的值。
1. 单击 **Add secret（添加密码）**。

如果您的仓库 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0"or currentVersion == "github-ae@latest" %}拥有环境机密或 {% endif %}可以访问父组织中的机密，则这些机密也会列入本页。

{% note %}

**注意：**具有协作员权限的用户可以使用 REST API 来管理仓库的机密。 更多信息请参阅“[{% data variables.product.prodname_actions %} 密码 API](/rest/reference/actions#secrets)”。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}

### 为环境创建加密密码

{% data reusables.github-actions.permissions-statement-secrets-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. 单击要向其添加机密的环境。
1. 在 **Environment secrets（环境机密）**下，单击 **Add secret（添加机密）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的值。
1. 单击 **Add secret（添加密码）**。
{% endif %}

### 为组织创建加密密码

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 单击 **New organization secret（新组织机密）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的 **Value（值）**。
1. 从 **Repository access（仓库访问权限）**下拉列表，选择访问策略。
1. 单击 **Add secret（添加密码）**。

### 审查对组织级别密码的访问权限

您可以检查哪些访问策略正被应用于组织中的密码。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 密码列表包括任何已配置的权限和策略。 例如： ![密码列表](/assets/images/help/settings/actions-org-secrets-list.png)
1. 有关已为每个密码配置的权限的更多信息，请单击 **Update（更新）**。

### 在工作流程中使用加密密码

{% note %}

**注：**{% data reusables.actions.forked-secrets %}

{% endnote %}

要提供以密码作为输入或环境变量的操作，可以使用 `secrets` 上下文访问您在仓库中创建的密码。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”和“[{% data variables.product.prodname_actions %} 的工作流程语法](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”。

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

尽可能避免使用命令行在进程之间传递密码。 命令行进程可能对其他用户可见（使用 `ps` 命令）或通过[安全审计事件](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing)获取。 为帮助保护密码，请考虑使用环境变量 `STDIN` 或目标进程支持的其他机制。

如果必须在命令行中传递密码，则将它们包含在适当的引用规则中。 密码通常包含可能意外影响 shell 的特殊字符。 要转义这些特殊字符，请引用环境变量。 例如：

#### 使用 Bash 的示例

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

#### 使用 PowerShell 的示例

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

#### 使用 Cmd.exe 的示例

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

### 密码的限制

最多可以每个组织存储 1,000 条机密{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}，每个仓库存储 100 条机密，每个环境存储 100 条机密{% else %}，每个仓库存储 100 条机密{% endif %}。 一个工作流程最多可以使用 100 条组织机密和 100 条仓库机密。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %} 此外，引用环境的作业最多可以使用 100 条环境机密。{% endif %}

密码大小限于 64 KB。 要使用大于 64 KB 的密码，可以将加密的密码存储在仓库中，并将解密短语在 {% data variables.product.prodname_dotcom %} 上存储为密码。 例如，在将文件检入您在 {% data variables.product.prodname_dotcom %} 上的仓库之前，可以使用 `gpg` 在本地对您的凭据加密。 更多信息请参阅“[gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html)”。

{% warning %}

**警告**：请注意，您的密码在操作运行时不会印出。 使用此解决方法时，{% data variables.product.prodname_dotcom %} 不会编写日志中印出的密码。

{% endwarning %}

1. 从终端运行以下命令，以使用 `gpg` 和 AES256 密码算法对 `my_secret.json` 文件加密。

 ``` shell
 $ gpg --symmetric --cipher-algo AES256 my_secret.json
 ```

1. 将会提示您输入密码短语。 请记住该密码短语，因为需要在使用该密码短语作为值的 {% data variables.product.prodname_dotcom %} 上创建新密码。

1. 创建包含密码短语的新密码。 例如，使用名称 `LARGE_SECRET_PASSPHRASE` 创建新密码，并将密码的值设为上一步所选的密码短语。

1. 将加密的文件复制到仓库并提交。 在本例中，加密的文件是 `my_secret.json.gpg`。

1. 创建 shell 脚本对密码解密。 将此文件另存为 `decrypt_secret.sh`。

  ``` shell
  #!/bin/sh

  # Decrypt the file
  mkdir $HOME/secrets
  # --batch to prevent interactive command
  # --yes to assume "yes" for questions
  gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
  --output $HOME/secrets/my_secret.json my_secret.json.gpg
  ```

1. 确保 shell 脚本在检入仓库之前可执行。

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. 从工作流程使用 `step` 调用 shell 脚本并对密码解密。 要在工作流程运行的环境中创建仓库的副本，需要使用 [`actions/checkout`](https://github.com/actions/checkout) 操作。 使用与仓库根目录相关的 `run` 命令引用 shell 脚本。

{% raw %}
  ```yaml
  name: Workflows with large secrets

  on: push

  jobs:
    my-job:
      name: My Job
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: Decrypt large secret
          run: ./.github/scripts/decrypt_secret.sh
          env:
            LARGE_SECRET_PASSPHRASE: ${{ secrets.LARGE_SECRET_PASSPHRASE }}
        # This command is just an example to show your secret being printed
        # Ensure you remove any print statements of your secrets. GitHub does
        # not hide secrets that use this workaround.
        - name: Test printing your secret (Remove this step in production)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
