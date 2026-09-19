import { Router } from 'express';
import { Model } from 'mongoose';

export function createResourceRouter<T>(resourceModel: Model<T>): Router {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const resources = await resourceModel.find().lean();
      response.json(resources);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (request, response, next) => {
    try {
      const resource = await resourceModel.findById(request.params.id).lean();
      if (!resource) {
        response.status(404).json({ error: 'Resource not found' });
        return;
      }
      response.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
