1. 将 SSH 公钥复制到剪贴板。

  如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **提示：**如果 `pbcopy` 不可用，可找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}
{% endmac %}
{% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **提示：**如果 `clip` 不可用，可找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}
{% endwindows %}
{% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **提示：**或者，您也可以找到隐藏的 `.ssh` 文件夹，在常用的文本编辑器中打开该文件，并将其复制到剪贴板。

  {% endtip %}
{% endlinux %}
