import styled from "@emotion/styled";
import { mobileBreakpoint, tabletBreakpoint } from "../../utils/utils";

export const BasketWrapper = styled.div`
  display: contents;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  margin-right: 50px;
  gap: 20px;
  @media screen and (min-width: ${mobileBreakpoint}) and (max-width: ${tabletBreakpoint}) {
    width: 100%;
    margin: auto;
    display: flex;
  }
`;

export const BasketWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  @media screen and (min-width: ${mobileBreakpoint}) and (max-width: ${tabletBreakpoint}) {
    width: 45%;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 78%;
  @media (max-width: ${tabletBreakpoint}) {
    width: 200px;
    height: 30px;
    margin: 0;
    display: flex;
  }
`;

export const ProductPhoto = styled.img`
  object-fit: contain !important;
  background-color: white;
  padding: 20px 0 !important;
`;
