import styled from 'styled-components';
import * as themes from './themes'

export const Paragraph = styled.p`
  width: ${(props: any) => (props.width ? `${props.width}px` : '100%')};
  font-family: 'Lato', Arial, sans-serif;
  font-size: ${(props: any) => (props.size ? `${props.size}px` : '18px')};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : 'normal')};
  line-height: ${(props: any) =>
    props.lineHeight ? `${props.lineHeight}px` : '29px'};
  color: rgba(68, 68, 68, 0.8);

  @media only screen and (max-width: 490px) {
    font-size: 14px;
    line-height: 29px;
    width: ${(props: any) => (props.widthMobile ? props.widthMobile : '100%')};
  }
`;
