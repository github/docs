# Reusables

Reusables are long strings of reusable text.

Reusables are longer strings like paragraphs or procedural lists that can be referenced in multiple content files. Using Markdown (instead of YAML) makes it possible for our localization pipeline to split the strings into smaller translatable segments, leading to fewer translation errors and less churn when the source English content changes.

Each reusable lives in its own Markdown file.

The *path* and *filename* of each Markdown file determines what its path will be in the data object.

For example, a file named `/data/reusables/foo/bar.md` will be accessible as `{% data reusables.foo.bar %}` in pages.

Reusable files are divided generally into directories by task. For example, if you're creating a reusable string for articles about GitHub notifications, you'd add it in the directory `data/reusables/notifications/` in a file named `data/reusables/notifications/your-reusable-name.md`. The content reference you'd add to the source would look like `{% data reusables.notifications.your-reusable-name %}`.
