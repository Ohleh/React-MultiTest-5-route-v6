import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: rgb(255, 89, 0);
  font-size: 18px;

  background-color: rgb(216, 252, 240);

  &.active {
    color: rgb(255, 0, 85);
  }
`;
