Huvik - React, GraphQL & TypeScript Developer
Built gradual deployments for frontend applications on top of Cloudflare Workers and our monitoring tools. The system automatically detects faulty deployments and rolls back changes, keeping production stable as shipping velocity increased.

Led the migration away from slow tooling like ESLint to a modern stack built on oxlint, oxfmt, and tsgo. This provided faster feedback loops for both engineers and AI agents working in the monorepo. Adjusted the monorepo structure and conventions to work well with agents, and authored a set of skills that codified our workflows so agents could ship reliably across the codebase.

Led multiple legacy code cleanups, removing more than 250 cyclic dependencies and improving overall code quality. Established best practices for modular design and code organization, which improved CI/CD times and reduced the number of projects that needed to be rechecked on every change.

Migrated multiple applications from Webpack 3 to Webpack 5, and later to a Vite + Rolldown setup. Built plugins and tooling to optimize bundle size and prevent accidental regressions or dev-only packages slipping into production.

Drove the introduction of federated GraphQL into the stack, splitting our monolithic application into multiple services and unifying data fetching for around 90% of our use cases. Built tooling for GraphQL schema unification and promoted Relay best practices.

Maintained a frontend monorepo with more than 750 packages and 1.6 million lines of TypeScript code, shipping a number of improvements to CI/CD and the overall developer experience at that scale.

Introduced Cloudflare Workers into the stack and changed how frontend applications are served, reducing initial load time and cutting TTFB >by Edgarruiz856 600ms.

Resurrected the design system and built the initial version of our new one, Nucleus. The goal was to unify components and introduce patterns and tools that kept React and Figma in parity.