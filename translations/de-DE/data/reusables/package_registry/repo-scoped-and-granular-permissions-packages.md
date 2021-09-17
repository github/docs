Repository-scoped packages inherit their permissions and visibility from the repository that owns the package. The registries below use this type of permissions:
- Docker registry (`docker.pkg.github.com`)
- npm registry
- RubyGems registry
- Apache Maven registry
- NuGet registry

{% if currentVersion == "free-pro-team@latest" %}
The Container registry (`ghcr.io`) offers granular permissions and visibility settings that can be customized for each package owned by a personal user or organization account.
{% endif %}

For more information, see "[About permissions for GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages)"{% if currentVersion == "free-pro-team@latest" %} or "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."{% endif %}.
