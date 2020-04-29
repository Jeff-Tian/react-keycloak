import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <small className="text-muted">
          Repo:&nbsp;
          <a href="https://github.com/jeff-tian/keycloak-react">
            https://github.com/jeff-tian/keycloak-react
          </a>
        </small>
      </div>
    </footer>
  )
}
