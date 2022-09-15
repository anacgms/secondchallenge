import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <p>HTTPS means Hypertext Transfer Protocol Secure. </p>
        <S.H2>Stateless is...?</S.H2>
        <p>Stateless é uma requisição que permanece num estado de comunicação, ou seja não muda </p>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <p>o sujeito</p>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <p>the polite trio (o trio educado)</p>
        <S.H2>What Should means?</S.H2>
        <p>deveria</p>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <p>we will talk great thing about you!</p>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <p>He is going to Bahia next month</p>
          <li>3 - Ela estará ai amanhã</li>
          <p>She is going to be there tomorrow</p>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <p>they</p>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <p>I was, you Were, he was, she was, it was, they were, we were</p>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
          <p>those apples are rotten - These post its are usefull</p>
        </S.H3>
      </S.Box>
    </S.Container>
  );
}
