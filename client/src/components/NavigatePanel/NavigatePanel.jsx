import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useBreadCrumb } from '../../hooks/useBreadCrumb'

const NavigatePanel = ({ startFrom }) => {
  const { navigate, pathNames, reNavigate } = useBreadCrumb()
  return (
    <Breadcrumbs>
      <Link
        style={{ cursor: 'pointer', textDecoration: 'none' }}
        onClick={reNavigate}
      >
        {startFrom}
      </Link>
      {pathNames.map((pathname, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
        const isLast = index === pathNames.length - 1
        return isLast ? (
          <Typography key={pathname}>{pathname}</Typography>
        ) : (
          <Link
            style={{ cursor: 'pointer' }}
            key={index}
            onClick={() => navigate(routeTo)}
          >
            {pathname}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default NavigatePanel
