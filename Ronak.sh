FROM debian:latest
LABEL MAINTAINER="https://github.com/RonakDamor/MASTER"

WORKDIR /MASTER/
ADD . /MASTER

RUN apt update && \
    apt full-upgrade -y && \
    apt install -y curl unzip wget && \
    apt install --no-install-recommends -y php && \
    apt clean
CMD ["./MASTER.sh"]
