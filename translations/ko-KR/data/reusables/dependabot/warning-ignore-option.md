{% warning %}

**Warning**: Before you add an `ignore` option to the *dependabot.yml* configuration file, check whether the repository already has any ignore preferences (created using the `@dependabot ignore` commands). When you add an `ignore` option to the *dependabot.yml* configuration file, this overwrites any ignore preferences stored centrally for that package manager, branch, and directory.

This affects both security and version updates.

{% endwarning %}
