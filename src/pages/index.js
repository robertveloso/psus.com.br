import React from 'react';

import SEO from '../components/seo';
import Hero from '../components/hero';
import Content from '../components/content';
import CallToAction from '../components/cta';

const IndexPage = (props) => (
  <>
    <SEO title="Home" />
    <Hero />
    <Content />
    <CallToAction />
  </>
);

export default IndexPage;
