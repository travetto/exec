#!/usr/bin/env node

require('@travetto/base/bootstrap').run()
  .then(x => require(process.env.SRC || './simple.parent.ts'));