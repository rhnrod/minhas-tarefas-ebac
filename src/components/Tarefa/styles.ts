import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: #e1a32a;
  border-radius: 8px;
  margin-bottom: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  background-color: transparent;
  border: none;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  resize: none;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;

  background-color: #2f3640;
  color: #fff;

  border: none;
  border-radius: 8px;
  cursor: pointer;
`
