import React from "react";
import "./style.css";
import linkedin from "../../assets/linkedin_logo_72px.png";
import facebook from "../../assets/social_facebook_62px.png";
import youtube from "../../assets/social_youtube_64px.png";
import twitter from "../../assets/twitter_circled_72px.png";
import instagram from "../../assets/social_instagram_64px.png";
import github from "../../assets/github_72px.png";
function Footer() {
  return (
    <div className="pe">
      <fieldset className="container_field_01">
        <legend>Nossas redes</legend>

        <div className="container_div_img">
          <h1>Dev 70x7.</h1>
          <img src={linkedin} alt="logo Linkedin" />
          <img src={facebook} alt="logo facebook" />
          <img src={youtube} alt="logo youtube" />
          <img src={twitter} alt="logo twitter" />
          <img src={instagram} alt="logo instagram" />
          <img src={github} alt="logo instagram" />
        </div>
      </fieldset>

      <fieldset className="container_field_02">
        <legend>Informações</legend>
        <ul className="container_ul_pe">
          <li>Central de Ajuda</li>
          <li>Termos de uso</li>
          <li>Políticas de privacidade</li>
          <li>&copyright</li>
          <li>Desenvolvido por Christiano Quintela</li>
        </ul>
      </fieldset>
    </div>
  );
}

export default Footer;
