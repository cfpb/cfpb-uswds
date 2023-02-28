import { Grid, GridContainer, SideNav } from '@trussworks/react-uswds';
import Head from 'components/Head';
import type { ReactElement } from 'react';
import React from 'react';

export default function PressReleasePage(): ReactElement {
  const sideNavItems = [
    <a key='sidenav_0' href=''>
      Parent link
    </a>,
    <React.Fragment key='sidenav_1'>
      <a href='' className='usa-current'>
        Current page
      </a>
      <SideNav
        isSubnav
        items={[
          ...Array.from({ length: 1 }).fill(<a href=''>Child link</a>),
          <React.Fragment key='sidenav_1_1'>
            <a href='' className='usa-current'>
              Child link
            </a>
            <SideNav
              isSubnav
              items={[
                ...Array.from({ length: 2 }).fill(
                  <a href=''>Grandchild link</a>
                ),
                <a href='' key='sidenav_1_2' className='usa-current'>
                  Grandchild link
                </a>,
                <a href='' key='sidenav_1_3'>
                  Grandchild link
                </a>,
              ]}
            />
          </React.Fragment>,
          ...Array.from({ length: 3 }).fill(<a href=''>Child link</a>),
        ]}
      />
    </React.Fragment>,
    <a key='sidenav_2' href=''>
      Parent link
    </a>,
  ];

  return (
    <>
      <Head title='CFPB Orders Wells Fargo to Pay $3.7 Billion for Widespread Mismanagement of Auto Loans, Mortgages, and Deposit Accounts | Consumer Financial Protection Bureau' />
      <div className='usa-section'>
        <GridContainer>
          <Grid row gap>
            <Grid desktop={{ col: 3 }}>
              <nav aria-label='Secondary navigation'>
                <SideNav items={sideNavItems} className='ml-4' />
              </nav>
            </Grid>
            <main className='desktop:grid-col-9 usa-prose' id='main-content'>
              <h1>
                CFPB Orders Wells Fargo to Pay $3.7 Billion for Widespread
                Mismanagement of Auto Loans, Mortgages, and Deposit Accounts
              </h1>

              <p className='usa-intro'>
                Company repeatedly misapplied loan payments, wrongfully
                foreclosed on homes and illegally repossessed vehicles,
                incorrectly assessed fees and interest, charged surprise
                overdraft fees, along with other illegal activity affecting over
                16 million consumer accounts
              </p>

              <p>
                <strong>WASHINGTON, D.C.</strong> - The Consumer Financial
                Protection Bureau (CFPB) is ordering Wells Fargo Bank to pay
                more than $2 billion in redress to consumers and a $1.7 billion
                civil penalty for legal violations across several of its largest
                product lines. The bank’s illegal conduct led to billions of
                dollars in financial harm to its customers and, for thousands of
                customers, the loss of their vehicles and homes. Consumers were
                illegally assessed fees and interest charges on auto and
                mortgage loans, had their cars wrongly repossessed, and had
                payments to auto and mortgage loans misapplied by the bank.
                Wells Fargo also charged consumers unlawful surprise overdraft
                fees and applied other incorrect charges to checking and savings
                accounts. Under the terms of the order, Wells Fargo will pay
                redress to the over 16 million affected consumer accounts, and
                pay a $1.7 billion fine, which will go to the CFPB's Civil
                Penalty Fund, where it will be used to provide relief to victims
                of consumer financial law violations.
              </p>

              <p>
                “Wells Fargo’s rinse-repeat cycle of violating the law has
                harmed millions of American families,” said CFPB Director Rohit
                Chopra. “The CFPB is ordering Wells Fargo to refund billions of
                dollars to consumers across the country. This is an important
                initial step for accountability and long-term reform of this
                repeat offender.”
              </p>

              <p>
                Wells Fargo (NYSE: WFC) is one of the nation's largest banks
                serving households across the country. It offers a variety of
                consumer financial services, including mortgages, auto loans,
                savings and checking accounts, and online banking services.
              </p>

              <p>
                According to today’s enforcement action, Wells Fargo harmed
                millions of consumers over a period of several years, with
                violations across many of the bank’s largest product lines. The
                CFPB’s specific findings include that Wells Fargo:
              </p>
            </main>
          </Grid>
        </GridContainer>
      </div>
    </>
  );
}
