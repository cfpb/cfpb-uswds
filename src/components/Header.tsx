import {
  ExtendedNav,
  GovBanner,
  Header as USWDSHeader,
  Menu,
  NavDropDownButton,
  NavMenuButton,
  Search,
  Title,
} from '@trussworks/react-uswds';
import type { ReactElement } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(): ReactElement {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navDropdownOpen, setNavDropdownOpen] = useState([false, false]);

  const primaryNavItems = [
    <React.Fragment key='primaryNav_0'>
      <NavDropDownButton
        menuId='extended-nav-section-one'
        isOpen={navDropdownOpen[0]}
        label='Consumer Education'
        onToggle={(): void => {
          handleToggleNavDropdown(0);
        }}
        isCurrent
      />
      <Menu
        id='extended-nav-section-one'
        items={Array.from({ length: 3 }).fill(<a href='#'>Navigation link</a>)}
        isOpen={navDropdownOpen[0]}
      />
    </React.Fragment>,
    <React.Fragment key='primaryNav_1'>
      <NavDropDownButton
        menuId='extended-nav-section-two'
        isOpen={navDropdownOpen[1]}
        label='Rules & Policy'
        onToggle={(): void => {
          handleToggleNavDropdown(1);
        }}
      />
      <Menu
        id='extended-nav-section-two'
        items={Array.from({ length: 3 }).fill(<a href='#'>Navigation link</a>)}
        isOpen={navDropdownOpen[1]}
      />
    </React.Fragment>,
    <a key='primaryNav_2' className='usa-nav__link' href='javascript:void(0)'>
      <span>Simple link</span>
    </a>,
  ];

  const secondaryNavItems = [];

  const handleToggleNavDropdown = (index: number): void => {
    setNavDropdownOpen(previousNavDropdownOpen => {
      const newOpenState = Array.from({
        length: previousNavDropdownOpen.length,
      }).fill(false);

      newOpenState[index] = !previousNavDropdownOpen[index];
      return newOpenState;
    });
  };

  const toggleMobileNav = (): void => {
    setMobileNavOpen(previousOpen => !previousOpen);
  };

  const handleSearch = (): void => {
    /* */
  };

  return (
    <>
      <a className='usa-skipnav' href='#main-content'>
        Skip to main content
      </a>
      <GovBanner />
      <div className={`usa-overlay ${mobileNavOpen ? 'is-visible' : ''}`} />
      <USWDSHeader extended>
        <div className='usa-navbar'>
          <Title id='extended-logo'>
            <Link to='/' title='Home' aria-label='Home'>
              <img
                alt='Consumer Financial Protection Bureau'
                height='50'
                sizes='(max-width: 900px) 161px,
                237px'
                src='https://www.consumerfinance.gov/static/img/logo_237x50@2x.png'
                width='237'
              />
            </Link>
          </Title>
          <NavMenuButton
            label='Menu'
            onClick={toggleMobileNav}
            className='usa-menu-btn'
          />
        </div>
        <ExtendedNav
          aria-label='Primary navigation'
          primaryItems={primaryNavItems}
          secondaryItems={secondaryNavItems}
          onToggleMobileNav={toggleMobileNav}
          mobileExpanded={mobileNavOpen}
        >
          <Search size='small' onSubmit={handleSearch} placeholder='Search' />
        </ExtendedNav>
      </USWDSHeader>
    </>
  );
}
