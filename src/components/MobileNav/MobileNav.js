import React from 'react'
import {User32, Code32,Education32 } from '@carbon/icons-react'

import {Container, Spacer, NavWrapper, NavButton , NavLink } from './styles'

const MobileNav = () => {
    return (
        <Container>
            <Spacer/>
            <NavWrapper>
                <NavLink to="/">
                    <NavButton
                        hasIconOnly
                        renderIcon = {User32}
                        iconDescription = "Me"
                        tooltiPosition = "bottom"
                    />
                </NavLink>
                <NavLink to="/projects">
                    <NavButton
                        hasIconOnly
                        renderIcon = {Code32}
                        iconDescription = "Projects"
                        tooltipPosition = "bottom"
                    />
                </NavLink>
                <NavLink to="/education">
                    <NavButton
                        hasIconOnly
                        renderIcon={Education32}
                        iconDescription="Education"
                        tooltipPosition="bottom"
                    />
                </NavLink>
            </NavWrapper>
        </Container>
    )
}


export default MobileNav