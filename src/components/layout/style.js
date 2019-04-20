import styled from "styled-components"

export const theme = {
  primaryMuted: "#4d3b84",
  primaryMutedLight: "#b094cc",
  primaryDark: "#422695",
  primary: "transparent",
  primaryLight: "#7945c2",
  primaryWhite: "#e7d7fe",
  secondary: "#f25aa3",
  gray: "rgb(115, 115, 115)",
}

export const Wrapper = styled.div`
  padding-top: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    section {
      margin: 5rem 10rem;
    }
  }
  @media (max-width: 768px) {
    section {
      width: 80%;
      margin: 5rem auto;
    }
  }
`
