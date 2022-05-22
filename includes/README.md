# Includes

The files in this directory are "includes", snippets of HTML that can be 
reused in multiple layouts or pages. In Ruby on Rails parlance, these are 
called "partials".

## Using Includes

This example injects the contents of `includes/graphql-enum.html` into the 
page:

```
{% include graphql-enum %}
```

## Writing Includes

Includes must have a `.html` extension.