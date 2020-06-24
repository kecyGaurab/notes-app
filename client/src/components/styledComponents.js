import { Card, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const StyledCard = styled(Card)`
  ${(props) => {
    return css`
      height: ${props.extended === true ? ' 590px' : '380px'};
    `;
  }}
`;
export const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${() => {
    return css`
      color: red;
    `;
  }}
`;

export const StyledLink = styled(Typography)`
  ${() => {
    return css`
      padding-top: '8px';
    `;
  }}
`;

// export const StyledLinkRouter = styled(Link)`
//   ${(props) => {
//     return css`
//       text-decoration: none;
//     `;
//   }}
// `;
