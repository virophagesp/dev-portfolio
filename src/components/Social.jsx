import { useContext } from 'react';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/github'
import 'react-social-icons/email'
import { ThemeContext } from 'styled-components';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const data = {
    "social": [
      {
        "network" : "github",
        "href": "https://github.com/virophagesp"
      },
      {
        "network" : "email",
        "href": "mailto:jose.berger77777@gmail.com"
      }
    ]
  };

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          fgColor={theme.background}
          target="_blank"
          rel="noopener"
        />
      )) : null}
    </div>
  );
}

export default Social;
