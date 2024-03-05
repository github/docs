1. Optionally, select the **Content type** drop-down menu, and click a data format to receive the webhook payload in.
   - **application/json** will deliver the JSON payload directly as the body of the `POST` request.
   - **application/x-www-form-urlencoded** will send the JSON payload as a form parameter called `payload`.
1. Optionally, under "Secret", type a string to use as a `secret` key. You should choose a random string of text with high entropy. You can use the webhook secret to limit incoming requests to only those originating from {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/securing-your-webhooks)."
