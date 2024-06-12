If you are sure that the payload is from {% data variables.product.company_short %} but the signature verification fails:

- Make sure that you have configured a secret for your webhook. The `X-Hub-Signature-256` header will not be present if you have not configured a secret for your webhook. For more information about configuring a secret for your webhook, see "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks)."
- Make sure you are using the correct header. {% data variables.product.company_short %} recommends that you use the `X-Hub-Signature-256` header, which uses the HMAC-SHA256 algorithm. The `X-Hub-Signature` header uses the HMAC-SHA1 algorithm and is only included for legacy purposes.
- Make sure that you are using the correct algorithm. If you are using the `X-Hub-Signature-256` header, you should use the HMAC-SHA256 algorithm.
- Make sure you are using the correct webhook secret. If you don't know the value of your webhook secret, you can update your webhook's secret. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks)."
- Make sure that the payload and headers are not modified before verification. For example, if you use a proxy or load balancer, make sure that the proxy or load balancer does not modify the payload or headers.
- If your language and server implementation specifies a character encoding, ensure that you handle the payload as UTF-8. Webhook payloads can contain unicode characters.
