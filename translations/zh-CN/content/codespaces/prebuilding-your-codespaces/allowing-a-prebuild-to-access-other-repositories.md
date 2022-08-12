---
title: Allowing a prebuild to access other repositories
shortTitle: Allow external repo access
intro: 'You can permit your prebuild to access other {% data variables.product.prodname_dotcom %} repositories so that it can be built successfully.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

默认情况下，预构建配置的 {% data variables.product.prodname_actions %} 工作流程只能访问其自己的存储库内容。 Your project may use additional resources, located elsewhere, to build the development environment.

## Allowing a prebuild read access external resources

You can configure read access to other {% data variables.product.prodname_dotcom %} repositories, with the same repository owner, by specifying permissions in the `devcontainer.json` file used by your prebuild configuration. 更多信息请参阅“[管理代码空间中对其他存储库的访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

{% note %}

**Note**: You can only authorize read permissions in this way, and the owner of the target repository must be the same as the owner of the repository for which you're creating a prebuild. For example, if you're creating a prebuild configuration for the `octo-org/octocat` repository, then you'll be able to grant read permissions for other `octo-org/*` repositories if this is specified in the `devcontainer.json` file, and provided you have the permissions yourself.

{% endnote %}

When you create or edit a prebuild configuration for a `devcontainer.json` file that sets up read access to other repositories with the same repository owner, you'll be prompted to grant these permissions when you click **Create** or **Update**. 更多信息请参阅“[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

## Allowing a prebuild write access external resources

If your project requires write access to resources, or if the external resources reside in a repository with a different owner to the repository for which you are creating a prebuild configuration, you can use a personal access token (PAT) to grant this access.

You will need to create a new personal account and then use this account to create a PAT with the appropriate scopes.

1. 在 {% data variables.product.prodname_dotcom %} 上创建新的个人帐户。

   {% warning %}

   **警告**：虽然您可以使用现有的个人帐户生成 PAT，但我们强烈建议您创建一个只能访问方案所需目标存储库的新帐户。 这是因为访问令牌的 `repository` 权限授予访问对帐户有权访问的所有存储库。 更多信息请参阅“[注册新的 GitHub 帐户](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)”和“[ {% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)”。

   {% endwarning %}
1. 向新帐户授予对所需存储库的读取访问权限。 更多信息请参阅“[管理个人对组织仓库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)”。
1. 登录到新帐户时，创建 `repo` 范围的 PAT。 （可选）如果预构建需要从 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 下载包，还要选择 `read:packages` 作用域。 更多信息请参阅“[创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

   ![为 PAT 选择的 'repo' 和 'packages' 作用域](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   如果预构建将使用 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 中的软件包，则需要向新帐户授予对软件包的访问权限，或者将软件包配置为继承要预构建的存储库的访问权限。 更多信息请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。
{% ifversion ghec %}1. 授权令牌与 SAML 单点登录 (SSO) 一起使用，以便它可以访问启用了 SSO 的组织所拥有的存储库。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。

   ![用于为 PAT 配置 SSO 的按钮](/assets/images/help/codespaces/configure-SSO-for-PAT.png)

{% endif %}
1. 复制令牌字符串。 您将此密钥分配给 {% data variables.product.prodname_codespaces %} 存储库机密。
1. 重新登录到对存储库具有管理员访问权限的帐户。
1. 在要为其创建 {% data variables.product.prodname_codespaces %} 预构建的存储库中，创建一个名为 `CODESPACES_PREBUILD_TOKEN` 的新 {% data variables.product.prodname_codespaces %} 存储库机密，为其提供您创建和复制的令牌值。 更多信息请参阅“[管理用于 {% data variables.product.prodname_github_codespaces %} 的仓库和组织的加密密钥](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)”。

The PAT will be used for all subsequent prebuilds created for your repository. 与其他 {% data variables.product.prodname_codespaces %} 存储库机密不同， `CODESPACES_PREBUILD_TOKEN` 机密仅用于预构建，不可用于从存储库创建的代码空间。

## 延伸阅读

- “[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)”
- “[预构建疑难解答](/codespaces/troubleshooting/troubleshooting-prebuilds)”
