This table gives examples of how usernames are normalized in {% data variables.product.prodname_ghe_server %}:

| Username | Normalized username | Result
|----------|---------------------|-------
| Ms.Bubbles | `ms-bubbles` | This username is created successfully.
| !Ms.Bubbles | `-ms-bubbles` | This username is not created, because it starts with a dash.
| Ms.Bubbles! | `ms-bubbles-` | This username is not created, because it ends with a dash.
| Ms!!Bubbles | `ms--bubbles` | This username is not created, because it contains two consecutive dashes.
| Ms!Bubbles | `ms-bubbles` | This username is not created. Although the normalized username is valid, it already exists.
| Ms.Bubbles@example.com | `ms-bubbles` | This username is not created. Although the normalized username is valid, it already exists.
