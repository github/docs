---
title: 新增 SSH 密钥到 GitHub 帐户
intro: '要在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上配置帐户以使用新的（或现有的）SSH 密钥，还需要将密钥添加到帐户。'
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

## About addition of SSH keys to your account

{% data reusables.ssh.about-ssh %} 更多信息请参阅“[关于 SSH](/authentication/connecting-to-github-with-ssh/about-ssh)”。

{% ifversion ssh-commit-verification %}You can also use SSH to sign commits and tags. For more information about commit signing, see "[About commit signature verification](/articles/about-commit-signature-verification)."{% endif %}

After you generate an SSH key pair, you must add the public key to {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} to enable SSH access for your account.

## 基本要求

Before adding a new SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, complete the following steps.

1. Check for existing SSH keys. 更多信息请参阅“[检查现有 SSH 密钥](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)”。
1. Generate a new SSH key and add it to your machine's SSH agent. 更多信息请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

## Adding a new SSH key to your account

After adding a new SSH authentication key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you can reconfigure any local repositories to use SSH. 更多信息请参阅“[将远程 URL 从 HTTPS 转换为 SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)”。

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. 单击 **New SSH key（新 SSH 密钥）**或 **Add SSH key（添加 SSH 密钥）**。
{% ifversion ssh-commit-verification %}
  ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png)
{% else %}
  ![SSH 密钥按钮](/assets/images/help/settings/ssh-add-ssh-key.png)
{% endif %}
5. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 For example, if you're using a personal laptop, you might call this key "Personal laptop".
{% ifversion ssh-commit-verification %}
6. Select the type of key, either authentication or signing. For more information about commit signing, see "[About commit signature verification](/articles/about-commit-signature-verification)."
{% endif %}
7. 将密钥粘贴到 "Key"（密钥）字段。
{% ifversion ssh-commit-verification %}
  ![密钥字段](/assets/images/help/settings/ssh-key-paste-with-type.png)
{% else %}
  ![密钥字段](/assets/images/help/settings/ssh-key-paste.png)
{% endif %}
8. 单击 **Add SSH key（添加 SSH 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

在使用 {% data variables.product.prodname_cli %} 将 SSH 密钥添加到帐户之前，必须向 {% data variables.product.prodname_cli %} 进行身份验证。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。

{% ifversion ssh-commit-verification %}At present, you can only use {% data variables.product.prodname_cli %} to add SSH authentication keys, you cannot add SSH signing keys.{% endif %}

To add an SSH authentication key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key.

```shell
gh ssh-key add <em>key-file</em>
```

要包括新密钥的标题，请使用 `-t` 或 `--title` 标记。

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

如果按照“[生成新的 SSH 密钥](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”中的说明生成了 SSH 密钥，则可以使用此命令将密钥添加到您的帐户。

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## 延伸阅读

- "[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
