---
title: 允许代码空间访问私有映像注册表
intro: '您可以使用密钥允许 {% data variables.product.prodname_codespaces %} 访问私有映像注册表'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

注册表是存储和管理私有容器映像（如 Azure 容器注册表或 DockerHub）的安全空间。 您可以在 GitHub 中创建密钥以存储私有注册表的访问权限信息，并使用它们授权代码空间访问存储在注册表中的映像。

启动代码空间时，{% data variables.product.prodname_codespaces %} 将检查三个密钥，它们定义了容器注册表的服务器名称、用户名和个人访问令牌 (PAT)。 如果找到这些密钥，{% data variables.product.prodname_codespaces %} 将在代码空间中提供注册表。

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

您可以在用户、仓库或组织级别存储密钥，从而在不同的代码空间之间安全地共享它们。 当您为私有映像注册表创建一组密钥时，您需要用一致的标识符替换名称中的 “<*>”。 更多信息请参阅“[管理代码空间的加密密码](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)”和“[管理代码空间的仓库和组织加密密码](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)“。

例如，如果您在 Azure 中拥有私有映像注册表，则可以创建以下密钥：

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```
![映像注册表密钥示例](/assets/images/help/settings/codespaces-image-registry-secret-example.png)
