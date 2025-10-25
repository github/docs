// This schema enforces the structure for CTA (Call-to-Action) URL parameters
// Used to validate CTA tracking parameters in documentation links

export default {
  type: 'object',
  additionalProperties: false,
  required: ['ref_product', 'ref_type', 'ref_style'],
  properties: {
    // GitHub Product: The GitHub product the CTA leads users to
    // Format: ref_product=copilot
    ref_product: {
      type: 'string',
      name: 'Product',
      description: 'The GitHub product the CTA leads users to',
      enum: ['copilot', 'ghec', 'desktop', 'code-quality'],
    },

    // Type of CTA: The type of action the CTA encourages users to take
    // Format: ref_type=trial
    ref_type: {
      type: 'string',
      name: 'Type',
      description: 'The type of action the CTA encourages users to take',
      enum: ['trial', 'purchase', 'engagement'],
    },

    // CTA style: The way we are formatting the CTA in the docs
    // Format: ref_style=button
    ref_style: {
      type: 'string',
      name: 'Style',
      description: 'The way we are formatting the CTA in the docs',
      enum: ['button', 'text'],
    },

    // Type of plan (Optional): For links to sign up for or trial a plan, the specific plan we link to
    // Format: ref_plan=business
    ref_plan: {
      type: 'string',
      name: 'Plan',
      description:
        'For links to sign up for or trial a plan, the specific plan we link to (optional)',
      enum: ['enterprise', 'business', 'pro', 'free'],
    },
  },
}
