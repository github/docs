---
title: Schema previews
intro: 'You can preview upcoming features and changes to the {% data variables.product.prodname_dotcom %} GraphQL schema before they are added to the {% data variables.product.prodname_dotcom %} GraphQL API.'
redirect_from:
  - /v4/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### About schema previews

During the preview period, we may change some features based on developer feedback. If we do make changes, we'll announce them on the [developer blog](https://developer.github.com/changes/) without advance notice.

To access a schema preview, you'll need to provide a custom [media type](/rest/overview/media-types) in the `Accept` header for your requests. Feature documentation for each preview specifies which custom media type to provide.

{% note %}

**Note:** The GraphQL schema members under preview cannot be accessed via the Explorer at this time.

{% endnote %}

{% for preview in graphql.previewsForCurrentVersion %}
### {{ preview.title }}

{{ preview.description }}

To toggle this preview and access the following schema members, you must provide a custom media type in the `Accept` header:

```
{{ preview.accept_header }}
```

Previewed schema members:

{% for schemaMemberPath in preview.toggled_on %}
- `{{ schemaMemberPath }}`
{% endfor %}

{% if preview.announcement %}
**Announced:** [{{ preview.announcement.date }}]({{ preview.announcement.url }})
{% endif %}

{% if preview.updates %}
{% for update in preview.updates %}
**Updated:** [{{ update.date }}]({{ update.url }})
{% endfor %}
{% endif %}

{% endfor %}
