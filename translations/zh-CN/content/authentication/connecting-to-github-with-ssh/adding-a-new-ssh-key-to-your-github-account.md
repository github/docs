---
title: 新增 SSH 密钥到 GitHub 帐户
intro: '要配置 {% data variables.product.product_name %} 帐户使用新的（或现有）SSH 密钥，您还需要将其添加到 {% data variables.product.product_name %} 帐户。'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - SSH
shortTitle: 添加新的 SSH 密钥
---

在新增 SSH 密钥到 {% data variables.product.product_name %} 帐户之前，您应该已：
* [检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)
* [生成新 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

在新增 SSH 密钥到 {% data variables.product.product_name %} 帐户后，您可以重新配置任何本地仓库使用 SSH。 更多信息请参阅“[将远程 URL 从 HTTPS 转换为 SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)”。

{% data reusables.ssh.key-type-support %}

{% mac %}

{% include tool-switcher %}
{% webui %}

1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

  ```shell
  $ pbcopy &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```

  {% tip %}

  **提示：**如果 `pbcopy` 不可用，可找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。 ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果您使用的是个人 Mac，此密钥名称可能是 "Personal MacBook Air"。
6. 将密钥粘贴到 "Key"（密钥）字段。 ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
7. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user_settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% include tool-switcher %}

{% webui %}

1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

  ```shell
  $ clip &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```

  {% tip %}

  **提示：**如果 `clip` 不可用，可找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。 ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果您使用的是个人 Mac，此密钥名称可能是 "Personal MacBook Air"。
6. 将密钥粘贴到 "Key"（密钥）字段。 ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
7. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
8. 如有提示，请确认您的 {% data variables.product.product_name %} 密码。 ![Sudo 模式对话框](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endwindows %}

{% linux %}

{% include tool-switcher %}
{% webui %}

1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

  ```shell
  $ cat ~/.ssh/id_ed25519.pub
  # Then select and copy the contents of the id_ed25519.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Tip:** Alternatively, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。 ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果您使用的是个人 Mac，此密钥名称可能是 "Personal MacBook Air"。
6. 将密钥粘贴到 "Key"（密钥）字段。 ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
7. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
8. 如有提示，请确认您的 {% data variables.product.product_name %} 密码。 ![Sudo 模式对话框](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To add an SSH key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key.

```shell
gh ssh-key add <em>key-file</em>
```

要包括新密钥的标题，请使用 `-t` 或 `--title` 标记。

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

{% endcli %}

{% ifversion fpt %}
## 延伸阅读

- "[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
