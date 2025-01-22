import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='guanxi-section'>
      <div className="container-pages">
        <div className="large-text">Guanxi</div>
        <div className="content-wrapper-pages">
          <h2 className="subheading">
            {t('about.whoWeAre', 'Who We Are')}
          </h2>
          <p className="description">
            {t(
              'about.specialization',
              'We specialize in the import and export of premium tech hardware, empowering businesses worldwide with reliable and innovative solutions.'
            )}
          </p>
          <p className="description2">
            {t(
              'about.description',
              'At Guanxi International Holdings, we bridge the gap between manufacturers and businesses by providing top-notch tech hardware solutions. Whether it’s sourcing cutting-edge components or delivering custom-built systems, we ensure efficiency, reliability, and unmatched customer service at every step of the process.'
            )}
          </p>
          <a href="/" className="back-home">
            {t('about.backHome', 'Home Page →')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
