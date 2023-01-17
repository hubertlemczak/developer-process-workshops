import React from 'react';
import RestaurantDetails from './RestaurantDetails';

describe('<RestaurantDetails />', () => {
  it('renders', () => {
    const props = {
      name: 'restaurant',
      location: 'idk where',
      formattedOpeningTimes: [
        {
          days: 'monday - friday',
          openingHours: '11:00 - 15:00\n17:00 - 22:00',
        },
      ],
    };

    cy.viewport(1200, 600);
    cy.mount(<RestaurantDetails {...props} />);
  });
});
