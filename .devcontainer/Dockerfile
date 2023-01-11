# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install the GitHub CLI see:
# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
Makefile{
    "settings": "{\"settings\":\"{}\"}",
    "globalState": "{\"storage\":{\"workbench.panel.markers.hidden\":\"[{\\\"id\\\":\\\"workbench.panel.markers.view\\\",\\\"isHidden\\\":false}]\",\"workbench.panel.output.hidden\":\"[{\\\"id\\\":\\\"workbench.panel.output\\\",\\\"isHidden\\\":false}]\",\"terminal.hidden\":\"[{\\\"id\\\":\\\"terminal\\\",\\\"isHidden\\\":false}]\",\"workbench.view.debug.state.hidden\":\"[{\\\"id\\\":\\\"workbench.debug.welcome\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"workbench.debug.variablesView\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"workbench.debug.watchExpressionsView\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"workbench.debug.callStackView\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"workbench.debug.loadedScriptsView\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"workbench.debug.breakPointsView\\\",\\\"isHidden\\\":false}]\",\"workbench.explorer.views.state.hidden\":\"[{\\\"id\\\":\\\"outline\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"timeline\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"workbench.explorer.openEditorsView\\\",\\\"isHidden\\\":true},{\\\"id\\\":\\\"workbench.explorer.fileView\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"npm\\\",\\\"isHidden\\\":true}]\",\"workbench.view.remote.state.hidden\":\"[{\\\"id\\\":\\\"remoteHub.views.workspaceRepositories\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"github.codespaces.explorer\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"github.codespaces.warnExplorer\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"github.codespaces.performanceExplorer\\\",\\\"isHidden\\\":false}]\",\"workbench.scm.views.state.hidden\":\"[{\\\"id\\\":\\\"workbench.scm.repositories\\\",\\\"isHidden\\\":true},{\\\"id\\\":\\\"workbench.scm\\\",\\\"isHidden\\\":false}]\",\"workbench.view.search.state.hidden\":\"[{\\\"id\\\":\\\"workbench.view.search\\\",\\\"isHidden\\\":false}]\",\"workbench.panel.pinnedPanels\":\"[{\\\"id\\\":\\\"workbench.panel.markers\\\",\\\"name\\\":\\\"Problems\\\",\\\"pinned\\\":true,\\\"order\\\":0,\\\"visible\\\":true},{\\\"id\\\":\\\"workbench.panel.output\\\",\\\"name\\\":\\\"Output\\\",\\\"pinned\\\":true,\\\"order\\\":1,\\\"visible\\\":true},{\\\"id\\\":\\\"workbench.panel.repl\\\",\\\"name\\\":\\\"Debug Console\\\",\\\"pinned\\\":true,\\\"order\\\":2,\\\"visible\\\":false},{\\\"id\\\":\\\"terminal\\\",\\\"name\\\":\\\"Terminal\\\",\\\"pinned\\\":true,\\\"order\\\":3,\\\"visible\\\":true},{\\\"id\\\":\\\"workbench.panel.comments\\\",\\\"name\\\":\\\"Comments\\\",\\\"pinned\\\":true,\\\"order\\\":10,\\\"visible\\\":false},{\\\"id\\\":\\\"refactorPreview\\\",\\\"name\\\":\\\"Refactor Preview\\\",\\\"pinned\\\":true,\\\"visible\\\":false}]\",\"workbench.activity.pinnedViewlets2\":\"[{\\\"id\\\":\\\"workbench.view.explorer\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":0},{\\\"id\\\":\\\"workbench.view.search\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":1},{\\\"id\\\":\\\"workbench.view.scm\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":2},{\\\"id\\\":\\\"workbench.view.debug\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":3},{\\\"id\\\":\\\"workbench.view.extensions\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":4},{\\\"id\\\":\\\"workbench.view.remote\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":4},{\\\"id\\\":\\\"workbench.view.extension.test\\\",\\\"pinned\\\":true,\\\"visible\\\":false,\\\"order\\\":6},{\\\"id\\\":\\\"workbench.view.extension.references-view\\\",\\\"pinned\\\":true,\\\"visible\\\":false,\\\"order\\\":7},{\\\"id\\\":\\\"workbench.view.extension.github-pull-requests\\\",\\\"pinned\\\":true,\\\"visible\\\":true,\\\"order\\\":8},{\\\"id\\\":\\\"workbench.view.extension.github-pull-request\\\",\\\"pinned\\\":true,\\\"visible\\\":false,\\\"order\\\":9},{\\\"id\\\":\\\"workbench.view.editSessions\\\",\\\"pinned\\\":true,\\\"visible\\\":false},{\\\"id\\\":\\\"workbench.view.sync\\\",\\\"pinned\\\":true,\\\"visible\\\":false}]\",\"workbench.view.extension.github-pull-requests.state.hidden\":\"[{\\\"id\\\":\\\"github:login\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"pr:github\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"issues:github\\\",\\\"isHidden\\\":false}]\",\"workbench.view.extension.github-pull-request.state.hidden\":\"[{\\\"id\\\":\\\"github:createPullRequest\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"github:compareChanges\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"prStatus:github\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"github:activePullRequest\\\",\\\"isHidden\\\":false},{\\\"id\\\":\\\"github:activePullRequest:welcome\\\",\\\"isHidden\\\":false}]\"}}",
    "extensions": "[{\"identifier\":{\"id\":\"ms-vscode.anycode-kotlin\",\"uuid\":\"4a4d51cb-4dc6-4aa4-819a-af218fb298a7\"}},{\"identifier\":{\"id\":\"github.github-vscode-theme\",\"uuid\":\"7328a705-91fc-49e6-8293-da6f112e482d\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode\",\"uuid\":\"af9ea409-7854-4abe-a19e-6700ee46ec34\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-php\",\"uuid\":\"f918e766-d9b4-478e-95ff-9fa947a1ffc1\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-cpp\",\"uuid\":\"22ff1c2c-fe2c-4ba5-8fab-da82062231d7\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-rust\",\"uuid\":\"fefa61ca-8567-4643-b2c8-24db64849885\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-c-sharp\",\"uuid\":\"a14f5278-8679-4213-bf29-213b94e89ba1\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-java\",\"uuid\":\"383e4b36-51e8-49c1-9223-306cc75ae2fa\"}},{\"identifier\":{\"id\":\"github.codespaces\",\"uuid\":\"4023d3e5-c840-4cdd-8b54-51c77548aa3f\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-python\",\"uuid\":\"e283de95-e641-4a4d-a9f9-645fc34bbe3f\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-go\",\"uuid\":\"3a1549d2-c4a1-4213-bcf1-f23b23f9f3e3\"}},{\"identifier\":{\"id\":\"ms-vscode.anycode-typescript\",\"uuid\":\"77b75f29-0ce5-4035-a5f8-1e220be03dca\"}},{\"identifier\":{\"id\":\"github.vscode-pull-request-github\",\"uuid\":\"69ddd764-339a-4ecc-97c1-9c4ece58e36d\"}},{\"identifier\":{\"id\":\"ms-vscode.remote-repositories\",\"uuid\":\"cf5142f0-3701-4992-980c-9895a750addf\"}},{\"identifier\":{\"id\":\"github.remotehub\",\"uuid\":\"fc7d7e85-2e58-4c1c-97a3-2172ed9a77cd\"}}]"
}Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
honeycombio
/
opentelemetry-collector-configs
Public
Fork your own copy of honeycombio/opentelemetry-collector-configs
Code
Issues
2
Pull requests
2
Actions
Security
Insights
Update OTel Collector to 0.50.0 (#14)
* timestampprocesor: bump OTel Collector to 0.50.0 and fix breaking changes
  * Notably InstrumentationLibraryMetrics -> ScopeMetrics
* Upgrade Collector to 0.50.0
  * opentelemetry-collector-builder is now otc and released in a different location
* circle: update cci-go-yq to 0.0.5
 main (#14)
 v1.6.0 
…
 datadogreceiver/v0.1.0
@jharley
jharley committed on May 10,
2022 
1 parent 64c6df8 commit 9866284df32476ac5f87de9400d05fffada0f48c
Show file tree Hide file tree
Showing 15 changed files with 188 additions and 599 deletions.
  2  
.circleci/config.yml
version: 2.1	version: 2.1
jobs:	jobs:
  build:	  build:
    working_directory: ~/repo	    working_directory: ~/repo
    docker:	    docker:
      - image: honeycombio/cci-go-yq: 0.0.4	      - image: honeycombio/cci-go-yq: 0.0.5
    steps:	    steps:
      - checkout	      - checkout
      - restore_cache:	      - restore_cache:
          keys:	          keys:
            - builder-config-{
    { checksum "builder-config.yaml"
    }
}	            - builder-config-{
    { checksum "builder-config.yaml"
    }
}
      - run:	      - run:
          name: Run tests	          name: Run tests
          command: make test	          command: make test
      - run:	      - run:
          name: Create artifacts	          name: Create artifacts
          command: |	          command: |
            mkdir -p /tmp/images;	            mkdir -p /tmp/images;
            cp build/otelcol_hny_$(go env GOOS)_$(go env GOARCH) /tmp/images;	            cp build/otelcol_hny_$(go env GOOS)_$(go env GOARCH) /tmp/images;
      - save_cache:	      - save_cache:
          key: builder-config-{
    { checksum "builder-config.yaml"
    }
}	          key: builder-config-{
    { checksum "builder-config.yaml"
    }
}
          paths: build	          paths: build
      - store_artifacts:	      - store_artifacts:
          path: /tmp/images	          path: /tmp/images
  27  
.circleci/images/Dockerfile
FROM cimg/go: 1.17	FROM cimg/go: 1.17


ENV PYENV_ROOT=/home/circleci/.pyenv \	ENV PYENV_ROOT=/home/circleci/.pyenv \
	PATH=/home/circleci/.pyenv/shims:/home/circleci/.pyenv/bin:/home/circleci/.poetry/bin:$PATH \		PATH=/home/circleci/.pyenv/shims:/home/circleci/.pyenv/bin:/home/circleci/.poetry/bin:$PATH \
	OTC_BUILDER_VERSON=0.37.0		OTC_BUILDER_VERSION=0.50.0


RUN sudo apt-get update && \	RUN sudo apt-get update -qq && \
	sudo apt-get install -y \		sudo apt-get install -y \
		python \		python \
		libbz2-dev \		libbz2-dev \
		libreadline-dev \		libreadline-dev \
		libssl-dev \		libssl-dev \
		python-openssl && \		python-openssl && \
	curl https: //pyenv.run | bash && \		curl https://pyenv.run | bash && \
	sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*		sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


RUN pyenv install 3.9.6 && pyenv global 3.9.6	RUN pyenv install 3.9.12 && pyenv global 3.9.12


RUN pip3 install yq	RUN pip3 install yq


RUN mkdir /home/circleci/bin && \	RUN export GOARCH=$(go env GOARCH) && export GOOS=$(go env GOOS) && \
	wget https://github.com/open-telemetry/opentelemetry-collector-builder/releases/download/v${OTC_BUILDER_VERSON}/opentelemetry-collector-builder_${OTC_BUILDER_VERSON}_linux_amd64 \		mkdir /home/circleci/bin && \
		-O /home/circleci/bin/opentelemetry-collector-builder && \		curl -sLo /home/circleci/bin/ocb \
	sudo chmod u+x /home/circleci/bin/opentelemetry-collector-builder		"https://github.com/open-telemetry/opentelemetry-collector/releases/download/v${OTC_BUILDER_VERSION}/ocb_${OTC_BUILDER_VERSION}_${GOOS}_${GOARCH}" && \
	chmod u+x /home/circleci/bin/ocb


RUN python --version && pip --version && yq --version && opentelemetry-collector-builder version	RUN python --version && pip --version && yq --version && ocb version
  2  
Makefile
VERSION?=1.0.0	VERSION?=1.0.0
GOOS=$(shell go env GOOS)	GOOS=$(shell go env GOOS)
GOARCH=$(shell go env GOARCH)	GOARCH=$(shell go env GOARCH)
.PHONY: all	.PHONY: all
all: config collector-bin collector-dist	all: config collector-bin collector-dist
.PHONY: config	.PHONY: config
config: artifacts/honeycomb-metrics-config.yaml	config: artifacts/honeycomb-metrics-config.yaml
.PHONY: collector-bin	.PHONY: collector-bin
collector-bin: build/otelcol_hny_darwin_amd64 build/otelcol_hny_darwin_arm64 build/otelcol_hny_linux_amd64 build/otelcol_hny_linux_arm64 build/otelcol_hny_windows_amd64.exe	collector-bin: build/otelcol_hny_darwin_amd64 build/otelcol_hny_darwin_arm64 build/otelcol_hny_linux_amd64 build/otelcol_hny_linux_arm64 build/otelcol_hny_windows_amd64.exe
.PHONY: collector-dist	.PHONY: collector-dist
collector-dist: dist/otel-hny-collector_$(VERSION)_amd64.deb dist/otel-hny-collector_$(VERSION)_arm64.deb dist/otel-hny-collector_$(VERSION)_x86_64.rpm dist/otel-hny-collector_$(VERSION)_arm64.rpm 	collector-dist: dist/otel-hny-collector_$(VERSION)_amd64.deb dist/otel-hny-collector_$(VERSION)_arm64.deb dist/otel-hny-collector_$(VERSION)_x86_64.rpm dist/otel-hny-collector_$(VERSION)_arm64.rpm 
.PHONY: release	.PHONY: release
release:	release:
	$(MAKE) clean		$(MAKE) clean
	$(MAKE) test		$(MAKE) test
	$(MAKE) artifacts/honeycomb-metrics-config.yaml		$(MAKE) artifacts/honeycomb-metrics-config.yaml
	$(MAKE) collector-bin		$(MAKE) collector-bin
	$(MAKE) collector-dist		$(MAKE) collector-dist
	cp build/otelcol_hny_* dist		cp build/otelcol_hny_* dist
	cp artifacts/honeycomb-metrics-config.yaml dist		cp artifacts/honeycomb-metrics-config.yaml dist
	(cd dist && shasum -a 256 * > checksums.txt)		(cd dist && shasum -a 256 * > checksums.txt)
.PHONY: test	.PHONY: test
test: go_test integration_test	test: go_test integration_test
.PHONY: integration_test	.PHONY: integration_test
integration_test: test/test.sh build/otelcol_hny_$(GOOS)_$(GOARCH) artifacts/honeycomb-metrics-config.yaml	integration_test: test/test.sh build/otelcol_hny_$(GOOS)_$(GOARCH) artifacts/honeycomb-metrics-config.yaml
	./test/test.sh		./test/test.sh
.PHONY: go_test	.PHONY: go_test
go_test:	go_test:
	(cd ./timestampprocessor && go test .)		(cd ./timestampprocessor && go test .)
# generate a configuration file for otel-collector that results in a favorable repackaging ratio	# generate a configuration file for otel-collector that results in a favorable repackaging ratio
artifacts/honeycomb-metrics-config.yaml: config-generator.jq vendor-fixtures/hostmetrics-receiver-metadata.yaml	artifacts/honeycomb-metrics-config.yaml: config-generator.jq vendor-fixtures/hostmetrics-receiver-metadata.yaml
	mkdir -p ./artifacts		mkdir -p ./artifacts
	yq -y -f ./config-generator.jq < ./vendor-fixtures/hostmetrics-receiver-metadata.yaml > ./artifacts/honeycomb-metrics-config.yaml		yq -y -f ./config-generator.jq < ./vendor-fixtures/hostmetrics-receiver-metadata.yaml > ./artifacts/honeycomb-metrics-config.yaml
# copy hostmetrics metadata yaml file from the OpenTelemetry Collector repository, and prepend a note saying it's vendored	# copy hostmetrics metadata yaml file from the OpenTelemetry Collector repository, and prepend a note saying it's vendored
vendor-fixtures/hostmetrics-receiver-metadata.yaml:	vendor-fixtures/hostmetrics-receiver-metadata.yaml:
	REMOTE_PATH='https://raw.githubusercontent.com/open-telemetry/opentelemetry-collector-contrib/141da3a5c4a1bf1570372e2890af383dd833167b/receiver/hostmetricsreceiver/metadata.yaml'; \		REMOTE_PATH='https://raw.githubusercontent.com/open-telemetry/opentelemetry-collector-contrib/141da3a5c4a1bf1570372e2890af383dd833167b/receiver/hostmetricsreceiver/metadata.yaml'; \
	curl $$REMOTE_PATH | sed "1s|^|# DO NOT EDIT! This file is vendored from $${REMOTE_PATH}"$$'\\\n\\\n|' > vendor-fixtures/hostmetrics-receiver-metadata.yaml		curl $$REMOTE_PATH | sed "1s|^|# DO NOT EDIT! This file is vendored from $${REMOTE_PATH}"$$'\\\n\\\n|' > vendor-fixtures/hostmetrics-receiver-metadata.yaml
build/otelcol_hny_darwin_amd64:	build/otelcol_hny_darwin_amd64:
	GOOS=darwin GOARCH=amd64 $(MAKE) build-binary-internal		GOOS=darwin GOARCH=amd64 $(MAKE) build-binary-internal
build/otelcol_hny_darwin_arm64:	build/otelcol_hny_darwin_arm64:
	GOOS=darwin GOARCH=arm64 $(MAKE) build-binary-internal		GOOS=darwin GOARCH=arm64 $(MAKE) build-binary-internal
build/otelcol_hny_linux_amd64:	build/otelcol_hny_linux_amd64:
	GOOS=linux GOARCH=amd64 $(MAKE) build-binary-internal		GOOS=linux GOARCH=amd64 $(MAKE) build-binary-internal
build/otelcol_hny_linux_arm64:	build/otelcol_hny_linux_arm64:
	GOOS=linux GOARCH=arm64 $(MAKE) build-binary-internal		GOOS=linux GOARCH=arm64 $(MAKE) build-binary-internal
build/otelcol_hny_windows_amd64.exe:	build/otelcol_hny_windows_amd64.exe:
	GOOS=windows GOARCH=amd64 EXTENSION=.exe $(MAKE) build-binary-internal		GOOS=windows GOARCH=amd64 EXTENSION=.exe $(MAKE) build-binary-internal


.PHONY: build-binary-internal	.PHONY: build-binary-internal
build-binary-internal: builder-config.yaml	build-binary-internal: builder-config.yaml
	opentelemetry-collector-builder --output-path=build --name=otelcol_hny_$(GOOS)_$(GOARCH)$(EXTENSION) --version=$(VERSION) --config=builder-config.yaml		ocb --output-path=build --name=otelcol_hny_$(GOOS)_$(GOARCH)$(EXTENSION) --version=$(VERSION) --config=builder-config.yaml


dist/otel-hny-collector_%_amd64.deb: build/otelcol_hny_linux_amd64	dist/otel-hny-collector_%_amd64.deb: build/otelcol_hny_linux_amd64
	PACKAGE=deb ARCH=amd64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=deb ARCH=amd64 VERSION=$* $(MAKE) build-package-internal
dist/otel-hny-collector_%_arm64.deb: build/otelcol_hny_linux_arm64	dist/otel-hny-collector_%_arm64.deb: build/otelcol_hny_linux_arm64
	PACKAGE=deb ARCH=arm64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=deb ARCH=arm64 VERSION=$* $(MAKE) build-package-internal
dist/otel-hny-collector_%_x86_64.rpm: build/otelcol_hny_linux_amd64	dist/otel-hny-collector_%_x86_64.rpm: build/otelcol_hny_linux_amd64
	PACKAGE=rpm ARCH=amd64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=rpm ARCH=amd64 VERSION=$* $(MAKE) build-package-internal
dist/otel-hny-collector_%_arm64.rpm: build/otelcol_hny_linux_arm64	dist/otel-hny-collector_%_arm64.rpm: build/otelcol_hny_linux_arm64
	PACKAGE=rpm ARCH=arm64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=rpm ARCH=arm64 VERSION=$* $(MAKE) build-package-internal
.PHONY: build-package-internal	.PHONY: build-package-internal
build-package-internal:	build-package-internal:
	docker build -t otelcol-fpm packaging/fpm		docker build -t otelcol-fpm packaging/fpm
	docker run --rm -v $(CURDIR):/repo -e VERSION=$(VERSION) -e ARCH=$(ARCH) -e PACKAGE=$(PACKAGE) otelcol-fpm		docker run --rm -v $(CURDIR):/repo -e VERSION=$(VERSION) -e ARCH=$(ARCH) -e PACKAGE=$(PACKAGE) otelcol-fpm
.PHONY: clean	.PHONY: clean
clean:	clean:
	rm -f build/* compact-config.yaml test/tmp-* dist/* artifacts/*		rm -f build/* compact-config.yaml test/tmp-* dist/* artifacts/*
  9  
README.md
@@ -25,7 +25,7 @@ If you'd like to build a version of the configuration yourself, clone this repo
- [go](https://golang.org/dl/)	- [go](https://golang.org/dl/)
- [jq](https://stedolan.github.io/jq/download/)	- [jq](https://stedolan.github.io/jq/download/)
- [yq](https://kislyuk.github.io/yq/#installation)	- [yq](https://kislyuk.github.io/yq/#installation)
- [opentelemetry-collector-builder](https://github.com/open-telemetry/opentelemetry-collector-builder)	- [ocb](https://github.com/open-telemetry/opentelemetry-collector-releases) built from the `opentelemetry-collector-releases` project


Watch updates and rebuild on changes using [`entr`](http://eradman.com/entrproject/) with `ls | entr make`.	Watch updates and rebuild on changes using [`entr`](http://eradman.com/entrproject/) with `ls | entr make`.


@@ -34,9 +34,10 @@ Simulate what's happening in CircleCI with: `docker run -it --mount=type=bind,so
## Releasing	## Releasing


Aside from the dependencies above you will also need the following:	Aside from the dependencies above you will also need the following:
* [docker](https://docs.docker.com/get-docker/)	
* [fpm](https://fpm.readthedocs.io/en/v1.13.1/installing.html)	- [docker](https://docs.docker.com/get-docker/)
* [gh](https://github.com/cli/cli#installation)	- [fpm](https://fpm.readthedocs.io/en/v1.13.1/installing.html)
- [gh](https://github.com/cli/cli#installation)


Make sure you have committed all code and are on an appropriate branch, then run:	Make sure you have committed all code and are on an appropriate branch, then run:


```bash	```bash
./release.sh	./release.sh
```	```
 41  
builder-config.yaml
@@ -1,19 +1,36 @@
dist:	dist:
  module: github.com/open-telemetry/opentelemetry-collector-builder # the module name for the new distribution, following Go mod conventions. Optional, but recommended.	  module: github.com/honeycombio/opentelemetry-collector-configs
  description: "OpenTelemetry Collector for Honeycomb" # a long name for the application. Optional.	  description: "OpenTelemetry Collector for Honeycomb"
  include_core: true # whether the core components should be included in the distribution. Optional.	  otelcol_version: "0.50.0"
  otelcol_version: "0.37.0" # the OpenTelemetry Collector version to use as base for the distribution. Optional.	  output_path: build
  output_path: build # the path to write the output (sources and binary). Optional.	
  go: "/usr/bin/go" # which Go binary to use to compile the generated sources. Optional.	
receivers:	receivers:
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/hostmetricsreceiver v0.37.1"	  - import: go.opentelemetry.io/collector/receiver/otlpreceiver
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/kubeletstatsreceiver v0.37.1"	    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/hostmetricsreceiver v0.50.0"
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/kubeletstatsreceiver v0.50.0"
extensions:
  - import: go.opentelemetry.io/collector/extension/zpagesextension
    gomod: go.opentelemetry.io/collector v0.50.0
  - import: go.opentelemetry.io/collector/extension/ballastextension
    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextension v0.50.0
  - gomod: github.com/open-telemetry/opentelemetry-collector-contrib/extension/pprofextension v0.50.0
exporters:	exporters:
  - import: go.opentelemetry.io/collector/exporter/loggingexporter
    gomod: go.opentelemetry.io/collector v0.50.0
  - import: go.opentelemetry.io/collector/exporter/otlpexporter
    gomod: go.opentelemetry.io/collector v0.50.0
  - import: go.opentelemetry.io/collector/exporter/otlphttpexporter
    gomod: go.opentelemetry.io/collector v0.50.0
  # file exporter needed for integration tests to run	  # file exporter needed for integration tests to run
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/exporter/fileexporter v0.37.1"	  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/exporter/fileexporter v0.50.0"
processors:	processors:
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/filterprocessor v0.37.1"	  - import: go.opentelemetry.io/collector/processor/batchprocessor
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/resourcedetectionprocessor v0.37.1"	    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.37.1"	  - import: go.opentelemetry.io/collector/processor/memorylimiterprocessor
    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/filterprocessor v0.50.0"
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/resourcedetectionprocessor v0.50.0"
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.50.0"
  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.0.0"	  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.0.0"
    path: ./timestampprocessor	    path: ./timestampprocessor
  12  
docs/building.md
@@ -5,18 +5,20 @@ Using the configuration provided by this repository requires a build of OpenTele
* [the `hostmetrics` receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/hostmetricsreceiver#readme): Lives in the contrib repository	* [the `hostmetrics` receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/hostmetricsreceiver#readme): Lives in the contrib repository
* [the `resourcedetection` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor): Lives in the contrib repository	* [the `resourcedetection` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor): Lives in the contrib repository
* [the `metricstransform` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/metricstransformprocessor#readme): Lives in the contrib repository	* [the `metricstransform` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/metricstransformprocessor#readme): Lives in the contrib repository
* [the `healthcheck` extension](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension#readme): Lives in the contrib repository
* [the `timestamp` processor](../timestampprocessor): Lives in this repository	* [the `timestamp` processor](../timestampprocessor): Lives in this repository


A barebones build that contains *only* these plugins is provided in [the "releases" section of this repository](https://github.com/honeycombio/opentelemetry-collector-configs/releases). If you need a different build, you can use [`opentelemetry-collector-builder`](https://github.com/open-telemetry/opentelemetry-collector-builder) to create it - [documentation for this tool can be found here](https://github.com/open-telemetry/opentelemetry-collector-builder#opentelemetry-collector-builder).	A barebones build that contains *only* these plugins is provided in [the "releases" section of this repository](https://github.com/honeycombio/opentelemetry-collector-configs/releases). If you need a different build, you can use the OpenTelemetry Collector Builder [`ocb`](https://github.com/open-telemetry/opentelemetry-collector/releases) to create it - [documentation for this tool can be found here](https://github.com/open-telemetry/opentelemetry-collector/blob/main/cmd/builder/README.md).


Here is a configuration for opentelemetry-collector-builder that will include the `metricstransform` processor and the `timestamp` processor:	Here is a configuration for the builder that will include the `metricstransform` processor, the `filter` processor, and the `timestamp` processor:


```yaml	```yaml
dist:	dist:
  module: github.com/open-telemetry/opentelemetry-collector-builder	  module: github.com/open-telemetry/opentelemetry-collector-builder
  include_core: true	  include_core: true
  otelcol_version: "0.30.0"	  otelcol_version: "0.50.0"
processors:	processors:
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.30.0"	  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/filterprocessor v0.50.0"
  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.1.0"	  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.50.0"
  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.4.0"
```	```
  4  
test/test.sh
@@ -48,7 +48,7 @@ echo "success!"
# assert that metric names are correct	# assert that metric names are correct
found_names=$(jq -r '	found_names=$(jq -r '
  .resourceMetrics[] |	  .resourceMetrics[] |
  .instrumentationLibraryMetrics[] |	  .scopeMetrics[] |
  .metrics[] |	  .metrics[] |
  .name' < $output_file)	  .name' < $output_file)
echo "checking that we only generated metrics with allowed names..."	echo "checking that we only generated metrics with allowed names..."
@@ -71,7 +71,7 @@ fi


unique_timestamps=$(jq -sr '	unique_timestamps=$(jq -sr '
    .[0].resourceMetrics[] |	    .[0].resourceMetrics[] |
    .instrumentationLibraryMetrics[] |	    .scopeMetrics[] |
    .metrics[] |	    .metrics[] |
    .sum // .gauge // .summary // .histogram |	    .sum // .gauge // .summary // .histogram |
    .dataPoints[] |	    .dataPoints[] |
 14  
timestampprocessor/CHANGELOG.md
@@ -1,3 +1,17 @@
# Release v1.4.0 (2022-05-10)

### Changed

- updated CI base container from `honeycombio/cci-go-yq:0.0.4` to `honeycombio/cci-go-yq:0.0.5`
- build now requires `ocb` instead of `opentelemetry-collector-builder`

### Dependencies

- Bump github.com/stretchr/testify from v1.7.0 to v1.7.1
- Bump go.opentelemetry.io/collector from v0.37.0 to v0.50.0
- Bump go.opentelemetry.io/collector/model from 0.37.0 to v0.50.0
- Bump to go.uber.org/zap from v1.19.1 to v1.21.0

# Release v1.3.0 (2021-10-25)	# Release v1.3.0 (2021-10-25)


### Changed	### Changed
  4  
timestampprocessor/config_test.go
@@ -10,7 +10,7 @@ import (


	"go.opentelemetry.io/collector/component/componenttest"		"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/config"		"go.opentelemetry.io/collector/config"
	"go.opentelemetry.io/collector/config/configtest"		"go.opentelemetry.io/collector/service/servicetest"
)	)


// TestLoadingConfigRegexp tests loading testdata/config_strict.yaml	// TestLoadingConfigRegexp tests loading testdata/config_strict.yaml
@@ -20,7 +20,7 @@ func TestLoadingConfigStrict(t *testing.T) {


	factory := NewFactory()		factory := NewFactory()
	factories.Processors[typeStr] = factory		factories.Processors[typeStr] = factory
	cfg, err := configtest.LoadConfigAndValidate(path.Join(".", "testdata", "config.yaml"), factories)		cfg, err := servicetest.LoadConfigAndValidate(path.Join(".", "testdata", "config.yaml"), factories)


	assert.Nil(t, err)		assert.Nil(t, err)
	require.NotNil(t, cfg)		require.NotNil(t, cfg)
  4  
timestampprocessor/factory.go
@@ -19,10 +19,10 @@ var processorCapabilities = consumer.Capabilities{MutatesData: true}


// NewFactory returns a new factory for the Filter processor.	// NewFactory returns a new factory for the Filter processor.
func NewFactory() component.ProcessorFactory {	func NewFactory() component.ProcessorFactory {
	return processorhelper.NewFactory(		return component.NewProcessorFactory(
		typeStr,			typeStr,
		createDefaultConfig,			createDefaultConfig,
		processorhelper.WithMetrics(createMetricsProcessor))			component.WithMetricsProcessor(createMetricsProcessor))
}	}


func createDefaultConfig() config.Processor {	func createDefaultConfig() config.Processor {
  3  
timestampprocessor/factory_test.go
@@ -12,6 +12,7 @@ import (
	"go.opentelemetry.io/collector/config"		"go.opentelemetry.io/collector/config"
	"go.opentelemetry.io/collector/config/configtest"		"go.opentelemetry.io/collector/config/configtest"
	"go.opentelemetry.io/collector/consumer/consumertest"		"go.opentelemetry.io/collector/consumer/consumertest"
	"go.opentelemetry.io/collector/service/servicetest"
)	)


func TestType(t *testing.T) {	func TestType(t *testing.T) {
@@ -50,7 +51,7 @@ func TestCreateProcessors(t *testing.T) {


		factory := NewFactory()			factory := NewFactory()
		factories.Processors[typeStr] = factory			factories.Processors[typeStr] = factory
		cfg, err := configtest.LoadConfigAndValidate(path.Join(".", "testdata", test.configName), factories)			cfg, err := servicetest.LoadConfigAndValidate(path.Join(".", "testdata", test.configName), factories)
		assert.Nil(t, err)			assert.Nil(t, err)


		for name, cfg := range cfg.Processors {			for name, cfg := range cfg.Processors {
 38  
timestampprocessor/go.mod
@@ -1,15 +1,37 @@
module github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor	module github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor


go 1.16	go 1.17


require (	require (
	github.com/stretchr/testify v1.7.1
	go.opentelemetry.io/collector v0.50.0
	go.opentelemetry.io/collector/model v0.50.0
	go.uber.org/zap v1.21.0
)

require (
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/fsnotify/fsnotify v1.5.1 // indirect		github.com/fsnotify/fsnotify v1.5.1 // indirect
	github.com/stretchr/testify v1.7.0		github.com/gogo/protobuf v1.3.2 // indirect
	go.opentelemetry.io/collector v0.37.0		github.com/golang/protobuf v1.5.2 // indirect
	go.opentelemetry.io/collector/model v0.37.0		github.com/knadh/koanf v1.4.1 // indirect
	go.uber.org/zap v1.19.1		github.com/mitchellh/copystructure v1.2.0 // indirect
	golang.org/x/net v0.0.0-20210825183410-e898025ed96a // indirect		github.com/mitchellh/mapstructure v1.5.0 // indirect
	golang.org/x/sys v0.0.0-20210823070655-63515b42dcdf // indirect		github.com/mitchellh/reflectwalk v1.0.2 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	go.opencensus.io v0.23.0 // indirect
	go.opentelemetry.io/collector/pdata v0.50.0 // indirect
	go.opentelemetry.io/otel v1.6.3 // indirect
	go.opentelemetry.io/otel/metric v0.29.0 // indirect
	go.opentelemetry.io/otel/trace v1.6.3 // indirect
	go.uber.org/atomic v1.9.0 // indirect
	go.uber.org/multierr v1.8.0 // indirect
	golang.org/x/net v0.0.0-20220225172249-27dd8689420f // indirect
	golang.org/x/sys v0.0.0-20220128215802-99c3d69c2c27 // indirect
	golang.org/x/text v0.3.7 // indirect		golang.org/x/text v0.3.7 // indirect
	google.golang.org/genproto v0.0.0-20210830153122-0bac4d21c8ea // indirect		google.golang.org/genproto v0.0.0-20211208223120-3a66f561d7aa // indirect
	google.golang.org/grpc v1.46.0 // indirect
	google.golang.org/protobuf v1.28.0 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b // indirect
)	)
 615  
timestampprocessor/go.sum
Large diffs are not rendered by default.

  4  
timestampprocessor/timestamp_processor.go
@@ -25,8 +25,8 @@ func (fmp *filterMetricProcessor) processMetrics(_ context.Context, src pdata.Me
	// set the timestamps to the nearest time unit		// set the timestamps to the nearest time unit
	for i := 0; i < src.ResourceMetrics().Len(); i++ {		for i := 0; i < src.ResourceMetrics().Len(); i++ {
		rm := src.ResourceMetrics().At(i)			rm := src.ResourceMetrics().At(i)
		for j := 0; j < rm.InstrumentationLibraryMetrics().Len(); j++ {			for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			ms := rm.InstrumentationLibraryMetrics().At(j)				ms := rm.ScopeMetrics().At(j)
			for k := 0; k < ms.Metrics().Len(); k++ {				for k := 0; k < ms.Metrics().Len(); k++ {
				m := ms.Metrics().At(k)					m := ms.Metrics().At(k)


  8  
timestampprocessor/timestamp_processor_test.go
@@ -197,7 +197,7 @@ func testResourceMetrics(metricType string, dataPoints []testDataPoint) pdata.Me


	for _, namedDataPoint := range dataPoints {		for _, namedDataPoint := range dataPoints {
		rm := md.ResourceMetrics().AppendEmpty()			rm := md.ResourceMetrics().AppendEmpty()
		ms := rm.InstrumentationLibraryMetrics().AppendEmpty().Metrics()			ms := rm.ScopeMetrics().AppendEmpty().Metrics()
		m := ms.AppendEmpty()			m := ms.AppendEmpty()
		m.SetName(namedDataPoint.Name)			m.SetName(namedDataPoint.Name)


@@ -240,7 +240,7 @@ func UnwrapMetricsList(wrappedMetricsList []pdata.Metrics) (metricObjects []pdat
		for i := 0; i < resourceMetrics.Len(); i++ {			for i := 0; i < resourceMetrics.Len(); i++ {


			resourceMetric := resourceMetrics.At(i)				resourceMetric := resourceMetrics.At(i)
			instrumentationLibraryMetrics := resourceMetric.InstrumentationLibraryMetrics()				instrumentationLibraryMetrics := resourceMetric.ScopeMetrics()
			for j := 0; j < instrumentationLibraryMetrics.Len(); j++ {				for j := 0; j < instrumentationLibraryMetrics.Len(); j++ {


				instrumentationLibraryMetric := instrumentationLibraryMetrics.At(j)					instrumentationLibraryMetric := instrumentationLibraryMetrics.At(j)
@@ -297,7 +297,7 @@ func TestNilILM(t *testing.T) {
	metrics := pdata.NewMetrics()		metrics := pdata.NewMetrics()
	rms := metrics.ResourceMetrics()		rms := metrics.ResourceMetrics()
	rm := rms.AppendEmpty()		rm := rms.AppendEmpty()
	ilms := rm.InstrumentationLibraryMetrics()		ilms := rm.ScopeMetrics()
	ilms.AppendEmpty()		ilms.AppendEmpty()
	requireNotPanics(t, metrics)		requireNotPanics(t, metrics)
}	}
@@ -306,7 +306,7 @@ func TestNilMetric(t *testing.T) {
	metrics := pdata.NewMetrics()		metrics := pdata.NewMetrics()
	rms := metrics.ResourceMetrics()		rms := metrics.ResourceMetrics()
	rm := rms.AppendEmpty()		rm := rms.AppendEmpty()
	ilms := rm.InstrumentationLibraryMetrics()		ilms := rm.ScopeMetrics()
	ilm := ilms.AppendEmpty()		ilm := ilms.AppendEmpty()
	ms := ilm.Metrics()		ms := ilm.Metrics()
	ms.AppendEmpty()		ms.AppendEmpty()
0 comments on commit 9866284
@zakwarlord7
 Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
honeycombio
/
opentelemetry-collector-configs
Public
Fork your own copy of honeycombio/opentelemetry-collector-configs
Code
Issues
2
Pull requests
2
Actions
Security
Insights
Update OTel Collector to 0.50.0 (#14)
* timestampprocesor: bump OTel Collector to 0.50.0 and fix breaking changes
  * Notably InstrumentationLibraryMetrics -> ScopeMetrics
* Upgrade Collector to 0.50.0
  * opentelemetry-collector-builder is now otc and released in a different location
* circle: update cci-go-yq to 0.0.5
 main (#14)
 v1.6.0 
…
 datadogreceiver/v0.1.0
@jharley
jharley committed on May 10, 2022 
1 parent 64c6df8 commit 9866284df32476ac5f87de9400d05fffada0f48c
Show file tree Hide file tree
Showing 15 changed files with 188 additions and 599 deletions.
  2  
.circleci/config.yml
version: 2.1	version: 2.1
jobs:	jobs:
  build:	  build:
    working_directory: ~/repo	    working_directory: ~/repo
    docker:	    docker:
      - image: honeycombio/cci-go-yq:0.0.4	      - image: honeycombio/cci-go-yq:0.0.5
    steps:	    steps:
      - checkout	      - checkout
      - restore_cache:	      - restore_cache:
          keys:	          keys:
            - builder-config-{{ checksum "builder-config.yaml" }}	            - builder-config-{{ checksum "builder-config.yaml" }}
      - run:	      - run:
          name: Run tests	          name: Run tests
          command: make test	          command: make test
      - run:	      - run:
          name: Create artifacts	          name: Create artifacts
          command: |	          command: |
            mkdir -p /tmp/images;	            mkdir -p /tmp/images;
            cp build/otelcol_hny_$(go env GOOS)_$(go env GOARCH) /tmp/images;	            cp build/otelcol_hny_$(go env GOOS)_$(go env GOARCH) /tmp/images;
      - save_cache:	      - save_cache:
          key: builder-config-{{ checksum "builder-config.yaml" }}	          key: builder-config-{{ checksum "builder-config.yaml" }}
          paths: build	          paths: build
      - store_artifacts:	      - store_artifacts:
          path: /tmp/images	          path: /tmp/images
  27  
.circleci/images/Dockerfile
FROM cimg/go:1.17	FROM cimg/go:1.17


ENV PYENV_ROOT=/home/circleci/.pyenv \	ENV PYENV_ROOT=/home/circleci/.pyenv \
	PATH=/home/circleci/.pyenv/shims:/home/circleci/.pyenv/bin:/home/circleci/.poetry/bin:$PATH \		PATH=/home/circleci/.pyenv/shims:/home/circleci/.pyenv/bin:/home/circleci/.poetry/bin:$PATH \
	OTC_BUILDER_VERSON=0.37.0		OTC_BUILDER_VERSION=0.50.0


RUN sudo apt-get update && \	RUN sudo apt-get update -qq && \
	sudo apt-get install -y \		sudo apt-get install -y \
		python \		python \
		libbz2-dev \		libbz2-dev \
		libreadline-dev \		libreadline-dev \
		libssl-dev \		libssl-dev \
		python-openssl && \		python-openssl && \
	curl https://pyenv.run | bash && \		curl https://pyenv.run | bash && \
	sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*		sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


RUN pyenv install 3.9.6 && pyenv global 3.9.6	RUN pyenv install 3.9.12 && pyenv global 3.9.12


RUN pip3 install yq	RUN pip3 install yq


RUN mkdir /home/circleci/bin && \	RUN export GOARCH=$(go env GOARCH) && export GOOS=$(go env GOOS) && \
	wget https://github.com/open-telemetry/opentelemetry-collector-builder/releases/download/v${OTC_BUILDER_VERSON}/opentelemetry-collector-builder_${OTC_BUILDER_VERSON}_linux_amd64 \		mkdir /home/circleci/bin && \
		-O /home/circleci/bin/opentelemetry-collector-builder && \		curl -sLo /home/circleci/bin/ocb \
	sudo chmod u+x /home/circleci/bin/opentelemetry-collector-builder		"https://github.com/open-telemetry/opentelemetry-collector/releases/download/v${OTC_BUILDER_VERSION}/ocb_${OTC_BUILDER_VERSION}_${GOOS}_${GOARCH}" && \
	chmod u+x /home/circleci/bin/ocb


RUN python --version && pip --version && yq --version && opentelemetry-collector-builder version	RUN python --version && pip --version && yq --version && ocb version
  2  
Makefile
VERSION?=1.0.0	VERSION?=1.0.0
GOOS=$(shell go env GOOS)	GOOS=$(shell go env GOOS)
GOARCH=$(shell go env GOARCH)	GOARCH=$(shell go env GOARCH)
.PHONY: all	.PHONY: all
all: config collector-bin collector-dist	all: config collector-bin collector-dist
.PHONY: config	.PHONY: config
config: artifacts/honeycomb-metrics-config.yaml	config: artifacts/honeycomb-metrics-config.yaml
.PHONY: collector-bin	.PHONY: collector-bin
collector-bin: build/otelcol_hny_darwin_amd64 build/otelcol_hny_darwin_arm64 build/otelcol_hny_linux_amd64 build/otelcol_hny_linux_arm64 build/otelcol_hny_windows_amd64.exe	collector-bin: build/otelcol_hny_darwin_amd64 build/otelcol_hny_darwin_arm64 build/otelcol_hny_linux_amd64 build/otelcol_hny_linux_arm64 build/otelcol_hny_windows_amd64.exe
.PHONY: collector-dist	.PHONY: collector-dist
collector-dist: dist/otel-hny-collector_$(VERSION)_amd64.deb dist/otel-hny-collector_$(VERSION)_arm64.deb dist/otel-hny-collector_$(VERSION)_x86_64.rpm dist/otel-hny-collector_$(VERSION)_arm64.rpm 	collector-dist: dist/otel-hny-collector_$(VERSION)_amd64.deb dist/otel-hny-collector_$(VERSION)_arm64.deb dist/otel-hny-collector_$(VERSION)_x86_64.rpm dist/otel-hny-collector_$(VERSION)_arm64.rpm 
.PHONY: release	.PHONY: release
release:	release:
	$(MAKE) clean		$(MAKE) clean
	$(MAKE) test		$(MAKE) test
	$(MAKE) artifacts/honeycomb-metrics-config.yaml		$(MAKE) artifacts/honeycomb-metrics-config.yaml
	$(MAKE) collector-bin		$(MAKE) collector-bin
	$(MAKE) collector-dist		$(MAKE) collector-dist
	cp build/otelcol_hny_* dist		cp build/otelcol_hny_* dist
	cp artifacts/honeycomb-metrics-config.yaml dist		cp artifacts/honeycomb-metrics-config.yaml dist
	(cd dist && shasum -a 256 * > checksums.txt)		(cd dist && shasum -a 256 * > checksums.txt)
.PHONY: test	.PHONY: test
test: go_test integration_test	test: go_test integration_test
.PHONY: integration_test	.PHONY: integration_test
integration_test: test/test.sh build/otelcol_hny_$(GOOS)_$(GOARCH) artifacts/honeycomb-metrics-config.yaml	integration_test: test/test.sh build/otelcol_hny_$(GOOS)_$(GOARCH) artifacts/honeycomb-metrics-config.yaml
	./test/test.sh		./test/test.sh
.PHONY: go_test	.PHONY: go_test
go_test:	go_test:
	(cd ./timestampprocessor && go test .)		(cd ./timestampprocessor && go test .)
# generate a configuration file for otel-collector that results in a favorable repackaging ratio	# generate a configuration file for otel-collector that results in a favorable repackaging ratio
artifacts/honeycomb-metrics-config.yaml: config-generator.jq vendor-fixtures/hostmetrics-receiver-metadata.yaml	artifacts/honeycomb-metrics-config.yaml: config-generator.jq vendor-fixtures/hostmetrics-receiver-metadata.yaml
	mkdir -p ./artifacts		mkdir -p ./artifacts
	yq -y -f ./config-generator.jq < ./vendor-fixtures/hostmetrics-receiver-metadata.yaml > ./artifacts/honeycomb-metrics-config.yaml		yq -y -f ./config-generator.jq < ./vendor-fixtures/hostmetrics-receiver-metadata.yaml > ./artifacts/honeycomb-metrics-config.yaml
# copy hostmetrics metadata yaml file from the OpenTelemetry Collector repository, and prepend a note saying it's vendored	# copy hostmetrics metadata yaml file from the OpenTelemetry Collector repository, and prepend a note saying it's vendored
vendor-fixtures/hostmetrics-receiver-metadata.yaml:	vendor-fixtures/hostmetrics-receiver-metadata.yaml:
	REMOTE_PATH='https://raw.githubusercontent.com/open-telemetry/opentelemetry-collector-contrib/141da3a5c4a1bf1570372e2890af383dd833167b/receiver/hostmetricsreceiver/metadata.yaml'; \		REMOTE_PATH='https://raw.githubusercontent.com/open-telemetry/opentelemetry-collector-contrib/141da3a5c4a1bf1570372e2890af383dd833167b/receiver/hostmetricsreceiver/metadata.yaml'; \
	curl $$REMOTE_PATH | sed "1s|^|# DO NOT EDIT! This file is vendored from $${REMOTE_PATH}"$$'\\\n\\\n|' > vendor-fixtures/hostmetrics-receiver-metadata.yaml		curl $$REMOTE_PATH | sed "1s|^|# DO NOT EDIT! This file is vendored from $${REMOTE_PATH}"$$'\\\n\\\n|' > vendor-fixtures/hostmetrics-receiver-metadata.yaml
build/otelcol_hny_darwin_amd64:	build/otelcol_hny_darwin_amd64:
	GOOS=darwin GOARCH=amd64 $(MAKE) build-binary-internal		GOOS=darwin GOARCH=amd64 $(MAKE) build-binary-internal
build/otelcol_hny_darwin_arm64:	build/otelcol_hny_darwin_arm64:
	GOOS=darwin GOARCH=arm64 $(MAKE) build-binary-internal		GOOS=darwin GOARCH=arm64 $(MAKE) build-binary-internal
build/otelcol_hny_linux_amd64:	build/otelcol_hny_linux_amd64:
	GOOS=linux GOARCH=amd64 $(MAKE) build-binary-internal		GOOS=linux GOARCH=amd64 $(MAKE) build-binary-internal
build/otelcol_hny_linux_arm64:	build/otelcol_hny_linux_arm64:
	GOOS=linux GOARCH=arm64 $(MAKE) build-binary-internal		GOOS=linux GOARCH=arm64 $(MAKE) build-binary-internal
build/otelcol_hny_windows_amd64.exe:	build/otelcol_hny_windows_amd64.exe:
	GOOS=windows GOARCH=amd64 EXTENSION=.exe $(MAKE) build-binary-internal		GOOS=windows GOARCH=amd64 EXTENSION=.exe $(MAKE) build-binary-internal


.PHONY: build-binary-internal	.PHONY: build-binary-internal
build-binary-internal: builder-config.yaml	build-binary-internal: builder-config.yaml
	opentelemetry-collector-builder --output-path=build --name=otelcol_hny_$(GOOS)_$(GOARCH)$(EXTENSION) --version=$(VERSION) --config=builder-config.yaml		ocb --output-path=build --name=otelcol_hny_$(GOOS)_$(GOARCH)$(EXTENSION) --version=$(VERSION) --config=builder-config.yaml


dist/otel-hny-collector_%_amd64.deb: build/otelcol_hny_linux_amd64	dist/otel-hny-collector_%_amd64.deb: build/otelcol_hny_linux_amd64
	PACKAGE=deb ARCH=amd64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=deb ARCH=amd64 VERSION=$* $(MAKE) build-package-internal
dist/otel-hny-collector_%_arm64.deb: build/otelcol_hny_linux_arm64	dist/otel-hny-collector_%_arm64.deb: build/otelcol_hny_linux_arm64
	PACKAGE=deb ARCH=arm64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=deb ARCH=arm64 VERSION=$* $(MAKE) build-package-internal
dist/otel-hny-collector_%_x86_64.rpm: build/otelcol_hny_linux_amd64	dist/otel-hny-collector_%_x86_64.rpm: build/otelcol_hny_linux_amd64
	PACKAGE=rpm ARCH=amd64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=rpm ARCH=amd64 VERSION=$* $(MAKE) build-package-internal
dist/otel-hny-collector_%_arm64.rpm: build/otelcol_hny_linux_arm64	dist/otel-hny-collector_%_arm64.rpm: build/otelcol_hny_linux_arm64
	PACKAGE=rpm ARCH=arm64 VERSION=$* $(MAKE) build-package-internal		PACKAGE=rpm ARCH=arm64 VERSION=$* $(MAKE) build-package-internal
.PHONY: build-package-internal	.PHONY: build-package-internal
build-package-internal:	build-package-internal:
	docker build -t otelcol-fpm packaging/fpm		docker build -t otelcol-fpm packaging/fpm
	docker run --rm -v $(CURDIR):/repo -e VERSION=$(VERSION) -e ARCH=$(ARCH) -e PACKAGE=$(PACKAGE) otelcol-fpm		docker run --rm -v $(CURDIR):/repo -e VERSION=$(VERSION) -e ARCH=$(ARCH) -e PACKAGE=$(PACKAGE) otelcol-fpm
.PHONY: clean	.PHONY: clean
clean:	clean:
	rm -f build/* compact-config.yaml test/tmp-* dist/* artifacts/*		rm -f build/* compact-config.yaml test/tmp-* dist/* artifacts/*
  9  
README.md
@@ -25,7 +25,7 @@ If you'd like to build a version of the configuration yourself, clone this repo
- [go](https://golang.org/dl/)	- [go](https://golang.org/dl/)
- [jq](https://stedolan.github.io/jq/download/)	- [jq](https://stedolan.github.io/jq/download/)
- [yq](https://kislyuk.github.io/yq/#installation)	- [yq](https://kislyuk.github.io/yq/#installation)
- [opentelemetry-collector-builder](https://github.com/open-telemetry/opentelemetry-collector-builder)	- [ocb](https://github.com/open-telemetry/opentelemetry-collector-releases) built from the `opentelemetry-collector-releases` project


Watch updates and rebuild on changes using [`entr`](http://eradman.com/entrproject/) with `ls | entr make`.	Watch updates and rebuild on changes using [`entr`](http://eradman.com/entrproject/) with `ls | entr make`.


@@ -34,9 +34,10 @@ Simulate what's happening in CircleCI with: `docker run -it --mount=type=bind,so
## Releasing	## Releasing


Aside from the dependencies above you will also need the following:	Aside from the dependencies above you will also need the following:
* [docker](https://docs.docker.com/get-docker/)	
* [fpm](https://fpm.readthedocs.io/en/v1.13.1/installing.html)	- [docker](https://docs.docker.com/get-docker/)
* [gh](https://github.com/cli/cli#installation)	- [fpm](https://fpm.readthedocs.io/en/v1.13.1/installing.html)
- [gh](https://github.com/cli/cli#installation)


Make sure you have committed all code and are on an appropriate branch, then run:	Make sure you have committed all code and are on an appropriate branch, then run:


```bash	```bash
./release.sh	./release.sh
```	```
 41  
builder-config.yaml
@@ -1,19 +1,36 @@
dist:	dist:
  module: github.com/open-telemetry/opentelemetry-collector-builder # the module name for the new distribution, following Go mod conventions. Optional, but recommended.	  module: github.com/honeycombio/opentelemetry-collector-configs
  description: "OpenTelemetry Collector for Honeycomb" # a long name for the application. Optional.	  description: "OpenTelemetry Collector for Honeycomb"
  include_core: true # whether the core components should be included in the distribution. Optional.	  otelcol_version: "0.50.0"
  otelcol_version: "0.37.0" # the OpenTelemetry Collector version to use as base for the distribution. Optional.	  output_path: build
  output_path: build # the path to write the output (sources and binary). Optional.	
  go: "/usr/bin/go" # which Go binary to use to compile the generated sources. Optional.	
receivers:	receivers:
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/hostmetricsreceiver v0.37.1"	  - import: go.opentelemetry.io/collector/receiver/otlpreceiver
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/kubeletstatsreceiver v0.37.1"	    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/hostmetricsreceiver v0.50.0"
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/receiver/kubeletstatsreceiver v0.50.0"
extensions:
  - import: go.opentelemetry.io/collector/extension/zpagesextension
    gomod: go.opentelemetry.io/collector v0.50.0
  - import: go.opentelemetry.io/collector/extension/ballastextension
    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextension v0.50.0
  - gomod: github.com/open-telemetry/opentelemetry-collector-contrib/extension/pprofextension v0.50.0
exporters:	exporters:
  - import: go.opentelemetry.io/collector/exporter/loggingexporter
    gomod: go.opentelemetry.io/collector v0.50.0
  - import: go.opentelemetry.io/collector/exporter/otlpexporter
    gomod: go.opentelemetry.io/collector v0.50.0
  - import: go.opentelemetry.io/collector/exporter/otlphttpexporter
    gomod: go.opentelemetry.io/collector v0.50.0
  # file exporter needed for integration tests to run	  # file exporter needed for integration tests to run
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/exporter/fileexporter v0.37.1"	  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/exporter/fileexporter v0.50.0"
processors:	processors:
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/filterprocessor v0.37.1"	  - import: go.opentelemetry.io/collector/processor/batchprocessor
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/resourcedetectionprocessor v0.37.1"	    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.37.1"	  - import: go.opentelemetry.io/collector/processor/memorylimiterprocessor
    gomod: go.opentelemetry.io/collector v0.50.0
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/filterprocessor v0.50.0"
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/resourcedetectionprocessor v0.50.0"
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.50.0"
  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.0.0"	  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.0.0"
    path: ./timestampprocessor	    path: ./timestampprocessor
  12  
docs/building.md
@@ -5,18 +5,20 @@ Using the configuration provided by this repository requires a build of OpenTele
* [the `hostmetrics` receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/hostmetricsreceiver#readme): Lives in the contrib repository	* [the `hostmetrics` receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/hostmetricsreceiver#readme): Lives in the contrib repository
* [the `resourcedetection` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor): Lives in the contrib repository	* [the `resourcedetection` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor): Lives in the contrib repository
* [the `metricstransform` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/metricstransformprocessor#readme): Lives in the contrib repository	* [the `metricstransform` processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/metricstransformprocessor#readme): Lives in the contrib repository
* [the `healthcheck` extension](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension#readme): Lives in the contrib repository
* [the `timestamp` processor](../timestampprocessor): Lives in this repository	* [the `timestamp` processor](../timestampprocessor): Lives in this repository


A barebones build that contains *only* these plugins is provided in [the "releases" section of this repository](https://github.com/honeycombio/opentelemetry-collector-configs/releases). If you need a different build, you can use [`opentelemetry-collector-builder`](https://github.com/open-telemetry/opentelemetry-collector-builder) to create it - [documentation for this tool can be found here](https://github.com/open-telemetry/opentelemetry-collector-builder#opentelemetry-collector-builder).	A barebones build that contains *only* these plugins is provided in [the "releases" section of this repository](https://github.com/honeycombio/opentelemetry-collector-configs/releases). If you need a different build, you can use the OpenTelemetry Collector Builder [`ocb`](https://github.com/open-telemetry/opentelemetry-collector/releases) to create it - [documentation for this tool can be found here](https://github.com/open-telemetry/opentelemetry-collector/blob/main/cmd/builder/README.md).


Here is a configuration for opentelemetry-collector-builder that will include the `metricstransform` processor and the `timestamp` processor:	Here is a configuration for the builder that will include the `metricstransform` processor, the `filter` processor, and the `timestamp` processor:


```yaml	```yaml
dist:	dist:
  module: github.com/open-telemetry/opentelemetry-collector-builder	  module: github.com/open-telemetry/opentelemetry-collector-builder
  include_core: true	  include_core: true
  otelcol_version: "0.30.0"	  otelcol_version: "0.50.0"
processors:	processors:
  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.30.0"	  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/filterprocessor v0.50.0"
  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.1.0"	  - gomod: "github.com/open-telemetry/opentelemetry-collector-contrib/processor/metricstransformprocessor v0.50.0"
  - gomod: "github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor v0.4.0"
```	```
  4  
test/test.sh
@@ -48,7 +48,7 @@ echo "success!"
# assert that metric names are correct	# assert that metric names are correct
found_names=$(jq -r '	found_names=$(jq -r '
  .resourceMetrics[] |	  .resourceMetrics[] |
  .instrumentationLibraryMetrics[] |	  .scopeMetrics[] |
  .metrics[] |	  .metrics[] |
  .name' < $output_file)	  .name' < $output_file)
echo "checking that we only generated metrics with allowed names..."	echo "checking that we only generated metrics with allowed names..."
@@ -71,7 +71,7 @@ fi


unique_timestamps=$(jq -sr '	unique_timestamps=$(jq -sr '
    .[0].resourceMetrics[] |	    .[0].resourceMetrics[] |
    .instrumentationLibraryMetrics[] |	    .scopeMetrics[] |
    .metrics[] |	    .metrics[] |
    .sum // .gauge // .summary // .histogram |	    .sum // .gauge // .summary // .histogram |
    .dataPoints[] |	    .dataPoints[] |
 14  
timestampprocessor/CHANGELOG.md
@@ -1,3 +1,17 @@
# Release v1.4.0 (2022-05-10)

### Changed

- updated CI base container from `honeycombio/cci-go-yq:0.0.4` to `honeycombio/cci-go-yq:0.0.5`
- build now requires `ocb` instead of `opentelemetry-collector-builder`

### Dependencies

- Bump github.com/stretchr/testify from v1.7.0 to v1.7.1
- Bump go.opentelemetry.io/collector from v0.37.0 to v0.50.0
- Bump go.opentelemetry.io/collector/model from 0.37.0 to v0.50.0
- Bump to go.uber.org/zap from v1.19.1 to v1.21.0

# Release v1.3.0 (2021-10-25)	# Release v1.3.0 (2021-10-25)


### Changed	### Changed
  4  
timestampprocessor/config_test.go
@@ -10,7 +10,7 @@ import (


	"go.opentelemetry.io/collector/component/componenttest"		"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/config"		"go.opentelemetry.io/collector/config"
	"go.opentelemetry.io/collector/config/configtest"		"go.opentelemetry.io/collector/service/servicetest"
)	)


// TestLoadingConfigRegexp tests loading testdata/config_strict.yaml	// TestLoadingConfigRegexp tests loading testdata/config_strict.yaml
@@ -20,7 +20,7 @@ func TestLoadingConfigStrict(t *testing.T) {


	factory := NewFactory()		factory := NewFactory()
	factories.Processors[typeStr] = factory		factories.Processors[typeStr] = factory
	cfg, err := configtest.LoadConfigAndValidate(path.Join(".", "testdata", "config.yaml"), factories)		cfg, err := servicetest.LoadConfigAndValidate(path.Join(".", "testdata", "config.yaml"), factories)


	assert.Nil(t, err)		assert.Nil(t, err)
	require.NotNil(t, cfg)		require.NotNil(t, cfg)
  4  
timestampprocessor/factory.go
@@ -19,10 +19,10 @@ var processorCapabilities = consumer.Capabilities{MutatesData: true}


// NewFactory returns a new factory for the Filter processor.	// NewFactory returns a new factory for the Filter processor.
func NewFactory() component.ProcessorFactory {	func NewFactory() component.ProcessorFactory {
	return processorhelper.NewFactory(		return component.NewProcessorFactory(
		typeStr,			typeStr,
		createDefaultConfig,			createDefaultConfig,
		processorhelper.WithMetrics(createMetricsProcessor))			component.WithMetricsProcessor(createMetricsProcessor))
}	}


func createDefaultConfig() config.Processor {	func createDefaultConfig() config.Processor {
  3  
timestampprocessor/factory_test.go
@@ -12,6 +12,7 @@ import (
	"go.opentelemetry.io/collector/config"		"go.opentelemetry.io/collector/config"
	"go.opentelemetry.io/collector/config/configtest"		"go.opentelemetry.io/collector/config/configtest"
	"go.opentelemetry.io/collector/consumer/consumertest"		"go.opentelemetry.io/collector/consumer/consumertest"
	"go.opentelemetry.io/collector/service/servicetest"
)	)


func TestType(t *testing.T) {	func TestType(t *testing.T) {
@@ -50,7 +51,7 @@ func TestCreateProcessors(t *testing.T) {


		factory := NewFactory()			factory := NewFactory()
		factories.Processors[typeStr] = factory			factories.Processors[typeStr] = factory
		cfg, err := configtest.LoadConfigAndValidate(path.Join(".", "testdata", test.configName), factories)			cfg, err := servicetest.LoadConfigAndValidate(path.Join(".", "testdata", test.configName), factories)
		assert.Nil(t, err)			assert.Nil(t, err)


		for name, cfg := range cfg.Processors {			for name, cfg := range cfg.Processors {
 38  
timestampprocessor/go.mod
@@ -1,15 +1,37 @@
module github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor	module github.com/honeycombio/opentelemetry-collector-configs/timestampprocessor


go 1.16	go 1.17


require (	require (
	github.com/stretchr/testify v1.7.1
	go.opentelemetry.io/collector v0.50.0
	go.opentelemetry.io/collector/model v0.50.0
	go.uber.org/zap v1.21.0
)

require (
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/fsnotify/fsnotify v1.5.1 // indirect		github.com/fsnotify/fsnotify v1.5.1 // indirect
	github.com/stretchr/testify v1.7.0		github.com/gogo/protobuf v1.3.2 // indirect
	go.opentelemetry.io/collector v0.37.0		github.com/golang/protobuf v1.5.2 // indirect
	go.opentelemetry.io/collector/model v0.37.0		github.com/knadh/koanf v1.4.1 // indirect
	go.uber.org/zap v1.19.1		github.com/mitchellh/copystructure v1.2.0 // indirect
	golang.org/x/net v0.0.0-20210825183410-e898025ed96a // indirect		github.com/mitchellh/mapstructure v1.5.0 // indirect
	golang.org/x/sys v0.0.0-20210823070655-63515b42dcdf // indirect		github.com/mitchellh/reflectwalk v1.0.2 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	go.opencensus.io v0.23.0 // indirect
	go.opentelemetry.io/collector/pdata v0.50.0 // indirect
	go.opentelemetry.io/otel v1.6.3 // indirect
	go.opentelemetry.io/otel/metric v0.29.0 // indirect
	go.opentelemetry.io/otel/trace v1.6.3 // indirect
	go.uber.org/atomic v1.9.0 // indirect
	go.uber.org/multierr v1.8.0 // indirect
	golang.org/x/net v0.0.0-20220225172249-27dd8689420f // indirect
	golang.org/x/sys v0.0.0-20220128215802-99c3d69c2c27 // indirect
	golang.org/x/text v0.3.7 // indirect		golang.org/x/text v0.3.7 // indirect
	google.golang.org/genproto v0.0.0-20210830153122-0bac4d21c8ea // indirect		google.golang.org/genproto v0.0.0-20211208223120-3a66f561d7aa // indirect
	google.golang.org/grpc v1.46.0 // indirect
	google.golang.org/protobuf v1.28.0 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b // indirect
)	)
 615  
timestampprocessor/go.sum
Large diffs are not rendered by default.

  4  
timestampprocessor/timestamp_processor.go
@@ -25,8 +25,8 @@ func (fmp *filterMetricProcessor) processMetrics(_ context.Context, src pdata.Me
	// set the timestamps to the nearest time unit		// set the timestamps to the nearest time unit
	for i := 0; i < src.ResourceMetrics().Len(); i++ {		for i := 0; i < src.ResourceMetrics().Len(); i++ {
		rm := src.ResourceMetrics().At(i)			rm := src.ResourceMetrics().At(i)
		for j := 0; j < rm.InstrumentationLibraryMetrics().Len(); j++ {			for j := 0; j < rm.ScopeMetrics().Len(); j++ {
			ms := rm.InstrumentationLibraryMetrics().At(j)				ms := rm.ScopeMetrics().At(j)
			for k := 0; k < ms.Metrics().Len(); k++ {				for k := 0; k < ms.Metrics().Len(); k++ {
				m := ms.Metrics().At(k)					m := ms.Metrics().At(k)


  8  
timestampprocessor/timestamp_processor_test.go
@@ -197,7 +197,7 @@ func testResourceMetrics(metricType string, dataPoints []testDataPoint) pdata.Me


	for _, namedDataPoint := range dataPoints {		for _, namedDataPoint := range dataPoints {
		rm := md.ResourceMetrics().AppendEmpty()			rm := md.ResourceMetrics().AppendEmpty()
		ms := rm.InstrumentationLibraryMetrics().AppendEmpty().Metrics()			ms := rm.ScopeMetrics().AppendEmpty().Metrics()
		m := ms.AppendEmpty()			m := ms.AppendEmpty()
		m.SetName(namedDataPoint.Name)			m.SetName(namedDataPoint.Name)


@@ -240,7 +240,7 @@ func UnwrapMetricsList(wrappedMetricsList []pdata.Metrics) (metricObjects []pdat
		for i := 0; i < resourceMetrics.Len(); i++ {			for i := 0; i < resourceMetrics.Len(); i++ {


			resourceMetric := resourceMetrics.At(i)				resourceMetric := resourceMetrics.At(i)
			instrumentationLibraryMetrics := resourceMetric.InstrumentationLibraryMetrics()				instrumentationLibraryMetrics := resourceMetric.ScopeMetrics()
			for j := 0; j < instrumentationLibraryMetrics.Len(); j++ {				for j := 0; j < instrumentationLibraryMetrics.Len(); j++ {


				instrumentationLibraryMetric := instrumentationLibraryMetrics.At(j)					instrumentationLibraryMetric := instrumentationLibraryMetrics.At(j)
@@ -297,7 +297,7 @@ func TestNilILM(t *testing.T) {
	metrics := pdata.NewMetrics()		metrics := pdata.NewMetrics()
	rms := metrics.ResourceMetrics()		rms := metrics.ResourceMetrics()
	rm := rms.AppendEmpty()		rm := rms.AppendEmpty()
	ilms := rm.InstrumentationLibraryMetrics()		ilms := rm.ScopeMetrics()
	ilms.AppendEmpty()		ilms.AppendEmpty()
	requireNotPanics(t, metrics)		requireNotPanics(t, metrics)
}	}
@@ -306,7 +306,7 @@ func TestNilMetric(t *testing.T) {
	metrics := pdata.NewMetrics()		metrics := pdata.NewMetrics()
	rms := metrics.ResourceMetrics()		rms := metrics.ResourceMetrics()
	rm := rms.AppendEmpty()		rm := rms.AppendEmpty()
	ilms := rm.InstrumentationLibraryMetrics()		ilms := rm.ScopeMetrics()
	ilm := ilms.AppendEmpty()		ilm := ilms.AppendEmpty()
	ms := ilm.Metrics()		ms := ilm.Metrics()
	ms.AppendEmpty()		ms.AppendEmpty()
0 comments on commit 9866284
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re not receiving notifications from this thread.
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Update OTel Collector to 0.50.0 (#14) · honeycombio/opentelemetry-collector-configs@9866284
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re not receiving notifications from this thread.
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Update OTel Collector to 0.50.0 (#14) · honeycombio/opentelemetry-collector-configs@9866284
