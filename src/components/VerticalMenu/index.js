import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuLink } from "./styles"
import IconPageOne from "../../assets/images/icon-page-one.png"
import IconPageTwo from "../../assets/images/icon-page-two.png"

class VerticalMenu extends React.Component {
    state = {
        path: window.location.pathname
    }

    componentDidMount = () => {
        this.setState({
            path: window.location.pathname
        })
    }

    render() {
        return(
            <Menu>
                {console.log(this.props)}
                <div>Semantix</div>
                <nav>
                    <ul>
                        <MenuLink className={this.state.path === '/' ? "active" : null}>
                            <Link to={'/'}>
                                <img src={IconPageOne} alt="Page One" />
                                <div>Page 1</div>
                            </Link>
                        </MenuLink>
                        <MenuLink className={this.state.path === '/page-two' ? "active" : null}>
                            <Link to={'/page-two'}>
                                <img src={IconPageTwo} alt="Page One" />
                                <div>Page 2</div>
                            </Link>
                        </MenuLink>
                    </ul>
                </nav>
            </Menu>
        )

    }
}

export default VerticalMenu
