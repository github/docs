import { describe, it } from 'vitest'
import { RuleTester, Rule } from 'eslint'
import ruleModule from '../use-custom-logger'

const rule = ruleModule as Rule.RuleModule

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
})

describe('use-custom-logger', () => {
  it('should pass valid code without console usage', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [
        {
          code: `
            import { createLogger } from '@/observability/logger';
            const logger = createLogger(import.meta.url);
            logger.info('test');
          `,
        },
        {
          code: `
            const x = 5;
            const y = 10;
          `,
        },
      ],
      invalid: [],
    })
  })

  it('should detect and fix console.log', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            console.log('test');
          `,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            logger.info('test');
          `,
        },
      ],
    })
  })

  it('should detect and fix console.error', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            console.error('test');
          `,
          errors: [
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            logger.error('test');
          `,
        },
      ],
    })
  })

  it('should detect and fix console.warn', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            console.warn('warning');
          `,
          errors: [
            {
              message: 'Please use our internal logger.warn instead of console.warn',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            logger.warn('warning');
          `,
        },
      ],
    })
  })

  it('should detect and fix console.debug', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            console.debug('debug info');
          `,
          errors: [
            {
              message: 'Please use our internal logger.debug instead of console.debug',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            logger.debug('debug info');
          `,
        },
      ],
    })
  })

  it('should handle files with no existing imports', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `console.log('hello');`,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
          ],
          output: `import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);
logger.info('hello');`,
        },
      ],
    })
  })

  it('should not add duplicate imports when logger import exists', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { createLogger } from '@/observability/logger';
            console.log('test');
          `,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
          ],
          output: `
            import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            logger.info('test');
          `,
        },
      ],
    })
  })

  it('should not add duplicate logger declaration when it exists', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { createLogger } from '@/observability/logger';
            const logger = createLogger(import.meta.url);
            console.log('test');
          `,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
          ],
          output: `
            import { createLogger } from '@/observability/logger';
            const logger = createLogger(import.meta.url);
            logger.info('test');
          `,
        },
      ],
    })
  })

  it('should handle multiple console calls in one file', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            console.log('first');
            console.error('second');
          `,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            logger.info('first');
            logger.error('second');
          `,
        },
      ],
    })
  })

  it('should transform console.error(err) to logger.error with message', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            const err = new Error('test');
            console.error(err);
          `,
          errors: [
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            const err = new Error('test');
            logger.error('Error occurred', { err });
          `,
        },
      ],
    })
  })

  it('should transform console.error(error) to logger.error with message', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            const error = new Error('test');
            console.error(error);
          `,
          errors: [
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            const error = new Error('test');
            logger.error('Error occurred', { error });
          `,
        },
      ],
    })
  })

  it('should transform console.warn(err) to logger.warn with message', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            import { something } from 'somewhere';
            const err = new Error('test');
            console.warn(err);
          `,
          errors: [
            {
              message: 'Please use our internal logger.warn instead of console.warn',
            },
          ],
          output: `
            import { something } from 'somewhere';
import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            const err = new Error('test');
            logger.warn('Error occurred', { err });
          `,
        },
      ],
    })
  })

  it('should transform console.error(e) to logger.error with message', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            try {
              throw new Error('test');
            } catch (e) {
              console.error(e);
            }
          `,
          errors: [
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            try {
              throw new Error('test');
            } catch (e) {
              logger.error('Error occurred', { e });
            }
          `,
        },
      ],
    })
  })

  it('should transform console.error(failBotError) to logger.error with message', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            const failBotError = new Error('test');
            console.error(failBotError);
          `,
          errors: [
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            const failBotError = new Error('test');
            logger.error('Error occurred', { failBotError });
          `,
        },
      ],
    })
  })

  it('should not transform console.error with message and error object', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            const err = new Error('test');
            console.error('Something went wrong', err);
          `,
          errors: [
            {
              message: 'Please use our internal logger.error instead of console.error',
            },
          ],
          output: `import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            const err = new Error('test');
            logger.error('Something went wrong', err);
          `,
        },
      ],
    })
  })

  it('should not transform console.log with error variable', () => {
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            const err = new Error('test');
            console.log(err);
          `,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
          ],
          output: `import { createLogger } from '@/observability/logger';

const logger = createLogger(import.meta.url);

            const err = new Error('test');
            logger.info(err);
          `,
        },
      ],
    })
  })

  it('should handle logger variable with destructuring pattern', () => {
    // This test ensures the rule recognizes logger variables from destructuring patterns
    // and doesn't create a duplicate declaration
    ruleTester.run('use-custom-logger', rule, {
      valid: [],
      invalid: [
        {
          code: `
            const { logger } = something;
            console.log('test');
          `,
          errors: [
            {
              message: 'Please use our internal logger.info instead of console.log',
            },
          ],
          // The auto-fix will add the import but not the declaration since logger exists via destructuring
          output: `import { createLogger } from '@/observability/logger';

            const { logger } = something;
            logger.info('test');
          `,
        },
      ],
    })
  })
})
