import styled from 'styled-components';
import * as themes from './themes'

export const Container = styled.div`
  display: ${(props: any) => (props.mobile ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: ${(props: any) => (props.center ? 'center' : 'flex-start')};
  background-color: ${(props: any) => props.color};
  width: ${(props: any) => (props.width ? `${props.width}%` : '100%')};
  padding-top: ${(props: any) =>
    props.paddingTop ? `${props.paddingTop}px` : '0px'};
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  cursor: ${(props: any) => (props.pointer ? 'pointer' : '')};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  z-index: ${(props: any) => props.zInidex};

  @media only screen and (max-width: 900px) {
    display: ${(props: any) => (props.mobile ? 'flex' : 'none')};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: any) => (props.width ? `${props.width}` : '100%')};
  justify-content: ${(props: any) => (props.center ? 'center' : 'flex-start')};
  align-items: ${(props: any) => props.alignItems};
  background: ${(props: any) => (props.color ? props.color : '#FFFFFF')};
  box-shadow: ${(props: any) =>
    props.boxShadow ? '3px 5px 20px rgba(68, 68, 68, 0.12)' : 'none'};
  border-radius: ${(props: any) => (props.radius ? `${props.radius}px` : '5px')};
  border: ${(props: any) =>
    props.border
      ? `2px solid ${props.borderColor ? props.borderColor : themes.primary}`
      : '0px solid #FFFFFF'};
  height: ${(props: any) => (props.height ? `${props.height}px` : '')};
  max-width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  min-width: ${(props: any) => (props.minWidth ? `${props.minWidth}px` : '0px')};
  min-height: ${(props: any) => (props.minHeight ? `${props.minHeight}px` : '0px')};
  padding-top: ${(props: any) =>
    props.paddingTop ? `${props.paddingTop}px` : '14px'};
  padding-left: ${(props: any) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
  padding-right: ${(props: any) =>
    props.paddingRight ? `${props.paddingRight}px` : '20px'};
  padding-bottom: ${(props: any) =>
    props.paddingBottom ? `${props.paddingBottom}px` : '14px'};
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  box-shadow: ${(props: any) =>
    props.shadow ? '0px 10px 20px rgba(68, 68, 68, 0.08)' : ''};
  cursor: ${(props: any) => (props.pointer ? 'pointer' : 'normal')};
  z-index: ${(props: any) => props.zInidex};
`;

export const Row = styled.div`
  display: flex;
  width: ${(props: any) => props.width};
  justify-content: ${(props: any) =>
    props.center ? 'center' : props.flexTop ? 'flex-start' : 'space-between'};
  flex-direction: ${(props: any) =>
    props.flexDirection
      ? props.flexDirection
      : props.reverse
      ? 'row-reverse'
      : 'row'};
  flex-wrap: ${(props: any) => (props.wrap ? 'wrap' : '')};
  align-items: ${(props: any) => (props.flexStart ? 'flex-start' : 'center')};
  min-width: ${(props: any) => (props.minWidth ? `${props.minWidth}px` : '0px')};
  max-width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  padding-top: ${(props: any) =>
    props.paddingTop ? `${props.paddingTop}px` : '0px'};
  padding-bottom: ${(props: any) =>
    props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
  padding-left: ${(props: any) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
  padding-right: ${(props: any) =>
    props.paddingRight ? `${props.paddingRight}px` : '0px'};
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};

  @media only screen and (max-width: 905px) {
    justify-content: ${(props: any) =>
      props.centerMobile
        ? 'center'
        : props.center
        ? 'center'
        : props.flexTop
        ? 'flex-start'
        : 'space-between'};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: any) => props.width};
  align-items: ${(props: any) =>
    props.flexStart ? 'flex-start' : props.flexEnd ? 'flex-end' : 'center'};
  justify-content: ${(props: any) => (props.flexTop ? 'flex-start' : 'center')};
  background-color: ${(props: any) => (props.color ? props.color : '')};
  min-width: ${(props: any) => (props.minWidth ? `${props.minWidth}px` : '0px')};
  min-height: ${(props: any) => (props.minHeight ? `${props.minHeight}px` : '')};
  max-width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props: any) =>
    props.gridColumns ? props.gridColumns : 'auto'};
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  grid-gap: 10px;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  margin-top: ${(props: any) => (props.marginTop ? `${props.marginTop}px` : '20px')};
  margin-bottom: ${(props: any) =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  margin-left: ${(props: any) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props: any) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  padding-top: ${(props: any) =>
    props.paddingTop ? `${props.paddingTop}px` : '0px'};
  padding-bottom: ${(props: any) =>
    props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
  padding-left: ${(props: any) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
  padding-right: ${(props: any) =>
    props.paddingRight ? `${props.paddingRight}px` : '0px'};
`;
