{%- if currentVersion == "free-pro-team@latest" %}Issue、Pull Request、リリース、セキュリティアラート、ディスカッション{% endif %}
{%- if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}Issue、Pull Request、リリース、ディスカッション{% endif %}
