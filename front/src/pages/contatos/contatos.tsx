//Css
import classes from './contatos.module.css';

//img
import linkedin from '../../assets/linkedin_logo_72px.png';
import facebook from '../../assets/social_facebook_62px.png';
import youtube from '../../assets/social_youtube_64px.png';
import twitter from '../../assets/twitter_circled_72px.png';
import instagram from '../../assets/social_instagram_64px.png';
import github from '../../assets/github_72px.png';
// import Logo70x7 from '../../components/logo70x7/logo70x7';
// import { Link } from 'react-router-dom';
function Contatos() {
  return (
    <section className={classes.contatos}>
      {/* <div>
            <Link to='/'>
              <Logo70x7 />
              <p>Home</p>
            </Link>
          </div> */}
          <h1>Contatos</h1>

          <section className={classes.section}>

      <div className={classes.link_externo}>
        <a
          href='http://linkedin.com/in/christianoquintela'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='logo Linkedin' />
          <p>LinkedIn</p>
        </a>
      </div>

      <div className={classes.link_externo}>
        <a href='http://facebook.com'>
          <img src={facebook} alt='logo facebook' /> <p>Facebook</p>
        </a>
      </div>
      <div className={classes.link_externo}>
        <a href='http://youtube.com'>
          <img src={youtube} alt='logo youtube' />
          <p>Youtube</p>
        </a>
      </div>
      <div className={classes.link_externo}>
        <a href='http://twitter.com'>
          <img src={twitter} alt='logo twitter' />
          <p>Twitter</p>
        </a>
      </div>
      <div className={classes.link_externo}>
        <a href='http://instagram.com'>
          <img src={instagram} alt='logo instagram' />
          <p>Instagram</p>
        </a>
      </div>
      <div className={classes.link_externo}>
        <a href='http://github.com/christianoquintela'>
          <img src={github} alt='logo instagram' />
          <p>Github</p>
        </a>
      </div>
          </section>
    </section>
  );
}

export default Contatos;
