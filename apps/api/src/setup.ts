import { join, resolve } from 'path'
import { writeFileSync } from 'fs'

import mkdirp from 'mkdirp'
import dotenv from 'dotenv'

// 加载环境变量
dotenv.config()

// 修改配置文件目录
process.env.NODE_CONFIG_DIR = resolve(__dirname, 'config')

// 引入配置模块
// @ts-ignore
const config = require('config')

const runDir: string = config.get('paths.runDir')
const configMeta = {
  env: process.env.NODE_ENV || 'development',
}

mkdirp.sync(runDir)

writeFileSync(join(runDir, 'application_config.json'), JSON.stringify(config, null, 2), { encoding: 'utf8' })
writeFileSync(join(runDir, 'application_config_meta.json'), JSON.stringify(configMeta, null, 2), { encoding: 'utf8' })
