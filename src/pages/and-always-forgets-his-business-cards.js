import React from 'react';
import Helmet from 'react-helmet';
import { saveAs } from 'file-saver';
import vCardsJS from 'vcards-js';

import { bbMe } from '../images/base64/index';
import heroSoloImage from '../images/header-solo-purple.png';
import Layout from '../components/layout';

const AndAlwaysForgetsHisBusinessCards = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const vCard = vCardsJS();

  vCard.firstName = 'Byron';
  vCard.middleName = 'Dylan';
  vCard.lastName = 'Delpinal';
  vCard.organization = 'Branding Brand';
  vCard.photo.embedFromString(bbMe);
  vCard.logo.embedFromString(bbMe);
  vCard.cellPhone = '330-993-0543';
  vCard.email = 'byronddelpinal@gmail.com';
  vCard.birthday = new Date(1990, 0, 24);
  vCard.title = 'Engineer Manager';
  vCard.url = 'https://byron.codes';
  vCard.version = '3.0';

  const handleContactClick = () => {
    const vcardBlob = new Blob([vCard.getFormattedString()], {
      type: 'text/vcard;charset=utf-8',
    });
    saveAs(vcardBlob, 'byron-delpinal.vcf');
  };

  return (
    <div className="and-always-forgets-his-business-cards">
      <Helmet title={siteTitle} />
      <Layout hideHeader={true}>
        <div className="hero">
          <h1 className="hero--header">
            Hey, I'm Byron{' '}
            <span aria-label="hand waving" role="img">
              👋🏼
            </span>
          </h1>
          <h3 className="hero--sub-header">
            I love writing software, managing engineering teams, being outside,
            giving back to my community, and spending time with my family.
          </h3>
          <h3 className="hero--sub-header unnecessary">
            I suck at carrying around business cards, so I made this. The Earth
            says thanks. 💚🌳
          </h3>
          <h3 className="hero--sub-header">
            Phone: <a href="tel:330-993-0543">(330)993-0543</a>
          </h3>
          <h3 className="hero--sub-header">
            Email:{' '}
            <a href="mailto:byronddelpinal@gmail.com">
              byronddelpinal@gmail.com
            </a>
          </h3>
          <img
            className="hero--right"
            src={heroSoloImage}
            alt="me in a purple hoodie that reads Everyday Akron"
          />
          <button className="button" onClick={handleContactClick}>
            Download Contact Card
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default AndAlwaysForgetsHisBusinessCards;

export const pageQuery = graphql`
  query AndAlwaysForgetsHisBusinessCardsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
