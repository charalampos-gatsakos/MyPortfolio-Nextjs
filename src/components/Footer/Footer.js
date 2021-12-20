import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:69-78-200-620">6978200620</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="https://www.google.com/search?q=charalamposgatsakos%40gmail.com&oq=charalamposgatsakos%40gmail.com&aqs=chrome..69i57j69i58j69i61l2.8728j0j7&sourceid=chrome&ie=UTF-8">chralamposgatsakos@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
     <SocialContainer>
          <CompanyContainer>
            <Slogan>First Solve The Problem Then, Write The Code</Slogan>
            <Slogan>"Go One More"</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/Charalampos-Gatsakos">
        <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/charalampos-gatsakos-66a069201/">
        <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.instagram.com/daddy_gats/">
        <AiFillInstagram size="3rem" />
     </SocialIcons>
     </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
