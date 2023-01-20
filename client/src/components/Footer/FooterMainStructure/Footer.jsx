import React from 'react'
import FooterShopInfo from '../FooterShopInfo/FooterShopInfo'
import FooterAboutCompany from '../FooterAboutCompany/FooterAboutCompany'
import { Grid, Box, Hidden } from '@mui/material'
import FooterHelpInfo from '../FooterHelpInfo/FooterHelpInfo'

import FooterBrands from '../FooterBrands/FooterBrands'

import FooterContacts from '../FooterContacts/FooterContacts'
import footerMainStructureStile from './Style'
import FooterMobileVersionComponent from '../FooterMobileVersion/FooterMobileVersion'

const Footer = () => {
  return (
    <footer>
      <Hidden smUp>
        <FooterMobileVersionComponent />
      </Hidden>
      <Hidden smDown>
        <Box sx={footerMainStructureStile.Box}>
          <div style={footerMainStructureStile.div}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 0, sm: 0, md: 0 }}
              justifyContent="space-evenly"
              alignItems="start"
            >
              <Hidden smDown>
                <Grid item lg={3} md={3} justify="center" alignItems="center">
                  <FooterAboutCompany />
                </Grid>
                <Grid item lg={3} md={3} justify="center" alignItems="center">
                  <FooterHelpInfo />
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item lg={3} md={3} justify="center" alignItems="center">
                  <FooterBrands />
                </Grid>
              </Hidden>
              <Hidden smDown>
                <Grid item lg={3} md={3} justify="center" alignItems="center">
                  <FooterContacts />
                </Grid>
              </Hidden>
              {/* <Hidden smUp>
            <Grid sm={12} xs={12}>
              <FooterMobileVersionComponent />
            </Grid>
          </Hidden> */}
            </Grid>
          </div>
          <FooterShopInfo />
        </Box>
      </Hidden>
    </footer>
  )
}

export default Footer
