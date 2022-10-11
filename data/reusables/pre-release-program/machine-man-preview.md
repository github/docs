{% ifversion ghes < 2.22 %}
{% note %}

**Note:** To access the API with your GitHub App, you must provide a custom [media type](/rest/overview/media-types) in the `Accept` Header for your requests.

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
