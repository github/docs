---
title: Delivering webhooks to private systems
intro: 'In order to limit exposure of your private system to the internet, you can use a reverse proxy to forward webhooks from {% data variables.product.company_short %} to your private system.'
shortTitle: Deliver to private systems
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Webhooks
---
## About integrating with private systems via reverse proxy

You may want to deliver {% data variables.product.company_short %} webhooks to private systems that are not directly accessible from the internet, such as CI systems, work management tools, and custom apps. You can use a reverse proxy to receive webhook payloads from {% data variables.product.company_short %} and deliver them to the your private system.

A reverse proxy is a web server that sits between a client and an application. The reverse proxy receives requests from the client and forwards them to the application. This ensures no direct communication occurs between clients on the internet and the underlying application. A variety of systems can serve a reverse proxy, including:

- web servers, like [nginx](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- API gateways
- commercial ingress management tools, like [ngrok](https://ngrok.com/partners/github)

How you configure your reverse proxy varies based on the system you're using.

## Securing traffic to your reverse proxy

When deploying a reverse proxy, you should follow all practices recommended by your reverse proxy provider to secure the underlying proxy server. Additionally, you should take the following steps to verify that only requests from {% data variables.product.company_short %} are forwarded to your application.

### Limiting inbound traffic to {% data variables.product.company_short %} webhooks

You should configure your reverse proxy to only allow HTTPS POST requests from the subset of {% data variables.product.prodname_dotcom %} IP ranges that are used to deliver webhooks. This ensures that your reverse proxy does not process or forward other requests.

The [`/meta` endpoint](/rest/meta#get-github-meta-information) returns a JSON object listing GitHub's IP ranges. IP ranges used to deliver webhooks are listed in the `hooks` element.

### Validating webhook payloads

If your webhook is configured with a secret token, {% data variables.product.prodname_dotcom %} will include a cryptographic hash of each webhook payload. You should use this hash to validate the payload received from {% data variables.product.prodname_dotcom %} before any action is taken by your private system. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/securing-your-webhooks)."

You can implement payload validation either on the reverse proxy or on your private system.
