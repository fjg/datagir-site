import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 49rem;
  margin: 0 auto 6rem;
  padding-right: 6.25rem;

  &:before {
    content: '';
    width: 5.25rem;
    margin-right: 1rem;
    background-color: ${(props) =>
      props.color ||
      props.theme.colors[props.sector] ||
      props.theme.colors.main};

    ${(props) => props.theme.mq.small} {
      width: 2.125rem;
    }
  }

  ${(props) => props.theme.mq.medium} {
    padding-right: 0;
  }
`
const Content = styled.div`
  flex: 1;
`
const Title = styled.h1`
  color: ${(props) => props.color};
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem;

  > * {
    margin: 0 0.5rem;
  }

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;

    > * {
      margin: 0 0 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
export default function Landing(props) {
  console.log(props.frontmatter)
  return (
    <Wrapper color={props.frontmatter.color} sector={props.frontmatter.sector}>
      <Content>
        <Title color={props.frontmatter.color}>{props.frontmatter.title}</Title>
        <Text
          dangerouslySetInnerHTML={{
            __html: props.frontmatter.introduction,
          }}
        />
        {props.frontmatter.buttons && (
          <ButtonWrapper>
            {props.frontmatter.buttons.map((button) => (
              <Button
                key={button.label}
                hollow
                color={
                  props.frontmatter.color ||
                  (props.frontmatter.sector === 'all'
                    ? 'main'
                    : props.frontmatter.sector)
                }
                to={button.link}
              >
                {button.label}
              </Button>
            ))}
          </ButtonWrapper>
        )}
      </Content>
    </Wrapper>
  )
}
