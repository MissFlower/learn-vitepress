import fs from 'fs'
import path from 'path'
import { docRoot } from './path'

export const languages =['en-US']

export const ensureLang = (lang: string) => `/${lang}`

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0]
