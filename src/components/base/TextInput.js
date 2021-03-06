import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.input};
  box-shadow: inset 0 -2px 0 0 ${(props) => props.theme.colors.main};
  border: none;
  border-radius: 0.25rem 0.25rem 0 0;
`
export default function TextInput(props) {
  return (
    <Wrapper>
      {props.label && <Label htmlFor={props.name}>{props.label}</Label>}
      <Input
        type={props.type || 'text'}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.onChange({ value: e.currentTarget.value, name: props.name })
        }}
      />
    </Wrapper>
  )
}
