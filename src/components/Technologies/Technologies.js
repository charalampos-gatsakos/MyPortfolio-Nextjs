import React from 'react';
import {DiReact, DiVisualstudio, DiPhotoshop , DiRasberryPi } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Worked With A Range Of Technologies In The Web Development World.
      From Back-End To The Most Used Front-End Langueges
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React , Angular , Html , Css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            C# ASP.Net , Node.Js , MSSQL 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Adobe</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Premiere-Pro , Aftereffects , Photoshop 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRasberryPi size="3rem" />
        <ListContainer>
          <ListTitle>Rasberry Pi</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Raspbian , DietPi   
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
