---
title: 配置仓库的密码扫描
intro: '您可以配置 {% data variables.product.prodname_dotcom %} 如何扫描您仓库中的密码。'
permissions: '拥有仓库管理员权限的人可启用仓库的 {% data variables.product.prodname_secret_scanning %}。'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - 仓库
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注：**{% data variables.product.prodname_secret_scanning_caps %} 默认在公共仓库上启用，无法关闭。 您只能配置私有仓库的 {% data variables.product.prodname_secret_scanning %}。

{% endnote %}
{% endif %}

### 为{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库启用 {% data variables.product.prodname_secret_scanning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
4. 您可能需要启用 {% data variables.product.prodname_GH_advanced_security %} 才能对“{% data variables.product.prodname_secret_scanning_caps %}”激活按钮。 在“{% data variables.product.prodname_GH_advanced_security %}”右边单击 **Enable（启用）**。 ![为仓库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/repository/enable-ghas-dotcom.png)
5. 单击**为此仓库启用 {% data variables.product.prodname_GH_advanced_security %}** 以确认操作。 ![确认为仓库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/repository/enable-ghas-confirmation-dotcom.png)
6. 启用 {% data variables.product.prodname_GH_advanced_security %} 时，可能会自动为仓库启用 {% data variables.product.prodname_secret_scanning %}（这是由组织配置控制的）。 如果 "{% data variables.product.prodname_secret_scanning_caps %}" 显示 **Enable（启用）**按钮，则您仍需通过单击 **Enable（启用）**来启用 {% data variables.product.prodname_secret_scanning %}。 如果您看到 **Disable（禁用）**按钮，则表明 {% data variables.product.prodname_secret_scanning %} 已启用。 ![为仓库启用 {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
   {% elsif currentVersion == "enterprise-server@3.0" %}
7. 在“{% data variables.product.prodname_secret_scanning_caps %}”右边单击 **Enable（启用）**。 ![为仓库启用 {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/enable-secret-scanning-ghe.png)
   {% endif %}
{% if currentVersion == "github-ae@latest" %}
1. 在可以启用 {% data variables.product.prodname_secret_scanning %} 之前，您需要先启用 {% data variables.product.prodname_GH_advanced_security %}。 在“{% data variables.product.prodname_GH_advanced_security %}”右边单击 **Enable（启用）**。 ![为仓库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. 单击**为此仓库启用 {% data variables.product.prodname_GH_advanced_security %}** 以确认操作。 ![确认为仓库启用 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. 在“{% data variables.product.prodname_secret_scanning_caps %}”右边单击 **Enable（启用）**。 ![为仓库启用 {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

### 排除{% if currentVersion == "free-pro-team@latest" %}私有{% endif %}仓库中的 {% data variables.product.prodname_secret_scanning %} 警报

您可以使用 *secret_scanning.yml* 文件从 {% data variables.product.prodname_secret_scanning %} 排除目录。 例如，可以排除包含测试或随机生成内容的目录。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. 在文件名字段中，键入 *.github/secret_scanning.yml*。
4. 在 **Edit new file（编辑新文件）**下，键入 `paths-ignore:`，后接您想要从 {% data variables.product.prodname_secret_scanning %} 排除的路径。
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    您可以使用特殊字符（如 `*`）来过滤路径。 有关过滤模式的更多信息，请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

    {% note %}

    **注意：**
    - 如果 `paths-ignore` 中的条目超过 1,000 个，{% data variables.product.prodname_secret_scanning %} 只会从扫描中排除前 1,000 个目录。
    - 如果 *secret_scanning.yml* 大于 1 MB，{% data variables.product.prodname_secret_scanning %} 将忽略整个文件。

    {% endnote %}

您也可以忽略来自 {% data variables.product.prodname_secret_scanning %} 的个别警报。 更多信息请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)”。

### 延伸阅读

- “[管理组织的安全性和分析设置](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)”
