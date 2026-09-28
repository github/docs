export default {
  type: 'object',
  additionalProperties: false,
  required: ['ref_product', 'ref_type', 'ref_style'],
  properties: {
    // Example query parameter: ref_product=copilot.
    ref_product: {
      type: 'string',
      name: 'Product',
      description: 'The GitHub product the CTA leads users to',
      enum: [
        'copilot',
        'ghec',
        'desktop',
        'code-quality',
        'code-scanning',
        'secret-scanning',
        'supply-chain-security',
        'security-advisories',
        'cli',
        'github',
      ],
    },

    // Example query parameter: ref_type=trial.
    ref_type: {
      type: 'string',
      name: 'Type',
      description: 'The type of action the CTA encourages users to take',
      enum: ['trial', 'purchase', 'engagement'],
    },

    // Example query parameter: ref_style=button.
    ref_style: {
      type: 'string',
      name: 'Style',
      description: 'The way we are formatting the CTA in the docs',
      enum: ['button', 'text'],
    },

    // Example query parameter: ref_plan=business.
    ref_plan: {
      type: 'string',
      name: 'Plan',
      description:
        'For links to sign up for or trial a plan, the specific plan we link to (optional)',
      enum: ['enterprise', 'business', 'pro', 'pro-plus', 'free', 'max', 'cfi', 'cfb'],
    },
  },
}
