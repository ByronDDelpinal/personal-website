import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Share = ({ socialConfig }) => {
  return (
    <div className="post-social">
      <FacebookShareButton
        url={socialConfig.config.url}
        quote={`${socialConfig.config.quote} #${socialConfig.config.hashtag}`}
        className="button is-outlined is-rounded facebook"
      >
        <span className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        {
          !socialConfig.isMinimal && <span className="text">Facebook</span>
        }
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.quote}
        hashtags={[socialConfig.config.hashtag]}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        {
          !socialConfig.isMinimal && <span className="text">Twitter</span>
        }
      </TwitterShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded linkedin"
        title={`${socialConfig.config.quote} #${socialConfig.config.hashtag}`}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
        {
          !socialConfig.isMinimal && <span className="text">LinkedIn</span>
        }
      </LinkedinShareButton>
    </div>
  );
};

Share.propTypes = {
  socialConfig: PropTypes.shape({
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      hashtag: PropTypes.string,
    }),
  }).isRequired,
};
Share.defaultProps = {};

export default Share;
