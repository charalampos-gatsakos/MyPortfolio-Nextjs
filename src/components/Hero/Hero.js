import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi My Name Is Charalampos Gatsakos And I'm a C# ASP.Net FullStack Softwhere Engineer
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Charalampos-Gatsakos?tab=repositories'}>My Github Repositories</Button>
    </LeftSection>

  </Section>
);

export default Hero;