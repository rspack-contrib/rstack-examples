import { type RequestHandler, type SetupMiddlewaresContext, defineConfig, logger } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export const serverRender =
  (serverContext: SetupMiddlewaresContext): RequestHandler =>
  async (_req, res, _next) => {
    const indexModule = await serverContext.environments.ssr.loadBundle<{
      render: () => string;
    }>('index');

    const markup = indexModule.render();

    const template = await serverContext.environments.web.getTransformedHtml('index');

    const html = template.replace('<!--app-content-->', markup);

    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(html);
  };

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    setupMiddlewares: [
      ({ unshift }, serverContext) => {
        const serverRenderMiddleware = serverRender(serverContext);

        unshift(async (req, res, next) => {
          if (req.method === 'GET' && req.url === '/') {
            try {
              await serverRenderMiddleware(req, res, next);
            } catch (err) {
              logger.error('SSR render error, downgrade to CSR...\n', err);
              next();
            }
          } else {
            next();
          }
        });
      },
    ],
  },
  environments: {
    web: {
      output: {
        target: 'web',
      },
      source: {
        entry: {
          index: './src/index',
        },
      },
    },
    ssr: {
      output: {
        target: 'node',
        distPath: {
          root: 'dist/server',
        },
      },
      source: {
        entry: {
          index: './src/index.server',
        },
      },
    },
  },
  html: {
    template: './template.html',
  },
});
