version: 2.1

defaults: &defaults
  working_directory: ~/design-systems-cli
  docker:
    - image: circleci/node:16.5.0-browsers
  environment:
    TZ: '/usr/share/zoneinfo/America/Los_Angeles'

aliases:
  # Circle related commands
  - &restore-cache
    keys:
      # Find a cache corresponding to this specific package.json checksum
      # when this file is changed, this key will fail
      - design-systems-cli-{{ checksum "yarn.lock" }}-{{ checksum ".circleci/config.yml" }}
      - design-systems-cli-{{ checksum "yarn.lock" }}
      # Find the most recent cache used from any branch
      - design-systems-cli-
  - &save-cache
    key: design-systems-cli-{{ checksum "yarn.lock" }}-{{ checksum ".circleci/config.yml" }}
    paths:
      - ~/.cache/yarn
      - node_modules
  # Yarn commands
  - &yarn
    name: Install Dependencies
    command: yarn install --frozen-lockfile --non-interactive
  - &lint
    name: Lint
    command: yarn lint
  - &test
    name: Test
    command: yarn test --runInBand
  - &build
    name: Build
    command: yarn build

jobs:
  install:
    <<: *defaults
    steps:
      - checkout
      - restore_cache: *restore-cache
      - run: *yarn
      - save_cache: *save-cache
      - persist_to_workspace:
          root: .
          paths:
            - .

  build:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run: *build
      - persist_to_workspace:
          root: .
          paths:
            - .

  lint:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run: *lint

  test:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run: *test

  pr-check:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run:
          name: Check PR for semantic version label
          command: yarn auto pr-check --pr $CHANGE_ID --url $CIRCLE_BUILD_URL

  release:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run: mkdir ~/.ssh/ && echo -e "Host github.com\n\tStrictHostKeyChecking no\n" > ~/.ssh/config
      - run:
          name: Release
          command: yarn auto shipit

  integration-ds:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run:
          name: Get Integration Design Systems Repo
          command:
            git clone https://github.com/design-systems-templates/integration-ds.git
      - run:
          name: Install Dependencies
          command: cd integration-ds && yarn install
      - run:
          name: Build with Canary Version (local mapping)
          command: cd integration-ds && npx lerna run build --stream
      - run:
          name: Build Storybook
          command: cd integration-ds && ./../packages/cli/bin/ds.js storybook build
      - run:
          name: Size
          command: cd integration-ds && ./../packages/cli/bin/ds.js size --ignore @integration-ds/babel-preset
      - run:
          name: Test
          command: cd integration-ds && ./../packages/cli/bin/ds.js test
      - run:
          name: Lint
          command: cd integration-ds && ./../packages/cli/bin/ds.js lint

  publishDocs:
    <<: *defaults
    steps:
      - attach_workspace:
          at: ~/design-systems-cli
      - run: mkdir ~/.ssh/ && echo -e "Host github.com\n\tStrictHostKeyChecking no\n" > ~/.ssh/config
      - run: git config --global user.email "lisowski54@gmail.com"
      - run: git config --global user.name "Andrew Lisowski"
      - run:
          name: Publish Docs
          command: yarn lerna run --scope @design-systems/docs deploy

workflows:
  version: 2
  build_and_test:
    jobs:
      - install

      - build:
          requires:
            - install

      - lint:
          requires:
            - build
      - test:
          requires:
            - build
      - pr-check:
          requires:
            - build
          filters:
            branches:
              ignore:
                - master
      - release:
          requires:
            - test
            - lint

      - publishDocs:
          requires:
            - release
          filters:
            branches:
              only:
                - Master
  push:
    branches: [ "Main.yml" ]
  pull_request:
    branches: [ "Main.yml" ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Build
      run: |
        npm install
        grunt
