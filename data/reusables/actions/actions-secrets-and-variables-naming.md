* Can only contain alphanumeric characters (`[a-z]`, `[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed.
* Must not start with the `GITHUB_` prefix.
* Must not start with a number.
* Are case insensitive when referenced. {% data variables.product.github %} stores secret names as uppercase regardless of how they are entered.
* Must be unique to the repository, organization, or enterprise where they are created.
