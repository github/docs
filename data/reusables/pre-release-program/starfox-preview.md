{% note %}

**Note:** Project card details are now shown in REST API responses for project-related issue and timeline events. This feature is now available for developers to preview. For details, see the [blog post](https://developer.github.com/changes/2018-09-05-project-card-events).

To receive the `project_card` attribute, {% data variables.projects.projects_v1_boards %} must be [enabled](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/disabling-project-boards-in-a-repository) for a repository, and you must provide a custom [media type](/rest/overview/media-types) in the `Accept` header:

```text
application/vnd.github.starfox-preview+json
```

{% endnote %}
