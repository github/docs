{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Note:** GitHub Enterprise release 2.17 and higher no longer allows admins to install new GitHub Services, and existing services will stop working in GitHub Enterprise release 2.20 and higher. You can use the [Replacing GitHub Services guide](/v3/guides/replacing-github-services) to help you update your services to webhooks.

{% endnote %}
{% endif %}
