---
title: Tutorial title
intro: 'Article intro. See tips for a great intro below'
product: '{{ optional product callout }}'
productVersions:
contributor:
   name:
   URL:
---

<!-- Remember to add the tutorial title, intro, product version, contributor name, and contributor URL above -->
<!-- Great intros clarify who the tutorial is intended for, state what the user will accomplish, state the technology(ies) that will be used.-->

### Introduction

<!-- The tutorial introduction should include the following in a short paragraph:

- Clarify audience
- State prerequisites and prior knowledge needed
- State what the user will accomplish or build and the user problem it solves
- Link to an example of the project the user will complete -->

### Step 1: Action the user will take

<!-- In one sentence, describe what the user will do in this step -->
<!-- Steps should break down the tasks the user will complete in sequential order -->
<!-- Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case. -->

#### Task chunk

<!-- A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task. -->
<!-- An example might be creating a PAT for the action to use and then storing it in secrets -->
<!-- For UI based tasks, include the button or options the users should click -->
<!-- If the task adds code, include the code in context (don't just show `needs: setup` show the entire `setup` and `dependent` jobs) -->

#### Another task chunk

<!-- remove all of these comments when you're done -->

### Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete

<!-- remember to show code snippets in context -->

```yaml
on:
  schedule:
    - cron:  "40 19 * * *"
```

### Further reading

<!-- include a bulleted list of tutorials or articles the user can reference to extend the concepts taught in this tutorial -->

- "[Article title](article-URL)"
