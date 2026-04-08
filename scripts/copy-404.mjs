import { copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const dist = join(root, '..', 'dist')
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('Copied dist/index.html -> dist/404.html')
