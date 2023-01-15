import express from 'express';

import restaurantsController from './controllers/restaurants.controller';

const api = express.Router();

api.get('/restaurants/:id', restaurantsController.getById);

export default api;
