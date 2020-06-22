import * as React from 'react'
import Card from '../Card'
import { OutlineButton } from '../Button'
import { Container, Grid, Art, Content, Title, Description } from './style'

export default function ResourcesGrid() {
  return (
    <Container>
      <Grid>
        <a
          href="https://recipix-app.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="resource-lbc"
        >
          <Card>
            <Art
              src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Mobile Recipix"
            />

            <Content>
              <Title>Recipix app</Title>
              <Description>
                Cook with over a million recipes
              </Description>
              <OutlineButton>View recipes</OutlineButton>
            </Content>
          </Card>
        </a>

        <a
          href="https://libby-app.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="resource-ddblog"
        >
          <Card>
            <Art src="https://images.unsplash.com/photo-1546953304-5d96f43c2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="Libby App" />

            <Content>
              <Title>Libby App</Title>
              <Description>A closer look at what's worth reading</Description>
              <OutlineButton>Dive in</OutlineButton>
            </Content>
          </Card>
        </a>

        <a href="https://www.michaelstromer.nyc">
          <a data-cy="resource-specifics">
            <Card>
              <Art src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="About" />

              <Content>
                <Title>All the Specifics</Title>
                <Description>Reference guides for developers</Description>
                <OutlineButton>Get specific</OutlineButton>
              </Content>
            </Card>
          </a>
        </a>
      </Grid>
    </Container>
  )
}
