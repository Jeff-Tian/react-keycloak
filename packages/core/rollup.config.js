import generateRollupConfig from '../../config/rollup.config'

export default generateRollupConfig(
  'react-keycloak-core',
  true // No need to bundle for web usage, @keycloak-react/web already bundle this
)
