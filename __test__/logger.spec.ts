
import { v4 as uuid } from 'uuid';

import Logger from '../src/logger'


const logger = new Logger('app-sobrou-aqui', 'development');

const mockPromise = () => new Promise((resolve, _) => setTimeout(() => resolve(true), 100));

it("should exec all operators of the logging class", async () => {
  logger.info('info logdata empty');
  logger.info('info logdata no empty', { firstName: 'any', lastName: 'any' });

  logger.error('error logdata empty');
  logger.error('error logdata no empty', { firstName: 'any', lastName: 'any' });

  logger.warn('warn logdata empty');
  logger.warn('warn logdata no empty', { firstName: 'any', lastName: 'any' });

  logger.debug('debug logdata empty');
  logger.debug('debug logdata no empty', { firstName: 'any', lastName: 'any' });

  logger.trace('trace logdata empty');
  logger.trace('trace logdata no empty', { firstName: 'any', lastName: 'any' });

  logger.time('time logging');
  await mockPromise();
  logger.timeEnd('time logging');
})