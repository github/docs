仓库作用域的包从拥有该包的仓库继承权限和可见性。 下面的注册表使用此类权限：
- Docker 注册表 (`docker.pkg.github.com`)
- npm 注册表
- RubyGems 注册表
- Apache Maven 注册表
- NuGet 注册表

{% if currentVersion == "free-pro-team@latest" %}
容器注册表 (`ghcr.io`) 提供精细权限和可见性设置，可针对个人用户或组织帐户拥有的每个包进行自定义。
{% endif %}

更多信息请参阅“[关于 GitHub Packages 的权限](/packages/learn-github-packages/about-permissions-for-github-packages)”{% if currentVersion == "free-pro-team@latest" %} 或“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。{% endif %}
