{% note %}

**Note:** Project card details are now shown in REST API responses for project-related issue and timeline events. This feature is now available for developers to preview. For details, see the [blog post](https://developer.github.com/changes/2018-09-05-project-card-events).

To receive the `project_card` attribute, project boards must be [enabled](/articles/disabling-project-boards-in-a-repository) for a repository, and you must provide a custom [media type](/rest/overview/media-types) in the `Accept` header:

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
