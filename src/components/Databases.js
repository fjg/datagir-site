import React from 'react'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/tile'

export default function Databases() {
  return (
    <Section>
      <Section.Title>Nos Jeux de Données</Section.Title>
      <Tile.Wrapper>
        <Tile
          title={'Base Carbone'}
          image={'https://fakeimg.pl/250x100/'}
          link={'/simulateurs/monimpacttransport'}
          margin
        />
        <Tile
          title={'Agribalyse'}
          image={'https://fakeimg.pl/250x100/'}
          link={'/simulateurs/monimpacttransport'}
          color={'alimentation'}
          margin
        />
      </Tile.Wrapper>
    </Section>
  )
}