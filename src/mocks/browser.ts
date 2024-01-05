/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { setupWorker } from 'msw/browser'
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

window.msw = {
  worker
};
