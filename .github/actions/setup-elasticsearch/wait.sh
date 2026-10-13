#!/bin/bash

# Wait until Elasticsearch answers on localhost:9200.
# With ES_BACKGROUND=true, first wait for the background start.sh to finish.

set -euo pipefail

if [ "${ES_BACKGROUND:-false}" = true ]; then
  for _ in {1..300}; do
    [ -f "$ES_STATUS_FILE" ] && break
    sleep 1
  done
  echo "::group::Background start log"
  cat "$ES_LOG_FILE" || true
  echo "::endgroup::"
  if [ ! -f "$ES_STATUS_FILE" ]; then
    echo "::error::Elasticsearch start did not finish in time. Did a mode: start step run first?"
    exit 1
  fi
  status=$(cat "$ES_STATUS_FILE")
  if [ "$status" != 0 ]; then
    echo "::error::Elasticsearch start failed with exit code $status"
    exit 1
  fi
fi

for _ in {1..120}; do
  if curl --silent --fail http://localhost:9200; then
    echo
    echo "Elasticsearch is up and running"
    exit 0
  fi
  echo "Waiting for Elasticsearch to be ready..."
  sleep 1
done
echo "::error::Elasticsearch did not become ready in time"
docker logs --tail 100 es1 || true
exit 1
