# Includes

The files in this directory are "includes", snippets of HTML that can be 
reused in multiple layouts or pages. In Ruby on Rails parlance, these are 
called "partials".

## Using Includes

This example injects the contents of `includes/header.html` into the 
page:

```
{% include header %}
```

## Writing Includes

Includes must have a `.html` extension.