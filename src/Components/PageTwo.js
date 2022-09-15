import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <p>5</p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <p>posse</p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
          <p>happy and hungry</p>
        </S.H2>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
          <p>
            will futuro predestinado sem prazo (uma hora ele vai) going to está
            marcado para acontecer
          </p>
        </S.H2>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <p>where, why, what and wich</p>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <p>5 maneira, lugar, tempo, maneira e intensidade</p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <p>Tomorrow is going to rain</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <p>lol</p>
      </S.Box>
    </S.Container>
  );
}
