import axios from 'axios';
import { Request, Response } from 'express';

async function getById(req: Request, res: Response) {
  if (!req.params.id) {
    return;
  }

  const restaurantId = req.params.id;

  const response = await axios.get(
    `https://storage.googleapis.com/coding-session-rest-api/${restaurantId}`
  );

  res.status(200).json({
    data: {
      name: response.data.displayed_what,
      location: response.data.displayed_where,
      opening_hours: response.data.opening_hours,
    },
  });
}

export default { getById };
