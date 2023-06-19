import React from 'react';
import { Article, Container, ContentBox, FooterText, Header, Header2, Logo, Position, Position2, Position3 } from './Footer.styled';

export default function Footer() {
  return (
    <Container>
      <ContentBox>
        <Logo src='./sources/Logo2.png' />
        <Header>DEVELOP</Header>
        <Article>
          <Position>FE</Position> | CHO BYUNG MIN
        </Article>
        <Article>
          <Position2>BE</Position2> | PARK SUNG HYUN l CHOI JUNG KYU
        </Article>
        <Article>
          <Position3>AI</Position3> | LEE YOON SANG
        </Article>
        <Header2>DESIGN</Header2>
        <Article>KIM NA YEON | PARK DA YOUNG</Article>
        <FooterText> 2023 AID ALL RIGHT RESERVERD</FooterText>
      </ContentBox>
    </Container>
  );
}
