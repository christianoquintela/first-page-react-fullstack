//Css
import classes from './footer.module.css';

//img
import linkedin from '../../assets/linkedin_logo_72px.png';
import facebook from '../../assets/social_facebook_62px.png';
import youtube from '../../assets/social_youtube_64px.png';
import twitter from '../../assets/twitter_circled_72px.png';
import instagram from '../../assets/social_instagram_64px.png';
import github from '../../assets/github_72px.png';
import Logo70x7 from '../../components/logo70x7/logo70x7';
function Footer() {
  return (
    <div className={classes.pe}>
      <div className={classes.container_field_01}>
        <h2>Nossas redes</h2>

        <div className={classes.container_div_img}>
          <Logo70x7 />
          <img src={linkedin} alt='logo Linkedin' />
          <img src={facebook} alt='logo facebook' />
          <img src={youtube} alt='logo youtube' />
          <img src={twitter} alt='logo twitter' />
          <img src={instagram} alt='logo instagram' />
          <img src={github} alt='logo instagram' />
        </div>
      </div>

      <div className={classes.container_field_02}>
        <h2>Informações</h2>
        <ul className={classes.container_ul_pe}>
          <li>Central de Ajuda</li>
          <li>Termos de uso</li>
          <li>Políticas de privacidade</li>
          <li>&copyright</li>
          <li>Desenvolvido por Christiano Quintela</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
