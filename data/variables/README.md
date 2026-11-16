# Variables

Variables are short strings of reusable text.

The YAML files in this directory each contain multiple variables. Define each variable as a string value with a top-level key. You can organize the files in subdirectories.

The *path*, *filename*, and *keys* within each YAML file determine what its path will be in the data object.

For example, given a file `data/variables/foo/bar.yml`:

```yaml
# multiple short strings in one file
meaning_of_life: '42'
affirmation: 'Yes!'
```

Its values would be accessible as:

```
{% data variables.foo.bar.meaning_of_life %}

{% data variables.foo.bar.affirmation %}
```
