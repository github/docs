---
title: 审查 SSH 密钥
intro: '为确保凭据安全，您应定期审核 SSH 密钥、部署密钥并审查访问 {% data variables.product.product_name %} 帐户的授权应用程序。'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以删除未经授权（或可能已泄密）的 SSH 密钥，以确保攻击者无法再访问您的仓库。 您还可以批准有效的现有 SSH 密钥。

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. 在 SSH Settings（SSH 设置）页面中，记下与您的帐户关联的 SSH 密钥。 对于您无法识别或已过期的密钥，请单击 **Delete（删除）**。 如果有您要保留的有效 SSH 密钥，请单击 **Approve（批准）**。 ![SSH 密钥列表](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注：**如果您由于 Git 操作失败而审核 SSH 密钥，则导致 [SSH 密钥审核错误](/articles/error-we-re-doing-an-ssh-key-audit)的未验证密钥将在 SSH 密钥列表中突出显示。 ![未验证的 SSH 密钥](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. 打开终端。

5. {% data reusables.command_line.start_ssh_agent %}

6. 找到并记录公钥指纹。 如果使用的是 OpenSSH 6.7 或更早版本：
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  如果使用的是 OpenSSH 6.8 或更新版本：
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %} 上的 SSH 密钥*应*匹配您计算机上的相同密钥。

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. 在 SSH Settings（SSH 设置）页面中，记下与您的帐户关联的 SSH 密钥。 对于您无法识别或已过期的密钥，请单击 **Delete（删除）**。 如果有您要保留的有效 SSH 密钥，请单击 **Approve（批准）**。 ![SSH 密钥列表](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注：**如果您由于 Git 操作失败而审核 SSH 密钥，则导致 [SSH 密钥审核错误](/articles/error-we-re-doing-an-ssh-key-audit)的未验证密钥将在 SSH 密钥列表中突出显示。![未验证的 SSH 密钥](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. 打开 Git Bash。 如果您使用 {% data variables.product.prodname_desktop %} 中随附的 Git Shell，请打开 Git Shell 并跳至步骤 6。

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. 找到并记录公钥指纹。 如果使用的是 OpenSSH 6.7 或更早版本：
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  如果使用的是 OpenSSH 6.8 或更新版本：
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %} 上的 SSH 密钥*应*匹配您计算机上的相同密钥。

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. 在 SSH Settings（SSH 设置）页面中，记下与您的帐户关联的 SSH 密钥。 对于您无法识别或已过期的密钥，请单击 **Delete（删除）**。 如果有您要保留的有效 SSH 密钥，请单击 **Approve（批准）**。 ![SSH 密钥列表](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **注：**如果您由于 Git 操作失败而审核 SSH 密钥，则导致 [SSH 密钥审核错误](/articles/error-we-re-doing-an-ssh-key-audit)的未验证密钥将在 SSH 密钥列表中突出显示。 ![未验证的 SSH 密钥](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. 打开终端。

5. {% data reusables.command_line.start_ssh_agent %}

6. 找到并记录公钥指纹。 如果使用的是 OpenSSH 6.7 或更早版本：
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  如果使用的是 OpenSSH 6.8 或更新版本：
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. {% data variables.product.product_name %} 上的 SSH 密钥*应*匹配您计算机上的相同密钥。

{% endlinux %}

{% warning %}

**警告**：如果在 {% data variables.product.product_name %} 上看到您不熟悉的 SSH 密钥，请立即删除并联系 {% data variables.contact.contact_support %}寻求进一步的帮助。 无法识别的公钥可能表示安全问题。

{% endwarning %}
