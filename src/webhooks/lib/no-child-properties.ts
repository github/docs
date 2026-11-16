// Webhook generation drops child properties for these top-level payload params,
// and the parameter table renders them without an expander.
// Most are common payload properties with one shared section on the webhooks page:
// https://docs.github.com/en/webhooks/webhook-events-and-payloads
// `comment` has no shared section, so the webhook docs do not list its child properties.
export const NO_CHILD_WEBHOOK_PROPERTIES = [
  'action',
  'comment',
  'enterprise',
  'installation',
  'organization',
  'repository',
  'sender',
]
