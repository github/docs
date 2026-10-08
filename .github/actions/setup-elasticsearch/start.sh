#!/bin/bash

# Pull the Elasticsearch image and start the es1 container. wait.sh checks readiness.

set -euo pipefail

image="docker.elastic.co/elasticsearch/elasticsearch:$ES_VERSION"

# Pull from Elastic's registry to avoid Docker Hub rate limits.
# A pull is faster than restoring and loading a cached image tarball.
pulled=false
for attempt in 1 2 3; do
  if docker pull "$image"; then
    pulled=true
    break
  fi
  echo "Pull attempt $attempt failed"
  sleep $((attempt * 10))
done
if [ "$pulled" != true ]; then
  echo "Could not pull $image"
  exit 1
fi

# Run a single-node container with settings copied from getong/elasticsearch-action.
docker network create elastic

docker run --network elastic \
  -e 'node.name=es1' \
  -e 'cluster.name=docker-elasticsearch' \
  -e 'cluster.initial_master_nodes=es1' \
  -e 'discovery.seed_hosts=es1' \
  -e 'cluster.routing.allocation.disk.threshold_enabled=false' \
  -e 'bootstrap.memory_lock=true' \
  -e 'ES_JAVA_OPTS=-Xms1g -Xmx1g' \
  -e 'xpack.security.enabled=false' \
  -e 'xpack.license.self_generated.type=basic' \
  --ulimit nofile=65536:65536 \
  --ulimit memlock=-1:-1 \
  --name='es1' \
  -d \
  -p 9200:9200 \
  -p 9300:9300 \
  -e discovery_type=single-node \
  "$image"
