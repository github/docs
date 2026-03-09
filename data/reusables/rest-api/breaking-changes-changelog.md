<!-- markdownlint-disable liquid-quoted-conditional-arg search-replace GHD046 -->
{% ifversion fpt %}
{% if query.apiVersion == nil or "2022-11-28" <= query.apiVersion %}
## Version 2022-11-28

Version `2022-11-28` is the first version of the GitHub Free, Pro & Team REST API after date-based versioning was introduced. This version does not include any breaking changes.

{% endif %}
{% endif %}

{% ifversion ghec %}
{% if query.apiVersion == nil or "2022-11-28" <= query.apiVersion %}
## Version 2022-11-28

Version `2022-11-28` is the first version of the GitHub Enterprise Cloud REST API after date-based versioning was introduced. This version does not include any breaking changes.

{% endif %}
{% endif %}
