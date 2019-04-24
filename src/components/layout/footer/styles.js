import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.footer`
  background: #183882;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  padding: .25rem;
`

export const InnerDiv = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100vw;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const InternalLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  margin: 2rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: #eee;
    text-decoration: underline;
  }
`
