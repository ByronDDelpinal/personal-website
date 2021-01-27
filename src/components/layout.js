/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'fontsource-bangers'
import 'fontsource-pt-sans-narrow'
import 'fontsource-pt-sans-narrow/700.css'
import '../styles/index.scss';
import shareImg from '../images/social-share.png';

const Template = ({ children, hideHeader, selectedPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content:
                'byron delpinal, software developer, consultant, engineer, father, husband, akron, ohio',
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:image',
              content: `https://byron.codes${shareImg}`,
            },
            {
              property: 'og:url',
              content: 'https://byron.codes',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'twitter:image',
              content: `https://byron.codes${shareImg}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {hideHeader
          ? null
          : <Header selectedPage={selectedPage}/>
        }
        <div className={`main-content${hideHeader ? ' no-header' : ''}`}>{children}</div>

        <Footer />
      </>
    )}
  />
);

export default Template;
