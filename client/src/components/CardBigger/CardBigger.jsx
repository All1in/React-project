import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
import Favorite from '@mui/icons-material/Favorite'
import Visibility from '@mui/icons-material/Visibility'
import CreateNewFolder from '@mui/icons-material/CreateNewFolder'
import PropTypes from 'prop-types'
import styles from './CardBigger.module.scss'
import SaleBlock from '../UI/SaleBlock/SaleBlock'
import ActualPrice from '../UI/ActualPrice/ActualPrice'

const CardBigger = (props) => {
  const {
    brand,
    currentPrice,
    categories,
    imageUrls,
    name,
    redirectToCard,
    previousPrice,
  } = props
  console.log('brand: ', brand)
  return (
    <div className={styles.cardBigger}>
      <Card
        onClick={redirectToCard}
        sx={{
          width: 400,
          marginRight: '20px',
          bgcolor: 'initial',
          boxShadow: 'none',
          '--Card-padding': '0px',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img src={`${imageUrls[1]}`} loading="lazy" alt="trainers" />
            </figure>
          </AspectRatio>
          <CardCover
            className="gradient-cover"
            sx={{
              '&:hover, &:focus-within': {
                opacity: 1,
              },
              opacity: 0,
              transition: '0.1s ease-in',
              background:
                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
            }}
          >
            <Box>
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  flexGrow: 1,
                  alignSelf: 'flex-end',
                }}
              >
                <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                  <Link
                    // href="#dribbble-shot"
                    overlay
                    underline="none"
                    sx={{
                      color: '#fff',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    {brand}
                  </Link>
                </Typography>
                <IconButton size="sm" color="neutral" sx={{ ml: 'auto' }}>
                  <CreateNewFolder />
                </IconButton>
                <IconButton size="sm" color="neutral">
                  <Favorite />
                </IconButton>
              </Box>
            </Box>
          </CardCover>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 1.5,
            justifyContent: 'spaceBetween',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
              {categories}
              {previousPrice && <SaleBlock />}
            </Typography>
          </Box>
          <Link
            style={{ display: 'flex', flexDirection: 'column' }}
            // href="#dribbble-shot"
            level="body3"
            underline="none"
            startDecorator={<Visibility />}
            sx={{
              fontWeight: 'md',
              color: 'text.secondary',
              '&:hover': { color: 'primary.plainColor' },
            }}
          >
            <span>{currentPrice}₴</span>
            {previousPrice ? (
              <ActualPrice previousPrice={previousPrice} />
            ) : (
              previousPrice
            )}
          </Link>
        </Box>
      </Card>
    </div>
  )
}

CardBigger.propTypes = {
  brand: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
  imageUrls: PropTypes.array.isRequired,
  isCardsLoading: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  view: PropTypes.bool.isRequired,
  myCustomParam: PropTypes.string.isRequired,
}

CardBigger.defaultProps = {
  element: 'Posts',
  brand: 'Nike',
  currentPrice: 7000,
  categories: 'for men',
  imageUrls: [],
  isCardsLoading: false,
}

export default CardBigger
