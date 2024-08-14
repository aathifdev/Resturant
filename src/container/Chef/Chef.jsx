import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Food is our common ground, a universal experience. Cooking is an art, but all art requires knowing something about the techniques and materials.</p>
        </div>
        <p className="p__opensans"> The chef should be focused on the target, perfecting each dish. No strict policy is needed for creativity in the kitchen. We believe in simplicity, not complicated recipes or unnecessary rules. Our team is passionate about delivering quality, and just like a well-played football game, every service is a team effort. We always take great care to ensure every dish is prepared to perfection.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef </p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;