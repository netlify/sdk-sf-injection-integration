import type {
  BackgroundHandler,
  HandlerEvent,
  HandlerContext,
} from '@netlify/functions';

export const handler: BackgroundHandler = (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  (async () => {
    for (let i = 0; i <= 60; i++) {
      const date = new Date();
      await sleep(1000);
      console.log(date.toLocaleString(), i);
    }
    console.log('Done');
  })();
};

export const config = {
  path: '/count',
};
