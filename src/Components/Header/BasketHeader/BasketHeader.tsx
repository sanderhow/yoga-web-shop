import { IconButton, styled } from '@mui/material';
import React from 'react';
import { useBasket } from '../../../Contexts/Basket/BasketContext';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      color: '#9e9e9e'
    },
  }));

const BasketHeader: React.FC = () => {
    const {basketItems, setBasketItems} = useBasket();
    const itemsInBasket = basketItems?.length;
    const navigate = useNavigate();
  
    const moveToBasket = () => {
      navigate(`/basket`);
    }
    
    return (
        <IconButton aria-label="cart">
            <StyledBadge onClick={moveToBasket} badgeContent={itemsInBasket} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}
  
export default BasketHeader;