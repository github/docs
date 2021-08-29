import dedent from 'ts-dedent'
import { PlaygroundArticleT } from 'components/playground/types'

const article: PlaygroundArticleT = {
  title: 'Building and testing Node.js',
  shortTitle: 'Build & test Node.js',
  topics: ['CI', 'Node', 'JavaScript'],
  type: 'tutorial',
  slug: 'building-and-testing-nodejs',
  originalArticle: '/actions/guides/building-and-testing-nodejs',
  codeLanguageId: 'nodejs',
  intro: dedent`
    This guide shows you how to create a continuous integration (CI) workflow that builds and tests Node.js code. If your CI tests pass, you may want to deploy your code or publish a package.
  `,
  prerequisites: dedent`
    We recommend that you have a basic understanding of Node.js, YAML, workflow configuration options, and how to create a workflow file. For more information, see:

    - [Learn GitHub Actions](/actions/learn-github-actions)
    - [Getting started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)
  `,
  contentBlocks: [
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Starting with the Node.js workflow template',
      content: dedent`
        GitHub provides a Node.js workflow template that will work for most Node.js projects. This guide includes npm and Yarn examples that you can use to customize the template. For more information, see the [Node.js workflow template](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

        To get started quickly, add the template to the \`.github/workflows\` directory of your repository. The example workflow assumes that the default branch for your repository is \`main\`.
      `,
    },
    {
      codeBlock: {
        id: '0',
        highlight: 12,
      },
      type: 'default',
      title: 'Running on a different operating system',
      content: dedent`
        The starter workflow template configures jobs to run on Linux, using the GitHub-hosted \`ubuntu-latest\` runners. You can change the \`runs-on\` key to run your jobs on a different operating system. For example, you can use the GitHub-hosted Windows runners.

        \`\`\`yaml
        runs-on: windows-latest
        \`\`\`

        Or, you can run on the GitHub-hosted macOS runners.

        \`\`\`yaml
        runs-on: macos-latest
        \`\`\`

        You can also run jobs in Docker containers, or you can provide a self-hosted runner that runs on your own infrastructure. For more information, see "[Workflow syntax for GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
      `,
    },
    {
      codeBlock: {
        id: '0',
        highlight: [14, 23],
      },
      type: 'default',
      title: 'Specifying the Node.js version',
      content: dedent`
        The easiest way to specify a Node.js version is by using the \`setup-node\` action provided by GitHub. For more information see, [\`setup-node\`](https://github.com/actions/setup-node/).

        The \`setup-node\` action takes a Node.js version as an input and configures that version on the runner. The \`setup-node\` action finds a specific version of Node.js from the tools cache on each runner and adds the necessary binaries to \`PATH\`, which persists for the rest of the job. Using the \`setup-node\` action is the recommended way of using Node.js with GitHub Actions because it ensures consistent behavior across different runners and different versions of Node.js. If you are using a self-hosted runner, you must install Node.js and add it to \`PATH\`.

        The template includes a matrix strategy that builds and tests your code with four Node.js versions: 10.x, 12.x, 14.x, and 15.x. The 'x' is a wildcard character that matches the latest minor and patch release available for a version. Each version of Node.js specified in the \`node-version\` array creates a job that runs the same steps.

        Each job can access the value defined in the matrix \`node-version\` array using the \`matrix\` context. The \`setup-node\` action uses the context as the \`node-version\` input. The \`setup-node\` action configures each job with a different Node.js version before building and testing code. For more information about matrix strategies and contexts, see "[Workflow syntax for GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" and "[Context and expression syntax for GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions)."
      `,
    },
    {
      codeBlock: {
        id: '1',
        highlight: 16,
      },
      type: 'sub-section',
      content: dedent`
        Alternatively, you can build and test with exact Node.js versions.
      `,
    },
    {
      codeBlock: {
        id: '2',
        highlight: 19,
      },
      type: 'sub-section',
      content: dedent`
        Or, you can build and test using a single version of Node.js too.

        If you don't specify a Node.js version, GitHub uses the environment's default Node.js version.
        For more information, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
      `,
    },
    {
      codeBlock: {
        id: '3',
        highlight: 21,
      },
      type: 'default',
      title: 'Installing dependencies',
      content: dedent`
        GitHub-hosted runners have npm and Yarn dependency managers installed. You can use npm and Yarn to install dependencies in your workflow before building and testing your code. The Windows and Linux GitHub-hosted runners also have Grunt, Gulp, and Bower installed.

        When using GitHub-hosted runners, you can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up workflows](/actions/guides/caching-dependencies-to-speed-up-workflows)."
      `,
    },
    {
      codeBlock: {
        id: '4',
        highlight: 21,
      },
      type: 'sub-section',
      title: 'Example using npm',
      content: dedent`
        This example installs the dependencies defined in the *package.json* file. For more information, see [\`npm install\`](https://docs.npmjs.com/cli/install).
      `,
    },
    {
      codeBlock: {
        id: '2',
        highlight: 21,
      },
      type: 'sub-section-2',
      content: dedent`
        Using \`npm ci\` installs the versions in the *package-lock.json* or *npm-shrinkwrap.json* file and prevents updates to the lock file. Using \`npm ci\` is generally faster than running \`npm install\`. For more information, see [\`npm ci\`](https://docs.npmjs.com/cli/ci.html) and "[Introducing \`npm ci\` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)."
      `,
    },
    {
      codeBlock: {
        id: '5',
        highlight: [21, 23],
      },
      type: 'sub-section',
      title: 'Example using Yarn',
      content: dedent`
        This example installs the dependencies defined in the *package.json* file. For more information, see [\`yarn install\`](https://yarnpkg.com/en/docs/cli/install).
      `,
    },
    {
      codeBlock: {
        id: '6',
        highlight: 21,
      },
      type: 'sub-section-2',
      content: dedent`
        Alternatively, you can pass \`--frozen-lockfile\` to install the versions in the *yarn.lock* file and prevent updates to the *yarn.lock* file.
      `,
    },
    {
      codeBlock: {
        id: '7',
      },
      type: 'sub-section',
      title: 'Example using a private registry and creating the .npmrc file',
      content: dedent`
        You can use the \`setup-node\` action to create a local *.npmrc* file on the runner that configures the default registry and scope. The \`setup-node\` action also accepts an authentication token as input, used to access private registries or publish node packages. For more information, see [\`setup-node\`](https://github.com/actions/setup-node/).

        To authenticate to your private registry, you'll need to store your npm authentication token as a secret. For example, create a repository secret called \`NPM_TOKEN\`. For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

        In this example, the secret \`NPM_TOKEN\` stores the npm authentication token. The \`setup-node\` action configures the *.npmrc* file to read the npm authentication token from the \`NODE_AUTH_TOKEN\` environment variable. When using the \`setup-node\` action to create an *.npmrc* file, you must set the \`NODE_AUTH_TOKEN\` environment variable with the secret that contains your npm authentication token.

        Before installing dependencies, use the \`setup-node\` action to create the *.npmrc* file. The action has two input parameters. The \`node-version\` parameter sets the Node.js version, and the \`registry-url\` parameter sets the default registry. If your package registry uses scopes, you must use the \`scope\` parameter. For more information, see [\`npm-scope\`](https://docs.npmjs.com/misc/scope).

        This example creates an *.npmrc* file with the following contents:

        \`\`\`ini
        //registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
        @octocat:registry=https://registry.npmjs.org/
        always-auth=true
        \`\`\`
      `,
    },
    {
      codeBlock: {
        id: '8',
      },
      type: 'sub-section',
      title: 'Example caching dependencies',
      content: dedent`
        When using GitHub-hosted runners, you can cache dependencies using a unique key, and restore the dependencies when you run future workflows using the \`cache\` action. For more information, see [Caching dependencies to speed up workflows](/actions/guides/caching-dependencies-to-speed-up-workflows) and the [\`cache\` action](https://github.com/marketplace/actions/cache).
        `,
    },
    {
      codeBlock: {
        id: '9',
        highlight: [21, 22],
      },
      type: 'default',
      title: 'Building and testing your code',
      content: dedent`
        You can use the same commands that you use locally to build and test your code. For example, if you run \`npm run build\` to run build steps defined in your *package.json* file and \`npm test\` to run your test suite, you would add those commands in your workflow file.
      `,
    },
    {
      codeBlock: {
        id: '9',
      },
      type: 'default',
      title: 'Packaging workflow data as artifacts',
      content: dedent`
        You can save artifacts from your build and test steps to view after a job completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."
      `,
    },
    {
      codeBlock: {
        id: '9',
      },
      type: 'default',
      title: 'Publishing to package registries',
      content: dedent`
        You can configure your workflow to publish your Node.js package to a package registry after your CI tests pass. For more information about publishing to npm and GitHub Packages, see "[Publishing Node.js packages](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)."
      `,
    },
  ],
  codeBlocks: {
    '0': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
        name: Node.js CI

        on:
          push:
            branches: [ main ]
          pull_request:
            branches: [ main ]

        jobs:
          build:

            runs-on: ubuntu-latest

            strategy:
              matrix:
                node-version: [10.x, 12.x, 14.x, 15.x]

            steps:
              - uses: actions/checkout@v2
              - name: Use Node.js \${{ matrix.node-version }}
                uses: actions/setup-node@v2
                with:
                  node-version: \${{ matrix.node-version }}
              - name: Install dependencies
                run: npm ci
              - run: npm run build --if-present
              - run: npm test
      `,
    },
    '1': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
        name: Node.js CI

        on:
          push:
            branches: [ main ]
          pull_request:
            branches: [ main ]

        jobs:
          build:

            runs-on: ubuntu-latest

            strategy:
              matrix:
                node-version: [8.16.2, 10.17.0]

            steps:
              - uses: actions/checkout@v2
              - name: Use Node.js \${{ matrix.node-version }}
                uses: actions/setup-node@v2
                with:
                  node-version: \${{ matrix.node-version }}
              - name: Install dependencies
                run: npm ci
              - run: npm run build --if-present
              - run: npm test
      `,
    },
    '2': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest
      
          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                node-version: '12.x'
            - name: Install dependencies
              run: npm ci
            - run: npm run build --if-present
            - run: npm test
      `,
    },
    '3': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest
      
          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                node-version: '12.x'
            - name: Install dependencies
              run: npm install
            - run: npm run build --if-present
            - run: npm test
      `,
    },
    '4': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest
      
          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                node-version: '12.x'
            - name: Install dependencies
              run: npm install
            - run: npm run build --if-present
            - run: npm test
      `,
    },
    '5': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest
      
          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                node-version: '12.x'
            - name: Install dependencies
              run: yarn
            - run: yarn run build
            - run: yarn run test
      `,
    },
    '6': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest
      
          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                node-version: '12.x'
            - name: Install dependencies
              run: yarn --frozen-lockfile
            - run: yarn run build
            - run: yarn run test
      `,
    },
    '7': [
      {
        fileName: '.github/workflows/example.yml',
        language: 'yaml',
        code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest

          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                always-auth: true
                node-version: '12.x'
                registry-url: https://registry.npmjs.org
                scope: '@octocat'
            - name: Install dependencies
              run: npm ci
              env:
                NODE_AUTH_TOKEN: \${{secrets.NPM_TOKEN}}
      `,
      },
      {
        fileName: '.npmrc',
        language: 'ini',
        code: dedent`
        //registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
        @octocat:registry=https://registry.npmjs.org/
        always-auth=true
      `,
      },
    ],
    '8': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
      name: Node.js CI

      on:
        push:
          branches: [ main ]
        pull_request:
          branches: [ main ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest

          steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v1
              with:
                node-version: '12.x'
            - name: Cache Node.js modules
              uses: actions/cache@v2
              with:
                # npm cache files are stored in \`~/.npm\` on Linux/macOS
                path: ~/.npm
                key: \${{ runner.OS }}-node-\${{ hashFiles('**/package-lock.json') }}
                restore-keys: |
                  \${{ runner.OS }}-node-
                  \${{ runner.OS }}-
            - name: Install dependencies
              run: npm ci
      `,
    },
    '9': {
      fileName: '.github/workflows/example.yml',
      language: 'yaml',
      code: dedent`
          name: Node.js CI

          on:
            push:
              branches: [ main ]
            pull_request:
              branches: [ main ]

          jobs:
            build:

              runs-on: ubuntu-latest

              steps:
                - uses: actions/checkout@v2
                - name: Use Node.js
                  uses: actions/setup-node@v1
                  with:
                    node-version: '12.x'
                - run: npm install
                - run: npm run build --if-present
                - run: npm test
        `,
    },
  },
}

export default article
