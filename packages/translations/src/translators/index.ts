import { BuilderContext } from '@angular-devkit/architect'

import DeeplTranslator from './deepl.translator'
import { BaseConfigFile } from '../utils/config-file'

export const getTranslator = (context: BuilderContext, config: BaseConfigFile): DeeplTranslator => {

  switch (config.translator) {
    case 'free-deepl':
      return new DeeplTranslator(context, config, 'https://api-free.deepl.com')

    case 'deepl':
      return new DeeplTranslator(context, config, 'https://api.deepl.com')

    // case 'itranslate':
    // TODO:: https://www.itranslate.com/itranslate-translation-api-contact-form

    default:
      context.logger.warn(`"${config.translator}" is not an valid translator!`)
      return null
  }
}