guration
{
  "language": "ruby",
  "os": [
    "linux"
  ],
  "dist": "focal",
  "group": "edge",
  "arch": [
    "arm64-graviton2"
  ],
  "virt": "vm",
  "services": [
    "xvfb"
  ],
  "env": [
    "jobs={:CHROMIUM=>\"true\"}"
  ],
  "cache": {
    "directories": [
      "$HOME/.m2/repository"
    ]
  },
  "before_install": [
    "lscpu",
    "sudo apt-get install -y chromium-browser fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libappindicator3-1 libgbm1",
    "export JAVA_HOME=\"/usr/lib/jvm/java-11-openjdk-${TRAVIS_CPU_ARCH}\"",
    "export PATH=\"$JAVA_HOME/bin:$PATH\"",
    "java -version",
    "mvn -version"
  ],
  "script": [
    "mvn clean verify -Pjs-test"
  ]
}

