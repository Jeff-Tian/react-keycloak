import { createReactKeycloakProvider } from '@keycloak-react/core'

import { KeycloakContext } from './context'

const KeycloakProvider = createReactKeycloakProvider(KeycloakContext)

export { KeycloakProvider }
