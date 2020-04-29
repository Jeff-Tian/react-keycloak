import { createReactKeycloakProvider } from '@keycloak-react/core'

import context from './context'

const reactKeycloakProvider = createReactKeycloakProvider(context)

export default reactKeycloakProvider
