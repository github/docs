{% warning %}

**Deprecation note**: {% data variables.product.prodname_dotcom %} is deprecating repository security advisories in private repositories{% ifversion ghec %} that do not have {% data variables.product.prodname_GH_advanced_security %} (GHAS) enabled{% endif %}. As of May 15, 2024, you will no longer be able to create security advisories in private repositories{% ifversion ghec %} that do not have GHAS enabled{% endif %}.

This deprecation does not affect published security advisories on public repositories. {% ifversion ghec %}It also does not affect security advisories on private repositories that have GHAS enabled.{% endif %}

Formerly published advisories in private repositories {% ifversion ghec %}that do not have GHAS enabled{% endif %} will disappear. If you need to save previously published advisories, you can download them using the "[List repository security advisories](/rest/security-advisories/repository-advisories?apiVersion=2022-11-28#list-repository-security-advisories)" endpoint.

{% endwarning %}
