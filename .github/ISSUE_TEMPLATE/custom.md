---
name: Custom issue template
about: Describe this issue template's purpose here.
title: issue template
labels: enhancement, help wanted
assignees: ''

---

<!DOCTYPE html>
<html>
  <head>
    <title>{% if page.title %}{{ page.title }} - {% endif %}{{ config.site_name }}</title>
  </head>
  <body>
    {{ page.content }}
  </body>
</html>
