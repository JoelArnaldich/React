import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { CContainer, CSpinner, CButton } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/hola') // Cambia '/hola' por la ruta a la que deseas redirigir
  }

  return (
    <CContainer className="px-4" lg>
      <CButton color="primary" onClick={handleButtonClick} style={{ marginBottom: '20px' }}>
        Ir a Hola
      </CButton>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
