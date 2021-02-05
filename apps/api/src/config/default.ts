import path from 'path'

import { ListenOptions } from 'net'

import { deferConfig } from 'config/defer'
import toInteger from 'lodash/toInteger'

export = {
  proxy: false,
  keys: ['7s7dauol8vn6o800'],
  paths: {
    rootDir: path.resolve(__dirname, '../..'),
    runDir: deferConfig(function resolver() {
      return path.join(this.paths.rootDir, 'run')
    }),
  },
  listen: <ListenOptions>{
    port: toInteger(process.env.PORT || 7300),
  }
}
