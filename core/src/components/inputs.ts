import styled from 'styled-components';
import * as themes from './themes'

export const LabelField = styled.label`
  font-family: 'Lato', Arial, sans-serif !important;
  font-size: ${(props: any) => (props.size ? `${props.size}px` : '20px')};
  line-height: ${(props: any) =>
    props.lineHeight ? `${props.lineHeight}px` : '23px'};
  text-align: ${(props: any) =>
    props.alingCenter ? 'center' : props.alingText ? props.alingText : 'start'};
  font-style: ${(props: any) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props: any) =>
    props.fontWeight ? `${props.fontWeight}` : 'normal'};
  color: ${(props: any) => (props.color ? props.color : '#444444')} !important;
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const TextField = styled.input`
  width: ${(props: any) =>
    props.width
      ? `${props.width}px`
      : props.widthPor
      ? props.widthPor
      : '100px'};
  max-width: ${(props: any) => props.maxWidth};
  height: ${(props: any) => (props.height ? `${props.height}px` : '40px')};
  background: #ffffff;
  border: 1px solid #cfd4d2;
  border-radius: 3px;
  font-size: ${(props: any) => (props.size ? `${props.size}px` : '16px')};
  line-height: ${(props: any) =>
    props.lineHeight ? `${props.lineHeight}px` : '19px'};
  font-family: 'Lato', Arial, sans-serif;
  color: ${(props: any) => (props.color ? props.color : '#444444')};
  font-weight: ${(props: any) => (props.bold ? 'bold' : 'normal')};
  padding-top: ${(props: any) =>
    props.paddingTop ? `${props.paddingTop}px` : '10px'};
  padding-left: ${(props: any) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
  padding-right: ${(props: any) =>
    props.paddingRight ? `${props.paddingRight}px` : '10px'};
  padding-bottom: ${(props: any) =>
    props.paddingBottom ? `${props.paddingBottom}px` : '10px'};
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};

  :focus {
    font-style: normal;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  min-width: ${(props: any) => (props.minWidth ? `${props.minWidth}px` : '196px')};
  max-width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  height: 40px;
  background: #ffffff;
  border: 1px solid #cfd4d2;
  border-radius: 3px;
  font-size: 14px;
  line-height: 16px;
  color: rgba(68, 68, 68, 0.4);
  padding: 10px;
  font-family: 'Lato', Arial, sans-serif;
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Option = styled.option`
  font-family: 'Lato', Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #444;
`;

export const Button = styled.button`
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  width: ${(props: any) => (props.width ? props.width : '100%')};
  height: 40px;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
  border-radius: ${(props: any) =>
    props.borderRadius ? props.borderRadius : '3px'};
  border: ${(props: any) =>
    `1px solid ${props.borderColor ? props.borderColor : themes.primary}`};
  background: ${(props: any) => (props.background ? props.background : themes.primary)};
  letter-spacing: 1px;
  font-weight: bold;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
`;
