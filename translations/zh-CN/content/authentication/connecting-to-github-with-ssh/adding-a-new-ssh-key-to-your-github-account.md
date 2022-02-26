---
title: 新增 SSH 密钥到 GitHub 帐户
intro: 'To configure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to use your new (or existing) SSH key, you''ll also need to add the key to your account.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 添加新的 SSH 密钥
---

Before adding a new SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you should have:
* [检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)
* [生成新 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

After adding a new SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you can reconfigure any local repositories to use SSH. 更多信息请参阅“[将远程 URL 从 HTTPS 转换为 SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)”。

{% data reusables.ssh.key-type-support %}

{% mac %}

{% webui %}

1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **提示：**如果 `pbcopy` 不可用，可找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。 ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果您使用的是个人 Mac，此密钥名称可能是 "Personal MacBook Air"。
6. 将密钥粘贴到 "Key"（密钥）字段。 ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
7. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% webui %}

1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **提示：**如果 `clip` 不可用，可找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。 ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果您使用的是个人 Mac，此密钥名称可能是 "Personal MacBook Air"。
6. 将密钥粘贴到 "Key"（密钥）字段。 ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
7. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
8. 如有提示，请确认您的 {% data variables.product.product_name %} 密码。 ![Sudo 模式对话框](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endwindows %}

{% linux %}

{% webui %}

1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **提示：**或者，您也可以找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。 ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果您使用的是个人 Mac，此密钥名称可能是 "Personal MacBook Air"。
6. 将密钥粘贴到 "Key"（密钥）字段。 ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
7. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
8. 如有提示，请确认您的 {% data variables.product.product_name %} 密码。 ![Sudo 模式对话框](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Before you can use the {% data variables.product.prodname_cli %} to add an SSH key to your account, you must authenticate to the {% data variables.product.prodname_cli %}. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login) in the {% data variables.product.prodname_cli %} documentation.

要将 SSH 密钥添加到您的 GitHub 帐户，请使用 `ssh-key add` 子命令，指定您公钥。

```shell
gh ssh-key add <em>key-file</em>
```

要包括新密钥的标题，请使用 `-t` 或 `--title` 标记。

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

If you generated your SSH key by following the instructions in "[Generating a new SSH key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", you can add the key to your account with this command.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## 延伸阅读

- "[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
