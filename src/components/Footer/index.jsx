import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./index.css"

const Footer = () => {
  const date = new Date()

  return (
    <div className="footer">
      <div className='footer__icons'>
        <div>
          <FacebookIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <LinkedInIcon />
        </div>
      </div>
      <p>Copyright ©{date.getFullYear()} All rights reserved </p>
    </div>
  )
}

export default Footer
