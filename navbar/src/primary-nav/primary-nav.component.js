import React from "react";
import styles from "./primary-nav.css";
import { NavLink } from "react-router-dom";

export default class PrimaryNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = { client: null };

    this.handleBuy = this.handleBuy.bind(this);
  }

  componentDidMount() {
    window.addEventListener("buy", this.handleBuy);
  }

  componentWillUnmount() {
    window.removeEventListener("buy", this.handleBuy);
  }

  handleBuy(event) {
    this.setState({ client: event.detail.client });
  }

  render(props) {
    return (
      <nav className={styles.primaryNav}>
        <ul>
          <li>
            <NavLink
              to="/clients"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Client list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={styles.navLink}
              activeClassName={styles.activeClassName}
            >
              Account settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app1"
              className={styles.navLink}
              activeClassName={styles.activeClassName}
            >
              App1
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            Bought:{" "}
            {this.state.client
              ? this.state.client.first_name + " " + this.state.client.last_name
              : "None"}
          </li>
          <li>
            <a
              href="https://github.com/polyglot-microfrontends"
              className={styles.navLink}
            >
              Code / Documentation
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
