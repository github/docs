---
title: 配置私有仓库的密码扫描
intro: '您可以配置 {{ site.data.variables.product.product_name }} 如何扫描您私有仓库中的密码。'
permissions: '对私有仓库具有管理员权限的人员可为 {{ site.data.variables.product.prodname_secret_scanning }} 启用仓库。'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.secret-scanning.beta }}

### 对私有仓库启用 {{ site.data.variables.product.prodname_secret_scanning }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.navigate-to-security-and-analysis }}
4. 在“Secret scanning（密码扫描）”的右侧，单击 **Enable（启用）**。 ![为仓库启用密码扫描](/assets/images/help/repository/enable-secret-scanning.png)

### 从私有仓库的 {{ site.data.variables.product.prodname_secret_scanning }} 中排除警报

您可以使用 *secret_scanning.yml* 文件从 {{ site.data.variables.product.prodname_secret_scanning }} 排除目录。 例如，可以排除包含测试或随机生成内容的目录。

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.files.add-file }}
3. 在文件名字段中，键入 *.github/secret_scanning.yml*。
4. 在 **Edit new file（编辑新文件）**下，键入 `paths-ignore:`，后接您想要从 {{ site.data.variables.product.prodname_secret_scanning }} 排除的路径。
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    您可以使用特殊字符（如 `*`）来过滤路径。 有关过滤模式的更多信息，请参阅“[GitHub 操作的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

    {% note %}

    **注意：**
    - 如果 `paths-ignore` 中的条目超过 1,000 个，{{ site.data.variables.product.prodname_secret_scanning }} 只会从扫描中排除前 1,000 个目录。
    - 如果 *secret_scanning.yml* 大于 1 MB，{{ site.data.variables.product.prodname_secret_scanning }} 将忽略整个文件。

    {% endnote %}

您也可以忽略来自 {{ site.data.variables.product.prodname_secret_scanning }} 的个别警报。 更多信息请参阅“[管理来自 {{ site.data.variables.product.prodname_secret_scanning }} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)”。

### 延伸阅读

- “[管理组织的 {{ site.data.variables.product.prodname_secret_scanning }}](/github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization)”
